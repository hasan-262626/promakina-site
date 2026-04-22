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

const liquidEquipmentTitle = "S1v1 g?bre ?retiminde kullan?lan ba_l1ca makine ve ekipmanlar";
const granuleEquipmentTitle = "Gran?l g?bre ?retiminde kullan?lan ba_l1ca makine ve ekipmanlar";
const powderEquipmentTitle = "Toz g?bre ?retiminde kullan?lan ba_l1ca makine ve ekipmanlar";

const liquidEquipment: SubsolutionCard[] = [
  { title: "??z?nd?rme Tanklar?", text: "Kat? ve s?v? hammaddelerin kontroll? bi?imde ??z?nd?r?lmesi i?in tank sistemleri." },
  { title: "Kar1_t1r?c?l? Tanklar", text: "Farkl? bile?enlerin dengeli birle?imi i?in kar??t?rma ve proses haz?rlama tanklar?." },
  { title: "Homojenizat?r", text: "Partiler aras? kalite fark?n? azaltmak ve ?r?n stabilitesini art1rmak i?in homojenizasyon ??z?mleri." },
  { title: "Filtre Sistemleri", text: "Dolum ?ncesi berrakl?k ve proses g?venli?i i?in uygun filtrasyon kademeleri." },
  { title: "So?utma Tanklar?", text: "S?cakl?k y?netimi ve ?r?n kararl?l??? i?in proses destek tanklar?." },
  { title: "Stok / Mamul Tanklar?", text: "Dolum ?ncesi mamul ?r?n?n g?venli ?ekilde bekletilmesi ve dengelenmesi i?in tank sistemleri." },
  { title: "Dozajlama Sistemleri", text: "S1v1 ve kat? bile?enlerin re?eteye uygun kontroll? beslenmesi i?in dozaj altyap?s?." },
  { title: "S1v1 Dolum ?zi?eleme", text: "?zi?e, bidon veya ?zel ambalaj yap?lar? i?in hassas s?v? dolum ??z?mleri." },
  { title: "?zi?e Etiketleme Makinas?", text: "Son ?r?n?n d?zg?n, h?zl? ve standart etiketlenmesi i?in etiketleme sistemleri." },
];

const granuleEquipment: SubsolutionCard[] = [
  { title: "Ham Madde Besleme ve Dozajlama Sistemleri", text: "Gran?l re?etesine uygun kontroll? hammadde besleme ve tart?m altyap?s? sa?lar." },
  { title: "Kar1_t1r?c?lar", text: "Gran?lasyon ?ncesi hammaddelerin homojen bi?imde haz?rlanmas? i?in kar1_1m ekipmanlar?d?r." },
  { title: "Gran?lat?r Tamburu", text: "Re?eteye uygun gran?l yap?s?n?n olu?mas? i?in ana ?ekillendirme ve gran?lasyon ekipman?d?r." },
  { title: "Kurutma Tamburu", text: "Gran?l ?r?n?n hedef neme ula?mas? ve stabil hale gelmesi i?in kontroll? kurutma sa?lar." },
  { title: "Eleme Sistemleri", text: "Tane boyutu standard?n? korumak ve geri d?n?? ak1_1n? ay?rmak i?in s?n?fland?rma yapar." },
  { title: "So?utma Tamburu", text: "Kurutma sonras? ?r?n s?cakl???n? dengeleyerek son ?r?n kararl?l???n? art1r?r." },
  { title: "Kaplama Tamburu", text: "Ak??kanl?k, y?zey kalitesi ve ?r?n dayan?m? i?in kaplama veya son i?lem ad?mlar?n? destekler." },
  { title: "Toz Toplama Sistemleri", text: "Gran?l hatlar?nda ?evresel g?venlik ve proses temizli?i i?in toz kontrol? sa?lar." },
  { title: "Paketleme ve Paletleme ??z?mleri", text: "Son ?r?n?n torbalanmas?, istiflenmesi ve sevkiyata haz?rlanmas? i?in entegre son hat ??z?mleridir." },
];

const granuleCompostEquipment: SubsolutionCard[] = [
  { title: "Ham Madde Besleme ve Dozajlama Sistemleri", text: "Kompost bazli hammaddelerin kontroll? hatta alinmasi ve re?eteye uygun beslenmesi i?in dozaj altyapisi saglar." },
  { title: "Karistiricilar", text: "Gran?lasyon ?ncesinde kompost fraksiyonlarinin ve yardimci katkilarin homojen bi?imde hazirlanmasini destekler." },
  { title: "Gran?lat?r Tamburu", text: "Kompost bazli karisimin istenen gran?l formuna d?n?smesi i?in ana sekillendirme ekipmani olarak ?alisir." },
  { title: "Kurutma Tamburu", text: "Gran?l kompost ?r?n?nde hedef nem seviyesine ulasmak ve depolama kararliligini artirmak i?in kontroll? kurutma saglar." },
  { title: "Eleme Sistemleri", text: "Hedef tane boyutunu korumak, iri ve ince fraksiyonlari ayirmak i?in gran?l siniflandirmasini y?netir." },
  { title: "Sogutma Tamburu", text: "Kurutma sonrasi ?r?n sicakligini dengeleyerek gran?l kompostun paketleme ?ncesi stabil hale gelmesini saglar." },
  { title: "Toz Toplama Sistemleri", text: "Organik karakterli gran?l ?retiminde olusan tozu kontrol altinda tutarak saha temizligini ve ?evresel g?venligi destekler." },
  { title: "Konvey?r ve Elevat?r Hatlari", text: "Kompost bazli malzemenin hazirlama, gran?lasyon, kurutma ve paketleme kademeleri arasinda g?venli transferini saglar." },
  { title: "Paketleme ve Paletleme ??z?mleri", text: "Gran?l kompost ?r?n?n?n torbalanmasi, paletlenmesi ve sevkiyata hazirlanmasi i?in son hat entegrasyonu sunar." },
];

const powderEquipment: SubsolutionCard[] = [
  { title: "Ham Madde Besleme Sistemleri", text: "Toz hammaddelerin kararl? ve kontroll? bi?imde hatta al?nmas?n? sa?lar." },
  { title: "Mikro / Makro Dozajlama", text: "D???k ve y?ksek oranl? bile?enlerin re?eteye uygun beslenmesi i?in hassas dozaj altyap?s? sunar." },
  { title: "Dozaj Kantarlar?", text: "Toz ?r?n form?lasyonlar?nda doru tart?m ve proses kontrol? i?in y?ksek hassasiyetli ?l??m sa?lar." },
  { title: "Kar1_t1r?c?lar", text: "Toz hammaddelerin homojen da??l?mla birle?mesi i?in ana kar1_1m ekipmanlar?d?r." },
  { title: "Eleme Sistemleri", text: "?stenmeyen topak veya iri par?alar? ay?rarak ?r?n standard?n? destekler." },
  { title: "Konvey?r ve Helezon Hatlar?", text: "Malzemenin proses boyunca kontroll? ve g?venli bi?imde ta??nmas?n? sa?lar." },
  { title: "Elevat?r Sistemleri", text: "Dikey transfer ihtiyac? olan noktalarda d?zenli ?r?n ak1_1 i?in kullan?l?r." },
  { title: "Toz Toplama Sistemleri", text: "Transfer ve paketleme noktalar?nda emisyonu azaltmak ve ?al??ma g?venli?ini art1rmak i?in g?rev yapar." },
  { title: "Paketleme Sistemleri", text: "Toz son ?r?n?n torbalama ve sevkiyat haz?rl???nda kontroll? dolum sa?lar." },
];

const liquidCommonFields: SubsolutionFormField[] = [
  { id: "batchCapacity", label: "Batch Kapasitesi", type: "number", unit: "ton/batch" },
  { id: "dailyTarget", label: "G?nl?k ?retim Hedefi", type: "number", unit: "ton/g?n" },
  { id: "automationLevel", label: "Otomasyon Seviyesi", type: "select", options: ["Yar? Otomatik", "Tam Otomatik", "Hen?z net de?il"] },
  { id: "fillingNeed", label: "Dolum ?htiyac?", type: "select", options: ["Evet", "Hay?r", "Hen?z net de?il"] },
];

const granuleCommonFields: SubsolutionFormField[] = [
  { id: "hourlyCapacity", label: "Saatlik Kapasite", type: "number", unit: "ton/saat" },
  { id: "automationLevel", label: "Otomasyon Seviyesi", type: "select", options: ["Yar? Otomatik", "Tam Otomatik", "Hen?z net de?il"] },
  { id: "packagingNeed", label: "Paketleme ?htiyac?", type: "select", options: ["Evet", "Hay?r", "Hen?z net de?il"] },
  { id: "granuleSize", label: "Gran?l Boyutu", type: "text" },
  { id: "dryingNeed", label: "Kurutma ?htiyac?", type: "select", options: ["Evet", "Hay?r", "Hen?z net de?il"] },
];

const powderCommonFields: SubsolutionFormField[] = [
  { id: "hourlyCapacity", label: "Saatlik Kapasite", type: "number", unit: "ton/saat" },
  { id: "automationLevel", label: "Otomasyon Seviyesi", type: "select", options: ["Yar? Otomatik", "Tam Otomatik", "Hen?z net de?il"] },
  { id: "packagingNeed", label: "Paketleme ?htiyac?", type: "select", options: ["Evet", "Hay?r", "Hen?z net de?il"] },
  { id: "screeningNeed", label: "Eleme ?htiyac?", type: "select", options: ["Evet", "Hay?r", "Hen?z net de?il"] },
  { id: "dustControlNeed", label: "Toz Kontrol ?htiyac?", type: "select", options: ["Evet", "Hay?r", "Hen?z net de?il"] },
];

const liquidOfferCardsBySlug: Record<string, SubsolutionCard[]> = {
  "sivi-organomineral": [
    { title: "Proses Tasar?m?", text: "?r?n re?etesi, hammaddeler ve hedef ?r?n ?zelliklerine g?re s?v? ?retim prosesini planl?yoruz." },
    { title: "Uygun Makine Kurgusu", text: "??z?nd?rme, kar??t?rma, homojenizasyon, filtrasyon ve dolum i?in doru makine kombinasyonunu olu?turuyoruz." },
    { title: "Otomasyon ve Dozajlama", text: "Hammadde giri?lerinden son ?r?n haz?rlamaya kadar kontroll? ve izlenebilir ?retim altyap?s? sa?l?yoruz." },
    { title: "Dolum ve Son Hat Uyumlar?", text: "IBC, bidon, ?i?e veya ?zel ambalaj yap?s?na uygun dolum ve etiketleme ??z?mleri sunuyoruz." },
    { title: "Revizyon ve Kapasite Art?r?m?", text: "Mevcut s?v? g?bre hatlar?nda kapasite art1r?m?, revizyon ve proses iyile?tirme se?enekleri geli?tiriyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "sivi-npk": [
    { title: "Proses Tasar?m?", text: "Hedef NPK analizi, ??z?n?rl?k s?n?rlar? ve hammadde davran???na g?re s?v? ?retim s?recini planl?yoruz." },
    { title: "Uygun Makine Kurgusu", text: "??z?nd?rme, kar??t?rma, homojenizasyon, filtrasyon ve dolum i?in doru makine kombinasyonunu olu?turuyoruz." },
    { title: "Otomasyon ve Dozajlama", text: "N, P ve K kaynaklar?n?n kontroll? beslenmesi i?in re?ete bazl? otomasyon altyap?s? kuruyoruz." },
    { title: "Filtrasyon ve Stabilite Kontrol?", text: "Kristallenme ve faz ayr?m? risklerini azaltmak i?in filtrasyon ve stabilite kademelerini birlikte kurguluyoruz." },
    { title: "Dolum ve Son Hat Uyumlar?", text: "?zi?e, bidon veya IBC senaryolar?na uygun dolum ve etiketleme ??z?mleri sunuyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "sivi-amino-asit": [
    { title: "Amino Asit Bazl? Proses Tasar?m?", text: "Amino asit kayna??na, berrakl?k ihtiyac?na ve hedef kullan?m senaryosuna g?re proses altyap?s?n? planl?yoruz." },
    { title: "Uygun Tank ve Filtrasyon Kurgusu", text: "??zeltinin davran???na g?re kar??t?rma, bekletme ve filtrasyon altyap?s?n? birlikte olu?turuyoruz." },
    { title: "Stabilite ve Berrakl?k Y?netimi", text: "?r?n?n g?rsel kalitesini ve depolama kararl?l???n? destekleyecek proses yakla??m? geli?tiriyoruz." },
    { title: "Otomasyon ve Dozajlama", text: "Farkl? amino asit ve yard?mc? katk? ak1_lar?n? re?eteye uygun bi?imde y?netiyoruz." },
    { title: "Dolum ve Ambalaj Uyumu", text: "?zi?e, bidon ve ?zel ambalaj yap?lar? i?in uygun dolum kurgusunu tasarl?yoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "organik-sivi-gubre": [
    { title: "Organik ??erik Uyumlu Proses Tasar?m?", text: "Do?al men?eli hammaddelerin davran???na g?re kar1_1m, bekletme ve dolum altyap?s?n? planl?yoruz." },
    { title: "Tank ve Kar???m Altyap?s?", text: "Organik fraksiyonlar?n dengeli birle?imi i?in doru tank, kar??t?r?c? ve transfer yap?s?n? kuruyoruz." },
    { title: "Koku ve Stabilite Yakla??m?", text: "?r?n kararl?l??? ile proses konforunu birlikte ele alan teknik ??z?mler geli?tiriyoruz." },
    { title: "Filtrasyon ve Dolum ??z?mleri", text: "Hedef kullan?m ve ambalaj tipine uygun filtrasyon ve dolum kademeleri olu?turuyoruz." },
    { title: "Otomasyon ve Re?ete Y?netimi", text: "?r?n ge?i?lerini ve re?ete takibini izlenebilir hale getiren otomasyon altyap?s? sa?l?yoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "organik-biyostimulan": [
    { title: "Biyostim?lan Proses Kurgusu", text: "Aktif i?eriklerin yap?s?na g?re kar1_1m, bekletme, filtrasyon ve dolum s?recini birlikte planl?yoruz." },
    { title: "Hassas Kar???m ve Stabilite Yakla??m?", text: "Bitkisel ekstraktlar, amino asitler ve humik fraksiyonlar i?in kontroll? proses altyap?s? kuruyoruz." },
    { title: "Filtrasyon ve Berrakl?k Kontrol?", text: "Dolum g?venli?i ve uygulama performans? i?in uygun filtrasyon kademelerini tan?ml?yoruz." },
    { title: "Esnek Dolum ??z?mleri", text: "?zi?e, bidon veya farkl? hacimlerde ambalaj senaryolar?na uygun dolum altyap?s? kuruyoruz." },
    { title: "?r?n Geli?tirmeye Uygun Tesis Altyap?s?", text: "Farkl? biyostim?lan re?etelerin ayn? hatta y?netilebilmesi i?in esnek ?retim kurgusu sa?l?yoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
};

const granuleOfferCardsBySlug: Record<string, SubsolutionCard[]> = {
  "granul-organomineral": [
    { title: "Proses Tasar?m?", text: "Organik ve mineral bile?enlerin gran?l formda dengeli birle?imi i?in proses ak1_1n? planl?yoruz." },
    { title: "Gran?lasyon Sistemi Se?imi", text: "Re?ete yap?s?, ba?lay?c? ihtiyac? ve hedef gran?l karakterine g?re doru gran?lasyon ??z?m?n? belirliyoruz." },
    { title: "Kurutma ve Eleme Hatt? Kurgusu", text: "Gran?l dayan?m? ve tane boyutu standard?n? koruyacak kurutma ve s?n?fland?rma kademeleri tasarl?yoruz." },
    { title: "So?utma ve Geri D?n?? Y?netimi", text: "Elek ?st?, elek alt? ve proses i?i geri d?n?? ak1_lar?n? verimli ?ekilde y?neten hat altyap?s? kuruyoruz." },
    { title: "Son ?r?n Haz?rlama", text: "Kaplama, son ?r?n iyile?tirme ve paketleme ?ncesi haz?rl?k kademelerini entegre ediyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "granul-npk": [
    { title: "Re?ete Bazl? Proses Tasar?m?", text: "Hedef NPK analizi ve gran?l karakterine g?re proses ak1_1n? ve besleme dengesini birlikte planl?yoruz." },
    { title: "Gran?lasyon Hatt? Se?imi", text: "Form?lasyona ve kapasite ihtiyac?na g?re uygun gran?lasyon altyap?s?n? belirliyoruz." },
    { title: "Kurutma ve So?utma Kurgusu", text: "Nem ve s?cakl?k y?netimini birlikte ele alarak son ?r?n kararl?l???n? destekliyoruz." },
    { title: "Standart Tane Boyutu Y?netimi", text: "Eleme, geri d?n?? ve son ?r?n ?evrimleri ile hedef gran?l da??l?m?n? kontrol alt?nda tutuyoruz." },
    { title: "Son Hat ve Paketleme ??z?mleri", text: "Torbalama, paletleme ve sevkiyata haz?rl?k i?in entegre son hat senaryolar? geli?tiriyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
};


const powderOfferCardsBySlug: Record<string, SubsolutionCard[]> = {
  "toz-organomineral": [
    { title: "Toz ?r?n Proses Tasar?m?", text: "Organik ve mineral toz hammaddelerin re?eteye uygun kar1_1m? i?in proses ak1_1n? planl?yoruz." },
    { title: "Hassas Dozajlama ve Tart?m", text: "Mikro ve makro bile?enlerin doru tart?m? i?in kontroll? besleme ve dozaj altyap?s? kuruyoruz." },
    { title: "Homojen Kar???m Yakla??m?", text: "Farkl? younluk ve ak1_ karakterine sahip hammaddeler i?in doru kar1_1m yap?s?n? olu?turuyoruz." },
    { title: "Toz Kontrol ve Filtrasyon", text: "Transfer ve paketleme noktalar?nda emisyonu azaltan toz emi? ??z?mleri geli?tiriyoruz." },
    { title: "Eleme ve Son ?r?n Haz?rlama", text: "Topak kontrol?, ?r?n standard? ve torbalamaya uygun son ?r?n haz?rl??? i?in eleme ??z?mleri sunuyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
  "toz-npk": [
    { title: "Re?ete Bazl? Toz Hat Tasar?m?", text: "Hedef NPK analizi ve ?r?n ak1_ davran???na g?re toz ?retim hatt?n?n temel yap?s?n? planl?yoruz." },
    { title: "Tart?m ve Dozajlama Sistemleri", text: "Makro ve mikro bile?enlerin hassas oranlarda hatta al?nmas? i?in kontroll? dozaj altyap?s? kuruyoruz." },
    { title: "Kar???m ve Eleme Kurgusu", text: "Homojen ?r?n kalitesi ve topak kontrol? i?in kar1_1m ve eleme kademelerini birlikte tasarl?yoruz." },
    { title: "Toz Emi? Altyap?s?", text: "Transfer ve paketleme noktalar?nda toz olu?umunu kontrol alt?nda tutan emi? ??z?mleri geli?tiriyoruz." },
    { title: "Paketleme Uyumu", text: "Son ?r?n?n ak1_ davran???na uygun torbalama ve son hat senaryolar?n? projeye dahil ediyoruz." },
    { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, saha yerle_imi, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." },
  ],
};

const liquidCriticalTopicsBySlug: Record<string, SubsolutionCard[]> = {
  "sivi-organomineral": [
    { title: "??z?n?rl?k ve stabilite", text: "?r?n i?inde ??kme, ayr??ma ve bulan?kl?k olu?mamas? i?in proses doru kurulmal?d?r." },
    { title: "Hammadde uyumu", text: "Organik ve mineral i?eriklerin birlikte davran??? dikkatle de?erlendirilmelidir." },
    { title: "pH ve reaksiyon kontrol?", text: "S1v1 ?r?nlerde kalite ve stabilite i?in pH kontrol? kritik olabilir." },
    { title: "Filtrasyon seviyesi", text: "Dolum sisteminin sorunsuz ?al??mas? i?in uygun filtrasyon kademesi se?ilmelidir." },
    { title: "Homojenizasyon kalitesi", text: "?r?n partileri aras?nda standart kalite i?in yeterli kar1_1m ve homojenizasyon gerekir." },
    { title: "Ambalaj ve dolum uyumu", text: "Son ?r?n?n ak1_kanl??? ve viskozitesi dolum hatt?yla uyumlu olmal?d?r." },
    { title: "Depolama kararl?l???", text: "Mamul tank?nda bekleme s?resince ?r?n yap?s?n?n bozulmamas? ?nemlidir." },
    { title: "Temizlik ve hat hijyeni", text: "?r?n ge?i?leri ve hat temizli?i, kalite s?reklili?i a??s?ndan dikkatle planlanmal?d?r." },
  ],
  "sivi-npk": [
    { title: "??z?n?rl?k ve stabilite", text: "Y?ksek analizli NPK form?llerde ??zeltinin berrak ve kararl? kalmas? i?in ??z?n?rl?k s?n?rlar? iyi y?netilmelidir." },
    { title: "Hammadde uyumu", text: "Azot, fosfor ve potasyum kaynaklar?n?n ayn? form?l i?indeki davran??? birlikte de?erlendirilmelidir." },
    { title: "pH ve reaksiyon kontrol?", text: "??zeltide reaksiyon, kristallenme ve stabilite risklerini azaltmak i?in pH dengesi doru kurulmal?d?r." },
    { title: "Filtrasyon seviyesi", text: "Filtrasyon seviyesi hem ?r?n berrakl???n? hem de dolum hatt? g?venli?ini dorudan etkiler." },
    { title: "Homojenizasyon kalitesi", text: "Mikro katk?lar ve ??z?n?r tuzlar?n partiler aras?nda e?it da??lmas? i?in yeterli homojenizasyon gerekir." },
    { title: "Ambalaj ve dolum uyumu", text: "?r?n?n yo?unlu?u ve ak1_ karakteri se?ilen dolum ambalaj? ile uyumlu olmal?d?r." },
    { title: "Depolama kararl?l???", text: "Depolama s?recinde kristallenme, ??kelme ve faz ayr?m? olu?mamas? i?in mamul tank? y?netimi ?nemlidir." },
    { title: "Temizlik ve hat hijyeni", text: "Form?l de?i?imlerinde hat temizli?i dikkatle planlanmazsa ?r?n ge?i?lerinde kalite sapmalar? olu?abilir." },
  ],
  "sivi-amino-asit": [
    { title: "??z?n?rl?k ve stabilite", text: "Protein hidrolizat? veya amino asit bazl? ?r?nlerde berrakl?k ve uzun s?reli stabilite birlikte de?erlendirilmelidir." },
    { title: "Hammadde uyumu", text: "Amino asit kayna?? ile yard?mc? mineral katk?lar?n birlikte davran??? proses kurgusunu etkiler." },
    { title: "pH ve reaksiyon kontrol?", text: "Amino asit yap?s?n?n korunmas? ve istenmeyen reaksiyonlar?n ?nlenmesi i?in pH dengesi ?nemlidir." },
    { title: "Filtrasyon seviyesi", text: "Filtrasyon seviyesi, dolum hatt?nda sorun ya?anmamas? ve son ?r?n g?r?n?m? i?in kritik rol oynar." },
    { title: "Homojenizasyon kalitesi", text: "Yo?un organik fraksiyonlar?n her partide ayn? kaliteyi vermesi i?in g??l? homojenizasyon gerekir." },
    { title: "Ambalaj ve dolum uyumu", text: "Viskozite ve ak1_ davran??? ambalaj, dolum h?z? ve etiketleme d?zeniyle uyumlu olmal?d?r." },
    { title: "Depolama kararl?l???", text: "Bekleme s?resinde koku, renk veya faz ayr?m? olu?mamas? i?in depolama ko?ullar? doru tan?mlanmal?d?r." },
    { title: "Temizlik ve hat hijyeni", text: "Organik i?erikli amino asit ?r?nlerinde hat temizli?i, ?apraz ?r?n etkisini s?n?rlamak i?in dikkatle planlanmal?d?r." },
  ],
  "organik-sivi-gubre": [
    { title: "??z?n?rl?k ve stabilite", text: "Organik fraksiyonlu ?r?nlerde ??kme, bulan?kl?k ve faz ayr?m? olu?mamas? i?in stabilite doru y?netilmelidir." },
    { title: "Hammadde uyumu", text: "Do?al men?eli i?eriklerin birlikte davran???, ak1_kanl?k ve raf ?mr? a??s?ndan dikkatle de?erlendirilmelidir." },
    { title: "pH ve reaksiyon kontrol?", text: "Organik i?eriklerin kararl? kalmas? i?in pH ve proses ko?ullar? kontroll? tutulmal?d?r." },
    { title: "Filtrasyon seviyesi", text: "Filtrasyon seviyesi ?r?n tipine g?re se?ilmezse dolum performans? ve kullan?m rahatl??? etkilenebilir." },
    { title: "Homojenizasyon kalitesi", text: "Yo?un organik i?eriklerin partiler aras?nda ayn? kaliteyi verebilmesi i?in homojenizasyon seviyesi yeterli olmal?d?r." },
    { title: "Ambalaj ve dolum uyumu", text: "Dolum ekipman?, ?r?n?n viskozite ve ak1_ karakterine uygun se?ilmelidir." },
    { title: "Depolama kararl?l???", text: "Mamul tank?nda bekleme s?recinde ?r?n yap?s?n?n bozulmamas? i?in depolama kararl?l??? test edilmelidir." },
    { title: "Temizlik ve hat hijyeni", text: "Organik ?r?n ge?i?lerinde hat hijyeni ve temizlik plan? kalite g?vence a??s?ndan kritik ?nemdedir." },
  ],
  "organik-biyostimulan": [
    { title: "??z?n?rl?k ve stabilite", text: "Biyostim?lan karakter ta??yan aktif fraksiyonlar?n ??zeltide kararl? kalmas? i?in stabilite doru y?netilmelidir." },
    { title: "Hammadde uyumu", text: "Bitkisel ekstraktlar, amino asitler ve humik yap?lar?n birlikte davran??? dikkatle de?erlendirilmelidir." },
    { title: "pH ve reaksiyon kontrol?", text: "Aktif i?eriklerin performans?n? korumak i?in pH ve reaksiyon penceresi kontroll? tutulmal?d?r." },
    { title: "Filtrasyon seviyesi", text: "Dolum ?ncesi filtrasyon seviyesi, berrakl?k kadar uygulama g?venli?i a??s?ndan da ?nem ta??r." },
    { title: "Homojenizasyon kalitesi", text: "Partiler aras? performans fark?n? azaltmak i?in aktif i?erikler yeterli homojenizasyon ile haz?rlanmal?d?r." },
    { title: "Ambalaj ve dolum uyumu", text: "?r?n?n hedef ambalaj ve uygulama senaryosuna uyumu dolum hatt? se?imini dorudan etkiler." },
    { title: "Depolama kararl?l???", text: "Aktif fraksiyonlar?n depolama s?resince bozulmamas? i?in mamul tank? ve bekleme ko?ullar? doru planlanmal?d?r." },
    { title: "Temizlik ve hat hijyeni", text: "Hat temizli?i ve ?r?n ge?i?leri, biyolojik etkili i?eriklerin farkl? re?etelere ta??nmamas? i?in dikkatle y?netilmelidir." },
  ],
};

const granuleCriticalTopicsBySlug: Record<string, SubsolutionCard[]> = {
  "granul-organomineral": [
    { title: "Gran?l dayan?m?", text: "Organik fraksiyonlu gran?llerin ta??ma ve paketleme s?ras?nda k?r?lmamas? i?in yeterli mekanik dayan?m sa?lanmal?d?r." },
    { title: "Nem kontrol?", text: "Kurutma ??k???ndaki nem seviyesi, hem depolama kararl?l??? hem de gran?l b?t?nl??? a??s?ndan kritik ?nemdedir." },
    { title: "Geri d?n?? oran?", text: "Elek ?st? ve elek alt? geri d?n?? ak1_lar? verimli y?netilmezse gran?lasyon dengesi bozulabilir." },
    { title: "Tane boyutu standard?", text: "Pazara uygun gran?l da??l?m? i?in eleme ve gran?lasyon kademeleri birlikte optimize edilmelidir." },
    { title: "Homojen da??l?m", text: "Organik ve mineral bile?enlerin gran?l yap?da dengeli da??lmas? ?r?n kalitesini belirler." },
    { title: "Kurutma verimi", text: "Yetersiz veya a??r? kurutma gran?l yap?s?n? ve i?letme maliyetini dorudan etkiler." },
    { title: "Toz kontrol?", text: "Gran?lasyon ve eleme noktalar?nda olu?an ince partik?llerin doru toplanmas? ?evresel g?venlik i?in gereklidir." },
    { title: "Paketleme performans?", text: "Gran?l ak1_kanl??? ve tane b?t?nl??? son hat ekipmanlar?n?n kararl? ?al??mas?n? desteklemelidir." },
  ],
  "granul-npk": [
    { title: "Gran?l dayan?m?", text: "Y?ksek analizli NPK gran?llerinin k?r?lmadan ta??nmas? i?in gran?lasyon ve ba?lay?c? dengesi doru kurulmal?d?r." },
    { title: "Nem kontrol?", text: "Gran?l NPK ?r?nlerde hedef nem seviyesine ula?mak hem ak1_kanl?k hem de depolama kararl?l??? i?in kritiktir." },
    { title: "Geri d?n?? oran?", text: "Elek geri d?n?? ak1_lar?n?n doru y?netilmesi proses verimini ve ?r?n standard?n? dorudan etkiler." },
    { title: "Tane boyutu standard?", text: "Hedef gran?l ?ap?, ?r?n?n pazardaki kabul? ve paketleme performans? a??s?ndan istikrarl? olmal?d?r." },
    { title: "Homojen da??l?m", text: "N, P ve K bile?enlerinin gran?l yap?da dengeli da??lmas? hedef analiz de?erinin korunmas?n? sa?lar." },
    { title: "Kurutma verimi", text: "Kurutma kademesindeki verim, gran?l y?zey kalitesi ve enerji t?ketimi ?zerinde dorudan etkilidir." },
    { title: "Toz kontrol?", text: "Gran?l NPK hatlar?nda olu?an tozun etkin bi?imde y?netilmesi hem ?evre hem de ?r?n kayb? a??s?ndan ?nemlidir." },
    { title: "Paketleme performans?", text: "Son ?r?n?n ak1_ karakteri ve tane b?t?nl???, torbalama ve paletleme s?re?leriyle uyumlu olmal?d?r." },
  ],
  "granul-kompost": [
    { title: "Kompost giri? nemi", text: "Gran?lasyon verimi i?in kompost hammaddenin nem seviyesi kontroll? olmal?d?r." },
    { title: "Organik yap?n?n gran?lle?me davran???", text: "Kompost bazl? hammaddelerin ba?lanma ve gran?l olu?turma karakteri dikkatle de?erlendirilmelidir." },
    { title: "Gran?l dayan?m?", text: "Son ?r?n?n ta??ma ve paketleme s?ras?nda da??lmamas? i?in gran?l mukavemeti ?nemlidir." },
    { title: "Kurutma dengesi", text: "A??r? kurutma veya yetersiz kurutma ?r?n kalitesini olumsuz etkileyebilir." },
    { title: "Tane boyutu standard?", text: "Pazar beklentisine uygun gran?l boyutu i?in eleme ve geri d?n?? y?netimi doru kurulmal?d?r." },
    { title: "Toz ve koku kontrol?", text: "Organik karakterli ?retimlerde ?evresel kontrol sistemleri kritik ?neme sahiptir." },
    { title: "Depolama kararl?l???", text: "Son ?r?n?n depoda topaklanmamas? ve ak1_kanl?l???n? korumas? gerekir." },
    { title: "Paketleme performans?", text: "Gran?l ?r?n?n torbalama ve sevkiyat performans? son kalite a??s?ndan ?nemlidir." },
  ],
};

const powderCriticalTopicsBySlug: Record<string, SubsolutionCard[]> = {
  "toz-organomineral": [
    { title: "Kar???m homojenli?i", text: "Organik ve mineral toz bile?enlerin re?eteye uygun dengeli da??lmas? ?r?n kalitesini belirler." },
    { title: "Toz kontrol?", text: "Transfer ve paketleme noktalar?nda olu?an tozun etkin bi?imde y?netilmesi gerekir." },
    { title: "Ak?? davran???", text: "Organik katk?l? toz ?r?nlerde k?pr?lenme ve d?zensiz ak1_ riskleri besleme performans?n? etkileyebilir." },
    { title: "Re?ete dorulu?u", text: "Mikro ve makro bile?enlerin hassas tart?m? hedef analiz de?erleri i?in kritik ?nem ta??r." },
    { title: "Eleme verimi", text: "Topaklar?n ve istenmeyen iri par?alar?n ayr?lmas? i?in eleme kademeleri doru se?ilmelidir." },
    { title: "Ambalaj uyumu", text: "Toz ?r?n?n ak1_1, torbalama ve son hat ekipmanlar?yla uyumlu olmal?d?r." },
    { title: "?? g?venli?i", text: "Tozlu ?al??ma ortamlar?nda operat?r g?venli?i ve emisyon kontrol? birlikte d???n?lmelidir." },
    { title: "Hijyen ve temizlik", text: "Hat temizli?i ve ?r?n ge?i?leri, kalite s?reklili?i ve kontaminasyon riskinin azalt?lmas? i?in planlanmal?d?r." },
  ],
  "toz-npk": [
    { title: "Kar???m homojenli?i", text: "N, P ve K bile?enlerinin re?eteye uygun dengeli da??lmas? hedef analiz de?erlerinin korunmas? i?in kritiktir." },
    { title: "Toz kontrol?", text: "Toz NPK hatlar?nda transfer ve paketleme noktalar?ndaki emisyon doru y?netilmelidir." },
    { title: "Ak?? davran???", text: "Toz NPK ?r?nlerde ak1_ d?zeni torbalama performans?n? ve besleme kararl?l???n? dorudan etkiler." },
    { title: "Re?ete dorulu?u", text: "Hedef NPK oran?n?n korunmas? i?in dozajlama, tart?m ve kar1_1m ad?mlar? hassas bi?imde y?netilmelidir." },
    { title: "Eleme verimi", text: "Topakla?ma ve iri par?a olu?umu varsa eleme verimi ?r?n standard? i?in belirleyici olur." },
    { title: "Ambalaj uyumu", text: "?r?n?n ak1_kanl??? ve y???n davran??? se?ilen paketleme sistemiyle uyumlu olmal?d?r." },
    { title: "?? g?venli?i", text: "Tozlu NPK hammaddelerle ?al???rken operat?r g?venli?i ve toz emi? altyap?s? birlikte ele al?nmal?d?r." },
    { title: "Hijyen ve temizlik", text: "?r?n ge?i?lerinde re?ete kar??mas?n? ?nlemek i?in hat temizli?i ve bak?m plan? doru kurgulanmal?d?r." },
  ],
};

const liquidFaqsBySlug: Record<string, SubsolutionFaq[]> = {
  "sivi-organomineral": [
    { question: "S1v1 organomineral g?bre tesisi ile s?v? NPK tesisi ayn? hatta kurulabilir mi?", answer: "Evet, uygun tank, dozajlama, filtrasyon ve re?ete y?netimi ile ayn? hat ?zerinde farkl? ?r?n gruplar? ?al???labilir." },
    { question: "S1v1 ?retimde kapasite nas?l belirlenir?", answer: "Kapasite ?o?u zaman batch baz?nda, g?nl?k ?retim hedefi ve dolum senaryosu ile birlikte deerlendirilir." },
    { question: "Filtrasyon neden ?nemlidir?", answer: "Filtrasyon, ?r?n berrakl???n?, dolum hatt? g?venli?ini ve son kullan?c? uygulama performans?n? dorudan etkiler." },
    { question: "Organik i?erikli s?v? ?r?nlerde ?zel tasar?m gerekir mi?", answer: "Evet, organik hammaddelerin viskozite, ??kme, koku ve stabilite davran???na g?re ?zel proses yakla??m? gerekir." },
    { question: "Mevcut s?v? g?bre hatt? revize edilebilir mi?", answer: "Evet, mevcut ekipman yap?s?na g?re kapasite art???, filtrasyon iyile?tirmesi, yeni ?r?n adaptasyonu ve dolum entegrasyonu yap?labilir." },
  ],
  "sivi-npk": [
    { question: "S1v1 NPK tesisi i?in hedef analiz nas?l belirlenir?", answer: "Hedef analiz, istenen NPK oran?, ??z?n?r hammadde se?enekleri ve hedef pazardaki ?r?n ihtiyac?na g?re netle?tirilir." },
    { question: "Ayn? hatta farkl? NPK form?lleri ?retilebilir mi?", answer: "Evet, uygun re?ete y?netimi ve tank ge?i? plan? ile ayn? hatta farkl? analizlerde s?v? NPK ?r?nleri ?retilebilir." },
    { question: "Kristalle?me riski nas?l y?netilir?", answer: "??z?n?rl?k s?n?rlar?, s?cakl?k y?netimi, pH dengesi ve filtrasyon kademeleri birlikte de?erlendirilerek kristalle?me riski azalt?l?r." },
    { question: "Dolum ?ncesi dinlendirme gerekli midir?", answer: "Form?lasyona ba?l? olarak homojenizasyon sonras? kontroll? bekletme, ?r?n kararl?l??? a??s?ndan avantaj sa?layabilir." },
    { question: "Mevcut s?v? g?bre hatt? NPK ?retimi i?in revize edilebilir mi?", answer: "Evet, mevcut tank, filtrasyon ve dozajlama yap?s? incelenerek NPK odakl? ?retime uygun revizyon yap?labilir." },
  ],
  "sivi-amino-asit": [
    { question: "Amino asit kayna?? proses tasar?m?n? etkiler mi?", answer: "Evet, serbest amino asit ??zeltisi ile protein hidrolizat? bazl? hammaddeler farkl? filtrasyon, kar1_1m ve stabilite yakla??m? gerektirebilir." },
    { question: "Sivi amino asit ?retiminde filtrasyon neden kritiktir?", answer: "Filtrasyon, hem dolum hatt?n?n g?venli ?al??mas?n? hem de son ?r?n?n g?rsel ve uygulama performans?n? dorudan etkiler." },
    { question: "Ayn? hatta farkl? amino asit bazl? ?r?nler ?retilebilir mi?", answer: "Evet, uygun re?ete y?netimi, tank ge?i? plan? ve temizlik prosed?r? ile farkl? ?r?nler ayn? hatta ?retilebilir." },
    { question: "Koku ve renk farklar? kontrol alt?na al?nabilir mi?", answer: "Ham madde yap?s?na ba?l? de?i?imler proses s?ras?, kar1_1m ko?ullar? ve uygun yard?mc?larla y?netilebilir." },
    { question: "Mevcut s?v? hat amino asit ?retimine uyarlanabilir mi?", answer: "Evet, mevcut tank, filtre ve dolum sistemi de?erlendirilerek amino asit bazl? ?r?nlere uygun hale getirilebilir." },
  ],
  "organik-sivi-gubre": [
    { question: "Organik s?v? g?bre ?retiminde hammaddenin do?al yap?s? prosesi etkiler mi?", answer: "Evet, organik men?eli s?v? hammaddelerin viskozite, koku, ??kme ve filtrasyon davran??? proses kurgusunu dorudan etkiler." },
    { question: "Ayn? hatta farkl? organik s?v? form?ller ?retilebilir mi?", answer: "Uygun re?ete y?netimi ve hat temizli?i plan? ile farkl? organik s?v? ?r?nler ayn? hatta ?retilebilir." },
    { question: "Dolum ?ncesi berrakl?k her zaman gerekli midir?", answer: "Bu, hedef ?r?n?n kullan?m ?ekline ba?l?d?r; ancak dolum g?venli?i ve son kullan?c? deneyimi i?in uygun filtrasyon seviyesi ?nemlidir." },
    { question: "Organik s?v? ?r?nlerde depolama kararl?l??? nas?l sa?lan?r?", answer: "Kar???m dengesi, pH y?netimi, uygun tank se?imi ve kontroll? bekletme ko?ullar? ile depolama kararl?l??? desteklenir." },
    { question: "Mevcut bir s?v? hat organik ?r?nlere adapte edilebilir mi?", answer: "Evet, tank, kar??t?rma, filtrasyon ve dolum altyap?s? incelenerek organik s?v? ?r?nlere uygun hale getirilebilir." },
  ],
  "organik-biyostimulan": [
    { question: "Biyostim?lan ?r?nler i?in standart bir proses yap?s? var m??", answer: "Temel yap? benzer olsa da aktif i?eriklerin karakteri, berrakl?k ihtiyac? ve hedef kullan?m senaryosu prosesi ?nemli ?l??de de?i?tirir." },
    { question: "Deniz yosunu veya bitkisel ekstraktl? ?r?nlerde ?zel tank se?imi gerekir mi?", answer: "Evet, aktif i?eriklerin davran???na g?re kar1_1m, bekleme ve filtrasyon ad?mlar?na uygun tank ve yard?mc? ekipman se?imi ?nem ta??r." },
    { question: "Biyostim?lan ?r?nlerde filtrasyon neye g?re belirlenir?", answer: "Filtrasyon seviyesi, ?r?n?n aktif fraksiyonu, hedef berrakl??? ve dolum sonras? kullan?m ?ekline g?re se?ilir." },
    { question: "Ayn? hatta birden fazla biyostim?lan re?etesi ?al??t?r?labilir mi?", answer: "Evet, re?ete y?netimi, hat ge?i?leri ve temizlik plan? doru kurulursa farkl? biyostim?lan ?r?nler ayn? hatta ?retilebilir." },
    { question: "Mevcut s?v? tesis biyostim?lan ?retimi i?in revize edilebilir mi?", answer: "Evet, mevcut ekipman altyap?s? incelenerek aktif i?eriklere uygun kar1_1m, filtrasyon ve dolum iyile?tirmeleri yap?labilir." },
  ],
};

const granuleFaqsBySlug: Record<string, SubsolutionFaq[]> = {
  "granul-organomineral": [
    { question: "Gran?l organomineral g?bre tesisi i?in kapasite nas?l belirlenir?", answer: "Saatlik ?retim hedefi, re?ete yap?s?, geri d?n?? oran? ve kurutma senaryosu birlikte de?erlendirilerek kapasite belirlenir." },
    { question: "Organik i?erik gran?l dayan?m?n? etkiler mi?", answer: "Evet, organik fraksiyonun yap?s? gran?l formasyonu, nem dengesi ve nihai dayan?m ?zerinde ?nemli etkiye sahiptir." },
    { question: "Ayn? hatta farkl? organomineral re?eteler ?retilebilir mi?", answer: "Uygun dozajlama, kar1_1m ve proses ayarlar? ile farkl? re?eteler ayn? hatta ?retilebilir." },
    { question: "Kurutma her gran?l hat i?in gerekli midir?", answer: "?r?n yap?s?na g?re de?i?mekle birlikte gran?l kararl?l??? ve depolama performans? i?in ?o?u hatta kurutma kritik rol oynar." },
    { question: "Mevcut gran?l hat organomineral ?retime uyarlanabilir mi?", answer: "Evet, gran?lasyon, kurutma, eleme ve toz kontrol kademeleri incelenerek organomineral yap?ya uygun revizyon yap?labilir." },
  ],
  "granul-npk": [
    { question: "NPK gran?l hatlar?nda hedef analiz nas?l korunur?", answer: "Dozajlama dorulu?u, homojen kar1_1m, gran?lasyon dengesi ve geri d?n?? ak1_lar?n?n kontrol? birlikte y?netilmelidir." },
    { question: "Gran?l boyutu neden bu kadar ?nemlidir?", answer: "Gran?l boyutu hem ?r?n?n pazardaki kabul?n? hem de paketleme ve uygulama performans?n? dorudan etkiler." },
    { question: "Kurutma ve so?utma her zaman birlikte mi deerlendirilir?", answer: "Evet, gran?l ?r?n?n nem ve s?cakl?k dengesi son ?r?n kararl?l??? i?in birlikte ele al?nmal?d?r." },
    { question: "Ayn? hatta farkl? NPK analizleri ?retilebilir mi?", answer: "Uygun re?ete altyap?s? ve proses ayarlar? ile farkl? NPK form?lleri ayn? gran?l hatta ?retilebilir." },
    { question: "Mevcut gran?l g?bre hatt? NPK odakl? iyile?tirilebilir mi?", answer: "Evet, hedef analiz ve gran?l boyutu standard?na g?re besleme, gran?lasyon ve son hat kademeleri revize edilebilir." },
  ],
  "granul-kompost": [
    { question: "Gran?l kompost tesisi ile klasik kompost hatt? aras?ndaki fark nedir?", answer: "Gran?l kompost tesislerinde kompost bazl? malzeme son ?r?n olarak gran?l forma d?n??t?r?l?r; klasik kompost hatlar? ise daha ?ok olgunla?t?rma ve eleme odakl? ?al???r." },
    { question: "Gran?l kompost ?retiminde kurutma her zaman gerekli midir?", answer: "Hammadde nemi ve hedef gran?l kararl?l???na ba?l? olarak de?i?ir; ancak ?o?u senaryoda kontroll? kurutma ?r?n kalitesi i?in ?nemli rol oynar." },
    { question: "Kompost bazl? hammaddelerde gran?l dayan?m? nas?l sa?lan?r?", answer: "Doru nem dengesi, uygun kar1_1m yap?s?, ba?lay?c? ihtiyac? ve kontroll? kurutma ile gran?l dayan?m? desteklenir." },
    { question: "Mevcut kompost hatt? gran?l ?retime d?n??t?r?lebilir mi?", answer: "Evet, mevcut hatt?n hammadde haz?rlama yap?s? incelenerek gran?lasyon, kurutma, eleme ve paketleme kademeleri eklenebilir." },
    { question: "Gran?l kompost ?r?nleri nas?l paketlenir?", answer: "Son ?r?n, hedef pazara g?re genellikle torbalama ve paletleme sistemleriyle paketlenir; gran?l ak1_1na uygun son hat se?imi bu s?re?te belirleyicidir." },
  ],
};

const powderFaqsBySlug: Record<string, SubsolutionFaq[]> = {
  "toz-organomineral": [
    { question: "Toz organomineral g?bre tesisinde homojen kar1_1m nas?l sa?lan?r?", answer: "Doru dozajlama, uygun kar??t?r?c? se?imi ve hammadde ak1_ davran???n?n iyi analiz edilmesiyle homojen kar1_1m sa?lan?r." },
    { question: "Organik i?erik toz ak1_1n? etkiler mi?", answer: "Evet, organik karakter ta??yan toz fraksiyonlar ak1_ davran???, topaklanma ve besleme kararl?l??? ?zerinde etkili olabilir." },
    { question: "Eleme her toz organomineral hatta gerekli midir?", answer: "Topak ve iri par?a olu?umu riski olan yap?larda eleme, son ?r?n standard? i?in ?nemli bir kademedir." },
    { question: "Toz kontrol? neden kritik g?r?l?r?", answer: "Toz emi? ve filtrasyon altyap?s? hem ?evresel g?venlik hem de ?r?n kayb?n?n azalt?lmas? a??s?ndan ?nemlidir." },
    { question: "Mevcut toz hat organomineral ?retime adapte edilebilir mi?", answer: "Evet, dozajlama, kar??t?rma, eleme ve son hat sistemleri de?erlendirilerek organomineral ?retime uygun hale getirilebilir." },
  ],
  "toz-npk": [
    { question: "NPK toz g?bre tesisinde hedef analiz nas?l korunur?", answer: "Hassas tart?m, doru dozajlama ve homojen kar1_1m ad?mlar? hedef NPK oran?n?n korunmas?nda belirleyici rol oynar." },
    { question: "Toz NPK ?r?nlerde eleme ne zaman gerekli olur?", answer: "Topakla?ma veya iri par?alar?n ?r?n standard?n? bozdu?u senaryolarda eleme kademesi ?nemli hale gelir." },
    { question: "Toz kontrol ihtiyac? tesis tasar?m?n? etkiler mi?", answer: "Evet, emi? noktalar?, filtre kapasitesi ve ekipman s?zd?rmazl??? tesis yerle_imini ve makine se?imini dorudan etkiler." },
    { question: "Ayn? hatta farkl? toz NPK form?lleri ?al??t?r?labilir mi?", answer: "Uygun re?ete ve temizlik plan? ile farkl? analizlerde toz NPK ?r?nleri ayn? hatta ?retilebilir." },
    { question: "Mevcut toz g?bre hatt? NPK ?retimi i?in revize edilebilir mi?", answer: "Evet, mevcut besleme, kar??t?rma, eleme ve paketleme sistemleri incelenerek NPK odakl? revizyon yap?labilir." },
  ],
};
const fertilizerSubsolutionConfigs: Record<string, FertilizerSubsolutionConfig> = {
  "sivi-organomineral": {
    heroBadge: "ALT ??Z?M",
    heroTitle: "Sivi Organomineral G?bre ?retim Tesisleri",
    heroDescription: "Organik ve mineral i?eriklerin s?v? formda birle?tirildi?i, dozajlama, ??z?nd?rme, kar??t?rma, homojenizasyon, filtrasyon ve doluma uygun ?retim tesisleri.",
    rawMaterials: ["Organik kaynakl? s?v? hammaddeler", "Amino asit ??zeltileri", "Humik / fulvik i?erikler", "Organik men?eli s?v? ekstraktlar", "Mineral besin kaynaklar?", "Fosfor, potasyum ve azot i?eren ??z?n?r hammaddeler", "Mikro element katk?lar?", "pH d?zenleyiciler", "Stabilizat?r ve proses yard?mc?lar?", "Su ve yard?mc? ??z?nd?r?c? faz"],
    namingExplanation: "S1v1 organomineral g?breler, organik k?kenli bile?enler ile mineral besin elementlerinin ayn? form?lasyonda bir araya getirildi?i ?r?n grubudur. Bu nedenle ?r?n, sadece mineral g?bre ya da sadece organik bazl? bir ?r?n olarak de?il; organik i?erik ile bitki besleme ama?l? mineral bile?enleri birlikte ta??yan bir yap? olarak deerlendirilir. Form?lasyonda hem organik karakter kazand?ran i?erikler hem de bitkinin ihtiya? duydu?u mineral besin kaynaklar? bulundu?u i?in organomineral ifadesi kullan?l?r.",
    namingNote: "?r?n?n nihai s?n?f?, kullan?lan organik fraksiyonun yap?s?na, mineral besin i?eri?ine ve hedef pazardaki mevzuat tan?m?na g?re netle?ir.",
    offerCards: liquidOfferCardsBySlug["sivi-organomineral"],
    equipmentTitle: liquidEquipmentTitle,
    equipment: liquidEquipment,
    criticalTopics: liquidCriticalTopicsBySlug["sivi-organomineral"],
    faqs: liquidFaqsBySlug["sivi-organomineral"],
    formTitle: "S1v1 organomineral g?bre tesisi i?in teklif veya teknik g?r??me talep edin",
    formDescription: "Kapasite, batch yap?s?, ?r?n re?etesi, hammadde tipi ve dolum ihtiyac?n?za g?re size uygun s?v? g?bre ?retim ??z?m?n? birlikte de?erlendirelim.",
    formFields: [{ id: "productGroup", label: "?r?n Grubu", type: "select", required: true, options: ["Sivi Organomineral", "Sivi NPK", "Sivi Amino Asit", "Organik Biyostim?lan", "Di?er"] }, ...liquidCommonFields],
  },
  "sivi-npk": {
    heroBadge: "ALT ??Z?M",
    heroTitle: "Sivi NPK G?bre ?retim Tesisleri",
    heroDescription: "Azot, fosfor ve potasyum i?eren s?v? g?brelerin dozajlama, ??z?nd?rme, kar??t?rma, homojenizasyon, filtrasyon ve dolum s?re?lerine uygun ?retim tesisleri.",
    rawMaterials: ["Azot kayna?? hammaddeler", "Fosfor kayna?? hammaddeler", "Potasyum kayna?? hammaddeler", "??z?n?r mineral besin kaynaklar?", "Mikro element katk?lar?", "pH d?zenleyiciler", "Stabilite yard?mc?lar?", "Su bazl? ta??y?c? faz"],
    namingExplanation: "NPK ifadesi, ?r?n?n temel bitki besin elementleri olan azot (N), fosfor (P) ve potasyumu (K) birlikte i?ermesinden gelir. ?r?n s?v? formda haz?rlanm?? olsa da ana besleme omurgas? N, P ve K ise S1v1 NPK G?bre olarak adland?r?l?r.",
    namingNote: "Nihai ?r?n s?n?f?, hedef analiz de?erine ve y?r?rl?kteki mevzuata g?re netle?ir.",
    offerCards: liquidOfferCardsBySlug["sivi-npk"],
    equipmentTitle: liquidEquipmentTitle,
    equipment: liquidEquipment,
    criticalTopics: liquidCriticalTopicsBySlug["sivi-npk"],
    faqs: liquidFaqsBySlug["sivi-npk"],
    formTitle: "S1v1 NPK g?bre tesisi i?in teklif veya teknik g?r??me talep edin",
    formDescription: "Batch kapasitesi, g?nl?k ?retim hedefi, hedef NPK form?l? ve dolum ihtiyac?n?za g?re size uygun s?v? NPK ?retim ??z?m?n? birlikte de?erlendirelim.",
    formFields: [...liquidCommonFields.slice(0, 2), { id: "npkFormula", label: "Hedef NPK Form?l?", type: "text" }, ...liquidCommonFields.slice(2)],
  },
  "sivi-amino-asit": {
    heroBadge: "ALT ??Z?M",
    heroTitle: "Sivi Amino Asit G?bre ?retim Tesisleri",
    heroDescription: "Amino asit bazl? s?v? g?brelerin haz?rlanmas?, homojenizasyonu, filtrasyonu ve dolumuna uygun ?retim tesisleri.",
    rawMaterials: ["Amino asit ??zeltisi", "Protein hidrolizat? bazl? bile?enler", "Organik azot kaynaklar?", "Yard?mc? mineral katk?lar", "Mikro element destekleri", "pH d?zenleyiciler", "Stabilite yard?mc?lar?", "Su bazl? ta??y?c? faz"],
    namingExplanation: "Bu ?r?n grubunda form?lasyonun ana karakterini amino asit i?eri?i belirler. ?r?n?n temel fonksiyonu amino asit temelli ise S1v1 Amino Asit G?bre ifadesi teknik olarak doru kabul edilir.",
    namingNote: "Amino asit oran?, kullan?lan ham maddenin kayna??na ve hedef ?r?n standard?na g?re de?i?ebilir.",
    offerCards: liquidOfferCardsBySlug["sivi-amino-asit"],
    equipmentTitle: liquidEquipmentTitle,
    equipment: liquidEquipment,
    criticalTopics: liquidCriticalTopicsBySlug["sivi-amino-asit"],
    faqs: liquidFaqsBySlug["sivi-amino-asit"],
    formTitle: "S1v1 amino asit g?bre tesisi i?in teklif veya teknik g?r??me talep edin",
    formDescription: "Batch kapasitesi, g?nl?k ?retim hedefi, amino asit kayna??, filtrasyon gereksinimi ve dolum ihtiyac?n?za g?re size uygun ??z?m? birlikte de?erlendirelim.",
    formFields: [...liquidCommonFields.slice(0, 2), { id: "aminoSource", label: "Amino Asit Kayna??", type: "text" }, { id: "filtrationNeed", label: "Filtrasyon Gereksinimi", type: "select", options: ["Standart", "Y?ksek", "Hen?z net de?il"] }, ...liquidCommonFields.slice(2)],
  },
  "organik-sivi-gubre": {
    heroBadge: "ALT ??Z?M",
    heroTitle: "Organik Sivi G?bre Tesisleri",
    heroDescription: "Organik k?kenli s?v? i?eriklerle ?al??an, kar1_1m, stabilizasyon, filtrasyon ve doluma uygun ?retim tesisleri.",
    rawMaterials: ["Organik k?kenli s?v? ekstraktlar", "Organik madde i?eren s?v? hammaddeler", "Do?al men?eli destek i?erikleri", "Organik karbon ta??yan fraksiyonlar", "Stabilite yard?mc?lar?", "pH d?zenleyiciler", "Su bazl? ta??y?c? faz"],
    namingExplanation: "Bu ?r?n grubunda form?lasyonun ana karakteri organik k?kenli bile?enlerden gelir. Besleme ve destek mant??? a??rl?kl? olarak organik i?erikler ?zerinden kuruldu?u i?in organik s?v? g?bre ifadesi kullan?l?r.",
    namingNote: "Organik ?r?n tan?m?, hedef pazardaki mevzuat ve sertifikasyon beklentilerine g?re ayr?ca de?erlendirilmelidir.",
    offerCards: liquidOfferCardsBySlug["organik-sivi-gubre"],
    equipmentTitle: liquidEquipmentTitle,
    equipment: liquidEquipment,
    criticalTopics: liquidCriticalTopicsBySlug["organik-sivi-gubre"],
    faqs: liquidFaqsBySlug["organik-sivi-gubre"],
    formTitle: "Organik s?v? g?bre tesisi i?in teklif veya teknik g?r??me talep edin",
    formDescription: "Organik hammadde yap?s?, batch kapasitesi, stabilite ihtiyac? ve dolum hedefinize g?re size uygun organik s?v? ?retim ??z?m?n? birlikte de?erlendirelim.",
    formFields: liquidCommonFields,
  },
  "organik-biyostimulan": {
    heroBadge: "ALT ??Z?M",
    heroTitle: "Biyostim?lan ?retim Tesisleri",
    heroDescription: "Biyolojik etkili destek i?eriklerinin s?v? formda haz?rlanmas?, kar??t?r?lmas?, filtrasyonu ve dolumuna uygun ?retim tesisleri.",
    rawMaterials: ["Bitkisel ekstraktlar", "Deniz yosunu bazl? i?erikler", "Amino asit veya peptit bazl? destek bile?enleri", "Humik / fulvik yap?lar", "Organik aktif fraksiyonlar", "Stabilizat?rler", "pH d?zenleyiciler", "Su bazl? ta??y?c? faz"],
    namingExplanation: "Biyostim?lan ?r?nler, dorudan klasik NPK besleme mant???ndan ?ok bitkinin geli?im s?re?lerini, stres tolerans?n? ve besin kullan?m etkinli?ini desteklemeye odaklan?r. Bu nedenle form?lasyonun ana etkisi biyostim?lan karakter ta??yorsa bu isim kullan?l?r.",
    namingNote: "?r?n s?n?fland?rmas?, i?erik yap?s? ve ilgili mevzuat tan?mlar?na g?re deerlendirilir.",
    offerCards: liquidOfferCardsBySlug["organik-biyostimulan"],
    equipmentTitle: liquidEquipmentTitle,
    equipment: liquidEquipment,
    criticalTopics: liquidCriticalTopicsBySlug["organik-biyostimulan"],
    faqs: liquidFaqsBySlug["organik-biyostimulan"],
    formTitle: "Biyostim?lan ?retim tesisi i?in teklif veya teknik g?r??me talep edin",
    formDescription: "Aktif i?erik yap?s?, batch kapasitesi, ?r?n hedefi ve dolum ihtiyac?n?za g?re size uygun biyostim?lan ?retim ??z?m?n? birlikte de?erlendirelim.",
    formFields: liquidCommonFields,
  },
  "granul-organomineral": {
    heroBadge: "ALT ??Z?M",
    heroTitle: "Gran?l Organomineral G?bre ?retim Tesisleri",
    heroDescription: "Organik ve mineral i?eriklerin gran?l formda i?lendi?i, kar1_1m, gran?lasyon, kurutma, eleme, so?utma ve paketleme s?re?lerine uygun ?retim tesisleri.",
    rawMaterials: ["Organik madde i?eren kat? hammaddeler", "Mineral besin elementleri", "Azot, fosfor ve potasyum kaynaklar?", "Organik bazl? ta??y?c? ve ba?lay?c? i?erikler", "Mikro element katk?lar?", "Nem ayar? ve proses yard?mc?lar?"],
    namingExplanation: "Gran?l organomineral g?breler, organik i?erik ile mineral besin elementlerinin birlikte bulundu?u ve gran?l formda son ?r?ne d?n??t?r?ld??? ?r?n grubudur. Organomineral ifadesi ?r?n?n ?ift karakterini, gran?l ifadesi ise son ?r?n formunu anlat?r.",
    namingNote: "Nihai ?r?n s?n?f?, i?erik oranlar? ve y?r?rl?kteki mevzuata g?re netle?ir.",
    offerCards: granuleOfferCardsBySlug["granul-organomineral"],
    equipmentTitle: granuleEquipmentTitle,
    equipment: granuleEquipment,
    criticalTopics: granuleCriticalTopicsBySlug["granul-organomineral"],
    faqs: granuleFaqsBySlug["granul-organomineral"],
    formTitle: "Gran?l organomineral g?bre tesisi i?in teklif veya teknik g?r??me talep edin",
    formDescription: "Saatlik kapasite, re?ete yap?s?, gran?l boyutu ve son hat ihtiyac?n?za g?re size uygun gran?l ?retim ??z?m?n? birlikte de?erlendirelim.",
    formFields: granuleCommonFields,
  },
  "granul-npk": {
    heroBadge: "ALT ??Z?M",
    heroTitle: "NPK Gran?l G?bre ?retim Tesisleri",
    heroDescription: "Azot, fosfor ve potasyum i?eren gran?l g?brelerin dozajlama, kar1_1m, gran?lasyon, kurutma, eleme, so?utma ve paketleme hatlar?.",
    rawMaterials: ["Azot kayna?? hammaddeler", "Fosfor kayna?? hammaddeler", "Potasyum kayna?? hammaddeler", "Dolgu ve dengeleyici hammaddeler", "Ba?lay?c? ve proses yard?mc?lar?", "Mikro element katk?lar?"],
    namingExplanation: "Form?lasyonun ana omurgas?n? azot (N), fosfor (P) ve potasyum (K) olu?turdu?u i?in ?r?n NPK s?n?f?nda deerlendirilir. Son ?r?n gran?l formda oldu?u i?in de NPK Gran?l G?bre ifadesi kullan?l?r.",
    namingNote: "NPK oran?, hedef analize ve se?ilen hammaddelere g?re belirlenir.",
    offerCards: granuleOfferCardsBySlug["granul-npk"],
    equipmentTitle: granuleEquipmentTitle,
    equipment: granuleEquipment,
    criticalTopics: granuleCriticalTopicsBySlug["granul-npk"],
    faqs: granuleFaqsBySlug["granul-npk"],
    formTitle: "NPK gran?l g?bre tesisi i?in teklif veya teknik g?r??me talep edin",
    formDescription: "Saatlik kapasite, hedef NPK analizi, gran?l boyutu ve paketleme ihtiyac?n?za g?re size uygun gran?l ?retim ??z?m?n? birlikte de?erlendirelim.",
    formFields: [...granuleCommonFields, { id: "npkFormula", label: "Hedef NPK Form?l?", type: "text" }],
  },
  "granul-kompost": {
    heroBadge: "ALT ??Z?M",
    heroTitle: "Gran?l Kompost Tesisleri",
    heroDescription: "Kompost bazl? hammaddelerin gran?l formda son ?r?ne d?n??t?r?ld???, kar1_1m, gran?lasyon, kurutma, eleme, so?utma ve paketleme s?re?lerine uygun ?retim tesisleri.",
    rawMaterials: [
      "Eleklenmi? kompost",
      "Kurutulmu? organik kompost fraksiyonu",
      "Organik madde i?eren ince ???t?lm?? hammaddeler",
      "Gerekirse ba?lay?c? yard?mc?lar",
      "Nem d?zenleyici proses katk?lar?",
      "Ak?? ve gran?l olu?umunu destekleyen yard?mc? maddeler",
      "Gerekirse mineral destek bile?enleri",
      "Mikrobiyal veya organik bazl? ?zel katk?lar",
    ],
    namingExplanation: "Bu ?r?n grubu, ana yap?s?n? kompost bazl? organik hammaddelerden al?r ve son ?r?n gran?l formda elde edilir. Bu nedenle gran?l kompost ifadesi kullan?l?r. ?r?n?n temel karakteri organik kompost i?eri?ine dayan?rken, son ?r?n formu gran?l oldu?u i?in isimlendirme bu iki ?zelli?i birlikte yans?t?r.",
    namingNote: "Nihai ?r?n s?n?fland?rmas?, kompost oran?na, ek katk? yap?s?na ve hedef pazardaki mevzuata g?re netle?ir.",
    offerCards: [{ title: "Proses Tasar?m?", text: "Kompost bazl? hammaddenin yap?s?na g?re gran?l ?retim ak???n? planl?yoruz." }, { title: "Gran?lasyon Sistemi Se?imi", text: "Nem, organik yap? ve hedef gran?l boyutuna g?re uygun gran?lasyon kurgusunu belirliyoruz." }, { title: "Kurutma ve Eleme Hatt?", text: "Gran?l kompost ?r?nlerinde stabil nem ve uygun tane boyutu i?in hat yap?s?n? olu?turuyoruz." }, { title: "So?utma ve Son ?r?n Haz?rlama", text: "Depolama ve paketleme ?ncesi ?r?n kararl?l???n? art?ran son i?lemleri planl?yoruz." }, { title: "Toz ve Koku Kontrol?", text: "Organik i?erikli ?retim s?re?lerinde ?evresel kontrol ve saha temizli?i i?in uygun sistemler sunuyoruz." }, { title: "Anahtar Teslim Kurulum", text: "Makine imalat?, yerle?im, kurulum ve devreye alma dahil entegre tesis kurgusu sunuyoruz." }],
    equipmentTitle: granuleEquipmentTitle,
    equipment: granuleCompostEquipment,
    criticalTopics: granuleCriticalTopicsBySlug["granul-kompost"],
    faqs: granuleFaqsBySlug["granul-kompost"],
    formTitle: "Gran?l kompost tesisi i?in teklif veya teknik g?r??me talep edin",
    formDescription: "Kompost yap?s?, hedef gran?l boyutu, kapasite ve kurulum modelinize g?re size uygun gran?l kompost ?retim ??z?m?n? birlikte de?erlendirelim.",
    formFields: [
      { id: "hourlyCapacity", label: "Saatlik Kapasite", type: "number", unit: "ton/saat" },
      { id: "granuleSize", label: "Hedef Gran?l Boyutu", type: "text" },
      { id: "dryingNeed", label: "Kurutma Gerekli mi?", type: "select", options: ["Evet", "Hay?r", "Hen?z net de?il"] },
      { id: "packagingNeed", label: "Paketleme ?htiyac?", type: "select", options: ["Evet", "Hay?r", "Hen?z net de?il"] },
      { id: "automationLevel", label: "Otomasyon Seviyesi", type: "select", options: ["Yar? Otomatik", "Tam Otomatik", "Hen?z net de?il"] },
    ],
  },
  "toz-organomineral": {
    heroBadge: "ALT ??Z?M",
    heroTitle: "Toz Organomineral G?bre ?retim Tesisleri",
    heroDescription: "Organik ve mineral i?eriklerin toz formda kar??t?r?ld???, dozajland???, elendi?i ve son ?r?n olarak paketlendi?i ?retim tesisleri.",
    rawMaterials: ["Organik i?erik ta??yan toz hammaddeler", "Mineral besin elementleri", "Organik katk?l? toz fraksiyonlar", "Mikro element katk?lar?", "Ak?? d?zenleyici yard?mc?lar", "Toz bazl? ta??y?c?lar"],
    namingExplanation: "?r?n?n hem organik karakter ta??yan bile?enleri hem de mineral besin kaynaklar?n? birlikte i?ermesi organomineral tan?m?n? olu?turur. Son ?r?n toz formda sonland?r?ld??? i?in toz organomineral g?bre ifadesi kullan?l?r.",
    namingNote: "??erik oranlar? ve ?r?n s?n?f?, hedef pazardaki mevzuat ?er?evesinde deerlendirilir.",
    offerCards: powderOfferCardsBySlug["toz-organomineral"],
    equipmentTitle: powderEquipmentTitle,
    equipment: powderEquipment,
    criticalTopics: powderCriticalTopicsBySlug["toz-organomineral"],
    faqs: powderFaqsBySlug["toz-organomineral"],
    formTitle: "Toz organomineral g?bre tesisi i?in teklif veya teknik g?r??me talep edin",
    formDescription: "Saatlik kapasite, re?ete yap?s?, dozaj hassasiyeti ve paketleme ihtiyac?n?za g?re size uygun toz ?retim ??z?m?n? birlikte de?erlendirelim.",
    formFields: powderCommonFields,
  },
  "toz-npk": {
    heroBadge: "ALT ??Z?M",
    heroTitle: "NPK Toz G?bre ?retim Tesisleri",
    heroDescription: "Azot, fosfor ve potasyum i?eren toz g?brelerin hassas dozajlama, kar1_1m ve paketleme s?re?lerine uygun ?retim tesisleri.",
    rawMaterials: ["Azot kayna?? toz hammaddeler", "Fosfor kayna?? hammaddeler", "Potasyum kayna?? hammaddeler", "Mikro element katk?lar?", "Dolgu ve dengeleyici toz hammaddeler", "Ak?? d?zenleyici yard?mc?lar"],
    namingExplanation: "Form?lasyonun temel besleme omurgas?n? azot (N), fosfor (P) ve potasyum (K) olu?turdu?u i?in ?r?n NPK s?n?f?nda deerlendirilir. Son ?r?n gran?l de?il, toz formda sonland?r?ld??? i?in NPK Toz G?bre olarak adland?r?l?r.",
    namingNote: "Hedef analiz ve nihai s?n?fland?rma, kullan?lan hammaddelere ve form?lasyon yap?s?na g?re netle?ir.",
    offerCards: powderOfferCardsBySlug["toz-npk"],
    equipmentTitle: powderEquipmentTitle,
    equipment: powderEquipment,
    criticalTopics: powderCriticalTopicsBySlug["toz-npk"],
    faqs: powderFaqsBySlug["toz-npk"],
    formTitle: "NPK toz g?bre tesisi i?in teklif veya teknik g?r??me talep edin",
    formDescription: "Saatlik kapasite, hedef NPK oran?, eleme ihtiyac? ve paketleme senaryonuza g?re size uygun toz ?retim ??z?m?n? birlikte de?erlendirelim.",
    formFields: [...powderCommonFields, { id: "npkFormula", label: "Hedef NPK Form?l?", type: "text" }],
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

