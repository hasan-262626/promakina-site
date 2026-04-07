import { getSectorCardBySlug } from "./sector-subsectors-data";

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

const granuleLinkSlugs = ["granul-organomineral", "granul-npk", "granul-kompost"];
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

const liquidEquipmentTitle = "Sıvı gübre üretiminde kullanılan başlıca makine ve ekipmanlar";
const granuleEquipmentTitle = "Granül gübre üretiminde kullanılan başlıca makine ve ekipmanlar";
const powderEquipmentTitle = "Toz gübre üretiminde kullanılan başlıca makine ve ekipmanlar";

const liquidEquipment: SubsolutionCard[] = [
  { title: "Çözündürme Tankları", text: "Katı ve sıvı hammaddelerin kontrollü biçimde çözündürülmesi için tank sistemleri." },
  { title: "Karıştırıcılı Tanklar", text: "Farklı bileşenlerin dengeli birleşimi için karıştırma ve proses hazırlama tankları." },
  { title: "Homojenizatör", text: "Partiler arası kalite farkını azaltmak ve ürün stabilitesini artırmak için homojenizasyon çözümleri." },
  { title: "Filtre Sistemleri", text: "Dolum öncesi berraklık ve proses güvenliği için uygun filtrasyon kademeleri." },
  { title: "Soğutma Tankları", text: "Sıcaklık yönetimi ve ürün kararlılığı için proses destek tankları." },
  { title: "Stok / Mamul Tankları", text: "Dolum öncesi mamul ürünün güvenli şekilde bekletilmesi ve dengelenmesi için tank sistemleri." },
  { title: "Dozajlama Sistemleri", text: "Sıvı ve katı bileşenlerin reçeteye uygun kontrollü beslenmesi için dozaj altyapısı." },
  { title: "Sıvı Dolum �zişeleme", text: "�zişe, bidon veya özel ambalaj yapıları için hassas sıvı dolum çözümleri." },
  { title: "�zişe Etiketleme Makinası", text: "Son ürünün düzgün, hızlı ve standart etiketlenmesi için etiketleme sistemleri." },
];

const granuleEquipment: SubsolutionCard[] = [
  { title: "Ham Madde Besleme ve Dozajlama Sistemleri", text: "Granül reçetesine uygun kontrollü hammadde besleme ve tartım altyapısı sağlar." },
  { title: "Karıştırıcılar", text: "Granülasyon öncesi hammaddelerin homojen biçimde hazırlanması için karışım ekipmanlarıdır." },
  { title: "Granülatör Tamburu", text: "Reçeteye uygun granül yapısının oluşması için ana şekillendirme ve granülasyon ekipmanıdır." },
  { title: "Kurutma Tamburu", text: "Granül ürünün hedef neme ulaşması ve stabil hale gelmesi için kontrollü kurutma sağlar." },
  { title: "Eleme Sistemleri", text: "Tane boyutu standardını korumak ve geri dönüş akışını ayırmak için sınıflandırma yapar." },
  { title: "Soğutma Tamburu", text: "Kurutma sonrası ürün sıcaklığını dengeleyerek son ürün kararlılığını artırır." },
  { title: "Kaplama Tamburu", text: "Akışkanlık, yüzey kalitesi ve ürün dayanımı için kaplama veya son işlem adımlarını destekler." },
  { title: "Toz Toplama Sistemleri", text: "Granül hatlarında çevresel güvenlik ve proses temizliği için toz kontrolü sağlar." },
  { title: "Paketleme ve Paletleme Çözümleri", text: "Son ürünün torbalanması, istiflenmesi ve sevkiyata hazırlanması için entegre son hat çözümleridir." },
];

const granuleCompostEquipment: SubsolutionCard[] = [
  { title: "Ham Madde Besleme ve Dozajlama Sistemleri", text: "Kompost bazlÄ± hammaddelerin kontrollÃ¼ hatta alÄ±nmasÄ± ve reÃ§eteye uygun beslenmesi iÃ§in dozaj altyapÄ±sÄ± saÄŸlar." },
  { title: "KarÄ±ÅŸtÄ±rÄ±cÄ±lar", text: "GranÃ¼lasyon Ã¶ncesinde kompost fraksiyonlarÄ±nÄ±n ve yardÄ±mcÄ± katkÄ±larÄ±n homojen biÃ§imde hazÄ±rlanmasÄ±nÄ± destekler." },
  { title: "GranÃ¼latÃ¶r Tamburu", text: "Kompost bazlÄ± karÄ±ÅŸÄ±mÄ±n istenen granÃ¼l formuna dÃ¶nÃ¼ÅŸmesi iÃ§in ana ÅŸekillendirme ekipmanÄ± olarak Ã§alÄ±ÅŸÄ±r." },
  { title: "Kurutma Tamburu", text: "GranÃ¼l kompost Ã¼rÃ¼nÃ¼nde hedef nem seviyesine ulaÅŸmak ve depolama kararlÄ±lÄ±ÄŸÄ±nÄ± artÄ±rmak iÃ§in kontrollÃ¼ kurutma saÄŸlar." },
  { title: "Eleme Sistemleri", text: "Hedef tane boyutunu korumak, iri ve ince fraksiyonlarÄ± ayÄ±rmak iÃ§in granÃ¼l sÄ±nÄ±flandÄ±rmasÄ±nÄ± yÃ¶netir." },
  { title: "SoÄŸutma Tamburu", text: "Kurutma sonrasÄ± Ã¼rÃ¼n sÄ±caklÄ±ÄŸÄ±nÄ± dengeleyerek granÃ¼l kompostun paketleme Ã¶ncesi stabil hale gelmesini saÄŸlar." },
  { title: "Toz Toplama Sistemleri", text: "Organik karakterli granÃ¼l Ã¼retiminde oluÅŸan tozu kontrol altÄ±nda tutarak saha temizliÄŸini ve Ã§evresel gÃ¼venliÄŸi destekler." },
  { title: "KonveyÃ¶r ve ElevatÃ¶r HatlarÄ±", text: "Kompost bazlÄ± malzemenin hazÄ±rlama, granÃ¼lasyon, kurutma ve paketleme kademeleri arasÄ±nda gÃ¼venli transferini saÄŸlar." },
  { title: "Paketleme ve Paletleme Ã‡Ã¶zÃ¼mleri", text: "GranÃ¼l kompost Ã¼rÃ¼nÃ¼nÃ¼n torbalanmasÄ±, paletlenmesi ve sevkiyata hazÄ±rlanmasÄ± iÃ§in son hat entegrasyonu sunar." },
];

const powderEquipment: SubsolutionCard[] = [
  { title: "Ham Madde Besleme Sistemleri", text: "Toz hammaddelerin kararlı ve kontrollü biçimde hatta alınmasını sağlar." },
  { title: "Mikro / Makro Dozajlama", text: "Düşük ve yüksek oranlı bileşenlerin reçeteye uygun beslenmesi için hassas dozaj altyapısı sunar." },
  { title: "Dozaj Kantarları", text: "Toz ürün formülasyonlarında doğru tartım ve proses kontrolü için yüksek hassasiyetli ölçüm sağlar." },
  { title: "Karıştırıcılar", text: "Toz hammaddelerin homojen dağılımla birleşmesi için ana karışım ekipmanlarıdır." },
  { title: "Eleme Sistemleri", text: "İstenmeyen topak veya iri parçaları ayırarak ürün standardını destekler." },
  { title: "Konveyör ve Helezon Hatları", text: "Malzemenin proses boyunca kontrollü ve güvenli biçimde taşınmasını sağlar." },
  { title: "Elevatör Sistemleri", text: "Dikey transfer ihtiyacı olan noktalarda düzenli ürün akışı için kullanılır." },
  { title: "Toz Toplama Sistemleri", text: "Transfer ve paketleme noktalarında emisyonu azaltmak ve çalışma güvenliğini artırmak için görev yapar." },
  { title: "Paketleme Sistemleri", text: "Toz son ürünün torbalama ve sevkiyat hazırlığında kontrollü dolum sağlar." },
];

const liquidCommonFields: SubsolutionFormField[] = [
  { id: "batchCapacity", label: "Batch Kapasitesi", type: "number", unit: "ton/batch" },
  { id: "dailyTarget", label: "Günlük Üretim Hedefi", type: "number", unit: "ton/gün" },
  { id: "automationLevel", label: "Otomasyon Seviyesi", type: "select", options: ["Yarı Otomatik", "Tam Otomatik", "Henüz net değil"] },
  { id: "fillingNeed", label: "Dolum İhtiyacı", type: "select", options: ["Evet", "Hayır", "Henüz net değil"] },
];

const granuleCommonFields: SubsolutionFormField[] = [
  { id: "hourlyCapacity", label: "Saatlik Kapasite", type: "number", unit: "ton/saat" },
  { id: "automationLevel", label: "Otomasyon Seviyesi", type: "select", options: ["Yarı Otomatik", "Tam Otomatik", "Henüz net değil"] },
  { id: "packagingNeed", label: "Paketleme İhtiyacı", type: "select", options: ["Evet", "Hayır", "Henüz net değil"] },
  { id: "granuleSize", label: "Granül Boyutu", type: "text" },
  { id: "dryingNeed", label: "Kurutma İhtiyacı", type: "select", options: ["Evet", "Hayır", "Henüz net değil"] },
];

const powderCommonFields: SubsolutionFormField[] = [
  { id: "hourlyCapacity", label: "Saatlik Kapasite", type: "number", unit: "ton/saat" },
  { id: "automationLevel", label: "Otomasyon Seviyesi", type: "select", options: ["Yarı Otomatik", "Tam Otomatik", "Henüz net değil"] },
  { id: "packagingNeed", label: "Paketleme İhtiyacı", type: "select", options: ["Evet", "Hayır", "Henüz net değil"] },
  { id: "screeningNeed", label: "Eleme İhtiyacı", type: "select", options: ["Evet", "Hayır", "Henüz net değil"] },
  { id: "dustControlNeed", label: "Toz Kontrol İhtiyacı", type: "select", options: ["Evet", "Hayır", "Henüz net değil"] },
];

const liquidOfferCardsBySlug: Record<string, SubsolutionCard[]> = {
  "sivi-organomineral": [
    { title: "Proses Tasarımı", text: "Ürün reçetesi, hammaddeler ve hedef ürün özelliklerine göre sıvı üretim prosesini planlıyoruz." },
    { title: "Uygun Makine Kurgusu", text: "Çözündürme, karıştırma, homojenizasyon, filtrasyon ve dolum için doğru makine kombinasyonunu oluşturuyoruz." },
    { title: "Otomasyon ve Dozajlama", text: "Hammadde girişlerinden son ürün hazırlamaya kadar kontrollü ve izlenebilir üretim altyapısı sağlıyoruz." },
    { title: "Dolum ve Son Hat Uyumları", text: "IBC, bidon, şişe veya özel ambalaj yapısına uygun dolum ve etiketleme çözümleri sunuyoruz." },
    { title: "Revizyon ve Kapasite Artırımı", text: "Mevcut sıvı gübre hatlarında kapasite artırımı, revizyon ve proses iyileştirme seçenekleri geliştiriyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalatı, saha yerleşimi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "sivi-npk": [
    { title: "Proses Tasarımı", text: "Hedef NPK analizi, çözünürlük sınırları ve hammadde davranışına göre sıvı üretim sürecini planlıyoruz." },
    { title: "Uygun Makine Kurgusu", text: "Çözündürme, karıştırma, homojenizasyon, filtrasyon ve dolum için doğru makine kombinasyonunu oluşturuyoruz." },
    { title: "Otomasyon ve Dozajlama", text: "N, P ve K kaynaklarının kontrollü beslenmesi için reçete bazlı otomasyon altyapısı kuruyoruz." },
    { title: "Filtrasyon ve Stabilite Kontrolü", text: "Kristallenme ve faz ayrımı risklerini azaltmak için filtrasyon ve stabilite kademelerini birlikte kurguluyoruz." },
    { title: "Dolum ve Son Hat Uyumları", text: "�zişe, bidon veya IBC senaryolarına uygun dolum ve etiketleme çözümleri sunuyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalatı, saha yerleşimi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "sivi-amino-asit": [
    { title: "Amino Asit Bazlı Proses Tasarımı", text: "Amino asit kaynağına, berraklık ihtiyacına ve hedef kullanım senaryosuna göre proses altyapısını planlıyoruz." },
    { title: "Uygun Tank ve Filtrasyon Kurgusu", text: "Çözeltinin davranışına göre karıştırma, bekletme ve filtrasyon altyapısını birlikte oluşturuyoruz." },
    { title: "Stabilite ve Berraklık Yönetimi", text: "Ürünün görsel kalitesini ve depolama kararlılığını destekleyecek proses yaklaşımı geliştiriyoruz." },
    { title: "Otomasyon ve Dozajlama", text: "Farklı amino asit ve yardımcı katkı akışlarını reçeteye uygun biçimde yönetiyoruz." },
    { title: "Dolum ve Ambalaj Uyumu", text: "�zişe, bidon ve özel ambalaj yapıları için uygun dolum kurgusunu tasarlıyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalatı, saha yerleşimi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "organik-sivi-gubre": [
    { title: "Organik İçerik Uyumlu Proses Tasarımı", text: "Doğal menşeli hammaddelerin davranışına göre karışım, bekletme ve dolum altyapısını planlıyoruz." },
    { title: "Tank ve Karışım Altyapısı", text: "Organik fraksiyonların dengeli birleşimi için doğru tank, karıştırıcı ve transfer yapısını kuruyoruz." },
    { title: "Koku ve Stabilite Yaklaşımı", text: "Ürün kararlılığı ile proses konforunu birlikte ele alan teknik çözümler geliştiriyoruz." },
    { title: "Filtrasyon ve Dolum Çözümleri", text: "Hedef kullanım ve ambalaj tipine uygun filtrasyon ve dolum kademeleri oluşturuyoruz." },
    { title: "Otomasyon ve Reçete Yönetimi", text: "Ürün geçişlerini ve reçete takibini izlenebilir hale getiren otomasyon altyapısı sağlıyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalatı, saha yerleşimi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "organik-biyostimulan": [
    { title: "Biyostimülan Proses Kurgusu", text: "Aktif içeriklerin yapısına göre karışım, bekletme, filtrasyon ve dolum sürecini birlikte planlıyoruz." },
    { title: "Hassas Karışım ve Stabilite Yaklaşımı", text: "Bitkisel ekstraktlar, amino asitler ve humik fraksiyonlar için kontrollü proses altyapısı kuruyoruz." },
    { title: "Filtrasyon ve Berraklık Kontrolü", text: "Dolum güvenliği ve uygulama performansı için uygun filtrasyon kademelerini tanımlıyoruz." },
    { title: "Esnek Dolum Çözümleri", text: "�zişe, bidon veya farklı hacimlerde ambalaj senaryolarına uygun dolum altyapısı kuruyoruz." },
    { title: "Ürün Geliştirmeye Uygun Tesis Altyapısı", text: "Farklı biyostimülan reçetelerin aynı hatta yönetilebilmesi için esnek üretim kurgusu sağlıyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalatı, saha yerleşimi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
};

const granuleOfferCardsBySlug: Record<string, SubsolutionCard[]> = {
  "granul-organomineral": [
    { title: "Proses Tasarımı", text: "Organik ve mineral bileşenlerin granül formda dengeli birleşimi için proses akışını planlıyoruz." },
    { title: "Granülasyon Sistemi Seçimi", text: "Reçete yapısı, bağlayıcı ihtiyacı ve hedef granül karakterine göre doğru granülasyon çözümünü belirliyoruz." },
    { title: "Kurutma ve Eleme Hattı Kurgusu", text: "Granül dayanımı ve tane boyutu standardını koruyacak kurutma ve sınıflandırma kademeleri tasarlıyoruz." },
    { title: "Soğutma ve Geri Dönüş Yönetimi", text: "Elek üstü, elek altı ve proses içi geri dönüş akışlarını verimli şekilde yöneten hat altyapısı kuruyoruz." },
    { title: "Son Ürün Hazırlama", text: "Kaplama, son ürün iyileştirme ve paketleme öncesi hazırlık kademelerini entegre ediyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalatı, saha yerleşimi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "granul-npk": [
    { title: "Reçete Bazlı Proses Tasarımı", text: "Hedef NPK analizi ve granül karakterine göre proses akışını ve besleme dengesini birlikte planlıyoruz." },
    { title: "Granülasyon Hattı Seçimi", text: "Formülasyona ve kapasite ihtiyacına göre uygun granülasyon altyapısını belirliyoruz." },
    { title: "Kurutma ve Soğutma Kurgusu", text: "Nem ve sıcaklık yönetimini birlikte ele alarak son ürün kararlılığını destekliyoruz." },
    { title: "Standart Tane Boyutu Yönetimi", text: "Eleme, geri dönüş ve son ürün çevrimleri ile hedef granül dağılımını kontrol altında tutuyoruz." },
    { title: "Son Hat ve Paketleme Çözümleri", text: "Torbalama, paletleme ve sevkiyata hazırlık için entegre son hat senaryoları geliştiriyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalatı, saha yerleşimi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
};


const powderOfferCardsBySlug: Record<string, SubsolutionCard[]> = {
  "toz-organomineral": [
    { title: "Toz Ürün Proses Tasarımı", text: "Organik ve mineral toz hammaddelerin reçeteye uygun karışımı için proses akışını planlıyoruz." },
    { title: "Hassas Dozajlama ve Tartım", text: "Mikro ve makro bileşenlerin doğru tartımı için kontrollü besleme ve dozaj altyapısı kuruyoruz." },
    { title: "Homojen Karışım Yaklaşımı", text: "Farklı yoğunluk ve akış karakterine sahip hammaddeler için doğru karışım yapısını oluşturuyoruz." },
    { title: "Toz Kontrol ve Filtrasyon", text: "Transfer ve paketleme noktalarında emisyonu azaltan toz emiş çözümleri geliştiriyoruz." },
    { title: "Eleme ve Son Ürün Hazırlama", text: "Topak kontrolü, ürün standardı ve torbalamaya uygun son ürün hazırlığı için eleme çözümleri sunuyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalatı, saha yerleşimi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "toz-npk": [
    { title: "Reçete Bazlı Toz Hat Tasarımı", text: "Hedef NPK analizi ve ürün akış davranışına göre toz üretim hattının temel yapısını planlıyoruz." },
    { title: "Tartım ve Dozajlama Sistemleri", text: "Makro ve mikro bileşenlerin hassas oranlarda hatta alınması için kontrollü dozaj altyapısı kuruyoruz." },
    { title: "Karışım ve Eleme Kurgusu", text: "Homojen ürün kalitesi ve topak kontrolü için karışım ve eleme kademelerini birlikte tasarlıyoruz." },
    { title: "Toz Emiş Altyapısı", text: "Transfer ve paketleme noktalarında toz oluşumunu kontrol altında tutan emiş çözümleri geliştiriyoruz." },
    { title: "Paketleme Uyumu", text: "Son ürünün akış davranışına uygun torbalama ve son hat senaryolarını projeye dahil ediyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalatı, saha yerleşimi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
};

const liquidCriticalTopicsBySlug: Record<string, SubsolutionCard[]> = {
  "sivi-organomineral": [
    { title: "Çözünürlük ve stabilite", text: "Ürün içinde çökme, ayrışma ve bulanıklık oluşmaması için proses doğru kurulmalıdır." },
    { title: "Hammadde uyumu", text: "Organik ve mineral içeriklerin birlikte davranışı dikkatle değerlendirilmelidir." },
    { title: "pH ve reaksiyon kontrolü", text: "Sıvı ürünlerde kalite ve stabilite için pH kontrolü kritik olabilir." },
    { title: "Filtrasyon seviyesi", text: "Dolum sisteminin sorunsuz çalışması için uygun filtrasyon kademesi seçilmelidir." },
    { title: "Homojenizasyon kalitesi", text: "Ürün partileri arasında standart kalite için yeterli karışım ve homojenizasyon gerekir." },
    { title: "Ambalaj ve dolum uyumu", text: "Son ürünün akışkanlığı ve viskozitesi dolum hattıyla uyumlu olmalıdır." },
    { title: "Depolama kararlılığı", text: "Mamul tankında bekleme süresince ürün yapısının bozulmaması önemlidir." },
    { title: "Temizlik ve hat hijyeni", text: "Ürün geçişleri ve hat temizliği, kalite sürekliliği açısından dikkatle planlanmalıdır." },
  ],
  "sivi-npk": [
    { title: "Çözünürlük ve stabilite", text: "Yüksek analizli NPK formüllerde çözeltinin berrak ve kararlı kalması için çözünürlük sınırları iyi yönetilmelidir." },
    { title: "Hammadde uyumu", text: "Azot, fosfor ve potasyum kaynaklarının aynı formül içindeki davranışı birlikte değerlendirilmelidir." },
    { title: "pH ve reaksiyon kontrolü", text: "Çözeltide reaksiyon, kristallenme ve stabilite risklerini azaltmak için pH dengesi doğru kurulmalıdır." },
    { title: "Filtrasyon seviyesi", text: "Filtrasyon seviyesi hem ürün berraklığını hem de dolum hattı güvenliğini doğrudan etkiler." },
    { title: "Homojenizasyon kalitesi", text: "Mikro katkılar ve çözünür tuzların partiler arasında eşit dağılması için yeterli homojenizasyon gerekir." },
    { title: "Ambalaj ve dolum uyumu", text: "Ürünün yoğunluğu ve akış karakteri seçilen dolum ambalajı ile uyumlu olmalıdır." },
    { title: "Depolama kararlılığı", text: "Depolama sürecinde kristallenme, çökelme ve faz ayrımı oluşmaması için mamul tankı yönetimi önemlidir." },
    { title: "Temizlik ve hat hijyeni", text: "Formül değişimlerinde hat temizliği dikkatle planlanmazsa ürün geçişlerinde kalite sapmaları oluşabilir." },
  ],
  "sivi-amino-asit": [
    { title: "Çözünürlük ve stabilite", text: "Protein hidrolizatı veya amino asit bazlı ürünlerde berraklık ve uzun süreli stabilite birlikte değerlendirilmelidir." },
    { title: "Hammadde uyumu", text: "Amino asit kaynağı ile yardımcı mineral katkıların birlikte davranışı proses kurgusunu etkiler." },
    { title: "pH ve reaksiyon kontrolü", text: "Amino asit yapısının korunması ve istenmeyen reaksiyonların önlenmesi için pH dengesi önemlidir." },
    { title: "Filtrasyon seviyesi", text: "Filtrasyon seviyesi, dolum hattında sorun yaşanmaması ve son ürün görünümü için kritik rol oynar." },
    { title: "Homojenizasyon kalitesi", text: "Yoğun organik fraksiyonların her partide aynı kaliteyi vermesi için güçlü homojenizasyon gerekir." },
    { title: "Ambalaj ve dolum uyumu", text: "Viskozite ve akış davranışı ambalaj, dolum hızı ve etiketleme düzeniyle uyumlu olmalıdır." },
    { title: "Depolama kararlılığı", text: "Bekleme süresinde koku, renk veya faz ayrımı oluşmaması için depolama koşulları doğru tanımlanmalıdır." },
    { title: "Temizlik ve hat hijyeni", text: "Organik içerikli amino asit ürünlerinde hat temizliği, çapraz ürün etkisini sınırlamak için dikkatle planlanmalıdır." },
  ],
  "organik-sivi-gubre": [
    { title: "Çözünürlük ve stabilite", text: "Organik fraksiyonlu ürünlerde çökme, bulanıklık ve faz ayrımı oluşmaması için stabilite doğru yönetilmelidir." },
    { title: "Hammadde uyumu", text: "Doğal menşeli içeriklerin birlikte davranışı, akışkanlık ve raf ömrü açısından dikkatle değerlendirilmelidir." },
    { title: "pH ve reaksiyon kontrolü", text: "Organik içeriklerin kararlı kalması için pH ve proses koşulları kontrollü tutulmalıdır." },
    { title: "Filtrasyon seviyesi", text: "Filtrasyon seviyesi ürün tipine göre seçilmezse dolum performansı ve kullanım rahatlığı etkilenebilir." },
    { title: "Homojenizasyon kalitesi", text: "Yoğun organik içeriklerin partiler arasında aynı kaliteyi verebilmesi için homojenizasyon seviyesi yeterli olmalıdır." },
    { title: "Ambalaj ve dolum uyumu", text: "Dolum ekipmanı, ürünün viskozite ve akış karakterine uygun seçilmelidir." },
    { title: "Depolama kararlılığı", text: "Mamul tankında bekleme sürecinde ürün yapısının bozulmaması için depolama kararlılığı test edilmelidir." },
    { title: "Temizlik ve hat hijyeni", text: "Organik ürün geçişlerinde hat hijyeni ve temizlik planı kalite güvence açısından kritik önemdedir." },
  ],
  "organik-biyostimulan": [
    { title: "Çözünürlük ve stabilite", text: "Biyostimülan karakter taşıyan aktif fraksiyonların çözeltide kararlı kalması için stabilite doğru yönetilmelidir." },
    { title: "Hammadde uyumu", text: "Bitkisel ekstraktlar, amino asitler ve humik yapıların birlikte davranışı dikkatle değerlendirilmelidir." },
    { title: "pH ve reaksiyon kontrolü", text: "Aktif içeriklerin performansını korumak için pH ve reaksiyon penceresi kontrollü tutulmalıdır." },
    { title: "Filtrasyon seviyesi", text: "Dolum öncesi filtrasyon seviyesi, berraklık kadar uygulama güvenliği açısından da önem taşır." },
    { title: "Homojenizasyon kalitesi", text: "Partiler arası performans farkını azaltmak için aktif içerikler yeterli homojenizasyon ile hazırlanmalıdır." },
    { title: "Ambalaj ve dolum uyumu", text: "Ürünün hedef ambalaj ve uygulama senaryosuna uyumu dolum hattı seçimini doğrudan etkiler." },
    { title: "Depolama kararlılığı", text: "Aktif fraksiyonların depolama süresince bozulmaması için mamul tankı ve bekleme koşulları doğru planlanmalıdır." },
    { title: "Temizlik ve hat hijyeni", text: "Hat temizliği ve ürün geçişleri, biyolojik etkili içeriklerin farklı reçetelere taşınmaması için dikkatle yönetilmelidir." },
  ],
};

const granuleCriticalTopicsBySlug: Record<string, SubsolutionCard[]> = {
  "granul-organomineral": [
    { title: "Granül dayanımı", text: "Organik fraksiyonlu granüllerin taşıma ve paketleme sırasında kırılmaması için yeterli mekanik dayanım sağlanmalıdır." },
    { title: "Nem kontrolü", text: "Kurutma çıkışındaki nem seviyesi, hem depolama kararlılığı hem de granül bütünlüğü açısından kritik önemdedir." },
    { title: "Geri dönüş oranı", text: "Elek üstü ve elek altı geri dönüş akışları verimli yönetilmezse granülasyon dengesi bozulabilir." },
    { title: "Tane boyutu standardı", text: "Pazara uygun granül dağılımı için eleme ve granülasyon kademeleri birlikte optimize edilmelidir." },
    { title: "Homojen dağılım", text: "Organik ve mineral bileşenlerin granül yapıda dengeli dağılması ürün kalitesini belirler." },
    { title: "Kurutma verimi", text: "Yetersiz veya aşırı kurutma granül yapısını ve işletme maliyetini doğrudan etkiler." },
    { title: "Toz kontrolü", text: "Granülasyon ve eleme noktalarında oluşan ince partiküllerin doğru toplanması çevresel güvenlik için gereklidir." },
    { title: "Paketleme performansı", text: "Granül akışkanlığı ve tane bütünlüğü son hat ekipmanlarının kararlı çalışmasını desteklemelidir." },
  ],
  "granul-npk": [
    { title: "Granül dayanımı", text: "Yüksek analizli NPK granüllerinin kırılmadan taşınması için granülasyon ve bağlayıcı dengesi doğru kurulmalıdır." },
    { title: "Nem kontrolü", text: "Granül NPK ürünlerde hedef nem seviyesine ulaşmak hem akışkanlık hem de depolama kararlılığı için kritiktir." },
    { title: "Geri dönüş oranı", text: "Elek geri dönüş akışlarının doğru yönetilmesi proses verimini ve ürün standardını doğrudan etkiler." },
    { title: "Tane boyutu standardı", text: "Hedef granül çapı, ürünün pazardaki kabulü ve paketleme performansı açısından istikrarlı olmalıdır." },
    { title: "Homojen dağılım", text: "N, P ve K bileşenlerinin granül yapıda dengeli dağılması hedef analiz değerinin korunmasını sağlar." },
    { title: "Kurutma verimi", text: "Kurutma kademesindeki verim, granül yüzey kalitesi ve enerji tüketimi üzerinde doğrudan etkilidir." },
    { title: "Toz kontrolü", text: "Granül NPK hatlarında oluşan tozun etkin biçimde yönetilmesi hem çevre hem de ürün kaybı açısından önemlidir." },
    { title: "Paketleme performansı", text: "Son ürünün akış karakteri ve tane bütünlüğü, torbalama ve paletleme süreçleriyle uyumlu olmalıdır." },
  ],
  "granul-kompost": [
    { title: "Kompost giriş nemi", text: "Granülasyon verimi için kompost hammaddenin nem seviyesi kontrollü olmalıdır." },
    { title: "Organik yapının granülleşme davranışı", text: "Kompost bazlı hammaddelerin bağlanma ve granül oluşturma karakteri dikkatle değerlendirilmelidir." },
    { title: "Granül dayanımı", text: "Son ürünün taşıma ve paketleme sırasında dağılmaması için granül mukavemeti önemlidir." },
    { title: "Kurutma dengesi", text: "Aşırı kurutma veya yetersiz kurutma ürün kalitesini olumsuz etkileyebilir." },
    { title: "Tane boyutu standardı", text: "Pazar beklentisine uygun granül boyutu için eleme ve geri dönüş yönetimi doğru kurulmalıdır." },
    { title: "Toz ve koku kontrolü", text: "Organik karakterli üretimlerde çevresel kontrol sistemleri kritik öneme sahiptir." },
    { title: "Depolama kararlılığı", text: "Son ürünün depoda topaklanmaması ve akışkanlılığını koruması gerekir." },
    { title: "Paketleme performansı", text: "Granül ürünün torbalama ve sevkiyat performansı son kalite açısından önemlidir." },
  ],
};

const powderCriticalTopicsBySlug: Record<string, SubsolutionCard[]> = {
  "toz-organomineral": [
    { title: "Karışım homojenliği", text: "Organik ve mineral toz bileşenlerin reçeteye uygun dengeli dağılması ürün kalitesini belirler." },
    { title: "Toz kontrolü", text: "Transfer ve paketleme noktalarında oluşan tozun etkin biçimde yönetilmesi gerekir." },
    { title: "Akış davranışı", text: "Organik katkılı toz ürünlerde köprülenme ve düzensiz akış riskleri besleme performansını etkileyebilir." },
    { title: "Reçete doğruluğu", text: "Mikro ve makro bileşenlerin hassas tartımı hedef analiz değerleri için kritik önem taşır." },
    { title: "Eleme verimi", text: "Topakların ve istenmeyen iri parçaların ayrılması için eleme kademeleri doğru seçilmelidir." },
    { title: "Ambalaj uyumu", text: "Toz ürünün akışı, torbalama ve son hat ekipmanlarıyla uyumlu olmalıdır." },
    { title: "İş güvenliği", text: "Tozlu çalışma ortamlarında operatör güvenliği ve emisyon kontrolü birlikte düşünülmelidir." },
    { title: "Hijyen ve temizlik", text: "Hat temizliği ve ürün geçişleri, kalite sürekliliği ve kontaminasyon riskinin azaltılması için planlanmalıdır." },
  ],
  "toz-npk": [
    { title: "Karışım homojenliği", text: "N, P ve K bileşenlerinin reçeteye uygun dengeli dağılması hedef analiz değerlerinin korunması için kritiktir." },
    { title: "Toz kontrolü", text: "Toz NPK hatlarında transfer ve paketleme noktalarındaki emisyon doğru yönetilmelidir." },
    { title: "Akış davranışı", text: "Toz NPK ürünlerde akış düzeni torbalama performansını ve besleme kararlılığını doğrudan etkiler." },
    { title: "Reçete doğruluğu", text: "Hedef NPK oranının korunması için dozajlama, tartım ve karışım adımları hassas biçimde yönetilmelidir." },
    { title: "Eleme verimi", text: "Topaklaşma ve iri parça oluşumu varsa eleme verimi ürün standardı için belirleyici olur." },
    { title: "Ambalaj uyumu", text: "Ürünün akışkanlığı ve yığın davranışı seçilen paketleme sistemiyle uyumlu olmalıdır." },
    { title: "İş güvenliği", text: "Tozlu NPK hammaddelerle çalışırken operatör güvenliği ve toz emiş altyapısı birlikte ele alınmalıdır." },
    { title: "Hijyen ve temizlik", text: "Ürün geçişlerinde reçete karışmasını önlemek için hat temizliği ve bakım planı doğru kurgulanmalıdır." },
  ],
};

const liquidFaqsBySlug: Record<string, SubsolutionFaq[]> = {
  "sivi-organomineral": [
    { question: "Sıvı organomineral gübre tesisi ile sıvı NPK tesisi aynı hatta kurulabilir mi?", answer: "Evet, uygun tank, dozajlama, filtrasyon ve reçete yönetimi ile aynı hat üzerinde farklı ürün grupları çalışılabilir." },
    { question: "Sıvı üretimde kapasite nasıl belirlenir?", answer: "Kapasite çoğu zaman batch bazında, günlük üretim hedefi ve dolum senaryosu ile birlikte değerlendirilir." },
    { question: "Filtrasyon neden önemlidir?", answer: "Filtrasyon, ürün berraklığını, dolum hattı güvenliğini ve son kullanıcı uygulama performansını doğrudan etkiler." },
    { question: "Organik içerikli sıvı ürünlerde özel tasarım gerekir mi?", answer: "Evet, organik hammaddelerin viskozite, çökme, koku ve stabilite davranışına göre özel proses yaklaşımı gerekir." },
    { question: "Mevcut sıvı gübre hattı revize edilebilir mi?", answer: "Evet, mevcut ekipman yapısına göre kapasite artışı, filtrasyon iyileştirmesi, yeni ürün adaptasyonu ve dolum entegrasyonu yapılabilir." },
  ],
  "sivi-npk": [
    { question: "Sıvı NPK tesisi için hedef analiz nasıl belirlenir?", answer: "Hedef analiz, istenen NPK oranı, çözünür hammadde seçenekleri ve hedef pazardaki ürün ihtiyacına göre netleştirilir." },
    { question: "Aynı hatta farklı NPK formülleri üretilebilir mi?", answer: "Evet, uygun reçete yönetimi ve tank geçiş planı ile aynı hatta farklı analizlerde sıvı NPK ürünleri üretilebilir." },
    { question: "Kristalleşme riski nasıl yönetilir?", answer: "Çözünürlük sınırları, sıcaklık yönetimi, pH dengesi ve filtrasyon kademeleri birlikte değerlendirilerek kristalleşme riski azaltılır." },
    { question: "Dolum öncesi dinlendirme gerekli midir?", answer: "Formülasyona bağlı olarak homojenizasyon sonrası kontrollü bekletme, ürün kararlılığı açısından avantaj sağlayabilir." },
    { question: "Mevcut sıvı gübre hattı NPK üretimi için revize edilebilir mi?", answer: "Evet, mevcut tank, filtrasyon ve dozajlama yapısı incelenerek NPK odaklı üretime uygun revizyon yapılabilir." },
  ],
  "sivi-amino-asit": [
    { question: "Amino asit kaynağı proses tasarımını etkiler mi?", answer: "Evet, serbest amino asit çözeltisi ile protein hidrolizatı bazlı hammaddeler farklı filtrasyon, karışım ve stabilite yaklaşımı gerektirebilir." },
    { question: "Sıvı amino asit üretiminde filtrasyon neden kritiktir?", answer: "Filtrasyon, hem dolum hattının güvenli çalışmasını hem de son ürünün görsel ve uygulama performansını doğrudan etkiler." },
    { question: "Aynı hatta farklı amino asit bazlı ürünler üretilebilir mi?", answer: "Evet, uygun reçete yönetimi, tank geçiş planı ve temizlik prosedürü ile farklı ürünler aynı hatta üretilebilir." },
    { question: "Koku ve renk farkları kontrol altına alınabilir mi?", answer: "Ham madde yapısına bağlı değişimler proses sırası, karışım koşulları ve uygun yardımcılarla yönetilebilir." },
    { question: "Mevcut sıvı hat amino asit üretimine uyarlanabilir mi?", answer: "Evet, mevcut tank, filtre ve dolum sistemi değerlendirilerek amino asit bazlı ürünlere uygun hale getirilebilir." },
  ],
  "organik-sivi-gubre": [
    { question: "Organik sıvı gübre üretiminde hammaddenin doğal yapısı prosesi etkiler mi?", answer: "Evet, organik menşeli sıvı hammaddelerin viskozite, koku, çökme ve filtrasyon davranışı proses kurgusunu doğrudan etkiler." },
    { question: "Aynı hatta farklı organik sıvı formüller üretilebilir mi?", answer: "Uygun reçete yönetimi ve hat temizliği planı ile farklı organik sıvı ürünler aynı hatta üretilebilir." },
    { question: "Dolum öncesi berraklık her zaman gerekli midir?", answer: "Bu, hedef ürünün kullanım şekline bağlıdır; ancak dolum güvenliği ve son kullanıcı deneyimi için uygun filtrasyon seviyesi önemlidir." },
    { question: "Organik sıvı ürünlerde depolama kararlılığı nasıl sağlanır?", answer: "Karışım dengesi, pH yönetimi, uygun tank seçimi ve kontrollü bekletme koşulları ile depolama kararlılığı desteklenir." },
    { question: "Mevcut bir sıvı hat organik ürünlere adapte edilebilir mi?", answer: "Evet, tank, karıştırma, filtrasyon ve dolum altyapısı incelenerek organik sıvı ürünlere uygun hale getirilebilir." },
  ],
  "organik-biyostimulan": [
    { question: "Biyostimülan ürünler için standart bir proses yapısı var mı?", answer: "Temel yapı benzer olsa da aktif içeriklerin karakteri, berraklık ihtiyacı ve hedef kullanım senaryosu prosesi önemli ölçüde değiştirir." },
    { question: "Deniz yosunu veya bitkisel ekstraktlı ürünlerde özel tank seçimi gerekir mi?", answer: "Evet, aktif içeriklerin davranışına göre karışım, bekleme ve filtrasyon adımlarına uygun tank ve yardımcı ekipman seçimi önem taşır." },
    { question: "Biyostimülan ürünlerde filtrasyon neye göre belirlenir?", answer: "Filtrasyon seviyesi, ürünün aktif fraksiyonu, hedef berraklığı ve dolum sonrası kullanım şekline göre seçilir." },
    { question: "Aynı hatta birden fazla biyostimülan reçetesi çalıştırılabilir mi?", answer: "Evet, reçete yönetimi, hat geçişleri ve temizlik planı doğru kurulursa farklı biyostimülan ürünler aynı hatta üretilebilir." },
    { question: "Mevcut sıvı tesis biyostimülan üretimi için revize edilebilir mi?", answer: "Evet, mevcut ekipman altyapısı incelenerek aktif içeriklere uygun karışım, filtrasyon ve dolum iyileştirmeleri yapılabilir." },
  ],
};

const granuleFaqsBySlug: Record<string, SubsolutionFaq[]> = {
  "granul-organomineral": [
    { question: "Granül organomineral gübre tesisi için kapasite nasıl belirlenir?", answer: "Saatlik üretim hedefi, reçete yapısı, geri dönüş oranı ve kurutma senaryosu birlikte değerlendirilerek kapasite belirlenir." },
    { question: "Organik içerik granül dayanımını etkiler mi?", answer: "Evet, organik fraksiyonun yapısı granül formasyonu, nem dengesi ve nihai dayanım üzerinde önemli etkiye sahiptir." },
    { question: "Aynı hatta farklı organomineral reçeteler üretilebilir mi?", answer: "Uygun dozajlama, karışım ve proses ayarları ile farklı reçeteler aynı hatta üretilebilir." },
    { question: "Kurutma her granül hat için gerekli midir?", answer: "Ürün yapısına göre değişmekle birlikte granül kararlılığı ve depolama performansı için çoğu hatta kurutma kritik rol oynar." },
    { question: "Mevcut granül hat organomineral üretime uyarlanabilir mi?", answer: "Evet, granülasyon, kurutma, eleme ve toz kontrol kademeleri incelenerek organomineral yapıya uygun revizyon yapılabilir." },
  ],
  "granul-npk": [
    { question: "NPK granül hatlarında hedef analiz nasıl korunur?", answer: "Dozajlama doğruluğu, homojen karışım, granülasyon dengesi ve geri dönüş akışlarının kontrolü birlikte yönetilmelidir." },
    { question: "Granül boyutu neden bu kadar önemlidir?", answer: "Granül boyutu hem ürünün pazardaki kabulünü hem de paketleme ve uygulama performansını doğrudan etkiler." },
    { question: "Kurutma ve soğutma her zaman birlikte mi değerlendirilir?", answer: "Evet, granül ürünün nem ve sıcaklık dengesi son ürün kararlılığı için birlikte ele alınmalıdır." },
    { question: "Aynı hatta farklı NPK analizleri üretilebilir mi?", answer: "Uygun reçete altyapısı ve proses ayarları ile farklı NPK formülleri aynı granül hatta üretilebilir." },
    { question: "Mevcut granül gübre hattı NPK odaklı iyileştirilebilir mi?", answer: "Evet, hedef analiz ve granül boyutu standardına göre besleme, granülasyon ve son hat kademeleri revize edilebilir." },
  ],
  "granul-kompost": [
    { question: "Granül kompost tesisi ile klasik kompost hattı arasındaki fark nedir?", answer: "Granül kompost tesislerinde kompost bazlı malzeme son ürün olarak granül forma dönüştürülür; klasik kompost hatları ise daha çok olgunlaştırma ve eleme odaklı çalışır." },
    { question: "Granül kompost üretiminde kurutma her zaman gerekli midir?", answer: "Hammadde nemi ve hedef granül kararlılığına bağlı olarak değişir; ancak çoğu senaryoda kontrollü kurutma ürün kalitesi için önemli rol oynar." },
    { question: "Kompost bazlı hammaddelerde granül dayanımı nasıl sağlanır?", answer: "Doğru nem dengesi, uygun karışım yapısı, bağlayıcı ihtiyacı ve kontrollü kurutma ile granül dayanımı desteklenir." },
    { question: "Mevcut kompost hattı granül üretime dönüştürülebilir mi?", answer: "Evet, mevcut hattın hammadde hazırlama yapısı incelenerek granülasyon, kurutma, eleme ve paketleme kademeleri eklenebilir." },
    { question: "Granül kompost ürünleri nasıl paketlenir?", answer: "Son ürün, hedef pazara göre genellikle torbalama ve paletleme sistemleriyle paketlenir; granül akışına uygun son hat seçimi bu süreçte belirleyicidir." },
  ],
};

const powderFaqsBySlug: Record<string, SubsolutionFaq[]> = {
  "toz-organomineral": [
    { question: "Toz organomineral gübre tesisinde homojen karışım nasıl sağlanır?", answer: "Doğru dozajlama, uygun karıştırıcı seçimi ve hammadde akış davranışının iyi analiz edilmesiyle homojen karışım sağlanır." },
    { question: "Organik içerik toz akışını etkiler mi?", answer: "Evet, organik karakter taşıyan toz fraksiyonlar akış davranışı, topaklanma ve besleme kararlılığı üzerinde etkili olabilir." },
    { question: "Eleme her toz organomineral hatta gerekli midir?", answer: "Topak ve iri parça oluşumu riski olan yapılarda eleme, son ürün standardı için önemli bir kademedir." },
    { question: "Toz kontrolü neden kritik görülür?", answer: "Toz emiş ve filtrasyon altyapısı hem çevresel güvenlik hem de ürün kaybının azaltılması açısından önemlidir." },
    { question: "Mevcut toz hat organomineral üretime adapte edilebilir mi?", answer: "Evet, dozajlama, karıştırma, eleme ve son hat sistemleri değerlendirilerek organomineral üretime uygun hale getirilebilir." },
  ],
  "toz-npk": [
    { question: "NPK toz gübre tesisinde hedef analiz nasıl korunur?", answer: "Hassas tartım, doğru dozajlama ve homojen karışım adımları hedef NPK oranının korunmasında belirleyici rol oynar." },
    { question: "Toz NPK ürünlerde eleme ne zaman gerekli olur?", answer: "Topaklaşma veya iri parçaların ürün standardını bozduğu senaryolarda eleme kademesi önemli hale gelir." },
    { question: "Toz kontrol ihtiyacı tesis tasarımını etkiler mi?", answer: "Evet, emiş noktaları, filtre kapasitesi ve ekipman sızdırmazlığı tesis yerleşimini ve makine seçimini doğrudan etkiler." },
    { question: "Aynı hatta farklı toz NPK formülleri çalıştırılabilir mi?", answer: "Uygun reçete ve temizlik planı ile farklı analizlerde toz NPK ürünleri aynı hatta üretilebilir." },
    { question: "Mevcut toz gübre hattı NPK üretimi için revize edilebilir mi?", answer: "Evet, mevcut besleme, karıştırma, eleme ve paketleme sistemleri incelenerek NPK odaklı revizyon yapılabilir." },
  ],
};
const fertilizerSubsolutionConfigs: Record<string, FertilizerSubsolutionConfig> = {
  "sivi-organomineral": {
    heroBadge: "ALT ÇÖZÜM",
    heroTitle: "Sıvı Organomineral Gübre Üretim Tesisleri",
    heroDescription: "Organik ve mineral içeriklerin sıvı formda birleştirildiği, dozajlama, çözündürme, karıştırma, homojenizasyon, filtrasyon ve doluma uygun üretim tesisleri.",
    rawMaterials: ["Organik kaynaklı sıvı hammaddeler", "Amino asit çözeltileri", "Humik / fulvik içerikler", "Organik menşeli sıvı ekstraktlar", "Mineral besin kaynakları", "Fosfor, potasyum ve azot içeren çözünür hammaddeler", "Mikro element katkıları", "pH düzenleyiciler", "Stabilizatör ve proses yardımcıları", "Su ve yardımcı çözündürücü faz"],
    namingExplanation: "Sıvı organomineral gübreler, organik kökenli bileşenler ile mineral besin elementlerinin aynı formülasyonda bir araya getirildiği ürün grubudur. Bu nedenle ürün, sadece mineral gübre ya da sadece organik bazlı bir ürün olarak değil; organik içerik ile bitki besleme amaçlı mineral bileşenleri birlikte taşıyan bir yapı olarak değerlendirilir. Formülasyonda hem organik karakter kazandıran içerikler hem de bitkinin ihtiyaç duyduğu mineral besin kaynakları bulunduğu için organomineral ifadesi kullanılır.",
    namingNote: "Ürünün nihai sınıfı, kullanılan organik fraksiyonun yapısına, mineral besin içeriğine ve hedef pazardaki mevzuat tanımına göre netleşir.",
    offerCards: liquidOfferCardsBySlug["sivi-organomineral"],
    equipmentTitle: liquidEquipmentTitle,
    equipment: liquidEquipment,
    criticalTopics: liquidCriticalTopicsBySlug["sivi-organomineral"],
    faqs: liquidFaqsBySlug["sivi-organomineral"],
    formTitle: "Sıvı organomineral gübre tesisi için teklif veya teknik görüşme talep edin",
    formDescription: "Kapasite, batch yapısı, ürün reçetesi, hammadde tipi ve dolum ihtiyacınıza göre size uygun sıvı gübre üretim çözümünü birlikte değerlendirelim.",
    formFields: [{ id: "productGroup", label: "Ürün Grubu", type: "select", required: true, options: ["Sıvı Organomineral", "Sıvı NPK", "Sıvı Amino Asit", "Organik Biyostimülan", "Diğer"] }, ...liquidCommonFields],
  },
  "sivi-npk": {
    heroBadge: "ALT ÇÖZÜM",
    heroTitle: "Sıvı NPK Gübre Üretim Tesisleri",
    heroDescription: "Azot, fosfor ve potasyum içeren sıvı gübrelerin dozajlama, çözündürme, karıştırma, homojenizasyon, filtrasyon ve dolum süreçlerine uygun üretim tesisleri.",
    rawMaterials: ["Azot kaynağı hammaddeler", "Fosfor kaynağı hammaddeler", "Potasyum kaynağı hammaddeler", "Çözünür mineral besin kaynakları", "Mikro element katkıları", "pH düzenleyiciler", "Stabilite yardımcıları", "Su bazlı taşıyıcı faz"],
    namingExplanation: "NPK ifadesi, ürünün temel bitki besin elementleri olan azot (N), fosfor (P) ve potasyumu (K) birlikte içermesinden gelir. Ürün sıvı formda hazırlanmış olsa da ana besleme omurgası N, P ve K ise Sıvı NPK Gübre olarak adlandırılır.",
    namingNote: "Nihai ürün sınıfı, hedef analiz değerine ve yürürlükteki mevzuata göre netleşir.",
    offerCards: liquidOfferCardsBySlug["sivi-npk"],
    equipmentTitle: liquidEquipmentTitle,
    equipment: liquidEquipment,
    criticalTopics: liquidCriticalTopicsBySlug["sivi-npk"],
    faqs: liquidFaqsBySlug["sivi-npk"],
    formTitle: "Sıvı NPK gübre tesisi için teklif veya teknik görüşme talep edin",
    formDescription: "Batch kapasitesi, günlük üretim hedefi, hedef NPK formülü ve dolum ihtiyacınıza göre size uygun sıvı NPK üretim çözümünü birlikte değerlendirelim.",
    formFields: [...liquidCommonFields.slice(0, 2), { id: "npkFormula", label: "Hedef NPK Formülü", type: "text" }, ...liquidCommonFields.slice(2)],
  },
  "sivi-amino-asit": {
    heroBadge: "ALT ÇÖZÜM",
    heroTitle: "Sıvı Amino Asit Gübre Üretim Tesisleri",
    heroDescription: "Amino asit bazlı sıvı gübrelerin hazırlanması, homojenizasyonu, filtrasyonu ve dolumuna uygun üretim tesisleri.",
    rawMaterials: ["Amino asit çözeltisi", "Protein hidrolizatı bazlı bileşenler", "Organik azot kaynakları", "Yardımcı mineral katkılar", "Mikro element destekleri", "pH düzenleyiciler", "Stabilite yardımcıları", "Su bazlı taşıyıcı faz"],
    namingExplanation: "Bu ürün grubunda formülasyonun ana karakterini amino asit içeriği belirler. Ürünün temel fonksiyonu amino asit temelli ise Sıvı Amino Asit Gübre ifadesi teknik olarak doğru kabul edilir.",
    namingNote: "Amino asit oranı, kullanılan ham maddenin kaynağına ve hedef ürün standardına göre değişebilir.",
    offerCards: liquidOfferCardsBySlug["sivi-amino-asit"],
    equipmentTitle: liquidEquipmentTitle,
    equipment: liquidEquipment,
    criticalTopics: liquidCriticalTopicsBySlug["sivi-amino-asit"],
    faqs: liquidFaqsBySlug["sivi-amino-asit"],
    formTitle: "Sıvı amino asit gübre tesisi için teklif veya teknik görüşme talep edin",
    formDescription: "Batch kapasitesi, günlük üretim hedefi, amino asit kaynağı, filtrasyon gereksinimi ve dolum ihtiyacınıza göre size uygun çözümü birlikte değerlendirelim.",
    formFields: [...liquidCommonFields.slice(0, 2), { id: "aminoSource", label: "Amino Asit Kaynağı", type: "text" }, { id: "filtrationNeed", label: "Filtrasyon Gereksinimi", type: "select", options: ["Standart", "Yüksek", "Henüz net değil"] }, ...liquidCommonFields.slice(2)],
  },
  "organik-sivi-gubre": {
    heroBadge: "ALT ÇÖZÜM",
    heroTitle: "Organik Sıvı Gübre Tesisleri",
    heroDescription: "Organik kökenli sıvı içeriklerle çalışan, karışım, stabilizasyon, filtrasyon ve doluma uygun üretim tesisleri.",
    rawMaterials: ["Organik kökenli sıvı ekstraktlar", "Organik madde içeren sıvı hammaddeler", "Doğal menşeli destek içerikleri", "Organik karbon taşıyan fraksiyonlar", "Stabilite yardımcıları", "pH düzenleyiciler", "Su bazlı taşıyıcı faz"],
    namingExplanation: "Bu ürün grubunda formülasyonun ana karakteri organik kökenli bileşenlerden gelir. Besleme ve destek mantığı ağırlıklı olarak organik içerikler üzerinden kurulduğu için organik sıvı gübre ifadesi kullanılır.",
    namingNote: "Organik ürün tanımı, hedef pazardaki mevzuat ve sertifikasyon beklentilerine göre ayrıca değerlendirilmelidir.",
    offerCards: liquidOfferCardsBySlug["organik-sivi-gubre"],
    equipmentTitle: liquidEquipmentTitle,
    equipment: liquidEquipment,
    criticalTopics: liquidCriticalTopicsBySlug["organik-sivi-gubre"],
    faqs: liquidFaqsBySlug["organik-sivi-gubre"],
    formTitle: "Organik sıvı gübre tesisi için teklif veya teknik görüşme talep edin",
    formDescription: "Organik hammadde yapısı, batch kapasitesi, stabilite ihtiyacı ve dolum hedefinize göre size uygun organik sıvı üretim çözümünü birlikte değerlendirelim.",
    formFields: liquidCommonFields,
  },
  "organik-biyostimulan": {
    heroBadge: "ALT ÇÖZÜM",
    heroTitle: "Biyostimülan Üretim Tesisleri",
    heroDescription: "Biyolojik etkili destek içeriklerinin sıvı formda hazırlanması, karıştırılması, filtrasyonu ve dolumuna uygun üretim tesisleri.",
    rawMaterials: ["Bitkisel ekstraktlar", "Deniz yosunu bazlı içerikler", "Amino asit veya peptit bazlı destek bileşenleri", "Humik / fulvik yapılar", "Organik aktif fraksiyonlar", "Stabilizatörler", "pH düzenleyiciler", "Su bazlı taşıyıcı faz"],
    namingExplanation: "Biyostimülan ürünler, doğrudan klasik NPK besleme mantığından çok bitkinin gelişim süreçlerini, stres toleransını ve besin kullanım etkinliğini desteklemeye odaklanır. Bu nedenle formülasyonun ana etkisi biyostimülan karakter taşıyorsa bu isim kullanılır.",
    namingNote: "Ürün sınıflandırması, içerik yapısı ve ilgili mevzuat tanımlarına göre değerlendirilir.",
    offerCards: liquidOfferCardsBySlug["organik-biyostimulan"],
    equipmentTitle: liquidEquipmentTitle,
    equipment: liquidEquipment,
    criticalTopics: liquidCriticalTopicsBySlug["organik-biyostimulan"],
    faqs: liquidFaqsBySlug["organik-biyostimulan"],
    formTitle: "Biyostimülan üretim tesisi için teklif veya teknik görüşme talep edin",
    formDescription: "Aktif içerik yapısı, batch kapasitesi, ürün hedefi ve dolum ihtiyacınıza göre size uygun biyostimülan üretim çözümünü birlikte değerlendirelim.",
    formFields: liquidCommonFields,
  },
  "granul-organomineral": {
    heroBadge: "ALT ÇÖZÜM",
    heroTitle: "Granül Organomineral Gübre Üretim Tesisleri",
    heroDescription: "Organik ve mineral içeriklerin granül formda işlendiği, karışım, granülasyon, kurutma, eleme, soğutma ve paketleme süreçlerine uygun üretim tesisleri.",
    rawMaterials: ["Organik madde içeren katı hammaddeler", "Mineral besin elementleri", "Azot, fosfor ve potasyum kaynakları", "Organik bazlı taşıyıcı ve bağlayıcı içerikler", "Mikro element katkıları", "Nem ayarı ve proses yardımcıları"],
    namingExplanation: "Granül organomineral gübreler, organik içerik ile mineral besin elementlerinin birlikte bulunduğu ve granül formda son ürüne dönüştürüldüğü ürün grubudur. Organomineral ifadesi ürünün çift karakterini, granül ifadesi ise son ürün formunu anlatır.",
    namingNote: "Nihai ürün sınıfı, içerik oranları ve yürürlükteki mevzuata göre netleşir.",
    offerCards: granuleOfferCardsBySlug["granul-organomineral"],
    equipmentTitle: granuleEquipmentTitle,
    equipment: granuleEquipment,
    criticalTopics: granuleCriticalTopicsBySlug["granul-organomineral"],
    faqs: granuleFaqsBySlug["granul-organomineral"],
    formTitle: "Granül organomineral gübre tesisi için teklif veya teknik görüşme talep edin",
    formDescription: "Saatlik kapasite, reçete yapısı, granül boyutu ve son hat ihtiyacınıza göre size uygun granül üretim çözümünü birlikte değerlendirelim.",
    formFields: granuleCommonFields,
  },
  "granul-npk": {
    heroBadge: "ALT ÇÖZÜM",
    heroTitle: "NPK Granül Gübre Üretim Tesisleri",
    heroDescription: "Azot, fosfor ve potasyum içeren granül gübrelerin dozajlama, karışım, granülasyon, kurutma, eleme, soğutma ve paketleme hatları.",
    rawMaterials: ["Azot kaynağı hammaddeler", "Fosfor kaynağı hammaddeler", "Potasyum kaynağı hammaddeler", "Dolgu ve dengeleyici hammaddeler", "Bağlayıcı ve proses yardımcıları", "Mikro element katkıları"],
    namingExplanation: "Formülasyonun ana omurgasını azot (N), fosfor (P) ve potasyum (K) oluşturduğu için ürün NPK sınıfında değerlendirilir. Son ürün granül formda olduğu için de NPK Granül Gübre ifadesi kullanılır.",
    namingNote: "NPK oranı, hedef analize ve seçilen hammaddelere göre belirlenir.",
    offerCards: granuleOfferCardsBySlug["granul-npk"],
    equipmentTitle: granuleEquipmentTitle,
    equipment: granuleEquipment,
    criticalTopics: granuleCriticalTopicsBySlug["granul-npk"],
    faqs: granuleFaqsBySlug["granul-npk"],
    formTitle: "NPK granül gübre tesisi için teklif veya teknik görüşme talep edin",
    formDescription: "Saatlik kapasite, hedef NPK analizi, granül boyutu ve paketleme ihtiyacınıza göre size uygun granül üretim çözümünü birlikte değerlendirelim.",
    formFields: [...granuleCommonFields, { id: "npkFormula", label: "Hedef NPK Formülü", type: "text" }],
  },
  "granul-kompost": {
    heroBadge: "ALT ÇÖZÜM",
    heroTitle: "Granül Kompost Tesisleri",
    heroDescription: "Kompost bazlı hammaddelerin granül formda son ürüne dönüştürüldüğü, karışım, granülasyon, kurutma, eleme, soğutma ve paketleme süreçlerine uygun üretim tesisleri.",
    rawMaterials: [
      "Eleklenmiş kompost",
      "Kurutulmuş organik kompost fraksiyonu",
      "Organik madde içeren ince öğütülmüş hammaddeler",
      "Gerekirse bağlayıcı yardımcılar",
      "Nem düzenleyici proses katkıları",
      "Akış ve granül oluşumunu destekleyen yardımcı maddeler",
      "Gerekirse mineral destek bileşenleri",
      "Mikrobiyal veya organik bazlı özel katkılar",
    ],
    namingExplanation: "Bu ürün grubu, ana yapısını kompost bazlı organik hammaddelerden alır ve son ürün granül formda elde edilir. Bu nedenle granül kompost ifadesi kullanılır. Ürünün temel karakteri organik kompost içeriğine dayanırken, son ürün formu granül olduğu için isimlendirme bu iki özelliği birlikte yansıtır.",
    namingNote: "Nihai ürün sınıflandırması, kompost oranına, ek katkı yapısına ve hedef pazardaki mevzuata göre netleşir.",
    offerCards: [{ title: "Proses Tasar?m?", text: "Kompost bazl? hammaddenin yap?s?na g?re gran?l ?retim ak???n? planl?yoruz." }, { title: "Gran?lasyon Sistemi Se?imi", text: "Nem, organik yap? ve hedef gran?l boyutuna g?re uygun gran?lasyon kurgusunu belirliyoruz." }, { title: "Kurutma ve Eleme Hatt?", text: "Gran?l kompost ?r?nlerinde stabil nem ve uygun tane boyutu i?in hat yap?s?n? olu?turuyoruz." }, { title: "So?utma ve Son ?r?n Haz?rlama", text: "Depolama ve paketleme ?ncesi ?r?n kararl?l???n? art?ran son i?lemleri planl?yoruz." }, { title: "Toz ve Koku Kontrol?", text: "Organik i?erikli ?retim s?re?lerinde ?evresel kontrol ve saha temizli?i i?in uygun sistemler sunuyoruz." }, { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, yerle?im, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." }],
    equipmentTitle: granuleEquipmentTitle,
    equipment: granuleCompostEquipment,
    criticalTopics: granuleCriticalTopicsBySlug["granul-kompost"],
    faqs: granuleFaqsBySlug["granul-kompost"],
    formTitle: "Granül kompost tesisi için teklif veya teknik görüşme talep edin",
    formDescription: "Kompost yapısı, hedef granül boyutu, kapasite ve kurulum modelinize göre size uygun granül kompost üretim çözümünü birlikte değerlendirelim.",
    formFields: [
      { id: "hourlyCapacity", label: "Saatlik Kapasite", type: "number", unit: "ton/saat" },
      { id: "granuleSize", label: "Hedef Granül Boyutu", type: "text" },
      { id: "dryingNeed", label: "Kurutma Gerekli mi?", type: "select", options: ["Evet", "Hayır", "Henüz net değil"] },
      { id: "packagingNeed", label: "Paketleme İhtiyacı", type: "select", options: ["Evet", "Hayır", "Henüz net değil"] },
      { id: "automationLevel", label: "Otomasyon Seviyesi", type: "select", options: ["Yarı Otomatik", "Tam Otomatik", "Henüz net değil"] },
    ],
  },
  "toz-organomineral": {
    heroBadge: "ALT ÇÖZÜM",
    heroTitle: "Toz Organomineral Gübre Üretim Tesisleri",
    heroDescription: "Organik ve mineral içeriklerin toz formda karıştırıldığı, dozajlandığı, elendiği ve son ürün olarak paketlendiği üretim tesisleri.",
    rawMaterials: ["Organik içerik taşıyan toz hammaddeler", "Mineral besin elementleri", "Organik katkılı toz fraksiyonlar", "Mikro element katkıları", "Akış düzenleyici yardımcılar", "Toz bazlı taşıyıcılar"],
    namingExplanation: "Ürünün hem organik karakter taşıyan bileşenleri hem de mineral besin kaynaklarını birlikte içermesi organomineral tanımını oluşturur. Son ürün toz formda sonlandırıldığı için toz organomineral gübre ifadesi kullanılır.",
    namingNote: "İçerik oranları ve ürün sınıfı, hedef pazardaki mevzuat çerçevesinde değerlendirilir.",
    offerCards: powderOfferCardsBySlug["toz-organomineral"],
    equipmentTitle: powderEquipmentTitle,
    equipment: powderEquipment,
    criticalTopics: powderCriticalTopicsBySlug["toz-organomineral"],
    faqs: powderFaqsBySlug["toz-organomineral"],
    formTitle: "Toz organomineral gübre tesisi için teklif veya teknik görüşme talep edin",
    formDescription: "Saatlik kapasite, reçete yapısı, dozaj hassasiyeti ve paketleme ihtiyacınıza göre size uygun toz üretim çözümünü birlikte değerlendirelim.",
    formFields: powderCommonFields,
  },
  "toz-npk": {
    heroBadge: "ALT ÇÖZÜM",
    heroTitle: "NPK Toz Gübre Üretim Tesisleri",
    heroDescription: "Azot, fosfor ve potasyum içeren toz gübrelerin hassas dozajlama, karışım ve paketleme süreçlerine uygun üretim tesisleri.",
    rawMaterials: ["Azot kaynağı toz hammaddeler", "Fosfor kaynağı hammaddeler", "Potasyum kaynağı hammaddeler", "Mikro element katkıları", "Dolgu ve dengeleyici toz hammaddeler", "Akış düzenleyici yardımcılar"],
    namingExplanation: "Formülasyonun temel besleme omurgasını azot (N), fosfor (P) ve potasyum (K) oluşturduğu için ürün NPK sınıfında değerlendirilir. Son ürün granül değil, toz formda sonlandırıldığı için NPK Toz Gübre olarak adlandırılır.",
    namingNote: "Hedef analiz ve nihai sınıflandırma, kullanılan hammaddelere ve formülasyon yapısına göre netleşir.",
    offerCards: powderOfferCardsBySlug["toz-npk"],
    equipmentTitle: powderEquipmentTitle,
    equipment: powderEquipment,
    criticalTopics: powderCriticalTopicsBySlug["toz-npk"],
    faqs: powderFaqsBySlug["toz-npk"],
    formTitle: "NPK toz gübre tesisi için teklif veya teknik görüşme talep edin",
    formDescription: "Saatlik kapasite, hedef NPK oranı, eleme ihtiyacı ve paketleme senaryonuza göre size uygun toz üretim çözümünü birlikte değerlendirelim.",
    formFields: [...powderCommonFields, { id: "npkFormula", label: "Hedef NPK Formülü", type: "text" }],
  },
};

export function getFertilizerSubsolutionConfig(subsector: string) {
  return fertilizerSubsolutionConfigs[subsector] ?? null;
}

