import type {
  TopicalArticle,
  TopicalBlogCard,
  TopicalCategory,
  TopicalFaq,
  TopicalSection,
  TopicalSummaryRow,
} from "./topical-authority-blog-data";

const CATEGORY_SLUG = "sektorel-makine-rehberleri";
const CATEGORY_LABEL = "Sekt�rel Makine Rehberi";
const DEFAULT_READING_TIME = "6-8 dk";
const COMMON_CTA_TEXT =
  "Kapasite, hammadde yap1s1, nem, tane boyutu, otomasyon seviyesi ve saha k1s1tlar1n1z1 payla_1n; projeniz i�in doru makine ve ekipman kurgusunu birlikte netle_tirelim.";

function card(title: string, description: string, href: string): TopicalBlogCard {
  return {
    title,
    description,
    href,
    eyebrow: CATEGORY_LABEL,
    readingTime: DEFAULT_READING_TIME,
  };
}

function section(
  title: string,
  paragraphs: string[],
  subsections?: { heading: string; paragraphs: string[] }[],
): TopicalSection {
  return { title, paragraphs, subsections };
}

function faq(question: string, answer: string): TopicalFaq {
  return { question, answer };
}

function row(
  criterion: string,
  description: string,
  importance: string,
): TopicalSummaryRow {
  return { criterion, description, importance };
}

function article(
  data: Omit<TopicalArticle, "categorySlug" | "ctaVariant">,
): TopicalArticle {
  return {
    ...data,
    categorySlug: CATEGORY_SLUG,
    ctaVariant: "sector-guide",
  };
}

const machineGuideCards = {
  mining: card(
    "Maden ve Mineral 0_leme Makinalar1",
    "K1rma, eleme, kurutma, ta_1ma ve toz kontrol ekipmanlar1n1 ayn1 proses ak1_1 i�inde deerlendiren teknik rehber. Mineral i_leme tesislerinde ekipman se�iminin kapasite, a_1nma ve �r�n kalitesine etkisini �zetler.",
    "/kutuphane/blog/maden-ve-mineral-isleme-makinalari",
  ),
  liquidFertilizer: card(
    "S1v1 G�bre �retim Makinalar1",
    "Reakt�r, tank, filtre, pompa ve dolum sistemlerinin s1v1 g�bre �retim hatt1ndaki g�revlerini a�1klayan rehber. ��z�nd�rme, homojenizasyon ve dolum doruluu a�1s1ndan kritik ekipmanlar1 teknik olarak ele al1r.",
    "/kutuphane/blog/sivi-gubre-uretim-makinalari",
  ),
  granularFertilizer: card(
    "Gran�l ve Organomineral G�bre Makinalar1",
    "Gran�lasyon, kurutma, soutma, eleme ve paketleme ekipmanlar1n1 proses ak1_1 i�inde anlatan sekt�r rehberi. Organomineral ve gran�l g�bre tesislerinde makine zincirinin nas1l kurulaca1n1 teknik a�1dan a�1klar.",
    "/kutuphane/blog/granul-ve-organomineral-gubre-makinalari",
  ),
  compost: card(
    "Kompost ve Organik At1k Makinalar1",
    "Organik at1k, digestat ve �amur ak1_lar1 i�in par�alay1c1, tambur, elek ve koku kontrol sistemlerini inceleyen teknik makale. Kompost ve organik at1k tesislerinde proses hatt1n1n nas1l planlanaca1n1 ad1m ad1m �zetler.",
    "/kutuphane/blog/kompost-ve-organik-atik-makinalari",
  ),
  thermal: card(
    "Kurutma ve Termal Proses Makinalar1",
    "Kurutma tamburu, br�l�r, fan, siklon ve filtre omurgas1n1 termal proses mant11yla a�1klayan rehber. Nem d�_�rme, s1cak gaz y�netimi ve toz kontrol� aras1ndaki teknik ili_kiyi sade _ekilde anlat1r.",
    "/kutuphane/blog/kurutma-ve-termal-proses-makinalari",
  ),
  conveying: card(
    "Ta_1ma, Dozajlama ve Depolama Ekipmanlar1",
    "Konvey�r, elevat�r, bunker ve tart1ml1 besleme ekipmanlar1n1n proses hatlar1ndaki g�revini a�1klayan rehber. Ak1_ s�reklilii, dozaj hassasiyeti ve stok y�netimi a�1s1ndan kritik se�im kriterlerini toplar.",
    "/kutuphane/blog/tasima-dozajlama-ve-depolama-ekipmanlari",
  ),
  sludge: card(
    "At1k Su �amuru ve Ar1tma Makinalar1",
    "Ar1tma �amuru ve y�ksek nemli ak1_larda besleme, kar1_t1rma, kurutma ve gaz kontrol ekipmanlar1n1 anlatan teknik rehber. Stabilizasyon, koku y�netimi ve son �r�n haz1rlama a�1s1ndan doru ekipman omurgas1n1 a�1klar.",
    "/kutuphane/blog/atik-su-camuru-ve-aritma-makinalari",
  ),
  biogas: card(
    "Biyogaz �n 0_lem ve Digestat Makinalar1",
    "Biyogaz tesisleri i�in at1k kabul, par�alama, kar1_t1rma, besleme ve digestat deerlendirme ekipmanlar1n1 a�1klayan sekt�r rehberi. �n i_lem hatt1n1n gaz verimi, pompalanabilirlik ve proses g�venlii �zerindeki etkisini �zetler.",
    "/kutuphane/blog/biyogaz-on-islem-ve-digestat-makinalari",
  ),
  chemical: card(
    "Kimya ve Proses End�strisi Ekipmanlar1",
    "Reakt�r, tank, filtre, e_anj�r ve otomasyon bile_enlerini proses g�venlii oda1nda anlatan rehber. Kimyasal �retim hatlar1nda malzeme se�imi, kar1_t1rma ve kontrol mant11n1 teknik a�1dan ele al1r.",
    "/kutuphane/blog/kimya-ve-proses-endustrisi-ekipmanlari",
  ),
  packaging: card(
    "Paketleme, Dolum ve Son �r�n Haz1rlama Sistemleri",
    "Torbalama, big bag, s1v1 dolum, etiketleme ve son kalite kontrol ekipmanlar1n1 a�1klayan teknik rehber. Son �r�n haz1rlama hatt1nda tart1m hassasiyeti ve operat�r g�venliinin neden kritik olduunu anlat1r.",
    "/kutuphane/blog/paketleme-dolum-ve-son-urun-hazirlama-sistemleri",
  ),
};

export const sectorMachineGuideCards: TopicalBlogCard[] = [
  machineGuideCards.mining,
  machineGuideCards.liquidFertilizer,
  machineGuideCards.granularFertilizer,
  machineGuideCards.compost,
  machineGuideCards.thermal,
  machineGuideCards.conveying,
  machineGuideCards.sludge,
  machineGuideCards.biogas,
  machineGuideCards.chemical,
  machineGuideCards.packaging,
];

export const sectorMachineGuideCategories: TopicalCategory[] = [
  {
    slug: CATEGORY_SLUG,
    title: "Sekt�rel Makine Rehberleri",
    description:
      "Farkl1 end�strilerde kullan1lan makine ve ekipman gruplar1n1 proses ak1_1, kapasite, malzeme davran1_1 ve saha uygulamas1 a�1s1ndan anlatan teknik blog kategorisi.",
    introParagraphs: [
      "Sekt�rel Makine Rehberleri kategorisi; ayn1 makine ailesinin farkl1 sekt�rlerde neden farkl1 tasar1m kriterleriyle se�ildiini g�r�n�r hale getirmek i�in haz1rland1. Bir kurutma tamburu, reakt�r veya ta_1ma hatt1 yaln1zca mekanik ekipman olarak deil; prosesin kapasite, nem, s1cakl1k, toz ve otomasyon beklentileriyle birlikte deerlendirilmelidir.",
      "Bu kategoride yer alan makaleler, maden i_leme, g�bre �retimi, kompost, biyogaz, kimya ve paketleme gibi farkl1 sekt�rlerin ihtiya�lar1n1 ayr1 ayr1 anlat1r. B�ylece yat1r1mc1lar, i_letmeciler ve teknik ekipler kendi proseslerine uygun ekipman zincirini daha doru okuyabilir.",
    ],
    relatedContents: sectorMachineGuideCards,
    ctaText:
      "Sekt�r�n�ze �zel makine ve ekipman omurgas1n1 birlikte deerlendirmek i�in Pro Makina ile teknik g�r�_me planlayabilirsiniz.",
    ctaVariant: "sector-guide",
  },
];

const baseSectorMachineGuideArticles: TopicalArticle[] = [
  article({
    slug: "maden-ve-mineral-isleme-makinalari",
    title: "Maden ve Mineral 0_leme Makinalar1",
    metaTitle:
      "Maden ve Mineral 0_leme Makinalar1 | Proses Ekipmanlar1 ve Tesis ��z�mleri",
    description:
      "Maden, mineral, silis kumu, kuvars ve benzeri d�kme kat1 malzemelerin k1rma, eleme, kurutma, ta_1ma ve s1n1fland1rma proseslerinde kullan1lan makinalar1 teknik a�1dan inceleyin.",
    heroDescription:
      "Maden ve mineral i_leme tesislerinde kullan1lan makine gruplar1n1, hat ak1_1n1 ve proses kararlar1n1 m�hendislik bak1_1yla anlatan kapsaml1 sekt�r rehberi.",
    sections: [
      section(
        "Maden ve mineral i_leme tesislerinde makine se�imi neden �nemlidir?",
        [
          "Maden ve mineral i_leme tesislerinde doru makine se�imi yaln1zca anl1k kapasiteyi deil, �r�n standard1n1, bak1m maliyetini ve hat s�rekliliini de belirler. Ayn1 tonaj i�in se�ilen iki farkl1 ekipman kombinasyonu; tane boyutu da1l1m1, ince malzeme kayb1, enerji t�ketimi ve operat�r m�dahalesi a�1s1ndan tamamen farkl1 sonu�lar verebilir.",
          "�zellikle silis kumu, kuvars, bentonit, kil ve benzeri mineral ak1_larda a_1nd1r1c1l1k, nem, tane boyutu ve toz y�k� birlikte okunmal1d1r. Bu nedenle maden tesisi ekipmanlar1 tek tek deil; k1rma, eleme, kurutma, ta_1ma ve toz toplama zinciri olarak deerlendirilmelidir.",
        ],
      ),
      section(
        "K1rma ve boyut k���ltme ekipmanlar1",
        [
          "K1rma ekipmanlar1, besleme malzemesinin sonraki eleme, kurutma veya s1n1fland1rma kademelerine uygun boyuta getirilmesini salar. 0lk k1rma a_amas1nda istenen par�a boyutuna inemeyen malzeme, hatt1n ilerleyen noktalar1nda gereksiz y�k olu_turur ve enerji t�ketimini art1r1r.",
          "K1r1c1 se�imi yap1l1rken besleme boyutu, hedef �1k1_ fraksiyonu, �r�n sertlii ve a_1nd1r1c1l1k birlikte deerlendirilmelidir. Ayr1ca k1r1c1lar1n besleme bunkerleri, konvey�rler ve eleklerle uyumlu �al1_mas1 gerekir.",
        ],
        [
          {
            heading: "�eki�li k1r1c1lar",
            paragraphs: [
              "�eki�li k1r1c1lar, �zellikle k1r1lgan ve orta sertlikteki minerallerde h1zl1 boyut k���ltme salamak i�in kullan1l1r. Y�ksek rotor h1z1 sayesinde �r�n k1sa s�rede inceltilir; ancak a_1r1 ince malzeme olu_umu ve a_1nma h1z1 dikkatle izlenmelidir.",
              "Bu ekipmanlar genellikle eleme sistemleri, bant konvey�rler ve bunker besleme hatlar1yla birlikte �al1_1r. Tasar1m a_amas1nda rotor balans1, �eki� malzemesi, elek a�1kl11 ve toz toplama balant1s1 kritik �neme sahiptir.",
            ],
          },
          {
            heading: "�eneli k1r1c1lar",
            paragraphs: [
              "�eneli k1r1c1lar, iri besleme malzemelerinin primer k1rma kademesinde en yayg1n kullan1lan ekipmanlardan biridir. B�y�k bloklar1 kontroll� bi�imde k���lt�r ve hatt1n sonraki ekipmanlar1na dengeli y�k salar.",
              "�eneli k1r1c1 �n�nde bunker ve dozajl1 besleme olmas1, k1r1c1n1n darbeli y�klenmesini azalt1r. Tasar1mda �ene a�1kl11, eksantrik sistem, yatak dayan1m1 ve _ase rijitlii mutlaka dikkate al1nmal1d1r.",
            ],
          },
          {
            heading: "Dik milli k1r1c1lar",
            paragraphs: [
              "Dik milli k1r1c1lar, �zellikle k�bik �r�n formu istenen uygulamalarda ve ince k1rma kademelerinde tercih edilir. Kuvars ve mineral bazl1 �r�nlerde son �r�n geometri kontrol� a�1s1ndan �nemli avantaj salar.",
              "Bu k1r1c1lar y�ksek devirli �al1_t1klar1 i�in a_1nma par�alar1n1n se�imi ve bak1m plan1 iyi yap1lmal1d1r. Elek, siklon ve toz toplama hatt1yla birlikte d�_�n�lmesi saha performans1n1 dorudan etkiler.",
            ],
          },
          {
            heading: "Zincirli k1r1c1lar",
            paragraphs: [
              "Zincirli k1r1c1lar, topakl1 veya kolay da1labilen malzemelerin par�alanmas1nda pratik ��z�m sunar. �zellikle g�bre, mineral toz veya k1smen nemli ak1_larda topak ��zme amac1yla kullan1labilir.",
              "Zincir boyu, _aft devri, g�vde i� geometrisi ve bak1m eri_imi tasar1m1n ana noktalar1d1r. Besleme dengesizlii olu_ursa ekipman titre_imli �al1_abilir; bu y�zden �n bunker ve kontroll� besleme tavsiye edilir.",
            ],
          },
        ],
      ),
      section(
        "Eleme ve s1n1fland1rma sistemleri",
        [
          "Eleme sistemleri, k1rma veya kurutma sonras1 �r�n�n ticari fraksiyonlara ayr1lmas1n1 salar. Maden tesislerinde doru elek se�imi; nihai �r�n kalitesi, geri devir miktar1 ve paketleme �ncesi standartlar1n salanmas1 a�1s1ndan belirleyicidir.",
          "Elek tipi se�ilirken �r�n nemi, tane _ekli, ince malzeme oran1 ve t1kanma riski g�z �n�nde bulundurulmal1d1r. Ayn1 tesis i�inde d�ner elek, vibrasyonlu elek ve trommel elek farkl1 g�revler �stlenebilir.",
        ],
        [
          {
            heading: "D�ner elekler",
            paragraphs: [
              "D�ner elekler, kesintisiz malzeme ak1_1 ve orta seviye s1n1fland1rma ihtiyac1 olan hatlarda kullan1l1r. Ak1_1n sakin ilerlemesi sayesinde k1r1lgan �r�nlerde nispeten daha kontroll� bir eleme salar.",
              "G�vde �ap1, eim, d�n�_ devri ve elek g�z� a�1kl11 bir arada deerlendirilmelidir. Toz kontrol� i�in kapal1 g�vde ve aspirasyon balant1s1 tercih edilmesi fayda salar.",
            ],
          },
          {
            heading: "Vibrasyonlu elekler",
            paragraphs: [
              "Vibrasyonlu elekler, y�ksek kapasitede ve hassas fraksiyon ayr1m1 gereken maden hatlar1nda yayg1n olarak tercih edilir. Doru titre_im genlii ve frekans, elek verimi �zerinde dorudan etkilidir.",
              "Titre_imli _ase, yay sistemi, elek teli yap1s1 ve motor senkronizasyonu tasar1m1n temel noktalar1d1r. 0nce tozlu minerallerde siklon ve filtre hatt1yla birlikte planlanmas1 gerekir.",
            ],
          },
          {
            heading: "Trommel elekler",
            paragraphs: [
              "Trommel elekler, �zellikle nemli veya k1smen topakl1 ak1_larda t1kanmaya kar_1 daha toleransl1 ��z�mler sunar. Kompost ve organik at1k proseslerinde olduu kadar baz1 maden �n eleme uygulamalar1nda da kullan1l1r.",
              "Trommel �ap1, boyu, i� kald1r1c1 yap1lar1 ve elek panellerinin dei_tirilebilir olmas1 bak1m s�relerini ciddi �l��de etkiler. Besleme ve �1k1_ konvey�rleriyle ayn1 ritimde �al1_mas1 gerekir.",
            ],
          },
        ],
      ),
      section(
        "Kurutma tamburlar1 ve termal prosesler",
        [
          "Bir�ok mineral ak1_ta �r�n pazarlanabilir kaliteye ula_madan �nce neminin d�_�r�lmesi gerekir. Kurutma tamburu, s1cak hava sistemi, br�l�r, fan, siklon ve filtre birlikte �al1_arak �r�n�n hedef rutubet aral11na indirilmesini salar.",
          "Kurutma hatt1nda yaln1z tambur boyutu deil; �r�n�n giri_ nemi, hedef �1k1_ nemi, tane boyutu, tozuma eilimi ve 1s1ya dayan1m1 da �nemlidir. Maden kurutma tesislerinde doru tambur hesab1, hem yak1t t�ketimini hem de �r�n kayb1n1 azalt1r.",
        ],
      ),
      section(
        "Bant konvey�r, helezon ve elevat�r sistemleri",
        [
          "K1rma, eleme ve kurutma hatlar1n1n kararl1 �al1_abilmesi i�in malzemenin kontroll� ta_1nmas1 gerekir. Bant konvey�rler y�ksek debili yatay ta_1ma i�in, helezon konvey�rler kapal1 k1sa hatlar i�in, koval1 elevat�rler ise dikey transfer i�in kullan1l1r.",
          "Ta_1ma hatt1 se�imi yap1l1rken kapasite kadar �r�n�n a_1nd1r1c1l11, toz y�k�, s1cakl11 ve bak1m eri_imi de dikkate al1nmal1d1r. �zellikle s1cak �r�n �1kan maden tesislerinde elevat�r ve konvey�r malzemeleri proses ko_ullar1na uygun se�ilmelidir.",
        ],
      ),
      section(
        "Toz toplama, siklon ve jet pulse filtre sistemleri",
        [
          "Mineral i_leme hatlar1nda toz kontrol� yaln1zca �evresel uyum i�in deil, i_ g�venlii ve �r�n kayb1n1n azalt1lmas1 i�in de kritik bir ba_l1kt1r. K1r1c1lar, elekler, bunkerler ve kurutma tamburlar1 genellikle youn toz �reten ekipmanlard1r.",
          "Siklonlar iri partik�lleri �n ay1rma i�in kullan1l1rken, jet pulse filtre sistemleri daha ince tozun tutulmas1nda devreye girer. Fan konumu, kanal kay1plar1 ve a_1nma dayan1ml1 malzeme se�imi bu sistemlerin saha �mr�n� belirler.",
        ],
      ),
      section(
        "Maden tesislerinde doru proses ak1_1 nas1l kurulur?",
        [
          "�rnek bir mineral i_leme hatt1 �ou zaman hammadde kabul � primer k1rma � sekonder k1rma � eleme � kurutma � son s1n1fland1rma � stoklama � paketleme veya sevkiyat ak1_1yla ilerler. Ancak her malzeme i�in bu s1ra ayn1 kalmaz; baz1 hatlarda kurutma elemeden �nce, baz1lar1nda sonra konumland1r1l1r.",
          "Doru ak1_ kurgusu, geri devir miktar1n1 azalt1r ve ekipmanlar1n birbirini bomas1n1 �nler. Bu y�zden proses ak1_1 haz1rlan1rken kapasite, nem, toz, tane boyutu ve �r�n standard1 ayn1 tabloda deerlendirilmelidir.",
        ],
      ),
      section(
        "Pro Makina ile maden ve mineral i_leme tesisi tasar1m1",
        [
          "Pro Makina, maden ve mineral i_leme projelerinde makine se�imini tekil ekipman baz1nda deil, hat b�t�nl�� i�inde ele al1r. K1r1c1, elek, kurutma tamburu, ta_1ma ekipmanlar1 ve toz toplama sistemleri ayn1 kapasite mant11nda projelendirilir.",
          "Bu yakla_1m; hem yat1r1m kararlar1n1 netle_tirir hem de sahada devreye alma s�resini k1salt1r. Maden ve mineral i_leme tesisiniz i�in doru ekipman zincirini belirlemek istiyorsan1z teknik �n deerlendirme ile s�rece ba_layabiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("Kapasite", "K1rma, eleme ve kurutma kademeleri ayn1 tonaj ritminde �al1_mal1d1r.", "Hat darboazlar1n1 �nler."),
      row("A_1nd1r1c1l1k", "�eneler, rotor par�alar1, elek y�zeyleri ve konvey�r hatlar1 malzeme karakterine g�re se�ilmelidir.", "Bak1m maliyetini belirler."),
      row("Nem", "Kurutma �ncesi ve sonras1 �r�n davran1_1 farkl1 ekipman kararlar1 dourur.", "Proses ak1_ s1ras1n1 dei_tirir."),
      row("Toz Y�k�", "Siklon, filtre ve fan hatt1 maden prosesinin ayr1lmaz par�as1d1r.", "0_ g�venlii ve �evresel uyumu etkiler."),
    ],
    faqs: [
      faq("Maden i_leme tesisinde ilk hangi ekipman se�ilmelidir?", "0lk ekipman se�imi genellikle besleme boyutu ve hedef �r�n fraksiyonuna bal1d1r. Bu y�zden primer k1rma ve eleme mant11 ba_ta netle_tirilmelidir."),
      faq("Her maden hatt1nda kurutma tamburu gerekir mi?", "Hay1r. �r�n�n sat1_ veya sonraki proses i�in belirli bir nemin alt1na inmesi gerekiyorsa kurutma hatt1 devreye al1n1r."),
      faq("Vibrasyonlu elek mi trommel elek mi daha uygundur?", "Bu karar �r�n nemi, t1kanma riski, fraksiyon hassasiyeti ve kapasite ihtiyac1na g�re verilir."),
      faq("Toz toplama sistemi olmadan maden hatt1 �al1_1r m1?", "�al1_abilir; ancak �r�n kayb1, saha kirlilii, ekipman a_1nmas1 ve emisyon sorunlar1 ciddi bi�imde artar."),
      faq("Maden tesisi �n tasar1m1 i�in hangi veriler gerekir?", "Malzeme tipi, giri_ tane boyutu, hedef �1k1_ fraksiyonu, nem, kapasite ve saha yerle_imi ilk teknik deerlendirme i�in yeterli ba_lang1� verileridir."),
    ],
    internalLinks: [
      { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "K1r1c1lar ve Par�alay1c1lar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Eleme ve S1n1fland1rma Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Tambur Hesaplar1", href: "/programlar/tambur-hesaplari" },
    ],
    relatedContents: [
      machineGuideCards.thermal,
      machineGuideCards.conveying,
      machineGuideCards.packaging,
    ],
    relatedServices: [
      { title: "Maden Kurutma ve Eleme Tesisi", description: "Sekt�re �zel tesis kurgusunu inceleyin.", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { title: "Madencilik ve Mineral 0_leme", description: "Sekt�r ��z�m yakla_1m1m1z1 g�r�n.", href: "/sektorler/madencilik-ve-mineral-isleme" },
    ],
    nextContent: machineGuideCards.liquidFertilizer,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "sivi-gubre-uretim-makinalari",
    title: "S1v1 G�bre �retim Makinalar1",
    metaTitle:
      "S1v1 G�bre �retim Makinalar1 | Reakt�r, Tank, Filtre ve Dolum Sistemleri",
    description:
      "S1v1 g�bre �retiminde kullan1lan reakt�rler, kar1_t1r1c1 tanklar, filtrasyon sistemleri, homojenizat�rler, dolum makineleri ve proses ekipmanlar1n1 teknik olarak inceleyin.",
    heroDescription:
      "S1v1 g�bre �retim hatt1nda g�rev alan reakt�r, tank, filtrasyon ve dolum sistemlerini prosese uygun se�im kriterleriyle anlatan rehber.",
    sections: [
      section(
        "S1v1 g�bre �retim hatt1 nas1l �al1_1r?",
        [
          "S1v1 g�bre �retim hatlar1; re�etenin ��z�nd�r�lmesi, kimyasal dengeleme, kar1_t1rma, filtrasyon, mamul stoklama ve dolum ad1mlar1ndan olu_ur. Buradaki temel ama� yaln1zca bile_enleri ayn1 tankta toplamak deil, ��z�n�rl�� y�ksek, dengeli ve stabil bir �r�n olu_turmakt1r.",
          "Bu nedenle hat kurgusu yap1l1rken reakt�r hacmi, kar1_t1r1c1 tipi, tank ge�i_leri, filtrasyon hassasiyeti ve dolum h1zlar1 birlikte d�_�n�lmelidir. �zellikle organomineral ve youn katk1 i�eren s1v1 �r�nlerde her ekipman bir sonraki a_aman1n kalitesini dorudan etkiler.",
        ],
      ),
      section(
        "Hammadde haz1rlama ve ��z�nd�rme ekipmanlar1",
        [
          "S1v1 g�bre �retiminin ilk a_amas1nda ham maddelerin kontroll� bi�imde ��z�nd�r�lmesi gerekir. Kat1 hammaddeler, mikro besinler veya viskoz katk1lar dorudan mamul tank1na verilirse ��z�nme problemleri ve tortu olu_umu ya_anabilir.",
          "Bu nedenle �n haz1rl1k ve ��z�nd�rme ekipmanlar1, �r�n kalitesinin temelini olu_turur. Doru kar1_t1rma _iddeti ve uygun bekleme s�releri sayesinde hatt1n geri kalan1 daha kararl1 �al1_1r.",
        ],
        [
          {
            heading: "�n haz1rl1k tanklar1",
            paragraphs: [
              "�n haz1rl1k tanklar1, su veya ana ��z�c� faz i�inde hammaddenin kontroll� olarak sisteme al1nmas1n1 salar. �zellikle kademeli ekleme yap1lmas1 gereken �r�nlerde operat�r hatas1n1 azalt1r ve ��z�nme kalitesini iyile_tirir.",
              "Tank hacmi, g�nl�k re�ete �evrim say1s1 ve parti b�y�kl��ne g�re se�ilmelidir. Seviye kontrol�, y�k h�cresi ve operat�r platformu bu ekipmanlarda �nemli yard1mc1 unsurlard1r.",
            ],
          },
          {
            heading: "Kar1_t1r1c1l1 reakt�rler",
            paragraphs: [
              "Kar1_t1r1c1l1 reakt�rler, reaktif veya ��z�nmesi daha zor hammaddelerin homojen bi�imde da1lmas1n1 salar. �zellikle pH ayar1, 1s1tma veya kontroll� reaksiyon gereken s1v1 g�bre re�etelerinde ana ekipman rol� �stlenir.",
              "Kar1_t1r1c1 tipi, devir aral11, g�vde malzemesi ve gerekiyorsa ceketli yap1 tasar1mda kritik noktad1r. Tank geometrisinin kar1_t1rma verimiyle uyumlu olmas1 �r�n standard1n1 dorudan etkiler.",
            ],
          },
          {
            heading: "��z�nd�rme tanklar1",
            paragraphs: [
              "��z�nd�rme tanklar1, kat1 tuzlar1n veya katk1lar1n tamamen ��z�nmesini salamak i�in kullan1l1r. Yetersiz ��z�nd�rme, filtrasyon y�k�n� art1r1r ve dolum hatt1nda t1kanma yaratabilir.",
              "Bu y�zden ��z�nd�rme tanklar1nda kar1_t1r1c1 konumu, s1cakl1k kontrol� ve tank i�i ak1_ y�n� iyi kurgulanmal1d1r. �r�n tipine g�re paslanmaz �elik veya uygun kaplama se�imi �nemlidir.",
            ],
          },
        ],
      ),
      section(
        "Filtrasyon ve berrakla_t1rma sistemleri",
        [
          "S1v1 g�bre �retiminde filtrasyon, yaln1zca estetik berrakl1k i�in deil; pompa, vana ve dolum ekipmanlar1n1 korumak i�in de gereklidir. �zellikle mikro besinli, youn katk1l1 veya ask1da kat1 i�eren re�etelerde filtrasyon basama1 proses g�venliini belirler.",
          "Filtre se�imi yap1l1rken partik�l boyutu, debi, viskozite ve temizleme kolayl11 birlikte deerlendirilmelidir. Baz1 hatlarda tek filtre yeterliyken, baz1 projelerde �ok kademeli filtrasyon gerekir.",
        ],
        [
          {
            heading: "Torba filtre sistemleri",
            paragraphs: [
              "Torba filtreler, nispeten y�ksek debili ve orta hassasiyetteki filtrasyon ihtiya�lar1nda ekonomik ��z�m sunar. Servis kolayl11 ve filtre torbas1n1n h1zl1 dei_tirilebilmesi bak1m avantaj1 salar.",
              "Ancak s�rekli ince filtrasyon gereken �r�nlerde tek ba_1na yeterli olmayabilir. �n filtre veya kartu_ filtre ile kombine edilmesi s1k g�r�len bir uygulamad1r.",
            ],
          },
          {
            heading: "Kartu_ filtreler",
            paragraphs: [
              "Kartu_ filtreler, daha hassas tutma kapasitesi gereken uygulamalarda kullan1l1r. Dolum hatt1 �ncesinde son kalite bariyeri olarak tercih edilmeleri yayg1nd1r.",
              "Bas1n� kayb1, kartu_ �mr� ve temizlik prosed�r� tasar1mda dikkate al1nmal1d1r. Yanl1_ filtre se�imi �retim h1z1n1 d�_�rebilir veya s1k duru_lara neden olabilir.",
            ],
          },
          {
            heading: "Cross-flow mikrofiltreler",
            paragraphs: [
              "Cross-flow sistemler, ince partik�l veya ��z�nmemi_ y�k�n daha y�ksek olduu proseslerde s�rekli filtrasyon mant11 sunar. Daha geli_mi_ yat1r1m gerektirir ancak �r�n standard1 ve berrakl1k �zerinde g��l� kontrol salar.",
              "Bu sistemler genellikle y�ksek kaliteli s1v1 g�bre, �zel s1v1 katk1 veya hassas formulasyon hatlar1nda deerlendirilir. Pompa se�imi ve membran y�netimi kritik m�hendislik ba_l1klar1d1r.",
            ],
          },
        ],
      ),
      section(
        "Homojenizasyon ve kalite dengeleme",
        [
          "Homojenizasyon a_amas1, partiden partiye tutarl1 �r�n kalitesi olu_turmak i�in �nemlidir. Younluk, viskozite, ��zelti dengesi ve katk1 da1l1m1 ayn1 kalmazsa �r�n her dolumda farkl1 karakter g�sterebilir.",
          "Bu nedenle mamul tanka ge�meden �nce yeterli sirk�lasyon, kar1_t1rma ve gerekiyorsa inline homojenizasyon deerlendirilmelidir. �zellikle y�ksek katma deerli �zel form�llerde bu a_ama ticari kaliteyi belirler.",
        ],
      ),
      section(
        "Mamul tanklar1 ve stoklama sistemleri",
        [
          "Mamul tanklar1, doluma gidecek son �r�n�n kontroll� bi�imde bekletildii ve kalite dengelemesinin s�rd�r�ld�� aland1r. Tank kapasitesi, dolum h1z1 ve sevkiyat senaryosuyla uyumlu se�ilmelidir.",
          "Stok tanklar1 aras1nda doru borulama, vana plan1 ve CIP/temizlik yakla_1m1 kurulmazsa �r�n ge�i_lerinde kontaminasyon riski olu_abilir. Bu nedenle tank dizilimi proses m�hendisliinin temel kararlar1ndan biridir.",
        ],
      ),
      section(
        "S1v1 dolum ve _i_eleme makinalar1",
        [
          "S1v1 dolum makineleri, �retim hatt1n1n ticari �r�ne d�n�_t�� son kritik a_amad1r. Dolum hassasiyeti, kapaklama, etiketleme ve _i_e ak1_ ritmi birlikte d�_�n�lmediinde �retimde gizli darboazlar olu_abilir.",
          "^i_e dolum hatt1; �r�n viskozitesi, ambalaj tipi, hedef adet/saat ve operat�r ergonomisine g�re tasarlanmal1d1r. Hassas dolum uygulamalar1nda k�tlesel veya hacimsel dolum mant11 prosesle uyumlu se�ilir.",
        ],
      ),
      section(
        "S1v1 g�bre tesislerinde otomasyon ve dozaj kontrol�",
        [
          "S1v1 g�bre �retiminde otomasyon, re�ete tekrar edilebilirlii ve hata riskinin d�_�r�lmesi i�in b�y�k avantaj salar. Loadcell tabanl1 tanklar, dozaj pompalar1, seviye sens�rleri ve HMI ekranlar �retim disiplinini art1r1r.",
          "Otomasyon seviyesi �r�n �e_itlilii ve hat b�y�kl��ne g�re kademeli planlanabilir. Ancak temel veri izleme, alarm y�netimi ve re�ete kay1t yap1s1 daha en ba_tan d�_�n�lmelidir.",
        ],
      ),
      section(
        "Pro Makina ile s1v1 g�bre �retim tesisi kurulumu",
        [
          "Pro Makina, s1v1 g�bre hatlar1nda reakt�r, tank, filtrasyon, dolum ve otomasyon omurgas1n1 ayn1 proses mant11nda bir araya getirir. Bu yakla_1m, yaln1zca makine tedariki deil; re�eteye uygun bir �retim kurgusu olu_turmay1 hedefler.",
          "S1v1 g�bre �retim tesisiniz i�in makine se�imini, tank dizilimini ve dolum senaryosunu birlikte deerlendirmek isterseniz teknik �n g�r�_me ile ilerleyebiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("Reakt�r ve Tanklar", "��z�nd�rme, reaksiyon ve mamul stoklama i�in farkl1 g�rev �stlenir.", "�r�n kararl1l11n1 belirler."),
      row("Filtrasyon", "Torba, kartu_ veya cross-flow sistemler �r�ne g�re se�ilir.", "Dolum hatt1 g�venliini salar."),
      row("Dolum", "^i_e, bidon ve stok senaryosu �retim ritmini etkiler.", "Ticari son �r�ne ge�i_i belirler."),
      row("Otomasyon", "Dozaj ve re�ete tekrar edilebilirliini art1r1r.", "Operasyon hatalar1n1 azalt1r."),
    ],
    faqs: [
      faq("S1v1 g�bre �retiminde reakt�r _art m1d1r?", "Her �r�n i�in zorunlu deildir; ancak ��z�nd�rme, 1s1tma veya reaksiyon gerektiren re�etelerde reakt�r �nemli avantaj salar."),
      faq("Torba filtre mi kartu_ filtre mi se�ilmeli?", "Bu karar �r�n�n partik�l y�k�ne, hedef berrakl1a ve debi ihtiyac1na g�re verilir. �ou hatta iki kademeli filtrasyon daha g�venli sonu� verir."),
      faq("Dolum hatt1 kapasitesi nas1l belirlenir?", "G�nl�k �retim hedefi, ambalaj tipi, �r�n viskozitesi ve hat �zerindeki operat�r seviyesi birlikte deerlendirilir."),
      faq("S1v1 g�bre tesisinde otomasyon gerekli midir?", "�r�n �e_itlilii ve kalite tekrar1 artt1k�a otomasyonun �nemi de artar. �zellikle re�eteli �retimlerde ciddi fayda salar."),
      faq("0lk teklif i�in hangi veriler gerekir?", "�r�n tipi, parti veya saatlik kapasite, ambalaj _ekli ve temel re�ete mant11 ilk �n deerlendirme i�in yeterli olur."),
    ],
    internalLinks: [
      { label: "S1v1 G�bre �retim Tesisi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { label: "Reakt�rler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedContents: [
      machineGuideCards.chemical,
      machineGuideCards.packaging,
      machineGuideCards.granularFertilizer,
    ],
    relatedServices: [
      { title: "S1v1 G�bre �retim Tesisi", description: "S1v1 �r�nlere �zel tesis ��z�mlerini inceleyin.", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { title: "Kimya ve Proses End�strisi", description: "Sekt�rel ��z�m yakla_1m1m1z1 g�r�n.", href: "/sektorler/kimya-ve-proses-endustrisi" },
    ],
    nextContent: machineGuideCards.granularFertilizer,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "granul-ve-organomineral-gubre-hatlari",
    title: "Gran�l ve Organomineral G�bre Hatlar1",
    metaTitle:
      "Gran�l ve Organomineral G�bre Hatlar1 | Gran�lasyon, Kurutma ve Paketleme Sistemleri",
    description:
      "Gran�l g�bre ve organomineral g�bre �retiminde kullan1lan dozajlama, kar1_t1rma, gran�lasyon, kurutma, soutma, eleme, kaplama ve paketleme makinelerini inceleyin.",
    heroDescription:
      "Gran�l ve organomineral g�bre �retim hatlar1nda kullan1lan ana makine gruplar1n1, proses s1ras1n1 ve se�im kriterlerini anlatan kapsaml1 rehber.",
    sections: [
      section(
        "Gran�l g�bre �retim hatt1n1n ana proses ad1mlar1",
        [
          "Gran�l ve organomineral g�bre tesisleri, farkl1 hammaddelerin kontroll� bi�imde bir araya getirildii �ok kademeli �retim hatlar1d1r. Hammadde kabul, dozajlama, kar1_t1rma, gran�lasyon, kurutma, soutma, eleme, recycle, kaplama ve paketleme ad1mlar1 birbirine dorudan bal1d1r.",
          "Bu nedenle hat tasar1m1 yap1l1rken tek bir ekipman1n kapasitesi deil, t�m ak1_1n ayn1 ritimde �al1_mas1 gerekir. �zellikle recycle oran1, �r�n nemi ve gran�l dayan1m1; gran�l g�bre tesislerinde saha performans1n1 belirleyen temel dei_kenlerdir.",
        ],
      ),
      section(
        "Hammadde kabul, silo ve dozajlama sistemleri",
        [
          "Gran�l g�bre hatt1nda ilk kritik halka, hammaddelerin doru stoklanmas1 ve re�eteye uygun dozajlanmas1d1r. Hammadde silolar1 ve dozaj bunkerleri; makro ve mikro hammaddelerin kesintisiz, g�venli ve kontroll� bi�imde hatta verilmesini salar.",
          "Dozaj doruluu zay1f olan bir hatta gran�l kalitesi, besin element da1l1m1 ve proses dengesi bozulur. Bu y�zden bunker geometrisi, k�pr�le_me riski, besleme organlar1 ve tart1ml1 kontrol mant11 tasar1mda �ne �1kar.",
        ],
      ),
      section(
        "Kar1_t1rma ve homojenizasyon ekipmanlar1",
        [
          "Mikserler, gran�lasyondan �nce hammaddelerin homojen hale getirilmesini salar. Yetersiz kar1_1m, tambur i�inde d�zensiz �ekirdek olu_umuna ve gran�l kalite sorunlar1na neden olur.",
          "Kar1_t1r1c1 tipi; toz, lifli, nemli veya mineral bazl1 kar1_1mlara g�re se�ilmelidir. Kar1_t1rma s�resi ve ilave s1v1 noktalar1 da homojenizasyon ba_ar1s1n1 dorudan etkiler.",
        ],
      ),
      section(
        "Gran�lasyon tamburu ve gran�l olu_umu",
        [
          "Gran�lasyon tamburu, gran�l g�bre tesisinin merkezindeki ana ekipmand1r. Toz veya ince taneli kar1_1m; balay1c1 s1v1, d�n�_ y�k� ve tambur i�i hareket sayesinde ticari boyutta gran�llere d�n�_�r.",
          "Tambur �ap1, boyu, doluluk oran1, devir aral11, eim ve nozul yerle_imi gran�l b�y�me mekanizmas1n1 belirler. Recycle ve balay1c1 y�netimi doru kurulmad11nda �r�n ya ince kal1r ya da kontrols�z topaklanma olu_ur.",
        ],
      ),
      section(
        "Kurutma tamburu ve nem kontrol�",
        [
          "Gran�lasyon sonras1 �r�n �ou zaman kurutma tamburuna al1n1r. Burada ama� yaln1zca nem d�_�rmek deil, gran�l y�zeyini kararl1 hale getirerek eleme ve paketleme i�in uygun �r�n elde etmektir.",
          "Kurutma hatt1; giri_ nemi, hedef �1k1_ nemi, su u�urma y�k� ve �r�n 1s1 hassasiyeti dikkate al1narak tasarlanmal1d1r. Br�l�r, fan, siklon ve filtre sistemi kurutma tamburunun ayr1lmaz par�alar1d1r.",
        ],
      ),
      section(
        "Soutma tamburu ve �r�n stabilitesi",
        [
          "Soutma tamburu, kurutma sonras1 y�ksek s1cakl1ktaki gran�llerin paketleme veya kaplama �ncesinde stabilize edilmesini salar. Yeterli soutma yap1lmazsa �r�n depoda terleyebilir veya kaplama kalitesi d�_ebilir.",
          "Soutma havas1 debisi, ortam s1cakl11 ve �r�n k1r1lganl11 birlikte deerlendirilmelidir. Hassas �r�nlerde d�_�k darbe i� kanat yap1s1 ve kontroll� devir aral11 tercih edilir.",
        ],
      ),
      section(
        "Eleme, k1rma ve recycle hatt1",
        [
          "Gran�l g�bre hatlar1nda �r�n�n ticari fraksiyona ayr1lmas1 i�in d�ner elek veya vibrasyonlu elek kullan1l1r. Elek alt1 ince �r�n ve elek �st� iri par�alar recycle hatt1na al1narak yeniden gran�lasyon tamburuna beslenebilir.",
          "Recycle oran1, tamburun ger�ek y�k�n� dorudan art1rd11 i�in t�m hat kapasitesi buna g�re kurgulanmal1d1r. Gerekli durumlarda k1r1c1 ile iri �r�n par�alan1r ve kontroll� bi�imde geri d�nd�r�l�r.",
        ],
      ),
      section(
        "Kaplama tamburu ve �r�n kalitesi",
        [
          "Kaplama tamburu, gran�l y�zeyinin ak1_kanl1k, tozuma veya g�rsel kalite a�1s1ndan iyile_tirilmesini salar. 0nhibit�r, ya, polimer veya renk verici katk1lar doru dozaj ve p�sk�rtme yap1s1yla uygulanmal1d1r.",
          "Kaplama homojenlii, nozul tipi, tambur devri ve �r�n k1r1lganl11yla ili_kilidir. Premium kalite hedeflenen �r�nlerde �oklu nozul ve hassas dozaj sistemleri tercih edilir.",
        ],
      ),
      section(
        "Paketleme, big bag ve a�1k a1z torbalama sistemleri",
        [
          "Son �r�n haz1rlama a_amas1nda a�1k a1z torbalama, big bag dolum veya d�kme sevkiyat sistemleri devreye girer. Paketleme hatt1n1n ger�ek kapasitesi, upstream ekipmanlardan ba1ms1z d�_�n�lemez.",
          "Tart1m doruluu, �r�n ak1_1, toz kontrol� ve sevkiyat senaryosu paketleme ekipman1n1n se�iminde belirleyicidir. Gran�l �r�nlerde soutma ve son elek sonras1 paketleme daha g�venli sonu� verir.",
        ],
      ),
      section(
        "Organomineral g�bre tesisinde otomasyonun �nemi",
        [
          "Organomineral g�bre hatlar1nda farkl1 hammaddelerin dozaj, nem ve proses y�kleri s�rekli dei_ebilir. Bu nedenle otomasyon; re�ete y�netimi, besleme h1zlar1, tambur devirleri ve filtre/br�l�r kontrol� a�1s1ndan ciddi avantaj salar.",
          "PLC ve HMI destekli bir yap1, operat�r ba1ml1l11n1 azalt1r ve �retim tekrar edilebilirliini art1r1r. �zellikle �ok �r�nl� tesislerde veri kayd1 ve alarm y�netimi b�y�k �nem ta_1r.",
        ],
      ),
    ],
    summaryRows: [
      row("Dozajlama", "Makro ve mikro hammaddelerin kontroll� beslenmesi gerekir.", "Gran�l kalitesini ve re�ete doruluunu belirler."),
      row("Gran�lasyon", "Recycle, balay1c1 ve tambur i�i hareket birlikte y�netilir.", "�r�n�n boyut ve dayan1m standard1n1 olu_turur."),
      row("Kurutma/Soutma", "Nem ve s1cakl1k dengesi �r�n stabilitesi i�in birlikte ele al1n1r.", "Depolama ve paketleme ba_ar1s1n1 etkiler."),
      row("Paketleme", "Son �r�n ak1_1 ve tart1m doruluu hat kapasitesini tamamlar.", "Ticari �1kt1 kalitesini belirler."),
    ],
    faqs: [
      faq("Gran�l g�bre hatt1nda en kritik ekipman hangisidir?", "Gran�lasyon tamburu merkezi ekipmand1r; ancak dozajlama, kurutma, eleme ve recycle hatt1 doru kurulmadan tek ba_1na yeterli deildir."),
      faq("Recycle oran1 neden �nemlidir?", "Recycle y�k� tamburun ger�ek besleme tonaj1n1 art1r1r ve kapasite hesab1n1 dorudan etkiler."),
      faq("Her gran�l hat i�in kurutma tamburu gerekir mi?", "�ou gran�lasyon hatt1nda gerekir; ancak re�ete, balay1c1 ve hedef �r�n tipine g�re deerlendirme yap1lmal1d1r."),
      faq("Kaplama tamburu zorunlu mudur?", "Hay1r. Ak1_ iyile_tirme, toz azaltma veya premium y�zey kalitesi isteniyorsa tercih edilir."),
      faq("Organomineral g�bre tesisi i�in ilk hangi veriler gerekir?", "Saatlik nihai kapasite, �r�n tipi, hammadde listesi, gran�l hedefi ve saha yerle_imi ilk �n deerlendirme i�in yeterlidir."),
    ],
    internalLinks: [
      { label: "Organomineral G�bre Tesisi", href: "/hizmetler/organomineral-gubre-tesisi" },
      { label: "Gran�l G�bre �retim Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesaplar1", href: "/programlar/tambur-hesaplari" },
    ],
    relatedContents: [
      machineGuideCards.thermal,
      machineGuideCards.packaging,
      machineGuideCards.conveying,
    ],
    relatedServices: [
      { title: "Organomineral G�bre Tesisi", description: "Organomineral hat ��z�mlerimizi inceleyin.", href: "/hizmetler/organomineral-gubre-tesisi" },
      { title: "Gran�l G�bre �retim Tesisi", description: "Gran�l g�bre hat hizmetimizi g�r�n.", href: "/hizmetler/granul-gubre-uretim-tesisi" },
    ],
    nextContent: machineGuideCards.compost,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "kompost-ve-organik-atik-makinalari",
    title: "Kompost ve Organik At1k Makinalar1",
    metaTitle:
      "Kompost ve Organik At1k Makinalar1 | At1k Haz1rlama, Olgunla_t1rma ve Kurutma Sistemleri",
    description:
      "Evsel organik at1k, ar1tma �amuru, digestat ve tar1msal at1klar1n kompost �r�n�ne d�n�_t�r�lmesinde kullan1lan makine ve ekipmanlar1 inceleyin.",
    heroDescription:
      "Kompost ve organik at1k tesislerinde kullan1lan par�alay1c1, tambur, elek, ta_1ma ve koku kontrol sistemlerini anlatan sekt�r rehberi.",
    sections: [
      section(
        "Kompost tesisi makine park1 nas1l planlan1r?",
        [
          "Kompost tesislerinde makine park1, yaln1zca at11n i_lenmesi i�in deil; kararl1, kokusu kontrol alt1nda ve ticari deerlendirilebilir bir son �r�n elde etmek i�in planlanmal1d1r. Organik at11n t�r�, nemi, lif yap1s1 ve yabanc1 madde oran1 bu planlaman1n merkezindedir.",
          "Bu nedenle kompost tesisi ekipmanlar1; at1k kabul, par�alama, kar1_t1rma, tambur veya olgunla_t1rma, eleme, koku kontrol� ve son �r�n haz1rlama zinciri olarak deerlendirilir. Her halkadaki yanl1_ se�im, t�m prosesin verimini d�_�rebilir.",
        ],
      ),
      section(
        "At1k kabul ve �n haz1rl1k ekipmanlar1",
        [
          "At1k kabul b�l�m�, tesisin ger�ek proses kalitesini belirleyen ilk a_amad1r. Organik at11n bunker, dozaj veya �n ay1rma sistemi �zerinden kontroll� bi�imde hatta verilmesi gerekir.",
          "Bu a_amada bunker geometrisi, k�pr�le_me riski, operat�r g�venlii ve besleme ekipmanlar1n1n dayan1m1 �nemlidir. �zellikle �amur, digestat veya lifli at1klar i�in farkl1 besleme yakla_1m1 gerekir.",
        ],
      ),
      section(
        "Par�alay1c1 ve shredder sistemleri",
        [
          "Organik at1k i�inde bulunan iri par�alar, torbal1 i�erikler veya lifli yap1lar prosesin homojenliini bozar. Bu nedenle shredder, b1�akl1 k1r1c1 veya �eki�li k1r1c1 sistemleri �n haz1rl1kta devreye al1nabilir.",
          "Par�alay1c1 se�imi yap1l1rken malzemenin yap1_kanl11, yabanc1 madde riski ve hedef par�a boyutu birlikte deerlendirilmelidir. Aksi durumda gereksiz a_1nma ve y�ksek bak1m maliyeti olu_abilir.",
        ],
      ),
      section(
        "Kar1_t1rma ve nem dengeleme ekipmanlar1",
        [
          "Kompost kalitesinin ana belirleyicilerinden biri doru nem ve karbon/azot dengesidir. Kar1_t1rma ekipmanlar1, farkl1 organik ak1_lar1 homojen hale getirerek biyolojik s�recin daha �ng�r�lebilir ilerlemesini salar.",
          "Nem dengeleme a_amas1nda s1v1 ilave noktalar1, kuru katk1 besleme ve malzemenin par�alanmadan ta_1nmas1 birlikte d�_�n�lmelidir. Kar1_t1rma tamburu veya mikser se�imi bu y�zden �r�n davran1_1na g�re yap1l1r.",
        ],
      ),
      section(
        "Kompost / olgunla_t1rma tamburu",
        [
          "Kompost tamburu veya olgunla_t1rma tamburu, malzemenin kontroll� bi�imde d�nd�r�lmesi ve homojenle_tirilmesi i�in kullan1l1r. �zellikle s�rekli proses yakla_1m1 benimsenen tesislerde �n fermentasyon ve h1zland1r1lm1_ olgunla_t1rma a�1s1ndan �nemli avantaj salar.",
          "Tambur doluluu, devir aral11, havaland1rma tipi ve i� palet yap1s1 kompost prosesinin verimini dorudan etkiler. Yap1_kan �r�nlerde s1y1r1c1 veya �zel i� yap1 deerlendirilmelidir.",
        ],
      ),
      section(
        "Kurutma tamburu ve nem d�_�rme",
        [
          "Baz1 kompost ve organik at1k hatlar1nda son �r�n�n ticari kullan1m1na uygun hale gelmesi i�in ek kurutma gerekir. �zellikle organomineral g�bre girdisi olu_turulacaksa veya y�ksek nemli ak1_ deerlendirilecekse kurutma tamburu devreye al1n1r.",
          "Bu a_amada giri_ nemi, koku/gaz �1k1_1 ve �r�n�n termal hassasiyeti birlikte deerlendirilmelidir. Kurutma hatt1 �ou zaman fan, siklon, filtre ve koku kontrol sistemiyle birlikte planlan1r.",
        ],
      ),
      section(
        "Eleme ve nihai �r�n haz1rlama",
        [
          "Kompostun ticari �r�n haline gelmesinde eleme kritik rol oynar. Trommel veya uygun s1n1fland1rma ekipmanlar1yla iri fraksiyon ayr1l1r, gerekiyorsa geri d�nd�r�l�r ve homojen bir son �r�n haz1rlan1r.",
          "Eleme sonras1 paketleme, stoklama veya organomineral kar1_1m hatt1na sevk senaryolar1 devreye girebilir. Bu nedenle son �r�n haz1rlama b�l�m� tesisin pazarlanabilirlik kapasitesini belirler.",
        ],
      ),
      section(
        "Koku, toz ve gaz kontrol sistemleri",
        [
          "Kompost ve organik at1k tesislerinde koku kontrol� �ou zaman teknik ve �evresel a�1dan en kritik ba_l1klardan biridir. Negatif bas1n�l1 hava toplama, biyofiltre, scrubber veya filtre sistemleri ihtiyaca g�re kombine edilir.",
          "Koku kontrol� yaln1zca sonradan eklenen bir yard1mc1 sistem olarak d�_�n�lmemelidir. At1k kabul, kar1_t1rma, tambur ve eleme noktalar1 ba_tan bu mimariye uygun tasarlanmal1d1r.",
        ],
      ),
      section(
        "Komposttan organomineral g�bre �retimine ge�i_",
        [
          "Bir�ok tesiste kompost hatt1, tek ba_1na son �r�n �retmek yerine organomineral g�bre �retimi i�in hammadde haz1rlama fonksiyonu da g�r�r. Bu senaryoda kurutma, eleme, silo ve dozajlama altyap1s1n1n g�bre hatt1yla uyumlu planlanmas1 gerekir.",
          "B�ylece organik at1klar1n katma deeri artar ve tesis yaln1z bertaraf deil, ticari �r�n odakl1 �al1_abilir. Ge�i_ kurgusu yap1l1rken nem, tane boyutu ve �r�n standard1 iyi tan1mlanmal1d1r.",
        ],
      ),
      section(
        "Pro Makina ile kompost tesisi ��z�mleri",
        [
          "Pro Makina, kompost ve organik at1k tesislerinde makine omurgas1n1 at1k karakteri ve hedef son �r�n �zerinden kurgular. Par�alay1c1, tambur, elek, ta_1ma ve koku kontrol ekipmanlar1 ayn1 saha mant11nda projelendirilir.",
          "Kompost, organik at1k veya digestat hatlar1n1z i�in doru makine kombinasyonunu deerlendirmek isterseniz, teknik �n analizle birlikte ilerleyebiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("At1k Karakteri", "Nem, lif yap1s1 ve yabanc1 madde oran1 ekipman se�imini dei_tirir.", "Proses omurgas1n1 belirler."),
      row("Tambur ve Eleme", "Olgunla_t1rma ve son �r�n fraksiyonu ayn1 hat i�inde d�_�n�lmelidir.", "Ticari �r�n kalitesini etkiler."),
      row("Koku Kontrol�", "Biyofiltre, scrubber ve filtre sistemi proje ba_1nda planlanmal1d1r.", "�evresel uyumu salar."),
      row("Son �r�n", "Paketleme veya g�bre hatt1na entegrasyon erken a_amada tan1mlanmal1d1r.", "Yat1r1m deerini art1r1r."),
    ],
    faqs: [
      faq("Kompost tesisi i�in tambur _art m1d1r?", "Her projede zorunlu deildir; ancak s�rekli proses, �n fermentasyon veya daha kontroll� kar1_1m hedeflerinde �nemli avantaj salar."),
      faq("Organik at1k hatt1nda shredder neden gerekir?", "Torbal1, lifli veya iri par�al1 ak1_larda homojenlii art1rmak ve sonraki ekipmanlar1 korumak i�in kullan1l1r."),
      faq("Kompost tesisi koku kontrol� nas1l planlan1r?", "At1k kabul, kar1_t1rma, tambur ve eleme noktalar1 birlikte deerlendirilerek negatif bas1n� ve uygun ar1tma hatt1 se�ilir."),
      faq("Kuruma olmadan kompost sat1labilir mi?", "Bu, hedef son �r�n standard1na bal1d1r. Baz1 uygulamalarda doal nem kabul edilebilir, baz1 uygulamalarda ek kurutma gerekir."),
      faq("Kompost hatt1 organomineral g�bre tesisine balanabilir mi?", "Evet. Uygun eleme, kurutma ve stoklama ad1mlar1yla kompost hatt1 g�bre prosesine entegre edilebilir."),
    ],
    internalLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { label: "K1r1c1lar ve Par�alay1c1lar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesaplar1", href: "/programlar/tambur-hesaplari" },
    ],
    relatedContents: [
      machineGuideCards.granularFertilizer,
      machineGuideCards.sludge,
      machineGuideCards.biogas,
    ],
    relatedServices: [
      { title: "Kompost Tesisi Kurulumu", description: "Kompost ve organik at1k tesis hizmetimizi inceleyin.", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { title: "Kompost ve Organik At1k Tesisleri", description: "Sekt�r ��z�m yakla_1m1m1z1 g�r�n.", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
    ],
    nextContent: machineGuideCards.thermal,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "kurutma-ve-termal-proses-makinalari",
    title: "Kurutma ve Termal Proses Makinalar1",
    metaTitle:
      "Kurutma ve Termal Proses Makinalar1 | Kurutma Tamburu, Br�l�r, Fan ve Filtre Sistemleri",
    description:
      "Kurutma tamburu, br�l�r, s1cak hava �retim sistemi, fan, siklon, filtre ve termal proses ekipmanlar1n1n �al1_ma mant11n1 ve se�im kriterlerini inceleyin.",
    heroDescription:
      "End�striyel kurutma ve termal proses hatlar1nda g�rev alan tambur, br�l�r, fan ve filtre ekipmanlar1n1 teknik se�im mant11yla anlatan rehber.",
    sections: [
      section(
        "End�striyel kurutma proseslerinde makine se�imi",
        [
          "Kurutma proseslerinde doru makine se�imi, dorudan enerji t�ketimi, son �r�n kalitesi ve hat kararl1l11na yans1r. Ayn1 giri_ kapasitesi i�in farkl1 �r�nler tamamen farkl1 termal davran1_ g�sterebilir; bu nedenle tambur, fan ve br�l�r se�imleri yaln1z katalog deerlerine g�re yap1lamaz.",
          "�r�n nemi, hedef �1k1_ nemi, tane boyutu, yap1_kanl1k, toz y�k� ve s1cakl1k hassasiyeti birlikte deerlendirilmelidir. Termal prosesler her zaman ana ekipman ve yard1mc1 hatlar1n toplam1 olarak okunmal1d1r.",
        ],
      ),
      section(
        "Kurutma tamburu nas1l �al1_1r?",
        [
          "Kurutma tamburu, �r�n�n d�ner g�vde i�inde ilerlerken s1cak gazla temas etmesini salayan ana proses ekipman1d1r. 0� kanatlar veya lifter yap1lar1, �r�n� perde halinde kald1rarak y�zey alan1n1 art1r1r ve kurutma verimini y�kseltir.",
          "Tambur �ap1, boyu, eimi, deviri ve doluluk oran1 �r�n�n kal1_ s�resini belirler. Bu nedenle kurutma tamburu hesab1, yaln1z geometri deil; proses y�k� ve su u�urma mant11 a�1s1ndan da yap1lmal1d1r.",
        ],
      ),
      section(
        "Br�l�r ve s1cak hava �retim sistemleri",
        [
          "Br�l�r, kurutma hatt1n1n 1s1 kayna1n1 olu_turur. Doalgaz, LNG, LPG, motorin, biyogaz veya at1k 1s1 gibi kaynaklar �r�n tipi, saha altyap1s1 ve enerji stratejisine g�re se�ilir.",
          "Br�l�r kapasitesi belirlenirken buharla_acak su miktar1, �r�n 1s1tma y�k� ve emniyet pay1 dikkate al1nmal1d1r. Mod�lasyonlu �al1_ma, dei_ken y�klerde daha kontroll� proses salar.",
        ],
      ),
      section(
        "Cehennemlik ve s1cak hava odas1 tasar1m1",
        [
          "Baz1 kurutma hatlar1nda alevin �r�nle direkt temas etmemesi istenir. Bu durumda cehennemlik veya s1cak hava odas1 yap1s1 kullan1larak daha kontroll� bir termal ortam olu_turulur.",
          "Bu ekipmanlar1n tasar1m1nda refrakter yap1, genle_me bo_luklar1, bak1m eri_imi ve g�venlik sens�rleri �nemlidir. S1cak hava odas1n1n fan ve tamburla dengeli �al1_mas1 gerekir.",
        ],
      ),
      section(
        "Fan, hava debisi ve proses bas1nc1",
        [
          "Fan sistemi, kurutma hatt1nda hava ak1_1n1n ger�ek ta_1y1c1s1d1r. Fan debisi yetersiz olduunda �r�n yeterince kuruyamaz; fazla olduunda ise gereksiz enerji t�ketimi ve �r�n ta_1nmas1 olu_abilir.",
          "Hava debisi, su u�urma y�k�, kanal kay1plar1, siklon ve filtre bas1n� d�_�mleriyle birlikte deerlendirilmelidir. Fan konumu da proses g�venlii ve bak1m �mr� a�1s1ndan kritik bir karard1r.",
        ],
      ),
      section(
        "Siklon, jet pulse filtre ve toz kontrol�",
        [
          "Kurutma hatlar1nda olu_an toz, �r�n kayb1 ve �evresel emisyon a�1s1ndan dikkatle y�netilmelidir. Siklonlar iri partik�llerin ayr1lmas1n1 salarken, jet pulse filtreler daha ince tozun tutulmas1nda devreye girer.",
          "Y�ksek s1cakl1k, toz a_1nd1r1c1l11 ve gaz nemi filtre malzemesi ve fan tasar1m1 �zerinde dorudan etkilidir. Bu y�zden toz toplama hatt1, kurutma tamburundan ba1ms1z d�_�n�lmemelidir.",
        ],
      ),
      section(
        "�r�n nemi, kal1_ s�resi ve tambur doluluk oran1",
        [
          "Bir kurutma hatt1n1n ger�ek performans1n1 �r�n nemi, tambur i�i kal1_ s�resi ve doluluk oran1 birlikte belirler. A_1r1 dolu tambur, hava temas1n1 azalt1r; a_1r1 d�_�k doluluk ise hacim verimsizliine neden olabilir.",
          "Kal1_ s�resi; �r�n tipi, i� kanat yap1s1, eim ve devir ile ili_kilidir. Bu nedenle kurutma tamburunun saha ba_ar1s1, geometri ile proses hesab1n1n birlikte kurulmas1na bal1d1r.",
        ],
      ),
      section(
        "Kurutma sonras1 soutma ve eleme sistemleri",
        [
          "Kurutma sonras1 �r�n dorudan stok veya paketleme sistemine girmeden �nce soutma ve gerekirse eleme ad1mlar1ndan ge�irilebilir. �zellikle gran�l �r�nlerde bu ad1m son �r�n kararl1l11 ve toz kontrol� a�1s1ndan b�y�k avantaj salar.",
          "Soutma tamburu, elek ve recycle hatt1 kurutma hatt1n1n doal devam1 olarak d�_�n�lmelidir. B�ylece termal ve mekanik proses dengesi korunur.",
        ],
      ),
      section(
        "Kurutma tamburu hesab1 neden �nemlidir?",
        [
          "Kurutma tamburu hesab1; tambur �ap1, boyu, devir, eim, doluluk, fan debisi ve br�l�r kapasitesinin ayn1 tabloda okunmas1n1 salar. Bu hesap yap1lmadan yaln1zca benzer tesis �rneklerine bakarak kurutma hatt1 kurmak ciddi enerji ve kapasite sapmalar1na yol a�abilir.",
          "�n m�hendislik hesaplar1, yat1r1m1n ilk a_amas1nda doru ekipman aral1klar1n1 belirlemek i�in g��l� bir �er�eve sunar. Ard1ndan detay m�hendislik ve saha dorulamalar1yla sistem netle_tirilir.",
        ],
      ),
      section(
        "Pro Makina ile kurutma ve termal proses ��z�mleri",
        [
          "Pro Makina, kurutma ve termal proses hatlar1nda tambur, s1cak hava sistemi, fan, siklon, filtre ve yard1mc1 ekipmanlar1 entegre bi�imde projelendirir. Ama� yaln1zca �r�n kurutmak deil, enerji ve bak1m a�1s1ndan s�rd�r�lebilir bir sistem kurmakt1r.",
          "Kurutma hatt1n1z i�in doru makine kombinasyonunu ve �n tasar1m deerlerini birlikte deerlendirmek isterseniz teknik g�r�_me ile ilerleyebiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("Su U�urma Y�k�", "Nem fark1 ve kapasite termal hatt1n temel tasar1m girdisidir.", "Br�l�r ve fan se�imlerini y�nlendirir."),
      row("Tambur Geometrisi", "�ap, boy, devir ve doluluk proses performans1n1 birlikte etkiler.", "Kurutma verimini belirler."),
      row("Toz Kontrol�", "Siklon ve filtre hatt1 olmadan s�rd�r�lebilir �al1_ma zorla_1r.", "�r�n kayb1n1 ve emisyonu azalt1r."),
      row("Soutma / Son Hat", "Kurutma sonras1 stabilite ve paketleme haz1rl11 ek ekipman ister.", "Son �r�n kalitesini korur."),
    ],
    faqs: [
      faq("Kurutma hatt1nda en kritik ekipman tambur mudur?", "Tambur merkezi ekipmand1r; ancak br�l�r, fan, siklon ve filtre birlikte doru se�ilmediinde hat verimli �al1_maz."),
      faq("Br�l�r kapasitesi nas1l belirlenir?", "Buharla_acak su, �r�n 1s1tma y�k�, g�venlik pay1 ve yak1t tipi �zerinden �n se�im yap1l1r."),
      faq("Her kurutma hatt1nda siklon gerekir mi?", "�ou tozlu proseste �nerilir. �zellikle mineral ve gran�l uygulamalarda �r�n kayb1n1 azalt1r."),
      faq("Kurutma sonras1 soutma neden gerekir?", "S1cak �r�n�n stokta terlemesini, topaklanmas1n1 veya paketleme sorunlar1n1 azaltmak i�in kullan1l1r."),
      faq("Tambur hesab1 olmadan kurutma hatt1 kurulabilir mi?", "Kurulabilir; ancak kapasite, enerji ve �r�n kalitesi a�1s1ndan y�ksek sapma riski olu_ur. �n hesap b�y�k avantaj salar."),
    ],
    internalLinks: [
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesaplar1", href: "/programlar/tambur-hesaplari" },
      { label: "Kurutma Tamburu Hesab1", href: "/programlar/kurutma-tamburu-hesabi" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedContents: [
      machineGuideCards.mining,
      machineGuideCards.granularFertilizer,
      machineGuideCards.sludge,
    ],
    relatedServices: [
      { title: "Maden Kurutma ve Eleme Tesisi", description: "Termal proses odakl1 tesis ��z�mlerimizi inceleyin.", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { title: "�amur Kurutma Tesisi", description: "Y�ksek nemli �r�nler i�in saha yakla_1m1m1z1 g�r�n.", href: "/hizmetler/camur-kurutma-tesisi" },
    ],
    nextContent: machineGuideCards.conveying,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "tasima-dozajlama-ve-depolama-ekipmanlari",
    title: "Ta_1ma, Dozajlama ve Depolama Ekipmanlar1",
    metaTitle:
      "Ta_1ma, Dozajlama ve Depolama Ekipmanlar1 | Konvey�r, Elevat�r, Silo ve Bunker Sistemleri",
    description:
      "Bant konvey�r, helezon konvey�r, koval1 elevat�r, zincirli konvey�r, silo, bunker ve dozajlama sistemlerinin proses hatlar1ndaki g�revlerini inceleyin.",
    heroDescription:
      "Ta_1ma, stoklama ve besleme ekipmanlar1n1n proses hatt1ndaki rol�n� kapasite, ak1_ ve dozaj doruluu a�1s1ndan anlatan rehber.",
    sections: [
      section(
        "Proses hatlar1nda ta_1ma ekipmanlar1n1n �nemi",
        [
          "Bir proses hatt1nda ana makinalar ne kadar doru se�ilmi_ olursa olsun, malzeme bu ekipmanlar aras1nda kontroll� ta_1nm1yorsa hat verimi d�_er. Ta_1ma ekipmanlar1, hatt1n g�r�nmeyen ama ak1_1 belirleyen omurgas1d1r.",
          "Konvey�rler, elevat�rler, bunkerler ve dozajlama sistemleri yaln1z sevk eleman1 deil; kapasite dengeleyici, tamponlay1c1 ve re�eteleyici g�revler de �stlenir. Bu nedenle ta_1ma hatt1 tasar1m1 mutlaka ana prosesle birlikte yap1lmal1d1r.",
        ],
      ),
      section(
        "Bant konvey�r sistemleri",
        [
          "Bant konvey�rler, yatay veya d�_�k eimli y�ksek kapasiteli ta_1malarda en �ok tercih edilen ekipmanlardan biridir. Uzun mesafede d�zenli ak1_ salamalar1 nedeniyle maden, g�bre ve d�kme kat1 hatlar1nda yayg1nd1r.",
          "Bant geni_lii, h1z, oluk a�1s1, istasyon yerle_imi ve kapal1/a�1k g�vde se�imi proses ihtiyac1na g�re belirlenir. Tozlu �r�nlerde s1zd1rmazl1k ve kapama detaylar1 �nem kazan1r.",
        ],
      ),
      section(
        "Helezon konvey�r sistemleri",
        [
          "Helezon konvey�rler, kapal1 g�vde i�inde kontroll� ve nispeten k1sa mesafeli ta_1ma i�in g��l� ��z�mler sunar. Tozlu �r�nler, katk1lar ve dozaj gerektiren malzemeler i�in �zellikle uygundur.",
          "�ap, hatve, devir, doluluk oran1 ve eim; helezon kapasitesini belirleyen ana parametrelerdir. Yap1_kan veya a_1nd1r1c1 �r�nlerde g�vde ve flight malzemesi dikkatle se�ilmelidir.",
        ],
      ),
      section(
        "Koval1 elevat�rler",
        [
          "Koval1 elevat�rler, �r�n�n dikey ta_1nmas1 gereken tesislerde vazge�ilmez ekipmanlard1r. Gran�l, toz ve baz1 k1r1lgan �r�nlerin kontroll� bi�imde �st kotlara al1nmas1n1 salar.",
          "Kova hacmi, bant/zincir h1z1, merkezka� etkisi ve bo_altma d�zeni tasar1m1n ana noktalar1d1r. �zellikle s1cak veya tozlu �r�nlerde g�vde s1zd1rmazl11 ve bak1m eri_imi �nemlidir.",
        ],
      ),
      section(
        "Zincirli konvey�rler",
        [
          "Zincirli konvey�rler, a1r hizmet ko_ullar1 ve k1sa-orta mesafeli s�r�klemeli ta_1ma i�in tercih edilir. K1r1lgan olmayan veya kontroll� s�r�klenebilen �r�nlerde g��l� ve dayan1kl1 bir ��z�m sunar.",
          "Zincir se�imi, palet yap1s1, kanal g�vdesi ve tahrik sistemi malzeme karakterine g�re belirlenmelidir. A_1r1 doldurma durumunda s�rt�nme y�k� h1zla artabilecei i�in besleme kontrol� gereklidir.",
        ],
      ),
      section(
        "Silo, bunker ve ara stok sistemleri",
        [
          "Silo ve bunker sistemleri, proses hatlar1n1n tampon kapasitesini olu_turur. Bu ekipmanlar sayesinde upstream ve downstream makinalar farkl1 ritimlerde �al1_sa bile hat daha kararl1 ilerleyebilir.",
          "Bunker tasar1m1nda k�pr�le_me, ak1_ a�1s1, s�rg� kapak yap1s1 ve alt de_arj ekipman1 birlikte deerlendirilmelidir. 0nce toz ve yap1_kan �r�nlerde yanl1_ bunker geometrisi ciddi ak1_ problemleri dourur.",
        ],
      ),
      section(
        "Makro ve mikro dozajlama sistemleri",
        [
          "Dozajlama sistemleri, re�eteli �retimin temel kontrol noktalar1ndand1r. Makro hammaddelerde y�ksek kapasite, mikro hammaddelerde ise hassas tart1m ve kontroll� besleme �n plana �1kar.",
          "Tart1ml1 konvey�r, tart1ml1 helezon, dozaj bunkeri ve rotary valf gibi yard1mc1 ekipmanlar burada birlikte �al1_1r. Hata pay1 d�_�k bir dozaj yap1s1, t�m proseste kalite tekrar1n1 g��lendirir.",
        ],
      ),
      section(
        "Tart1ml1 besleme ve re�ete kontrol�",
        [
          "Tart1ml1 besleme ekipmanlar1, operat�r kaynakl1 varyasyonu azalt1r ve re�ete doruluunu art1r1r. �zellikle g�bre, kimya ve katk1 dozaj1 gereken hatlarda loadcell altyap1s1 ve yaz1l1m entegrasyonu b�y�k avantaj salar.",
          "Bu yap1 yaln1zca anl1k kapasite kontrol� deil, ge�mi_ �retim kay1tlar1n1n takibi i�in de �nemlidir. B�ylece proses iyile_tirme ve maliyet analizi daha sal1kl1 yap1labilir.",
        ],
      ),
      section(
        "Toz s1zd1rmazl1k ve esnek balant1lar",
        [
          "Ta_1ma hatlar1n1n en �ok g�zden ka�an taraf1, balant1 noktalar1ndaki toz ka�aklar1d1r. Esnek balant1lar, kapal1 ge�i_ler ve uygun aspirasyon noktalar1 saha temizlii kadar �r�n kayb1n1 azaltmak i�in de gereklidir.",
          "�zellikle mikro dozaj ve ince toz hatlar1nda s1zd1rmazl1k kalitesi operat�r konforunu ve g�venlii dorudan etkiler. Bu nedenle balant1 detaylar1 da ana ekipman kadar �nemlidir.",
        ],
      ),
      section(
        "Pro Makina ile ta_1ma ve dozajlama ��z�mleri",
        [
          "Pro Makina, ta_1ma ve dozajlama sistemlerini ana prosesin ayr1lmaz par�as1 olarak ele al1r. Konvey�r, elevat�r, silo, bunker ve tart1ml1 besleme ekipmanlar1 ayn1 kapasite omurgas1nda projelendirilir.",
          "Yeni bir hat kurarken veya mevcut tesisinizi revize ederken, malzeme ak1_1n1n en doru _ekilde nas1l kurgulanaca1n1 birlikte deerlendirebiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("Ak1_ S�reklilii", "Ta_1ma ekipmanlar1 prosesin ritmini dengeler.", "Ana makinalar1n verimli �al1_mas1n1 salar."),
      row("Dozaj Doruluu", "Tart1ml1 besleme ve mikro dozaj kalite tekrar1n1 art1r1r.", "Re�ete bazl1 �retimde kritiktir."),
      row("Stok Y�netimi", "Silo ve bunkerler tampon kapasite olu_turur.", "Hat duru_lar1n1 azalt1r."),
      row("S1zd1rmazl1k", "Toz ka�aklar1 ve ak1_ problemleri balant1 detaylar1yla ili_kilidir.", "Operasyon g�venlii ve temizlik salar."),
    ],
    faqs: [
      faq("Bant konvey�r m� helezon mu se�ilmeli?", "Karar kapasite, mesafe, �r�n tipi, kapal1 hat ihtiyac1 ve eim ko_ullar1na g�re verilir."),
      faq("Koval1 elevat�r hangi �r�nlerde uygundur?", "Gran�l, toz ve dikey ta_1nmas1 gereken bir�ok d�kme kat1 �r�nde uygundur; ancak k1r1lganl1k ve s1cakl1k ayr1ca deerlendirilmelidir."),
      faq("Silo ile bunker aras1nda ne fark vard1r?", "Silo genellikle daha b�y�k ve uzun s�reli stok i�in, bunker ise prosese yak1n tampon besleme i�in kullan1l1r."),
      faq("Mikro dozaj sistemlerinde hangi ekipmanlar tercih edilir?", "Tart1ml1 helezonlar, k���k dozaj bunkerleri ve loadcell tabanl1 ��z�mler yayg1n olarak kullan1l1r."),
      faq("Ta_1ma hatt1 toz kontrol� neden �nemlidir?", "�r�n kayb1n1, saha kirliliini ve i_ g�venlii risklerini azalt1r; ayr1ca dozaj doruluunu korur."),
    ],
    internalLinks: [
      { label: "Ta_1ma Ekipmanlar1", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Konvey�r Hesaplar1", href: "/programlar/konveyor-kapasite-hesabi" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedContents: [
      machineGuideCards.mining,
      machineGuideCards.granularFertilizer,
      machineGuideCards.packaging,
    ],
    relatedServices: [
      { title: "G�bre Tesisi Kurulumu", description: "Dozaj ve ta_1ma altyap1s1 youn projelerimizi inceleyin.", href: "/hizmetler/gubre-tesisi-kurulumu" },
      { title: "Makinalar & Ekipman", description: "T�m ta_1ma ekipman gruplar1n1 g�r�n.", href: "/makinalar-ekipman" },
    ],
    nextContent: machineGuideCards.sludge,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "atik-su-camuru-ve-aritma-makinalari",
    title: "At1k Su �amuru ve Ar1tma Makinalar1",
    metaTitle:
      "At1k Su �amuru ve Ar1tma Makinalar1 | �amur Kurutma, Stabilizasyon ve Kompost Sistemleri",
    description:
      "Ar1tma �amuru, belediye �amuru ve digestat gibi y�ksek nemli malzemeler i�in kurutma, stabilizasyon, kar1_t1rma, ta_1ma ve koku kontrol ekipmanlar1n1 inceleyin.",
    heroDescription:
      "At1k su �amuru ve y�ksek nemli ak1_larda kullan1lan besleme, kar1_t1rma, kurutma ve gaz kontrol ekipmanlar1n1 anlatan sekt�r rehberi.",
    sections: [
      section(
        "Ar1tma �amuru proseslerinde makine se�imi neden kritiktir?",
        [
          "Ar1tma �amuru proseslerinde makine se�imi, klasik d�kme kat1 hatlar1na g�re �ok daha hassas kararlar gerektirir. ��nk� bu ak1_lar y�ksek nemli, yap1_kan, kokulu ve bazen biyolojik risk ta_1yan malzemelerden olu_ur.",
          "Yanl1_ ekipman se�imi yaln1z kapasite d�_�_� yaratmaz; t1kanma, koku yay1l1m1, bak1m s1kl11 ve operat�r g�venlii sorunlar1n1 da art1r1r. Bu nedenle �amur hatlar1, besleme ve ta_1ma mant11ndan gaz kontrol�ne kadar b�t�nc�l okunmal1d1r.",
        ],
      ),
      section(
        "�amur besleme ve ta_1ma ekipmanlar1",
        [
          "�amur besleme bunkerleri, helezon konvey�rler ve kapal1 transfer hatlar1, y�ksek nemli malzemenin kontroll� y�netilmesini salar. Serbest ak1_l1 olmayan �r�nlerde besleme noktas1 tasar1m1 b�y�k �nem ta_1r.",
          "Bunker �1k1_ a�1s1, helezon tipi, _aft dayan1m1 ve s1zd1rmazl1k detaylar1 iyi kurgulanmal1d1r. Aksi durumda malzeme k�pr�le_ir veya hatta yap1_arak kapasite kayb1na yol a�ar.",
        ],
      ),
      section(
        "Kar1_t1rma ve _artland1rma sistemleri",
        [
          "�amur ak1_lar1nda _artland1rma veya ta_1y1c1 kuru malzeme ile kar1_t1rma ihtiyac1 s1k g�r�l�r. Bu sayede hem daha iyi i_lenebilir bir kar1_1m elde edilir hem de kurutma veya stabilizasyon a_amas1 daha verimli hale gelir.",
          "Kar1_t1r1c1 se�imi; �r�n�n viskozitesine, katk1 oran1na ve istenen homojenlie g�re yap1lmal1d1r. S1y1r1c1, �zel palet ve bak1m eri_imi burada �nemli m�hendislik detaylar1d1r.",
        ],
      ),
      section(
        "Kurutma tamburu ile nem d�_�rme",
        [
          "Ar1tma �amurunun bertaraf maliyetini d�_�rmek veya sonraki deerlendirme s�re�lerine uygun hale getirmek i�in nem d�_�rme kritik bir ad1md1r. Kurutma tamburu, doru besleme ve gaz hatt1 ile birlikte �amur proseslerinde g��l� bir ��z�m sunabilir.",
          "Ancak giri_ nemi �ok y�ksek olan ak1_larda �n susuzla_t1rma veya ta_1y1c1 malzeme ile kar1_t1rma gerekebilir. Kurutma hatt1 tasarlan1rken yap1_ma, topaklanma ve koku kontrol� mutlaka dikkate al1nmal1d1r.",
        ],
      ),
      section(
        "Sterilizasyon ve stabilizasyon tamburlar1",
        [
          "Baz1 �amur hatlar1nda yaln1z nem d�_�rmek deil, ayn1 zamanda hijyenizasyon veya stabilizasyon hedeflenir. Bu durumda sterilizasyon veya stabilizasyon tamburlar1, belirli s1cakl1k ve temas s�resi gereksinimlerine g�re tasarlan1r.",
          "Temas s�resi, s1cakl1k seviyesi ve gaz kontrol ihtiyac1 bu ekipmanlarda temel tasar1m parametreleridir. �zellikle koku ve buhar y�netimi i�in kapal1 sistem yakla_1m1 tercih edilir.",
        ],
      ),
      section(
        "Koku ve gaz kontrol sistemleri",
        [
          "�amur proseslerinde en hassas saha ba_l1klar1ndan biri koku ve gaz kontrol�d�r. Negatif bas1n�l1 toplama, scrubber, biyofiltre, siklon ve filtre kombinasyonlar1 hat i�inde farkl1 noktalarda deerlendirilir.",
          "Koku kontrol�; at1k kabul, kar1_t1rma, tambur ve bo_altma noktalar1 birlikte ele al1nmadan verimli �al1_maz. Bu nedenle gaz y�netimi ana proses tasar1m1n1n i�ine dahil edilmelidir.",
        ],
      ),
      section(
        "Siklon, filtre, scrubber ve biyofiltre ��z�mleri",
        [
          "Siklon sistemleri iri partik�l y�k�n� azalt1rken, jet pulse filtreler daha ince tozun tutulmas1n1 salar. Gaz i�inde koku veya kimyasal y�k varsa scrubber ve biyofiltre gibi ek ar1tma sistemleri devreye al1nabilir.",
          "Bu sistemlerin se�imi yap1l1rken s1cakl1k, nem, partik�l yap1s1 ve hedef emisyon seviyesi birlikte deerlendirilmelidir. Y�ksek nemli gazlarda t1kanma riski ayr1ca dikkate al1nmal1d1r.",
        ],
      ),
      section(
        "Kurutulmu_ �amurdan kompost veya yak1t haz1rlama",
        [
          "Baz1 projelerde kurutulmu_ �amur, kompost bile_eni veya alternatif yak1t haz1rlama s�recinin par�as1 olarak deerlendirilir. Bu durumda eleme, kar1_t1rma, stoklama ve paketleme altyap1s1 da devreye girer.",
          "Son �r�n senaryosu ba_tan tan1mlan1rsa, kurutma ve stabilizasyon hatt1 ona g�re optimize edilebilir. B�ylece tesis yaln1z bertaraf odakl1 deil, deer kazan1m1 odakl1 tasarlan1r.",
        ],
      ),
      section(
        "�amur kurutma hatt1nda otomasyon ve g�venlik",
        [
          "�amur hatlar1nda s1cakl1k, nem, motor y�kleri ve gaz ak1_1 gibi parametrelerin izlenmesi g�venli i_letme i�in �nemlidir. Otomasyon yaln1z verim art1rmaz; operat�r m�dahalesi gereken riskli durumlar1 da azalt1r.",
          "�zellikle y�ksek s1cakl1k ve koku/gaz i�eren hatlarda alarm y�netimi, bas1n� kontrol� ve motor ak1m1 takibi kritik rol oynar.",
        ],
      ),
      section(
        "Pro Makina ile ar1tma �amuru proses ��z�mleri",
        [
          "Pro Makina, ar1tma �amuru ve benzeri y�ksek nemli ak1_larda besleme, kurutma, stabilizasyon ve gaz kontrol� ekipmanlar1n1 ayn1 hat mant11nda projelendirir. B�ylece proses yaln1z teknik olarak deil, saha i_letmesi a�1s1ndan da daha kontroll� hale gelir.",
          "�amur prosesiniz i�in uygun makine zincirini ve �n hesap yakla_1m1n1 birlikte deerlendirmek isterseniz teknik g�r�_me ile ilerleyebiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("Y�ksek Nem", "Besleme ve kurutma ekipmanlar1 �r�n davran1_1na g�re se�ilmelidir.", "T1kanma ve enerji t�ketimini etkiler."),
      row("Koku/Gaz", "Gaz kontrol sistemi proje ba_1nda tasarlanmal1d1r.", "�evresel uyumu ve saha g�venliini belirler."),
      row("Stabilizasyon", "Yaln1z kurutma deil, hijyenizasyon hedefi de ekipman se�imini dei_tirir.", "Son �r�n senaryosunu belirler."),
      row("Otomasyon", "S1cakl1k ve y�k izleme riskli �al1_ma ko_ullar1nda �nemlidir.", "0_letme g�venliini art1r1r."),
    ],
    faqs: [
      faq("�amur kurutmada en b�y�k risk nedir?", "Y�ksek nemli ve yap1_kan ak1_1n hatta t1kanma, topaklanma ve y�ksek enerji t�ketimi yaratmas1d1r."),
      faq("Sterilizasyon tamburu ile kurutma tamburu ayn1 _ey midir?", "Hay1r. Baz1 projelerde benzer ekipman yap1s1 kullan1lsa da hedef s1cakl1k, temas s�resi ve gaz kontrol� farkl1d1r."),
      faq("�amur hatt1nda scrubber ne zaman gerekir?", "Koku, korozif gaz veya �zel emisyon gereksinimi olan projelerde deerlendirilebilir."),
      faq("Kurutulmu_ �amur ticari �r�ne d�n�_ebilir mi?", "Uygulamaya bal1 olarak kompost girdisi, yak1t veya �zel son �r�n senaryolar1 m�mk�nd�r; detay m�hendislik gerekir."),
      faq("0lk teklif i�in hangi veriler gerekir?", "Saatlik tonaj, giri_ nemi, son �r�n hedefi, koku/gaz beklentisi ve saha k1s1tlar1 ilk teknik deerlendirme i�in yeterlidir."),
    ],
    internalLinks: [
      { label: "�amur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Tambur Hesaplar1", href: "/programlar/tambur-hesaplari" },
    ],
    relatedContents: [
      machineGuideCards.compost,
      machineGuideCards.thermal,
      machineGuideCards.biogas,
    ],
    relatedServices: [
      { title: "�amur Kurutma Tesisi", description: "Ar1tma �amuru proses ��z�mlerimizi inceleyin.", href: "/hizmetler/camur-kurutma-tesisi" },
      { title: "At1k Su �amuru ve Ar1tma ��z�mleri", description: "Sekt�rel yakla_1m1m1z1 g�r�n.", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
    ],
    nextContent: machineGuideCards.biogas,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "biyogaz-on-islem-ve-ogutme-makinalari",
    title: "Biyogaz �n 0_lem ve ��tme Makinalar1",
    metaTitle:
      "Biyogaz �n 0_lem ve ��tme Makinalar1 | At1k Haz1rlama, Par�alama ve Besleme Sistemleri",
    description:
      "Biyogaz tesislerinde hayvansal, tar1msal ve organik at1klar1n �n i_lem, par�alama, kar1_t1rma, ta_1ma ve besleme proseslerinde kullan1lan makineleri inceleyin.",
    heroDescription:
      "Biyogaz �n i_lem hatlar1nda kullan1lan kabul, par�alama, kar1_t1rma ve besleme ekipmanlar1n1 s�re� verimi oda1nda anlatan rehber.",
    sections: [
      section(
        "Biyogaz tesislerinde �n i_lem neden �nemlidir?",
        [
          "Biyogaz tesislerinde �n i_lem b�l�m�, reakt�re girecek malzemenin fiziksel ve operasyonel olarak uygun hale getirilmesini salar. Yabanc1 madde, iri par�a, d�zensiz nem veya dengesiz besleme biyogaz verimini ve i_letme g�venliini dorudan etkileyebilir.",
          "Bu nedenle �n i_lem hatt1 yaln1z yard1mc1 b�l�m deil, tesis veriminin ana bile_enlerinden biridir. Par�alama, kar1_t1rma, ta_1ma ve besleme ekipmanlar1 ayn1 malzeme davran1_ mant11nda se�ilmelidir.",
        ],
      ),
      section(
        "Organik at1k kabul ve besleme ekipmanlar1",
        [
          "At1k kabul bunkerleri, farkl1 organik ak1_lar1n kontroll� bi�imde sisteme al1nmas1n1 salar. Besleme d�zensizlii olu_ursa downstream ekipmanlar a_1r1 y�klenebilir veya reakt�r beslemesi istikrars1z hale gelebilir.",
          "Bunker tasar1m1nda y�kleme _ekli, yabanc1 madde riski, k�pr�le_me ve alt de_arj ekipmanlar1 birlikte deerlendirilmelidir. �zellikle lifli ve heterojen at1klarda bu detaylar kritik hale gelir.",
        ],
      ),
      section(
        "Shredder ve par�alay1c1 sistemleri",
        [
          "Biyogaz �n i_lem hatlar1nda shredder sistemleri, iri ve kar1_1k organik at1klar1n kontroll� bi�imde k���lt�lmesi i�in kullan1l1r. Ama� yaln1z boyut k���ltmek deil, kar1_t1rma ve pompalanabilirlik i�in daha uygun bir yap1 olu_turmakt1r.",
          "Par�alay1c1 se�imi; yabanc1 madde riski, istenen par�a boyutu, bak1m kolayl11 ve g�nl�k tonaja g�re yap1lmal1d1r. A_1r1 agresif par�alama bazen gereksiz enerji y�k� ve bak1m dourabilir.",
        ],
      ),
      section(
        "��tme ve boyut k���ltme ekipmanlar1",
        [
          "Baz1 biyogaz hatlar1nda ince ��tme gerekmese de, belirli at1k t�rlerinde daha homojen bir ak1_ i�in ek boyut k���ltme ekipmanlar1 devreye al1nabilir. �eki�li k1r1c1 veya b1�akl1 sistemler bu ama�la kullan1labilir.",
          "Bu karar, reakt�r tipi, pompalama sistemi ve hedef kuru madde y�netimiyle birlikte deerlendirilmelidir. Her biyogaz tesisi i�in ayn1 ��tme _iddeti uygun deildir.",
        ],
      ),
      section(
        "Kar1_t1rma ve homojenizasyon tanklar1",
        [
          "Kar1_t1rma tanklar1 veya _artland1rma �niteleri, farkl1 organik ak1_lar1n reakt�re daha dengeli verilmesini salar. Nem ve kat1 madde da1l1m1n1n daha tutarl1 hale gelmesi, biyogaz proses verimini olumlu etkiler.",
          "Kar1_t1rma ekipmanlar1 se�ilirken viskozite, lif yap1s1 ve partik�l boyutu g�z �n�nde bulundurulmal1d1r. Tahrik g�c� ve bak1m eri_imi biyogaz hatlar1nda �zellikle �nemlidir.",
        ],
      ),
      section(
        "Helezon, pompa ve konvey�r sistemleri",
        [
          "�n i_lem hatt1n1n mekanik omurgas1n1 helezonlar, konvey�rler ve uygun durumlarda pompa sistemleri olu_turur. Kat1 ve yar1 ak1_kan malzemenin hatta kesintisiz ilerlemesi i�in ekipman ge�i_leri iyi kurgulanmal1d1r.",
          "Ta_1ma ekipmanlar1n1n biri dierini bomamal1; bunker, shredder, kar1_t1r1c1 ve reakt�r beslemesi tek ritimde �al1_mal1d1r. Bu nedenle kapasite plan1 b�t�n hat i�in yap1lmal1d1r.",
        ],
      ),
      section(
        "Yabanc1 madde ay1rma ve proses g�venlii",
        [
          "Metal, ta_, plastik veya istenmeyen iri par�alar biyogaz �n i_lem hatt1nda ciddi mekanik risk yarat1r. Manyetik ay1r1c1lar, ay1klama istasyonlar1 ve uygun elek sistemleri proses g�venliini art1r1r.",
          "�zellikle pompa veya reakt�r beslemesi �ncesinde yabanc1 madde kontrol� yap1lmas1, pahal1 duru_lar1n �n�ne ge�ebilir. �n ay1rma kurgusu proje ba_1nda tan1mlanmal1d1r.",
        ],
      ),
      section(
        "Digestat sonras1 kompost ve kurutma hatlar1",
        [
          "Biyogaz sonras1 �1kan digestat, baz1 projelerde kompost veya kurutma hatt1na y�nlendirilir. Bu durumda �n i_lem ekipmanlar1 ile downstream deer kazan1m ekipmanlar1n1n ayn1 yat1r1m senaryosunda d�_�n�lmesi avantaj salar.",
          "Digestat y�netimi ba_tan planlan1rsa biyogaz tesisinin toplam ekonomik �1kt1s1 y�kseltilebilir. �zellikle kurutma, eleme ve kompost entegrasyonu bu noktada �ne �1kar.",
        ],
      ),
      section(
        "Biyogaz tesislerinde ekipman se�iminin verime etkisi",
        [
          "Biyogaz �retimi yaln1z biyolojik reaksiyonla a�1klanamaz; �n i_lem hatt1n1n kararl1l11 toplam verime dorudan etki eder. Dengesiz besleme, iri par�alar veya k�t� kar1_t1r1lm1_ ak1_ reakt�r verimini d�_�r�r.",
          "Bu y�zden ekipman se�imi enerji, bak1m ve proses kararl1l11 a�1s1ndan birlikte deerlendirilmelidir. Doru �n i_lem hatt1, biyogaz tesisinin g�r�nmeyen performans �arpan1d1r.",
        ],
      ),
      section(
        "Pro Makina ile biyogaz �n i_lem ��z�mleri",
        [
          "Pro Makina, biyogaz �n i_lem projelerinde par�alay1c1, besleme, ta_1ma, kar1_t1rma ve digestat y�netimi ekipmanlar1n1 birlikte planlar. B�ylece tesis yaln1z besleme yapabilen deil, s�rd�r�lebilir ak1_ kurabilen bir yap1ya kavu_ur.",
          "Biyogaz �n i_lem hatt1n1z i�in makine se�imini ve hat ak1_1n1 birlikte deerlendirmek isterseniz teknik g�r�_me ile ilerleyebiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("�n 0_lem", "Reakt�re girecek ak1_1n fiziksel kalitesini belirler.", "Biyogaz verimini etkiler."),
      row("Par�alama", "Shredder ve k1r1c1 se�imi malzeme davran1_1na g�re yap1lmal1d1r.", "Bak1m ve pompalanabilirlii etkiler."),
      row("Kar1_t1rma", "Homojenizasyon reakt�r beslemesinin dengesini art1r1r.", "S�re� kararl1l11n1 g��lendirir."),
      row("Digestat Y�netimi", "Sonraki kompost veya kurutma senaryolar1 �nceden planlanmal1d1r.", "Toplam yat1r1m deerini art1r1r."),
    ],
    faqs: [
      faq("Biyogaz tesisinde shredder her zaman gerekir mi?", "Hay1r. At11n boyutu, homojenlii ve reakt�r besleme ko_ullar1 bunu belirler."),
      faq("�n i_lem hatt1nda kar1_t1rma neden �nemlidir?", "Daha dengeli besleme, daha stabil reakt�r davran1_1 ve ekipman y�k�n�n azalmas1 i�in �nemlidir."),
      faq("Manyetik ay1r1c1 biyogaz hatt1nda gerekli midir?", "Metal riski olan at1klarda �ok faydal1d1r ve downstream ekipmanlar1n korunmas1na yard1mc1 olur."),
      faq("Digestat kurutma ve kompost hatt1 birlikte planlanabilir mi?", "Evet. �zellikle deer kazan1m hedeflenen projelerde ayn1 m�hendislik senaryosunda ele al1nabilir."),
      faq("Biyogaz �n i_lem i�in hangi veriler gerekir?", "At1k t�r�, g�nl�k tonaj, nem aral11, yabanc1 madde riski ve besleme senaryosu ba_lang1� i�in yeterlidir."),
    ],
    internalLinks: [
      { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "K1r1c1lar ve Par�alay1c1lar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Ta_1ma Ekipmanlar1", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedContents: [
      machineGuideCards.compost,
      machineGuideCards.sludge,
      machineGuideCards.conveying,
    ],
    relatedServices: [
      { title: "Enerji ve Biyogaz Sistemleri", description: "Sekt�rel ��z�m yakla_1m1m1z1 inceleyin.", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { title: "Makinalar & Ekipman", description: "0lgili ekipman ailelerini tek merkezden g�r�n.", href: "/makinalar-ekipman" },
    ],
    nextContent: machineGuideCards.chemical,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "kimya-ve-proses-endustrisi-ekipmanlari",
    title: "Kimya ve Proses End�strisi Ekipmanlar1",
    metaTitle:
      "Kimya ve Proses End�strisi Ekipmanlar1 | Reakt�r, Tank, Filtre ve Proses Sistemleri",
    description:
      "Kimya ve proses end�strisinde kullan1lan reakt�rler, kar1_t1r1c1 tanklar, filtrasyon sistemleri, pompa hatlar1, dozajlama ve otomasyon ekipmanlar1n1 inceleyin.",
    heroDescription:
      "Kimya ve proses tesislerinde kullan1lan reakt�r, tank, filtre, e_anj�r ve otomasyon bile_enlerini m�hendislik yakla_1m1yla anlatan rehber.",
    sections: [
      section(
        "Kimya ve proses tesislerinde ekipman se�imi",
        [
          "Kimya ve proses tesislerinde ekipman se�imi, �r�n kalitesi kadar g�venlik ve s�reklilik a�1s1ndan da belirleyicidir. Basit g�r�nen bir tank veya pompa tercihi; reaksiyon kontrol�, temizlik, bak1m ve proses g�venlii �zerinde b�y�k etki yaratabilir.",
          "Bu y�zden reakt�r, tank, filtrasyon, borulama ve otomasyon bile_enleri ayr1 ayr1 deil; bir proses sistemi olarak deerlendirilmelidir. �r�n kimyas1 ve �al1_ma senaryosu bu kararlar1n merkezindedir.",
        ],
      ),
      section(
        "Reakt�rler ve kar1_t1r1c1l1 tanklar",
        [
          "Reakt�rler, kimyasal d�n�_�m veya kontroll� ��z�nd�rme gereken hatlarda ana ekipman rol�n� �stlenir. Kar1_t1r1c1l1 tanklar ise homojenizasyon, tampon stok veya basit proses ad1mlar1nda devreye girer.",
          "Tank geometrisi, kar1_t1r1c1 tipi, devir aral11, baffle yap1s1 ve malzeme uyumu �r�n kalitesini dorudan etkiler. Is1tma veya soutma gerekiyorsa ceketli yap1 tasar1m1 ayr1ca �nem kazan1r.",
        ],
      ),
      section(
        "Bas1n�l1 ve atmosferik proses tanklar1",
        [
          "Baz1 prosesler atmosferik tanklarda rahatl1kla y�r�t�l�rken, baz1lar1 belirli bas1n� ve s1cakl1k s1n1rlar1 i�inde kontrol edilmelidir. Bu ayr1m, tank g�vdesi kal1nl11ndan emniyet ekipmanlar1na kadar bir�ok tasar1m karar1n1 dei_tirir.",
          "Bas1n�l1 sistemlerde emniyet ventilleri, sens�r entegrasyonu ve test prosed�rleri kritik rol oynar. Atmosferik tanklarda ise kar1_t1rma, seviye kontrol� ve bak1m eri_imi daha fazla �n plana �1kar.",
        ],
      ),
      section(
        "Dozajlama ve hammadde besleme sistemleri",
        [
          "Kimya hatlar1nda hammadde besleme doruluu, �r�n tutarl1l11n1 belirleyen ana unsurlardand1r. S1v1 dozaj pompalar1, helezon besleyiciler, tart1m sistemleri ve vana adalar1 bu yap1n1n �nemli par�alar1d1r.",
          "Hammadde agresif veya viskoz ise pompa malzemesi, conta yap1s1 ve hat �aplar1 ayr1ca deerlendirilmelidir. Dozaj senaryolar1 otomasyon yaz1l1m1yla birlikte tasarlanmal1d1r.",
        ],
      ),
      section(
        "Filtrasyon ve ayr1_t1rma ekipmanlar1",
        [
          "Filtre sistemleri, �r�n i�indeki istenmeyen partik�llerin ayr1lmas1 ve downstream ekipmanlar1n korunmas1 i�in kullan1l1r. Torba, kartu_ veya �zel ayr1_t1rma sistemleri prosesin hassasiyetine g�re se�ilir.",
          "Filtrasyon se�iminde viskozite, s1cakl1k, partik�l boyutu ve temizlik ihtiyac1 �nemlidir. Gereksiz dar filtre se�imi �retim h1z1n1 d�_�rebilir; yetersiz filtre se�imi ise kalite sorunlar1na yol a�abilir.",
        ],
      ),
      section(
        "Homojenizasyon ve kalite dengeleme",
        [
          "Bir�ok kimyasal proseste son �r�n�n her partide ayn1 karakterde olmas1 gerekir. Homojenizasyon ekipmanlar1 ve sirk�lasyon hatlar1, younluk veya partik�l da1l1m1n1 dengeleyerek �r�n standard1n1 korur.",
          "�zellikle katk1 i�eren veya �ok bile_enli kar1_1mlarda bu a_ama son kaliteyi belirler. Tank i�inde �l� hacim b1rakmayan geometri �nemli avantaj salar.",
        ],
      ),
      section(
        "Pompa, vana ve borulama entegrasyonu",
        [
          "Pompa, vana ve borulama a1 �ou zaman g�r�n�rde yard1mc1 unsur gibi dursa da proses g�venliini ve bak1m kolayl11n1 belirleyen temel altyap1d1r. Yanl1_ vana noktalar1 veya yetersiz drenaj, i_letme s1ras1nda ciddi sorun �1karabilir.",
          "Hat i�i debi, bas1n� ve kimyasal uyum a�1s1ndan b�t�n sistem birlikte deerlendirilmelidir. K�r noktalar1n azalt1lmas1 ve CIP/temizlik senaryosunun d�_�n�lmesi �nemlidir.",
        ],
      ),
      section(
        "Paslanmaz, galvaniz ve RAL boyal1 ekipman tasar1m1",
        [
          "Malzeme se�imi, kimyasal proses ekipmanlar1nda �m�r ve g�venlik �zerinde belirleyici etkidedir. Paslanmaz �elik, galvaniz veya boyal1 karbon �elik se�enekleri �r�n�n kimyas1na ve saha ko_ullar1na g�re deerlendirilir.",
          "Hijyen, korozyon dayan1m1, s1cakl1k ve temizlik prosed�rleri bu karar1n temel girdileridir. Baz1 projelerde hibrit malzeme yakla_1m1 en uygun ��z�m olabilir.",
        ],
      ),
      section(
        "Otomasyon, sens�r ve proses kontrol sistemleri",
        [
          "Kimyasal proses hatlar1nda sens�rler ve otomasyon, yaln1z kolayl1k deil g�venlik unsurudur. S1cakl1k, bas1n�, seviye, pH ve debi gibi parametrelerin izlenmesi proses kontrol�n� g��lendirir.",
          "PLC ve HMI destekli sistemler, alarm y�netimi ve re�ete takibi sayesinde hem kaliteyi hem izlenebilirlii art1r1r. �zellikle �ok �r�nl� veya hassas proseslerde b�y�k avantaj salar.",
        ],
      ),
      section(
        "Pro Makina ile kimyasal proses ��z�mleri",
        [
          "Pro Makina, kimya ve proses end�strisi ekipmanlar1n1 proses mant11, malzeme uyumu ve saha uygulanabilirlii �zerinden projelendirir. Reakt�r, tank, filtre, pompa ve otomasyon bile_enleri tek sistem olarak ele al1n1r.",
          "Kimyasal �retim hatt1n1z i�in doru ekipman kombinasyonunu belirlemek istiyorsan1z, �n m�hendislik yakla_1m1yla birlikte ilerleyebiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("Malzeme Uyumu", "Paslanmaz, kaplama veya farkl1 �elik se�enekleri �r�n kimyas1na g�re belirlenir.", "G�venlii ve �mr� etkiler."),
      row("Reakt�r/Tank", "Kar1_t1rma ve hacim se�imi �r�n kalitesini belirler.", "Proses tekrar edilebilirliini salar."),
      row("Filtrasyon", "�r�n standard1 ve ekipman korumas1 i�in kritik a_amad1r.", "Kalite ve bak1m performans1n1 etkiler."),
      row("Otomasyon", "Sens�r ve re�ete takibi proses g�venliini g��lendirir.", "Operasyonel hatay1 azalt1r."),
    ],
    faqs: [
      faq("Her kimyasal proses i�in reakt�r gerekir mi?", "Hay1r. Baz1 hatlarda kar1_t1r1c1l1 tank yeterliyken, baz1 uygulamalar reaksiyon veya bas1n� kontrol� nedeniyle reakt�r gerektirir."),
      faq("Paslanmaz tank se�imi neye g�re yap1l1r?", "Kimyasal uyum, s1cakl1k, temizlik gereksinimi ve hijyen beklentisine g�re belirlenir."),
      faq("Otomasyon zorunlu mudur?", "Temel �retim elle de yap1labilir; ancak kalite tekrar edilebilirlii ve g�venlik artt1k�a otomasyonun deeri y�kselir."),
      faq("Pompa ve vana se�imi neden bu kadar �nemlidir?", "��nk� kimyasal uyumsuzluk, s1zd1rma veya hatal1 debi t�m proses dengesini bozabilir."),
      faq("0lk teknik teklif i�in hangi bilgiler gerekir?", "�r�n tipi, kapasite, kar1_1m mant11, s1cakl1k beklentisi ve temel proses ak1_1 ba_lang1� i�in yeterlidir."),
    ],
    internalLinks: [
      { label: "Reakt�rler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedContents: [
      machineGuideCards.liquidFertilizer,
      machineGuideCards.packaging,
      machineGuideCards.conveying,
    ],
    relatedServices: [
      { title: "S1v1 G�bre �retim Tesisi", description: "Kimyasal proses hatlar1na yak1n hizmetimizi inceleyin.", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { title: "Kimya ve Proses End�strisi", description: "Sekt�r ��z�m yakla_1m1m1z1 g�r�n.", href: "/sektorler/kimya-ve-proses-endustrisi" },
    ],
    nextContent: machineGuideCards.packaging,
    ctaText: COMMON_CTA_TEXT,
  }),
  article({
    slug: "paketleme-dolum-ve-son-urun-hazirlama-sistemleri",
    title: "Paketleme, Dolum ve Son �r�n Haz1rlama Sistemleri",
    metaTitle:
      "Paketleme, Dolum ve Son �r�n Haz1rlama Sistemleri | Torbalama, Big Bag ve S1v1 Dolum",
    description:
      "Gran�l, toz, kompost, g�bre ve s1v1 �r�nlerin paketleme, torbalama, big bag dolum, s1v1 dolum, etiketleme ve son �r�n haz1rlama sistemlerini inceleyin.",
    heroDescription:
      "Son �r�n haz1rlama, torbalama, big bag, s1v1 dolum ve etiketleme sistemlerini �r�n g�venlii ve ticari kalite perspektifiyle anlatan rehber.",
    sections: [
      section(
        "Son �r�n haz1rlama hatt1 neden �nemlidir?",
        [
          "Bir �retim hatt1nda son �r�n haz1rlama b�l�m�, fabrikan1n m�_teriye dokunduu son a_amad1r. �r�n ne kadar doru �retilmi_ olursa olsun, paketleme ve dolum hatt1 zay1fsa ticari kalite, sevkiyat disiplini ve m�_teri memnuniyeti olumsuz etkilenir.",
          "Bu y�zden torbalama, big bag, s1v1 dolum, etiketleme ve son kalite kontrol sistemleri �retimin doal uzant1s1 olarak g�r�lmelidir. Tart1m doruluu ve �r�n ak1_ kararl1l11 burada temel belirleyicidir.",
        ],
      ),
      section(
        "A�1k a1z torbalama sistemleri",
        [
          "A�1k a1z torbalama sistemleri, gran�l ve toz �r�nlerin kontroll� _ekilde standart torbalara doldurulmas1 i�in kullan1l1r. G�bre, mineral toz ve kompost bazl1 �r�nlerde yayg1n bir ��z�md�r.",
          "Bu sistemlerde tart1m hassasiyeti, torba yerle_tirme ergonomisi ve �r�n ak1_1n1n kesintisiz olmas1 �nemlidir. Tozlu �r�nlerde lokal aspirasyon ve operat�r g�venlii ayr1ca dikkate al1nmal1d1r.",
        ],
      ),
      section(
        "Big bag dolum sistemleri",
        [
          "Big bag dolum sistemleri, y�ksek tonajl1 sevkiyat veya end�striyel t�ketim senaryolar1nda tercih edilir. Dolum az1n1n stabil tutulmas1, kanca geometrisi ve torba sarsma yap1s1 g�venli kullan1m i�in �nemlidir.",
          "�r�n ak1_1n1n kontroll� olmas1 ve tart1m doruluu, ticari sevkiyat a�1s1ndan belirleyici olur. �zellikle gran�l �r�nlerde doldurma s1ras1nda �r�n k1r1lmas1n1 minimize etmek gerekir.",
        ],
      ),
      section(
        "S1v1 dolum ve _i_eleme makinalar1",
        [
          "S1v1 dolum makinalar1, s1v1 g�bre ve kimyasal �r�nlerin _i_e, bidon veya farkl1 ambalajlara hassas doldurulmas1n1 salar. Dolum tipi, �r�n viskozitesi ve hedef ambalaj boyutuna g�re belirlenir.",
          "^i_e ak1_1, k�p�rme davran1_1, dolum nozulu ve otomatik stop/start mant11 tasar1m1n temel par�alar1d1r. Son kullan1c1ya giden kalite alg1s1 �ou zaman bu noktada _ekillenir.",
        ],
      ),
      section(
        "^i_e etiketleme ve kapaklama sistemleri",
        [
          "Etiketleme ve kapaklama sistemleri, �r�n�n pazara haz1r hale gelmesini tamamlar. G�rsel doruluk, seri numaras1 takibi ve d�zg�n kapaklama lojistik ve sat1_ sonras1 s�re�leri etkiler.",
          "Makine se�imi yap1l1rken ambalaj �e_itlilii, etiket boyutlar1 ve hat h1z1 birlikte deerlendirilmelidir. Entegrasyon zay1fsa dolum hatt1nda s1k duru_lar olu_abilir.",
        ],
      ),
      section(
        "Eleme, soutma ve son kalite kontrol",
        [
          "Gran�l �r�nlerde paketleme �ncesi eleme ve soutma ad1mlar1, son �r�n kararl1l11 a�1s1ndan kritik rol oynar. S1cak veya fazla ince �r�n paketlenirse hem torba i�inde problem �1kar hem de m�_teri taraf1nda kalite alg1s1 d�_er.",
          "Bu y�zden son �r�n haz1rlama hatt1 �ou zaman elek, soutma tamburu ve tart1m sistemleriyle birlikte kurgulan1r. Kalite kontrol noktalar1 ba_tan tan1mlanmal1d1r.",
        ],
      ),
      section(
        "Tart1m hassasiyeti ve dozaj doruluu",
        [
          "Paketleme hatt1n1n en kritik �1kt1lar1ndan biri tart1m doruluudur. Eksik veya fazla dolum ticari kay1p yaratt11 gibi m�_teri g�venini de etkiler.",
          "Doru loadcell se�imi, �r�n ak1_ kontrol� ve vibrasyon y�netimi bu alanda �nemlidir. H1z artt1k�a hassasiyetin korunmas1 i�in yaz1l1m ve mekanik tasar1m birlikte d�_�n�lmelidir.",
        ],
      ),
      section(
        "Toz kontrol� ve operat�r g�venlii",
        [
          "Paketleme alanlar1 �zellikle tozlu �r�nlerde saha hijyeni ve i_ g�venlii a�1s1ndan riskli olabilir. Toz emi_ noktalar1, lokal filtreleme ve s1zd1rmaz balant1lar bu nedenle �nemlidir.",
          "Operat�r ergonomisi, torba dei_tirme kolayl11 ve temizlik senaryosu da sistem tasar1m1n1n bir par�as1 olmal1d1r. Sadece makine deil, �evresindeki �al1_ma alan1 da planlanmal1d1r.",
        ],
      ),
      section(
        "Depolama, sevkiyat ve paletleme entegrasyonu",
        [
          "Paketleme hatt1 depo ve sevkiyat ak1_1ndan ba1ms1z d�_�n�lemez. Dolu torba veya _i_elerin konvey�rle �1k1_1, paletleme haz1rl11 ve sevkiyat alan1na transferi b�t�n sistemin ritmini etkiler.",
          "Y�ksek tonajl1 tesislerde paletleme veya ara stok ��z�m� de deerlendirilebilir. B�ylece dolum hatt1 durmadan sevkiyat operasyonu ayr1 ak1_ta s�rd�r�lebilir.",
        ],
      ),
      section(
        "Pro Makina ile paketleme ve dolum ��z�mleri",
        [
          "Pro Makina, paketleme ve dolum sistemlerini ana proses hatt1n1n devam1 olarak projelendirir. Torbalama, big bag, s1v1 dolum, etiketleme ve ta_1ma ekipmanlar1 birlikte deerlendirilerek daha dengeli �1k1_ hatlar1 olu_turulur.",
          "Son �r�n haz1rlama hatt1n1z i�in doru makine dizilimini ve kapasite yakla_1m1n1 birlikte deerlendirmek isterseniz teknik �n g�r�_me planlayabiliriz.",
        ],
      ),
    ],
    summaryRows: [
      row("Torbalama", "Gran�l ve toz �r�nlerde standart ve g�venli �1k1_ salar.", "Sevkiyat h1z1n1 belirler."),
      row("Dolum Hassasiyeti", "Doru tart1m ve ak1_ kontrol� ticari kaliteyi etkiler.", "�r�n kayb1n1 ve m�_teri _ikayetini azalt1r."),
      row("Toz Kontrol�", "Paketleme alan1nda lokal aspirasyon �nemlidir.", "Operat�r g�venlii ve saha temizlii salar."),
      row("Sevkiyat Entegrasyonu", "Paketleme hatt1 depolama ve paletleme ile birlikte planlanmal1d1r.", "Toplam hat verimini art1r1r."),
    ],
    faqs: [
      faq("A�1k a1z torbalama ile big bag dolum aras1nda nas1l se�im yap1l1r?", "Bu se�im m�_teri tipi, sevkiyat senaryosu, tonaj ve �r�n sunum stratejisine g�re yap1l1r."),
      faq("S1v1 dolum hatt1nda en kritik konu nedir?", "Ambalaj tipiyle uyumlu dolum hassasiyeti ve �r�n�n k�p�rme/viskozite davran1_1d1r."),
      faq("Gran�l �r�n paketlemeden �nce neden soutulmal1d1r?", "S1cak �r�n torba i�inde terleme, yap1_ma veya kalite kayb1na neden olabilir."),
      faq("Paketleme hatt1nda filtre gerekir mi?", "Tozlu �r�nlerde �ou zaman evet. Operat�r g�venlii ve saha temizlii i�in lokal aspirasyon �nerilir."),
      faq("Son �r�n haz1rlama hatt1 i�in hangi veriler gerekir?", "Saatlik kapasite, �r�n tipi, ambalaj formu, dolum a1rl11 ve sevkiyat senaryosu ilk deerlendirme i�in yeterlidir."),
    ],
    internalLinks: [
      { label: "Paketleme ve Dolum Sistemleri", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Ta_1ma Ekipmanlar1", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "0leti_im", href: "/iletisim" },
    ],
    relatedContents: [
      machineGuideCards.liquidFertilizer,
      machineGuideCards.granularFertilizer,
      machineGuideCards.conveying,
    ],
    relatedServices: [
      { title: "Gran�l G�bre �retim Tesisi", description: "Paketleme entegrasyonu youn projelerimizi inceleyin.", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { title: "S1v1 G�bre �retim Tesisi", description: "S1v1 dolum hat yakla_1m1m1z1 g�r�n.", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
    ],
    nextContent: machineGuideCards.mining,
    ctaText: COMMON_CTA_TEXT,
  }),
];

function duplicateGuideArticle(
  sourceSlug: string,
  overrides: Partial<TopicalArticle> &
    Pick<TopicalArticle, "slug" | "title" | "metaTitle" | "description" | "heroDescription">,
): TopicalArticle {
  const sourceArticle = baseSectorMachineGuideArticles.find((item) => item.slug === sourceSlug);

  if (!sourceArticle) {
    throw new Error(`Sector machine guide article not found: ${sourceSlug}`);
  }

  return {
    ...sourceArticle,
    ...overrides,
  };
}

export const sectorMachineGuideArticles: TopicalArticle[] = [
  ...baseSectorMachineGuideArticles,
  duplicateGuideArticle("granul-ve-organomineral-gubre-hatlari", {
    slug: "granul-ve-organomineral-gubre-makinalari",
    title: "Gran�l ve Organomineral G�bre Makinalar1",
    metaTitle:
      "Gran�l ve Organomineral G�bre Makinalar1 | Gran�lasyon, Kurutma ve Paketleme Sistemleri",
    description:
      "Gran�l g�bre ve organomineral g�bre �retiminde kullan1lan dozajlama, kar1_t1rma, gran�lasyon, kurutma, soutma, eleme, kaplama ve paketleme makinelerini inceleyin.",
    heroDescription:
      "Gran�l g�bre ve organomineral g�bre �retim hatlar1nda kullan1lan dozajlama, tambur, eleme ve paketleme ekipmanlar1n1 proses ak1_1yla birlikte anlatan kapsaml1 sekt�r rehberi.",
  }),
  duplicateGuideArticle("biyogaz-on-islem-ve-ogutme-makinalari", {
    slug: "biyogaz-on-islem-ve-digestat-makinalari",
    title: "Biyogaz �n 0_lem ve Digestat Makinalar1",
    metaTitle:
      "Biyogaz �n 0_lem ve Digestat Makinalar1 | At1k Haz1rlama, Besleme ve Son �r�n Sistemleri",
    description:
      "Biyogaz tesislerinde hayvansal, tar1msal ve organik at1klar1n �n i_lem, par�alama, kar1_t1rma, ta_1ma, besleme ve digestat deerlendirme proseslerinde kullan1lan makineleri inceleyin.",
    heroDescription:
      "Biyogaz �n i_lem hatt1 ile digestat deerlendirme ekipmanlar1n1 ayn1 proses b�t�nl�� i�inde anlatan, at1k haz1rlama ve son �r�n y�netimine odakl1 teknik sekt�r rehberi.",
  }),
];
