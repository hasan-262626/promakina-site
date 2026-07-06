import type { ServiceSeoPageProps } from "../components/service-seo-page";

type ServicePageRecord = ServiceSeoPageProps;

const commonTechnicalContents = [
  {
    title: "Kurutma Tamburu Hesaplama",
    href: "/kutuphane/blog/kurutma-tamburu-hesaplama",
    description:
      "Tambur boyutlandÄ±rma, nem yÃ¼kÃ¼, hava debisi ve enerji yaklaï¿½xÄ±mÄ±nÄ± teknik aÃ§Ä±dan inceleyin.",
  },
  {
    title: "Helezon KonveyÃ¶r Kapasite HesabÄ±",
    href: "/kutuphane/blog/helezon-konveyor-kapasite-hesabi",
    description:
      "Besleme, transfer ve dozajlama hatlarÄ±nda vida Ã§apÄ±, hatve ve motor mantÄ±ï¿½xÄ±nÄ± gÃ¶rÃ¼n.",
  },
  {
    title: "GranÃ¼l GÃ¼bre ï¿½Sretim SÃ¼reci",
    href: "/kutuphane/blog/granul-gubre-uretim-sureci",
    description:
      "GranÃ¼lasyon, kurutma, soï¿½xutma, eleme ve paketleme akÄ±ï¿½xÄ±nÄ± yatÄ±rÄ±m bakÄ±ï¿½xÄ±yla okuyun.",
  },
  {
    title: "Kompost Tesisi NasÄ±l Kurulur?",
    href: "/kutuphane/blog/kompost-tesisi-kurulumu",
    description:
      "Organik atÄ±k, Ã§amur ve kompost hatlarÄ±nda proses kurgusunun nasÄ±l kurulduï¿½xunu inceleyin.",
  },
];

const servicePages: Record<string, ServicePageRecord> = {
  "kurutma-tamburu-imalati": {
    title: "Kurutma Tamburu Ä°malatÄ± | Rotary Dryer ï¿½!Ã¶zÃ¼mleri",
    description:
      "Kurutma tamburu imalatÄ±, dÃ¶ner kurutucu ve rotary dryer Ã§Ã¶zÃ¼mleri iÃ§in kapasiteye Ã¶zel endÃ¼striyel kurutma tamburu tasarÄ±mÄ± sunuyoruz.",
    canonical: "https://www.promakina.com.tr/hizmetler/kurutma-tamburu-imalati",
    image: "/images/tambur kurutma/tamkurutma1.jpg",
    serviceName: "Kurutma Tamburu Ä°malatÄ±",
    introTitle: "Rotary Dryer ve EndÃ¼striyel Kurutma Tamburu ï¿½!Ã¶zÃ¼mleri",
    introParagraphs: [
      "Kurutma tamburu imalatÄ±, yÃ¼ksek nemli Ã¼rÃ¼nlerin kontrollÃ¼ Ä±sÄ± transferi ile hedef son neme dÃ¼ï¿½xÃ¼rÃ¼lmesini saï¿½xlayan proses mÃ¼hendisliï¿½xi ve aï¿½xÄ±r hizmet tipi makina tasarÄ±mÄ± iï¿½xidir. GÃ¼bre, kompost, mineral, Ã§amur ve farklÄ± dÃ¶kme katÄ± Ã¼rÃ¼nlerde rotary dryer seÃ§imi yalnÄ±z gÃ¶vde Ã§apÄ± ile deï¿½xil; su uÃ§urma yÃ¼kÃ¼, gaz sÄ±caklÄ±ï¿½xÄ±, Ã¼rÃ¼n davranÄ±ï¿½xÄ± ve residence time mantÄ±ï¿½xÄ±yla belirlenir.",
      "Pro Makina, endÃ¼striyel kurutma tamburu Ã§Ã¶zÃ¼mlerinde kapasite hesabÄ±nÄ±, gÃ¶vde Ã¶lÃ§Ã¼lendirmesini, iÃ§ flight tasarÄ±mÄ±nÄ±, fan-siklon-filtre entegrasyonunu ve saha yerleï¿½ximini birlikte deï¿½xerlendirir. BÃ¶ylece yalnÄ±z Ã§alÄ±ï¿½xan bir dÃ¶ner kurutucu deï¿½xil; daha dÃ¼ï¿½xÃ¼k enerji kaybÄ±, daha istikrarlÄ± Ã¼rÃ¼n nemi ve daha gÃ¼venilir bakÄ±m ritmi saï¿½xlayan bÃ¼tÃ¼ncÃ¼l bir kurutma hattÄ± elde edilir.",
    ],
    cardsTitle: "KullanÄ±m AlanlarÄ± ve Ä°lgili Ana Makineler",
    cardsDescription:
      "Kurutma tamburu imalatÄ±, farklÄ± proseslerde farklÄ± yardÄ±mcÄ± ekipmanlarla birlikte dÃ¼ï¿½xÃ¼nÃ¼lmelidir. Aï¿½xaï¿½xÄ±daki baï¿½xlantÄ±lar bu omurgayÄ± hÄ±zla gÃ¶rmenizi saï¿½xlar.",
    cards: [
      {
        title: "Silis Kumu Kurutma",
        description:
          "Kuvars ve silis kumu hatlarÄ±nda dÃ¼ï¿½xÃ¼k son nem ve kararlÄ± tane akÄ±ï¿½xÄ± iÃ§in kurutma kurgusunu inceleyin.",
        href: "/hizmetler/silis-kumu-kurutma-tesisi",
      },
      {
        title: "ï¿½!amur Kurutma Tesisi",
        description:
          "ArÄ±tma Ã§amuru, digestat ve yÃ¼ksek nemli yan Ã¼rÃ¼nlerde termal kurutma yaklaï¿½xÄ±mÄ±nÄ± gÃ¶rÃ¼n.",
        href: "/hizmetler/camur-kurutma-tesisi",
      },
      {
        title: "Jet Pulse Filtreler",
        description:
          "Kurutma tamburunun ardÄ±ndan hava-temizleme ve toz toplama hattÄ±nÄ± tamamlayan filtre Ã§Ã¶zÃ¼mleri.",
        href: "/makinalar-ekipman/toz-toplama-sistemleri",
      },
      {
        title: "Siklon AyÄ±rÄ±cÄ±lar",
        description:
          "ï¿½n ayÄ±rma ve taï¿½xÄ±yÄ±cÄ± gaz hattÄ±nda partikÃ¼l yÃ¼kÃ¼nÃ¼ dÃ¼ï¿½xÃ¼ren siklon entegrasyonunu inceleyin.",
        href: "/makinalar-ekipman/toz-toplama-sistemleri/siklon-ayiricilar",
      },
    ],
    summaryRows: [
      {
        criterion: "Nem YÃ¼kÃ¼",
        description:
          "Giriï¿½x nemi, Ã§Ä±kÄ±ï¿½x nemi ve saatlik tonaj birlikte okunarak su uzaklaï¿½xtÄ±rma ihtiyacÄ± hesaplanÄ±r.",
        importance:
          "Tambur Ã§apÄ±, boyu, hava debisi ve brÃ¼lÃ¶r yÃ¼kÃ¼nÃ¼n doï¿½xru seÃ§ilmesini saï¿½xlar.",
      },
      {
        criterion: "ï¿½SrÃ¼n DavranÄ±ï¿½xÄ±",
        description:
          "YapÄ±ï¿½xma, tozuma, tane kÄ±rÄ±lmasÄ± ve sÄ±caklÄ±ï¿½xa hassasiyet gibi fiziksel veriler tasarÄ±ma dahil edilir.",
        importance:
          "Ä°Ã§ flight geometrisi ve devir mantÄ±ï¿½xÄ± Ã¼zerinde doï¿½xrudan etkili olur.",
      },
      {
        criterion: "YardÄ±mcÄ± Ekipmanlar",
        description:
          "Bant konveyÃ¶r, besleme bunkerleri, fan, siklon ve filtre hattÄ± tamburla aynÄ± ritimde Ã§Ã¶zÃ¼lÃ¼r.",
        importance:
          "Darboï¿½xaz oluï¿½xmasÄ±nÄ± ve termal verimin sahada dÃ¼ï¿½xmesini engeller.",
      },
      {
        criterion: "BakÄ±m ve Eriï¿½xim",
        description:
          "Ring, support, drive ve iÃ§ ekipmanlara sahada eriï¿½xim tasarÄ±mÄ±n ilk aï¿½xamasÄ±nda planlanÄ±r.",
        importance:
          "Uzun vardiyalÄ± iï¿½xletmelerde duruï¿½x sÃ¼resini azaltÄ±r ve servis gÃ¼veni saï¿½xlar.",
      },
    ],
    sections: [
      {
        title: "KullanÄ±m AlanlarÄ±",
        paragraphs: [
          "Kurutma tamburu; granÃ¼l gÃ¼bre Ã¼retim tesislerinde son nemin dÃ¼ï¿½xÃ¼rÃ¼lmesi, kompost ve organik tÃ¼revlerde hacim azaltma, silis kumu ve kuvars kumu hatlarÄ±nda akÄ±ï¿½x kararlÄ±lÄ±ï¿½xÄ± saï¿½xlama, maden kurutma tesisi uygulamalarÄ±nda mineralin paketleme veya eleme Ã¶ncesi hazÄ±rlanmasÄ± ve belediye ya da endÃ¼striyel arÄ±tma Ã§amuru kurutma senaryolarÄ±nda nihai Ã¼rÃ¼nÃ¼n yÃ¶netilebilir hale getirilmesi iÃ§in kullanÄ±lÄ±r. Her kullanÄ±m alanÄ± aynÄ± rotary dryer mantÄ±ï¿½xÄ±na dayanÄ±yor gibi gÃ¶rÃ¼nse de gerÃ§ek tasarÄ±m kriterleri Ã¼rÃ¼n davranÄ±ï¿½xÄ±na gÃ¶re Ã¶nemli Ã¶lÃ§Ã¼de deï¿½xiï¿½xir.",
        ],
      },
      {
        title: "Hangi Hammaddeler ve ï¿½SrÃ¼nler Ä°Ã§in Uygundur?",
        paragraphs: [
          "Organomineral granÃ¼l, NPK karÄ±ï¿½xÄ±mlarÄ±, kompost tÃ¼revleri, arÄ±tma Ã§amuru, digestat, silis kumu, kuvars kumu, farklÄ± mineral fraksiyonlarÄ± ve termal olarak son nemi dÃ¼ï¿½xÃ¼rÃ¼lmesi gereken dÃ¶kme katÄ± malzemeler kurutma tamburu ile iï¿½xlenebilir. Burada esas konu yalnÄ±z Ã¼rÃ¼nÃ¼n adÄ± deï¿½xil; nem seviyesi, tane boyutu, yoï¿½xunluï¿½xu ve sÄ±caklÄ±k altÄ±nda verdiï¿½xi davranÄ±ï¿½xtÄ±r. Bu veriler doï¿½xru okunmadan kurutma tamburu imalatÄ± yapmak, gereksiz enerji tÃ¼ketimi veya yetersiz kurutma riski doï¿½xurur.",
        ],
      },
      {
        title: "Teknik ï¿½zellikler",
        paragraphs: [
          "EndÃ¼striyel kurutma tamburu Ã§Ã¶zÃ¼mlerinde gÃ¶vde Ã§apÄ± ve boyu, iÃ§ flight geometrisi, ring-support yapÄ±sÄ±, tahrik sistemi, gÃ¶vde izolasyonu, sÄ±cak gaz akÄ±ï¿½xÄ±, fan debisi, siklon ve filtre entegrasyonu birlikte ele alÄ±nÄ±r. DÃ¶ner kurutucu tasarÄ±mÄ±nda yalnÄ±z tambur gÃ¶vdesini bÃ¼yÃ¼tmek Ã§Ã¶zÃ¼m deï¿½xildir; Ã¼rÃ¼n perdesi oluï¿½xturma kalitesi ve gaz ile Ã¼rÃ¼nÃ¼n temas karakteri de aynÄ± derecede belirleyicidir.",
        ],
      },
      {
        title: "Kapasite ve TasarÄ±m Kriterleri",
        paragraphs: [
          "Kapasite hesabÄ±nda ton/saat deï¿½xeri kadar giriï¿½x ve Ã§Ä±kÄ±ï¿½x nemi, gaz sÄ±caklÄ±ï¿½xÄ±, hedef residence time, Ã¼rÃ¼n yoï¿½xunluï¿½xu ve saha yerleï¿½ximi de Ã¶nem taï¿½xÄ±r. ï¿½zellikle rotary dryer uygulamalarÄ±nda tambur L/D oranÄ±, support sayÄ±sÄ± ve devir aralÄ±ï¿½xÄ± sahadaki enerji kullanÄ±mÄ±nÄ± belirler. BÃ¼yÃ¼k tonajlÄ± hatlarda siklon, jet pulse filtre ve bant konveyÃ¶r omurgasÄ± doï¿½xru kurulmazsa kurutma tamburu teorik kapasitesine ulaï¿½xsa bile bÃ¼tÃ¼n hat verimi dÃ¼ï¿½xebilir.",
        ],
      },
      {
        title: "Proses Ä°Ã§indeki Yeri",
        paragraphs: [
          "Kurutma tamburu Ã§oï¿½xu hatta granÃ¼lasyon veya Ã¶n hazÄ±rlÄ±k sonrasÄ± gelir ve sonrasÄ±nda soï¿½xutma, eleme, stoklama ya da paketleme adÄ±mlarÄ±na Ã¼rÃ¼n hazÄ±rlar. ï¿½!amur kurutma tesislerinde dewatering sonrasÄ±, silis kumu kurutma tesislerinde ise eleme ve stoklama Ã¶ncesi kritik rol oynar. Yani tambur tek baï¿½xÄ±na bir makina deï¿½xil, tÃ¼m termal hazÄ±rlÄ±k omurgasÄ±nÄ±n merkezidir.",
        ],
      },
      {
        title: "Opsiyonel Ekipmanlar",
        paragraphs: [
          "BrÃ¼lÃ¶r sistemi, sÄ±cak hava fanÄ±, siklon ayÄ±rÄ±cÄ±, jet pulse filtre, bant konveyÃ¶r, bunker, elevatÃ¶r, PLC tabanlÄ± sÄ±caklÄ±k kontrolÃ¼, iÃ§ flight paketleri ve servis platformlarÄ± kurutma tamburunun performansÄ±nÄ± tamamlayan ana opsiyonlardÄ±r. Projeye gÃ¶re gaz hattÄ±, baca, izolasyon ve otomasyon seviyesi de bu pakete dahil edilir.",
        ],
      },
      {
        title: "Avantajlar",
        paragraphs: [
          "Doï¿½xru tasarlanmÄ±ï¿½x bir kurutma tamburu; daha kararlÄ± son nem, daha dÃ¼ï¿½xÃ¼k enerji kaybÄ±, Ã¼rÃ¼n kÄ±rÄ±lmasÄ±nÄ± azaltan kontrollÃ¼ hareket, bakÄ±m eriï¿½ximi kolay aï¿½xÄ±r hizmet tipi gÃ¶vde ve farklÄ± Ã¼rÃ¼n senaryolarÄ±na uyarlanabilir mÃ¼hendislik esnekliï¿½xi saï¿½xlar. ï¿½zellikle maden, gÃ¼bre ve Ã§amur kurutma hatlarÄ±nda bu avantajlar doï¿½xrudan iï¿½xletme kÃ¢rlÄ±lÄ±ï¿½xÄ±na yansÄ±r.",
        ],
      },
      {
        title: "Teklif Almak Ä°Ã§in Gerekli Bilgiler",
        paragraphs: [
          "Saï¿½xlÄ±klÄ± bir teklif iÃ§in Ã¼rÃ¼n tipi, saatlik kapasite, giriï¿½x ve Ã§Ä±kÄ±ï¿½x nemi, Ã¼rÃ¼n yoï¿½xunluï¿½xu, parÃ§acÄ±k boyutu, mevcut veya planlanan yardÄ±mcÄ± ekipmanlar, yakÄ±t tercihi ve saha yerleï¿½xim bilgisi paylaï¿½xÄ±lmalÄ±dÄ±r. Bu veriler ile Pro Makina, kurutma tamburu imalatÄ± ve rotary dryer hattÄ± iÃ§in daha net boyutlandÄ±rma ve bÃ¼tÃ§e aralÄ±ï¿½xÄ± sunabilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kurutma tamburu ile rotary dryer aynÄ± ekipman mÄ±dÄ±r?",
        answer:
          "Evet. Rotary dryer, endÃ¼striyel kurutma tamburu iÃ§in sÄ±k kullanÄ±lan Ä°ngilizce karï¿½xÄ±lÄ±ktÄ±r; tasarÄ±m yine Ã¼rÃ¼n nemi ve termal yÃ¼k Ã¼zerinden yapÄ±lÄ±r.",
      },
      {
        question: "Kurutma tamburu hangi sektÃ¶rlerde kullanÄ±lÄ±r?",
        answer:
          "GÃ¼bre, kompost, maden iï¿½xleme, silis kumu, kuvars kumu, arÄ±tma Ã§amuru ve farklÄ± dÃ¶kme katÄ± malzeme proseslerinde yaygÄ±n olarak kullanÄ±lÄ±r.",
      },
      {
        question: "Kurutma tamburu kapasitesi nasÄ±l belirlenir?",
        answer:
          "Ton/saat, giriï¿½x-Ã§Ä±kÄ±ï¿½x nemi, Ã¼rÃ¼n yoï¿½xunluï¿½xu, gaz sÄ±caklÄ±ï¿½xÄ± ve hedef residence time birlikte deï¿½xerlendirilerek belirlenir.",
      },
      {
        question: "Jet pulse filtre ve siklon her kurutma hattÄ±nda gerekli midir?",
        answer:
          "BirÃ§ok kurutma hattÄ±nda toz yÃ¼kÃ¼ ve emisyon kontrolÃ¼ iÃ§in siklon ve filtre hattÄ± bÃ¼yÃ¼k Ã¶nem taï¿½xÄ±r; ihtiyaÃ§ Ã¼rÃ¼n davranÄ±ï¿½xÄ±na gÃ¶re netleï¿½xtirilir.",
      },
      {
        question: "Kurutma tamburu teklifinde hangi bilgiler gerekir?",
        answer:
          "ï¿½SrÃ¼n adÄ±, kapasite, nem deï¿½xerleri, yoï¿½xunluk, yakÄ±t tercihi ve yardÄ±mcÄ± ekipman beklentisi paylaï¿½xÄ±lmasÄ± en doï¿½xru baï¿½xlangÄ±Ã§tÄ±r.",
      },
    ],
    ctaText:
      "Kurutma tamburu imalatÄ±, rotary dryer tasarÄ±mÄ± ve yardÄ±mcÄ± ekipman seÃ§imi iÃ§in Ã¼rÃ¼n verilerinizi paylaï¿½xÄ±n; teknik keï¿½xif ve teklif kurgusunu birlikte oluï¿½xturalÄ±m.",
    showForm: true,
    technicalContents: commonTechnicalContents,
    keyLinks: [
      { label: "Silis Kumu Kurutma Tesisi", href: "/hizmetler/silis-kumu-kurutma-tesisi" },
      { label: "ï¿½!amur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "GranÃ¼l GÃ¼bre ï¿½Sretim Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { label: "BantlÄ± KonveyÃ¶rler", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
    ],
  },
  "camur-kurutma-tesisi": {
    title: "ï¿½!amur Kurutma Tesisi | Anahtar Teslim Kurutma HattÄ±",
    description:
      "ï¿½!amur kurutma tesisi, arÄ±tma Ã§amuru kurutma ve digestat kurutma hatlarÄ± iÃ§in belediye ve sanayiye Ã¶zel anahtar teslim Ã§Ã¶zÃ¼mler sunuyoruz.",
    canonical: "https://www.promakina.com.tr/hizmetler/camur-kurutma-tesisi",
    image: "/images/tambur kurutma/tamkurutma1.jpg",
    serviceName: "ï¿½!amur Kurutma Tesisi",
    introTitle: "ArÄ±tma ï¿½!amuru ve Digestat Kurutma HatlarÄ±",
    introParagraphs: [
      "ï¿½!amur kurutma tesisi, yÃ¼ksek nemli belediye Ã§amuru, arÄ±tma Ã§amuru, endÃ¼striyel proses Ã§amuru ve digestat gibi akÄ±ï¿½xlarÄ±n daha dÃ¼ï¿½xÃ¼k hacimde, daha yÃ¶netilebilir ve daha yÃ¼ksek kuru madde seviyesinde iï¿½xlenmesini saï¿½xlayan entegre termal proses Ã§Ã¶zÃ¼mÃ¼dÃ¼r. Bu tesislerde doï¿½xru mÃ¼hendislik yaklaï¿½xÄ±mÄ±, yalnÄ±z suyu uzaklaï¿½xtÄ±rmak deï¿½xil; aynÄ± zamanda koku, toz, besleme disiplini ve enerji verimini birlikte yÃ¶netmektir.",
      "Pro Makina, belediye Ã§amuru kurutma hattÄ± ve digestat kurutma projelerinde besleme, termal kurutma, hava yÃ¶netimi, toz kontrolÃ¼ ve Ã§Ä±kÄ±ï¿½x Ã¼rÃ¼nÃ¼ hazÄ±rlama adÄ±mlarÄ±nÄ± tek merkezden planlar. BÃ¶ylece yatÄ±rÄ±mcÄ±, yalnÄ±z Ã§alÄ±ï¿½xan bir kurutucu deï¿½xil; sahada gÃ¼venli, sÃ¼rdÃ¼rÃ¼lebilir ve izin sÃ¼reÃ§lerine daha uyumlu bir tesis omurgasÄ± elde eder.",
    ],
    cards: [
      {
        title: "ArÄ±tma ï¿½!amuru UygulamalarÄ±",
        description:
          "Belediye ve endÃ¼striyel arÄ±tma Ã§Ä±kÄ±ï¿½xlarÄ±nda susuzlaï¿½xtÄ±rma sonrasÄ± termal kurutma yaklaï¿½xÄ±mÄ±nÄ± inceleyin.",
      },
      {
        title: "Kompost Tesisi Baï¿½xlantÄ±sÄ±",
        description:
          "Organik iÃ§erikli akÄ±ï¿½xlarÄ±n kompost veya stabilizasyon senaryolarÄ±yla iliï¿½xkili kullanÄ±m alanlarÄ±nÄ± gÃ¶rÃ¼n.",
        href: "/hizmetler/kompost-tesisi-kurulumu",
      },
      {
        title: "Toz Toplama ve Koku Kontrol",
        description:
          "Koku yÃ¼kÃ¼ ve toz kontrolÃ¼ iÃ§in filtre, siklon ve kapalÄ± akÄ±ï¿½x altyapÄ±sÄ±nÄ± tamamlayÄ±n.",
        href: "/makinalar-ekipman/toz-toplama-sistemleri",
      },
      {
        title: "Digestat Kurutma",
        description:
          "Biyogaz sonrasÄ± Ã§Ä±kan yÃ¼ksek nemli digestat akÄ±ï¿½xlarÄ±nÄ±n kurutma kurgusunu deï¿½xerlendirin.",
        href: "/kutuphane/blog/camur-kurutma-sistemi",
      },
    ],
    cardsTitle: "KullanÄ±m AlanlarÄ± ve Ä°lgili ï¿½!Ã¶zÃ¼m Baï¿½xlÄ±klarÄ±",
    cardsDescription:
      "ï¿½!amur kurutma tesislerinde yalnÄ±z tambur deï¿½xil; besleme, koku kontrolÃ¼, toz toplama ve organik atÄ±k yÃ¶netimi mantÄ±ï¿½xÄ± da birlikte ele alÄ±nÄ±r.",
    summaryRows: [
      {
        criterion: "Besleme Kuru Maddesi",
        description:
          "Susuzlaï¿½xtÄ±rma sonrasÄ± gelen Ã§amurun baï¿½xlangÄ±Ã§ kuru maddesi kurutma yÃ¼kÃ¼nÃ¼ belirler.",
        importance:
          "Kurutma tamburu boyutunu ve enerji tÃ¼ketimini doï¿½xrudan etkiler.",
      },
      {
        criterion: "Koku ve Emisyon",
        description:
          "ï¿½!amur karakterine gÃ¶re kapalÄ± akÄ±ï¿½x, negatif basÄ±nÃ§ ve filtreleme planlanmalÄ±dÄ±r.",
        importance:
          "ï¿½!evresel uyum ve saha Ã§alÄ±ï¿½xma konforu iÃ§in kritik Ã¶nemdedir.",
      },
      {
        criterion: "ï¿½SrÃ¼n ï¿½!Ä±kÄ±ï¿½x Senaryosu",
        description:
          "Kurutulmuï¿½x Ã¼rÃ¼nÃ¼n depolanmasÄ±, kompostlanmasÄ± veya sevkiyatÄ± farklÄ± mekanik ihtiyaÃ§lar doï¿½xurur.",
        importance:
          "Son Ã¼rÃ¼n ekipman seÃ§imini ve stoklama kurgusunu belirler.",
      },
      {
        criterion: "YardÄ±mcÄ± Hatlar",
        description:
          "Susuzlaï¿½xtÄ±rma destek sistemleri, besleme, konveyÃ¶r ve bunker yapÄ±sÄ± termal hattÄ±n sÃ¼rekliliï¿½xini saï¿½xlar.",
        importance:
          "Kurutma Ã¼nitesinin gerÃ§ek saha kapasitesini korur.",
      },
    ],
    sections: [
      {
        title: "KullanÄ±m AlanlarÄ±",
        paragraphs: [
          "ï¿½!amur kurutma tesisleri belediye atÄ±k su arÄ±tma tesisleri, endÃ¼striyel arÄ±tma tesisleri, biyogaz digestat hatlarÄ±, organik Ã§amur iÃ§eren prosesler ve atÄ±k yÃ¶netimi altyapÄ±larÄ±nda kullanÄ±lÄ±r. Bu projelerde nihai amaÃ§; hacmi azaltmak, kuru maddeyi yÃ¼kseltmek, depolama ve taï¿½xÄ±ma maliyetini dÃ¼ï¿½xÃ¼rmek, gerektiï¿½xinde son Ã¼rÃ¼nÃ¼ kompost veya yakÄ±t benzeri ikincil kullanÄ±m senaryolarÄ±na hazÄ±rlamaktÄ±r.",
        ],
      },
      {
        title: "Hangi Hammaddeler ve ï¿½SrÃ¼nler Ä°Ã§in Uygundur?",
        paragraphs: [
          "ArÄ±tma Ã§amuru, digestat, gÄ±da veya organik proses Ã§amurlarÄ±, filtre kekleri ve susuzlaï¿½xtÄ±rÄ±lmÄ±ï¿½x yan Ã¼rÃ¼nler bu tesislerde deï¿½xerlendirilir. Her akÄ±ï¿½xÄ±n nem seviyesi, organik yÃ¼kÃ¼, yapÄ±ï¿½xma eï¿½xilimi ve koku davranÄ±ï¿½xÄ± farklÄ± olduï¿½xu iÃ§in belediye Ã§amuru kurutma hattÄ± ile endÃ¼striyel Ã§amur kurutma hattÄ± aynÄ± kopya tasarÄ±mla kurulmaz.",
        ],
      },
      {
        title: "Teknik ï¿½zellikler",
        paragraphs: [
          "ï¿½!amur kurutma tesisinde besleme bunkerleri, helezon veya bantlÄ± transfer sistemleri, termal kurutucu, fan, siklon, filtre, koku kontrol noktalarÄ± ve Ã§Ä±kÄ±ï¿½x Ã¼rÃ¼nÃ¼ hazÄ±rlama ekipmanlarÄ± birlikte tasarlanÄ±r. YÃ¼ksek nemli Ã¼rÃ¼nlerde akÄ±ï¿½x sÃ¼rekliliï¿½xi, iÃ§ yapÄ±ï¿½xma kontrolÃ¼ ve emisyon gÃ¼venliï¿½xi en kritik teknik baï¿½xlÄ±klardÄ±r.",
        ],
      },
      {
        title: "Kapasite ve TasarÄ±m Kriterleri",
        paragraphs: [
          "Kapasite hesabÄ± yalnÄ±z ton/saat Ã¼zerinden deï¿½xil; baï¿½xlangÄ±Ã§ kuru madde, hedef son kuru madde, buharlaï¿½xacak su miktarÄ±, iï¿½xletme vardiyasÄ± ve koku kontrol ihtiyaÃ§larÄ± Ã¼zerinden yapÄ±lÄ±r. ï¿½!amur kurutma tesisi tasarÄ±mÄ±nda susuzlaï¿½xtÄ±rma desteï¿½xi, Ã§amur besleme mantÄ±ï¿½xÄ± ve yardÄ±mcÄ± konveyÃ¶r yapÄ±sÄ± doï¿½xru kurulmadÄ±ï¿½xÄ±nda termal hat tam kapasite Ã§alÄ±ï¿½xsa bile saha verimi dÃ¼ï¿½xer.",
        ],
      },
      {
        title: "Proses Ä°Ã§indeki Yeri",
        paragraphs: [
          "Bu tesisler Ã§oï¿½xu zaman susuzlaï¿½xtÄ±rma sonrasÄ±nda devreye girer ve Ã§Ä±kÄ±ï¿½x Ã¼rÃ¼nÃ¼nÃ¼ depolama, kompostlama, sevkiyat veya ileri deï¿½xerlendirme adÄ±mlarÄ±na hazÄ±rlar. Yani termal kurutma, tÃ¼m atÄ±k yÃ¶netimi zincirinin merkezinde duran bir ara proses deï¿½xil; nihai maliyeti ve Ã§evresel performansÄ± ï¿½xekillendiren kritik halkadÄ±r.",
        ],
      },
      {
        title: "Opsiyonel Ekipmanlar",
        paragraphs: [
          "Koku kontrol altyapÄ±sÄ±, jet pulse filtreler, siklon ayÄ±rÄ±cÄ±lar, bunker karÄ±ï¿½xtÄ±rÄ±cÄ±larÄ±, kapalÄ± konveyÃ¶rler, PLC tabanlÄ± sÄ±caklÄ±k kontrolÃ¼, servis platformlarÄ± ve farklÄ± Ã§Ä±kÄ±ï¿½x Ã¼rÃ¼nÃ¼ne uygun eleme veya kÄ±rma adÄ±mlarÄ± projeye gÃ¶re eklenebilir.",
        ],
      },
      {
        title: "Avantajlar",
        paragraphs: [
          "Doï¿½xru kurgulanmÄ±ï¿½x bir Ã§amur kurutma tesisi daha dÃ¼ï¿½xÃ¼k hacim, daha kontrollÃ¼ depolama, azaltÄ±lmÄ±ï¿½x nakliye maliyeti, daha gÃ¼venli saha hijyeni ve ileri deï¿½xerlendirme iÃ§in daha uygun Ã¼rÃ¼n karakteri saï¿½xlar. Belediye ve sanayi tarafÄ±nda bu avantajlar yatÄ±rÄ±mÄ±n operasyonel geri dÃ¶nÃ¼ï¿½xÃ¼nÃ¼ hÄ±zlandÄ±rÄ±r.",
        ],
      },
      {
        title: "Teklif Almak Ä°Ã§in Gerekli Bilgiler",
        paragraphs: [
          "Teklif Ã§alÄ±ï¿½xmasÄ± iÃ§in Ã§amur tipi, baï¿½xlangÄ±Ã§ kuru maddesi, hedef son kuru madde, saatlik veya gÃ¼nlÃ¼k miktar, mevcut susuzlaï¿½xtÄ±rma altyapÄ±sÄ±, koku kontrol gereksinimi ve saha kÄ±sÄ±tlarÄ± paylaï¿½xÄ±lmalÄ±dÄ±r. Bu bilgilerle termal kurutma yÃ¼kÃ¼ ve yardÄ±mcÄ± ekipman seÃ§imi daha doï¿½xru belirlenir.",
        ],
      },
    ],
    faqs: [
      {
        question: "ï¿½!amur kurutma tesisi hangi Ã§amur tipleri iÃ§in uygundur?",
        answer:
          "Belediye arÄ±tma Ã§amuru, endÃ¼striyel arÄ±tma Ã§amuru, digestat ve organik proses Ã§amurlarÄ± iÃ§in uygun Ã§Ã¶zÃ¼mler geliï¿½xtirilebilir.",
      },
      {
        question: "Digestat kurutma ile arÄ±tma Ã§amuru kurutma aynÄ± mÄ±dÄ±r?",
        answer:
          "HayÄ±r. Organik yÃ¼k, lif yapÄ±sÄ±, koku davranÄ±ï¿½xÄ± ve akÄ±ï¿½x karakteri farklÄ± olduï¿½xu iÃ§in tasarÄ±m yaklaï¿½xÄ±mÄ± da deï¿½xiï¿½xir.",
      },
      {
        question: "Koku kontrolÃ¼ neden kritik bir baï¿½xlÄ±ktÄ±r?",
        answer:
          "ï¿½zellikle belediye ve organik iÃ§erikli Ã§amurlarda saha konforu ve Ã§evresel uyum iÃ§in kapalÄ± akÄ±ï¿½x ve filtreleme yaklaï¿½xÄ±mÄ± Ã¶nemlidir.",
      },
      {
        question: "ï¿½!amur kurutma tesisi kompost tesisine entegre edilebilir mi?",
        answer:
          "Uygulamaya baï¿½xlÄ± olarak evet. Kurutulmuï¿½x veya stabilize edilmiï¿½x Ã¼rÃ¼n, kompost veya diï¿½xer deï¿½xerlendirme senaryolarÄ±na baï¿½xlanabilir.",
      },
      {
        question: "Teklif iÃ§in hangi veriler paylaï¿½xÄ±lmalÄ±dÄ±r?",
        answer:
          "Kuru madde oranÄ±, gÃ¼nlÃ¼k kapasite, Ã§amur tipi, mevcut susuzlaï¿½xtÄ±rma ekipmanÄ± ve saha kÄ±sÄ±tlarÄ± temel baï¿½xlangÄ±Ã§ bilgileridir.",
      },
    ],
    ctaText:
      "ArÄ±tma Ã§amuru kurutma, digestat kurutma ve belediye Ã§amuru kurutma hattÄ± iÃ§in Ã¼rÃ¼n verilerinizi paylaï¿½xÄ±n; size uygun termal proses kurgusunu birlikte netleï¿½xtirelim.",
    showForm: true,
    technicalContents: commonTechnicalContents,
    keyLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { label: "Koku ve Toz Kontrol", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { label: "Kapalı Sistem Çamur Kurutma", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/kapali-sistem-camur-kurutma" },
      { label: "Atık Su Çamuru Bertaraf ve Değerlendirme Prosesleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
    ],
  },
  "silis-kumu-kurutma-tesisi": {
    title: "Silis Kumu Kurutma Tesisi | Kuvars Kumu Kurutma",
    description:
      "Silis kumu kurutma tesisi, kuvars kumu kurutma ve maden kurutma hatlarÄ± iÃ§in kurutma tamburu, eleme ve taï¿½xÄ±ma Ã§Ã¶zÃ¼mleri sunuyoruz.",
    canonical: "https://www.promakina.com.tr/hizmetler/silis-kumu-kurutma-tesisi",
    image: "/images/tambur kurutma/tamkurutma1.jpg",
    serviceName: "Silis Kumu Kurutma Tesisi",
    introTitle: "Kuvars ve Silis TÃ¼revleri Ä°Ã§in KontrollÃ¼ Kurutma HatlarÄ±",
    introParagraphs: [
      "Silis kumu kurutma tesisi, kuvars ve benzeri mineral fraksiyonlarÄ±n istenen son neme getirilmesi, eleme Ã¶ncesi akÄ±ï¿½x kararlÄ±lÄ±ï¿½xÄ± kazanmasÄ± ve paketleme veya sevkiyat iÃ§in uygun Ã¼rÃ¼n davranÄ±ï¿½xÄ±na ulaï¿½xmasÄ± amacÄ±yla kurulan termal proses altyapÄ±sÄ±dÄ±r. Maden kurutma tesisi uygulamalarÄ±nda doï¿½xru tambur seÃ§imi kadar, besleme disiplini ve toz kontrolÃ¼ de Ã¼retim kalitesini belirler.",
      "Pro Makina, kum kurutma tamburu, besleme bunkerleri, bant konveyÃ¶r, eleme sistemleri, fan-siklon-filtre hattÄ± ve saha yerleï¿½ximini birlikte deï¿½xerlendirerek silis kumu kurutma tesislerini anahtar teslim mantÄ±kla kurgular. BÃ¶ylece yatÄ±rÄ±mcÄ±, dÃ¼ï¿½xÃ¼k son nem ve kararlÄ± tane daï¿½xÄ±lÄ±mÄ±nÄ± daha gÃ¼venli ï¿½xekilde yÃ¶netir.",
    ],
    cards: [
      {
        title: "Maden Kurutma ve Eleme",
        description:
          "Kuruma sonrasÄ± eleme, sÄ±nÄ±flandÄ±rma ve stoklamanÄ±n birlikte planlandÄ±ï¿½xÄ± mineral iï¿½xleme altyapÄ±sÄ±nÄ± gÃ¶rÃ¼n.",
        href: "/hizmetler/maden-kurutma-ve-eleme-tesisi",
      },
      {
        title: "Kurutma TamburlarÄ±",
        description:
          "Silis kumu ve kuvars kumu uygulamalarÄ±nda kullanÄ±lan dÃ¶ner kurutma tamburu Ã§Ã¶zÃ¼mlerini inceleyin.",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
      },
      {
        title: "BantlÄ± KonveyÃ¶rler",
        description:
          "Kurutma sonrasÄ± sÄ±cak veya kuru mineralin kontrollÃ¼ transferi iÃ§in uygun taï¿½xÄ±ma sistemleri.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler",
      },
      {
        title: "Eleme ve SÄ±nÄ±flandÄ±rma",
        description:
          "Kurumuï¿½x Ã¼rÃ¼nÃ¼n tane daï¿½xÄ±lÄ±mÄ± ve ticari kalite standardÄ± iÃ§in eleme hattÄ±nÄ± tamamlayÄ±n.",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
      },
    ],
    cardsTitle: "KullanÄ±m AlanlarÄ± ve Ä°lgili Ana Makineler",
    cardsDescription:
      "Silis ve kuvars kumu kurutma projelerinde kurutma, eleme, taï¿½xÄ±ma ve toz kontrolÃ¼ tek bir mineral iï¿½xleme akÄ±ï¿½xÄ± olarak deï¿½xerlendirilmelidir.",
    summaryRows: [
      {
        criterion: "Tane Boyutu",
        description:
          "Kum fraksiyonunun boyut aralÄ±ï¿½xÄ±, tambur iÃ§ davranÄ±ï¿½xÄ±nÄ± ve eleme senaryosunu etkiler.",
        importance:
          "Residence time ve sonrasÄ± eleme kalitesini belirler.",
      },
      {
        criterion: "Giriï¿½x Nemi",
        description:
          "Besleme nemi termal yÃ¼kÃ¼ ve hedef son Ã¼rÃ¼n akÄ±ï¿½x davranÄ±ï¿½xÄ±nÄ± doï¿½xrudan belirler.",
        importance:
          "BrÃ¼lÃ¶r, tambur boyu ve hava hattÄ± seÃ§imini etkiler.",
      },
      {
        criterion: "Toz DavranÄ±ï¿½xÄ±",
        description:
          "Silis tozu ve ince fraksiyonlarÄ±n taï¿½xÄ±nmasÄ± iÃ§in kapalÄ± akÄ±ï¿½x ve filtreleme gereksinimi planlanÄ±r.",
        importance:
          "Saha gÃ¼venliï¿½xi ve emisyon yÃ¶netimi iÃ§in kritiktir.",
      },
      {
        criterion: "ï¿½SrÃ¼n ï¿½!Ä±kÄ±ï¿½x Kalitesi",
        description:
          "Son nem, tane bÃ¼tÃ¼nlÃ¼ï¿½xÃ¼ ve istenen elek fraksiyonu ticari kaliteyi tanÄ±mlar.",
        importance:
          "Paketleme, stok ve sevkiyat performansÄ±nÄ± gÃ¼Ã§lendirir.",
      },
    ],
    sections: [
      {
        title: "KullanÄ±m AlanlarÄ±",
        paragraphs: [
          "Silis kumu kurutma tesisleri cam, dÃ¶kÃ¼m, inï¿½xaat, dolgu mineralleri ve farklÄ± endÃ¼striyel mineral hazÄ±rlama hatlarÄ±nda kullanÄ±lÄ±r. ï¿½zellikle paketli veya kontrollÃ¼ tane sÄ±nÄ±flandÄ±rmalÄ± satÄ±ï¿½x yapan iï¿½xletmelerde kurutma ve eleme birlikte dÃ¼ï¿½xÃ¼nÃ¼lmelidir.",
        ],
      },
      {
        title: "Hangi Hammaddeler ve ï¿½SrÃ¼nler Ä°Ã§in Uygundur?",
        paragraphs: [
          "Silis kumu, kuvars kumu, farklÄ± mineral kum karÄ±ï¿½xÄ±mlarÄ±, ince fraksiyonlu kuruya yakÄ±n ama stabil olmayan Ã¼rÃ¼nler ve eleme Ã¶ncesi nemi dÃ¼ï¿½xÃ¼rÃ¼lmesi gereken maden tÃ¼revleri bu tesislerde iï¿½xlenebilir. Her Ã¼rÃ¼nÃ¼n yoï¿½xunluï¿½xu ve tane boyutu farklÄ± olduï¿½xu iÃ§in tasarÄ±m mutlaka sahaya gÃ¶re yapÄ±lmalÄ±dÄ±r.",
        ],
      },
      {
        title: "Teknik ï¿½zellikler",
        paragraphs: [
          "Kum kurutma tamburu, besleme bunkerleri, bant konveyÃ¶r, sÄ±cak gaz hattÄ±, siklon, filtre ve eleme sistemleri birlikte Ã§Ã¶zÃ¼lÃ¼r. Aï¿½xÄ±ndÄ±rÄ±cÄ± Ã¼rÃ¼nlerde gÃ¶vde ve iÃ§ ekipman seÃ§imi, servis Ã¶mrÃ¼ aÃ§Ä±sÄ±ndan ayrÄ± Ã¶nem taï¿½xÄ±r.",
        ],
      },
      {
        title: "Kapasite ve TasarÄ±m Kriterleri",
        paragraphs: [
          "Silis kumu kurutma tesisi kapasitesi belirlenirken ton/saat deï¿½xeri, giriï¿½x nemi, istenen elek fraksiyonu, hava debisi ve toz yÃ¼kÃ¼ aynÄ± tabloda deï¿½xerlendirilir. Maden kurutma tesisi tarafÄ±nda dar boï¿½xaz Ã§oï¿½xu zaman kurutucudan Ã§ok sonrasÄ± eleme ve stok hattÄ±nda oluï¿½xur; bu yÃ¼zden hat bÃ¼tÃ¼nÃ¼ dengeli boyutlandÄ±rÄ±lmalÄ±dÄ±r.",
        ],
      },
      {
        title: "Proses Ä°Ã§indeki Yeri",
        paragraphs: [
          "Bu tesisler kÄ±rma-eleme sonrasÄ± Ã¼rÃ¼n hazÄ±rlama, ara stoklama Ã¶ncesi nem dÃ¼ï¿½xÃ¼rme veya satÄ±ï¿½x Ã¶ncesi son kalite hazÄ±rlÄ±ï¿½xÄ± iÃ§in kritik rol oynar. Kurutma sonrasÄ± eleme ile birlikte Ã§alÄ±ï¿½xtÄ±ï¿½xÄ±nda Ã¼rÃ¼n standardÄ± Ã§ok daha kararlÄ± hale gelir.",
        ],
      },
      {
        title: "Opsiyonel Ekipmanlar",
        paragraphs: [
          "Elek sistemleri, kapalÄ± bant konveyÃ¶rler, bunkerler, siklon ayÄ±rÄ±cÄ±lar, jet pulse filtreler, servis platformlarÄ± ve otomasyon destekli sÄ±caklÄ±k kontrolÃ¼ en sÄ±k kullanÄ±lan opsiyonel ekipmanlardÄ±r.",
        ],
      },
      {
        title: "Avantajlar",
        paragraphs: [
          "Doï¿½xru kurulan silis kumu kurutma tesisi daha dÃ¼ï¿½xÃ¼k son nem, daha gÃ¼venli stok davranÄ±ï¿½xÄ±, daha stabil eleme kalitesi ve daha dÃ¼ï¿½xÃ¼k operasyon kesintisi saï¿½xlar. ï¿½zellikle yÃ¼ksek tozlu uygulamalarda kapalÄ± akÄ±ï¿½x ile saha dÃ¼zeni de belirgin ï¿½xekilde iyileï¿½xir.",
        ],
      },
      {
        title: "Teklif Almak Ä°Ã§in Gerekli Bilgiler",
        paragraphs: [
          "ï¿½SrÃ¼n tipi, tane boyutu, saatlik kapasite, giriï¿½x-Ã§Ä±kÄ±ï¿½x nemi, mevcut eleme yapÄ±sÄ±, toz kontrol ihtiyacÄ± ve saha yerleï¿½ximi paylaï¿½xÄ±lÄ±rsa daha doï¿½xru bir silis kumu kurutma tesisi teklifi hazÄ±rlanabilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Silis kumu kurutma tesisi ile genel maden kurutma tesisi aynÄ± mÄ±dÄ±r?",
        answer:
          "Temel termal mantÄ±k benzese de Ã¼rÃ¼n tane boyutu, toz davranÄ±ï¿½xÄ± ve son kalite beklentisi nedeniyle silis kumu projeleri Ã¶zel deï¿½xerlendirilir.",
      },
      {
        question: "Kurutma sonrasÄ± eleme gerekli midir?",
        answer:
          "BirÃ§ok uygulamada evet. Son fraksiyon standardÄ± ve ticari kalite iÃ§in eleme hattÄ± Ã¶nemli bir adÄ±mdÄ±r.",
      },
      {
        question: "Silis kumu kurutmada toz kontrolÃ¼ neden Ã¶nemlidir?",
        answer:
          "Ä°nce fraksiyon taï¿½xÄ±masÄ± ve emisyon yÃ¶netimi iÃ§in siklon ve filtre hattÄ± Ã§oï¿½xu projede kritik rol oynar.",
      },
      {
        question: "Kapasite hesabÄ±nda hangi veriler gerekir?",
        answer:
          "Ton/saat, giriï¿½x nemi, istenen son nem, tane boyutu ve Ã¼rÃ¼n yoï¿½xunluï¿½xu temel baï¿½xlangÄ±Ã§ verileridir.",
      },
      {
        question: "Bant konveyÃ¶r ve bunker seÃ§imi neden Ã¶nemlidir?",
        answer:
          "Kurumuï¿½x mineralin kÄ±rÄ±lmadan ve tozuma artÄ±rÄ±lmadan taï¿½xÄ±nabilmesi iÃ§in yardÄ±mcÄ± taï¿½xÄ±ma omurgasÄ± doï¿½xru seÃ§ilmelidir.",
      },
    ],
    ctaText:
      "Silis kumu kurutma tesisi ve kuvars kumu kurutma hattÄ± iÃ§in kapasite, nem ve eleme verilerinizi paylaï¿½xÄ±n; size uygun termal ve mekanik omurgayÄ± birlikte belirleyelim.",
    showForm: true,
    technicalContents: commonTechnicalContents,
    keyLinks: [
      { label: "Maden Kurutma ve Eleme Tesisi", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { label: "Kurutma TamburlarÄ±", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
      { label: "BantlÄ± KonveyÃ¶rler", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
      { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
    ],
  },
  "maden-kurutma-ve-eleme-tesisi": {
    title: "Maden Kurutma ve Eleme Tesisi | Mineral Ä°ï¿½xleme",
    description:
      "Maden kurutma ve eleme tesisi, mineral iï¿½xleme ekipmanlarÄ± ve kÄ±rma eleme kurutma tesisi Ã§Ã¶zÃ¼mleri iÃ§in anahtar teslim mÃ¼hendislik sunuyoruz.",
    canonical: "https://www.promakina.com.tr/hizmetler/maden-kurutma-ve-eleme-tesisi",
    image: "/images/01-genel/makinalar1.png",
    serviceName: "Maden Kurutma ve Eleme Tesisi",
    introTitle: "KÄ±rma, Eleme, Kurutma ve SÄ±nÄ±flandÄ±rma Ä°Ã§in Entegre Tesis Yaklaï¿½xÄ±mÄ±",
    introParagraphs: [
      "Maden kurutma ve eleme tesisi, mineralin kÄ±rma, boyut kÃ¼Ã§Ã¼ltme, kurutma, eleme ve stoklama adÄ±mlarÄ±nÄ± aynÄ± Ã¼retim mantÄ±ï¿½xÄ± iÃ§inde yÃ¶neten entegre bir iï¿½xleme altyapÄ±sÄ±dÄ±r. Mineral iï¿½xleme ekipmanlarÄ± sahada tek tek gÃ¼Ã§lÃ¼ olabilir; ancak kÄ±rÄ±cÄ±nÄ±n Ã§Ä±kÄ±ï¿½xÄ±, eleï¿½xin ritmi, kurutma yÃ¼kÃ¼ ve stok hattÄ± uyumlu Ã§alÄ±ï¿½xmÄ±yorsa toplam verim dÃ¼ï¿½xer.",
      "Pro Makina, kÄ±rma eleme kurutma tesisi projelerinde Ã¼rÃ¼n davranÄ±ï¿½xÄ±nÄ±, kapasite hedefini ve saha kÄ±sÄ±tlarÄ±nÄ± birlikte okuyarak tambur sistemleri, elekler, konveyÃ¶rler, bunkerler ve yardÄ±mcÄ± toz kontrol ekipmanlarÄ±nÄ± tek akÄ±ï¿½x iÃ§inde tasarlar. BÃ¶ylece yatÄ±rÄ±mcÄ± yalnÄ±z makina deï¿½xil; sÃ¼rdÃ¼rÃ¼lebilir bir maden kurutma tesisi omurgasÄ± elde eder.",
    ],
    cards: [
      {
        title: "Kurutma Tamburu",
        description:
          "Mineral nemini kontrollÃ¼ dÃ¼ï¿½xÃ¼rmek iÃ§in endÃ¼striyel rotary dryer Ã§Ã¶zÃ¼mlerini inceleyin.",
        href: "/hizmetler/kurutma-tamburu-imalati",
      },
      {
        title: "Silis ve Kuvars HatlarÄ±",
        description:
          "Silis kumu kurutma ve eleme senaryolarÄ±nda Ã¶ne Ã§Ä±kan proses yaklaï¿½xÄ±mÄ±nÄ± gÃ¶rÃ¼n.",
        href: "/hizmetler/silis-kumu-kurutma-tesisi",
      },
      {
        title: "Eleme ve SÄ±nÄ±flandÄ±rma",
        description:
          "Tane daï¿½xÄ±lÄ±mÄ± ve satÄ±ï¿½x standardÄ± iÃ§in eleme omurgasÄ±nÄ± tamamlayan ekipman ailesi.",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
      },
      {
        title: "KÄ±rÄ±cÄ±lar ve ParÃ§alayÄ±cÄ±lar",
        description:
          "Hat baï¿½xÄ±nda boyut kÃ¼Ã§Ã¼ltme kararlarÄ±nÄ± ï¿½xekillendiren aï¿½xÄ±r hizmet tipi kÄ±rÄ±cÄ± Ã§Ã¶zÃ¼mleri.",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar",
      },
    ],
    cardsTitle: "KullanÄ±m AlanlarÄ± ve Ä°lgili Ana Makineler",
    cardsDescription:
      "Maden kurutma ve eleme tesislerinde kÄ±rÄ±cÄ±, elek, kurutucu ve konveyÃ¶r omurgasÄ± tek bir proses dengesiyle birlikte ele alÄ±nmalÄ±dÄ±r.",
    summaryRows: [
      {
        criterion: "Besleme Boyutu",
        description:
          "KÄ±rÄ±cÄ± Ã§Ä±kÄ±ï¿½x boyutu ve eleme Ã¶ncesi fraksiyon daï¿½xÄ±lÄ±mÄ± hat dengesini belirler.",
        importance:
          "Kurutma davranÄ±ï¿½xÄ± ve son sÄ±nÄ±flandÄ±rma kalitesini doï¿½xrudan etkiler.",
      },
      {
        criterion: "Nem ve Termal YÃ¼k",
        description:
          "Mineralin giriï¿½x nemi kurutucu boyutunu ve enerji ihtiyacÄ±nÄ± belirleyen ana parametredir.",
        importance:
          "Kurutma tamburu kapasitesinin saï¿½xlÄ±klÄ± hesaplanmasÄ±nÄ± saï¿½xlar.",
      },
      {
        criterion: "Aï¿½xÄ±nma DayanÄ±mÄ±",
        description:
          "Mineral karakterine baï¿½xlÄ± aï¿½xÄ±ndÄ±rÄ±cÄ± etkiler gÃ¶vde, iÃ§ ekipman ve aktarÄ±m parÃ§alarÄ±nda dikkate alÄ±nÄ±r.",
        importance:
          "BakÄ±m maliyetini ve servis Ã¶mrÃ¼nÃ¼ doï¿½xrudan etkiler.",
      },
      {
        criterion: "Stok ve Sevkiyat",
        description:
          "Son Ã¼rÃ¼nÃ¼n eleme sonrasÄ± stoklanmasÄ± ve yÃ¼klenmesi iÃ§in taï¿½xÄ±ma omurgasÄ± planlanÄ±r.",
        importance:
          "Tesiste teorik kapasitenin ticari Ã§Ä±ktÄ±ya dÃ¶nÃ¼ï¿½xmesini saï¿½xlar.",
      },
    ],
    sections: [
      {
        title: "KullanÄ±m AlanlarÄ±",
        paragraphs: [
          "Maden kurutma ve eleme tesisleri silis, kuvars, farklÄ± mineral karÄ±ï¿½xÄ±mlarÄ±, kÄ±rÄ±lmÄ±ï¿½x cevher fraksiyonlarÄ± ve ticari tane aralÄ±ï¿½xÄ± istenen dÃ¶kme katÄ± Ã¼rÃ¼nlerde kullanÄ±lÄ±r. ï¿½zellikle kÄ±rma eleme kurutma tesisi mantÄ±ï¿½xÄ±nda Ã§alÄ±ï¿½xan sahalarda, her ekipmanÄ±n bir sonraki adÄ±mÄ± besleyecek kararlÄ±lÄ±kta seÃ§ilmesi gerekir.",
        ],
      },
      {
        title: "Hangi Hammaddeler ve ï¿½SrÃ¼nler Ä°Ã§in Uygundur?",
        paragraphs: [
          "Kuvars kumu, silis fraksiyonlarÄ±, nemli mineral karÄ±ï¿½xÄ±mlar, ince veya orta tane yapÄ±lÄ± maden Ã¼rÃ¼nleri ve son nemi dÃ¼ï¿½xÃ¼rÃ¼lerek eleme sÄ±nÄ±fÄ±na sokulacak hammaddeler iÃ§in uygundur. Her mineralin aï¿½xÄ±ndÄ±rÄ±cÄ±lÄ±ï¿½xÄ± ve yoï¿½xunluï¿½xu farklÄ± olduï¿½xu iÃ§in makina seÃ§imi standart deï¿½xil, projeye Ã¶zel yapÄ±lmalÄ±dÄ±r.",
        ],
      },
      {
        title: "Teknik ï¿½zellikler",
        paragraphs: [
          "Maden kurutma tesisi omurgasÄ±nda kÄ±rÄ±cÄ±lar, tambur kurutucular, elek sistemleri, siklonlar, filtreler, konveyÃ¶rler, bunkerler ve stok ekipmanlarÄ± birlikte Ã§Ã¶zÃ¼lÃ¼r. Aï¿½xÄ±ndÄ±rÄ±cÄ± Ã¼rÃ¼nlerde malzeme kalÄ±nlÄ±ï¿½xÄ±, iÃ§ kaplama ve servis parÃ§alarÄ± ayrÄ±ca planlanmalÄ±dÄ±r.",
        ],
      },
      {
        title: "Kapasite ve TasarÄ±m Kriterleri",
        paragraphs: [
          "TasarÄ±m yapÄ±lÄ±rken Ã¼rÃ¼n nemi, hedef fraksiyon, giriï¿½x boyutu, ton/saat deï¿½xeri, kurutma sonrasÄ± eleme yÃ¼zeyi ve stok temposu birlikte deï¿½xerlendirilir. KÄ±rma eleme kurutma tesisi iÃ§inde tek bir ekipmanÄ±n aï¿½xÄ±rÄ± bÃ¼yÃ¼k seÃ§ilmesi Ã§Ã¶zÃ¼m olmaz; dengeli hat tasarÄ±mÄ± gerekir.",
        ],
      },
      {
        title: "Proses Ä°Ã§indeki Yeri",
        paragraphs: [
          "Bu tesisler kÄ±rma sonrasÄ± ara hazÄ±rlÄ±k, kurutma sonrasÄ± eleme ve nihai Ã¼rÃ¼n sÄ±nÄ±flandÄ±rmasÄ±nÄ±n merkezinde yer alÄ±r. Mineralin satÄ±ï¿½x standardÄ± Ã§oï¿½xu zaman bu adÄ±mlarÄ±n kalitesiyle belirlenir.",
        ],
      },
      {
        title: "Opsiyonel Ekipmanlar",
        paragraphs: [
          "KÄ±rÄ±cÄ±lar, siklonlar, jet pulse filtreler, stok bunkerleri, bant konveyÃ¶rler, manyetik ayÄ±rÄ±cÄ±lar, servis platformlarÄ± ve otomasyon sistemleri projeye gÃ¶re ilave edilebilir.",
        ],
      },
      {
        title: "Avantajlar",
        paragraphs: [
          "Doï¿½xru kurgulanmÄ±ï¿½x maden kurutma ve eleme tesisi daha dÃ¼ï¿½xÃ¼k nem, daha istikrarlÄ± tane daï¿½xÄ±lÄ±mÄ±, daha kontrollÃ¼ sevkiyat ve daha az duruï¿½x riski sunar. Bu yapÄ± Ã¶zellikle satÄ±ï¿½x standardÄ± aranan mineral uygulamalarÄ±nda yatÄ±rÄ±mÄ±n deï¿½xerini yÃ¼kseltir.",
        ],
      },
      {
        title: "Teklif Almak Ä°Ã§in Gerekli Bilgiler",
        paragraphs: [
          "ï¿½SrÃ¼n tipi, tonaj, giriï¿½x nemi, istenen fraksiyonlar, mevcut kÄ±rma yapÄ±sÄ±, saha yerleï¿½ximi ve toz kontrol ihtiyacÄ± paylaï¿½xÄ±ldÄ±ï¿½xÄ±nda daha doï¿½xru bir tesis teklifi hazÄ±rlanabilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Maden kurutma ve eleme tesisi hangi sektÃ¶rlerde kullanÄ±lÄ±r?",
        answer:
          "Silis, kuvars ve farklÄ± mineral Ã¼rÃ¼nlerin kurutma, sÄ±nÄ±flandÄ±rma ve sevkiyat Ã¶ncesi hazÄ±rlanmasÄ±nda yaygÄ±n kullanÄ±lÄ±r.",
      },
      {
        question: "KÄ±rma eleme kurutma tesisi neden birlikte dÃ¼ï¿½xÃ¼nÃ¼lmelidir?",
        answer:
          "ï¿½!Ã¼nkÃ¼ kÄ±rÄ±cÄ± Ã§Ä±kÄ±ï¿½xÄ±, kurutma yÃ¼kÃ¼ ve eleme performansÄ± birbirine baï¿½xlÄ±dÄ±r; biri yanlÄ±ï¿½x seÃ§ilirse tÃ¼m hat verimi etkilenir.",
      },
      {
        question: "Maden kurutma tesisinde filtre gerekli midir?",
        answer:
          "BirÃ§ok mineral uygulamasÄ±nda toz kontrolÃ¼ iÃ§in siklon ve filtre hattÄ± Ã¶nemli bir ihtiyaÃ§tÄ±r.",
      },
      {
        question: "Kapasite nasÄ±l belirlenir?",
        answer:
          "Ton/saat, Ã¼rÃ¼n nemi, giriï¿½x boyutu ve hedef fraksiyonlara gÃ¶re kurutma ve eleme dengesi birlikte kurulur.",
      },
      {
        question: "KonveyÃ¶r seÃ§imi neden Ã¶nemlidir?",
        answer:
          "Kurutma sonrasÄ± Ã¼rÃ¼nÃ¼n kÄ±rÄ±lmadan ve birikme yapmadan stok hattÄ±na taï¿½xÄ±nmasÄ± iÃ§in doï¿½xru konveyÃ¶r omurgasÄ± gerekir.",
      },
    ],
    ctaText:
      "Maden kurutma ve eleme tesisi iÃ§in Ã¼rÃ¼n verilerinizi paylaï¿½xÄ±n; kÄ±rma, kurutma, sÄ±nÄ±flandÄ±rma ve taï¿½xÄ±ma omurgasÄ±nÄ± birlikte netleï¿½xtirelim.",
    showForm: true,
    technicalContents: commonTechnicalContents,
    keyLinks: [
      { label: "Silis Kumu Kurutma Tesisi", href: "/hizmetler/silis-kumu-kurutma-tesisi" },
      { label: "Kurutma Tamburu Ä°malatÄ±", href: "/hizmetler/kurutma-tamburu-imalati" },
      { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
      { label: "SektÃ¶rler", href: "/sektorler" },
    ],
  },
  "granul-gubre-uretim-tesisi": {
    title: "GranÃ¼l GÃ¼bre ï¿½Sretim Tesisi | GranÃ¼lasyon ï¿½!Ã¶zÃ¼mleri",
    description:
      "GranÃ¼l gÃ¼bre Ã¼retim tesisi ve organomineral granÃ¼l gÃ¼bre hattÄ± iÃ§in granÃ¼lasyon, kurutma, eleme ve paketleme Ã§Ã¶zÃ¼mleri sunuyoruz.",
    canonical: "https://www.promakina.com.tr/hizmetler/granul-gubre-uretim-tesisi",
    image: "/images/01-genel/hizmetler1.png",
    serviceName: "GranÃ¼l GÃ¼bre ï¿½Sretim Tesisi",
    introTitle: "GranÃ¼lasyon, Kurutma ve SÄ±nÄ±flandÄ±rma Ä°Ã§in Entegre GÃ¼bre HattÄ±",
    introParagraphs: [
      "GranÃ¼l gÃ¼bre Ã¼retim tesisi, toz veya karÄ±ï¿½xÄ±m haldeki hammaddelerin kontrollÃ¼ granÃ¼l forma dÃ¶nÃ¼ï¿½xtÃ¼rÃ¼lmesi, kurutulmasÄ±, soï¿½xutulmasÄ±, elenmesi ve paketlenmesi iÃ§in tasarlanan entegre bir Ã¼retim hattÄ±dÄ±r. ï¿½zellikle organomineral granÃ¼l gÃ¼bre hattÄ± planlayan yatÄ±rÄ±mcÄ±lar iÃ§in granÃ¼latÃ¶r tamburu, kurutma tamburu ve eleme sistemi arasÄ±ndaki denge Ã¼retim baï¿½xarÄ±sÄ±nÄ± belirler.",
      "Pro Makina, granÃ¼lasyon tesisi kurgusunda proses mÃ¼hendisliï¿½xi, tambur sistemleri, konveyÃ¶rler, bunkerden paketlemeye kadar tÃ¼m mekanik omurgayÄ± tek proje mantÄ±ï¿½xÄ±nda birleï¿½xtirir. BÃ¶ylece yatÄ±rÄ±mcÄ±, hem iÃ§ pazara hem ihracata uygun daha kararlÄ± granÃ¼l kalite standardÄ± elde eder.",
    ],
    cards: [
      {
        title: "Kurutma TamburlarÄ±",
        description:
          "GranÃ¼l sonrasÄ± hedef son neme ulaï¿½xmak iÃ§in kullanÄ±lan endÃ¼striyel rotary dryer Ã§Ã¶zÃ¼mleri.",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
      },
      {
        title: "GranÃ¼latÃ¶r Tamburu",
        description:
          "GranÃ¼l yapÄ± oluï¿½xumunun merkezinde yer alan tambur tipi ve proses iliï¿½xkisini inceleyin.",
        href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu",
      },
      {
        title: "Soï¿½xutma ve Kaplama Tamburu",
        description:
          "GranÃ¼l dayanÄ±mÄ±, sÄ±caklÄ±k dÃ¼ï¿½xÃ¼rme ve son yÃ¼zey performansÄ± iÃ§in tamamlayÄ±cÄ± tambur sistemleri.",
        href: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu",
      },
      {
        title: "Eleme Sistemleri",
        description:
          "Ticari Ã¼rÃ¼n standardÄ± iÃ§in geri devir ve son fraksiyon kontrolÃ¼nÃ¼ yÃ¶neten eleme hattÄ±.",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
      },
    ],
    cardsTitle: "KullanÄ±m AlanlarÄ± ve Ä°lgili Ana Makineler",
    cardsDescription:
      "GranÃ¼l gÃ¼bre Ã¼retim tesisinde granÃ¼lasyon, kurutma, soï¿½xutma, eleme ve paketleme aynÄ± kalite hedefi etrafÄ±nda Ã§Ã¶zÃ¼lmelidir.",
    summaryRows: [
      {
        criterion: "GranÃ¼lasyon Dengesi",
        description:
          "Baï¿½xlayÄ±cÄ±, geri devir, tambur yÃ¼kÃ¼ ve Ã¼rÃ¼n davranÄ±ï¿½xÄ± birlikte deï¿½xerlendirilir.",
        importance:
          "GranÃ¼l dayanÄ±mÄ± ve hedef tane daï¿½xÄ±lÄ±mÄ±nÄ± belirler.",
      },
      {
        criterion: "Termal YÃ¼k",
        description:
          "Kurutma tamburunun nem azaltma yÃ¼kÃ¼ granÃ¼latÃ¶r Ã§Ä±kÄ±ï¿½xÄ±yla birlikte hesaplanÄ±r.",
        importance:
          "HattÄ±n darboï¿½xaz oluï¿½xturmadan Ã§alÄ±ï¿½xmasÄ±nÄ± saï¿½xlar.",
      },
      {
        criterion: "Eleme ve Geri Devir",
        description:
          "Ä°nce ve iri fraksiyonlarÄ±n geri dÃ¶nÃ¼ï¿½x oranÄ± stabil Ã¼rÃ¼n standardÄ± iÃ§in planlanÄ±r.",
        importance:
          "GerÃ§ek hat verimi ve paketleme temposunu gÃ¼Ã§lendirir.",
      },
      {
        criterion: "Paketleme Uyumu",
        description:
          "Son Ã¼rÃ¼n sÄ±caklÄ±ï¿½xÄ± ve nemi torbalama davranÄ±ï¿½xÄ±nÄ± etkiler.",
        importance:
          "Ticari sevkiyat kalitesini doï¿½xrudan belirler.",
      },
    ],
    sections: [
      {
        title: "KullanÄ±m AlanlarÄ±",
        paragraphs: [
          "GranÃ¼l gÃ¼bre Ã¼retim tesisi; NPK, organomineral granÃ¼l, mineral bazlÄ± karÄ±ï¿½xÄ±mlar ve farklÄ± ticari gÃ¼bre reÃ§etelerinde kullanÄ±lÄ±r. TarÄ±msal pazarÄ±n fiziksel dayanÄ±mÄ± yÃ¼ksek, sevkiyata uygun Ã¼rÃ¼n beklentisi nedeniyle granÃ¼lasyon tesisleri yatÄ±rÄ±m tarafÄ±nda gÃ¼Ã§lÃ¼ talep gÃ¶rÃ¼r.",
        ],
      },
      {
        title: "Hangi Hammaddeler ve ï¿½SrÃ¼nler Ä°Ã§in Uygundur?",
        paragraphs: [
          "Ä°nce toz hammaddeler, mineral karÄ±ï¿½xÄ±mlar, organomineral reÃ§eteler, farklÄ± baï¿½xlayÄ±cÄ± stratejileriyle Ã§alÄ±ï¿½xan karÄ±ï¿½xÄ±mlar ve ticari granÃ¼l hedefi taï¿½xÄ±yan Ã¼rÃ¼nler iÃ§in uygundur. Her reÃ§ete farklÄ± nem ve davranÄ±ï¿½x gÃ¶sterdiï¿½xi iÃ§in granÃ¼lasyon tesisi mutlaka prosese gÃ¶re ï¿½xekillendirilmelidir.",
        ],
      },
      {
        title: "Teknik ï¿½zellikler",
        paragraphs: [
          "GranÃ¼latÃ¶r tamburu, kurutma tamburu, soï¿½xutma tamburu, kaplama tamburu, elek sistemi, konveyÃ¶rler, helezonlar, bunkerler ve paketleme ekipmanlarÄ± hat omurgasÄ±nÄ± oluï¿½xturur. Bu makinelerin her biri yalnÄ±z kapasite deï¿½xil, Ã¼rÃ¼n davranÄ±ï¿½xÄ± Ã¼zerinden seÃ§ilir.",
        ],
      },
      {
        title: "Kapasite ve TasarÄ±m Kriterleri",
        paragraphs: [
          "Ton/saat hedefi, geri devir oranÄ±, baï¿½xlayÄ±cÄ± ihtiyacÄ±, hedef tane boyutu, son nem ve paketleme temposu birlikte deï¿½xerlendirilir. GranÃ¼l gÃ¼bre Ã¼retim tesisinde tambur sistemlerinin uyumsuz seÃ§ilmesi, teorik kapasite yÃ¼ksek gÃ¶rÃ¼nse bile sahada darboï¿½xaz yaratÄ±r.",
        ],
      },
      {
        title: "Proses Ä°Ã§indeki Yeri",
        paragraphs: [
          "GranÃ¼lasyon tesisi; hammaddenin ticari granÃ¼l Ã¼rÃ¼ne dÃ¶nÃ¼ï¿½xtÃ¼rÃ¼ldÃ¼ï¿½xÃ¼ ana deï¿½xer yaratma hattÄ±dÄ±r. KarÄ±ï¿½xtÄ±rma sonrasÄ± granÃ¼l oluï¿½xumu, kurutma, soï¿½xutma ve eleme adÄ±mlarÄ± bu hatta birbirine baï¿½xÄ±mlÄ± ï¿½xekilde Ã§alÄ±ï¿½xÄ±r.",
        ],
      },
      {
        title: "Opsiyonel Ekipmanlar",
        paragraphs: [
          "Kaplama tamburu, jet pulse filtre, siklon, paketleme sistemleri, bunker karÄ±ï¿½xtÄ±rÄ±cÄ±larÄ±, dozajlama hatlarÄ± ve otomasyon altyapÄ±sÄ± proje bÃ¼yÃ¼klÃ¼ï¿½xÃ¼ne gÃ¶re ilave edilir.",
        ],
      },
      {
        title: "Avantajlar",
        paragraphs: [
          "Doï¿½xru planlanmÄ±ï¿½x granÃ¼l gÃ¼bre Ã¼retim tesisi daha kararlÄ± Ã¼rÃ¼n standardÄ±, daha dÃ¼ï¿½xÃ¼k geri devir stresi, daha iyi sevkiyat performansÄ± ve daha yÃ¼ksek ticari deï¿½xer saï¿½xlar. Organomineral granÃ¼l gÃ¼bre hattÄ±nda bu avantajlar marka farkÄ± yaratÄ±r.",
        ],
      },
      {
        title: "Teklif Almak Ä°Ã§in Gerekli Bilgiler",
        paragraphs: [
          "ï¿½SrÃ¼n reÃ§etesi, kapasite, hedef tane aralÄ±ï¿½xÄ±, giriï¿½x nemi, baï¿½xlayÄ±cÄ± yaklaï¿½xÄ±mÄ±, otomasyon seviyesi ve paketleme senaryosu paylaï¿½xÄ±lÄ±rsa daha doï¿½xru granÃ¼lasyon tesisi teklifi hazÄ±rlanabilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "GranÃ¼l gÃ¼bre Ã¼retim tesisi ile organomineral granÃ¼l gÃ¼bre hattÄ± aynÄ± mÄ±dÄ±r?",
        answer:
          "Temel granÃ¼lasyon mantÄ±ï¿½xÄ± benzese de organik iÃ§erik ve nem davranÄ±ï¿½xÄ± nedeniyle organomineral hatlar daha Ã¶zel deï¿½xerlendirilir.",
      },
      {
        question: "GranÃ¼latÃ¶r tamburu neden kritik ekipmandÄ±r?",
        answer:
          "GranÃ¼l oluï¿½xumu burada baï¿½xladÄ±ï¿½xÄ± iÃ§in tambur yÃ¼kÃ¼, iÃ§ geometri ve baï¿½xlayÄ±cÄ± davranÄ±ï¿½xÄ± tÃ¼m hat kalitesini etkiler.",
      },
      {
        question: "Kurutma tamburu her granÃ¼l tesiste gerekir mi?",
        answer:
          "BirÃ§ok granÃ¼l gÃ¼bre hattÄ±nda hedef son nem ve sevkiyat gÃ¼veni iÃ§in kurutma tamburu Ã¶nemli bir ihtiyaÃ§tÄ±r.",
      },
      {
        question: "Eleme sistemi neden Ã¶nemlidir?",
        answer:
          "Ticari Ã¼rÃ¼n standardÄ± ve geri devir oranÄ±nÄ±n kontrolÃ¼ iÃ§in eleme sistemi kritik rol oynar.",
      },
      {
        question: "Teklif Ã§alÄ±ï¿½xmasÄ± iÃ§in hangi veriler gereklidir?",
        answer:
          "ReÃ§ete, kapasite, hedef granÃ¼l boyutu, nem deï¿½xerleri ve paketleme senaryosu teklif iÃ§in temel verileri oluï¿½xturur.",
      },
    ],
    ctaText:
      "GranÃ¼l gÃ¼bre Ã¼retim tesisi, organomineral granÃ¼l gÃ¼bre hattÄ± ve tambur sistemleri iÃ§in Ã¼rÃ¼n hedeflerinizi paylaï¿½xÄ±n; size uygun proses kurgusunu birlikte oluï¿½xturalÄ±m.",
    showForm: true,
    technicalContents: commonTechnicalContents,
    keyLinks: [
      { label: "Kurutma Tamburu Ä°malatÄ±", href: "/hizmetler/kurutma-tamburu-imalati" },
      { label: "GranÃ¼latÃ¶r Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu" },
      { label: "Kaplama Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburu" },
      { label: "Eleme Sistemleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
    ],
  },
  "organomineral-gubre-tesisi": {
    title: "Organomineral GÃ¼bre Tesisi | GranÃ¼lasyon HattÄ±",
    description:
      "Organomineral gÃ¼bre tesisi ve organomineral gÃ¼bre Ã¼retim hattÄ± iÃ§in granÃ¼lasyon, kurutma, eleme ve paketleme Ã§Ã¶zÃ¼mleri sunuyoruz.",
    canonical: "https://www.promakina.com.tr/hizmetler/organomineral-gubre-tesisi",
    image: "/images/01-genel/hizmetler1.png",
    serviceName: "Organomineral GÃ¼bre Tesisi",
    introTitle: "Organik ve Mineral Ä°Ã§eriï¿½xi Tek Hatta Buluï¿½xturan ï¿½Sretim Kurgusu",
    introParagraphs: [
      "Organomineral gÃ¼bre tesisi, organik kaynaklÄ± girdiler ile mineral bileï¿½xenleri dengeli biÃ§imde iï¿½xleyen, granÃ¼l veya toz Ã¼rÃ¼n standardÄ±na uygun son Ã¼rÃ¼n Ã§Ä±karan Ã¶zel bir Ã¼retim altyapÄ±sÄ±dÄ±r. Organomineral gÃ¼bre Ã¼retim hattÄ± kurulurken karÄ±ï¿½xÄ±m davranÄ±ï¿½xÄ±, nem dengesi, granÃ¼lasyon performansÄ± ve kurutma yÃ¼kÃ¼ birlikte okunmalÄ±dÄ±r.",
      "Pro Makina, organomineral gÃ¼bre tesislerinde proses tasarÄ±mÄ±, taï¿½xÄ±ma ve dozajlama omurgasÄ±, granÃ¼latÃ¶r tamburu, kurutma-soï¿½xutma tamburlarÄ±, eleme ve paketleme altyapÄ±sÄ±nÄ± tek proje yÃ¶netimi iÃ§inde ele alÄ±r. BÃ¶ylece yatÄ±rÄ±mcÄ± yalnÄ±z makina deï¿½xil, sÃ¼rdÃ¼rÃ¼lebilir kalite sunan bir Ã¼retim sistemi kazanÄ±r.",
    ],
    cards: [
      {
        title: "GranÃ¼l GÃ¼bre ï¿½Sretim Tesisi",
        description:
          "GranÃ¼l Ã¼rÃ¼n odaklÄ± tesis kurgusunun ana omurgasÄ±nÄ± daha geniï¿½x perspektifle inceleyin.",
        href: "/hizmetler/granul-gubre-uretim-tesisi",
      },
      {
        title: "Kurutma Tamburu",
        description:
          "Son nem ve granÃ¼l dayanÄ±mÄ±nÄ± ï¿½xekillendiren tambur sistemi seÃ§imini gÃ¶rÃ¼n.",
        href: "/hizmetler/kurutma-tamburu-imalati",
      },
      {
        title: "Helezon ve Besleme HatlarÄ±",
        description:
          "Toz ve organik girdilerin kontrollÃ¼ dozaj ve transferi iÃ§in taï¿½xÄ±ma omurgasÄ±nÄ± inceleyin.",
        href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
      },
      {
        title: "Eleme ve Geri Devir",
        description:
          "Son Ã¼rÃ¼n standardÄ± ve geri dÃ¶nÃ¼ï¿½x akÄ±ï¿½xÄ±nÄ± belirleyen sÄ±nÄ±flandÄ±rma yapÄ±sÄ±nÄ± tamamlayÄ±n.",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
      },
    ],
    cardsTitle: "KullanÄ±m AlanlarÄ± ve Ä°lgili Ana Makineler",
    cardsDescription:
      "Organomineral gÃ¼bre tesisinde hammaddelerin davranÄ±ï¿½xÄ± kadar, besleme ve granÃ¼lasyon hattÄ±nÄ±n ritmi de kaliteyi belirler.",
    summaryRows: [
      {
        criterion: "Hammadde Uyumu",
        description:
          "Organik iÃ§erik, mineral bileï¿½xen ve baï¿½xlayÄ±cÄ± davranÄ±ï¿½xÄ± aynÄ± tabloda deï¿½xerlendirilir.",
        importance:
          "GranÃ¼l oluï¿½xumu ve Ã¼rÃ¼n homojenliï¿½xi aÃ§Ä±sÄ±ndan belirleyicidir.",
      },
      {
        criterion: "Besleme ve Dozajlama",
        description:
          "Helezon, bant ve bunker yapÄ±sÄ± farklÄ± akÄ±ï¿½x karakterindeki hammaddeleri dengeli taï¿½xÄ±r.",
        importance:
          "KarÄ±ï¿½xÄ±m kararlÄ±lÄ±ï¿½xÄ± ve hat sÃ¼rekliliï¿½xini gÃ¼Ã§lendirir.",
      },
      {
        criterion: "Termal Denge",
        description:
          "Kurutma ve soï¿½xutma adÄ±mlarÄ± Ã¼rÃ¼n stabilitesi ve depolama davranÄ±ï¿½xÄ±na gÃ¶re boyutlandÄ±rÄ±lÄ±r.",
        importance:
          "Son Ã¼rÃ¼n nemi ve ticari dayanÄ±mÄ± belirler.",
      },
      {
        criterion: "Geri Devir YÃ¶netimi",
        description:
          "Elek sonrasÄ± ince ve iri fraksiyon akÄ±ï¿½xÄ± proses iÃ§inde yeniden kullanÄ±lÄ±r.",
        importance:
          "GranÃ¼l standardÄ±nÄ± ve hat verimini korur.",
      },
    ],
    sections: [
      {
        title: "KullanÄ±m AlanlarÄ±",
        paragraphs: [
          "Organomineral gÃ¼bre tesisi, tarÄ±msal pazara daha yÃ¼ksek katma deï¿½xerli Ã¼rÃ¼n sunmak isteyen Ã¼reticiler iÃ§in uygundur. ï¿½zellikle granÃ¼l form talebinin yÃ¼ksek olduï¿½xu pazarlarda organik iÃ§erik ile mineral bileï¿½xenleri aynÄ± kalite standardÄ±nda birleï¿½xtiren hatlar Ã¶ne Ã§Ä±kar.",
        ],
      },
      {
        title: "Hangi Hammaddeler ve ï¿½SrÃ¼nler Ä°Ã§in Uygundur?",
        paragraphs: [
          "Organik kaynaklÄ± fraksiyonlar, mineral katkÄ±lar, toz gÃ¼bre bileï¿½xenleri ve granÃ¼l son Ã¼rÃ¼n hedefleyen reÃ§eteler iÃ§in uygundur. Organik iÃ§eriï¿½xin lif yapÄ±sÄ± ve nemi, hattÄ±n karÄ±ï¿½xtÄ±rma ve kurutma mantÄ±ï¿½xÄ±nÄ± doï¿½xrudan etkiler.",
        ],
      },
      {
        title: "Teknik ï¿½zellikler",
        paragraphs: [
          "Besleme bunkerleri, helezonlar, konveyÃ¶rler, karÄ±ï¿½xtÄ±rÄ±cÄ±lar, granÃ¼latÃ¶r tamburu, kurutma tamburu, soï¿½xutma tamburu, elekler ve paketleme ekipmanlarÄ± organomineral gÃ¼bre Ã¼retim hattÄ±nÄ±n omurgasÄ±nÄ± oluï¿½xturur.",
        ],
      },
      {
        title: "Kapasite ve TasarÄ±m Kriterleri",
        paragraphs: [
          "Kapasite belirlenirken ton/saat deï¿½xeri kadar organik iÃ§erik oranÄ±, geri devir ihtiyacÄ±, hedef tane aralÄ±ï¿½xÄ± ve Ã¼rÃ¼n nemi de deï¿½xerlendirilir. Organomineral gÃ¼bre tesisi tasarÄ±mÄ±nda standart reÃ§ete yaklaï¿½xÄ±mÄ± Ã§oï¿½xu zaman yeterli deï¿½xildir; gerÃ§ek Ã¼rÃ¼n davranÄ±ï¿½xÄ± sahaya gÃ¶re okunmalÄ±dÄ±r.",
        ],
      },
      {
        title: "Proses Ä°Ã§indeki Yeri",
        paragraphs: [
          "Bu tesis, Ã¼rÃ¼nÃ¼n yalnÄ±z karÄ±ï¿½xtÄ±rÄ±ldÄ±ï¿½xÄ± deï¿½xil; ticari granÃ¼l forma dÃ¶nÃ¼ï¿½xtÃ¼rÃ¼ldÃ¼ï¿½xÃ¼ ana Ã¼retim hattÄ±dÄ±r. KarÄ±ï¿½xÄ±m, granÃ¼lasyon, kurutma, eleme ve paketleme aynÄ± kalite hedefiyle Ã§alÄ±ï¿½xÄ±r.",
        ],
      },
      {
        title: "Opsiyonel Ekipmanlar",
        paragraphs: [
          "Kaplama tamburu, toz toplama sistemleri, ek bunkerler, otomasyon modÃ¼lleri, farklÄ± paketleme formatlarÄ± ve servis platformlarÄ± projeye gÃ¶re ilave edilebilir.",
        ],
      },
      {
        title: "Avantajlar",
        paragraphs: [
          "Doï¿½xru tasarlanmÄ±ï¿½x organomineral gÃ¼bre tesisi daha kararlÄ± granÃ¼l kalite, daha dÃ¼ï¿½xÃ¼k Ã¼rÃ¼n kaybÄ±, daha iyi depolama davranÄ±ï¿½xÄ± ve yÃ¼ksek ticari farklÄ±laï¿½xma saï¿½xlar.",
        ],
      },
      {
        title: "Teklif Almak Ä°Ã§in Gerekli Bilgiler",
        paragraphs: [
          "ReÃ§ete yapÄ±sÄ±, kapasite, hedef Ã¼rÃ¼n formu, organik iÃ§erik oranÄ±, paketleme senaryosu ve saha bilgileri teklif oluï¿½xturmak iÃ§in kritik baï¿½xlangÄ±Ã§ verileridir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Organomineral gÃ¼bre tesisi ile granÃ¼l gÃ¼bre tesisi aynÄ± mÄ±dÄ±r?",
        answer:
          "Benzer ekipmanlar kullanÄ±labilir; ancak organik iÃ§erik ve nem davranÄ±ï¿½xÄ± nedeniyle organomineral hatlar daha Ã¶zel tasarÄ±m ister.",
      },
      {
        question: "Helezon ve konveyÃ¶r seÃ§imi neden Ã¶nemlidir?",
        answer:
          "FarklÄ± akÄ±ï¿½x karakterine sahip hammaddelerin kontrollÃ¼ dozaj ve transferi granÃ¼l kalitesini doï¿½xrudan etkiler.",
      },
      {
        question: "Kurutma tamburu organomineral hatta gerekli midir?",
        answer:
          "BirÃ§ok granÃ¼l uygulamada Ã¼rÃ¼n stabilitesi ve depolama performansÄ± iÃ§in kurutma tamburu Ã¶nemli rol oynar.",
      },
      {
        question: "Eleme sistemi neden kritiktir?",
        answer:
          "Son Ã¼rÃ¼n standardÄ± ile geri devir oranÄ± elek sisteminde ï¿½xekillenir; bu adÄ±m proses verimini belirler.",
      },
      {
        question: "Teklif iÃ§in hangi bilgiler gereklidir?",
        answer:
          "ï¿½SrÃ¼n reÃ§etesi, kapasite, hedef Ã¼rÃ¼n formu ve mevcut saha verileri teklif kurgusunun temelini oluï¿½xturur.",
      },
    ],
    ctaText:
      "Organomineral gÃ¼bre tesisi, granÃ¼lasyon hattÄ± ve yardÄ±mcÄ± ekipman seÃ§imi iÃ§in Ã¼rÃ¼n ve kapasite hedeflerinizi paylaï¿½xÄ±n; size uygun tesis kurgusunu birlikte hazÄ±rlayalÄ±m.",
    showForm: true,
    technicalContents: commonTechnicalContents,
    keyLinks: [
      { label: "GranÃ¼l GÃ¼bre ï¿½Sretim Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { label: "Kurutma Tamburu Ä°malatÄ±", href: "/hizmetler/kurutma-tamburu-imalati" },
      { label: "VidalÄ± Helezonlar", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
      { label: "SektÃ¶rler", href: "/sektorler" },
    ],
  },
  "sivi-gubre-uretim-tesisi": {
    title: "SÄ±vÄ± GÃ¼bre ï¿½Sretim Tesisi | Anahtar Teslim ï¿½!Ã¶zÃ¼mler",
    description:
      "SÄ±vÄ± gÃ¼bre Ã¼retim tesisi, sÄ±vÄ± gÃ¼bre Ã¼retim hattÄ± ve organomineral sÄ±vÄ± gÃ¼bre tesisleri iÃ§in tank, reaktÃ¶r ve dolum Ã§Ã¶zÃ¼mleri sunuyoruz.",
    canonical: "https://www.promakina.com.tr/hizmetler/sivi-gubre-uretim-tesisi",
    image: "/images/01-genel/hizmetler1.png",
    serviceName: "SÄ±vÄ± GÃ¼bre ï¿½Sretim Tesisi",
    introTitle: "SÄ±vÄ± Organomineral, NPK ve ï¿½zel FormÃ¼l ï¿½Sretim HatlarÄ±",
    introParagraphs: [
      "SÄ±vÄ± gÃ¼bre Ã¼retim tesisi, Ã§Ã¶zÃ¼ndÃ¼rme, reaksiyon, karÄ±ï¿½xtÄ±rma, homojenizasyon, filtrasyon ve dolum adÄ±mlarÄ±nÄ± bir arada yÃ¶neten hassas bir proses yatÄ±rÄ±m alanÄ±dÄ±r. SÄ±vÄ± gÃ¼bre Ã¼retim hattÄ± planlanÄ±rken Ã¼rÃ¼n formÃ¼lasyonu kadar tank malzemesi, karÄ±ï¿½xtÄ±rÄ±cÄ± gÃ¼cÃ¼, hat temizlenebilirliï¿½xi ve dolum disiplini de Ã¶nem taï¿½xÄ±r.",
      "Pro Makina, organomineral sÄ±vÄ± gÃ¼bre tesisi ve sÄ±vÄ± NPK hatlarÄ±nda proses mÃ¼hendisliï¿½xi, reaktÃ¶r-tank seÃ§imi, borulama, pompalar, filtreleme ve dolum altyapÄ±sÄ±nÄ± tek proje akÄ±ï¿½xÄ±nda birleï¿½xtirir. BÃ¶ylece yatÄ±rÄ±mcÄ± daha tekrarlanabilir parti kalitesi ve daha kontrollÃ¼ ticari sevkiyat altyapÄ±sÄ± elde eder.",
    ],
    cards: [
      {
        title: "ReaktÃ¶rler ve Tanklar",
        description:
          "SÄ±vÄ± Ã¼rÃ¼nlerde Ã§Ã¶zÃ¼ndÃ¼rme, reaksiyon ve stoklama iÃ§in kullanÄ±lan proses ekipmanlarÄ±nÄ± inceleyin.",
        href: "/makinalar-ekipman/reaktorler-ve-tanklar",
      },
      {
        title: "Dozaj ve Besleme OmurgasÄ±",
        description:
          "SÄ±vÄ± ve katÄ± katkÄ±larÄ±n hassas karÄ±ï¿½xÄ±mÄ±nÄ± destekleyen yardÄ±mcÄ± akÄ±ï¿½x altyapÄ±sÄ±.",
        href: "/makinalar-ekipman/dozajlama-sistemleri",
      },
      {
        title: "Organomineral GÃ¼bre Tesisi",
        description:
          "KatÄ± ve sÄ±vÄ± Ã¼rÃ¼n ailelerini birlikte deï¿½xerlendirmek iÃ§in ilgili Ã¼retim altyapÄ±sÄ±nÄ± gÃ¶rÃ¼n.",
        href: "/hizmetler/organomineral-gubre-tesisi",
      },
      {
        title: "Ä°letiï¿½xim ve Teknik GÃ¶rÃ¼ï¿½xme",
        description:
          "FormÃ¼lasyon ve kapasite verilerinizi paylaï¿½xarak Ã¶n teknik deï¿½xerlendirme alÄ±n.",
        href: "/iletisim",
      },
    ],
    cardsTitle: "KullanÄ±m AlanlarÄ± ve Ä°lgili Ana Makineler",
    cardsDescription:
      "SÄ±vÄ± gÃ¼bre Ã¼retim tesislerinde proses kararlÄ±lÄ±ï¿½xÄ±, tank ve reaktÃ¶r seÃ§imi ile baï¿½xlar; dolum ve sevkiyat tarafÄ±nda tamamlanÄ±r.",
    summaryRows: [
      {
        criterion: "FormÃ¼lasyon YapÄ±sÄ±",
        description:
          "Organomineral, NPK veya Ã¶zel biyostimÃ¼lan formÃ¼ller farklÄ± Ã§Ã¶zÃ¼nÃ¼rlÃ¼k ve reaksiyon ihtiyacÄ± doï¿½xurur.",
        importance:
          "Tank, karÄ±ï¿½xtÄ±rÄ±cÄ± ve filtrasyon tasarÄ±mÄ±nÄ± belirler.",
      },
      {
        criterion: "Parti ï¿½!evrim SÃ¼resi",
        description:
          "ï¿½!Ã¶zÃ¼ndÃ¼rme, reaksiyon ve dolum sÃ¼releri toplam tesis kapasitesini belirler.",
        importance:
          "GerÃ§ek Ã¼retim ritmi ve yatÄ±rÄ±m verimliliï¿½xini etkiler.",
      },
      {
        criterion: "Hat Malzemesi",
        description:
          "ï¿½SrÃ¼nÃ¼n kimyasal karakteri pompa, vana, hat ve tank malzemesini belirler.",
        importance:
          "Korozyon, bakÄ±m ve Ã¼rÃ¼n gÃ¼venliï¿½xi aÃ§Ä±sÄ±ndan kritiktir.",
      },
      {
        criterion: "Dolum Senaryosu",
        description:
          "Bidon, IBC veya dÃ¶kme sevkiyat tercihi dolum altyapÄ±sÄ±nÄ± ï¿½xekillendirir.",
        importance:
          "Ticari operasyon ve hat esnekliï¿½xini gÃ¼Ã§lendirir.",
      },
    ],
    sections: [
      {
        title: "KullanÄ±m AlanlarÄ±",
        paragraphs: [
          "SÄ±vÄ± gÃ¼bre Ã¼retim tesisleri organomineral sÄ±vÄ± Ã¼rÃ¼nler, sÄ±vÄ± NPK, amino asitli Ã¼rÃ¼nler, deniz yosunu bazlÄ± Ã§Ã¶zÃ¼mler ve benzeri tarÄ±msal sÄ±vÄ± formÃ¼lasyonlarda kullanÄ±lÄ±r. FarklÄ± pazarlara farklÄ± ambalaj ve formÃ¼lasyon esnekliï¿½xi sunmak isteyen Ã¼reticiler iÃ§in gÃ¼Ã§lÃ¼ bir yatÄ±rÄ±m alanÄ±dÄ±r.",
        ],
      },
      {
        title: "Hangi Hammaddeler ve ï¿½SrÃ¼nler Ä°Ã§in Uygundur?",
        paragraphs: [
          "ï¿½!Ã¶zÃ¼nÃ¼r mineral girdiler, organik sÄ±vÄ± katkÄ±lar, mikro element Ã§Ã¶zeltileri ve farklÄ± yoï¿½xunlukta sÄ±vÄ± formÃ¼lasyonlar bu hatlarda Ã¼retilebilir. Burada belirleyici konu, hammaddelerin Ã§Ã¶zÃ¼nÃ¼rlÃ¼k davranÄ±ï¿½xÄ± ve parti kararlÄ±lÄ±ï¿½xÄ±dÄ±r.",
        ],
      },
      {
        title: "Teknik ï¿½zellikler",
        paragraphs: [
          "ï¿½!Ã¶zÃ¼ndÃ¼rme tanklarÄ±, reaktÃ¶rler, karÄ±ï¿½xtÄ±rÄ±cÄ±lar, homojenizatÃ¶rler, filtrasyon ekipmanlarÄ±, stok tanklarÄ±, pompalar ve dolum hatlarÄ± sÄ±vÄ± gÃ¼bre Ã¼retim tesisinin ana omurgasÄ±nÄ± oluï¿½xturur. Proses gÃ¼venliï¿½xi ve temizlenebilirlik tasarÄ±mÄ±n ayrÄ±lmaz parÃ§asÄ±dÄ±r.",
        ],
      },
      {
        title: "Kapasite ve TasarÄ±m Kriterleri",
        paragraphs: [
          "Parti hacmi, gÃ¼nlÃ¼k tonaj, formÃ¼l deï¿½xiï¿½xim sÄ±klÄ±ï¿½xÄ±, filtrasyon sÃ¼resi ve dolum temposu bir arada deï¿½xerlendirilir. SÄ±vÄ± gÃ¼bre Ã¼retim hattÄ± iÃ§in doï¿½xru tank hacmi yalnÄ±z tek parti bÃ¼yÃ¼klÃ¼ï¿½xÃ¼ne gÃ¶re deï¿½xil, toplam Ã§evrim sÃ¼resine gÃ¶re belirlenmelidir.",
        ],
      },
      {
        title: "Proses Ä°Ã§indeki Yeri",
        paragraphs: [
          "Bu tesis; hammaddenin kararlÄ± ve satÄ±labilir sÄ±vÄ± Ã¼rÃ¼ne dÃ¶nÃ¼ï¿½xtÃ¼ï¿½xÃ¼ ana Ã¼retim omurgasÄ±dÄ±r. ï¿½!Ã¶zÃ¼ndÃ¼rme ve reaksiyon adÄ±mÄ± ile baï¿½xlayan sÃ¼reÃ§, filtrasyon ve dolum ile ticari Ã¼rÃ¼ne dÃ¶nÃ¼ï¿½xÃ¼r.",
        ],
      },
      {
        title: "Opsiyonel Ekipmanlar",
        paragraphs: [
          "Ek stok tanklarÄ±, CIP benzeri temizlik sistemleri, ileri filtrasyon, dolum nozul paketleri, etiketleme ve otomasyon modÃ¼lleri projeye gÃ¶re ilave edilebilir.",
        ],
      },
      {
        title: "Avantajlar",
        paragraphs: [
          "Doï¿½xru kurgulanmÄ±ï¿½x sÄ±vÄ± gÃ¼bre Ã¼retim tesisi daha tutarlÄ± parti kalitesi, daha hÄ±zlÄ± Ã¼rÃ¼n deï¿½xiï¿½ximi, daha gÃ¼venli dolum ve daha dÃ¼ï¿½xÃ¼k kalite dalgalanmasÄ± saï¿½xlar. Bu da hem iÃ§ pazar hem ihracat hedefi iÃ§in Ã¶nemli bir avantajdÄ±r.",
        ],
      },
      {
        title: "Teklif Almak Ä°Ã§in Gerekli Bilgiler",
        paragraphs: [
          "ï¿½SrÃ¼n ailesi, gÃ¼nlÃ¼k kapasite, parti hacmi, hedef ambalaj tipi, reaktÃ¶r gereksinimi ve kimyasal uyum bilgileri paylaï¿½xÄ±lÄ±rsa daha net bir tesis Ã§Ã¶zÃ¼mÃ¼ hazÄ±rlanabilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "SÄ±vÄ± gÃ¼bre Ã¼retim tesisi hangi Ã¼rÃ¼nleri Ã¼retebilir?",
        answer:
          "Organomineral sÄ±vÄ± Ã¼rÃ¼nler, sÄ±vÄ± NPK, amino asitli ve benzeri Ã¶zel formÃ¼ller uygun proses tasarÄ±mÄ± ile aynÄ± tesiste yÃ¶netilebilir.",
      },
      {
        question: "ReaktÃ¶r mÃ¼ yoksa standart tank mÄ± gerekir?",
        answer:
          "Bu karar Ã¼rÃ¼nÃ¼n reaksiyon ihtiyacÄ±na, sÄ±caklÄ±k hassasiyetine ve Ã§Ã¶zÃ¼nÃ¼rlÃ¼k davranÄ±ï¿½xÄ±na gÃ¶re belirlenir.",
      },
      {
        question: "Filtrasyon her hatta gerekli midir?",
        answer:
          "BirÃ§ok sÄ±vÄ± gÃ¼bre hattÄ±nda Ã¼rÃ¼n kararlÄ±lÄ±ï¿½xÄ± ve saha uygulama gÃ¼veni iÃ§in filtrasyon Ã¶nemli bir ihtiyaÃ§tÄ±r.",
      },
      {
        question: "Dolum sistemi tasarÄ±mÄ±n parÃ§asÄ± mÄ±dÄ±r?",
        answer:
          "Evet. Ambalaj tipi ve sevkiyat modeli, Ã¼retim hattÄ±nÄ±n ticari baï¿½xarÄ±sÄ± iÃ§in tasarÄ±mÄ±n erken aï¿½xamasÄ±nda dÃ¼ï¿½xÃ¼nÃ¼lmelidir.",
      },
      {
        question: "Teklif iÃ§in hangi bilgiler gerekir?",
        answer:
          "FormÃ¼l tipi, kapasite, parti hacmi, ambalaj yapÄ±sÄ± ve saha gereksinimleri saï¿½xlÄ±klÄ± bir teklif iÃ§in temel baï¿½xlangÄ±Ã§ verileridir.",
      },
    ],
    ctaText:
      "SÄ±vÄ± gÃ¼bre Ã¼retim tesisi, organomineral sÄ±vÄ± gÃ¼bre tesisi ve dolum altyapÄ±sÄ± iÃ§in Ã¼rÃ¼n yapÄ±nÄ±zÄ± paylaï¿½xÄ±n; size uygun mÃ¼hendislik kurgusunu birlikte planlayalÄ±m.",
    showForm: true,
    technicalContents: commonTechnicalContents,
    keyLinks: [
      { label: "Organomineral GÃ¼bre Tesisi", href: "/hizmetler/organomineral-gubre-tesisi" },
      { label: "ReaktÃ¶rler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Makinalar", href: "/makinalar-ekipman" },
      { label: "Ä°letiï¿½xim", href: "/iletisim" },
    ],
  },
};

export function getWaveOneServicePage(slug: string) {
  const page = servicePages[slug];

  if (!page) {
    throw new Error(`Unknown SEO wave-one service slug: ${slug}`);
  }

  return page;
}

