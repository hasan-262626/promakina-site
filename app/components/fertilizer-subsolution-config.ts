import { getSectorCardBySlug } from "./sector-subsectors-data";
import { trText } from "../lib/tr-text";

export type SubsolutionCard = {
  title: string;
  text: string;
};

export type SubsolutionFaq = {
  question: string;
  answer: string;
};

export type SubsolutionFormField = {
  id: string;
  label: string;
  type: "text" | "number" | "select";
  required?: boolean;
  options?: string[];
  unit?: string;
};

export type FertilizerSubsolutionConfig = {
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  rawMaterials: string[];
  namingExplanation: string;
  namingNote: string;
  offerCards: SubsolutionCard[];
  equipmentTitle: string;
  equipment: SubsolutionCard[];
  criticalTopics: SubsolutionCard[];
  faqs: SubsolutionFaq[];
  formTitle: string;
  formDescription: string;
  formFields: SubsolutionFormField[];
};

const fertilizerSector = getSectorCardBySlug("gubre-ve-granulasyon-tesisleri");

const liquidLinkSlugs = [
  "sivi-organomineral",
  "sivi-npk",
  "sivi-amino-asit",
  "organik-sivi-gubre",
  "organik-biyostimulan",
];

const granuleLinkSlugs = ["granul-organomineral", "granul-npk", "granul-kompost-tesisleri"];
const powderLinkSlugs = ["toz-organomineral", "toz-npk"];

function pickLinks(slugs: string[]) {
  return fertilizerSector ? fertilizerSector.subLinks.filter((item) => slugs.includes(item.slug)) : [];
}

export const liquidRelatedLinks = pickLinks(liquidLinkSlugs);
export const granuleRelatedLinks = pickLinks(granuleLinkSlugs);
export const powderRelatedLinks = pickLinks(powderLinkSlugs);

export function getFertilizerRelatedLinks(subsector: string) {
  if (liquidLinkSlugs.includes(subsector)) return liquidRelatedLinks;
  if (granuleLinkSlugs.includes(subsector)) return granuleRelatedLinks;
  if (powderLinkSlugs.includes(subsector)) return powderRelatedLinks;
  return [];
}

const liquidEquipmentTitle = "Sıvı gübre üretiminde kullanılan ba_lıca makine ve ekipmanlar";
const granuleEquipmentTitle = "Granül gübre üretiminde kullanılan ba_lıca makine ve ekipmanlar";
const powderEquipmentTitle = "Toz gübre üretiminde kullanılan ba_lıca makine ve ekipmanlar";

const liquidEquipment: SubsolutionCard[] = [
  { title: "çözündürme Tanklar?", text: "Kat? ve sıvı hammaddelerin kontrollü biçimde çözündür?lmesi için tank sistemleri." },
  { title: "Kar1_tır?c?l? Tanklar", text: "Farkl? bileşenlerin dengeli birle?imi için kar??tırma ve proses hazırlama tanklar?." },
  { title: "Homojenizatör", text: "Partiler aras? kalite fark?n? azaltmak ve ürün stabilitesini artırmak için homojenizasyon çöz?mleri." },
  { title: "Filtre Sistemleri", text: "Dolum öncesi berraklık ve proses güvenliği için uygun filtrasyon kademeleri." },
  { title: "soğutma Tanklar?", text: "sıcaklık yönetimi ve ürün kararlılığı için proses destek tanklar?." },
  { title: "Stok / Mamul Tanklar?", text: "Dolum öncesi mamul ?rının güvenli ?ekilde bekletilmesi ve dengelenmesi için tank sistemleri." },
  { title: "Dozajlama Sistemleri", text: "Sıvı ve kat? bileşenlerin reçeteye uygun kontrollü beslenmesi için dozaj altyapıs?." },
  { title: "Sıvı Dolum ?zi?eleme", text: "?zi?e, bidon veya özel ambalaj yap?lar? için hassas sıvı dolum çöz?mleri." },
  { title: "?zi?e Etiketleme Makinas?", text: "Son ?rının d?zgün, h?zl? ve standart etiketlenmesi için etiketleme sistemleri." },
];

const granuleEquipment: SubsolutionCard[] = [
  { title: "Ham Madde Besleme ve Dozajlama Sistemleri", text: "Granül reçetesine uygun kontrollü hammadde besleme ve tartüm altyapıs? sağlar." },
  { title: "Kar1_tır?c?lar", text: "Granülasyon öncesi hammaddelerin homojen biçimde hazırlanmas? için karışım ekipmanlarıd?r." },
  { title: "Granülatür Tamburu", text: "Reçeteye uygun granül yapısının olu?mas? için ana ?ekillendirme ve granülasyon ekipman?d?r." },
  { title: "Kurutma Tamburu", text: "Granül ?rının hedef neme ula?mas? ve stabil hale gelmesi için kontrollü kurutma sağlar." },
  { title: "Eleme Sistemleri", text: "Tane boyutu standardını korumak ve geri dönüş akışın? ay?rmak için sınıflandırma yapar." },
  { title: "soğutma Tamburu", text: "Kurutma sonras? ürün s?caklığın? dengeleyerek son ürün kararlılığın? artır?r." },
  { title: "Kaplama Tamburu", text: "Ak??kanl?k, yüzey kalitesi ve ürün dayanım? için kaplama veya son i?lem ad?mların? destekler." },
  { title: "Toz Toplama Sistemleri", text: "Granül hatlarında çevresel güvenlik ve proses temizliği için toz kontrolü sağlar." },
  { title: "Paketleme ve Paletleme çöz?mleri", text: "Son ?rının torbalanmas?, istiflenmesi ve sevkiyata hazırlanmas? için entegre son hat çöz?mleridir." },
];

const granuleCompostEquipment: SubsolutionCard[] = [
  { title: "Ham Madde Besleme ve Dozajlama Sistemleri", text: "Kompost bazli hammaddelerin kontrollü hatta alinmasi ve reçeteye uygun beslenmesi için dozaj altyapisi sağlar." },
  { title: "Karistiricilar", text: "Granülasyon öncesinde kompost fraksiyonlarinin ve yardımcı katkilarin homojen biçimde hazirlanmasini destekler." },
  { title: "Granülatür Tamburu", text: "Kompost bazli karisimin istenen granül formuna dönüsmesi için ana sekillendirme ekipmani olarak çalisir." },
  { title: "Kurutma Tamburu", text: "Granül kompost ürüninde hedef nem seviyesine ulasmak ve depolama kararliligini artirmak için kontrollü kurutma sağlar." },
  { title: "Eleme Sistemleri", text: "Hedef tane boyutunu korumak, iri ve ince fraksiyonlari ayirmak için granül siniflandirmasini yönetir." },
  { title: "Sogutma Tamburu", text: "Kurutma sonrasi ürün sicakligini dengeleyerek granül kompostun paketleme öncesi stabil hale gelmesini sağlar." },
  { title: "Toz Toplama Sistemleri", text: "Organik karakterli granül üretiminde olusan tozu kontrol altinda tutarak saha temizligini ve çevresel güvenligi destekler." },
  { title: "Konveyör ve Elevatör Hatlari", text: "Kompost bazli malzemenin hazırlama, granülasyon, kurutma ve paketleme kademeleri arasinda güvenli transferini sağlar." },
  { title: "Paketleme ve Paletleme çöz?mleri", text: "Granül kompost ?rının?n torbalanmasi, paletlenmesi ve sevkiyata hazirlanmasi için son hat entegrasyonu sunar." },
];

const powderEquipment: SubsolutionCard[] = [
  { title: "Ham Madde Besleme Sistemleri", text: "Toz hammaddelerin kararl? ve kontrollü biçimde hatta al?nmas?n? sağlar." },
  { title: "Mikro / Makro Dozajlama", text: "D???k ve yüksek oranl? bileşenlerin reçeteye uygun beslenmesi için hassas dozaj altyapıs? sunar." },
  { title: "Dozaj Kantarlar?", text: "Toz ürün formülasyonlarında doru tartüm ve proses kontrolü için yüksek hassasiyetli ölçüm sağlar." },
  { title: "Kar1_tır?c?lar", text: "Toz hammaddelerin homojen da?ölümla birle?mesi için ana karışım ekipmanlarıd?r." },
  { title: "Eleme Sistemleri", text: "?stenmeyen topak veya iri parçalar? ay?rarak ürün standardını destekler." },
  { title: "Konveyör ve Helezon Hatlar?", text: "Malzemenin proses boyunca kontrollü ve güvenli biçimde ta??nmas?n? sağlar." },
  { title: "Elevatör Sistemleri", text: "Dikey transfer ihtiyaç? olan noktalarda düzenli ürün akışı için kullanıl?r." },
  { title: "Toz Toplama Sistemleri", text: "Transfer ve paketleme noktalarında emisyonu azaltmak ve çalışma güvenliçini artırmak için görev yapar." },
  { title: "Paketleme Sistemleri", text: "Toz son ?rının torbalama ve sevkiyat hazırl??ında kontrollü dolum sağlar." },
];

const liquidCommonFields: SubsolutionFormField[] = [
  { id: "batchCapacity", label: "Batch Kapasitesi", type: "number", unit: "ton/batch" },
  { id: "dailyTarget", label: "Günlük üretim Hedefi", type: "number", unit: "ton/g?n" },
  { id: "automationLevel", label: "Otomasyon Seviyesi", type: "select", options: ["Yar? Otomatik", "Tam Otomatik", "Hen?z net de?il"] },
  { id: "fillingNeed", label: "Dolum ?htiyac?", type: "select", options: ["Evet", "Hayır", "Hen?z net de?il"] },
];

const granuleCommonFields: SubsolutionFormField[] = [
  { id: "hourlyCapacity", label: "Saatlik Kapasite", type: "number", unit: "ton/saat" },
  { id: "automationLevel", label: "Otomasyon Seviyesi", type: "select", options: ["Yar? Otomatik", "Tam Otomatik", "Hen?z net de?il"] },
  { id: "packagingNeed", label: "Paketleme ?htiyac?", type: "select", options: ["Evet", "Hayır", "Hen?z net de?il"] },
  { id: "granuleSize", label: "Granül Boyutu", type: "text" },
  { id: "dryingNeed", label: "Kurutma ?htiyac?", type: "select", options: ["Evet", "Hayır", "Hen?z net de?il"] },
];

const powderCommonFields: SubsolutionFormField[] = [
  { id: "hourlyCapacity", label: "Saatlik Kapasite", type: "number", unit: "ton/saat" },
  { id: "automationLevel", label: "Otomasyon Seviyesi", type: "select", options: ["Yar? Otomatik", "Tam Otomatik", "Hen?z net de?il"] },
  { id: "packagingNeed", label: "Paketleme ?htiyac?", type: "select", options: ["Evet", "Hayır", "Hen?z net de?il"] },
  { id: "screeningNeed", label: "Eleme ?htiyac?", type: "select", options: ["Evet", "Hayır", "Hen?z net de?il"] },
  { id: "dustControlNeed", label: "Toz Kontrol ?htiyac?", type: "select", options: ["Evet", "Hayır", "Hen?z net de?il"] },
];

const liquidOfferCardsBySlug: Record<string, SubsolutionCard[]> = {
  "sivi-organomineral": [
    { title: "Proses Tasarım?", text: "ürün reçetesi, hammaddeler ve hedef ürün özelliklerine göre sıvı üretim prosesini planlıyoruz." },
    { title: "Uygun Makine Kurgusu", text: "çözündürme, kar??tırma, homojenizasyon, filtrasyon ve dolum için doru makine kombinasyonunu oluşturuyoruz." },
    { title: "Otomasyon ve Dozajlama", text: "Hammadde giri?lerinden son ürün hazırlamaya kadar kontrollü ve izlenebilir üretim altyapıs? sa?lıyoruz." },
    { title: "Dolum ve Son Hat Uyumlar?", text: "IBC, bidon, ?i?e veya özel ambalaj yapıs?na uygun dolum ve etiketleme çöz?mleri sunuyoruz." },
    { title: "Revizyon ve Kapasite Artür?m?", text: "Mevcut sıvı gübre hatlarında kapasite artır?m?, revizyon ve proses iyile?tirme seçenekleri geliştiriyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "sivi-npk": [
    { title: "Proses Tasarım?", text: "Hedef NPK analizi, çözünürl?k s?n?rlar? ve hammadde davran???na göre sıvı üretim sürecini planlıyoruz." },
    { title: "Uygun Makine Kurgusu", text: "çözündürme, kar??tırma, homojenizasyon, filtrasyon ve dolum için doru makine kombinasyonunu oluşturuyoruz." },
    { title: "Otomasyon ve Dozajlama", text: "N, P ve K kaynaklarının kontrollü beslenmesi için reçete bazl? otomasyon altyapıs? kuruyoruz." },
    { title: "Filtrasyon ve Stabilite Kontrol?", text: "Kristallenme ve faz ayrım? risklerini azaltmak için filtrasyon ve stabilite kademelerini birlikte kurguluyoruz." },
    { title: "Dolum ve Son Hat Uyumlar?", text: "?zi?e, bidon veya IBC senaryolarına uygun dolum ve etiketleme çöz?mleri sunuyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "sivi-amino-asit": [
    { title: "Amino Asit Bazl? Proses Tasarım?", text: "Amino asit kayna??na, berraklık ihtiyacına ve hedef kullanım senaryosuna göre proses altyapıs?n? planlıyoruz." },
    { title: "Uygun Tank ve Filtrasyon Kurgusu", text: "çözeltinin davran???na göre kar??tırma, bekletme ve filtrasyon altyapıs?n? birlikte oluşturuyoruz." },
    { title: "Stabilite ve Berraklık Yönetimi", text: "?rının görsel kalitesini ve depolama kararlılığın? destekleyecek proses yakla??m? geliştiriyoruz." },
    { title: "Otomasyon ve Dozajlama", text: "Farkl? amino asit ve yardımcı katkı akışların? reçeteye uygun biçimde yönetiyoruz." },
    { title: "Dolum ve Ambalaj Uyumu", text: "?zi?e, bidon ve özel ambalaj yap?lar? için uygun dolum kurgusunu tasarlıyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "organik-sivi-gubre": [
    { title: "Organik ??erik Uyumlu Proses Tasarım?", text: "Doçal menşeli hammaddelerin davran???na göre karışım, bekletme ve dolum altyapıs?n? planlıyoruz." },
    { title: "Tank ve Kar???m Altyapıs?", text: "Organik fraksiyonların dengeli birle?imi için doru tank, kar??tür?c? ve transfer yapıs?n? kuruyoruz." },
    { title: "Koku ve Stabilite Yakla??m?", text: "ürün kararlılığı ile proses konforunu birlikte ele alan teknik çöz?mler geliştiriyoruz." },
    { title: "Filtrasyon ve Dolum çöz?mleri", text: "Hedef kullanım ve ambalaj tipine uygun filtrasyon ve dolum kademeleri oluşturuyoruz." },
    { title: "Otomasyon ve Reçete Yönetimi", text: "ürün geçişlerini ve reçete takibini izlenebilir hale getiren otomasyon altyapıs? sa?lıyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "organik-biyostimulan": [
    { title: "Biyostimülan Proses Kurgusu", text: "Aktif içeriklerin yapıs?na göre karışım, bekletme, filtrasyon ve dolum sürecini birlikte planlıyoruz." },
    { title: "Hassas Kar???m ve Stabilite Yakla??m?", text: "Bitkisel ekstraktlar, amino asitler ve humik fraksiyonlar için kontrollü proses altyapıs? kuruyoruz." },
    { title: "Filtrasyon ve Berraklık Kontrolü", text: "Dolum güvenliği ve uygulama performans? için uygun filtrasyon kademelerini tan?mlıyoruz." },
    { title: "Esnek Dolum çöz?mleri", text: "?zi?e, bidon veya farkl? hacimlerde ambalaj senaryolarına uygun dolum altyapıs? kuruyoruz." },
    { title: "ürün Geliştirmeye Uygun Tesis Altyapıs?", text: "Farkl? biyostimülan reçetelerin ayn? hatta yönetilebilmesi için esnek üretim kurgusu sa?lıyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
};

const granuleOfferCardsBySlug: Record<string, SubsolutionCard[]> = {
  "granul-organomineral": [
    { title: "Proses Tasarım?", text: "Organik ve mineral bileşenlerin granül formda dengeli birle?imi için proses akışın? planlıyoruz." },
    { title: "Granülasyon Sistemi Seçimi", text: "Reçete yapıs?, bağlay?c? ihtiyaç? ve hedef granül karakterine göre doru granülasyon çöz?m?n? belirliyoruz." },
    { title: "Kurutma ve Eleme Hatt? Kurgusu", text: "Granül dayanım? ve tane boyutu standardını koruyacak kurutma ve sınıflandırma kademeleri tasarlıyoruz." },
    { title: "soğutma ve Geri Dönüş Yönetimi", text: "Elek üst?, elek alt? ve proses i?i geri dönüş akışların? verimli ?ekilde yöneten hat altyapıs? kuruyoruz." },
    { title: "Son ürün Hazırlama", text: "Kaplama, son ürün iyile?tirme ve paketleme öncesi hazırl?k kademelerini entegre ediyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "granul-npk": [
    { title: "Reçete Bazl? Proses Tasarım?", text: "Hedef NPK analizi ve granül karakterine göre proses akışın? ve besleme dengesini birlikte planlıyoruz." },
    { title: "Granülasyon Hatt? Seçimi", text: "Formülasyona ve kapasite ihtiyacına göre uygun granülasyon altyapıs?n? belirliyoruz." },
    { title: "Kurutma ve soğutma Kurgusu", text: "Nem ve sıcaklık yönetimini birlikte ele alarak son ürün kararlılığın? destekliyoruz." },
    { title: "Standart Tane Boyutu Yönetimi", text: "Eleme, geri dönüş ve son ürün çevrimleri ile hedef granül da?ölüm?n? kontrol altında tutuyoruz." },
    { title: "Son Hat ve Paketleme çöz?mleri", text: "Torbalama, paletleme ve sevkiyata hazırl?k için entegre son hat senaryolar? geliştiriyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
};


const powderOfferCardsBySlug: Record<string, SubsolutionCard[]> = {
  "toz-organomineral": [
    { title: "Toz ürün Proses Tasarım?", text: "Organik ve mineral toz hammaddelerin reçeteye uygun karışım? için proses akışın? planlıyoruz." },
    { title: "Hassas Dozajlama ve Tartüm", text: "Mikro ve makro bileşenlerin doru tartüm? için kontrollü besleme ve dozaj altyapıs? kuruyoruz." },
    { title: "Homojen Kar???m Yakla??m?", text: "Farkl? younluk ve akış karakterine sahip hammaddeler için doru karışım yapıs?n? oluşturuyoruz." },
    { title: "Toz Kontrol ve Filtrasyon", text: "Transfer ve paketleme noktalarında emisyonu azaltan toz emi? çöz?mleri geliştiriyoruz." },
    { title: "Eleme ve Son ürün Hazırlama", text: "Topak kontrolü, ürün standard? ve torbalamaya uygun son ürün hazırl??? için eleme çöz?mleri sunuyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "toz-npk": [
    { title: "Reçete Bazl? Toz Hat Tasarım?", text: "Hedef NPK analizi ve ürün akış davran???na göre toz üretim hattının temel yapıs?n? planlıyoruz." },
    { title: "Tartüm ve Dozajlama Sistemleri", text: "Makro ve mikro bileşenlerin hassas oranlarda hatta al?nmas? için kontrollü dozaj altyapıs? kuruyoruz." },
    { title: "Kar???m ve Eleme Kurgusu", text: "Homojen ürün kalitesi ve topak kontrolü için karışım ve eleme kademelerini birlikte tasarlıyoruz." },
    { title: "Toz Emi? Altyapıs?", text: "Transfer ve paketleme noktalarında toz oluşumunu kontrol altında tutan emi? çöz?mleri geliştiriyoruz." },
    { title: "Paketleme Uyumu", text: "Son ?rının akış davran???na uygun torbalama ve son hat senaryoların? projeye dahil ediyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
};

const liquidCriticalTopicsBySlug: Record<string, SubsolutionCard[]> = {
  "sivi-organomineral": [
    { title: "çözünürl?k ve stabilite", text: "ürün içinde ??kme, ayr??ma ve bulan?kl?k oluşmamas? için proses doru kurulmalıdır." },
    { title: "Hammadde uyumu", text: "Organik ve mineral içeriklerin birlikte davran??? dikkatle değerlendirilmelidir." },
    { title: "pH ve reaksiyon kontrol?", text: "Sıvı ürünlerde kalite ve stabilite için pH kontrolü kritik olabilir." },
    { title: "Filtrasyon seviyesi", text: "Dolum sisteminin sorunsuz çalışmas? için uygun filtrasyon kademesi seçilmelidir." },
    { title: "Homojenizasyon kalitesi", text: "ürün partileri arasında standart kalite için yeterli karışım ve homojenizasyon gerekir." },
    { title: "Ambalaj ve dolum uyumu", text: "Son ?rının akışkanl??? ve viskozitesi dolum hatt?yla uyumlu olmalıdır." },
    { title: "Depolama kararlılığı", text: "Mamul tankında bekleme süresince ürün yapısının bozulmamas? önemlidir." },
    { title: "Temizlik ve hat hijyeni", text: "ürün geçişleri ve hat temizliği, kalite süreklili?i a??sından dikkatle planlanmalıdır." },
  ],
  "sivi-npk": [
    { title: "çözünürl?k ve stabilite", text: "Yüksek analizli NPK formüllerde çözeltinin berrak ve kararl? kalmas? için çözünürl?k s?n?rlar? iyi yönetilmelidir." },
    { title: "Hammadde uyumu", text: "Azot, fosfor ve potasyum kaynaklarının ayn? formül içindeki davran??? birlikte değerlendirilmelidir." },
    { title: "pH ve reaksiyon kontrol?", text: "çözeltide reaksiyon, kristallenme ve stabilite risklerini azaltmak için pH dengesi doru kurulmalıdır." },
    { title: "Filtrasyon seviyesi", text: "Filtrasyon seviyesi hem ürün berraklığın? hem de dolum hatt? güvenliçini dorudan etkiler." },
    { title: "Homojenizasyon kalitesi", text: "Mikro katkılar ve çözün?r tuzların partiler arasında e?it da??lmas? için yeterli homojenizasyon gerekir." },
    { title: "Ambalaj ve dolum uyumu", text: "?rının yo?unlu?u ve akış karakteri seçilen dolum ambalaj? ile uyumlu olmalıdır." },
    { title: "Depolama kararlılığı", text: "Depolama sürecinde kristallenme, ??kelme ve faz ayrım? oluşmamas? için mamul tank? yönetimi önemlidir." },
    { title: "Temizlik ve hat hijyeni", text: "Formül deği?imlerinde hat temizliği dikkatle planlanmazsa ürün geçişlerinde kalite sapmalar? olu?abilir." },
  ],
  "sivi-amino-asit": [
    { title: "çözünürl?k ve stabilite", text: "Protein hidrolizat? veya amino asit bazl? ürünlerde berraklık ve uzun s?reli stabilite birlikte değerlendirilmelidir." },
    { title: "Hammadde uyumu", text: "Amino asit kayna?? ile yardımcı mineral katkıların birlikte davran??? proses kurgusunu etkiler." },
    { title: "pH ve reaksiyon kontrol?", text: "Amino asit yapısının korunmas? ve istenmeyen reaksiyonların ?nlenmesi için pH dengesi önemlidir." },
    { title: "Filtrasyon seviyesi", text: "Filtrasyon seviyesi, dolum hattında sorun ya?anmamas? ve son ürün görün?m? için kritik rol oynar." },
    { title: "Homojenizasyon kalitesi", text: "Yo?un organik fraksiyonların her partide ayn? kaliteyi vermesi için g??l? homojenizasyon gerekir." },
    { title: "Ambalaj ve dolum uyumu", text: "Viskozite ve akış davran??? ambalaj, dolum h?z? ve etiketleme düzeniyle uyumlu olmalıdır." },
    { title: "Depolama kararlılığı", text: "Bekleme süresinde koku, renk veya faz ayrım? oluşmamas? için depolama koşullar? doru tan?mlanmalıdır." },
    { title: "Temizlik ve hat hijyeni", text: "Organik içerikli amino asit ürünlerinde hat temizliği, çap$1az ürün etkisini s?n?rlamak için dikkatle planlanmalıdır." },
  ],
  "organik-sivi-gubre": [
    { title: "çözünürl?k ve stabilite", text: "Organik fraksiyonlu ürünlerde ??kme, bulan?kl?k ve faz ayrım? oluşmamas? için stabilite doru yönetilmelidir." },
    { title: "Hammadde uyumu", text: "Doçal menşeli içeriklerin birlikte davran???, akışkanl?k ve raf ömrü a??sından dikkatle değerlendirilmelidir." },
    { title: "pH ve reaksiyon kontrol?", text: "Organik içeriklerin kararl? kalmas? için pH ve proses koşullar? kontrollü tutulmalıdır." },
    { title: "Filtrasyon seviyesi", text: "Filtrasyon seviyesi ürün tipine göre seçilmezse dolum performans? ve kullanım rahatl??? etkilenebilir." },
    { title: "Homojenizasyon kalitesi", text: "Yo?un organik içeriklerin partiler arasında ayn? kaliteyi verebilmesi için homojenizasyon seviyesi yeterli olmalıdır." },
    { title: "Ambalaj ve dolum uyumu", text: "Dolum ekipman?, ?rının viskozite ve akış karakterine uygun seçilmelidir." },
    { title: "Depolama kararlılığı", text: "Mamul tankında bekleme sürecinde ürün yapısının bozulmamas? için depolama kararlılığı test edilmelidir." },
    { title: "Temizlik ve hat hijyeni", text: "Organik ürün geçişlerinde hat hijyeni ve temizlik plan? kalite güvence a??sından kritik önemdedir." },
  ],
  "organik-biyostimulan": [
    { title: "çözünürl?k ve stabilite", text: "Biyostimülan karakter ta??yan aktif fraksiyonların çözeltide kararl? kalmas? için stabilite doru yönetilmelidir." },
    { title: "Hammadde uyumu", text: "Bitkisel ekstraktlar, amino asitler ve humik yap?ların birlikte davran??? dikkatle değerlendirilmelidir." },
    { title: "pH ve reaksiyon kontrol?", text: "Aktif içeriklerin performans?n? korumak için pH ve reaksiyon penceresi kontrollü tutulmalıdır." },
    { title: "Filtrasyon seviyesi", text: "Dolum öncesi filtrasyon seviyesi, berraklık kadar uygulama güvenliği a??sından da önem ta??r." },
    { title: "Homojenizasyon kalitesi", text: "Partiler aras? performans fark?n? azaltmak için aktif içerikler yeterli homojenizasyon ile hazırlanmalıdır." },
    { title: "Ambalaj ve dolum uyumu", text: "?rının hedef ambalaj ve uygulama senaryosuna uyumu dolum hatt? seçimini dorudan etkiler." },
    { title: "Depolama kararlılığı", text: "Aktif fraksiyonların depolama süresince bozulmamas? için mamul tank? ve bekleme koşullar? doru planlanmalıdır." },
    { title: "Temizlik ve hat hijyeni", text: "Hat temizliği ve ürün geçişleri, biyolojik etkili içeriklerin farkl? reçetelere ta??nmamas? için dikkatle yönetilmelidir." },
  ],
};

const granuleCriticalTopicsBySlug: Record<string, SubsolutionCard[]> = {
  "granul-organomineral": [
    { title: "Granül dayanım?", text: "Organik fraksiyonlu granüllerin ta??ma ve paketleme s?rasında k?r?lmamas? için yeterli mekanik dayanım sağlanmalıdır." },
    { title: "Nem kontrol?", text: "Kurutma ??k???ndaki nem seviyesi, hem depolama kararlılığı hem de granül bütünl??? a??sından kritik önemdedir." },
    { title: "Geri dönüş oran?", text: "Elek üst? ve elek alt? geri dönüş akışlar? verimli yönetilmezse granülasyon dengesi bozulabilir." },
    { title: "Tane boyutu standard?", text: "Pazara uygun granül da?ölüm? için eleme ve granülasyon kademeleri birlikte optimize edilmelidir." },
    { title: "Homojen da?ölüm", text: "Organik ve mineral bileşenlerin granül yap?da dengeli da??lmas? ürün kalitesini belirler." },
    { title: "Kurutma verimi", text: "Yetersiz veya a??r? kurutma granül yapıs?n? ve i?letme maliyetini dorudan etkiler." },
    { title: "Toz kontrol?", text: "Granülasyon ve eleme noktalarında olu?an ince partiküllerin doru toplanmas? çevresel güvenlik için gereklidir." },
    { title: "Paketleme performans?", text: "Granül akışkanl??? ve tane bütünl??? son hat ekipmanlarının kararl? çalışmas?n? desteklemelidir." },
  ],
  "granul-npk": [
    { title: "Granül dayanım?", text: "Yüksek analizli NPK granüllerinin k?r?lmadan ta??nmas? için granülasyon ve bağlay?c? dengesi doru kurulmalıdır." },
    { title: "Nem kontrol?", text: "Granül NPK ürünlerde hedef nem seviyesine ula?mak hem akışkanl?k hem de depolama kararlılığı için kritiktir." },
    { title: "Geri dönüş oran?", text: "Elek geri dönüş akışlarının doru yönetilmesi proses verimini ve ürün standardını dorudan etkiler." },
    { title: "Tane boyutu standard?", text: "Hedef granül çap?, ?rının pazardaki kabul? ve paketleme performans? a??sından istikrarl? olmalıdır." },
    { title: "Homojen da?ölüm", text: "N, P ve K bileşenlerinin granül yap?da dengeli da??lmas? hedef analiz de?erinin korunmas?n? sağlar." },
    { title: "Kurutma verimi", text: "Kurutma kademesindeki verim, granül yüzey kalitesi ve enerji tüketimi üzerinde dorudan etkilidir." },
    { title: "Toz kontrol?", text: "Granül NPK hatlarında olu?an tozun etkin biçimde yönetilmesi hem çevre hem de ürün kayb? a??sından önemlidir." },
    { title: "Paketleme performans?", text: "Son ?rının akış karakteri ve tane bütünl???, torbalama ve paletleme süreçleriyle uyumlu olmalıdır." },
  ],
  "granul-kompost-tesisleri": [
    { title: "Kompost giri? nemi", text: "Granülasyon verimi için kompost hammaddenin nem seviyesi kontrollü olmalıdır." },
    { title: "Organik yapının granülle?me davran???", text: "Kompost bazl? hammaddelerin ba?lanma ve granül oluşturma karakteri dikkatle değerlendirilmelidir." },
    { title: "Granül dayanım?", text: "Son ?rının ta??ma ve paketleme s?rasında da??lmamas? için granül mukavemeti önemlidir." },
    { title: "Kurutma dengesi", text: "A??r? kurutma veya yetersiz kurutma ürün kalitesini olumsuz etkileyebilir." },
    { title: "Tane boyutu standard?", text: "Pazar beklentisine uygun granül boyutu için eleme ve geri dönüş yönetimi doru kurulmalıdır." },
    { title: "Toz ve koku kontrol?", text: "Organik karakterli ?retimlerde ?evresel kontrol sistemleri kritik ?neme sahiptir." },
    { title: "Depolama kararlılığı", text: "Son ?rının depoda topaklanmamas? ve akışkanlılığın? korumas? gerekir." },
    { title: "Paketleme performans?", text: "Granül ?rının torbalama ve sevkiyat performans? son kalite a??sından önemlidir." },
  ],
};

const powderCriticalTopicsBySlug: Record<string, SubsolutionCard[]> = {
  "toz-organomineral": [
    { title: "Kar???m homojenli?i", text: "Organik ve mineral toz bileşenlerin reçeteye uygun dengeli da??lmas? ürün kalitesini belirler." },
    { title: "Toz kontrol?", text: "Transfer ve paketleme noktalarında olu?an tozun etkin biçimde yönetilmesi gerekir." },
    { title: "Ak?? davran???", text: "Organik katkıl? toz ürünlerde köprülenme ve düzensiz akış riskleri besleme performans?n? etkileyebilir." },
    { title: "Reçete dorulu?u", text: "Mikro ve makro bileşenlerin hassas tartüm? hedef analiz de?erleri için kritik önem ta??r." },
    { title: "Eleme verimi", text: "Topakların ve istenmeyen iri parçaların ayr?lmas? için eleme kademeleri doru seçilmelidir." },
    { title: "Ambalaj uyumu", text: "Toz ?rının akışı, torbalama ve son hat ekipmanlarıyla uyumlu olmalıdır." },
    { title: "?? güvenliği", text: "Tozlu çalışma ortamlarında operatör güvenliği ve emisyon kontrolü birlikte d???n?lmelidir." },
    { title: "Hijyen ve temizlik", text: "Hat temizliği ve ürün geçişleri, kalite süreklili?i ve kontaminasyon riskinin azalt?lmas? için planlanmalıdır." },
  ],
  "toz-npk": [
    { title: "Kar???m homojenli?i", text: "N, P ve K bileşenlerinin reçeteye uygun dengeli da??lmas? hedef analiz de?erlerinin korunmas? için kritiktir." },
    { title: "Toz kontrol?", text: "Toz NPK hatlarında transfer ve paketleme noktalarındaki emisyon doru yönetilmelidir." },
    { title: "Ak?? davran???", text: "Toz NPK ürünlerde akış düzeni torbalama performans?n? ve besleme kararlılığın? dorudan etkiler." },
    { title: "Reçete dorulu?u", text: "Hedef NPK oranının korunmas? için dozajlama, tartüm ve karışım ad?mlar? hassas biçimde yönetilmelidir." },
    { title: "Eleme verimi", text: "Topakla?ma ve iri parça oluşumu varsa eleme verimi ürün standard? için belirleyici olur." },
    { title: "Ambalaj uyumu", text: "?rının akışkanl??? ve y???n davran??? seçilen paketleme sistemiyle uyumlu olmalıdır." },
    { title: "?? güvenliği", text: "Tozlu NPK hammaddelerle çalışırken operatör güvenliği ve toz emi? altyapıs? birlikte ele al?nmalıdır." },
    { title: "Hijyen ve temizlik", text: "ürün geçişlerinde reçete kar??mas?n? ?nlemek için hat temizliği ve bak?m plan? doru kurgulanmalıdır." },
  ],
};

const liquidFaqsBySlug: Record<string, SubsolutionFaq[]> = {
  "sivi-organomineral": [
    { question: "Sıvı organomineral gübre tesisi ile sıvı NPK tesisi ayn? hatta kurulabilir mi?", answer: "Evet, uygun tank, dozajlama, filtrasyon ve reçete yönetimi ile ayn? hat üzerinde farkl? ürün gruplar? çalış?labilir." },
    { question: "Sıvı üretimde kapasite nasıl belirlenir?", answer: "Kapasite ?o?u zaman batch bazında, günlük üretim hedefi ve dolum senaryosu ile birlikte deerlendirilir." },
    { question: "Filtrasyon neden ?nemlidir?", answer: "Filtrasyon, ürün berraklığın?, dolum hatt? güvenliçini ve son kullan?c? uygulama performans?n? dorudan etkiler." },
    { question: "Organik içerikli sıvı ürünlerde özel tasarım gerekir mi?", answer: "Evet, organik hammaddelerin viskozite, ??kme, koku ve stabilite davran???na göre özel proses yakla??m? gerekir." },
    { question: "Mevcut sıvı gübre hatt? revize edilebilir mi?", answer: "Evet, mevcut ekipman yapıs?na göre kapasite art???, filtrasyon iyile?tirmesi, yeni ürün adaptasyonu ve dolum entegrasyonu yap?labilir." },
  ],
  "sivi-npk": [
    { question: "Sıvı NPK tesisi için hedef analiz nasıl belirlenir?", answer: "Hedef analiz, istenen NPK oran?, çözün?r hammadde seçenekleri ve hedef pazardaki ürün ihtiyacına göre netle?tirilir." },
    { question: "Ayn? hatta farkl? NPK formülleri üretilebilir mi?", answer: "Evet, uygun reçete yönetimi ve tank geçi? plan? ile ayn? hatta farkl? analizlerde sıvı NPK ürünleri üretilebilir." },
    { question: "Kristalle?me riski nasıl yönetilir?", answer: "çözünürl?k s?n?rlar?, sıcaklık yönetimi, pH dengesi ve filtrasyon kademeleri birlikte değerlendirilerek kristalle?me riski azalt?l?r." },
    { question: "Dolum ?ncesi dinlendirme gerekli midir?", answer: "Formülasyona ba?l? olarak homojenizasyon sonras? kontrollü bekletme, ürün kararlılığı a??sından avantaj sa?layabilir." },
    { question: "Mevcut sıvı gübre hatt? NPK üretimi için revize edilebilir mi?", answer: "Evet, mevcut tank, filtrasyon ve dozajlama yapıs? incelenerek NPK odakl? üretime uygun revizyon yap?labilir." },
  ],
  "sivi-amino-asit": [
    { question: "Amino asit kayna?? proses tasarım?n? etkiler mi?", answer: "Evet, serbest amino asit çözeltisi ile protein hidrolizat? bazl? hammaddeler farkl? filtrasyon, karışım ve stabilite yakla??m? gerektirebilir." },
    { question: "Sivi amino asit ?retiminde filtrasyon neden kritiktir?", answer: "Filtrasyon, hem dolum hattının güvenli çalışmas?n? hem de son ?rının görsel ve uygulama performans?n? dorudan etkiler." },
    { question: "Ayn? hatta farkl? amino asit bazl? ürünler üretilebilir mi?", answer: "Evet, uygun reçete yönetimi, tank geçi? plan? ve temizlik prosed?r? ile farkl? ürünler ayn? hatta üretilebilir." },
    { question: "Koku ve renk farklar? kontrol alt?na al?nabilir mi?", answer: "Ham madde yapıs?na ba?l? deği?imler proses s?ras?, karışım koşullar? ve uygun yardımcılarla yönetilebilir." },
    { question: "Mevcut sıvı hat amino asit üretimine uyarlanabilir mi?", answer: "Evet, mevcut tank, filtre ve dolum sistemi değerlendirilerek amino asit bazl? ürünlere uygun hale getirilebilir." },
  ],
  "organik-sivi-gubre": [
    { question: "Organik sıvı gübre üretiminde hammaddenin doçal yapıs? prosesi etkiler mi?", answer: "Evet, organik menşeli sıvı hammaddelerin viskozite, koku, ??kme ve filtrasyon davran??? proses kurgusunu dorudan etkiler." },
    { question: "Ayn? hatta farkl? organik sıvı formüller üretilebilir mi?", answer: "Uygun reçete yönetimi ve hat temizliği plan? ile farkl? organik sıvı ürünler ayn? hatta üretilebilir." },
    { question: "Dolum öncesi berraklık her zaman gerekli midir?", answer: "Bu, hedef ?rının kullanım ?ekline ba?l?d?r; ancak dolum güvenliği ve son kullan?c? deneyimi için uygun filtrasyon seviyesi önemlidir." },
    { question: "Organik sıvı ürünlerde depolama kararlılığı nasıl sağlan?r?", answer: "Kar???m dengesi, pH yönetimi, uygun tank seçimi ve kontrollü bekletme koşullar? ile depolama kararlılığı desteklenir." },
    { question: "Mevcut bir sıvı hat organik ürünlere adapte edilebilir mi?", answer: "Evet, tank, kar??tırma, filtrasyon ve dolum altyapıs? incelenerek organik sıvı ürünlere uygun hale getirilebilir." },
  ],
  "organik-biyostimulan": [
    { question: "Biyostimülan ürünler için standart bir proses yapıs? var m??", answer: "Temel yap? benzer olsa da aktif içeriklerin karakteri, berraklık ihtiyaç? ve hedef kullanım senaryosu prosesi önemli ölçüde deği?tirir." },
    { question: "Deniz yosunu veya bitkisel ekstraktl? ürünlerde özel tank seçimi gerekir mi?", answer: "Evet, aktif içeriklerin davran???na göre karışım, bekleme ve filtrasyon ad?mlarına uygun tank ve yardımcı ekipman seçimi önem ta??r." },
    { question: "Biyostimülan ürünlerde filtrasyon neye göre belirlenir?", answer: "Filtrasyon seviyesi, ?rının aktif fraksiyonu, hedef berrakl??? ve dolum sonras? kullanım ?ekline göre seçilir." },
    { question: "Ayn? hatta birden fazla biyostimülan reçetesi çalıştür?labilir mi?", answer: "Evet, reçete yönetimi, hat geçişleri ve temizlik plan? doru kurulursa farkl? biyostimülan ürünler ayn? hatta üretilebilir." },
    { question: "Mevcut sıvı tesis biyostimülan üretimi için revize edilebilir mi?", answer: "Evet, mevcut ekipman altyapıs? incelenerek aktif içeriklere uygun karışım, filtrasyon ve dolum iyile?tirmeleri yap?labilir." },
  ],
};

const granuleFaqsBySlug: Record<string, SubsolutionFaq[]> = {
  "granul-organomineral": [
    { question: "Granül organomineral gübre tesisi için kapasite nasıl belirlenir?", answer: "Saatlik üretim hedefi, reçete yapıs?, geri dönüş oran? ve kurutma senaryosu birlikte değerlendirilerek kapasite belirlenir." },
    { question: "Organik içerik granül dayanım?n? etkiler mi?", answer: "Evet, organik fraksiyonun yapıs? granül formasyonu, nem dengesi ve nihai dayanım üzerinde önemli etkiye sahiptir." },
    { question: "Ayn? hatta farkl? organomineral reçeteler üretilebilir mi?", answer: "Uygun dozajlama, karışım ve proses ayarlar? ile farkl? reçeteler ayn? hatta üretilebilir." },
    { question: "Kurutma her granül hat için gerekli midir?", answer: "ürün yapıs?na göre deği?mekle birlikte granül kararlılığı ve depolama performans? için ?o?u hatta kurutma kritik rol oynar." },
    { question: "Mevcut granül hat organomineral üretime uyarlanabilir mi?", answer: "Evet, granülasyon, kurutma, eleme ve toz kontrol kademeleri incelenerek organomineral yap?ya uygun revizyon yap?labilir." },
  ],
  "granul-npk": [
    { question: "NPK granül hatlarında hedef analiz nasıl korunur?", answer: "Dozajlama dorulu?u, homojen karışım, granülasyon dengesi ve geri dönüş akışlarının kontrolü birlikte yönetilmelidir." },
    { question: "Granül boyutu neden bu kadar önemlidir?", answer: "Granül boyutu hem ?rının pazardaki kabul?n? hem de paketleme ve uygulama performans?n? dorudan etkiler." },
    { question: "Kurutma ve soğutma her zaman birlikte mi deerlendirilir?", answer: "Evet, granül ?rının nem ve sıcaklık dengesi son ürün kararlılığı için birlikte ele al?nmalıdır." },
    { question: "Ayn? hatta farkl? NPK analizleri ?retilebilir mi?", answer: "Uygun reçete altyapıs? ve proses ayarlar? ile farkl? NPK formülleri ayn? granül hatta üretilebilir." },
    { question: "Mevcut granül gübre hatt? NPK odakl? iyile?tirilebilir mi?", answer: "Evet, hedef analiz ve granül boyutu standard?na göre besleme, granülasyon ve son hat kademeleri revize edilebilir." },
  ],
  "granul-kompost-tesisleri": [
    { question: "Granül kompost tesisi ile klasik kompost hatt? aras?ndaki fark nedir?", answer: "Granül kompost tesislerinde kompost bazl? malzeme son ürün olarak granül forma dönüştür?l?r; klasik kompost hatlar? ise daha çok olgunla?tırma ve eleme odakl? çalışır." },
    { question: "Granül kompost üretiminde kurutma her zaman gerekli midir?", answer: "Hammadde nemi ve hedef granül kararlılığına ba?l? olarak deği?ir; ancak ?o?u senaryoda kontrollü kurutma ürün kalitesi için önemli rol oynar." },
    { question: "Kompost bazl? hammaddelerde granül dayanım? nasıl sağlan?r?", answer: "Doru nem dengesi, uygun karışım yapıs?, bağlay?c? ihtiyaç? ve kontrollü kurutma ile granül dayanım? desteklenir." },
    { question: "Mevcut kompost hatt? granül üretime dönüştür?lebilir mi?", answer: "Evet, mevcut hatt?n hammadde hazırlama yapıs? incelenerek granülasyon, kurutma, eleme ve paketleme kademeleri eklenebilir." },
    { question: "Granül kompost ürünleri nasıl paketlenir?", answer: "Son ürün, hedef pazara göre genellikle torbalama ve paletleme sistemleriyle paketlenir; granül akışına uygun son hat seçimi bu süreçte belirleyicidir." },
  ],
};

const powderFaqsBySlug: Record<string, SubsolutionFaq[]> = {
  "toz-organomineral": [
    { question: "Toz organomineral gübre tesisinde homojen karışım nasıl sağlan?r?", answer: "Doru dozajlama, uygun kar??tür?c? seçimi ve hammadde akış davran??ının iyi analiz edilmesiyle homojen karışım sağlan?r." },
    { question: "Organik içerik toz akışın? etkiler mi?", answer: "Evet, organik karakter ta??yan toz fraksiyonlar akış davran???, topaklanma ve besleme kararlılığı üzerinde etkili olabilir." },
    { question: "Eleme her toz organomineral hatta gerekli midir?", answer: "Topak ve iri parça oluşumu riski olan yap?larda eleme, son ürün standard? için önemli bir kademedir." },
    { question: "Toz kontrolü neden kritik g?r?l?r?", answer: "Toz emi? ve filtrasyon altyapıs? hem çevresel güvenlik hem de ürün kaybının azalt?lmas? a??sından önemlidir." },
    { question: "Mevcut toz hat organomineral ?retime adapte edilebilir mi?", answer: "Evet, dozajlama, kar??tırma, eleme ve son hat sistemleri değerlendirilerek organomineral üretime uygun hale getirilebilir." },
  ],
  "toz-npk": [
    { question: "NPK toz gübre tesisinde hedef analiz nasıl korunur?", answer: "Hassas tartüm, doru dozajlama ve homojen karışım ad?mlar? hedef NPK oranının korunmasında belirleyici rol oynar." },
    { question: "Toz NPK ürünlerde eleme ne zaman gerekli olur?", answer: "Topakla?ma veya iri parçaların ürün standardını bozdu?u senaryolarda eleme kademesi önemli hale gelir." },
    { question: "Toz kontrol ihtiyaç? tesis tasarım?n? etkiler mi?", answer: "Evet, emi? noktalar?, filtre kapasitesi ve ekipman s?zd?rmazl??? tesis yerle_imini ve makine seçimini dorudan etkiler." },
    { question: "Ayn? hatta farkl? toz NPK formülleri çalıştür?labilir mi?", answer: "Uygun reçete ve temizlik plan? ile farkl? analizlerde toz NPK ürünleri ayn? hatta üretilebilir." },
    { question: "Mevcut toz gübre hatt? NPK üretimi için revize edilebilir mi?", answer: "Evet, mevcut besleme, kar??tırma, eleme ve paketleme sistemleri incelenerek NPK odakl? revizyon yap?labilir." },
  ],
};
const fertilizerSubsolutionConfigs: Record<string, FertilizerSubsolutionConfig> = {
  "sivi-organomineral": {
    heroBadge: "ALT çöz?M",
    heroTitle: "Sıvı Organomineral Gübre üretim Tesisleri",
    heroDescription: "Organik ve mineral içeriklerin sıvı formda birle?tirildi?i, dozajlama, çözündürme, kar??tırma, homojenizasyon, filtrasyon ve doluma uygun üretim tesisleri.",
    rawMaterials: ["Organik kaynakl? sıvı hammaddeler", "Amino asit ??zeltileri", "Humik / fulvik içerikler", "Organik menşeli sıvı ekstraktlar", "Mineral besin kaynaklar?", "Fosfor, potasyum ve azot içeren çözün?r hammaddeler", "Mikro element katkılar?", "pH düzenleyiciler", "Stabilizatür ve proses yardımcılar?", "Su ve yardımcı çözündür?c? faz"],
    namingExplanation: "Sıvı organomineral gübreler, organik kökenli bileşenler ile mineral besin elementlerinin ayn? formülasyonda bir araya getirildi?i ürün grubudur. Bu nedenle ürün, sadece mineral gübre ya da sadece organik bazl? bir ürün olarak de?il; organik içerik ile bitki besleme amaçl? mineral bileşenleri birlikte ta??yan bir yap? olarak deerlendirilir. Formülasyonda hem organik karakter kazand?ran içerikler hem de bitkinin ihtiyaç duydu?u mineral besin kaynaklar? bulundu?u için organomineral ifadesi kullanıl?r.",
    namingNote: "?rının nihai sınıf?, kullanılan organik fraksiyonun yapıs?na, mineral besin içeriçine ve hedef pazardaki mevzuat tan?m?na göre netleşir.",
    offerCards: liquidOfferCardsBySlug["sivi-organomineral"],
    equipmentTitle: liquidEquipmentTitle,
    equipment: liquidEquipment,
    criticalTopics: liquidCriticalTopicsBySlug["sivi-organomineral"],
    faqs: liquidFaqsBySlug["sivi-organomineral"],
    formTitle: "Sıvı organomineral gübre tesisi için teklif veya teknik g?r??me talep edin",
    formDescription: "Kapasite, batch yapıs?, ürün reçetesi, hammadde tipi ve dolum ihtiyacınıza göre size uygun sıvı gübre üretim çöz?m?n? birlikte değerlendirelim.",
    formFields: [{ id: "productGroup", label: "ürün Grubu", type: "select", required: true, options: ["Sivi Organomineral", "Sivi NPK", "Sivi Amino Asit", "Organik Biyostimülan", "Diçer"] }, ...liquidCommonFields],
  },
  "sivi-npk": {
    heroBadge: "ALT çöz?M",
    heroTitle: "Sıvı NPK Gübre üretim Tesisleri",
    heroDescription: "Azot, fosfor ve potasyum içeren sıvı gübrelerin dozajlama, çözündürme, kar??tırma, homojenizasyon, filtrasyon ve dolum süreçlerine uygun üretim tesisleri.",
    rawMaterials: ["Azot kayna?? hammaddeler", "Fosfor kayna?? hammaddeler", "Potasyum kayna?? hammaddeler", "çözün?r mineral besin kaynaklar?", "Mikro element katkılar?", "pH düzenleyiciler", "Stabilite yardımcılar?", "Su bazl? ta??y?c? faz"],
    namingExplanation: "NPK ifadesi, ?rının temel bitki besin elementleri olan azot (N), fosfor (P) ve potasyumu (K) birlikte içermesinden gelir. ürün sıvı formda hazırlanm?? olsa da ana besleme omurgas? N, P ve K ise Sıvı NPK Gübre olarak adland?r?l?r.",
    namingNote: "Nihai ürün sınıf?, hedef analiz de?erine ve y?r?rl?kteki mevzuata göre netleşir.",
    offerCards: liquidOfferCardsBySlug["sivi-npk"],
    equipmentTitle: liquidEquipmentTitle,
    equipment: liquidEquipment,
    criticalTopics: liquidCriticalTopicsBySlug["sivi-npk"],
    faqs: liquidFaqsBySlug["sivi-npk"],
    formTitle: "Sıvı NPK gübre tesisi için teklif veya teknik g?r??me talep edin",
    formDescription: "Batch kapasitesi, günlük üretim hedefi, hedef NPK formül? ve dolum ihtiyacınıza göre size uygun sıvı NPK üretim çöz?m?n? birlikte değerlendirelim.",
    formFields: [...liquidCommonFields.slice(0, 2), { id: "npkFormula", label: "Hedef NPK Formül?", type: "text" }, ...liquidCommonFields.slice(2)],
  },
  "sivi-amino-asit": {
    heroBadge: "ALT çöz?M",
    heroTitle: "Sıvı Amino Asit Gübre üretim Tesisleri",
    heroDescription: "Amino asit bazl? sıvı gübrelerin hazırlanmas?, homojenizasyonu, filtrasyonu ve dolumuna uygun üretim tesisleri.",
    rawMaterials: ["Amino asit ??zeltisi", "Protein hidrolizat? bazl? bileşenler", "Organik azot kaynaklar?", "Yardımcı mineral katkılar", "Mikro element destekleri", "pH düzenleyiciler", "Stabilite yardımcılar?", "Su bazl? ta??y?c? faz"],
    namingExplanation: "Bu ürün grubunda formülasyonun ana karakterini amino asit içeri?i belirler. ?rının temel fonksiyonu amino asit temelli ise Sıvı Amino Asit Gübre ifadesi teknik olarak doru kabul edilir.",
    namingNote: "Amino asit oran?, kullanılan ham maddenin kayna??na ve hedef ürün standard?na göre deği?ebilir.",
    offerCards: liquidOfferCardsBySlug["sivi-amino-asit"],
    equipmentTitle: liquidEquipmentTitle,
    equipment: liquidEquipment,
    criticalTopics: liquidCriticalTopicsBySlug["sivi-amino-asit"],
    faqs: liquidFaqsBySlug["sivi-amino-asit"],
    formTitle: "Sıvı amino asit gübre tesisi için teklif veya teknik g?r??me talep edin",
    formDescription: "Batch kapasitesi, günlük üretim hedefi, amino asit kayna??, filtrasyon gereksinimi ve dolum ihtiyacınıza göre size uygun çöz?m? birlikte değerlendirelim.",
    formFields: [...liquidCommonFields.slice(0, 2), { id: "aminoSource", label: "Amino Asit Kayna??", type: "text" }, { id: "filtrationNeed", label: "Filtrasyon Gereksinimi", type: "select", options: ["Standart", "Yüksek", "Hen?z net de?il"] }, ...liquidCommonFields.slice(2)],
  },
  "organik-sivi-gubre": {
    heroBadge: "ALT çöz?M",
    heroTitle: "Organik Sıvı Gübre Tesisleri",
    heroDescription: "Organik kökenli sıvı içeriklerle çalışan, karışım, stabilizasyon, filtrasyon ve doluma uygun üretim tesisleri.",
    rawMaterials: ["Organik kökenli sıvı ekstraktlar", "Organik madde içeren sıvı hammaddeler", "Doçal menşeli destek içerikleri", "Organik karbon ta??yan fraksiyonlar", "Stabilite yardımcılar?", "pH düzenleyiciler", "Su bazl? ta??y?c? faz"],
    namingExplanation: "Bu ürün grubunda formülasyonun ana karakteri organik kökenli bileşenlerden gelir. Besleme ve destek mant??? a??rl?kl? olarak organik içerikler üzerinden kuruldu?u için organik sıvı gübre ifadesi kullanıl?r.",
    namingNote: "Organik ürün tan?m?, hedef pazardaki mevzuat ve sertifikasyon beklentilerine göre ayr?ca değerlendirilmelidir.",
    offerCards: liquidOfferCardsBySlug["organik-sivi-gubre"],
    equipmentTitle: liquidEquipmentTitle,
    equipment: liquidEquipment,
    criticalTopics: liquidCriticalTopicsBySlug["organik-sivi-gubre"],
    faqs: liquidFaqsBySlug["organik-sivi-gubre"],
    formTitle: "Organik sıvı gübre tesisi için teklif veya teknik g?r??me talep edin",
    formDescription: "Organik hammadde yapıs?, batch kapasitesi, stabilite ihtiyaç? ve dolum hedefinize göre size uygun organik sıvı üretim çöz?m?n? birlikte değerlendirelim.",
    formFields: liquidCommonFields,
  },
  "organik-biyostimulan": {
    heroBadge: "ALT çöz?M",
    heroTitle: "Biyostimülan üretim Tesisleri",
    heroDescription: "Biyolojik etkili destek içeriklerinin sıvı formda hazırlanmas?, kar??tür?lmas?, filtrasyonu ve dolumuna uygun üretim tesisleri.",
    rawMaterials: ["Bitkisel ekstraktlar", "Deniz yosunu bazl? içerikler", "Amino asit veya peptit bazl? destek bileşenleri", "Humik / fulvik yap?lar", "Organik aktif fraksiyonlar", "Stabilizat?rler", "pH düzenleyiciler", "Su bazl? ta??y?c? faz"],
    namingExplanation: "Biyostimülan ürünler, dorudan klasik NPK besleme mant??ından çok bitkinin geli?im süreçlerini, stres tolerans?n? ve besin kullanım etkinliçini desteklemeye odaklan?r. Bu nedenle formülasyonun ana etkisi biyostimülan karakter ta??yorsa bu isim kullanıl?r.",
    namingNote: "ürün sınıfland?rmas?, içerik yapıs? ve ilgili mevzuat tan?mlarına göre deerlendirilir.",
    offerCards: liquidOfferCardsBySlug["organik-biyostimulan"],
    equipmentTitle: liquidEquipmentTitle,
    equipment: liquidEquipment,
    criticalTopics: liquidCriticalTopicsBySlug["organik-biyostimulan"],
    faqs: liquidFaqsBySlug["organik-biyostimulan"],
    formTitle: "Biyostimülan üretim tesisi için teklif veya teknik g?r??me talep edin",
    formDescription: "Aktif içerik yapıs?, batch kapasitesi, ürün hedefi ve dolum ihtiyacınıza göre size uygun biyostimülan üretim çöz?m?n? birlikte değerlendirelim.",
    formFields: liquidCommonFields,
  },
  "granul-organomineral": {
    heroBadge: "ALT çöz?M",
    heroTitle: "Granül Organomineral Gübre üretim Tesisleri",
    heroDescription: "Organik ve mineral içeriklerin granül formda i?lendi?i, karışım, granülasyon, kurutma, eleme, soğutma ve paketleme süreçlerine uygun üretim tesisleri.",
    rawMaterials: ["Organik madde içeren kat? hammaddeler", "Mineral besin elementleri", "Azot, fosfor ve potasyum kaynaklar?", "Organik bazl? ta??y?c? ve bağlay?c? içerikler", "Mikro element katkılar?", "Nem ayar? ve proses yardımcılar?"],
    namingExplanation: "Granül organomineral gübreler, organik içerik ile mineral besin elementlerinin birlikte bulundu?u ve granül formda son ürüne dönüştür?ld??? ürün grubudur. Organomineral ifadesi ?rının ?ift karakterini, granül ifadesi ise son ürün formunu anlatür.",
    namingNote: "Nihai ürün sınıf?, içerik oranlar? ve y?r?rl?kteki mevzuata göre netleşir.",
    offerCards: granuleOfferCardsBySlug["granul-organomineral"],
    equipmentTitle: granuleEquipmentTitle,
    equipment: granuleEquipment,
    criticalTopics: granuleCriticalTopicsBySlug["granul-organomineral"],
    faqs: granuleFaqsBySlug["granul-organomineral"],
    formTitle: "Granül organomineral gübre tesisi için teklif veya teknik g?r??me talep edin",
    formDescription: "Saatlik kapasite, reçete yapıs?, granül boyutu ve son hat ihtiyacınıza göre size uygun granül üretim çöz?m?n? birlikte değerlendirelim.",
    formFields: granuleCommonFields,
  },
  "granul-npk": {
    heroBadge: "ALT çöz?M",
    heroTitle: "NPK Granül Gübre üretim Tesisleri",
    heroDescription: "Azot, fosfor ve potasyum içeren granül gübrelerin dozajlama, karışım, granülasyon, kurutma, eleme, soğutma ve paketleme hatlar?.",
    rawMaterials: ["Azot kayna?? hammaddeler", "Fosfor kayna?? hammaddeler", "Potasyum kayna?? hammaddeler", "Dolgu ve dengeleyici hammaddeler", "Bağlay?c? ve proses yardımcılar?", "Mikro element katkılar?"],
    namingExplanation: "Formülasyonun ana omurgas?n? azot (N), fosfor (P) ve potasyum (K) oluşturdu?u için ürün NPK sınıfında deerlendirilir. Son ürün granül formda oldu?u için de NPK Granül Gübre ifadesi kullanıl?r.",
    namingNote: "NPK oran?, hedef analize ve seçilen hammaddelere göre belirlenir.",
    offerCards: granuleOfferCardsBySlug["granul-npk"],
    equipmentTitle: granuleEquipmentTitle,
    equipment: granuleEquipment,
    criticalTopics: granuleCriticalTopicsBySlug["granul-npk"],
    faqs: granuleFaqsBySlug["granul-npk"],
    formTitle: "NPK granül gübre tesisi için teklif veya teknik g?r??me talep edin",
    formDescription: "Saatlik kapasite, hedef NPK analizi, granül boyutu ve paketleme ihtiyacınıza göre size uygun granül üretim çöz?m?n? birlikte değerlendirelim.",
    formFields: [...granuleCommonFields, { id: "npkFormula", label: "Hedef NPK Formül?", type: "text" }],
  },
  "granul-kompost-tesisleri": {
    heroBadge: "ALT çöz?M",
    heroTitle: "Granül Kompost Tesisleri",
    heroDescription: "Kompost bazl? hammaddelerin granül formda son ürüne dönüştür?ld???, karışım, granülasyon, kurutma, eleme, soğutma ve paketleme süreçlerine uygun üretim tesisleri.",
    rawMaterials: [
      "Eleklenmi? kompost",
      "Kurutulmu? organik kompost fraksiyonu",
      "Organik madde içeren ince ???t?lm?? hammaddeler",
      "Gerekirse bağlay?c? yardımcılar",
      "Nem düzenleyici proses katkılar?",
      "Ak?? ve granül oluşumunu destekleyen yardımcı maddeler",
      "Gerekirse mineral destek bileşenleri",
      "Mikrobiyal veya organik bazl? özel katkılar",
    ],
    namingExplanation: "Bu ürün grubu, ana yapıs?n? kompost bazl? organik hammaddelerden al?r ve son ürün granül formda elde edilir. Bu nedenle granül kompost ifadesi kullanıl?r. ?rının temel karakteri organik kompost içeriçine dayan?rken, son ürün formu granül oldu?u için isimlendirme bu iki özelli?i birlikte yans?tür.",
    namingNote: "Nihai ürün sınıfland?rmas?, kompost oran?na, ek katkı yapıs?na ve hedef pazardaki mevzuata göre netleşir.",
    offerCards: [{ title: "Proses Tasarım?", text: "Kompost bazl? hammaddenin yapıs?na göre granül üretim ak???n? planlıyoruz." }, { title: "Granülasyon Sistemi Seçimi", text: "Nem, organik yap? ve hedef granül boyutuna göre uygun granülasyon kurgusunu belirliyoruz." }, { title: "Kurutma ve Eleme Hatt?", text: "Granül kompost ürünlerinde stabil nem ve uygun tane boyutu için hat yapıs?n? oluşturuyoruz." }, { title: "soğutma ve Son ürün Hazırlama", text: "Depolama ve paketleme öncesi ürün kararlılığın? art?ran son i?lemleri planlıyoruz." }, { title: "Toz ve Koku Kontrol?", text: "Organik içerikli üretim süreçlerinde çevresel kontrol ve saha temizliği için uygun sistemler sunuyoruz." }, { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, yerleşim, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." }],
    equipmentTitle: granuleEquipmentTitle,
    equipment: granuleCompostEquipment,
    criticalTopics: granuleCriticalTopicsBySlug["granul-kompost-tesisleri"],
    faqs: granuleFaqsBySlug["granul-kompost-tesisleri"],
    formTitle: "Granül kompost tesisi için teklif veya teknik g?r??me talep edin",
    formDescription: "Kompost yapıs?, hedef granül boyutu, kapasite ve kurulum modelinize göre size uygun granül kompost üretim çöz?m?n? birlikte değerlendirelim.",
    formFields: [
      { id: "hourlyCapacity", label: "Saatlik Kapasite", type: "number", unit: "ton/saat" },
      { id: "granuleSize", label: "Hedef Granül Boyutu", type: "text" },
      { id: "dryingNeed", label: "Kurutma Gerekli mi?", type: "select", options: ["Evet", "Hayır", "Hen?z net de?il"] },
      { id: "packagingNeed", label: "Paketleme ?htiyac?", type: "select", options: ["Evet", "Hayır", "Hen?z net de?il"] },
      { id: "automationLevel", label: "Otomasyon Seviyesi", type: "select", options: ["Yar? Otomatik", "Tam Otomatik", "Hen?z net de?il"] },
    ],
  },
  "toz-organomineral": {
    heroBadge: "ALT çöz?M",
    heroTitle: "Toz Organomineral Gübre üretim Tesisleri",
    heroDescription: "Organik ve mineral içeriklerin toz formda kar??tür?ld???, dozajland???, elendi?i ve son ürün olarak paketlendi?i üretim tesisleri.",
    rawMaterials: ["Organik içerik ta??yan toz hammaddeler", "Mineral besin elementleri", "Organik katkıl? toz fraksiyonlar", "Mikro element katkılar?", "Ak?? düzenleyici yardımcılar", "Toz bazl? ta??y?c?lar"],
    namingExplanation: "?rının hem organik karakter ta??yan bileşenleri hem de mineral besin kaynakların? birlikte içermesi organomineral tan?m?n? oluşturur. Son ürün toz formda sonland?r?ld??? için toz organomineral gübre ifadesi kullanıl?r.",
    namingNote: "??erik oranlar? ve ürün sınıf?, hedef pazardaki mevzuat ?er?evesinde deerlendirilir.",
    offerCards: powderOfferCardsBySlug["toz-organomineral"],
    equipmentTitle: powderEquipmentTitle,
    equipment: powderEquipment,
    criticalTopics: powderCriticalTopicsBySlug["toz-organomineral"],
    faqs: powderFaqsBySlug["toz-organomineral"],
    formTitle: "Toz organomineral gübre tesisi için teklif veya teknik g?r??me talep edin",
    formDescription: "Saatlik kapasite, reçete yapıs?, dozaj hassasiyeti ve paketleme ihtiyacınıza göre size uygun toz üretim çöz?m?n? birlikte değerlendirelim.",
    formFields: powderCommonFields,
  },
  "toz-npk": {
    heroBadge: "ALT çöz?M",
    heroTitle: "NPK Toz Gübre üretim Tesisleri",
    heroDescription: "Azot, fosfor ve potasyum içeren toz gübrelerin hassas dozajlama, karışım ve paketleme süreçlerine uygun üretim tesisleri.",
    rawMaterials: ["Azot kayna?? toz hammaddeler", "Fosfor kayna?? hammaddeler", "Potasyum kayna?? hammaddeler", "Mikro element katkılar?", "Dolgu ve dengeleyici toz hammaddeler", "Ak?? düzenleyici yardımcılar"],
    namingExplanation: "Formülasyonun temel besleme omurgas?n? azot (N), fosfor (P) ve potasyum (K) oluşturdu?u için ürün NPK sınıfında deerlendirilir. Son ürün granül de?il, toz formda sonland?r?ld??? için NPK Toz Gübre olarak adland?r?l?r.",
    namingNote: "Hedef analiz ve nihai sınıflandırma, kullanılan hammaddelere ve formülasyon yapıs?na göre netleşir.",
    offerCards: powderOfferCardsBySlug["toz-npk"],
    equipmentTitle: powderEquipmentTitle,
    equipment: powderEquipment,
    criticalTopics: powderCriticalTopicsBySlug["toz-npk"],
    faqs: powderFaqsBySlug["toz-npk"],
    formTitle: "NPK toz gübre tesisi için teklif veya teknik g?r??me talep edin",
    formDescription: "Saatlik kapasite, hedef NPK oran?, eleme ihtiyaç? ve paketleme senaryonuza göre size uygun toz üretim çöz?m?n? birlikte değerlendirelim.",
    formFields: [...powderCommonFields, { id: "npkFormula", label: "Hedef NPK Formül?", type: "text" }],
  },
};

export function getFertilizerSubsolutionConfig(subsector: string) {
  const config = fertilizerSubsolutionConfigs[subsector];
  return config ? normalizeTextTree(config) : null;
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

