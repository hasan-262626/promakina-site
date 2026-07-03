export type ProjectCardLink = {
  label: string;
  href: string;
};

export type ProjectPageData = {
  slug: string;
  aliases?: string[];
  title: string;
  cardDescription: string;
  heroDescription: string;
  image: string;
  imageAlt: string;
  metadataTitle: string;
  metadataDescription: string;
  projectScope: string[];
  machineGroups: string[];
  processFlow: string[];
  investorBenefits: string[];
  quoteRequirements: string[];
  relatedLinks: ProjectCardLink[];
};

export const projectPages: ProjectPageData[] = [
  {
    slug: "evsel-atiklardan-kompost-tesisi",
    aliases: ["kompost-tesisi-projeleri"],
    title: "Evsel AtÄ±klardan Kompost Tesisi Projesi",
    cardDescription:
      "Belediye kaynaklÄ± evsel organik atÄ±klarÄ±n ayrÄ±ï¿½xtÄ±rma, kompostlaï¿½xtÄ±rma, kurutma, eleme ve nihai Ã¼rÃ¼n hazÄ±rlama sÃ¼reÃ§lerini kapsayan kompost tesisi projeleri geliï¿½xtiriyoruz.",
    heroDescription:
      "Evsel organik atÄ±ï¿½xÄ±n kabulÃ¼nden son Ã¼rÃ¼n hazÄ±rlamaya kadar uzanan kompost tesislerinde proses akÄ±ï¿½xÄ±nÄ±, ekipman seÃ§imini ve saha yerleï¿½ximini birlikte kurguluyoruz.",
    image: "/images/kompost1.jpg",
    imageAlt: "Evsel atÄ±klardan kompost tesisi projesi",
    metadataTitle: "Evsel AtÄ±klardan Kompost Tesisi Projesi | Pro Makina",
    metadataDescription:
      "Evsel organik atÄ±klarÄ±n kompostlaï¿½xtÄ±rÄ±lmasÄ± iÃ§in ayrÄ±ï¿½xtÄ±rma, kurutma, eleme ve Ã¼rÃ¼n hazÄ±rlama odaklÄ± tesis projesini inceleyin.",
    projectScope: [
      "Evsel organik atÄ±ï¿½xÄ±n kabul, ayÄ±rma ve karÄ±ï¿½xÄ±m hazÄ±rlÄ±k yapÄ±sÄ±nÄ±n belirlenmesi",
      "Kompostlaï¿½xtÄ±rma, olgunlaï¿½xtÄ±rma, eleme ve son Ã¼rÃ¼n hazÄ±rlama adÄ±mlarÄ±nÄ±n projelendirilmesi",
      "Koku kontrolÃ¼, saha akÄ±ï¿½xÄ± ve bakÄ±m eriï¿½ximi kurgusunun netleï¿½xtirilmesi",
    ],
    machineGroups: [
      "Kompost tamburu ve olgunlaï¿½xtÄ±rma sistemleri",
      "Trommel elekler ve taï¿½xÄ±ma ekipmanlarÄ±",
      "Kurutma tamburu ve yardÄ±mcÄ± toz kontrol sistemleri",
    ],
    processFlow: [
      "AtÄ±k kabul ve Ã¶n ayrÄ±ï¿½xtÄ±rma",
      "Kompostlaï¿½xtÄ±rma ve olgunlaï¿½xtÄ±rma",
      "Eleme, gerekirse kurutma ve son Ã¼rÃ¼n hazÄ±rlama",
    ],
    investorBenefits: [
      "Belediye atÄ±k akÄ±ï¿½xÄ±na uygun saha ritmi kurulur",
      "Koku, nem ve son Ã¼rÃ¼n kalitesi birlikte yÃ¶netilir",
      "Geri kazanÄ±m deï¿½xerini yÃ¼kselten daha kontrollÃ¼ bir proses omurgasÄ± oluï¿½xur",
    ],
    quoteRequirements: [
      "GÃ¼nlÃ¼k atÄ±k tonajÄ± ve atÄ±k bileï¿½ximi",
      "Hedef son Ã¼rÃ¼n formu ve nem beklentisi",
      "Saha bÃ¼yÃ¼klÃ¼ï¿½xÃ¼ ve aÃ§Ä±k / kapalÄ± alan durumu",
    ],
    relatedLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      {
        label: "Evsel Organik AtÄ±klar",
        href: "/sektorler/kompost-ve-organik-atik-tesisleri/evsel-organik-atiklar",
      },
      {
        label: "Kompost Tamburu",
        href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
      },
      {
        label: "Trommel Elekler",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
      },
    ],
  },
  {
    slug: "hayvansal-atiklardan-kompost-tesisi",
    title: "Hayvansal AtÄ±klardan Kompost Tesisi Projesi",
    cardDescription:
      "BÃ¼yÃ¼kbaï¿½x, kÃ¼Ã§Ã¼kbaï¿½x ve kanatlÄ± hayvan atÄ±klarÄ±nÄ±n kontrollÃ¼ kompostlaï¿½xtÄ±rma, nem yÃ¶netimi, olgunlaï¿½xtÄ±rma ve Ã¼rÃ¼n hazÄ±rlama sÃ¼reÃ§lerini proje bazlÄ± ele alÄ±yoruz.",
    heroDescription:
      "Hayvansal atÄ±ï¿½xÄ±n karakterine gÃ¶re nem dengesi, yapÄ±sal katkÄ±, kompost ritmi ve ekipman yerleï¿½ximi belirlenerek uygulanabilir tesis kurgularÄ± geliï¿½xtiriyoruz.",
    image: "/images/kompost1.jpg",
    imageAlt: "Hayvansal atÄ±klardan kompost tesisi projesi",
    metadataTitle: "Hayvansal AtÄ±klardan Kompost Tesisi Projesi | Pro Makina",
    metadataDescription:
      "Hayvansal atÄ±klardan kompost Ã¼retimi iÃ§in nem yÃ¶netimi, olgunlaï¿½xtÄ±rma ve son Ã¼rÃ¼n hazÄ±rlama odaklÄ± tesis projesini inceleyin.",
    projectScope: [
      "Girdi nemi, lif yapÄ±sÄ± ve karbon-azot dengesine gÃ¶re prosesin okunmasÄ±",
      "Kompostlaï¿½xtÄ±rma, havalandÄ±rma ve olgunlaï¿½xtÄ±rma ekipmanlarÄ±nÄ±n seÃ§ilmesi",
      "Eleme, paketleme ve saha hijyeni odaklÄ± son Ã¼rÃ¼n yapÄ±sÄ±nÄ±n planlanmasÄ±",
    ],
    machineGroups: [
      "Kompost tamburu ve besleme bunkerleri",
      "Helezon ve bant konveyÃ¶r hatlarÄ±",
      "Trommel elekler ve paketleme sistemleri",
    ],
    processFlow: [
      "AtÄ±k kabul ve dengeleme",
      "Kompostlaï¿½xtÄ±rma ve olgunlaï¿½xtÄ±rma",
      "Eleme, Ã¼rÃ¼n hazÄ±rlama ve sevkiyat",
    ],
    investorBenefits: [
      "YÃ¼ksek nemli atÄ±kta daha kontrollÃ¼ proses kurulumu saï¿½xlanÄ±r",
      "Saha yÃ¶netimi ve hijyen kriterleri baï¿½xtan netleï¿½xir",
      "SatÄ±labilir veya kullanÄ±labilir son Ã¼rÃ¼ne geÃ§iï¿½x kolaylaï¿½xÄ±r",
    ],
    quoteRequirements: [
      "AtÄ±k tipi ve gÃ¼nlÃ¼k miktar",
      "Nem oranÄ± ve yapÄ±landÄ±rÄ±cÄ± malzeme bilgisi",
      "Beklenen son Ã¼rÃ¼n ve depolama koï¿½xullarÄ±",
    ],
    relatedLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      {
        label: "Kompost ve Organik AtÄ±k Tesisleri",
        href: "/sektorler/kompost-ve-organik-atik-tesisleri",
      },
      {
        label: "Kompost Tamburu",
        href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
      },
      {
        label: "Taï¿½xÄ±ma EkipmanlarÄ±",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
    ],
  },
  {
    slug: "tarimsal-atiklardan-kompost-tesisi",
    title: "TarÄ±msal AtÄ±klardan Kompost Tesisi Projesi",
    cardDescription:
      "Bitkisel Ã¼retim artÄ±klarÄ±, sera atÄ±klarÄ±, dal-budak, yaprak ve tarÄ±msal organik atÄ±klarÄ±n kompost Ã¼rÃ¼nÃ¼ne dÃ¶nÃ¼ï¿½xtÃ¼rÃ¼lmesi iÃ§in tesis projeleri hazÄ±rlÄ±yoruz.",
    heroDescription:
      "TarÄ±msal organik atÄ±klarda parÃ§alama, karÄ±ï¿½xÄ±m dengesi, kompostlaï¿½xtÄ±rma ve son Ã¼rÃ¼n hazÄ±rlama aï¿½xamalarÄ±nÄ± saha gerÃ§eklerine gÃ¶re projelendiriyoruz.",
    image: "/images/kompost1.jpg",
    imageAlt: "TarÄ±msal atÄ±klardan kompost tesisi projesi",
    metadataTitle: "TarÄ±msal AtÄ±klardan Kompost Tesisi Projesi | Pro Makina",
    metadataDescription:
      "TarÄ±msal organik atÄ±klarÄ±n kompost Ã¼rÃ¼nÃ¼ne dÃ¶nÃ¼ï¿½xtÃ¼rÃ¼lmesi iÃ§in parÃ§alama, kompostlaï¿½xtÄ±rma ve Ã¼rÃ¼n hazÄ±rlama odaklÄ± tesis projesini inceleyin.",
    projectScope: [
      "AtÄ±ï¿½xÄ±n lif yapÄ±sÄ± ve parÃ§alanma ihtiyacÄ±na gÃ¶re Ã¶n hazÄ±rlÄ±k adÄ±mlarÄ±nÄ±n kurulmasÄ±",
      "Kompostlaï¿½xtÄ±rma, olgunlaï¿½xtÄ±rma ve eleme sÃ¼recinin kapasiteyle uyumlu tasarlanmasÄ±",
      "AÃ§Ä±k saha, yarÄ± kapalÄ± saha veya kapalÄ± alan iÃ§in uygun yerleï¿½ximin kurgulanmasÄ±",
    ],
    machineGroups: [
      "ParÃ§alayÄ±cÄ±lar ve besleme ekipmanlarÄ±",
      "Kompost tamburlarÄ± ve taï¿½xÄ±ma hatlarÄ±",
      "Eleme, kurutma ve paketleme ekipmanlarÄ±",
    ],
    processFlow: [
      "ï¿½n hazÄ±rlÄ±k ve boyutlandÄ±rma",
      "Kompostlaï¿½xtÄ±rma ve olgunlaï¿½xtÄ±rma",
      "Eleme, son Ã¼rÃ¼n hazÄ±rlama ve depolama",
    ],
    investorBenefits: [
      "Sera ve tarla kaynaklÄ± atÄ±klar daha dÃ¼zenli deï¿½xerlendirilebilir",
      "Hammadde dalgalanmalarÄ± iÃ§in daha esnek proses kurulabilir",
      "Son Ã¼rÃ¼n standardÄ± daha Ã¶ngÃ¶rÃ¼lebilir hale gelir",
    ],
    quoteRequirements: [
      "AtÄ±k tÃ¼rÃ¼ ve sezonluk / gÃ¼nlÃ¼k tonaj",
      "ParÃ§alama ihtiyacÄ± ve nem seviyesi",
      "Son Ã¼rÃ¼n kullanÄ±m amacÄ± ve paketleme beklentisi",
    ],
    relatedLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      {
        label: "Kompost ve Organik AtÄ±k Tesisleri",
        href: "/sektorler/kompost-ve-organik-atik-tesisleri",
      },
      {
        label: "KÄ±rÄ±cÄ±lar ve ParÃ§alayÄ±cÄ±lar",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      },
      {
        label: "Trommel Elekler",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
      },
    ],
  },
  {
    slug: "1mw-biyogaz-tesisi",
    aliases: ["biyogaz-ve-atik-yonetimi-projeleri"],
    title: "1 MW Biyogaz Tesisi Projesi",
    cardDescription:
      "Hayvansal, tarÄ±msal ve organik atÄ±k kaynaklÄ± biyogaz Ã¼retimi iÃ§in besleme, Ã¶n iï¿½xlem, digestat yÃ¶netimi ve enerji Ã¼retim sÃ¼reÃ§lerini kapsayan 1 MW biyogaz tesisi projeleri geliï¿½xtiriyoruz.",
    heroDescription:
      "1 MW biyogaz yatÄ±rÄ±mlarÄ±nda besleme dÃ¼zeni, Ã¶n iï¿½xlem, digestat sonrasÄ± yÃ¶netim ve enerji sÃ¼rekliliï¿½xini birlikte ele alan saha odaklÄ± proje kurgularÄ± hazÄ±rlÄ±yoruz.",
    image: "/images/biogaz1.jpg",
    imageAlt: "1 MW biyogaz tesisi projesi",
    metadataTitle: "1 MW Biyogaz Tesisi Projesi | Pro Makina",
    metadataDescription:
      "1 MW biyogaz tesisi iÃ§in besleme, Ã¶n iï¿½xlem, digestat yÃ¶netimi ve enerji Ã¼retim odaklÄ± proje kurgusunu inceleyin.",
    projectScope: [
      "GÃ¼nlÃ¼k besleme tonajÄ± ve atÄ±k tipine gÃ¶re Ã¶n iï¿½xlem yapÄ±sÄ±nÄ±n belirlenmesi",
      "ReaktÃ¶r Ã¶ncesi kabul, parÃ§alama, taï¿½xÄ±ma ve dengeleme adÄ±mlarÄ±nÄ±n planlanmasÄ±",
      "Digestat sonrasÄ± deï¿½xerlendirme ve saha lojistiï¿½xinin projelendirilmesi",
    ],
    machineGroups: [
      "Besleme bunkerleri ve konveyÃ¶r hatlarÄ±",
      "Shredder sistemleri ve yardÄ±mcÄ± Ã¶n iï¿½xlem ekipmanlarÄ±",
      "Digestat taï¿½xÄ±ma, kurutma veya kompostlaï¿½xtÄ±rma ekipmanlarÄ±",
    ],
    processFlow: [
      "AtÄ±k kabul ve Ã¶n iï¿½xlem",
      "Besleme ve biyogaz Ã¼retim sÃ¼reci",
      "Digestat yÃ¶netimi ve yan Ã¼rÃ¼n hazÄ±rlÄ±ï¿½xÄ±",
    ],
    investorBenefits: [
      "Besleme ritmi ve enerji Ã¼retim sÃ¼rekliliï¿½xi birlikte deï¿½xerlendirilir",
      "Digestat sonrasÄ± maliyet ve Ã¼rÃ¼n senaryosu baï¿½xtan gÃ¶rÃ¼lÃ¼r",
      "Biyogaz yatÄ±rÄ±mÄ± saha gerÃ§eklerine daha uygun ilerler",
    ],
    quoteRequirements: [
      "AtÄ±k tÃ¼rÃ¼ ve gÃ¼nlÃ¼k besleme miktarÄ±",
      "Enerji hedefi ve digestat yÃ¶netim beklentisi",
      "Saha bÃ¼yÃ¼klÃ¼ï¿½xÃ¼ ve depolama kÄ±sÄ±tlarÄ±",
    ],
    relatedLinks: [
      {
        label: "Enerji ve Biyogaz Sistemleri",
        href: "/sektorler/enerji-ve-biyogaz-sistemleri",
      },
      { label: "Biyogaz ï¿½n Ä°ï¿½xlem", href: "/kutuphane/blog/biyogaz-on-islem" },
      { label: "Taï¿½xÄ±ma EkipmanlarÄ±", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
    ],
  },
  {
    slug: "biyogaz-digestat-kurutma-kompost-projesi",
    title: "Biyogaz Digestat Kurutma ve Kompost Projesi",
    cardDescription:
      "Biyogaz tesisinden Ã§Ä±kan digestatÄ±n katÄ±-sÄ±vÄ± ayÄ±rma, kurutma, kompostlaï¿½xtÄ±rma, eleme ve son Ã¼rÃ¼n hazÄ±rlama sÃ¼reÃ§lerini entegre tesis mantÄ±ï¿½xÄ±yla projelendiriyoruz.",
    heroDescription:
      "DigestatÄ±n yalnÄ±zca bertaraf edilmediï¿½xi, kurutma ve kompostlaï¿½xtÄ±rma adÄ±mlarÄ±yla deï¿½xerli son Ã¼rÃ¼ne dÃ¶nÃ¼ï¿½xtÃ¼rÃ¼ldÃ¼ï¿½xÃ¼ entegre tesis projeleri geliï¿½xtiriyoruz.",
    image: "/images/biogaz1.jpg",
    imageAlt: "Biyogaz digestat kurutma ve kompost projesi",
    metadataTitle: "Biyogaz Digestat Kurutma ve Kompost Projesi | Pro Makina",
    metadataDescription:
      "Biyogaz digestatÄ±nÄ±n kurutma, kompostlaï¿½xtÄ±rma, eleme ve son Ã¼rÃ¼n hazÄ±rlama sÃ¼reÃ§lerini kapsayan entegre proje yapÄ±sÄ±nÄ± inceleyin.",
    projectScope: [
      "DigestatÄ±n katÄ±-sÄ±vÄ± ayrÄ±m sonrasÄ± Ã¼rÃ¼n davranÄ±ï¿½xÄ±nÄ±n deï¿½xerlendirilmesi",
      "Kurutma, kompostlaï¿½xtÄ±rma ve eleme hatlarÄ±nÄ±n entegre ï¿½xekilde kurgulanmasÄ±",
      "Koku kontrolÃ¼, taï¿½xÄ±ma ve son Ã¼rÃ¼n hazÄ±rlama yapÄ±sÄ±nÄ±n netleï¿½xtirilmesi",
    ],
    machineGroups: [
      "Kurutma tamburlarÄ± ve kompost tamburlarÄ±",
      "Trommel elekler ve taï¿½xÄ±ma ekipmanlarÄ±",
      "Koku kontrolÃ¼ ve toz toplama sistemleri",
    ],
    processFlow: [
      "Digestat kabul ve dengeleme",
      "Kurutma veya kompostlaï¿½xtÄ±rma",
      "Eleme, Ã¼rÃ¼n hazÄ±rlama ve depolama",
    ],
    investorBenefits: [
      "Digestat iÃ§in bertaraf yerine geri kazanÄ±m senaryosu oluï¿½xur",
      "Enerji ve yan Ã¼rÃ¼n dengesi daha kontrollÃ¼ okunur",
      "Saha iÃ§inde bÃ¼tÃ¼ncÃ¼l atÄ±k yÃ¶netimi saï¿½xlanÄ±r",
    ],
    quoteRequirements: [
      "Digestat yapÄ±sÄ± ve gÃ¼nlÃ¼k miktar",
      "Hedef son Ã¼rÃ¼n formu",
      "Kurutma veya kompostlaï¿½xtÄ±rma Ã¶nceliï¿½xi",
    ],
    relatedLinks: [
      { label: "Camur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      {
        label: "Kompost Tamburu",
        href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
      },
      { label: "Biyogaz ï¿½n Ä°ï¿½xlem", href: "/kutuphane/blog/biyogaz-on-islem" },
    ],
  },
  {
    slug: "10-ton-saat-organomineral-gubre-tesisi",
    aliases: ["organomineral-gubre-tesisi-projeleri"],
    title: "10 Ton/Saat Organomineral GÃ¼bre Tesisi Projesi",
    cardDescription:
      "Kompost, organik hammadde ve mineral bileï¿½xenlerin dozajlama, karÄ±ï¿½xtÄ±rma, granÃ¼lasyon, kurutma, soï¿½xutma, eleme ve paketleme sÃ¼reÃ§leriyle organomineral gÃ¼breye dÃ¶nÃ¼ï¿½xtÃ¼rÃ¼ldÃ¼ï¿½xÃ¼ tesis projeleri hazÄ±rlÄ±yoruz.",
    heroDescription:
      "10 ton/saat Ã¶lÃ§eï¿½xinde organomineral gÃ¼bre yatÄ±rÄ±mlarÄ±nda formÃ¼lasyon, kapasite, granÃ¼l kalitesi ve saha yerleï¿½ximini birlikte ele alan proses kurgularÄ± geliï¿½xtiriyoruz.",
    image: "/images/granul1.jpg",
    imageAlt: "10 ton saat organomineral gÃ¼bre tesisi projesi",
    metadataTitle: "10 Ton/Saat Organomineral GÃ¼bre Tesisi Projesi | Pro Makina",
    metadataDescription:
      "10 ton/saat organomineral gÃ¼bre tesisi iÃ§in granÃ¼lasyon, kurutma, eleme ve paketleme odaklÄ± proje yapÄ±sÄ±nÄ± inceleyin.",
    projectScope: [
      "Ham madde oranlarÄ± ve hedef Ã¼rÃ¼n standardÄ±na gÃ¶re hat kapasitesinin kurgulanmasÄ±",
      "GranÃ¼lasyon, kurutma, soï¿½xutma ve eleme yapÄ±sÄ±nÄ±n proses ritmine gÃ¶re planlanmasÄ±",
      "Paketleme, toz kontrolÃ¼ ve saha servis alanlarÄ±nÄ±n netleï¿½xtirilmesi",
    ],
    machineGroups: [
      "Dozaj bunkerleri ve karÄ±ï¿½xtÄ±rma sistemleri",
      "GranÃ¼latÃ¶r, kurutma ve soï¿½xutma tamburlarÄ±",
      "Eleme, toz toplama ve paketleme ekipmanlarÄ±",
    ],
    processFlow: [
      "Dozajlama ve karÄ±ï¿½xtÄ±rma",
      "GranÃ¼lasyon, kurutma ve soï¿½xutma",
      "Eleme, paketleme ve Ã¼rÃ¼n sevki",
    ],
    investorBenefits: [
      "Hedef kapasiteye uygun daha net ekipman kombinasyonu kurulur",
      "GranÃ¼l kalitesi ve enerji dengesi birlikte planlanÄ±r",
      "YatÄ±rÄ±mÄ±n bÃ¼yÃ¼me senaryosu erken aï¿½xamada okunur",
    ],
    quoteRequirements: [
      "Saatlik kapasite ve hedef tane boyutu",
      "Organik ve mineral ham madde daï¿½xÄ±lÄ±mÄ±",
      "Paketleme tipi ve otomasyon beklentisi",
    ],
    relatedLinks: [
      {
        label: "Organomineral GÃ¼bre Tesisi",
        href: "/hizmetler/organomineral-gubre-tesisi",
      },
      {
        label: "GranÃ¼l GÃ¼bre ï¿½Sretim Tesisi",
        href: "/hizmetler/granul-gubre-uretim-tesisi",
      },
      {
        label: "Kurutma TamburlarÄ±",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
      },
      {
        label: "GÃ¼bre ve GranÃ¼lasyon Tesisleri",
        href: "/sektorler/gubre-ve-granulasyon-tesisleri",
      },
    ],
  },
  {
    slug: "granul-gubre-uretim-tesisi",
    aliases: ["granul-gubre-uretim-tesisi-projeleri"],
    title: "GranÃ¼l GÃ¼bre ï¿½Sretim Tesisi Projesi",
    cardDescription:
      "NPK, organomineral ve Ã¶zel formÃ¼lasyonlu granÃ¼l gÃ¼bre Ã¼retimi iÃ§in dozajlama, granÃ¼lasyon, kurutma, soï¿½xutma, kaplama ve paketleme hattÄ±nÄ± tek proses akÄ±ï¿½xÄ±nda ele alÄ±yoruz.",
    heroDescription:
      "GranÃ¼l gÃ¼bre yatÄ±rÄ±mlarÄ±nda proses akÄ±ï¿½xÄ±nÄ± yalnÄ±zca makine listesiyle deï¿½xil, kapasite, Ã¼rÃ¼n standardÄ± ve saha kurgusuyla birlikte deï¿½xerlendiriyoruz.",
    image: "/images/granul1.jpg",
    imageAlt: "GranÃ¼l gÃ¼bre Ã¼retim tesisi projesi",
    metadataTitle: "GranÃ¼l GÃ¼bre ï¿½Sretim Tesisi Projesi | Pro Makina",
    metadataDescription:
      "GranÃ¼l gÃ¼bre Ã¼retimi iÃ§in dozajlama, granÃ¼lasyon, kurutma, soï¿½xutma ve paketleme odaklÄ± proje yapÄ±sÄ±nÄ± inceleyin.",
    projectScope: [
      "FormÃ¼lasyona uygun ana makine kombinasyonunun belirlenmesi",
      "GranÃ¼lasyon, kurutma, soï¿½xutma, eleme ve kaplama hatlarÄ±nÄ±n planlanmasÄ±",
      "Paketleme ve lojistik alanlarÄ±nÄ±n saha ile uyumlu kurgulanmasÄ±",
    ],
    machineGroups: [
      "Dozaj sistemleri ve karÄ±ï¿½xtÄ±rma ekipmanlarÄ±",
      "GranÃ¼latÃ¶r, kurutma, soï¿½xutma ve kaplama tamburlarÄ±",
      "Eleme, taï¿½xÄ±ma ve torbalama sistemleri",
    ],
    processFlow: [
      "Ham madde kabul ve dozajlama",
      "GranÃ¼lasyon ve termal sÃ¼reÃ§",
      "Eleme, kaplama, paketleme ve sevkiyat",
    ],
    investorBenefits: [
      "Tek hatta birden fazla gÃ¼bre senaryosu okunabilir",
      "Kapasite ve kalite dengesini kuran yatÄ±rÄ±m omurgasÄ± oluï¿½xur",
      "Ä°leride kapasite artÄ±ï¿½xÄ±na uygun esnek kurgu saï¿½xlanÄ±r",
    ],
    quoteRequirements: [
      "Hedef Ã¼rÃ¼n tipi ve saatlik kapasite",
      "Nem aralÄ±ï¿½xÄ± ve tane boyutu beklentisi",
      "Paketleme ve otomasyon seviyesi",
    ],
    relatedLinks: [
      {
        label: "GranÃ¼l GÃ¼bre ï¿½Sretim Tesisi",
        href: "/hizmetler/granul-gubre-uretim-tesisi",
      },
      {
        label: "GranÃ¼l GÃ¼bre ï¿½Sretim SÃ¼reci",
        href: "/kutuphane/blog/granul-gubre-uretim-sureci",
      },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      {
        label: "GÃ¼bre ve GranÃ¼lasyon Tesisleri",
        href: "/sektorler/gubre-ve-granulasyon-tesisleri",
      },
    ],
  },
  {
    slug: "sivi-gubre-uretim-tesisi",
    aliases: ["sivi-gubre-uretim-tesisi-projeleri"],
    title: "SÄ±vÄ± GÃ¼bre ï¿½Sretim Tesisi Projesi",
    cardDescription:
      "SÄ±vÄ± organomineral gÃ¼bre, sÄ±vÄ± NPK, amino asitli Ã¼rÃ¼nler ve biyostimÃ¼lan Ã¼retimi iÃ§in reaktÃ¶r, tank, karÄ±ï¿½xtÄ±rma, filtrasyon, stoklama ve dolum hattÄ± projeleri geliï¿½xtiriyoruz.",
    heroDescription:
      "SÄ±vÄ± gÃ¼bre hatlarÄ±nda reaktÃ¶r hacmi, karÄ±ï¿½xtÄ±rma yapÄ±sÄ±, stoklama senaryosu ve dolum ritmini birlikte okuyarak daha uygulanabilir tesis kurgularÄ± oluï¿½xturuyoruz.",
    image: "/images/reaktor1.avif",
    imageAlt: "SÄ±vÄ± gÃ¼bre Ã¼retim tesisi projesi",
    metadataTitle: "SÄ±vÄ± GÃ¼bre ï¿½Sretim Tesisi Projesi | Pro Makina",
    metadataDescription:
      "SÄ±vÄ± gÃ¼bre Ã¼retimi iÃ§in reaktÃ¶r, tank, filtrasyon, stoklama ve dolum odaklÄ± proje yapÄ±sÄ±nÄ± inceleyin.",
    projectScope: [
      "ï¿½SrÃ¼n formÃ¼lasyonuna gÃ¶re reaktÃ¶r ve tank hacimlerinin belirlenmesi",
      "KarÄ±ï¿½xtÄ±rma, Ã§Ã¶zÃ¼ndÃ¼rme, filtrasyon ve dolum adÄ±mlarÄ±nÄ±n planlanmasÄ±",
      "Temizlik, bakÄ±m eriï¿½ximi ve paslanmaz ekipman kurgusunun netleï¿½xtirilmesi",
    ],
    machineGroups: [
      "KarÄ±ï¿½xtÄ±rÄ±cÄ±lÄ± reaktÃ¶rler ve tank sistemleri",
      "Filtrasyon, pompa ve proses baï¿½xlantÄ± ekipmanlarÄ±",
      "SÄ±vÄ± dolum, ï¿½xiï¿½xeleme ve etiketleme sistemleri",
    ],
    processFlow: [
      "Dozajlama ve Ã§Ã¶zÃ¼ndÃ¼rme",
      "KarÄ±ï¿½xtÄ±rma, filtrasyon ve stoklama",
      "Dolum, etiketleme ve sevkiyat",
    ],
    investorBenefits: [
      "Dolum hÄ±zÄ± ve proses kararlÄ±lÄ±ï¿½xÄ± birlikte kurgulanÄ±r",
      "Temizlik ve servis eriï¿½ximi daha gÃ¼venli planlanÄ±r",
      "FarklÄ± Ã¼rÃ¼n reÃ§etelerine uyum saï¿½xlayan esnek yapÄ± oluï¿½xur",
    ],
    quoteRequirements: [
      "ï¿½SrÃ¼n tipi ve gÃ¼nlÃ¼k dolum kapasitesi",
      "Tank hacmi ve karÄ±ï¿½xtÄ±rma beklentisi",
      "Ambalaj tipi ve otomasyon seviyesi",
    ],
    relatedLinks: [
      {
        label: "SÄ±vÄ± GÃ¼bre ï¿½Sretim Tesisi",
        href: "/hizmetler/sivi-gubre-uretim-tesisi",
      },
      { label: "ReaktÃ¶rler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      {
        label: "Kimya ve Proses EndÃ¼strisi",
        href: "/sektorler/kimya-ve-proses-endustrisi",
      },
      {
        label: "SÄ±vÄ± GÃ¼bre ï¿½Sretim Tesisi NasÄ±l Kurulur?",
        href: "/kutuphane/sivi-gubre-uretim-tesisi-nasil-kurulur",
      },
    ],
  },
  {
    slug: "silis-kumu-kurutma-tesisi",
    aliases: ["kurutma-tamburu-ve-termal-proses-projeleri"],
    title: "Silis Kumu Kurutma Tesisi Projesi",
    cardDescription:
      "Silis kumu ve kuvars kumu proseslerinde besleme, kurutma tamburu, sÄ±cak gaz hattÄ±, siklon, fan, toz toplama, eleme ve stoklama ekipmanlarÄ±nÄ± birlikte projelendiriyoruz.",
    heroDescription:
      "Silis kumu kurutma tesislerinde kurutma yÃ¼kÃ¼, Ã¼rÃ¼n akÄ±ï¿½xÄ±, toz kontrolÃ¼ ve stoklama ihtiyaÃ§larÄ±nÄ± aynÄ± termal proses kurgusu iÃ§inde ele alÄ±yoruz.",
    image: "/images/maden1.jpg",
    imageAlt: "Silis kumu kurutma tesisi projesi",
    metadataTitle: "Silis Kumu Kurutma Tesisi Projesi | Pro Makina",
    metadataDescription:
      "Silis kumu ve kuvars kumu iÃ§in kurutma tamburu, sÄ±cak gaz hattÄ±, eleme ve toz toplama odaklÄ± tesis projesini inceleyin.",
    projectScope: [
      "Giriï¿½x-Ã§Ä±kÄ±ï¿½x nem hedeflerine gÃ¶re kurutma yÃ¼kÃ¼nÃ¼n belirlenmesi",
      "Kurutma tamburu, sÄ±cak gaz, fan ve filtre yapÄ±sÄ±nÄ±n Ã¶lÃ§eklenmesi",
      "Eleme, taï¿½xÄ±ma ve stoklama hatlarÄ±nÄ±n prosesle uyumlu planlanmasÄ±",
    ],
    machineGroups: [
      "Kurutma tamburu ve yardÄ±mcÄ± termal ekipmanlar",
      "Siklon, jet pulse filtre ve fan sistemleri",
      "Eleme sistemleri ve konveyÃ¶r hatlarÄ±",
    ],
    processFlow: [
      "Besleme ve termal kurutma",
      "Toz toplama ve Ã¼rÃ¼n akÄ±ï¿½xÄ± kontrolÃ¼",
      "Eleme, stoklama ve sevkiyat",
    ],
    investorBenefits: [
      "Kurutma ve sÄ±nÄ±flandÄ±rma aynÄ± sÃ¼reÃ§te daha dengeli ilerler",
      "Toz kontrolÃ¼ ve saha emniyeti daha erken Ã§Ã¶zÃ¼lÃ¼r",
      "Mineral kalite hedeflerine uygun daha kararlÄ± bir hat kurulur",
    ],
    quoteRequirements: [
      "Malzeme tipi ve saatlik tonaj",
      "Giriï¿½x-Ã§Ä±kÄ±ï¿½x nem deï¿½xerleri",
      "Eleme fraksiyonu ve depolama beklentisi",
    ],
    relatedLinks: [
      { label: "Silis Kumu Kurutma Tesisi", href: "/hizmetler/silis-kumu-kurutma-tesisi" },
      {
        label: "Kurutma TamburlarÄ±",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
      },
      {
        label: "Madencilik ve Mineral Ä°ï¿½xleme",
        href: "/sektorler/madencilik-ve-mineral-isleme",
      },
      {
        label: "Maden Kurutma ve Eleme Tesisi",
        href: "/hizmetler/maden-kurutma-ve-eleme-tesisi",
      },
    ],
  },
  {
    slug: "perlit-kurutma-eleme-tesisi",
    title: "Perlit Kurutma ve Eleme Tesisi Projesi",
    cardDescription:
      "Perlit ve benzeri hafif mineral hammaddelerde kontrollÃ¼ kurutma, eleme, taï¿½xÄ±ma, toz toplama ve Ã¼rÃ¼n sÄ±nÄ±flandÄ±rma sÃ¼reÃ§lerini kapsayan tesis projeleri hazÄ±rlÄ±yoruz.",
    heroDescription:
      "Perlit gibi hafif ve hassas mineral hammaddelerde Ã¼rÃ¼n kaybÄ±nÄ± azaltan, sÄ±nÄ±flandÄ±rmayÄ± netleï¿½xtiren ve termal sÃ¼reci kontrollÃ¼ kÄ±lan proje kurgularÄ± geliï¿½xtiriyoruz.",
    image: "/images/maden1.jpg",
    imageAlt: "Perlit kurutma ve eleme tesisi projesi",
    metadataTitle: "Perlit Kurutma ve Eleme Tesisi Projesi | Pro Makina",
    metadataDescription:
      "Perlit kurutma ve eleme tesisleri iÃ§in kontrollÃ¼ kurutma, sÄ±nÄ±flandÄ±rma, taï¿½xÄ±ma ve toz toplama odaklÄ± proje yapÄ±sÄ±nÄ± inceleyin.",
    projectScope: [
      "Perlitin yoï¿½xunluk ve Ã¼rÃ¼n davranÄ±ï¿½xÄ±na uygun kurutma yaklaï¿½xÄ±mÄ±nÄ±n belirlenmesi",
      "Eleme, taï¿½xÄ±ma ve sÄ±nÄ±flandÄ±rma adÄ±mlarÄ±nÄ±n kapasiteye gÃ¶re kurgulanmasÄ±",
      "Toz toplama ve Ã¼rÃ¼n kaybÄ±nÄ± azaltan saha tasarÄ±mÄ±nÄ±n netleï¿½xtirilmesi",
    ],
    machineGroups: [
      "Kurutma tamburu ve fan sistemleri",
      "Elekler, konveyÃ¶rler ve stoklama ekipmanlarÄ±",
      "Siklon ve toz toplama sistemleri",
    ],
    processFlow: [
      "Besleme ve kurutma",
      "Eleme ve sÄ±nÄ±flandÄ±rma",
      "Stoklama ve Ã¼rÃ¼n hazÄ±rlama",
    ],
    investorBenefits: [
      "Hafif mineral Ã¼rÃ¼nlerde Ã¼rÃ¼n kaybÄ± riski azaltÄ±lÄ±r",
      "Eleme hassasiyeti ve kapasite birlikte optimize edilir",
      "Toz kontrolÃ¼yle daha temiz ve sÃ¼rdÃ¼rÃ¼lebilir saha akÄ±ï¿½xÄ± saï¿½xlanÄ±r",
    ],
    quoteRequirements: [
      "Perlit tipi ve tonaj",
      "Hedef Ã¼rÃ¼n sÄ±nÄ±flarÄ±",
      "Toz kontrolÃ¼ ve stoklama ihtiyacÄ±",
    ],
    relatedLinks: [
      { label: "Maden Kurutma ve Eleme Tesisi", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      {
        label: "Eleme ve SÄ±nÄ±flandÄ±rma Sistemleri",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
      },
      {
        label: "Madencilik ve Mineral Ä°ï¿½xleme",
        href: "/sektorler/madencilik-ve-mineral-isleme",
      },
      {
        label: "Kurutma TamburlarÄ±",
        href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
      },
    ],
  },
  {
    slug: "maden-kirma-eleme-kurutma-tesisi",
    aliases: ["maden-ve-mineral-isleme-projeleri", "mineral-ve-dokme-kati-isleme-projeleri"],
    title: "Maden KÄ±rma, Eleme ve Kurutma Tesisi Projesi",
    cardDescription:
      "KireÃ§ taï¿½xÄ±, bentonit, kil, kÃ¼kÃ¼rt, kuvars ve benzeri mineral hammaddeler iÃ§in kÄ±rÄ±cÄ±lar, elekler, kurutma tamburu, konveyÃ¶rler ve stoklama sistemlerini proje bazlÄ± kurguluyoruz.",
    heroDescription:
      "KÄ±rma, eleme ve kurutma sÃ¼reÃ§lerini aynÄ± proje mantÄ±ï¿½xÄ±nda ele alarak maden ve mineral iï¿½xleme hatlarÄ±nda daha dengeli bir kapasite omurgasÄ± kuruyoruz.",
    image: "/images/maden1.jpg",
    imageAlt: "Maden kÄ±rma eleme kurutma tesisi projesi",
    metadataTitle: "Maden KÄ±rma, Eleme ve Kurutma Tesisi Projesi | Pro Makina",
    metadataDescription:
      "Maden kÄ±rma, eleme ve kurutma tesisleri iÃ§in kÄ±rÄ±cÄ±lar, elekler, kurutma tamburu ve konveyÃ¶r odaklÄ± proje yapÄ±sÄ±nÄ± inceleyin.",
    projectScope: [
      "Malzeme boyutu, aï¿½xÄ±ndÄ±rÄ±cÄ±lÄ±k ve nem deï¿½xerlerine gÃ¶re hat yapÄ±sÄ±nÄ±n kurgulanmasÄ±",
      "KÄ±rÄ±cÄ±, eleme, kurutma ve taï¿½xÄ±ma ekipmanlarÄ±nÄ±n tek akÄ±ï¿½xta Ã¶lÃ§eklenmesi",
      "Stoklama, servis eriï¿½ximi ve toz kontrolÃ¼nÃ¼n sahaya gÃ¶re planlanmasÄ±",
    ],
    machineGroups: [
      "ï¿½!eneli, Ã§ekiÃ§li ve dik milli kÄ±rÄ±cÄ±lar",
      "Trommel ve vibrasyonlu elekler",
      "Kurutma tamburu, konveyÃ¶r ve stoklama ekipmanlarÄ±",
    ],
    processFlow: [
      "KÄ±rma ve boyutlandÄ±rma",
      "Eleme ve gerekirse kurutma",
      "Taï¿½xÄ±ma, stoklama ve son Ã¼rÃ¼n hazÄ±rlÄ±ï¿½xÄ±",
    ],
    investorBenefits: [
      "Birbiriyle uyumlu ekipman seÃ§imi sayesinde darboï¿½xaz riski azalÄ±r",
      "FarklÄ± mineral tÃ¼rlerine gÃ¶re daha esnek proses kurulabilir",
      "Saha akÄ±ï¿½xÄ± ve toz kontrolÃ¼ daha erken Ã§Ã¶zÃ¼mlenir",
    ],
    quoteRequirements: [
      "Malzeme tipi ve tane boyutu",
      "Saatlik kapasite ve nem bilgisi",
      "Stoklama, paketleme veya sevkiyat beklentisi",
    ],
    relatedLinks: [
      { label: "Maden Kurutma ve Eleme Tesisi", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      {
        label: "KÄ±rÄ±cÄ±lar ve ParÃ§alayÄ±cÄ±lar",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      },
      {
        label: "Madencilik ve Mineral Ä°ï¿½xleme",
        href: "/sektorler/madencilik-ve-mineral-isleme",
      },
      {
        label: "Trommel Elekler",
        href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler",
      },
    ],
  },
  {
    slug: "aritma-camuru-kurutma-tesisi",
    aliases: ["aritma-camuru-kurutma-projeleri"],
    title: "ArÄ±tma ï¿½!amuru Kurutma Tesisi Projesi",
    cardDescription:
      "Belediye ve endÃ¼striyel arÄ±tma Ã§amurlarÄ±nÄ±n besleme, susuzlaï¿½xtÄ±rma destek, kurutma, koku kontrol, toz toplama ve nihai Ã¼rÃ¼n hazÄ±rlama sÃ¼reÃ§lerini projelendiriyoruz.",
    heroDescription:
      "ArÄ±tma Ã§amuru kurutma projelerinde nem dÃ¼ï¿½xÃ¼rme hedefi, koku kontrolÃ¼, Ã¼rÃ¼n hazÄ±rlama ve saha akÄ±ï¿½xÄ± aynÄ± termal proses mantÄ±ï¿½xÄ± iÃ§inde okunur.",
    image: "/images/fabrika1.jpg",
    imageAlt: "ArÄ±tma Ã§amuru kurutma tesisi projesi",
    metadataTitle: "ArÄ±tma ï¿½!amuru Kurutma Tesisi Projesi | Pro Makina",
    metadataDescription:
      "ArÄ±tma Ã§amuru kurutma tesisi iÃ§in besleme, kurutma, koku kontrolÃ¼ ve nihai Ã¼rÃ¼n hazÄ±rlama odaklÄ± proje yapÄ±sÄ±nÄ± inceleyin.",
    projectScope: [
      "Nem dÃ¼ï¿½xÃ¼rme hedefi ve gÃ¼nlÃ¼k tonaja gÃ¶re kurutma yapÄ±sÄ±nÄ±n belirlenmesi",
      "Besleme, susuzlaï¿½xtÄ±rma destek ve termal ekipman omurgasÄ±nÄ±n kurulmasÄ±",
      "Koku kontrolÃ¼, toz toplama ve son Ã¼rÃ¼n hazÄ±rlama adÄ±mlarÄ±nÄ±n planlanmasÄ±",
    ],
    machineGroups: [
      "ï¿½!amur besleme bunkerleri ve helezon hatlarÄ±",
      "Kurutma tamburu ve termal yardÄ±mcÄ± ekipmanlar",
      "Filtre, fan ve paketleme sistemleri",
    ],
    processFlow: [
      "Besleme ve dengeleme",
      "Termal kurutma ve gaz yÃ¶netimi",
      "Son Ã¼rÃ¼n hazÄ±rlama ve sevkiyat",
    ],
    investorBenefits: [
      "Belediye ve sanayi Ã§amurlarÄ±nda daha kontrollÃ¼ nem yÃ¶netimi saï¿½xlanÄ±r",
      "Koku ve toz riski baï¿½xlangÄ±Ã§ta ele alÄ±nÄ±r",
      "Nihai Ã¼rÃ¼n deï¿½xerlendirme seÃ§enekleri daha netleï¿½xir",
    ],
    quoteRequirements: [
      "Giriï¿½x ve Ã§Ä±kÄ±ï¿½x nem deï¿½xerleri",
      "GÃ¼nlÃ¼k tonaj ve Ã§alÄ±ï¿½xma rejimi",
      "Koku kontrolÃ¼ ve kapalÄ± alan beklentisi",
    ],
    relatedLinks: [
      { label: "ï¿½!amur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      {
        label: "Kapalı Sistem Çamur Kurutma",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/kapali-sistem-camur-kurutma",
      },
      {
        label: "Atık Su Çamuru Bertaraf ve Değerlendirme Prosesleri",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
      },
      {
        label: "Atık Su Çamuru Çözümleri",
        href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
      },
    ],
  },
  {
    slug: "deri-atiklarindan-geri-kazanim-tesisi",
    aliases: ["deri-atik-isleme-tesisi-projeleri"],
    title: "Deri AtÄ±klarÄ±ndan Geri KazanÄ±m Tesisi Projesi",
    cardDescription:
      "Deri kaynaklÄ± atÄ±klarÄ±n parÃ§alama, taï¿½xÄ±ma, proses hazÄ±rlÄ±ï¿½xÄ±, geri kazanÄ±m ve son Ã¼rÃ¼n deï¿½xerlendirme aï¿½xamalarÄ±nÄ± kapsayan Ã¶zel tesis projeleri hazÄ±rlÄ±yoruz.",
    heroDescription:
      "Deri atÄ±ï¿½xÄ±nÄ±n lifli ve zorlu yapÄ±sÄ±nÄ± dikkate alan parÃ§alama, taï¿½xÄ±ma ve geri kazanÄ±m odaklÄ± Ã¶zel proses kurgularÄ± geliï¿½xtiriyoruz.",
    image: "/images/geridonusum1.jpg",
    imageAlt: "Deri atÄ±klarÄ±ndan geri kazanÄ±m tesisi projesi",
    metadataTitle: "Deri AtÄ±klarÄ±ndan Geri KazanÄ±m Tesisi Projesi | Pro Makina",
    metadataDescription:
      "Deri atÄ±klarÄ±nÄ±n parÃ§alama, taï¿½xÄ±ma, proses hazÄ±rlÄ±ï¿½xÄ± ve geri kazanÄ±m aï¿½xamalarÄ±nÄ± kapsayan Ã¶zel tesis projesini inceleyin.",
    projectScope: [
      "AtÄ±ï¿½xÄ±n fiziksel yapÄ±sÄ±na gÃ¶re parÃ§alama ve Ã¶n hazÄ±rlÄ±k hattÄ±nÄ±n belirlenmesi",
      "Taï¿½xÄ±ma, ayÄ±rma ve proses hazÄ±rlÄ±ï¿½xÄ± adÄ±mlarÄ±nÄ±n sahaya gÃ¶re planlanmasÄ±",
      "Geri kazanÄ±m veya sonraki proses iÃ§in uygun ara Ã¼rÃ¼n yapÄ±sÄ±nÄ±n oluï¿½xturulmasÄ±",
    ],
    machineGroups: [
      "Shredder sistemleri ve kÄ±rÄ±cÄ±lar",
      "Taï¿½xÄ±ma hatlarÄ± ve bunker sistemleri",
      "YardÄ±mcÄ± proses ve toz kontrol ekipmanlarÄ±",
    ],
    processFlow: [
      "AtÄ±k kabul ve Ã¶n hazÄ±rlÄ±k",
      "ParÃ§alama ve taï¿½xÄ±ma",
      "Geri kazanÄ±m iÃ§in ara Ã¼rÃ¼n hazÄ±rlama",
    ],
    investorBenefits: [
      "Deri atÄ±ï¿½xÄ±nda daha kontrollÃ¼ ve gÃ¼venli saha akÄ±ï¿½xÄ± kurulur",
      "Geri kazanÄ±m verimi iÃ§in dÃ¼zenli Ã¶n hazÄ±rlÄ±k yapÄ±sÄ± oluï¿½xur",
      "Standart dÄ±ï¿½xÄ± atÄ±k senaryolarÄ±nda Ã¶zel Ã§Ã¶zÃ¼m omurgasÄ± saï¿½xlanÄ±r",
    ],
    quoteRequirements: [
      "AtÄ±k tipi ve nem seviyesi",
      "Saatlik besleme miktarÄ±",
      "Hedef geri kazanÄ±m veya sonraki proses bilgisi",
    ],
    relatedLinks: [
      {
        label: "KÄ±rÄ±cÄ±lar ve ParÃ§alayÄ±cÄ±lar",
        href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
      },
      { label: "Taï¿½xÄ±ma EkipmanlarÄ±", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Ä°letiï¿½xim", href: "/iletisim" },
      { label: "Hizmetler", href: "/hizmetler" },
    ],
  },
  {
    slug: "helezon-konveyor-elevator-hat-projesi",
    aliases: ["konveyor-ve-tasima-sistemleri-projeleri"],
    title: "Helezon, KonveyÃ¶r ve ElevatÃ¶r Hat Projesi",
    cardDescription:
      "DÃ¶kme katÄ±, toz, granÃ¼l, gÃ¼bre, maden ve kompost Ã¼rÃ¼nleri iÃ§in helezon konveyÃ¶r, bant konveyÃ¶r, zincirli konveyÃ¶r ve kovalÄ± elevatÃ¶r hatlarÄ±nÄ± proje bazlÄ± tasarlÄ±yoruz.",
    heroDescription:
      "Malzeme transferinin yalnÄ±zca makine seÃ§imi deï¿½xil, hat boyu, eï¿½xim, dozaj ve bakÄ±m eriï¿½ximiyle birlikte planlandÄ±ï¿½xÄ± taï¿½xÄ±ma sistemi projeleri geliï¿½xtiriyoruz.",
    image: "/images/makinalar1.png",
    imageAlt: "Helezon konveyÃ¶r ve elevatÃ¶r hat projesi",
    metadataTitle: "Helezon, KonveyÃ¶r ve ElevatÃ¶r Hat Projesi | Pro Makina",
    metadataDescription:
      "Helezon, bant konveyÃ¶r, zincirli konveyÃ¶r ve kovalÄ± elevatÃ¶r hatlarÄ±nÄ± kapsayan taï¿½xÄ±ma sistemi projesini inceleyin.",
    projectScope: [
      "Malzeme tipi, mesafe, eï¿½xim ve kapasiteye gÃ¶re taï¿½xÄ±ma hattÄ±nÄ±n kurgulanmasÄ±",
      "Helezon, konveyÃ¶r, elevatÃ¶r ve bunker baï¿½xlantÄ±larÄ±nÄ±n uyumlu planlanmasÄ±",
      "Transfer noktalarÄ±nda toz, dÃ¶kÃ¼lme ve bakÄ±m eriï¿½ximinin Ã§Ã¶zÃ¼lmesi",
    ],
    machineGroups: [
      "Helezon ve bant konveyÃ¶rler",
      "Zincirli konveyÃ¶rler ve kovalÄ± elevatÃ¶rler",
      "Bunker, silo ve akÄ±ï¿½x kontrol ekipmanlarÄ±",
    ],
    processFlow: [
      "Besleme ve dozaj",
      "Yatay ve dikey transfer",
      "Ara stoklama veya sonraki prosese kontrollÃ¼ aktarÄ±m",
    ],
    investorBenefits: [
      "Hat iÃ§i duruï¿½x ve dÃ¶kÃ¼lme riski azaltÄ±lÄ±r",
      "BakÄ±m eriï¿½ximi ve transfer gÃ¼venliï¿½xi iyileï¿½xtirilir",
      "FarklÄ± makine gruplarÄ± arasÄ±nda daha net baï¿½xlantÄ± kurulur",
    ],
    quoteRequirements: [
      "Malzeme tipi ve yoï¿½xunluï¿½xu",
      "Transfer mesafesi ve eï¿½xim",
      "Saatlik kapasite ve Ã§alÄ±ï¿½xma sÃ¼resi",
    ],
    relatedLinks: [
      {
        label: "Taï¿½xÄ±ma EkipmanlarÄ±",
        href: "/makinalar-ekipman/tasima-ekipmanlari",
      },
      {
        label: "VidalÄ± Helezonlar",
        href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
      },
      {
        label: "BantlÄ± KonveyÃ¶rler",
        href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler",
      },
      {
        label: "Zincirli ElevatÃ¶rler",
        href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler",
      },
    ],
  },
  {
    slug: "reaktor-ve-tank-sistemleri-projesi",
    aliases: ["reaktor-ve-tank-sistemleri-projeleri"],
    title: "ReaktÃ¶r ve Tank Sistemleri Projesi",
    cardDescription:
      "SÄ±vÄ± gÃ¼bre, kimyasal proses, Ã§Ã¶zÃ¼ndÃ¼rme, karÄ±ï¿½xtÄ±rma, stoklama ve kontrollÃ¼ dozajlama ihtiyaÃ§larÄ± iÃ§in reaktÃ¶r, tank ve proses baï¿½xlantÄ± sistemleri projeleri geliï¿½xtiriyoruz.",
    heroDescription:
      "ReaktÃ¶r ve tank sistemlerinde hacim, karÄ±ï¿½xtÄ±rÄ±cÄ± tipi, malzeme seÃ§imi ve proses baï¿½xlantÄ±larÄ± birlikte deï¿½xerlendirilerek daha gÃ¼venli Ã¼retim omurgalarÄ± kurgulanÄ±r.",
    image: "/images/reaktor1.avif",
    imageAlt: "ReaktÃ¶r ve tank sistemleri projesi",
    metadataTitle: "ReaktÃ¶r ve Tank Sistemleri Projesi | Pro Makina",
    metadataDescription:
      "ReaktÃ¶r, tank, Ã§Ã¶zÃ¼ndÃ¼rme, karÄ±ï¿½xtÄ±rma ve stoklama odaklÄ± proses ekipmanÄ± projesini inceleyin.",
    projectScope: [
      "ReaktÃ¶r ve tank hacimlerinin Ã¼rÃ¼n reÃ§etesi ve debiye gÃ¶re belirlenmesi",
      "KarÄ±ï¿½xtÄ±rma, Ã§Ã¶zÃ¼ndÃ¼rme, filtrasyon ve stoklama adÄ±mlarÄ±nÄ±n planlanmasÄ±",
      "Hat baï¿½xlantÄ±larÄ±, temizlik eriï¿½ximi ve dolum entegrasyonunun netleï¿½xtirilmesi",
    ],
    machineGroups: [
      "KarÄ±ï¿½xtÄ±rÄ±cÄ±lÄ± reaktÃ¶rler ve tanklar",
      "Dozaj pompalarÄ± ve filtrasyon baï¿½xlantÄ±larÄ±",
      "Dolum ve stoklama sistemleri",
    ],
    processFlow: [
      "Dozajlama ve Ã§Ã¶zÃ¼ndÃ¼rme",
      "KarÄ±ï¿½xtÄ±rma veya reaksiyon sÃ¼reci",
      "Stoklama, dolum ve sevkiyat",
    ],
    investorBenefits: [
      "ï¿½SrÃ¼n kararlÄ±lÄ±ï¿½xÄ± ve proses gÃ¼venliï¿½xi aynÄ± Ã§erÃ§evede ele alÄ±nÄ±r",
      "Tank ve dolum uyumu daha net hesaplanÄ±r",
      "BakÄ±m ve temizlik planÄ± yatÄ±rÄ±m baï¿½xÄ±nda Ã§Ã¶zÃ¼mlenir",
    ],
    quoteRequirements: [
      "ï¿½SrÃ¼n tipi ve tank hacmi",
      "KarÄ±ï¿½xtÄ±rma ve sÄ±caklÄ±k kontrol ihtiyacÄ±",
      "Dolum kapasitesi ve ambalaj senaryosu",
    ],
    relatedLinks: [
      { label: "ReaktÃ¶rler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "SÄ±vÄ± GÃ¼bre ï¿½Sretim Tesisi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      {
        label: "Kimya ve Proses EndÃ¼strisi",
        href: "/sektorler/kimya-ve-proses-endustrisi",
      },
      { label: "Ä°letiï¿½xim", href: "/iletisim" },
    ],
  },
  {
    slug: "ozel-proses-ve-makine-imalati-projesi",
    aliases: ["ozel-proses-ve-makine-imalati-projeleri"],
    title: "ï¿½zel Proses ve Makine Ä°malatÄ± Projesi",
    cardDescription:
      "Standart makine seÃ§iminin yeterli olmadÄ±ï¿½xÄ± sahalarda kapasite, Ã¶lÃ§Ã¼, Ã¼rÃ¼n davranÄ±ï¿½xÄ± ve proses hedefine gÃ¶re Ã¶zel makine ve hat projeleri geliï¿½xtiriyoruz.",
    heroDescription:
      "Saha Ã¶lÃ§Ã¼lerine, kapasiteye ve proses hedefine gÃ¶re katalog dÄ±ï¿½xÄ± ekipman ve hat Ã§Ã¶zÃ¼mleri tasarlayarak Ã¶zel Ã¼retim gerektiren yatÄ±rÄ±mlarÄ± destekliyoruz.",
    image: "/images/makinalar1.png",
    imageAlt: "ï¿½zel proses ve makine imalatÄ± projesi",
    metadataTitle: "ï¿½zel Proses ve Makine Ä°malatÄ± Projesi | Pro Makina",
    metadataDescription:
      "ï¿½zel proses ve makine imalatÄ± gerektiren sahalar iÃ§in kapasite, Ã¶lÃ§Ã¼ ve entegrasyon odaklÄ± proje yapÄ±sÄ±nÄ± inceleyin.",
    projectScope: [
      "Standart dÄ±ï¿½xÄ± ihtiyaÃ§larÄ±n saha verileriyle birlikte okunmasÄ±",
      "ï¿½zel Ã¶lÃ§Ã¼, malzeme ve proses gereksinimlerine gÃ¶re makine tasarlanmasÄ±",
      "Ä°malat, entegrasyon ve devreye alma adÄ±mlarÄ±nÄ±n tek akÄ±ï¿½xta planlanmasÄ±",
    ],
    machineGroups: [
      "ï¿½zel imalat tambur, bunker ve taï¿½xÄ±ma ekipmanlarÄ±",
      "Proses odaklÄ± reaktÃ¶r, tank ve yardÄ±mcÄ± mekanik yapÄ±lar",
      "Sahaya uyumlu baï¿½xlantÄ± ve platform sistemleri",
    ],
    processFlow: [
      "Ä°htiyaÃ§ analizi ve saha veri toplama",
      "ï¿½zel tasarÄ±m ve Ã¼retim hazÄ±rlÄ±ï¿½xÄ±",
      "Ä°malat, montaj ve devreye alma",
    ],
    investorBenefits: [
      "Standart ekipmanÄ±n Ã§Ã¶zmediï¿½xi sorunlara Ã¶zel yanÄ±t Ã¼retilir",
      "Saha kÄ±sÄ±tlarÄ± ve Ã¼retim hedefi birlikte yÃ¶netilir",
      "Mevcut hatta daha saï¿½xlÄ±klÄ± entegrasyon kurulabilir",
    ],
    quoteRequirements: [
      "Saha Ã¶lÃ§Ã¼leri ve mevcut hat bilgisi",
      "Hedef kapasite ve Ã¼rÃ¼n davranÄ±ï¿½xÄ±",
      "ï¿½zel malzeme, otomasyon veya baï¿½xlantÄ± beklentileri",
    ],
    relatedLinks: [
      { label: "Makine Ä°malatÄ±", href: "/hizmetler/makine-imalati" },
      {
        label: "Proses TasarÄ±mÄ± ve MÃ¼hendislik",
        href: "/hizmetler/proses-tasarimi-ve-muhendislik",
      },
      { label: "Makinalar & Ekipman", href: "/makinalar-ekipman" },
      { label: "Ä°letiï¿½xim", href: "/iletisim" },
    ],
  },
];

export const projectHubCards = projectPages;

export function getProjectPageBySlug(slug: string) {
  return projectPages.find(
    (project) => project.slug === slug || project.aliases?.includes(slug),
  );
}

export function getAllProjectSlugs() {
  return projectPages.flatMap((project) => [project.slug, ...(project.aliases ?? [])]);
}

