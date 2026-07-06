import type {
  TopicalArticle,
  TopicalBlogCard,
  TopicalCategory,
  TopicalFaq,
  TopicalSection,
  TopicalSummaryRow,
} from "./topical-authority-blog-data";
import { sectorMachineGuideCards } from "./sector-machine-guide-blog-data";

const DEFAULT_READING_TIME = "6-8 dk";
const CATEGORY_BADGE = "Sekt�rel Teknik Rehber";
const COMMON_CTA_TEXT =
  "Kapasite, hammadde, nem oran1, �r�n hedefi ve saha yerle_iminize g�re uygun makine ve proses ��z�m�n� birlikte netle_tirebiliriz.";

type LinkItem = {
  label: string;
  href: string;
};

type ArticleSpec = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  heroDescription: string;
  categorySlug: string;
  sector: string;
  sectionTitles: string[];
  internalLinks: LinkItem[];
  relatedSlugs: string[];
  keywords: string[];
  relatedMachines: string[];
  relatedServiceLabels: string[];
  nextSlug?: string;
};

type SectorGroup = {
  id: string;
  title: string;
  description: string;
  slugs: string[];
};

function card(
  title: string,
  description: string,
  href: string,
  extra?: Partial<TopicalBlogCard>,
): TopicalBlogCard {
  return {
    title,
    description,
    href,
    eyebrow: CATEGORY_BADGE,
    readingTime: DEFAULT_READING_TIME,
    ...extra,
  };
}

function section(title: string, paragraphs: string[]): TopicalSection {
  return {
    title,
    paragraphs,
  };
}

function row(
  criterion: string,
  description: string,
  importance: string,
): TopicalSummaryRow {
  return { criterion, description, importance };
}

function faq(question: string, answer: string): TopicalFaq {
  return { question, answer };
}

function slugTitle(text: string) {
  return text.toLocaleLowerCase("tr-TR");
}

function buildSectionParagraphs(spec: ArticleSpec, sectionTitle: string, index: number): string[] {
  const machineText = spec.relatedMachines.slice(0, 4).join(", ");
  const keywordText = spec.keywords.slice(0, 4).join(", ");
  const isProcess =
    sectionTitle.includes("proses") ||
    sectionTitle.includes("ak1_1") ||
    sectionTitle.includes("kurulur") ||
    sectionTitle.includes("planlan1r");
  const isSelection =
    sectionTitle.includes("se�im") ||
    sectionTitle.includes("kriter") ||
    sectionTitle.includes("deerlendirilir");
  const isAutomation =
    sectionTitle.includes("otomasyon") ||
    sectionTitle.includes("kontrol");
  const first =
    isProcess
      ? `${sectionTitle} ba_l11nda ama�, ${slugTitle(spec.title)} kurgusunun sahada nas1l i_leyeceini netle_tirmektir. ${spec.sector} taraf1nda kapasite, nem, younluk, toz y�k� ve �r�n davran1_1 birlikte ele al1nmadan kurulan hatlar �ou zaman teoride doru g�r�nse de pratikte darboaz �retir.`
      : isSelection
        ? `${sectionTitle} konusu deerlendirilirken yaln1z tek bir ekipman etiketi �zerinden deil, hatt1n tamam1 �zerinden d�_�nmek gerekir. ${spec.sector} projelerinde ${machineText} gibi ekipmanlar birbirini besleyen halkalar _eklinde �al1_1r; bu nedenle se�im kriterleri kapasite, a_1nma, bak1m ve �r�n kalitesiyle birlikte okunmal1d1r.`
        : `${sectionTitle} b�l�m�nde ${spec.sector} projelerinde sahada en �ok kar_1la_1lan m�hendislik kararlar1 ele al1n1r. �zellikle ${machineText} gibi makine gruplar1, proses i�indeki g�revlerine g�re farkl1 boyut, malzeme ve otomasyon seviyeleriyle se�ilir.`;
  const second =
    isAutomation
      ? `Bu ba_l1k alt1nda sens�r, dozaj, PLC, operat�r ekran1 ve g�venlik mant11 da �nem kazan1r. ${keywordText} gibi aramalarda �ne �1kan teknik beklentiler yaln1z �retim kapasitesini deil, tekrarlanabilir kaliteyi ve g�venli i_letmeyi de dorudan etkiler.`
      : `${spec.excerpt} Bu nedenle ${sectionTitle.toLocaleLowerCase("tr-TR")} yaln1z teorik bilgi olarak deil; saha yerle_imi, enerji ihtiyac1, bak1m kolayl11 ve b�y�me plan1 ile birlikte deerlendirilmelidir.`;

  const third =
    index % 2 === 0
      ? `Pro Makina yakla_1m1nda bu b�l�m, ilgili makinenin ne i_e yarad11n1 anlatman1n �tesinde hangi ekipmanlarla birlikte �al1_t11n1 ve tasar1m s1ras1nda hangi risklerin kontrol edilmesi gerektiini de a�1klar. B�ylece yat1r1m kararlar1 katalog yerine proses mant11 �zerinden _ekillenir.`
      : `Doru ekipman karar1 verildiinde yaln1z kapasite artmaz; �r�n standard1, enerji verimi, bak1m d�zeni ve operat�r g�venlii de daha �ng�r�lebilir hale gelir. �zellikle uzun �m�rl� tesis yat1r1mlar1nda bu bak1_ a�1s1 toplam i_letme maliyetini ciddi �l��de etkiler.`;

  return [first, second, third];
}

function buildSections(spec: ArticleSpec): TopicalSection[] {
  return spec.sectionTitles.map((title, index) =>
    section(title, buildSectionParagraphs(spec, title, index)),
  );
}

function buildSummaryRows(spec: ArticleSpec): TopicalSummaryRow[] {
  return [
    row(
      "Kapasite ve ak1_ dengesi",
      `${spec.title} kapsam1nda saatlik kapasite, besleme d�zeni ve ekipman ritmi birlikte deerlendirilir.`,
      "Darboaz olu_umunu �nler.",
    ),
    row(
      "�r�n karakteri",
      "Nem, younluk, tane boyutu, a_1nd1r1c1l1k ve yap1_kanl1k tasar1m1 dorudan etkiler.",
      "Doru makine ve malzeme se�imini belirler.",
    ),
    row(
      "Yard1mc1 sistemler",
      "Ta_1ma, toz toplama, fan, filtre, otomasyon ve g�venlik bile_enleri ana prosesle birlikte ��z�l�r.",
      "Saha performans1n1 ve bak1m s�rekliliini art1r1r.",
    ),
    row(
      "�l�eklenebilirlik",
      "Tesis yerle_imi ve b�y�me ihtimali ilk tasar1m a_amas1nda okunur.",
      "Yat1r1m1n uzun vadeli esnekliini korur.",
    ),
  ];
}

function buildFaqs(spec: ArticleSpec): TopicalFaq[] {
  return [
    faq(
      `${spec.title} i�in hangi makineler gerekir?`,
      `${spec.sector} projelerinde ihtiya� duyulan makine zinciri; kapasite, �r�n yap1s1, proses hedefi ve son �r�n standard1na g�re belirlenir. �ou projede ta_1ma, ana proses, eleme/filtrasyon ve paketleme veya stok ekipmanlar1 birlikte deerlendirilir.`,
    ),
    faq(
      "Kapasite nas1l belirlenir?",
      "Kapasite hesab1 yaln1z saatlik tonaja g�re yap1lmaz. �r�n nemi, younluu, geri d�n�_ y�k�, proses s�resi ve yard1mc1 ekipman s1n1rlar1 da birlikte okunmal1d1r.",
    ),
    faq(
      "Kurutma veya gran�lasyon gerekli midir?",
      "Bu karar �r�n formuna, hedef neme, pazara sunulacak son �r�n yap1s1na ve mevcut hammaddenin davran1_1na g�re verilir. Her proje i�in ayn1 proses dizisi doru deildir.",
    ),
    faq(
      "Toz toplama sistemi gerekir mi?",
      "Toz y�k�, �r�n tipi ve saha �evre _artlar1na g�re �ou end�striyel hatta siklon, filtre, fan veya kapal1 transfer hatt1 deerlendirilmelidir.",
    ),
    faq(
      "Proje maliyeti hangi verilere g�re dei_ir?",
      "Kapasite, otomasyon seviyesi, malzeme se�imi, 1s1l y�k, ta_1ma mesafeleri, yap1 �elii, platformlar ve �evresel kontrol ekipmanlar1 toplam yat1r1m tutar1n1 etkiler.",
    ),
    faq(
      "Pro Makina bu konuda hangi ��z�mleri sunar?",
      "Pro Makina; �n m�hendislik, makine se�imi, imalat, saha kurulumu, otomasyon ve devreye alma yakla_1m1n1 birlikte sunarak proje b�t�nl��n� korur.",
    ),
  ];
}

function buildRelatedServiceCards(spec: ArticleSpec): TopicalBlogCard[] {
  return spec.internalLinks
    .filter((link) => !link.href.startsWith("/kutuphane/blog"))
    .slice(0, 4)
    .map((link) =>
      card(
        link.label,
        `${link.label} sayfas1nda ilgili hizmet, sekt�r veya makine ailesini daha detayl1 inceleyebilirsiniz.`,
        link.href,
        {
          eyebrow: "0lgili Sayfa",
          readingTime: undefined,
        },
      ),
    );
}

const articleSpecs: ArticleSpec[] = [
  {
    slug: "granul-gubre-uretim-tesisi-nasil-kurulur",
    title: "Gran�l G�bre �retim Tesisi Nas1l Kurulur?",
    metaTitle:
      "Gran�l G�bre �retim Tesisi Nas1l Kurulur? | Makine, Proses ve Yat1r1m Rehberi",
    description:
      "Gran�l g�bre �retim tesisi kurulumunda hammadde haz1rlama, dozajlama, gran�lasyon, kurutma, soutma, eleme, kaplama ve paketleme proseslerini teknik olarak inceleyin.",
    excerpt:
      "Gran�l g�bre tesislerinde dozajlama, gran�lasyon, kurutma, soutma ve paketleme ad1mlar1n1n birbirini nas1l beslediini a�1klayan yat1r1m odakl1 teknik rehber.",
    heroDescription:
      "Gran�l g�bre �retim tesisi kurulumunu; proses ak1_1, makine se�imi, kapasite planlama ve otomasyon kararlar1yla birlikte ele alan kapsaml1 teknik rehber.",
    categorySlug: "gubre-uretim-rehberleri",
    sector: "G�bre �retim tesisleri",
    sectionTitles: [
      "Gran�l g�bre �retim tesisinin ana proses ak1_1",
      "Hammadde kabul, silo ve dozajlama sistemleri",
      "Kar1_t1rma ve homojenizasyon a_amas1",
      "Gran�lasyon tamburu ve gran�l olu_umu",
      "Kurutma tamburu ile nem kontrol�",
      "Soutma tamburu ve �r�n stabilitesi",
      "Eleme, k1rma ve recycle hatt1",
      "Kaplama tamburu ve �r�n kalitesi",
      "Paketleme ve sevkiyat haz1rl11",
      "Gran�l g�bre tesisinde otomasyonun �nemi",
      "Makine se�erken dikkat edilecek kriterler",
      "Pro Makina ile gran�l g�bre tesisi kurulumu",
    ],
    internalLinks: [
      { label: "Gran�l G�bre �retim Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { label: "Organomineral G�bre Tesisi", href: "/hizmetler/organomineral-gubre-tesisi" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesaplar1", href: "/programlar/tambur-hesaplari" },
    ],
    relatedSlugs: [
      "organomineral-gubre-tesisi-makine-secimi",
      "sivi-gubre-uretiminde-kullanilan-tank-sistemleri",
      "granul-ve-organomineral-gubre-hatlari",
    ],
    keywords: [
      "gran�l g�bre �retim hatt1",
      "g�bre tesisi nas1l kurulur",
      "gran�lasyon tamburu",
      "kurutma tamburu hesab1",
    ],
    relatedMachines: [
      "hammadde silolar1",
      "dozaj bunkerleri",
      "gran�lasyon tamburu",
      "kurutma tamburu",
      "soutma tamburu",
      "kaplama tamburu",
    ],
    relatedServiceLabels: ["Gran�l g�bre tesisi", "Organomineral g�bre tesisi"],
    nextSlug: "organomineral-gubre-tesisi-makine-secimi",
  },
  {
    slug: "organomineral-gubre-tesisi-makine-secimi",
    title: "Organomineral G�bre Tesisi Makine Se�imi",
    metaTitle:
      "Organomineral G�bre Tesisi Makine Se�imi | Gran�lasyon ve Kurutma Hatlar1",
    description:
      "Organomineral g�bre �retim tesislerinde kullan1lan dozajlama, kar1_t1rma, gran�lasyon, kurutma, soutma, eleme, kaplama ve paketleme ekipmanlar1n1 teknik olarak inceleyin.",
    excerpt:
      "Organik ve mineral hammaddelerin ayn1 hatta dengeli bi�imde i_lendii organomineral tesislerde doru makine zincirini anlatan teknik rehber.",
    heroDescription:
      "Organomineral g�bre tesislerinde gran�lasyon, kurutma, eleme, geri d�n�_ ve paketleme ekipmanlar1n1n nas1l se�ileceini a�1klayan proses odakl1 blog i�erii.",
    categorySlug: "gubre-uretim-rehberleri",
    sector: "Organomineral g�bre tesisleri",
    sectionTitles: [
      "Organomineral g�bre �retiminde proses mant11",
      "Organik hammadde haz1rlama sistemleri",
      "Mineral hammadde dozajlama sistemleri",
      "Mikser ve homojenizasyon ekipmanlar1",
      "Gran�lasyon tamburu se�imi",
      "Kurutma ve soutma tamburlar1",
      "Eleme ve geri d�n�_ sistemi",
      "Kaplama, torbalama ve big bag dolum",
      "Organomineral tesiste toz toplama ve filtreleme",
      "Tesis kapasitesi nas1l belirlenir?",
    ],
    internalLinks: [
      { label: "Organomineral G�bre Tesisi", href: "/hizmetler/organomineral-gubre-tesisi" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Ta_1ma Ekipmanlar1", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Tambur Hesaplar1", href: "/programlar/tambur-hesaplari" },
    ],
    relatedSlugs: [
      "granul-gubre-uretim-tesisi-nasil-kurulur",
      "sivi-gubre-uretiminde-kullanilan-tank-sistemleri",
      "granul-ve-organomineral-gubre-hatlari",
    ],
    keywords: [
      "organomineral g�bre �retim tesisi",
      "organomineral g�bre makinalar1",
      "gran�l g�bre �retim hatt1",
      "tambur hesaplar1",
    ],
    relatedMachines: [
      "mikser",
      "gran�lasyon tamburu",
      "kurutma tamburu",
      "soutma tamburu",
      "d�ner elek",
      "jet pulse filtre",
    ],
    relatedServiceLabels: ["Organomineral g�bre tesisi", "Tambur sistemleri"],
    nextSlug: "sivi-gubre-uretiminde-kullanilan-tank-sistemleri",
  },
  {
    slug: "sivi-gubre-uretiminde-kullanilan-tank-sistemleri",
    title: "S1v1 G�bre �retiminde Kullan1lan Tank Sistemleri",
    metaTitle:
      "S1v1 G�bre �retiminde Kullan1lan Tank Sistemleri | Reakt�r ve Kar1_t1r1c1 Tanklar",
    description:
      "S1v1 g�bre �retiminde kullan1lan �n haz1rl1k tanklar1, kar1_t1r1c1l1 reakt�rler, stok tanklar1, mamul tanklar1, homojenizat�r ve filtrasyon sistemlerini inceleyin.",
    excerpt:
      "S1v1 g�bre hatlar1nda �n haz1rl1k tank1, reakt�r, stok tank1 ve dolum �ncesi kalite dengeleme ekipmanlar1n1 anlatan teknik rehber.",
    heroDescription:
      "S1v1 g�bre �retiminde kullan1lan tank, reakt�r, homojenizasyon ve filtrasyon sistemlerini proses g�venlii ve �r�n kararl1l11 a�1s1ndan ele alan detayl1 makale.",
    categorySlug: "gubre-uretim-rehberleri",
    sector: "S1v1 g�bre �retim hatlar1",
    sectionTitles: [
      "S1v1 g�bre �retim hatt1 nas1l �al1_1r?",
      "�n haz1rl1k tanklar1",
      "Kar1_t1r1c1l1 reakt�rler",
      "��z�nd�rme tanklar1",
      "Stok tanklar1 ve mamul tanklar1",
      "Homojenizat�r sistemleri",
      "Filtrasyon ve berrakla_t1rma ekipmanlar1",
      "S1v1 dolum ve _i_eleme sistemleri",
      "Otomasyon, seviye ve s1cakl1k kontrol�",
      "Tank malzemesi se�imi",
    ],
    internalLinks: [
      { label: "S1v1 G�bre �retim Tesisi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { label: "Reakt�rler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    relatedSlugs: [
      "organomineral-gubre-tesisi-makine-secimi",
      "reaktor-ve-karistiricili-tank-secimi",
      "sivi-gubre-uretim-makinalari",
    ],
    keywords: [
      "s1v1 g�bre �retim makinalar1",
      "kar1_t1r1c1l1 reakt�r",
      "tank sistemleri",
      "s1v1 dolum sistemi",
    ],
    relatedMachines: [
      "�n haz1rl1k tank1",
      "kar1_t1r1c1l1 reakt�r",
      "stok tank1",
      "homojenizat�r",
      "torba filtre",
      "s1v1 dolum makinesi",
    ],
    relatedServiceLabels: ["S1v1 g�bre �retim tesisi", "Reakt�r ve tank sistemleri"],
    nextSlug: "kompost-tesisi-kurulumu-makine-proses-secimi",
  },
  {
    slug: "kompost-tesisi-kurulumu-makine-proses-secimi",
    title: "Kompost Tesisi Kurulumu 0�in Makine ve Proses Se�imi",
    metaTitle:
      "Kompost Tesisi Kurulumu | Makine, Proses ve Organik At1k 0_leme Rehberi",
    description:
      "Kompost tesisi kurulumunda at1k kabul, par�alay1c1, kar1_t1rma, kompost tamburu, olgunla_t1rma, kurutma, eleme ve koku kontrol sistemlerini inceleyin.",
    excerpt:
      "Kompost tesislerinde organik at1k kabul�nden olgunla_t1rma ve eleme a_amas1na kadar makine zincirini a�1klayan teknik rehber.",
    heroDescription:
      "Kompost tesisi kurulumunu; at1k karakteri, ekipman se�imi, olgunla_t1rma mant11 ve �evresel kontrol ba_l1klar1yla birlikte ele alan kapsaml1 blog sayfas1.",
    categorySlug: "kompost-ve-organik-atik-rehberleri",
    sector: "Kompost ve organik at1k tesisleri",
    sectionTitles: [
      "Kompost tesislerinde proses ak1_1",
      "Organik at1k kabul ve �n haz1rl1k",
      "Shredder ve par�alay1c1 sistemler",
      "Kar1_t1rma ve nem dengeleme",
      "Kompost / olgunla_t1rma tamburu",
      "Kurutma ve nihai �r�n haz1rlama",
      "Eleme ve �r�n s1n1fland1rma",
      "Koku kontrol�, biyofiltre ve scrubber",
      "Komposttan organomineral g�breye ge�i_",
      "Kompost tesislerinde otomasyon",
    ],
    internalLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { label: "K1r1c1lar ve Par�alay1c1lar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Kompost ve Organik At1k Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
    ],
    relatedSlugs: [
      "evsel-organik-atik-isleme-tesisi-nasil-planlanir",
      "trommel-elek-ve-kompost-tamburu-secim-kriterleri",
      "kompost-ve-organik-atik-makinalari",
    ],
    keywords: [
      "kompost tesisi kurulumu",
      "organik at1k i_leme makinalar1",
      "kompost tamburu",
      "trommel elek",
    ],
    relatedMachines: [
      "shredder",
      "kar1_t1rma tamburu",
      "kompost tamburu",
      "trommel elek",
      "biyofiltre",
      "scrubber",
    ],
    relatedServiceLabels: ["Kompost tesisi kurulumu", "Organik at1k i_leme"],
    nextSlug: "evsel-organik-atik-isleme-tesisi-nasil-planlanir",
  },
  {
    slug: "evsel-organik-atik-isleme-tesisi-nasil-planlanir",
    title: "Evsel Organik At1k 0_leme Tesisi Nas1l Planlan1r?",
    metaTitle:
      "Evsel Organik At1k 0_leme Tesisi Nas1l Planlan1r? | Kompost ve Geri Kazan1m",
    description:
      "Evsel organik at1klar1n ayr1_t1rma, par�alama, kompostla_t1rma, kurutma, eleme ve �r�n haz1rlama proseslerinde kullan1lan sistemleri inceleyin.",
    excerpt:
      "Belediye kaynakl1 organik at1klar1n kabul, ayr1_t1rma, par�alama ve kompostla_t1rma a_amalar1n1 teknik bak1_la anlatan rehber.",
    heroDescription:
      "Evsel organik at1k i_leme tesislerinde makine se�imi, saha yerle_imi, koku y�netimi ve �r�n haz1rlama mant11n1 �zetleyen teknik i�erik.",
    categorySlug: "kompost-ve-organik-atik-rehberleri",
    sector: "Evsel organik at1k projeleri",
    sectionTitles: [
      "Evsel at1kta organik fraksiyonun �nemi",
      "Ayr1_t1rma ve �n kabul alan1",
      "Par�alama ve boyut k���ltme",
      "Kompostla_t1rma ve olgunla_t1rma",
      "Kurutma ve nem kontrol�",
      "Nihai �r�n eleme ve zenginle_tirme",
      "Koku ve s1z1nt1 suyu y�netimi",
      "Belediye projelerinde tesis yerle_imi",
    ],
    internalLinks: [
      { label: "Kompost ve Organik At1k Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { label: "K1r1c1lar ve Par�alay1c1lar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
    ],
    relatedSlugs: [
      "kompost-tesisi-kurulumu-makine-proses-secimi",
      "trommel-elek-ve-kompost-tamburu-secim-kriterleri",
      "evsel-atik-ayristirma-tesisi-ekipman-secimi",
    ],
    keywords: [
      "organik at1k i_leme tesisi",
      "kompost tesisi kurulumu",
      "evsel organik at1k",
      "organik at1k makinalar1",
    ],
    relatedMachines: [
      "ayr1_t1rma konvey�r�",
      "shredder",
      "kompost tamburu",
      "kurutma tamburu",
      "elek",
      "biyofiltre",
    ],
    relatedServiceLabels: ["Kompost tesisi", "Geri d�n�_�m ve at1k y�netimi"],
    nextSlug: "trommel-elek-ve-kompost-tamburu-secim-kriterleri",
  },
  {
    slug: "trommel-elek-ve-kompost-tamburu-secim-kriterleri",
    title: "Trommel Elek ve Kompost Tamburu Se�im Kriterleri",
    metaTitle:
      "Trommel Elek ve Kompost Tamburu Se�im Kriterleri | Kompost Tesisi Ekipmanlar1",
    description:
      "Kompost tesislerinde trommel elek, d�ner elek, kompost tamburu ve olgunla_t1rma tamburu se�erken kapasite, nem, tane boyutu ve malzeme davran1_1 nas1l deerlendirilir?",
    excerpt:
      "Kompost tesislerinde trommel elek ve kompost tamburu se�iminin kapasite, nem ve malzeme davran1_1yla nas1l ili_kilendirildiini anlatan teknik rehber.",
    heroDescription:
      "Kompost ve organik at1k hatlar1nda trommel elek ile kompost tamburu aras1nda doru dengeyi kurmak i�in gereken temel se�im kriterlerini a�1klayan blog sayfas1.",
    categorySlug: "kompost-ve-organik-atik-rehberleri",
    sector: "Kompost ekipman se�imi",
    sectionTitles: [
      "Kompost tesislerinde tambur ve elek uyumu neden �nemlidir?",
      "Trommel elek kapasitesi nas1l yorumlan1r?",
      "Kompost tamburunda kal1_ s�resi ve doluluk ili_kisi",
      "Nem, topaklanma ve t1kanma riski",
      "Elek a�1kl11 ve nihai �r�n standard1",
      "Bak1m kolayl11, temizlik ve panel dei_imi",
      "Kompost hatt1nda tambur hesaplar1 neden �nemlidir?",
      "Pro Makina ile kompost hatt1 ekipman se�imi",
    ],
    internalLinks: [
      { label: "Eleme ve S1n1fland1rma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesaplar1", href: "/programlar/tambur-hesaplari" },
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
    ],
    relatedSlugs: [
      "kompost-tesisi-kurulumu-makine-proses-secimi",
      "evsel-organik-atik-isleme-tesisi-nasil-planlanir",
      "kompost-ve-organik-atik-makinalari",
    ],
    keywords: [
      "kompost tamburu",
      "trommel elek se�imi",
      "kompost tesisi ekipmanlar1",
      "tambur hesaplar1",
    ],
    relatedMachines: [
      "trommel elek",
      "d�ner elek",
      "kompost tamburu",
      "olgunla_t1rma tamburu",
    ],
    relatedServiceLabels: ["Kompost tesisi kurulumu", "Tambur sistemleri"],
    nextSlug: "biyogaz-tesislerinde-on-islem-ve-besleme-sistemleri",
  },
  {
    slug: "biyogaz-tesislerinde-on-islem-ve-besleme-sistemleri",
    title: "Biyogaz Tesislerinde �n 0_lem ve Besleme Sistemleri",
    metaTitle:
      "Biyogaz Tesislerinde �n 0_lem ve Besleme Sistemleri | At1k Haz1rlama Rehberi",
    description:
      "Biyogaz tesislerinde hayvansal, tar1msal ve organik at1klar1n par�alay1c1, kar1_t1r1c1, pompa, helezon ve besleme sistemleriyle haz1rlanmas1n1 inceleyin.",
    excerpt:
      "Biyogaz tesislerinde at11n reakt�re girmeden �nce nas1l haz1rlanmas1 gerektiini anlatan �n i_lem ve besleme rehberi.",
    heroDescription:
      "Biyogaz tesisleri i�in �n i_lem, par�alama, kar1_t1rma ve kontroll� besleme sistemlerinin gaz verimi �zerindeki etkisini a�1klayan teknik i�erik.",
    categorySlug: "biyogaz-ve-enerji-rehberleri",
    sector: "Biyogaz ve enerji tesisleri",
    sectionTitles: [
      "Biyogaz tesislerinde �n i_lem neden �nemlidir?",
      "Organik at1k kabul ve besleme ekipmanlar1",
      "Shredder ve par�alay1c1 sistemleri",
      "��tme ve boyut k���ltme ekipmanlar1",
      "Kar1_t1rma ve homojenizasyon tanklar1",
      "Helezon, pompa ve konvey�r sistemleri",
      "Yabanc1 madde ay1rma ve proses g�venlii",
      "Digestat sonras1 kompost ve kurutma hatlar1",
      "Biyogaz tesislerinde ekipman se�iminin verime etkisi",
      "Pro Makina ile biyogaz �n i_lem ��z�mleri",
    ],
    internalLinks: [
      { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "K1r1c1lar ve Par�alay1c1lar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Ta_1ma Ekipmanlar1", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "digestat-kurutma-ve-kompostlastirma-sistemi",
      "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
      "biyogaz-on-islem-ve-ogutme-makinalari",
    ],
    keywords: [
      "biyogaz tesisi ekipmanlar1",
      "biyogaz �n i_lem sistemi",
      "organik at1k besleme",
      "shredder ve helezon",
    ],
    relatedMachines: [
      "shredder",
      "kar1_t1rma tank1",
      "bunker",
      "helezon konvey�r",
      "pompa sistemleri",
      "elek",
    ],
    relatedServiceLabels: ["Biyogaz ve enerji sistemleri", "Ta_1ma ekipmanlar1"],
    nextSlug: "digestat-kurutma-ve-kompostlastirma-sistemi",
  },
  {
    slug: "digestat-kurutma-ve-kompostlastirma-sistemi",
    title: "Digestat Kurutma ve Kompostla_t1rma Sistemi",
    metaTitle:
      "Digestat Kurutma ve Kompostla_t1rma Sistemi | Biyogaz Sonras1 �r�n Haz1rlama",
    description:
      "Biyogaz tesislerinden �1kan digestat1n kurutma, kompostla_t1rma, stabilizasyon ve organik �r�n haz1rlama proseslerini teknik olarak inceleyin.",
    excerpt:
      "Biyogaz sonras1 digestat1n kurutma, stabilizasyon ve kompost entegrasyonu ile nas1l deerlendirileceini anlatan teknik rehber.",
    heroDescription:
      "Digestat1n bertaraf y�k�nden ticari �r�ne d�n�_ebilecei kurutma, kompostla_t1rma ve stabilizasyon senaryolar1n1 a�1klayan kapsaml1 teknik makale.",
    categorySlug: "biyogaz-ve-enerji-rehberleri",
    sector: "Digestat deerlendirme sistemleri",
    sectionTitles: [
      "Digestat1n proses karakteri neden ayr1d1r?",
      "Digestat besleme ve �n susuzla_t1rma",
      "Kurutma tamburu ile nem d�_�rme",
      "Kompostla_t1rma ve olgunla_t1rma se�enekleri",
      "Sterilizasyon ve stabilizasyon senaryolar1",
      "Koku, gaz ve s1z1nt1 suyu y�netimi",
      "Son �r�n kullan1m1: kompost, g�bre veya yak1t haz1rl11",
      "Pro Makina ile digestat deerlendirme ��z�mleri",
    ],
    internalLinks: [
      { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesaplar1", href: "/programlar/tambur-hesaplari" },
      { label: "Kompost ve Organik At1k Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
    ],
    relatedSlugs: [
      "biyogaz-tesislerinde-on-islem-ve-besleme-sistemleri",
      "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
      "kompost-ve-organik-atik-makinalari",
    ],
    keywords: [
      "digestat kurutma",
      "digestat kompostla_t1rma",
      "biyogaz sonras1 �r�n haz1rlama",
      "kompost tamburu",
    ],
    relatedMachines: [
      "kurutma tamburu",
      "kompost tamburu",
      "stabilizasyon tamburu",
      "bunker",
      "biyofiltre",
      "scrubber",
    ],
    relatedServiceLabels: ["Biyogaz sistemleri", "Kompost ve organik at1k ��z�mleri"],
    nextSlug: "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
  },
  {
    slug: "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
    title: "Hayvansal At1klardan Biyogaz Tesisi Kurulumu",
    metaTitle:
      "Hayvansal At1klardan Biyogaz Tesisi Kurulumu | �n 0_lem ve Enerji �retimi",
    description:
      "B�y�kba_, k���kba_ ve kanatl1 hayvan at1klar1ndan biyogaz �retimi i�in �n i_lem, kar1_t1rma, besleme, digestat y�netimi ve kompost entegrasyonunu inceleyin.",
    excerpt:
      "Hayvansal at1klara dayal1 biyogaz tesislerinde �n i_lem, besleme, digestat y�netimi ve yan �r�n deerlendirmesini anlatan teknik blog.",
    heroDescription:
      "Hayvansal at1klardan biyogaz tesisi kurulurken �n i_lem, pompalanabilirlik, besleme s�reklilii ve digestat �1k1_1n1n nas1l y�netileceini ele alan sekt�r rehberi.",
    categorySlug: "biyogaz-ve-enerji-rehberleri",
    sector: "Hayvansal at1k ve biyogaz projeleri",
    sectionTitles: [
      "Hayvansal at1klarda biyogaz potansiyeli nas1l okunur?",
      "B�y�kba_, k���kba_ ve kanatl1 at1k farklar1",
      "Besleme bunkerleri ve kar1_t1rma sistemleri",
      "Pompalanabilirlik ve ak1_kanl1k sorunlar1",
      "�n i_lem, yabanc1 madde ayr1m1 ve g�venlik",
      "Digestat �1k1_1 ve kompost entegrasyonu",
      "Saha yerle_imi, koku ve hijyen y�netimi",
      "Pro Makina ile biyogaz tesisi �n deerlendirmesi",
    ],
    internalLinks: [
      { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Kompost ve Organik At1k Tesisleri", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Ta_1ma Ekipmanlar1", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "biyogaz-tesislerinde-on-islem-ve-besleme-sistemleri",
      "digestat-kurutma-ve-kompostlastirma-sistemi",
      "atik-su-camuru-ve-aritma-makinalari",
    ],
    keywords: [
      "hayvansal at1klardan biyogaz",
      "biyogaz tesisi kurulumu",
      "digestat y�netimi",
      "biyogaz besleme sistemleri",
    ],
    relatedMachines: [
      "besleme bunkeri",
      "kar1_t1r1c1",
      "pompa",
      "helezon konvey�r",
      "shredder",
    ],
    relatedServiceLabels: ["Enerji ve biyogaz sistemleri", "Organik at1k i_leme"],
    nextSlug: "silis-kumu-kurutma-tesisi-nasil-tasarlanir",
  },
  {
    slug: "silis-kumu-kurutma-tesisi-nasil-tasarlanir",
    title: "Silis Kumu Kurutma Tesisi Nas1l Tasarlan1r?",
    metaTitle:
      "Silis Kumu Kurutma Tesisi Nas1l Tasarlan1r? | Kurutma Tamburu ve Eleme Hatt1",
    description:
      "Silis kumu, kuvars ve mineral �r�nlerin kurutma tamburu, br�l�r, fan, siklon, filtre, eleme ve ta_1ma sistemleriyle i_lenmesini teknik olarak inceleyin.",
    excerpt:
      "Silis kumu ve kuvars proseslerinde kurutma tamburu, fan, br�l�r, siklon ve eleme hatt1 kurgusunu anlatan teknik rehber.",
    heroDescription:
      "Silis kumu kurutma tesisi tasar1m1nda nem y�k�, termal proses omurgas1, eleme ve toz kontrol sistemlerinin nas1l birlikte kurgulanaca1n1 a�1klayan makale.",
    categorySlug: "maden-ve-mineral-isleme-rehberleri",
    sector: "Maden ve mineral i_leme tesisleri",
    sectionTitles: [
      "Silis kumu prosesinde nem neden kritiktir?",
      "Besleme bunkerleri ve ta_1ma omurgas1",
      "Kurutma tamburu ile termal proses mant11",
      "Br�l�r, s1cak hava ve hava kanal1 kurgusu",
      "Fan, siklon ve jet pulse filtre sistemleri",
      "Eleme, s1n1fland1rma ve �r�n standard1",
      "Silis kumu tesislerinde a_1nma ve malzeme se�imi",
      "Pro Makina ile maden kurutma tesisi tasar1m1",
    ],
    internalLinks: [
      { label: "Maden Kurutma ve Eleme Tesisi", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesaplar1", href: "/programlar/tambur-hesaplari" },
      { label: "Madencilik ve Mineral 0_leme", href: "/sektorler/madencilik-ve-mineral-isleme" },
    ],
    relatedSlugs: [
      "maden-kurutma-ve-eleme-tesisi-secim-kriterleri",
      "kirici-trommel-elek-ve-konveyor-kombinasyonu",
      "maden-ve-mineral-isleme-makinalari",
    ],
    keywords: [
      "silis kumu kurutma tesisi",
      "maden kurutma tesisi",
      "kurutma tamburu",
      "siklon ve filtre sistemi",
    ],
    relatedMachines: [
      "kurutma tamburu",
      "br�l�r",
      "fan",
      "siklon",
      "jet pulse filtre",
      "vibrasyonlu elek",
    ],
    relatedServiceLabels: ["Maden kurutma tesisi", "Tambur sistemleri"],
    nextSlug: "maden-kurutma-ve-eleme-tesisi-secim-kriterleri",
  },
  {
    slug: "maden-kurutma-ve-eleme-tesisi-secim-kriterleri",
    title: "Maden Kurutma ve Eleme Tesisi Se�im Kriterleri",
    metaTitle:
      "Maden Kurutma ve Eleme Tesisi Se�im Kriterleri | Mineral 0_leme Ekipmanlar1",
    description:
      "Maden ve mineral i_leme tesislerinde k1r1c1, kurutma tamburu, elek, konvey�r, siklon ve filtre sistemlerinin se�im kriterlerini inceleyin.",
    excerpt:
      "K1r1c1, kurutma tamburu, elek ve ta_1ma ekipmanlar1n1n ayn1 hatta nas1l dengeleneceini a�1klayan maden prosesi rehberi.",
    heroDescription:
      "Maden kurutma ve eleme tesislerinde �r�n tane boyutu, nem, a_1nma ve toz y�k�ne g�re ekipman se�im kriterlerini bir araya getiren teknik blog sayfas1.",
    categorySlug: "maden-ve-mineral-isleme-rehberleri",
    sector: "Maden kurutma ve eleme hatlar1",
    sectionTitles: [
      "Maden tesislerinde ana proses ak1_1 nas1l kurulur?",
      "K1r1c1 se�imi ve besleme boyutu ili_kisi",
      "Kurutma tamburu kapasitesi ve nem y�netimi",
      "Elek tipi, a�1kl1k ve s1n1fland1rma standard1",
      "Konvey�r, elevat�r ve bunker entegrasyonu",
      "Toz y�k�, siklon ve filtre sistemleri",
      "Bak1m plan1 ve a_1nma y�netimi",
      "Pro Makina ile maden tesislerinde �n m�hendislik",
    ],
    internalLinks: [
      { label: "Maden Kurutma ve Eleme Tesisi", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { label: "K1r1c1lar ve Par�alay1c1lar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Eleme ve S1n1fland1rma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Tambur Hesaplar1", href: "/programlar/tambur-hesaplari" },
    ],
    relatedSlugs: [
      "silis-kumu-kurutma-tesisi-nasil-tasarlanir",
      "kirici-trommel-elek-ve-konveyor-kombinasyonu",
      "maden-ve-mineral-isleme-makinalari",
    ],
    keywords: [
      "maden kurutma tesisi",
      "maden eleme tesisi",
      "mineral i_leme ekipmanlar1",
      "silis kumu kurutma",
    ],
    relatedMachines: [
      "�eneli k1r1c1",
      "�eki�li k1r1c1",
      "kurutma tamburu",
      "vibrasyonlu elek",
      "bant konvey�r",
      "siklon",
    ],
    relatedServiceLabels: ["Maden ve mineral i_leme", "Eleme ve s1n1fland1rma"],
    nextSlug: "kirici-trommel-elek-ve-konveyor-kombinasyonu",
  },
  {
    slug: "kirici-trommel-elek-ve-konveyor-kombinasyonu",
    title: "K1r1c1, Trommel Elek ve Konvey�r Kombinasyonu",
    metaTitle:
      "K1r1c1, Trommel Elek ve Konvey�r Kombinasyonu | Maden ve Geri D�n�_�m Hatlar1",
    description:
      "K1r1c1, trommel elek, bant konvey�r, helezon, elevat�r ve besleme ekipmanlar1n1n birlikte �al1_t11 proses hatlar1n1 teknik olarak inceleyin.",
    excerpt:
      "K1r1c1, trommel elek ve konvey�r kombinasyonunun maden ve geri d�n�_�m hatlar1nda nas1l dengelendiini anlatan teknik i�erik.",
    heroDescription:
      "Boyut k���ltme, eleme ve ta_1ma ekipmanlar1n1n ayn1 ak1_ta birbiriyle nas1l konu_tuunu a�1klayan �ok ekipmanl1 proses rehberi.",
    categorySlug: "maden-ve-mineral-isleme-rehberleri",
    sector: "K1rma, eleme ve ta_1ma kombinasyonlar1",
    sectionTitles: [
      "Neden makine kombinasyonu tek makineden daha �nemlidir?",
      "K1r1c1 sonras1 malzeme ak1_1n1n y�netimi",
      "Trommel eleklerde �n ay1rma ve t1kanma kontrol�",
      "Bant konvey�r, helezon ve elevat�r g�rev payla_1m1",
      "Besleme bunkerleri ve tampon stok kullan1m1",
      "A_1nd1r1c1 ve tozlu �r�nlerde tasar1m detaylar1",
      "Geri d�n�_�m ve maden hatlar1nda ayn1 omurga nas1l �al1_1r?",
      "Pro Makina ile entegre hat tasar1m1",
    ],
    internalLinks: [
      { label: "K1r1c1lar ve Par�alay1c1lar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Eleme ve S1n1fland1rma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Ta_1ma Ekipmanlar1", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Madencilik ve Mineral 0_leme", href: "/sektorler/madencilik-ve-mineral-isleme" },
    ],
    relatedSlugs: [
      "maden-kurutma-ve-eleme-tesisi-secim-kriterleri",
      "evsel-atik-ayristirma-tesisi-ekipman-secimi",
      "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
    ],
    keywords: [
      "trommel elek",
      "k1r1c1 ve konvey�r kombinasyonu",
      "maden ve geri d�n�_�m hatt1",
      "d�kme kat1 ta_1ma sistemleri",
    ],
    relatedMachines: [
      "�eneli k1r1c1",
      "trommel elek",
      "bant konvey�r",
      "helezon konvey�r",
      "koval1 elevat�r",
    ],
    relatedServiceLabels: ["K1r1c1 ve eleme hatlar1", "Ta_1ma ekipmanlar1"],
    nextSlug: "reaktor-ve-karistiricili-tank-secimi",
  },
  {
    slug: "reaktor-ve-karistiricili-tank-secimi",
    title: "Reakt�r ve Kar1_t1r1c1l1 Tank Se�imi",
    metaTitle:
      "Reakt�r ve Kar1_t1r1c1l1 Tank Se�imi | Kimyasal Proses Ekipmanlar1",
    description:
      "Kimyasal proseslerde reakt�r, kar1_t1r1c1l1 tank, stok tank1, mamul tank1, homojenizat�r, filtre ve pompa sistemleri nas1l se�ilir?",
    excerpt:
      "Kimyasal ve s1v1 proseslerde reakt�r, kar1_t1r1c1l1 tank, filtrasyon ve pompa se�imini ayn1 sistem i�inde ele alan teknik rehber.",
    heroDescription:
      "Kimyasal proseslerde reakt�r ve kar1_t1r1c1l1 tank se�imini; malzeme uyumu, kar1_t1rma kalitesi, otomasyon ve proses g�venliiyle birlikte inceleyen makale.",
    categorySlug: "kimya-ve-proses-rehberleri",
    sector: "Kimya ve proses end�strisi",
    sectionTitles: [
      "Kimya ve proses tesislerinde ekipman se�imi",
      "Reakt�rler ve kar1_t1r1c1l1 tanklar",
      "Bas1n�l1 ve atmosferik proses tanklar1",
      "Dozajlama ve hammadde besleme sistemleri",
      "Filtrasyon ve ayr1_t1rma ekipmanlar1",
      "Homojenizasyon ve kalite dengeleme",
      "Pompa, vana ve borulama entegrasyonu",
      "Paslanmaz, galvaniz ve RAL boyal1 ekipman tasar1m1",
      "Otomasyon, sens�r ve proses kontrol sistemleri",
      "Pro Makina ile kimyasal proses ��z�mleri",
    ],
    internalLinks: [
      { label: "Reakt�rler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Kimya ve Proses End�strisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "sivi-kimyasal-hazirlama-tanki-proses-akisi",
      "asit-ve-ozel-cozelti-sistemleri",
      "kimya-ve-proses-endustrisi-ekipmanlari",
    ],
    keywords: [
      "kimyasal proses ekipmanlar1",
      "reakt�r se�imi",
      "kar1_t1r1c1l1 tank",
      "proses tank1",
    ],
    relatedMachines: [
      "reakt�r",
      "kar1_t1r1c1l1 tank",
      "stok tank1",
      "homojenizat�r",
      "filtre sistemi",
      "dozaj pompas1",
    ],
    relatedServiceLabels: ["Reakt�r ve tank sistemleri", "Kimya ve proses ��z�mleri"],
    nextSlug: "sivi-kimyasal-hazirlama-tanki-proses-akisi",
  },
  {
    slug: "sivi-kimyasal-hazirlama-tanki-proses-akisi",
    title: "S1v1 Kimyasal Haz1rlama Tank1 Proses Ak1_1",
    metaTitle:
      "S1v1 Kimyasal Haz1rlama Tank1 Proses Ak1_1 | Tank, Reakt�r ve Filtrasyon",
    description:
      "S1v1 kimyasal �r�n haz1rlama hatlar1nda tank, reakt�r, kar1_t1r1c1, filtrasyon, pompa ve dolum sistemlerinin proses ak1_1n1 inceleyin.",
    excerpt:
      "S1v1 kimyasal haz1rlama hatlar1nda tank, kar1_t1r1c1, filtrasyon, pompa ve dolum ad1mlar1n1 bir araya getiren teknik i�erik.",
    heroDescription:
      "S1v1 kimyasal �r�nlerin g�venli ve tekrarlanabilir bi�imde haz1rlanmas1 i�in gereken tank, reakt�r, filtrasyon ve otomasyon omurgas1n1 anlatan rehber.",
    categorySlug: "kimya-ve-proses-rehberleri",
    sector: "S1v1 kimyasal haz1rlama hatlar1",
    sectionTitles: [
      "S1v1 kimyasal haz1rlama hatlar1nda ana ak1_",
      "Hammadde kabul ve dozajlama disiplini",
      "Kar1_t1rma tank1 ve ��z�nd�rme mant11",
      "Reakt�r ve 1s1 transferi gereksinimleri",
      "Filtrasyon ve berrakla_t1rma a_amas1",
      "Mamul tank1 ve stok y�netimi",
      "Dolum hatt1na ge�i_ ve kalite kontrol",
      "Pro Makina ile proses tank1 tasar1m1",
    ],
    internalLinks: [
      { label: "Reakt�rler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "S1v1 G�bre �retim Tesisi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "reaktor-ve-karistiricili-tank-secimi",
      "asit-ve-ozel-cozelti-sistemleri",
      "sivi-gubre-uretiminde-kullanilan-tank-sistemleri",
    ],
    keywords: [
      "s1v1 kimyasal haz1rlama tank1",
      "kimyasal proses ak1_1",
      "reakt�r ve filtrasyon",
      "kar1_t1rma tank1",
    ],
    relatedMachines: [
      "��z�nd�rme tank1",
      "reakt�r",
      "kar1_t1r1c1",
      "filtre sistemi",
      "pompa skid",
      "mamul tank1",
    ],
    relatedServiceLabels: ["S1v1 kimyasal haz1rlama", "Tank ve reakt�r sistemleri"],
    nextSlug: "asit-ve-ozel-cozelti-sistemleri",
  },
  {
    slug: "asit-ve-ozel-cozelti-sistemleri",
    title: "Asit ve �zel ��zelti Sistemleri",
    metaTitle:
      "Asit ve �zel ��zelti Sistemleri | Tank, Filtre ve G�venli Proses Tasar1m1",
    description:
      "Asit ve �zel ��zelti proseslerinde tank malzemesi, kar1_t1rma, havaland1rma, filtreleme, pompalama ve g�venlik tasar1m1n1 inceleyin.",
    excerpt:
      "Asit ve agresif ��zelti hatlar1nda tank malzemesi, pompa, filtrasyon ve g�venlik tasar1m1n1n nas1l ele al1naca1n1 anlatan teknik rehber.",
    heroDescription:
      "Asit ve �zel ��zelti sistemlerinde g�venli malzeme se�imi, havaland1rma, dozaj ve proses kontrol�n� ayn1 �er�evede deerlendiren kimyasal proses makalesi.",
    categorySlug: "kimya-ve-proses-rehberleri",
    sector: "Asit ve �zel ��zelti sistemleri",
    sectionTitles: [
      "Agresif kimyasallarda malzeme se�imi neden kritiktir?",
      "Tank g�vdesi, conta ve balant1 detaylar1",
      "Kar1_t1rma ve havaland1rma g�venlii",
      "Filtrasyon ve partik�l kontrol�",
      "Pompalama, vana ve dozajlama sistemi",
      "Operat�r g�venlii ve emniyet ekipmanlar1",
      "Otomasyon, alarm ve izleme mant11",
      "Pro Makina ile g�venli proses tasar1m1",
    ],
    internalLinks: [
      { label: "Kimya ve Proses End�strisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "Reakt�rler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "reaktor-ve-karistiricili-tank-secimi",
      "sivi-kimyasal-hazirlama-tanki-proses-akisi",
      "kimya-ve-proses-endustrisi-ekipmanlari",
    ],
    keywords: [
      "asit tank1 sistemi",
      "�zel ��zelti proses tasar1m1",
      "kimyasal g�venlik",
      "kar1_t1r1c1l1 tank se�imi",
    ],
    relatedMachines: [
      "asit tank1",
      "kar1_t1r1c1l1 reakt�r",
      "filtre sistemi",
      "dozaj pompas1",
      "havaland1rma ekipman1",
    ],
    relatedServiceLabels: ["Kimya ve proses ��z�mleri", "Reakt�r ve tank sistemleri"],
    nextSlug: "evsel-atik-ayristirma-tesisi-ekipman-secimi",
  },
  {
    slug: "evsel-atik-ayristirma-tesisi-ekipman-secimi",
    title: "Evsel At1k Ayr1_t1rma Tesisi Ekipman Se�imi",
    metaTitle:
      "Evsel At1k Ayr1_t1rma Tesisi Ekipman Se�imi | Ayr1_t1rma ve Geri Kazan1m",
    description:
      "Evsel at1k ayr1_t1rma tesislerinde bunker, konvey�r, trommel elek, manyetik ay1r1c1, kabin, par�alay1c1 ve geri kazan1m ekipmanlar1n1 inceleyin.",
    excerpt:
      "Evsel at1k ayr1_t1rma hatlar1nda bunker, konvey�r, trommel elek ve ay1rma ekipmanlar1n1n g�revlerini anlatan teknik rehber.",
    heroDescription:
      "Evsel at1k ayr1_t1rma tesislerinde malzeme ak1_1n1n nas1l kurulduunu, hangi ekipmanlar1n hangi noktada devreye girdiini ve geri kazan1m verimini nelerin etkilediini a�1klayan makale.",
    categorySlug: "geri-donusum-ve-atik-yonetimi-rehberleri",
    sector: "Geri d�n�_�m ve at1k y�netimi tesisleri",
    sectionTitles: [
      "Evsel at1k ayr1_t1rma hatt1 nas1l kurulur?",
      "At1k kabul, bunker ve besleme noktalar1",
      "Konvey�r omurgas1 ve manuel ay1rma kabinleri",
      "Trommel elek ve �n s1n1fland1rma",
      "Manyetik ay1r1c1 ve geri kazan1m ekipmanlar1",
      "Par�alay1c1 ve hacim k���ltme ihtiyac1",
      "Toz, koku ve saha g�venlii",
      "Pro Makina ile geri d�n�_�m hatt1 planlamas1",
    ],
    internalLinks: [
      { label: "Geri D�n�_�m ve At1k Y�netimi", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
      { label: "K1r1c1lar ve Par�alay1c1lar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Ta_1ma Ekipmanlar1", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Eleme ve S1n1fland1rma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
    ],
    relatedSlugs: [
      "rdf-srf-hazirlama-tesislerinde-proses-akisi",
      "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
      "kirici-trommel-elek-ve-konveyor-kombinasyonu",
    ],
    keywords: [
      "evsel at1k ayr1_t1rma tesisi",
      "geri d�n�_�m hatt1 ekipmanlar1",
      "trommel elek",
      "konvey�r sistemleri",
    ],
    relatedMachines: [
      "bunker",
      "bant konvey�r",
      "trommel elek",
      "manyetik ay1r1c1",
      "par�alay1c1",
      "ay1rma kabini",
    ],
    relatedServiceLabels: ["Geri d�n�_�m ve at1k y�netimi", "K1r1c1 ve eleme sistemleri"],
    nextSlug: "rdf-srf-hazirlama-tesislerinde-proses-akisi",
  },
  {
    slug: "rdf-srf-hazirlama-tesislerinde-proses-akisi",
    title: "RDF / SRF Haz1rlama Tesislerinde Proses Ak1_1",
    metaTitle:
      "RDF / SRF Haz1rlama Tesislerinde Proses Ak1_1 | At1k Yak1t Haz1rlama",
    description:
      "RDF ve SRF yak1t haz1rlama tesislerinde at1k kabul, par�alama, eleme, ay1rma, kurutma ve depolama proseslerini inceleyin.",
    excerpt:
      "RDF ve SRF hatlar1nda at1k kabul�nden par�alama, eleme ve yak1t haz1rlama a_amas1na kadar proses ak1_1n1 a�1klayan teknik i�erik.",
    heroDescription:
      "RDF / SRF haz1rlama tesislerinde enerjiye d�n�_t�r�lecek at1k ak1_1n1n nas1l i_lendiini, hangi ekipmanlarla kontrol edildiini ve kaliteyi hangi parametrelerin belirlediini anlatan rehber.",
    categorySlug: "geri-donusum-ve-atik-yonetimi-rehberleri",
    sector: "RDF / SRF haz1rlama tesisleri",
    sectionTitles: [
      "RDF / SRF hatt1nda hedef �r�n mant11",
      "At1k kabul ve �n ayr1_t1rma",
      "Par�alama ve boyut k���ltme ekipmanlar1",
      "Eleme ve fraksiyon ayr1m1",
      "Kurutma ihtiyac1 ve nem kontrol�",
      "Metalik ve istenmeyen bile_enlerin ayr1m1",
      "Stoklama, sevkiyat ve g�venlik",
      "Pro Makina ile at1k yak1t hatt1 planlamas1",
    ],
    internalLinks: [
      { label: "Geri D�n�_�m ve At1k Y�netimi", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
      { label: "K1r1c1lar ve Par�alay1c1lar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Ta_1ma Ekipmanlar1", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Kurutma ve Termal Proses Makinalar1", href: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari" },
    ],
    relatedSlugs: [
      "evsel-atik-ayristirma-tesisi-ekipman-secimi",
      "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
      "kurutma-ve-termal-proses-makinalari",
    ],
    keywords: [
      "rdf haz1rlama tesisi",
      "srf proses ak1_1",
      "at1k yak1t haz1rlama",
      "kurutma ve eleme hatt1",
    ],
    relatedMachines: [
      "shredder",
      "trommel elek",
      "manyetik ay1r1c1",
      "kurutma tamburu",
      "konvey�r",
    ],
    relatedServiceLabels: ["Geri d�n�_�m hatlar1", "Kurutma ve termal proses ��z�mleri"],
    nextSlug: "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
  },
  {
    slug: "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
    title: "Geri D�n�_�m Hatlar1nda K1r1c1 ve Eleme Sistemleri",
    metaTitle:
      "Geri D�n�_�m Hatlar1nda K1r1c1 ve Eleme Sistemleri | Par�alama ve S1n1fland1rma",
    description:
      "Geri d�n�_�m tesislerinde k1r1c1, shredder, trommel elek, vibrasyonlu elek ve konvey�r sistemlerinin proses i�indeki g�revlerini inceleyin.",
    excerpt:
      "Geri d�n�_�m hatlar1nda k1r1c1, shredder, trommel elek ve konvey�rlerin birbirini nas1l tamamlad11n1 anlatan teknik rehber.",
    heroDescription:
      "Par�alama ve s1n1fland1rma ekipmanlar1n1n geri d�n�_�m hatlar1nda nas1l dizildiini, hangi �r�nlerde hangi kombinasyonlar1n �ne �1kt11n1 a�1klayan teknik makale.",
    categorySlug: "geri-donusum-ve-atik-yonetimi-rehberleri",
    sector: "Geri d�n�_�m ay1rma ve s1n1fland1rma hatlar1",
    sectionTitles: [
      "Neden k1r1c1 ve eleme birlikte d�_�n�lmelidir?",
      "Shredder ve k1r1c1 g�rev ayr1m1",
      "Trommel elek ve vibrasyonlu elek fark1",
      "Konvey�r omurgas1 ve �r�n y�nlendirme",
      "Toz, yabanc1 madde ve metal ay1rma",
      "A_1nd1r1c1 ve heterojen at1klarda tasar1m detaylar1",
      "Bak1m eri_imi ve saha s�reklilii",
      "Pro Makina ile geri d�n�_�m ekipman se�imi",
    ],
    internalLinks: [
      { label: "Geri D�n�_�m ve At1k Y�netimi", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
      { label: "K1r1c1lar ve Par�alay1c1lar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Eleme ve S1n1fland1rma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Ta_1ma Ekipmanlar1", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    ],
    relatedSlugs: [
      "evsel-atik-ayristirma-tesisi-ekipman-secimi",
      "rdf-srf-hazirlama-tesislerinde-proses-akisi",
      "kirici-trommel-elek-ve-konveyor-kombinasyonu",
    ],
    keywords: [
      "geri d�n�_�m hatt1 k1r1c1 se�imi",
      "trommel elek sistemi",
      "_redder ve eleme hatt1",
      "konvey�r sistemleri",
    ],
    relatedMachines: [
      "shredder",
      "�eki�li k1r1c1",
      "trommel elek",
      "vibrasyonlu elek",
      "konvey�r",
    ],
    relatedServiceLabels: ["Geri d�n�_�m hatlar1", "K1r1c1 ve eleme sistemleri"],
    nextSlug: "aritma-camuru-kurutma-tesisi-nasil-kurulur",
  },
  {
    slug: "aritma-camuru-kurutma-tesisi-nasil-kurulur",
    title: "Ar1tma �amuru Kurutma Tesisi Nas1l Kurulur?",
    metaTitle:
      "Ar1tma �amuru Kurutma Tesisi Nas1l Kurulur? | �amur Kurutma ve Stabilizasyon",
    description:
      "Ar1tma �amuru ve belediye �amurunun kurutma tamburu, sterilizasyon, stabilizasyon, koku kontrol� ve �r�n haz1rlama proseslerini inceleyin.",
    excerpt:
      "Ar1tma �amuru kurutma tesislerinde besleme, kurutma, koku kontrol� ve stabilizasyon omurgas1n1 a�1klayan teknik rehber.",
    heroDescription:
      "Ar1tma �amuru kurutma tesisi kurulurken y�ksek nem, koku, gaz ve termal y�k�n nas1l y�netileceini ad1m ad1m anlatan sekt�r odakl1 blog sayfas1.",
    categorySlug: "atik-su-camuru-ve-aritma-rehberleri",
    sector: "At1k su �amuru ve ar1tma ��z�mleri",
    sectionTitles: [
      "Ar1tma �amuru proseslerinde makine se�imi neden kritiktir?",
      "�amur besleme ve ta_1ma ekipmanlar1",
      "Kar1_t1rma ve _artland1rma sistemleri",
      "Kurutma tamburu ile nem d�_�rme",
      "Sterilizasyon ve stabilizasyon tamburlar1",
      "Koku ve gaz kontrol sistemleri",
      "Siklon, filtre, scrubber ve biyofiltre ��z�mleri",
      "Kurutulmu_ �amurdan kompost veya yak1t haz1rlama",
      "�amur kurutma hatt1nda otomasyon ve g�venlik",
      "Pro Makina ile ar1tma �amuru proses ��z�mleri",
    ],
    internalLinks: [
      { label: "�amur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "At1k Su �amuru ve Ar1tma ��z�mleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesaplar1", href: "/programlar/tambur-hesaplari" },
    ],
    relatedSlugs: [
      "camur-kurutma-ve-koku-kontrol-sistemleri",
      "camur-kurutma-maliyeti-ve-kapasite-hesabi",
      "atik-su-camuru-ve-aritma-makinalari",
    ],
    keywords: [
      "ar1tma �amuru kurutma tesisi",
      "�amur kurutma tesisi",
      "stabilizasyon tamburu",
      "koku kontrol sistemi",
    ],
    relatedMachines: [
      "�amur besleme bunkeri",
      "helezon konvey�r",
      "kurutma tamburu",
      "stabilizasyon tamburu",
      "scrubber",
      "biyofiltre",
    ],
    relatedServiceLabels: ["�amur kurutma tesisi", "Tambur sistemleri"],
    nextSlug: "camur-kurutma-ve-koku-kontrol-sistemleri",
  },
  {
    slug: "camur-kurutma-ve-koku-kontrol-sistemleri",
    title: "�amur Kurutma ve Koku Kontrol Sistemleri",
    metaTitle:
      "�amur Kurutma ve Koku Kontrol Sistemleri | Scrubber, Biyofiltre ve Kapal1 Hat",
    description:
      "�amur kurutma tesislerinde koku, gaz, buhar, toz ve emisyon kontrol� i�in kullan1lan scrubber, biyofiltre, filtre ve kapal1 transfer sistemlerini inceleyin.",
    excerpt:
      "�amur kurutma tesislerinde koku, gaz, toz ve buhar kontrol�n�n nas1l kurgulanaca1n1 anlatan �evresel kontrol rehberi.",
    heroDescription:
      "�amur kurutma hatlar1nda emisyon kontrol�, kapal1 transfer, scrubber, biyofiltre ve filtre sistemlerinin birlikte nas1l deerlendirilmesi gerektiini anlatan teknik i�erik.",
    categorySlug: "atik-su-camuru-ve-aritma-rehberleri",
    sector: "�amur kurutma ve �evresel kontrol sistemleri",
    sectionTitles: [
      "�amur kurutmada koku ve gaz neden b�y�r?",
      "Kapal1 besleme ve s1zd1rmaz transfer hatlar1",
      "Scrubber sistemleri hangi noktada devreye girer?",
      "Biyofiltre ve biyolojik koku kontrol�",
      "Jet pulse filtre ve toz emisyonu kontrol�",
      "Fan, kanal ve negatif bas1n� y�netimi",
      "0_ g�venlii ve �evresel izin bak1_1",
      "Pro Makina ile kapal1 hat tasar1m1",
    ],
    internalLinks: [
      { label: "�amur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "At1k Su �amuru ve Ar1tma ��z�mleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "Kurutma ve Termal Proses Makinalar1", href: "/kutuphane/blog/kurutma-ve-termal-proses-makinalari" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "aritma-camuru-kurutma-tesisi-nasil-kurulur",
      "camur-kurutma-maliyeti-ve-kapasite-hesabi",
      "atik-su-camuru-ve-aritma-makinalari",
    ],
    keywords: [
      "�amur kurutma koku kontrol�",
      "scrubber biyofiltre sistemi",
      "�amur kurutma emisyon kontrol�",
      "kapal1 transfer hatt1",
    ],
    relatedMachines: [
      "scrubber",
      "biyofiltre",
      "jet pulse filtre",
      "fan",
      "kapal1 helezon",
      "baca sistemi",
    ],
    relatedServiceLabels: ["�amur kurutma tesisi", "Koku kontrol ��z�mleri"],
    nextSlug: "camur-kurutma-maliyeti-ve-kapasite-hesabi",
  },
  {
    slug: "camur-kurutma-maliyeti-ve-kapasite-hesabi",
    title: "�amur Kurutma Maliyeti ve Kapasite Hesab1",
    metaTitle:
      "�amur Kurutma Maliyeti ve Kapasite Hesab1 | Nem, Enerji ve Tambur Se�imi",
    description:
      "Ar1tma �amuru kurutma tesislerinde nem d�_�rme, buharla_acak su miktar1, enerji ihtiyac1, tambur kapasitesi ve i_letme maliyeti nas1l hesaplan1r?",
    excerpt:
      "�amur kurutma projelerinde nem d�_�rme hedefi, buharla_acak su ve tambur se�iminin maliyete nas1l yans1d11n1 anlatan hesap odakl1 rehber.",
    heroDescription:
      "�amur kurutma maliyeti ve kapasite hesab1n1; su buharla_t1rma y�k�, enerji ihtiyac1, tambur se�imi ve yard1mc1 ekipman etkisiyle birlikte deerlendiren teknik makale.",
    categorySlug: "atik-su-camuru-ve-aritma-rehberleri",
    sector: "�amur kurutma maliyeti ve kapasite planlamas1",
    sectionTitles: [
      "�amur kurutmada maliyeti belirleyen ana parametreler",
      "Ba_lang1� nemi ve hedef �1k1_ nemi nas1l okunur?",
      "Buharla_acak su miktar1 neden merkezde yer al1r?",
      "Tambur kapasitesi, kal1_ s�resi ve doluluk ili_kisi",
      "Fan, filtre ve br�l�r gibi yard1mc1 ekipmanlar1n etkisi",
      "Enerji maliyeti ve �al1_ma saati ili_kisi",
      "�n m�hendislik hesab1 hangi kararlar1 h1zland1r1r?",
      "Pro Makina ile �amur kurutma fizibilitesi",
    ],
    internalLinks: [
      { label: "�amur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "Tambur Hesaplar1", href: "/programlar/tambur-hesaplari" },
      { label: "At1k Su �amuru ve Ar1tma ��z�mleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "aritma-camuru-kurutma-tesisi-nasil-kurulur",
      "camur-kurutma-ve-koku-kontrol-sistemleri",
      "kurutma-ve-termal-proses-makinalari",
    ],
    keywords: [
      "�amur kurutma maliyeti",
      "�amur kurutma kapasite hesab1",
      "kurutma tamburu hesab1",
      "buharla_acak su miktar1",
    ],
    relatedMachines: [
      "kurutma tamburu",
      "br�l�r",
      "fan",
      "siklon",
      "jet pulse filtre",
    ],
    relatedServiceLabels: ["�amur kurutma tesisi", "Tambur hesaplar1"],
    nextSlug: "yem-ve-granul-urunlerde-tasima-sistemi-secimi",
  },
  {
    slug: "yem-ve-granul-urunlerde-tasima-sistemi-secimi",
    title: "Yem ve Gran�l �r�nlerde Ta_1ma Sistemi Se�imi",
    metaTitle:
      "Yem ve Gran�l �r�nlerde Ta_1ma Sistemi Se�imi | Konvey�r ve Elevat�r Rehberi",
    description:
      "Yem, gran�l ve d�kme kat1 �r�nlerde bant konvey�r, helezon konvey�r, koval1 elevat�r, silo ve bunker sistemleri nas1l se�ilir?",
    excerpt:
      "Yem ve gran�l �r�n hatlar1nda konvey�r, elevat�r, bunker ve silo se�iminin hangi kriterlere g�re yap1laca1n1 anlatan teknik rehber.",
    heroDescription:
      "Gran�l ve d�kme kat1 �r�nlerde �r�n k1r1lmas1, tozuma, ak1_ s�reklilii ve tart1ml1 besleme ihtiya�lar1na g�re ta_1ma sistemlerinin nas1l se�ileceini ele alan makale.",
    categorySlug: "yem-toz-ve-dokme-kati-malzeme-rehberleri",
    sector: "Yem, gran�l ve d�kme kat1 �r�n hatlar1",
    sectionTitles: [
      "Proses hatlar1nda ta_1ma ekipmanlar1n1n �nemi",
      "Bant konvey�r sistemleri",
      "Helezon konvey�r sistemleri",
      "Koval1 elevat�rler",
      "Zincirli konvey�rler",
      "Silo, bunker ve ara stok sistemleri",
      "Tart1ml1 besleme ve re�ete kontrol�",
      "Toz s1zd1rmazl1k ve esnek balant1lar",
      "Pro Makina ile ta_1ma ve dozajlama ��z�mleri",
    ],
    internalLinks: [
      { label: "Ta_1ma Ekipmanlar1", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Konvey�r Hesaplar1", href: "/programlar/konveyor-kapasite-hesabi" },
      { label: "0leti_im", href: "/iletisim" },
      { label: "Yem, Toz ve D�kme Kat1 Malzeme 0_leme Sistemleri", href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri" },
    ],
    relatedSlugs: [
      "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi",
      "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi",
      "tasima-dozajlama-ve-depolama-ekipmanlari",
    ],
    keywords: [
      "konvey�r sistemleri",
      "yem ta_1ma sistemi",
      "koval1 elevat�r",
      "helezon konvey�r se�imi",
    ],
    relatedMachines: [
      "bant konvey�r",
      "helezon konvey�r",
      "koval1 elevat�r",
      "silo",
      "bunker",
      "rotary valf",
    ],
    relatedServiceLabels: ["Ta_1ma ekipmanlar1", "Konvey�r hesaplar1"],
    nextSlug: "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi",
  },
  {
    slug: "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi",
    title: "Premiks ve Toz Kar1_1m Hatlar1nda Ekipman Se�imi",
    metaTitle:
      "Premiks ve Toz Kar1_1m Hatlar1nda Ekipman Se�imi | Mikser, Dozaj ve Filtre Sistemleri",
    description:
      "Premiks, toz kar1_1m ve katk1 �retim hatlar1nda mikser, dozajlama, ta_1ma, silo, filtre ve paketleme sistemlerini inceleyin.",
    excerpt:
      "Premiks ve toz kar1_1m hatlar1nda mikser, dozajlama, filtre ve paketleme sistemlerinin nas1l se�ildiini anlatan teknik i�erik.",
    heroDescription:
      "Toz ve katk1 hatlar1nda re�ete doruluu, homojenlik, toz kontrol� ve paketleme haz1rl11n1n ekipman se�imine nas1l y�n verdiini a�1klayan rehber.",
    categorySlug: "yem-toz-ve-dokme-kati-malzeme-rehberleri",
    sector: "Premiks ve toz kar1_1m hatlar1",
    sectionTitles: [
      "Premiks hatlar1nda proses mant11",
      "Makro ve mikro dozajlama sistemleri",
      "Mikser ve homojenlik kriterleri",
      "Helezon, konvey�r ve bunker besleme",
      "Filtre ve aspirasyon neden gereklidir?",
      "Torbalama ve son �r�n haz1rlama",
      "Re�ete doruluu ve otomasyon seviyesi",
      "Pro Makina ile toz �r�n hatlar1",
    ],
    internalLinks: [
      { label: "Ta_1ma Ekipmanlar1", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Yem, Toz ve D�kme Kat1 Malzeme 0_leme Sistemleri", href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "yem-ve-granul-urunlerde-tasima-sistemi-secimi",
      "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi",
      "tasima-dozajlama-ve-depolama-ekipmanlari",
    ],
    keywords: [
      "premiks �retim hatt1",
      "toz kar1_1m hatt1 ekipmanlar1",
      "mikser ve dozaj sistemi",
      "filtre ve paketleme hatt1",
    ],
    relatedMachines: [
      "mikser",
      "dozaj bunkeri",
      "helezon besleyici",
      "jet pulse filtre",
      "torbalama sistemi",
    ],
    relatedServiceLabels: ["Toz �r�n i_leme sistemleri", "Ta_1ma ve paketleme ekipmanlar1"],
    nextSlug: "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi",
  },
  {
    slug: "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi",
    title: "D�kme Kat1 Malzeme 0_lemede Bunker, Silo ve Helezon Se�imi",
    metaTitle: "D�kme Kat1 Malzeme 0_lemede Bunker, Silo ve Helezon Se�imi",
    description:
      "D�kme kat1 malzemelerin depolama, dozajlama ve transferinde bunker, silo, helezon, rotary valf ve konvey�r sistemleri nas1l se�ilir?",
    excerpt:
      "D�kme kat1 malzeme hatlar1nda bunker, silo, helezon ve rotary valf se�imini ak1_kanl1k ve dozaj hassasiyeti �zerinden anlatan teknik rehber.",
    heroDescription:
      "D�kme kat1 malzemelerde depolama, kontroll� besleme ve kapal1 transfer i�in bunker, silo ve helezon sistemlerinin nas1l se�ileceini a�1klayan blog sayfas1.",
    categorySlug: "yem-toz-ve-dokme-kati-malzeme-rehberleri",
    sector: "D�kme kat1 malzeme depolama ve dozajlama sistemleri",
    sectionTitles: [
      "D�kme kat1 malzeme ak1_1nda temel riskler",
      "Bunker geometri ve bo_altma davran1_1",
      "Silo tasar1m1nda kapasite ve ak1_kanl1k ili_kisi",
      "Helezon ve rotary valf g�rev payla_1m1",
      "K�pr�le_me, ak1_ t�neli ve vibrasyon ��z�mleri",
      "Toz s1zd1rmazl1k ve kapal1 transfer",
      "Tart1ml1 dozajlama ve re�ete kontrol�",
      "Pro Makina ile bunker ve silo omurgas1",
    ],
    internalLinks: [
      { label: "Ta_1ma Ekipmanlar1", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Konvey�r Hesaplar1", href: "/programlar/konveyor-kapasite-hesabi" },
      { label: "Yem, Toz ve D�kme Kat1 Malzeme 0_leme Sistemleri", href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedSlugs: [
      "yem-ve-granul-urunlerde-tasima-sistemi-secimi",
      "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi",
      "tasima-dozajlama-ve-depolama-ekipmanlari",
    ],
    keywords: [
      "bunker silo helezon se�imi",
      "d�kme kat1 malzeme i_leme",
      "rotary valf",
      "dozajlama sistemleri",
    ],
    relatedMachines: [
      "bunker",
      "silo",
      "helezon",
      "rotary valf",
      "tart1ml1 helezon",
      "konvey�r",
    ],
    relatedServiceLabels: ["D�kme kat1 malzeme sistemleri", "Ta_1ma ve dozajlama ��z�mleri"],
  },
];

const articleCardMap = Object.fromEntries(
  articleSpecs.map((spec) => [
    spec.slug,
    card(spec.title, spec.excerpt, `/kutuphane/blog/${spec.slug}`, {
      category: spec.categorySlug,
      sector: spec.sector,
    }),
  ]),
) as Record<string, TopicalBlogCard>;

function articleLinkMap(spec: ArticleSpec) {
  return spec.internalLinks;
}

export const sectorTechnicalBlogArticles: TopicalArticle[] = articleSpecs.map((spec) => {
  const relatedContents = spec.relatedSlugs
    .map((slug) => articleCardMap[slug])
    .filter(Boolean)
    .slice(0, 3);

  const relatedServices = buildRelatedServiceCards(spec);
  const nextContent = spec.nextSlug ? articleCardMap[spec.nextSlug] : relatedContents[0];

  return {
    slug: spec.slug,
    title: spec.title,
    metaTitle: spec.metaTitle,
    description: spec.description,
    heroDescription: spec.heroDescription,
    categorySlug: spec.categorySlug,
    excerpt: spec.excerpt,
    readingTime: DEFAULT_READING_TIME,
    sector: spec.sector,
    keywords: spec.keywords,
    relatedMachines: spec.relatedMachines,
    relatedServiceLabels: spec.relatedServiceLabels,
    sections: buildSections(spec),
    summaryRows: buildSummaryRows(spec),
    faqs: buildFaqs(spec),
    internalLinks: articleLinkMap(spec),
    relatedContents,
    relatedServices,
    nextContent,
    ctaText: COMMON_CTA_TEXT,
    ctaVariant: "sector-guide",
  };
});

const categoryMeta = [
  {
    slug: "gubre-uretim-rehberleri",
    title: "G�bre �retim Rehberleri",
    description:
      "Gran�l g�bre, organomineral g�bre ve s1v1 g�bre tesislerinde proses ak1_1, makine se�imi, dozajlama, gran�lasyon, kurutma ve paketleme odakl1 teknik blog kategorisi.",
    introParagraphs: [
      "G�bre �retim rehberleri; gran�l, organomineral ve s1v1 g�bre hatlar1nda doru proses ak1_1n1 ve makine se�imini tek �at1 alt1nda toplar. Kapasite, hammadde davran1_1, nem kontrol� ve paketleme standard1 bu i�eriklerde birlikte ele al1n1r.",
      "Bu kategori, yat1r1m karar1 veren ekiplerin yaln1z tekil makine deil, b�t�n hat mant11n1 okuyabilmesi i�in haz1rlanm1_t1r. Dozajlama, gran�lasyon, kurutma, soutma, eleme ve dolum gibi halkalar birbiriyle ili_kili bi�imde anlat1l1r.",
    ],
    slugs: [
      "granul-gubre-uretim-tesisi-nasil-kurulur",
      "organomineral-gubre-tesisi-makine-secimi",
      "sivi-gubre-uretiminde-kullanilan-tank-sistemleri",
    ],
  },
  {
    slug: "kompost-ve-organik-atik-rehberleri",
    title: "Kompost ve Organik At1k Rehberleri",
    description:
      "Kompost tesisi kurulumu, organik at1k i_leme, trommel elek, kompost tamburu, olgunla_t1rma, kurutma ve koku kontrol sistemleri �zerine teknik rehber kategorisi.",
    introParagraphs: [
      "Kompost ve organik at1k rehberleri; organik at11n nas1l kabul edildiini, nas1l par�aland11n1, nas1l olgunla_t1r1ld11n1 ve ticari �r�ne nas1l d�n�_t�r�ld��n� teknik bir �er�evede a�1klar.",
      "Bu kategori �zellikle belediye, tar1msal ve end�striyel organik at1k projelerinde proses ak1_1, �evresel kontrol ve son �r�n standard1 kararlar1n1 kolayla_t1rmak i�in tasarlanm1_t1r.",
    ],
    slugs: [
      "kompost-tesisi-kurulumu-makine-proses-secimi",
      "evsel-organik-atik-isleme-tesisi-nasil-planlanir",
      "trommel-elek-ve-kompost-tamburu-secim-kriterleri",
    ],
  },
  {
    slug: "biyogaz-ve-enerji-rehberleri",
    title: "Biyogaz ve Enerji Rehberleri",
    description:
      "Biyogaz tesislerinde �n i_lem, besleme, par�alama, digestat y�netimi, kurutma ve kompost entegrasyonu �zerine teknik blog kategorisi.",
    introParagraphs: [
      "Biyogaz ve enerji rehberleri; reakt�r �ncesi besleme kalitesinin, �n i_lem d�zeninin ve digestat sonras1 deerlendirmenin tesis verimine nas1l etki ettiini anlat1r.",
      "Bu i�erikler, biyogaz projelerinde mekanik omurga ile organik ak1_ y�netiminin birlikte tasarlanmas1 gerektiini vurgular.",
    ],
    slugs: [
      "biyogaz-tesislerinde-on-islem-ve-besleme-sistemleri",
      "digestat-kurutma-ve-kompostlastirma-sistemi",
      "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
    ],
  },
  {
    slug: "maden-ve-mineral-isleme-rehberleri",
    title: "Maden ve Mineral 0_leme Rehberleri",
    description:
      "Silis kumu, kuvars ve farkl1 mineral ak1_lar1nda k1rma, kurutma, eleme, s1n1fland1rma, konvey�r ve toz kontrol sistemlerini anlatan teknik blog kategorisi.",
    introParagraphs: [
      "Maden ve mineral i_leme rehberleri; a_1nd1r1c1 ve tozlu ak1_larda kullan1lan k1r1c1, elek, kurutma tamburu ve ta_1ma sistemlerini proses mant11 i�inde ele al1r.",
      "Bu kategori sayesinde �r�n tane boyutu, nem ve toz y�k� gibi parametrelerin ekipman se�imine nas1l y�n verdii daha net okunabilir.",
    ],
    slugs: [
      "silis-kumu-kurutma-tesisi-nasil-tasarlanir",
      "maden-kurutma-ve-eleme-tesisi-secim-kriterleri",
      "kirici-trommel-elek-ve-konveyor-kombinasyonu",
    ],
  },
  {
    slug: "kimya-ve-proses-rehberleri",
    title: "Kimya ve Proses Rehberleri",
    description:
      "Reakt�r, kar1_t1r1c1l1 tank, filtrasyon, dozajlama, pompa ve kimyasal proses g�venlii odakl1 teknik blog kategorisi.",
    introParagraphs: [
      "Kimya ve proses rehberleri; reakt�r ve tank se�iminin yaln1z hacim hesab1 deil, g�venlik, malzeme uyumu, proses kontrol� ve filtrasyon disipliniyle birlikte okunmas1 gerektiini anlat1r.",
      "Kategori, hem s1v1 g�bre hem de genel kimyasal proses hatlar1nda ortak olan ekipman kararlar1n1 sade ama teknik bir dille a�1klar.",
    ],
    slugs: [
      "reaktor-ve-karistiricili-tank-secimi",
      "sivi-kimyasal-hazirlama-tanki-proses-akisi",
      "asit-ve-ozel-cozelti-sistemleri",
    ],
  },
  {
    slug: "geri-donusum-ve-atik-yonetimi-rehberleri",
    title: "Geri D�n�_�m ve At1k Y�netimi Rehberleri",
    description:
      "Evsel at1k ayr1_t1rma, RDF/SRF haz1rlama, k1r1c1, shredder, trommel elek ve geri kazan1m hatlar1n1 a�1klayan teknik rehber kategorisi.",
    introParagraphs: [
      "Geri d�n�_�m ve at1k y�netimi rehberleri; heterojen at1k ak1_lar1nda ay1rma, par�alama, eleme ve ta_1ma ekipmanlar1n1n nas1l bir araya geldiini g�sterir.",
      "Bu kategori �zellikle geri kazan1m verimi, operasyon g�venlii ve hat esneklii a�1s1ndan �nemli karar noktalar1n1 teknik bi�imde �zetler.",
    ],
    slugs: [
      "evsel-atik-ayristirma-tesisi-ekipman-secimi",
      "rdf-srf-hazirlama-tesislerinde-proses-akisi",
      "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
    ],
  },
  {
    slug: "atik-su-camuru-ve-aritma-rehberleri",
    title: "At1k Su �amuru ve Ar1tma Rehberleri",
    description:
      "Ar1tma �amuru kurutma, koku kontrol�, stabilizasyon, enerji ihtiyac1 ve tambur kapasite yakla_1m1 �zerine teknik blog kategorisi.",
    introParagraphs: [
      "At1k su �amuru ve ar1tma rehberleri, y�ksek nemli �amur ak1_lar1nda kurutma, gaz kontrol�, stabilizasyon ve �r�n haz1rlama kararlar1n1 bir araya getirir.",
      "Bu kategori �zellikle �evresel kontrol ile termal proses tasar1m1n1n ayn1 dosyada ��z�lmesi gereken projeler i�in haz1rlanm1_t1r.",
    ],
    slugs: [
      "aritma-camuru-kurutma-tesisi-nasil-kurulur",
      "camur-kurutma-ve-koku-kontrol-sistemleri",
      "camur-kurutma-maliyeti-ve-kapasite-hesabi",
    ],
  },
  {
    slug: "yem-toz-ve-dokme-kati-malzeme-rehberleri",
    title: "Yem, Toz ve D�kme Kat1 Malzeme Rehberleri",
    description:
      "Yem, premiks, gran�l ve d�kme kat1 �r�nlerde bunker, silo, helezon, konvey�r, dozaj ve filtre se�imlerini anlatan teknik blog kategorisi.",
    introParagraphs: [
      "Yem, toz ve d�kme kat1 malzeme rehberleri; ak1_kanl1k, k�pr�le_me, tozuma ve re�ete hassasiyeti gibi parametrelerin ta_1ma ve depolama sistemleri �zerindeki etkisini a�1klar.",
      "Kategori �zellikle bunker, silo, helezon, konvey�r ve mikser gibi ekipmanlar1n ayn1 hatta nas1l dengelenmesi gerektiini anlat1r.",
    ],
    slugs: [
      "yem-ve-granul-urunlerde-tasima-sistemi-secimi",
      "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi",
      "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi",
    ],
  },
  {
    slug: "makine-ve-ekipman-secim-rehberleri",
    title: "Makine ve Ekipman Se�im Rehberleri",
    description:
      "Sekt�rel makine zincirlerini, proses ak1_lar1n1 ve farkl1 end�strilerde ekipman se�iminin nas1l dei_tiini anlatan kategori sayfas1.",
    introParagraphs: [
      "Makine ve ekipman se�im rehberleri, belirli bir proses yerine farkl1 sekt�rlerde kullan1lan ekipman ailelerini kar_1la_t1rmal1 bi�imde anlat1r. Ayn1 tambur, konvey�r veya reakt�r ailesinin farkl1 sekt�rlerde neden farkl1 tasarland11 bu b�l�mde g�r�lebilir.",
      "Bu kategori �zellikle yat1r1m karar1n1n ba_1nda olan ve sekt�rel perspektifle makine park1n1 anlamak isteyen ziyaret�iler i�in g��l� bir giri_ noktas1d1r.",
    ],
    slugs: [],
  },
  {
    slug: "tambur-hesaplari-ve-proses-hesaplari",
    title: "Tambur Hesaplar1 ve Proses Hesaplar1",
    description:
      "Tambur kapasitesi, �ap-boy, devir, eim, fan, siklon, br�l�r ve konvey�r hesaplar1 gibi �n m�hendislik ara�lar1yla ili_kili i�erikleri toplayan kategori sayfas1.",
    introParagraphs: [
      "Tambur hesaplar1 ve proses hesaplar1 kategorisi, kapasite ve ekipman se�imi kararlar1n1 say1sal temele oturtmak isteyen kullan1c1lar i�in haz1rlanm1_t1r. Bu b�l�mde teknik bloglar ile hesap programlar1 birbirini tamamlayacak _ekilde birlikte sunulur.",
      "�n m�hendislik a_amas1nda yap1lan bu deerlendirmeler, nihai imalat �izimi yerine fizibilite, tekliflendirme ve ilk tasar1m kararlar1n1 desteklemek amac1yla kullan1l1r.",
    ],
    slugs: [],
  },
];

function resolveCategoryContents(slugs: string[]) {
  return slugs.map((slug) => articleCardMap[slug]).filter(Boolean);
}

export const sectorTechnicalBlogCategories: TopicalCategory[] = categoryMeta.map((category) => {
  const extraContents =
    category.slug === "makine-ve-ekipman-secim-rehberleri"
      ? sectorMachineGuideCards.slice(0, 6)
      : category.slug === "tambur-hesaplari-ve-proses-hesaplari"
        ? [
            card(
              "Tambur Hesaplar1",
              "Kurutma, soutma, gran�lasyon, kaplama ve �zel tamburlar i�in �n m�hendislik hesab1 yap1n.",
              "/programlar/tambur-hesaplari",
              { eyebrow: "Proses Hesab1", readingTime: "Ara�" },
            ),
            card(
              "Kurutma ve Termal Proses Makinalar1",
              "Kurutma tamburu, fan, filtre ve br�l�r omurgas1n1 teknik olarak inceleyin.",
              "/kutuphane/blog/kurutma-ve-termal-proses-makinalari",
              { category: "sektorel-makine-rehberleri", sector: "Termal prosesler" },
            ),
            card(
              "Ta_1ma, Dozajlama ve Depolama Ekipmanlar1",
              "Konvey�r ve bunker se�im kararlar1n1n proses hesab1na nas1l baland11n1 g�r�n.",
              "/kutuphane/blog/tasima-dozajlama-ve-depolama-ekipmanlari",
              { category: "sektorel-makine-rehberleri", sector: "Ta_1ma sistemleri" },
            ),
            card(
              "�amur Kurutma Maliyeti ve Kapasite Hesab1",
              "Nem d�_�rme, buharla_acak su ve enerji ihtiyac1n1 yorumlayan blog i�erii.",
              "/kutuphane/blog/camur-kurutma-maliyeti-ve-kapasite-hesabi",
              { category: "atik-su-camuru-ve-aritma-rehberleri", sector: "�amur kurutma" },
            ),
          ]
        : [];

  return {
    slug: category.slug,
    title: category.title,
    description: category.description,
    introParagraphs: category.introParagraphs,
    relatedContents: [...resolveCategoryContents(category.slugs), ...extraContents].slice(0, 8),
    ctaText: COMMON_CTA_TEXT,
    ctaVariant: "sector-guide" as const,
  };
});

export const sectorTechnicalCategoryCards: TopicalBlogCard[] = sectorTechnicalBlogCategories.map(
  (category) =>
    card(
      category.title,
      category.description,
      `/kutuphane/blog/${category.slug}`,
      {
        eyebrow: "Blog Kategorisi",
        readingTime: `${category.relatedContents.length} i�erik`,
        category: category.slug,
      },
    ),
);

const sectorGroups: SectorGroup[] = [
  {
    id: "fertilizer",
    title: "G�bre �retim Tesisleri 0�in Teknik 0�erikler",
    description:
      "Gran�l g�bre, organomineral g�bre ve s1v1 g�bre �retim hatlar1nda proses ak1_1, makine se�imi, gran�lasyon, kurutma ve tank sistemleri �zerine teknik blog i�erikleri.",
    slugs: [
      "granul-gubre-uretim-tesisi-nasil-kurulur",
      "organomineral-gubre-tesisi-makine-secimi",
      "sivi-gubre-uretiminde-kullanilan-tank-sistemleri",
    ],
  },
  {
    id: "compost",
    title: "Kompost ve Organik At1k Tesisleri 0�in Teknik 0�erikler",
    description:
      "Kompostla_t1rma, organik at1k i_leme, trommel elek, kompost tamburu, koku kontrol� ve nihai �r�n haz1rlama ba_l1klar1n1 kapsayan teknik rehberler.",
    slugs: [
      "kompost-tesisi-kurulumu-makine-proses-secimi",
      "evsel-organik-atik-isleme-tesisi-nasil-planlanir",
      "trommel-elek-ve-kompost-tamburu-secim-kriterleri",
    ],
  },
  {
    id: "biogas",
    title: "Biyogaz ve Enerji Tesisleri 0�in Teknik 0�erikler",
    description:
      "Biyogaz �n i_lem, besleme, digestat kurutma ve hayvansal at1k kaynakl1 enerji projeleri i�in haz1rlanan teknik blog i�erikleri.",
    slugs: [
      "biyogaz-tesislerinde-on-islem-ve-besleme-sistemleri",
      "digestat-kurutma-ve-kompostlastirma-sistemi",
      "hayvansal-atiklardan-biyogaz-tesisi-kurulumu",
    ],
  },
  {
    id: "mining",
    title: "Maden ve Mineral 0_leme 0�in Teknik 0�erikler",
    description:
      "Silis kumu kurutma, maden eleme, k1r1c1-elek-konvey�r kombinasyonlar1 ve mineral i_leme ekipmanlar1n1 anlatan SEO odakl1 rehberler.",
    slugs: [
      "silis-kumu-kurutma-tesisi-nasil-tasarlanir",
      "maden-kurutma-ve-eleme-tesisi-secim-kriterleri",
      "kirici-trommel-elek-ve-konveyor-kombinasyonu",
    ],
  },
  {
    id: "chemical",
    title: "Kimya ve Proses End�strisi 0�in Teknik 0�erikler",
    description:
      "Reakt�r, tank, filtrasyon, s1v1 kimyasal haz1rlama ve �zel ��zelti sistemleri i�in teknik blog ve rehber i�erikleri.",
    slugs: [
      "reaktor-ve-karistiricili-tank-secimi",
      "sivi-kimyasal-hazirlama-tanki-proses-akisi",
      "asit-ve-ozel-cozelti-sistemleri",
    ],
  },
  {
    id: "recycling",
    title: "Geri D�n�_�m ve At1k Y�netimi 0�in Teknik 0�erikler",
    description:
      "Ayr1_t1rma, RDF/SRF haz1rlama, k1r1c1, shredder, trommel elek ve ta_1ma hatlar1na odaklanan geri d�n�_�m rehberleri.",
    slugs: [
      "evsel-atik-ayristirma-tesisi-ekipman-secimi",
      "rdf-srf-hazirlama-tesislerinde-proses-akisi",
      "geri-donusum-hatlarinda-kirici-ve-eleme-sistemleri",
    ],
  },
  {
    id: "sludge",
    title: "At1k Su �amuru ve Ar1tma ��z�mleri 0�in Teknik 0�erikler",
    description:
      "�amur kurutma, stabilizasyon, koku kontrol�, enerji y�k� ve tambur kapasite yakla_1m1 �zerine teknik i�erikler.",
    slugs: [
      "aritma-camuru-kurutma-tesisi-nasil-kurulur",
      "camur-kurutma-ve-koku-kontrol-sistemleri",
      "camur-kurutma-maliyeti-ve-kapasite-hesabi",
    ],
  },
  {
    id: "bulk-solid",
    title: "Yem, Toz ve D�kme Kat1 Malzeme 0�in Teknik 0�erikler",
    description:
      "Konvey�r sistemleri, bunker, silo, helezon, premiks ve toz �r�n i_leme hatlar1 i�in teknik rehber i�erikleri.",
    slugs: [
      "yem-ve-granul-urunlerde-tasima-sistemi-secimi",
      "premiks-ve-toz-karisim-hatlarinda-ekipman-secimi",
      "dokme-kati-malzeme-islemede-bunker-silo-ve-helezon-secimi",
    ],
  },
];

export const sectorTechnicalBlogGroups = sectorGroups.map((group) => ({
  id: group.id,
  title: group.title,
  description: group.description,
  items: group.slugs
    .map((slug) => {
      const article = sectorTechnicalBlogArticles.find((entry) => entry.slug === slug);

      if (!article) {
        return null;
      }

      return {
        title: article.title,
        description: article.excerpt ?? article.description,
        href: `/kutuphane/blog/${article.slug}`,
        category: sectorTechnicalBlogCategories.find(
          (category) => category.slug === article.categorySlug,
        )?.title,
        readingTime: article.readingTime ?? DEFAULT_READING_TIME,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null),
}));

