export type BlogTechnicalRequiredRow = {
  label: string;
  purpose: string;
  request: string;
};

export type BlogTechnicalExampleRow = {
  label: string;
  value: string;
  comment: string;
};

export type BlogTechnicalDecisionRow = {
  criterion: string;
  description: string;
  importance: string;
  effect: string;
};

export type BlogTechnicalFactorCard = {
  title: string;
  description: string;
};

export type BlogTechnicalRelatedLink = {
  title: string;
  description: string;
  href: string;
};

export type BlogTechnicalArticleData = {
  requiredDataTitle: string;
  requiredDataDescription: string;
  requiredDataRows: BlogTechnicalRequiredRow[];
  exampleTitle: string;
  exampleDescription: string;
  exampleRows: BlogTechnicalExampleRow[];
  decisionTableTitle: string;
  decisionTableDescription: string;
  decisionTableRows: BlogTechnicalDecisionRow[];
  factorCardsTitle: string;
  factorCardsDescription: string;
  factorCards: BlogTechnicalFactorCard[];
  relatedLinksTitle: string;
  relatedLinksDescription: string;
  relatedLinks: BlogTechnicalRelatedLink[];
};

const dryingData: BlogTechnicalArticleData = {
  requiredDataTitle: "Konu Ä°Ã§in Gerekli Teknik Veriler",
  requiredDataDescription:
    "Kurutma projelerinde yalnÄ±z ton/saat bilgisi yeterli deÄŸildir. Nem yÃ¼kÃ¼, Ã¼rÃ¼n davranÄ±ÅŸÄ± ve gaz hattÄ± birlikte okunmalÄ±dÄ±r.",
  requiredDataRows: [
    { label: "GiriÅŸ kapasitesi", purpose: "Tamburun saatlik yaÅŸ Ã¼rÃ¼n yÃ¼kÃ¼nÃ¼ tanÄ±mlar.", request: "Ã–rn. 10 ton/saat" },
    { label: "BaÅŸlangÄ±Ã§ nemi", purpose: "Su uÃ§urma yÃ¼kÃ¼nÃ¼ ve enerji ihtiyacÄ±nÄ± belirler.", request: "Ã–rn. %25" },
    { label: "Hedef Ã§Ä±kÄ±ÅŸ nemi", purpose: "Residence time ve son Ã¼rÃ¼n standardÄ±nÄ± etkiler.", request: "Ã–rn. %10" },
    { label: "ÃœrÃ¼n yoÄŸunluÄŸu", purpose: "Tambur doluluÄŸu ve hacimsel davranÄ±ÅŸÄ± okumayÄ± saÄŸlar.", request: "Ã–rn. 0,85 t/m3" },
    { label: "Tane boyutu", purpose: "IsÄ± transferi ve toz kaÃ§Ä±ÅŸÄ± riskini etkiler.", request: "Ã–rn. 0-6 mm" },
    { label: "YakÄ±t tÃ¼rÃ¼", purpose: "BrÃ¼lÃ¶r ve enerji modelini ÅŸekillendirir.", request: "DoÄŸalgaz / LNG / sÄ±cak gaz" },
    { label: "Hava debisi", purpose: "Fan ve filtre hattÄ±nÄ±n taÅŸÄ±yacaÄŸÄ± gaz yÃ¼kÃ¼nÃ¼ tanÄ±mlar.", request: "Ã–n debi yaklaÅŸÄ±mÄ±" },
    { label: "Ã‡alÄ±ÅŸma sÃ¼resi", purpose: "Saatlik kapasite ile gÃ¼nlÃ¼k Ã¼retim hedefini dengeler.", request: "Ã–rn. 16 saat/gÃ¼n" },
  ],
  exampleTitle: "Ã–rnek Teknik DeÄŸerlendirme",
  exampleDescription:
    "AÅŸaÄŸÄ±daki Ã¶rnek, kurutma hattÄ±nda kapasite ile nem yÃ¼kÃ¼ arasÄ±ndaki iliÅŸkinin nasÄ±l okunduÄŸunu gÃ¶steren Ã¶n mÃ¼hendislik yaklaÅŸÄ±mÄ±dÄ±r.",
  exampleRows: [
    { label: "Besleme kapasitesi", value: "10 ton/saat", comment: "Tambura giren yaÅŸ Ã¼rÃ¼n miktarÄ±" },
    { label: "BaÅŸlangÄ±Ã§ nemi", value: "%25", comment: "Ä°lk su yÃ¼kÃ¼" },
    { label: "Hedef Ã§Ä±kÄ±ÅŸ nemi", value: "%10", comment: "Son Ã¼rÃ¼n standardÄ±" },
    { label: "Kuru madde", value: "7,5 ton/saat", comment: "Proses boyunca korunur" },
    { label: "Ã‡Ä±kÄ±ÅŸ Ã¼rÃ¼n miktarÄ±", value: "8,33 ton/saat", comment: "Hedef neme gÃ¶re tahmini deÄŸer" },
    { label: "Su uÃ§urma yÃ¼kÃ¼", value: "1,67 ton/saat", comment: "BrÃ¼lÃ¶r ve fan hattÄ±nÄ±n ana girdisi" },
  ],
  decisionTableTitle: "Teknik DeÄŸerlendirme Ã–zeti",
  decisionTableDescription:
    "Kurutma tamburu tasarÄ±mÄ±nda gÃ¶vde Ã¶lÃ§Ã¼sÃ¼ kadar fan hattÄ±, filtreleme, enerji ve Ã¼rÃ¼n davranÄ±ÅŸÄ± da birlikte deÄŸerlendirilmelidir.",
  decisionTableRows: [
    { criterion: "Su uÃ§urma yÃ¼kÃ¼", description: "Saatte uzaklaÅŸtÄ±rÄ±lacak su miktarÄ±dÄ±r.", importance: "IsÄ±l yÃ¼k ve brÃ¼lÃ¶r hesabÄ±nÄ± belirler.", effect: "DÃ¼ÅŸÃ¼k okunursa hat hedef neme ulaÅŸamaz." },
    { criterion: "L/D oranÄ±", description: "Tambur boyu ile Ã§apÄ± arasÄ±ndaki iliÅŸkidir.", importance: "Ã–n geometri kararÄ±na referans verir.", effect: "YanlÄ±ÅŸ oran enerji verimini dÃ¼ÅŸÃ¼rebilir." },
    { criterion: "Tutulma sÃ¼resi", description: "ÃœrÃ¼nÃ¼n tambur iÃ§inde kalma sÃ¼residir.", importance: "Hedef nemin yakalanmasÄ±nÄ± belirler.", effect: "Yetersiz sÃ¼re Ã¼rÃ¼nÃ¼ nemli bÄ±rakÄ±r." },
    { criterion: "Fan hattÄ±", description: "Gaz akÄ±ÅŸÄ±nÄ± ve negatif basÄ±ncÄ± yÃ¶netir.", importance: "Kurutma veriminin sahadaki karÅŸÄ±lÄ±ÄŸÄ±dÄ±r.", effect: "ZayÄ±f hat kuruma hÄ±zÄ±nÄ± dÃ¼ÅŸÃ¼rÃ¼r." },
    { criterion: "Siklon / filtre", description: "Tozlu gaz akÄ±ÅŸÄ±nÄ± temizler.", importance: "Emisyon ve Ã¼rÃ¼n kaybÄ±nÄ± azaltÄ±r.", effect: "Yetersiz filtrasyon bakÄ±m yÃ¼kÃ¼ yaratÄ±r." },
    { criterion: "BrÃ¼lÃ¶r kapasitesi", description: "Gerekli Ä±sÄ± yÃ¼kÃ¼nÃ¼ Ã¼retir.", importance: "Su uÃ§urma yÃ¼kÃ¼yle birlikte seÃ§ilmelidir.", effect: "Eksik kapasite proses dengesini bozar." },
  ],
  factorCardsTitle: "Kurutma KararÄ±nÄ± Etkileyen FaktÃ¶rler",
  factorCardsDescription:
    "Kurutma projelerinde ekipman seÃ§imi yalnÄ±z geometriyle deÄŸil, Ã¼rÃ¼n ve saha davranÄ±ÅŸÄ±yla birlikte ÅŸekillenir.",
  factorCards: [
    { title: "ÃœrÃ¼n yoÄŸunluÄŸu", description: "Hacimsel doluluk ve lifter davranÄ±ÅŸÄ±nÄ± deÄŸiÅŸtirir." },
    { title: "YapÄ±ÅŸkanlÄ±k", description: "Ä°Ã§ kanat seÃ§imi ve sÄ±caklÄ±k kontrolÃ¼nÃ¼ daha kritik hale getirir." },
    { title: "GiriÅŸ nemi", description: "Residence time ve enerji yÃ¼kÃ¼nÃ¼ doÄŸrudan artÄ±rÄ±r." },
    { title: "Hedef Ã§Ä±kÄ±ÅŸ nemi", description: "Son Ã¼rÃ¼n standardÄ± iÃ§in daha uzun temas sÃ¼resi gerekebilir." },
    { title: "Toz yÃ¼kÃ¼", description: "Siklon ve filtre hattÄ±nÄ±n boyutunu etkiler." },
    { title: "Saha yerleÅŸimi", description: "Tambur uzunluÄŸu ve bakÄ±m eriÅŸimi fiziksel alana uymalÄ±dÄ±r." },
  ],
  relatedLinksTitle: "Ä°lgili Teknik Ä°Ã§erikler",
  relatedLinksDescription:
    "Kurutma tamburu, gaz hattÄ±, toz toplama ve saha uygulamasÄ±nÄ± tamamlayan teknik sayfalarÄ± aÅŸaÄŸÄ±da bir arada bulabilirsiniz.",
  relatedLinks: [
    { title: "Kurutma Tamburu Ä°malatÄ±", description: "Kurutma tamburu ve hat mÃ¼hendisliÄŸi hizmet yaklaÅŸÄ±mÄ±nÄ± inceleyin.", href: "/hizmetler/kurutma-tamburu-imalati" },
    { title: "Tambur Sistemleri", description: "Kurutma, granÃ¼lasyon ve kompost tamburu ailelerini gÃ¶rÃ¼n.", href: "/makinalar-ekipman/tambur-sistemleri" },
    { title: "Kurutma TamburlarÄ±", description: "ÃœrÃ¼n detay sayfasÄ± Ã¼zerinden kapasite ve ekipman yaklaÅŸÄ±mÄ±nÄ± deÄŸerlendirin.", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu" },
    { title: "Kurutma Tamburu HesabÄ±", description: "Programlar alanÄ±ndaki ilgili hesaplama yaklaÅŸÄ±mÄ±na gidin.", href: "/programlar/kurutma-tamburu-hesabi" },
    { title: "Silis Kumu Kurutma Tesisi", description: "Mineral Ã¼rÃ¼nlerde kurutma ve toz toplama kurgusunu gÃ¶rÃ¼n.", href: "/hizmetler/silis-kumu-kurutma-tesisi" },
    { title: "Ã‡amur Kurutma Tesisi", description: "YÃ¼ksek nemli akÄ±ÅŸlarda kurutma ve koku kontrolÃ¼ yaklaÅŸÄ±mÄ±nÄ± inceleyin.", href: "/hizmetler/camur-kurutma-tesisi" },
  ],
};

const screwData: BlogTechnicalArticleData = {
  requiredDataTitle: "Helezon Ä°Ã§in Gerekli Teknik Veriler",
  requiredDataDescription:
    "Helezon kapasitesi yalnÄ±z Ã§apla belirlenmez; Ã¼rÃ¼n yoÄŸunluÄŸu, eÄŸim, hatve ve motor yÃ¼kÃ¼ birlikte deÄŸerlendirilmelidir.",
  requiredDataRows: [
    { label: "Kapasite hedefi", purpose: "Saatlik taÅŸÄ±ma ihtiyacÄ±nÄ± tanÄ±mlar.", request: "Ã–rn. 12 ton/saat" },
    { label: "ÃœrÃ¼n yoÄŸunluÄŸu", purpose: "Hacimsel doluluÄŸu ve gerÃ§ek tonajÄ± belirler.", request: "Ã–rn. 0,75 t/m3" },
    { label: "Hat uzunluÄŸu", purpose: "SÃ¼rtÃ¼nme ve motor yÃ¼kÃ¼nÃ¼ etkiler.", request: "Ã–rn. 8 metre" },
    { label: "EÄŸim aÃ§Ä±sÄ±", purpose: "Kapasite kaybÄ± ve geri kaÃ§ma riskini tanÄ±mlar.", request: "Ã–rn. 15Â°" },
    { label: "Hatve", purpose: "ÃœrÃ¼nÃ¼n bir devirde ilerleme miktarÄ±nÄ± belirler.", request: "Standart / artÄ±rÄ±lmÄ±ÅŸ" },
    { label: "Devir", purpose: "Kapasite ile aÅŸÄ±nma dengesini kurar.", request: "Ã–n rpm aralÄ±ÄŸÄ±" },
    { label: "Doluluk oranÄ±", purpose: "Kesitin ne kadarÄ±nÄ±n gÃ¼venli taÅŸÄ±maya ayrÄ±ldÄ±ÄŸÄ±nÄ± gÃ¶sterir.", request: "%15 - %45 aralÄ±ÄŸÄ±" },
    { label: "Servis rejimi", purpose: "Motor ve redÃ¼ktÃ¶r seÃ§imine gÃ¼venlik payÄ± ekler.", request: "SÃ¼rekli / vardiyalÄ± Ã§alÄ±ÅŸma" },
  ],
  exampleTitle: "Ã–rnek Ã–n Hesap MantÄ±ÄŸÄ±",
  exampleDescription:
    "AÅŸaÄŸÄ±daki Ã¶rnek, Ã§ap-hatve-devir ve Ã¼rÃ¼n yoÄŸunluÄŸu arasÄ±ndaki iliÅŸkiyi temel tasarÄ±m mantÄ±ÄŸÄ±yla Ã¶zetler.",
  exampleRows: [
    { label: "ÃœrÃ¼n yoÄŸunluÄŸu", value: "0,75 t/m3", comment: "Hacimsel hesabÄ±n baÅŸlangÄ±cÄ±" },
    { label: "Kapasite", value: "12 ton/saat", comment: "Hedef taÅŸÄ±ma debisi" },
    { label: "Helezon Ã§apÄ±", value: "323 mm", comment: "Ã–n seÃ§im yaklaÅŸÄ±mÄ±" },
    { label: "Hatve", value: "323 mm", comment: "Standart tam hatve Ã¶rneÄŸi" },
    { label: "Devir", value: "80 rpm", comment: "GÃ¼venli hÄ±z yaklaÅŸÄ±mÄ±" },
    { label: "Motor gÃ¼cÃ¼", value: "Ã–n hesap gerekir", comment: "Hat uzunluÄŸu ve eÄŸime gÃ¶re netleÅŸir" },
  ],
  decisionTableTitle: "Teknik Karar Matrisi",
  decisionTableDescription:
    "Helezon hatlarÄ±nda kapasite, motor gÃ¼cÃ¼ ve servis gÃ¼venliÄŸi aynÄ± teknik Ã§erÃ§evede okunmalÄ±dÄ±r.",
  decisionTableRows: [
    { criterion: "Ã‡ap", description: "TaÅŸÄ±nan hacmin ana belirleyicisidir.", importance: "Kapasite gÃ¼venliÄŸini belirler.", effect: "KÃ¼Ã§Ã¼k Ã§ap dar boÄŸaz oluÅŸturur." },
    { criterion: "Hatve", description: "ÃœrÃ¼nÃ¼n bir turda ne kadar ilerleyeceÄŸini tanÄ±mlar.", importance: "Kapasite ve dozajlama dengesini etkiler.", effect: "YanlÄ±ÅŸ hatve dÃ¼zensiz akÄ±ÅŸ yaratÄ±r." },
    { criterion: "Devir", description: "Hacimsel taÅŸÄ±ma hÄ±zÄ±nÄ± belirler.", importance: "Kapasite ve aÅŸÄ±nma arasÄ±nda denge kurar.", effect: "AÅŸÄ±rÄ± devir tozlaÅŸma ve titreÅŸim doÄŸurur." },
    { criterion: "EÄŸim", description: "TaÅŸÄ±ma ekseninin yÃ¼kselme oranÄ±dÄ±r.", importance: "Etkin kapasiteyi dÃ¼ÅŸÃ¼rÃ¼r.", effect: "YÃ¼ksek eÄŸimde geriye kaÃ§ma artar." },
    { criterion: "Tork", description: "Motor ve redÃ¼ktÃ¶r yÃ¼kÃ¼nÃ¼ tanÄ±mlar.", importance: "Tahrik seÃ§iminin gÃ¼venliÄŸini belirler.", effect: "Eksik tork kalkÄ±ÅŸ sorununa yol aÃ§ar." },
    { criterion: "AÅŸÄ±nma", description: "ÃœrÃ¼n karakterine baÄŸlÄ± mekanik yÄ±pranmadÄ±r.", importance: "Malzeme seÃ§imini etkiler.", effect: "YanlÄ±ÅŸ malzeme bakÄ±m sÃ¼resini kÄ±saltÄ±r." },
  ],
  factorCardsTitle: "Helezon PerformansÄ±nÄ± Etkileyen FaktÃ¶rler",
  factorCardsDescription:
    "TaÅŸÄ±ma hattÄ±nÄ±n sahada kararlÄ± Ã§alÄ±ÅŸmasÄ± iÃ§in aÅŸaÄŸÄ±daki baÅŸlÄ±klar birlikte deÄŸerlendirilmelidir.",
  factorCards: [
    { title: "ÃœrÃ¼n akÄ±ÅŸkanlÄ±ÄŸÄ±", description: "Serbest akÄ±ÅŸlÄ± ve yapÄ±ÅŸkan Ã¼rÃ¼nlerde doluluk yaklaÅŸÄ±mÄ± deÄŸiÅŸir." },
    { title: "EÄŸim etkisi", description: "YÃ¼kselme arttÄ±kÃ§a efektif kapasite dÃ¼ÅŸer." },
    { title: "Nem", description: "YapÄ±ÅŸma ve temizlenebilirlik gereksinimini bÃ¼yÃ¼tÃ¼r." },
    { title: "SÃ¼rekli Ã§alÄ±ÅŸma", description: "Servis faktÃ¶rÃ¼ ve motor gÃ¼venlik payÄ±nÄ± etkiler." },
    { title: "AÅŸÄ±ndÄ±rÄ±cÄ±lÄ±k", description: "Yaprak ve gÃ¶vde malzeme seÃ§imini belirler." },
    { title: "Besleme dÃ¼zeni", description: "DÃ¼zensiz besleme tork dalgalanmasÄ± ve kapasite kaybÄ± yaratÄ±r." },
  ],
  relatedLinksTitle: "Ä°lgili Teknik Ä°Ã§erikler",
  relatedLinksDescription:
    "Helezon ve taÅŸÄ±ma hatlarÄ±nÄ± tamamlayan ekipman, program ve teknik sayfalara aÅŸaÄŸÄ±dan ulaÅŸabilirsiniz.",
  relatedLinks: [
    { title: "VidalÄ± Helezonlar", description: "Helezon Ã¼rÃ¼n ailesini makina kategorisinde inceleyin.", href: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar" },
    { title: "TaÅŸÄ±ma EkipmanlarÄ±", description: "Bant konveyÃ¶r, elevatÃ¶r ve zincirli hatlarla birlikte gÃ¶rÃ¼n.", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    { title: "Helezon Hesap ProgramÄ±", description: "Kapasite ve Ã¶n mekanik seÃ§im iÃ§in program sayfasÄ±na gidin.", href: "/programlar/helezon-kapasite-hesabi" },
    { title: "KonveyÃ¶r HesabÄ±", description: "TaÅŸÄ±ma sistemlerini konveyÃ¶r perspektifiyle karÅŸÄ±laÅŸtÄ±rÄ±n.", href: "/programlar/konveyor-kapasite-hesabi" },
    { title: "BantlÄ± KonveyÃ¶rler", description: "Alternatif taÅŸÄ±ma omurgalarÄ±nÄ± makina kategorisinde inceleyin.", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
    { title: "Zincirli ElevatÃ¶rler", description: "Dikey taÅŸÄ±ma hatlarÄ± iÃ§in ilgili ekipman ailesine bakÄ±n.", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler" },
  ],
};

const conveyorData: BlogTechnicalArticleData = {
  requiredDataTitle: "KonveyÃ¶r SeÃ§imi Ä°Ã§in Gerekli Veriler",
  requiredDataDescription:
    "BantlÄ± ve sÃ¼rekli taÅŸÄ±ma sistemlerinde hÄ±z, kesit, eÄŸim ve Ã¼rÃ¼n yoÄŸunluÄŸu birlikte deÄŸerlendirilmelidir.",
  requiredDataRows: [
    { label: "Kapasite", purpose: "Saatlik taÅŸÄ±ma ihtiyacÄ±nÄ± belirler.", request: "Ã–rn. 40 ton/saat" },
    { label: "ÃœrÃ¼n yoÄŸunluÄŸu", purpose: "Kesit hesabÄ±nÄ± ve yÃ¼k miktarÄ±nÄ± etkiler.", request: "Ã–rn. 1,2 t/m3" },
    { label: "Bant geniÅŸliÄŸi", purpose: "TaÅŸÄ±nacak malzeme kesitini tanÄ±mlar.", request: "Ã–n seÃ§im aralÄ±ÄŸÄ±" },
    { label: "Bant hÄ±zÄ±", purpose: "Kapasite ve Ã¼rÃ¼n stabilitesini etkiler.", request: "Ã–n m/sn yaklaÅŸÄ±mÄ±" },
    { label: "TaÅŸÄ±ma aÃ§Ä±sÄ±", purpose: "Geri kaÃ§ma ve kapasite kaybÄ±nÄ± tanÄ±mlar.", request: "Ã–rn. 18Â°" },
    { label: "Hat boyu", purpose: "Motor yÃ¼kÃ¼ ve gerdirme ihtiyacÄ±nÄ± belirler.", request: "Ã–rn. 22 metre" },
    { label: "Besleme ÅŸekli", purpose: "YÃ¼k daÄŸÄ±lÄ±mÄ±nÄ± ve ÅŸasi yÃ¼kÃ¼nÃ¼ etkiler.", request: "Merkez / tek taraf" },
    { label: "Ã‡alÄ±ÅŸma rejimi", purpose: "Motor ve rulman gÃ¼venlik payÄ±nÄ± etkiler.", request: "SÃ¼rekli / partili" },
  ],
  exampleTitle: "Ã–rnek Ã–n SeÃ§im YaklaÅŸÄ±mÄ±",
  exampleDescription:
    "BantlÄ± taÅŸÄ±ma hatlarÄ±nda kapasite ve bant hÄ±zÄ± birlikte okunur; sadece tonaj verisi gÃ¼venli seÃ§im iÃ§in yeterli deÄŸildir.",
  exampleRows: [
    { label: "Kapasite", value: "40 ton/saat", comment: "Net taÅŸÄ±ma hedefi" },
    { label: "ÃœrÃ¼n yoÄŸunluÄŸu", value: "1,2 t/m3", comment: "Kesit hesabÄ± iÃ§in ana veri" },
    { label: "Bant geniÅŸliÄŸi", value: "650 mm", comment: "Ã–n seÃ§im yaklaÅŸÄ±mÄ±" },
    { label: "Bant hÄ±zÄ±", value: "1,4 m/sn", comment: "GÃ¼venli akÄ±ÅŸ aralÄ±ÄŸÄ±" },
    { label: "TaÅŸÄ±ma aÃ§Ä±sÄ±", value: "18Â°", comment: "Geri kaÃ§ma kontrolÃ¼ gerekir" },
    { label: "Motor gÃ¼cÃ¼", value: "Hat boyuna gÃ¶re netleÅŸir", comment: "SÃ¼rtÃ¼nme ve yÃ¼k daÄŸÄ±lÄ±mÄ± ile okunur" },
  ],
  decisionTableTitle: "KonveyÃ¶r Karar Matrisi",
  decisionTableDescription:
    "KonveyÃ¶r hatlarÄ±nda kapasite kadar Ã¼rÃ¼n davranÄ±ÅŸÄ±, yÃ¼kleme dÃ¼zeni ve uzunluk da belirleyicidir.",
  decisionTableRows: [
    { criterion: "Bant geniÅŸliÄŸi", description: "Kesit alanÄ±nÄ± belirler.", importance: "Kapasite iÃ§in temel girdidir.", effect: "Yetersiz seÃ§ilirse taÅŸma riski oluÅŸur." },
    { criterion: "Bant hÄ±zÄ±", description: "Malzemenin hareket hÄ±zÄ±dÄ±r.", importance: "Kapasite ve Ã¼rÃ¼n stabilitesini etkiler.", effect: "AÅŸÄ±rÄ± hÄ±z savrulma yaratabilir." },
    { criterion: "TaÅŸÄ±ma aÃ§Ä±sÄ±", description: "YÃ¼kselme oranÄ±nÄ± tanÄ±mlar.", importance: "Kapasite kaybÄ± ve bant seÃ§imini etkiler.", effect: "YÃ¼ksek aÃ§Ä±da geri kaÃ§ma olur." },
    { criterion: "Hat boyu", description: "Toplam taÅŸÄ±ma mesafesidir.", importance: "Motor ve gerdirme ihtiyacÄ±nÄ± bÃ¼yÃ¼tÃ¼r.", effect: "Uzun hatlarda enerji artar." },
    { criterion: "YÃ¼kleme dÃ¼zeni", description: "Malzemenin banda giriÅŸ biÃ§imidir.", importance: "YÃ¼k daÄŸÄ±lÄ±mÄ±nÄ± etkiler.", effect: "YanlÄ±ÅŸ yÃ¼kleme bant Ã¶mrÃ¼nÃ¼ dÃ¼ÅŸÃ¼rÃ¼r." },
    { criterion: "BakÄ±m eriÅŸimi", description: "Rulman, tambur ve ÅŸase servis imkanlarÄ±dÄ±r.", importance: "Uzun vadeli iÅŸletme sÃ¼rekliliÄŸi saÄŸlar.", effect: "Zor eriÅŸim plansÄ±z duruÅŸlarÄ± artÄ±rÄ±r." },
  ],
  factorCardsTitle: "KonveyÃ¶r SeÃ§imini Etkileyen FaktÃ¶rler",
  factorCardsDescription:
    "TaÅŸÄ±ma hattÄ±nÄ±n gÃ¼venli ve dengeli Ã§alÄ±ÅŸmasÄ± iÃ§in ekipman seÃ§iminde aÅŸaÄŸÄ±daki baÅŸlÄ±klar Ã¶ne Ã§Ä±kar.",
  factorCards: [
    { title: "ÃœrÃ¼n akÄ±ÅŸÄ±", description: "DÃ¶kÃ¼lme ve savrulma riski bant hÄ±zÄ±nÄ± etkiler." },
    { title: "YÃ¼kleme noktasÄ±", description: "Åžase yÃ¼kÃ¼ ve bant Ã¶mrÃ¼ Ã¼zerinde belirleyicidir." },
    { title: "Hat uzunluÄŸu", description: "Motor gÃ¼cÃ¼ ve gerdirme ihtiyacÄ±nÄ± artÄ±rÄ±r." },
    { title: "EÄŸim", description: "KapalÄ± taÅŸÄ±ma veya cleat ihtiyacÄ±nÄ± gÃ¼ndeme getirir." },
    { title: "Toz oluÅŸumu", description: "Kapama ve filtreleme ihtiyaÃ§larÄ±nÄ± artÄ±rÄ±r." },
    { title: "Servis koÅŸulu", description: "AÄŸÄ±r hizmet uygulamalarÄ±nda daha gÃ¼Ã§lÃ¼ omurga gerekir." },
  ],
  relatedLinksTitle: "Ä°lgili Teknik Ä°Ã§erikler",
  relatedLinksDescription:
    "KonveyÃ¶r kapasitesi, taÅŸÄ±ma hatlarÄ± ve tamamlayÄ±cÄ± ekipman ailelerini aÅŸaÄŸÄ±daki sayfalardan inceleyebilirsiniz.",
  relatedLinks: [
    { title: "BantlÄ± KonveyÃ¶rler", description: "BantlÄ± taÅŸÄ±ma Ã¼rÃ¼n ailesini makina kategorisinde gÃ¶rÃ¼n.", href: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler" },
    { title: "TaÅŸÄ±ma EkipmanlarÄ±", description: "KonveyÃ¶r, helezon ve elevatÃ¶r sistemlerini birlikte deÄŸerlendirin.", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    { title: "KonveyÃ¶r Hesap ProgramÄ±", description: "Ã–n seÃ§im ve kapasite yaklaÅŸÄ±mÄ± iÃ§in program alanÄ±na gidin.", href: "/programlar/konveyor-kapasite-hesabi" },
    { title: "Helezon Hesap ProgramÄ±", description: "Alternatif taÅŸÄ±ma omurgasÄ±nÄ± helezon perspektifiyle gÃ¶rÃ¼n.", href: "/programlar/helezon-kapasite-hesabi" },
    { title: "Zincirli ElevatÃ¶rler", description: "Dikey taÅŸÄ±ma Ã§Ã¶zÃ¼mlerini ilgili makina grubunda inceleyin.", href: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler" },
    { title: "Ä°letiÅŸim", description: "Hat seÃ§imi iÃ§in teknik deÄŸerlendirme talep edin.", href: "/iletisim" },
  ],
};

const fertilizerData: BlogTechnicalArticleData = {
  requiredDataTitle: "GÃ¼bre Tesisi Ä°Ã§in Gerekli Veriler",
  requiredDataDescription:
    "GÃ¼bre yatÄ±rÄ±mlarÄ±nda Ã¼rÃ¼n formu, kapasite ve proses sÄ±rasÄ± aynÄ± dosyada ele alÄ±nmalÄ±dÄ±r.",
  requiredDataRows: [
    { label: "ÃœrÃ¼n tipi", purpose: "Toz, granÃ¼l veya sÄ±vÄ± hat mimarisini belirler.", request: "NPK / organomineral / granÃ¼l" },
    { label: "Kapasite", purpose: "TÃ¼m makine omurgasÄ±nÄ±n Ã¶lÃ§eÄŸini belirler.", request: "Ã–rn. 5 ton/saat" },
    { label: "Hammadde yapÄ±sÄ±", purpose: "Dozajlama ve karÄ±ÅŸtÄ±rma sistemini etkiler.", request: "Toz / nemli / lifli" },
    { label: "Nem seviyesi", purpose: "Kurutma ihtiyacÄ±nÄ± ve residence time yaklaÅŸÄ±mÄ±nÄ± etkiler.", request: "GiriÅŸ ve hedef nem" },
    { label: "GranÃ¼l boyutu", purpose: "Eleme ve kaplama kurgusunu belirler.", request: "Ã–rn. 2-4 mm" },
    { label: "Kurutma ihtiyacÄ±", purpose: "Tambur ve enerji modelini tanÄ±mlar.", request: "Var / yok" },
    { label: "Paketleme tipi", purpose: "Torbalama, big bag veya dÃ¶kme Ã§Ä±kÄ±ÅŸÄ± belirler.", request: "25 kg / 50 kg / big bag" },
    { label: "Ã‡alÄ±ÅŸma rejimi", purpose: "Vardiya ve stok planÄ±nÄ± etkiler.", request: "Ã–rn. 2 vardiya" },
  ],
  exampleTitle: "Ã–rnek SÃ¼reÃ§ AkÄ±ÅŸÄ±",
  exampleDescription:
    "GÃ¼bre tesislerinde teknik deÄŸerlendirme, yalnÄ±z tek makine deÄŸil birbirini tamamlayan proses adÄ±mlarÄ± Ã¼zerinden yapÄ±lmalÄ±dÄ±r.",
  exampleRows: [
    { label: "Dozajlama", value: "Hammadde besleme", comment: "ReÃ§ete doÄŸruluÄŸunu baÅŸlatÄ±r" },
    { label: "KarÄ±ÅŸtÄ±rma", value: "Homojenizasyon", comment: "ÃœrÃ¼n standardÄ±nÄ± belirler" },
    { label: "GranÃ¼lasyon", value: "Åžekillendirme", comment: "GranÃ¼l kalitesinin ana aÅŸamasÄ±dÄ±r" },
    { label: "Kurutma", value: "Nem dÃ¼ÅŸÃ¼rme", comment: "DayanÄ±m ve depolama davranÄ±ÅŸÄ±nÄ± etkiler" },
    { label: "Eleme", value: "SÄ±nÄ±flandÄ±rma", comment: "SatÄ±labilir fraksiyonu ayÄ±rÄ±r" },
    { label: "Paketleme", value: "Ticari Ã§Ä±kÄ±ÅŸ", comment: "Son Ã¼rÃ¼n sevkiyatÄ±nÄ± hazÄ±rlar" },
  ],
  decisionTableTitle: "Teknik Karar Matrisi",
  decisionTableDescription:
    "GÃ¼bre hatlarÄ±nda ekipman gruplarÄ± birbirini besleyen tek bir proses omurgasÄ± olarak dÃ¼ÅŸÃ¼nÃ¼lmelidir.",
  decisionTableRows: [
    { criterion: "Dozajlama", description: "Hammadde akÄ±ÅŸÄ±nÄ± reÃ§eteye gÃ¶re yÃ¶netir.", importance: "ÃœrÃ¼n standardÄ±nÄ±n temelidir.", effect: "Hassasiyet dÃ¼ÅŸÃ¼kse kalite dalgalanÄ±r." },
    { criterion: "GranÃ¼lasyon", description: "ÃœrÃ¼ne form kazandÄ±rÄ±r.", importance: "GranÃ¼l dayanÄ±mÄ±nÄ± belirler.", effect: "YanlÄ±ÅŸ seÃ§im kurutma yÃ¼kÃ¼nÃ¼ artÄ±rÄ±r." },
    { criterion: "Kurutma", description: "Fazla nemi kontrollÃ¼ biÃ§imde uzaklaÅŸtÄ±rÄ±r.", importance: "Depolama ve paketleme davranÄ±ÅŸÄ±nÄ± etkiler.", effect: "Eksik kurutma Ã¼rÃ¼n akÄ±ÅŸÄ±nÄ± bozar." },
    { criterion: "Eleme", description: "Uygun fraksiyonu ayÄ±rÄ±r.", importance: "Ticari standart iÃ§in kritiktir.", effect: "ZayÄ±f eleme geri dÃ¶nÃ¼ÅŸ oranÄ±nÄ± bÃ¼yÃ¼tÃ¼r." },
    { criterion: "Kaplama", description: "YÃ¼zey kalitesi ve Ã¼rÃ¼n kararlÄ±lÄ±ÄŸÄ±nÄ± iyileÅŸtirir.", importance: "Premium son Ã¼rÃ¼n hedeflerinde Ã¶nemlidir.", effect: "Eksik kaplama tozlanmayÄ± artÄ±rÄ±r." },
    { criterion: "Paketleme", description: "Son Ã¼rÃ¼nÃ¼n satÄ±ÅŸa hazÄ±r hale gelmesini saÄŸlar.", importance: "Tesis ritmini son aÅŸamada belirler.", effect: "ZayÄ±f hat tÃ¼m Ã¼retimi yavaÅŸlatÄ±r." },
  ],
  factorCardsTitle: "YatÄ±rÄ±mÄ± Etkileyen FaktÃ¶rler",
  factorCardsDescription:
    "GÃ¼bre tesisi tasarÄ±mÄ±nda proses kadar Ã¼rÃ¼n tipi ve operasyon modeli de belirleyicidir.",
  factorCards: [
    { title: "ÃœrÃ¼n formu", description: "GranÃ¼l, toz ve sÄ±vÄ± hatlar aynÄ± omurgayla kurulmaz." },
    { title: "Hammadde davranÄ±ÅŸÄ±", description: "Nemli veya yapÄ±ÅŸkan akÄ±ÅŸlar farklÄ± dozajlama gerektirir." },
    { title: "Kurutma ihtiyacÄ±", description: "Enerji modeli ve tambur seÃ§imini doÄŸrudan etkiler." },
    { title: "Paketleme stratejisi", description: "Ticari Ã§Ä±kÄ±ÅŸ ÅŸekli tÃ¼m hat ritmini belirler." },
    { title: "Saha akÄ±ÅŸÄ±", description: "Makine yerleÅŸimi bakÄ±m ve lojistikle uyumlu olmalÄ±dÄ±r." },
    { title: "ÃœrÃ¼n standardÄ±", description: "GranÃ¼l dayanÄ±mÄ± ve nem kararlÄ±lÄ±ÄŸÄ± son kullanÄ±cÄ±yÄ± etkiler." },
  ],
  relatedLinksTitle: "Ä°lgili Teknik Ä°Ã§erikler",
  relatedLinksDescription:
    "GÃ¼bre tesisi yatÄ±rÄ±mÄ±, ekipman omurgasÄ± ve ilgili proses iÃ§eriklerini aÅŸaÄŸÄ±daki sayfalardan birlikte inceleyebilirsiniz.",
  relatedLinks: [
    { title: "GÃ¼bre Tesisi Kurulumu", description: "Anahtar teslim hat yaklaÅŸÄ±mÄ±mÄ±zÄ± hizmet sayfasÄ±nda gÃ¶rÃ¼n.", href: "/hizmetler/gubre-tesisi-kurulumu" },
    { title: "GranÃ¼l GÃ¼bre Ãœretim Tesisi", description: "GranÃ¼l Ã¼retim hatlarÄ± iÃ§in Ã¶zel hizmet sayfasÄ±na gidin.", href: "/hizmetler/granul-gubre-uretim-tesisi" },
    { title: "Organomineral GÃ¼bre Tesisi", description: "Organomineral projeleri iÃ§in ilgili hizmet alanÄ±nÄ± inceleyin.", href: "/hizmetler/organomineral-gubre-tesisi" },
    { title: "Paketleme ve Dolum Sistemleri", description: "Son Ã¼rÃ¼n hazÄ±rlama ekipman ailelerini makina tarafÄ±nda gÃ¶rÃ¼n.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    { title: "Tambur Sistemleri", description: "GranÃ¼lasyon, kurutma ve soÄŸutma tamburu ailelerini inceleyin.", href: "/makinalar-ekipman/tambur-sistemleri" },
    { title: "Ä°letiÅŸim", description: "Projenize Ã¶zel teknik deÄŸerlendirme ve teklif talep edin.", href: "/iletisim" },
  ],
};

const compostData: BlogTechnicalArticleData = {
  requiredDataTitle: "Kompost ve Organik AtÄ±k Ä°Ã§in Gerekli Veriler",
  requiredDataDescription:
    "Kompost ve organik atÄ±k projelerinde atÄ±k karakteri, nem dengesi ve Ã§evresel kontrol en baÅŸtan birlikte dÃ¼ÅŸÃ¼nÃ¼lmelidir.",
  requiredDataRows: [
    { label: "AtÄ±k tÃ¼rÃ¼", purpose: "Hangi proses ve makine grubunun kullanÄ±lacaÄŸÄ±nÄ± belirler.", request: "Evsel / hayvansal / tarÄ±msal" },
    { label: "GÃ¼nlÃ¼k tonaj", purpose: "Kabul alanÄ± ve ana ekipman kapasitesini tanÄ±mlar.", request: "Ã–rn. 40 ton/gÃ¼n" },
    { label: "GiriÅŸ nemi", purpose: "KarÄ±ÅŸtÄ±rma ve kurutma ihtiyacÄ±nÄ± belirler.", request: "Ã–rn. %55" },
    { label: "Hedef Ã¼rÃ¼n nemi", purpose: "Son Ã¼rÃ¼n kararlÄ±lÄ±ÄŸÄ±nÄ± ve eleme davranÄ±ÅŸÄ±nÄ± etkiler.", request: "Ã–rn. %25-%35" },
    { label: "OlgunlaÅŸtÄ±rma sÃ¼resi", purpose: "Saha hacmi ve Ã§evrim planÄ±nÄ± belirler.", request: "Ã–rn. 21-45 gÃ¼n" },
    { label: "Koku kontrolÃ¼", purpose: "Ã‡evresel uyum ve hava hattÄ± gereksinimini etkiler.", request: "Biyofiltre / fan hattÄ±" },
    { label: "YabancÄ± madde oranÄ±", purpose: "Ã–n ayÄ±rma ve parÃ§alama ihtiyacÄ±nÄ± tanÄ±mlar.", request: "Plastik / cam / metal oranÄ±" },
    { label: "Son Ã¼rÃ¼n hedefi", purpose: "Eleme, paketleme ve stok yaklaÅŸÄ±mÄ±nÄ± belirler.", request: "DÃ¶kme / torbalÄ± Ã¼rÃ¼n" },
  ],
  exampleTitle: "Ã–rnek SÃ¼reÃ§ DeÄŸerlendirmesi",
  exampleDescription:
    "Kompost ve organik atÄ±k hatlarÄ±nda sÃ¼reÃ§, yalnÄ±z ayrÄ±ÅŸtÄ±rma deÄŸil nem yÃ¶netimi ve olgunlaÅŸma disiplini Ã¼zerinden okunmalÄ±dÄ±r.",
  exampleRows: [
    { label: "Kabul", value: "AtÄ±k giriÅŸ kontrolÃ¼", comment: "ReÃ§ete kalitesinin baÅŸlangÄ±cÄ±dÄ±r" },
    { label: "Ã–n ayÄ±rma", value: "YabancÄ± madde Ã§Ä±karma", comment: "Makine gÃ¼venliÄŸini korur" },
    { label: "ParÃ§alama / karÄ±ÅŸtÄ±rma", value: "Homojenizasyon", comment: "Biyolojik aktiviteyi dengeler" },
    { label: "OlgunlaÅŸtÄ±rma", value: "SÃ¼reÃ§ takibi", comment: "SÄ±caklÄ±k ve nem kontrolÃ¼ gerekir" },
    { label: "Eleme", value: "Son Ã¼rÃ¼n hazÄ±rlÄ±ÄŸÄ±", comment: "SatÄ±labilir fraksiyonu ayÄ±rÄ±r" },
    { label: "Paketleme / stok", value: "Ticari Ã§Ä±kÄ±ÅŸ", comment: "Operasyon modeline gÃ¶re belirlenir" },
  ],
  decisionTableTitle: "Teknik Karar Matrisi",
  decisionTableDescription:
    "Organik atÄ±k projelerinde biyolojik sÃ¼reÃ§, mekanik hazÄ±rlÄ±k ve Ã§evresel kontrol aynÄ± karara baÄŸlÄ±dÄ±r.",
  decisionTableRows: [
    { criterion: "Ã–n ayÄ±rma", description: "Ä°stenmeyen fraksiyonlarÄ± ayÄ±rÄ±r.", importance: "Makine gÃ¼venliÄŸini korur.", effect: "Eksik ayÄ±rma bakÄ±m yÃ¼kÃ¼nÃ¼ artÄ±rÄ±r." },
    { criterion: "ParÃ§alama", description: "Malzemeyi homojenize eder.", importance: "Biyolojik aktiviteye hazÄ±rlÄ±k saÄŸlar.", effect: "AÅŸÄ±rÄ± parÃ§alama ince fraksiyonu bÃ¼yÃ¼tÃ¼r." },
    { criterion: "Nem yÃ¶netimi", description: "SÃ¼reÃ§teki su dengesini kontrol eder.", importance: "OlgunlaÅŸma hÄ±zÄ±nÄ± belirler.", effect: "YanlÄ±ÅŸ nem koku ve kalite sorunu yaratÄ±r." },
    { criterion: "OlgunlaÅŸtÄ±rma", description: "Kompostun kararlÄ± hale gelmesini saÄŸlar.", importance: "Son Ã¼rÃ¼n kalitesinin temelidir.", effect: "KÄ±sa sÃ¼re Ã¼rÃ¼n stabilitesini dÃ¼ÅŸÃ¼rÃ¼r." },
    { criterion: "Eleme", description: "Fraksiyon ayrÄ±mÄ± yapar.", importance: "Ticari Ã¼rÃ¼n hazÄ±rlÄ±ÄŸÄ±nÄ± belirler.", effect: "Yetersiz eleme geri devir oranÄ±nÄ± artÄ±rÄ±r." },
    { criterion: "Koku kontrolÃ¼", description: "Fan ve filtre hattÄ±nÄ± yÃ¶netir.", importance: "Ã‡evresel uyum iÃ§in kritiktir.", effect: "Eksik kontrol saha kabulÃ¼nÃ¼ zorlaÅŸtÄ±rÄ±r." },
  ],
  factorCardsTitle: "SÃ¼reci Etkileyen FaktÃ¶rler",
  factorCardsDescription:
    "Kompost ve organik atÄ±k hatlarÄ±nda prosesin kararlÄ± ilerlemesi iÃ§in aÅŸaÄŸÄ±daki baÅŸlÄ±klar birlikte ele alÄ±nmalÄ±dÄ±r.",
  factorCards: [
    { title: "AtÄ±k bileÅŸimi", description: "Karbon/azot dengesi sÃ¼reÃ§ hÄ±zÄ±nÄ± etkiler." },
    { title: "Nem seviyesi", description: "Biyolojik aktivite ve kurutma ihtiyacÄ± Ã¼zerinde belirleyicidir." },
    { title: "YabancÄ± madde", description: "Ã–n ayÄ±rma ve parÃ§alayÄ±cÄ± seÃ§imini ÅŸekillendirir." },
    { title: "Koku kontrolÃ¼", description: "Saha kabulÃ¼ ve Ã§evresel uyum aÃ§Ä±sÄ±ndan kritiktir." },
    { title: "OlgunlaÅŸma sÃ¼resi", description: "Alan ihtiyacÄ± ve stok planÄ±nÄ± bÃ¼yÃ¼tÃ¼r." },
    { title: "Son Ã¼rÃ¼n standardÄ±", description: "Eleme ve paketleme ihtiyacÄ±nÄ± belirler." },
  ],
  relatedLinksTitle: "Ä°lgili Teknik Ä°Ã§erikler",
  relatedLinksDescription:
    "Kompost, organik atÄ±k ve tamamlayÄ±cÄ± makina ailelerini aÅŸaÄŸÄ±daki sayfalardan birlikte deÄŸerlendirebilirsiniz.",
  relatedLinks: [
    { title: "Kompost Tesisi Kurulumu", description: "Kompost projeleri iÃ§in hizmet sayfamÄ±zÄ± inceleyin.", href: "/hizmetler/kompost-tesisi-kurulumu" },
    { title: "Kompost ve Organik AtÄ±k Tesisleri", description: "SektÃ¶r sayfasÄ±nda uygulama alanlarÄ±nÄ± gÃ¶rÃ¼n.", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
    { title: "Kompost Tamburu", description: "Tamburlu Ã¶n fermentasyon iÃ§in ilgili ekipman sayfasÄ±na gidin.", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
    { title: "Trommel Elekler", description: "Son Ã¼rÃ¼n eleme ve fraksiyon ayÄ±rma ekipmanlarÄ±nÄ± inceleyin.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
    { title: "Organik AtÄ±k Tesisi", description: "AtÄ±k hazÄ±rlama ve deÄŸerlendirme mantÄ±ÄŸÄ±nÄ± blog tarafÄ±nda okuyun.", href: "/kutuphane/blog/organik-atik-tesisi" },
    { title: "Ä°letiÅŸim", description: "Saha ve kapasite verilerinizle teknik gÃ¶rÃ¼ÅŸme talep edin.", href: "/iletisim" },
  ],
};

const biogasData: BlogTechnicalArticleData = {
  requiredDataTitle: "Biyogaz Ã–n Ä°ÅŸlem Ä°Ã§in Gerekli Veriler",
  requiredDataDescription:
    "Biyogaz Ã¶n iÅŸlem hatlarÄ±nda atÄ±k karakteri, besleme rejimi ve digestat yÃ¶netimi birlikte deÄŸerlendirilmelidir.",
  requiredDataRows: [
    { label: "AtÄ±k tÃ¼rÃ¼", purpose: "ParÃ§alama ve ayÄ±rma ihtiyacÄ±nÄ± belirler.", request: "GÄ±da / tarÄ±msal / hayvansal" },
    { label: "Tonaj", purpose: "Besleme omurgasÄ±nÄ±n Ã¶lÃ§eÄŸini tanÄ±mlar.", request: "Ã–rn. 30 ton/gÃ¼n" },
    { label: "Kuru madde", purpose: "Pompalama ve karÄ±ÅŸtÄ±rma davranÄ±ÅŸÄ±nÄ± etkiler.", request: "Ã–rn. %18 KM" },
    { label: "Organik madde", purpose: "Gaz Ã¼retim potansiyelini okumayÄ± saÄŸlar.", request: "VS / OM oranÄ±" },
    { label: "Besleme tipi", purpose: "Helezon, bunker veya pompa seÃ§imini etkiler.", request: "Kesikli / sÃ¼rekli" },
    { label: "YabancÄ± madde", purpose: "Ã–n ayÄ±rma gereksinimini artÄ±rÄ±r.", request: "Plastik / metal / taÅŸ" },
    { label: "Digestat miktarÄ±", purpose: "Sonraki yÃ¶netim ve susuzlaÅŸtÄ±rma ihtiyacÄ±nÄ± belirler.", request: "Tahmini gÃ¼nlÃ¼k Ã§Ä±kÄ±ÅŸ" },
    { label: "Koku ve hijyen", purpose: "Saha yerleÅŸimi ve Ã§evresel kontrolÃ¼ etkiler.", request: "Fan / filtre ihtiyacÄ±" },
  ],
  exampleTitle: "Ã–rnek SÃ¼reÃ§ AkÄ±ÅŸÄ±",
  exampleDescription:
    "Biyogaz Ã¶n iÅŸlem hattÄ±; kabulden digestat yÃ¶netimine kadar mekanik ve biyolojik sÃ¼recin birlikte okunduÄŸu bir hazÄ±rlÄ±k omurgasÄ±dÄ±r.",
  exampleRows: [
    { label: "Kabul", value: "AtÄ±k giriÅŸ kontrolÃ¼", comment: "HattÄ±n istikrarlÄ± Ã§alÄ±ÅŸmasÄ± iÃ§in gereklidir" },
    { label: "ParÃ§alama", value: "Boyut kÃ¼Ã§Ã¼ltme", comment: "ReaktÃ¶r beslemesini kolaylaÅŸtÄ±rÄ±r" },
    { label: "AyÄ±rma", value: "YabancÄ± madde Ã§Ä±karma", comment: "Makine ve reaktÃ¶r gÃ¼venliÄŸini korur" },
    { label: "Besleme", value: "Dengeli akÄ±ÅŸ", comment: "Gaz Ã¼retim stabilitesini etkiler" },
    { label: "Gaz yÃ¶netimi", value: "ReaktÃ¶r sonrasÄ± kontrol", comment: "Enerji kalitesini destekler" },
    { label: "Digestat", value: "Ã‡Ä±kÄ±ÅŸ yÃ¶netimi", comment: "Son Ã¼rÃ¼n veya bertaraf yaklaÅŸÄ±mÄ±nÄ± belirler" },
  ],
  decisionTableTitle: "Teknik Karar Matrisi",
  decisionTableDescription:
    "Biyogaz Ã¶n iÅŸlem hatlarÄ±nda hazÄ±rlÄ±k kalitesi, reaktÃ¶r veriminin sahadaki temel belirleyicisidir.",
  decisionTableRows: [
    { criterion: "Ã–n ayÄ±rma", description: "YabancÄ± maddeleri akÄ±ÅŸtan uzaklaÅŸtÄ±rÄ±r.", importance: "ReaktÃ¶r ve ekipman gÃ¼venliÄŸini korur.", effect: "Eksik ayÄ±rma arÄ±za riskini artÄ±rÄ±r." },
    { criterion: "ParÃ§alama", description: "ParÃ§acÄ±k boyutunu uygun hale getirir.", importance: "KarÄ±ÅŸtÄ±rma ve pompajÄ± kolaylaÅŸtÄ±rÄ±r.", effect: "YanlÄ±ÅŸ boyut verimi dÃ¼ÅŸÃ¼rÃ¼r." },
    { criterion: "Besleme sistemi", description: "Malzemeyi dengeli reaktÃ¶re taÅŸÄ±r.", importance: "Gaz Ã¼retim istikrarÄ±nÄ± etkiler.", effect: "DÃ¼zensiz besleme dalgalanma yaratÄ±r." },
    { criterion: "KarÄ±ÅŸtÄ±rma", description: "FarklÄ± akÄ±ÅŸlarÄ± homojenize eder.", importance: "Organik yÃ¼k dengesini saÄŸlar.", effect: "Yetersiz karÄ±ÅŸÄ±m reaktÃ¶r performansÄ±nÄ± dÃ¼ÅŸÃ¼rÃ¼r." },
    { criterion: "Digestat yÃ¶netimi", description: "Ã‡Ä±kÄ±ÅŸ malzemesinin ayrÄ±lmasÄ± ve taÅŸÄ±nmasÄ±nÄ± kapsar.", importance: "Tesis Ã§evrimini tamamlar.", effect: "Ä°hmal edilirse depolama ve koku sorunu bÃ¼yÃ¼r." },
    { criterion: "Hijyen / koku", description: "Ã‡evresel kontrol omurgasÄ±nÄ± ifade eder.", importance: "Saha kabulÃ¼ iÃ§in kritiktir.", effect: "Eksik kontrol operasyonu zorlaÅŸtÄ±rÄ±r." },
  ],
  factorCardsTitle: "Biyogaz HattÄ±nÄ± Etkileyen FaktÃ¶rler",
  factorCardsDescription:
    "Ã–n iÅŸlem kalitesi, reaktÃ¶r performansÄ± ve digestat yÃ¶netimi aynÄ± teknik dosyada ele alÄ±nmalÄ±dÄ±r.",
  factorCards: [
    { title: "AtÄ±k heterojenliÄŸi", description: "Besleme ve ayÄ±rma ekipmanÄ±nÄ± doÄŸrudan etkiler." },
    { title: "Kuru madde", description: "Pompa, helezon ve karÄ±ÅŸtÄ±rÄ±cÄ± seÃ§imini belirler." },
    { title: "YabancÄ± madde", description: "ParÃ§alayÄ±cÄ± ve ayÄ±rÄ±cÄ± ihtiyacÄ±nÄ± bÃ¼yÃ¼tÃ¼r." },
    { title: "Besleme ritmi", description: "ReaktÃ¶r istikrarÄ± iÃ§in dengeli akÄ±ÅŸ gerekir." },
    { title: "Digestat Ã§Ä±kÄ±ÅŸÄ±", description: "AyrÄ±ÅŸtÄ±rma ve kompostlaÅŸtÄ±rma kararÄ±nÄ± etkiler." },
    { title: "Ã‡evresel kontrol", description: "Koku ve hijyen yÃ¶netimi saha operasyonunu belirler." },
  ],
  relatedLinksTitle: "Ä°lgili Teknik Ä°Ã§erikler",
  relatedLinksDescription:
    "Biyogaz, organik atÄ±k ve digestat yÃ¶netimini tamamlayan sayfalarÄ± aÅŸaÄŸÄ±dan inceleyebilirsiniz.",
  relatedLinks: [
    { title: "Enerji ve Biyogaz Sistemleri", description: "SektÃ¶r sayfasÄ±nda biyogaz uygulamalarÄ±nÄ± gÃ¶rÃ¼n.", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
    { title: "Organik AtÄ±k Tesisi", description: "Biyogaz Ã¶ncesi hazÄ±rlÄ±k akÄ±ÅŸÄ±nÄ± blog iÃ§eriÄŸinde inceleyin.", href: "/kutuphane/blog/organik-atik-tesisi" },
    { title: "Kompost Tesisi Kurulumu", description: "Digestat ve organik Ã§Ä±kÄ±ÅŸlarÄ±n kompost tarafÄ±nÄ± deÄŸerlendirin.", href: "/hizmetler/kompost-tesisi-kurulumu" },
    { title: "TaÅŸÄ±ma EkipmanlarÄ±", description: "Besleme ve dozaj omurgasÄ±nda kullanÄ±lan ekipman ailelerini gÃ¶rÃ¼n.", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    { title: "Bunker ve Besleme Sistemleri", description: "AtÄ±k kabul ve besleme noktalarÄ±nÄ± makina ailesinde inceleyin.", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
    { title: "Ä°letiÅŸim", description: "Biyogaz Ã¶n iÅŸlem hattÄ± iÃ§in teknik deÄŸerlendirme talep edin.", href: "/iletisim" },
  ],
};

const liquidData: BlogTechnicalArticleData = {
  requiredDataTitle: "SÄ±vÄ± GÃ¼bre ve Kimyasal Proses Ä°Ã§in Gerekli Veriler",
  requiredDataDescription:
    "ReaktÃ¶r, tank ve dozaj sistemlerinde Ã¼rÃ¼n formÃ¼lÃ¼, viskozite ve hat gÃ¼venliÄŸi birlikte deÄŸerlendirilmelidir.",
  requiredDataRows: [
    { label: "ÃœrÃ¼n formÃ¼lÃ¼", purpose: "ReaktÃ¶r ve karÄ±ÅŸtÄ±rma yaklaÅŸÄ±mÄ±nÄ± belirler.", request: "NPK / organomineral / kimyasal karÄ±ÅŸÄ±m" },
    { label: "Kapasite", purpose: "Tank hacmi ve dolum hattÄ± Ã¶lÃ§eÄŸini etkiler.", request: "Ã–rn. 5 m3/saat" },
    { label: "Viskozite", purpose: "KarÄ±ÅŸtÄ±rÄ±cÄ± ve pompa seÃ§iminde belirleyicidir.", request: "DÃ¼ÅŸÃ¼k / orta / yÃ¼ksek" },
    { label: "Ã‡Ã¶zÃ¼nme sÃ¼resi", purpose: "ReaktÃ¶r veya tankta tutulma sÃ¼resini tanÄ±mlar.", request: "Dakika / saat" },
    { label: "Filtrasyon ihtiyacÄ±", purpose: "Dolum Ã¶ncesi Ã¼rÃ¼n temizliÄŸini etkiler.", request: "Torba / kartuÅŸ / inline" },
    { label: "Dolum tipi", purpose: "ÅžiÅŸe, IBC veya tanker Ã§Ä±kÄ±ÅŸÄ±nÄ± belirler.", request: "Ambalaj tipi" },
    { label: "Malzeme uyumu", purpose: "Tank gÃ¶vdesi ve hat malzemesini belirler.", request: "304 / 316 / kaplamalÄ±" },
    { label: "GÃ¼venlik", purpose: "Asit-baz veya Ã¶zel kimyasallarda proses emniyetini tanÄ±mlar.", request: "ATEX / kimyasal uyum" },
  ],
  exampleTitle: "Ã–rnek SÃ¼reÃ§ DeÄŸerlendirmesi",
  exampleDescription:
    "SÄ±vÄ± gÃ¼bre ve kimyasal proses hatlarÄ±nda Ã¼rÃ¼n hazÄ±rlama, filtrasyon ve dolum aynÄ± proses disipliniyle ele alÄ±nmalÄ±dÄ±r.",
  exampleRows: [
    { label: "Ã‡Ã¶zÃ¼ndÃ¼rme", value: "Hammadde hazÄ±rlÄ±ÄŸÄ±", comment: "FormÃ¼lÃ¼n ilk kararlÄ± hale geldiÄŸi aÅŸama" },
    { label: "KarÄ±ÅŸtÄ±rma", value: "Homojenizasyon", comment: "ÃœrÃ¼n standardÄ±nÄ± korur" },
    { label: "Reaksiyon", value: "Kimyasal denge", comment: "SÃ¼re ve sÄ±caklÄ±k kontrolÃ¼ gerekir" },
    { label: "Filtrasyon", value: "PartikÃ¼l temizliÄŸi", comment: "Dolum kalitesini yÃ¼kseltir" },
    { label: "Stoklama", value: "Ara tank yÃ¶netimi", comment: "Hat sÃ¼rekliliÄŸini destekler" },
    { label: "Dolum", value: "Son Ã¼rÃ¼n Ã§Ä±kÄ±ÅŸÄ±", comment: "Ticari sevkiyata hazÄ±rlar" },
  ],
  decisionTableTitle: "Teknik Karar Matrisi",
  decisionTableDescription:
    "SÄ±vÄ± Ã¼retim hatlarÄ±nda tank, karÄ±ÅŸtÄ±rma, filtrasyon ve dolum kararlarÄ± birbiriyle baÄŸlantÄ±lÄ±dÄ±r.",
  decisionTableRows: [
    { criterion: "ReaktÃ¶r hacmi", description: "ÃœrÃ¼nÃ¼n reaksiyon veya Ã§Ã¶zÃ¼nme hacmidir.", importance: "Hat kapasitesini belirler.", effect: "Yetersiz hacim bekleme sÃ¼resini bozar." },
    { criterion: "KarÄ±ÅŸtÄ±rma tipi", description: "Homojenizasyon biÃ§imini tanÄ±mlar.", importance: "ÃœrÃ¼n standardÄ± iÃ§in kritiktir.", effect: "YanlÄ±ÅŸ karÄ±ÅŸtÄ±rma Ã§Ã¶kelmeye yol aÃ§ar." },
    { criterion: "Malzeme seÃ§imi", description: "Tank ve hat gÃ¶vde malzemesidir.", importance: "Kimyasal uyumu belirler.", effect: "YanlÄ±ÅŸ malzeme korozyon doÄŸurur." },
    { criterion: "Filtrasyon", description: "Dolum Ã¶ncesi partikÃ¼l kontrolÃ¼dÃ¼r.", importance: "Son Ã¼rÃ¼n kalitesini etkiler.", effect: "Yetersiz filtreleme dolum sorununa neden olur." },
    { criterion: "Dozajlama", description: "KatkÄ± akÄ±ÅŸlarÄ±nÄ±n hassas yÃ¶netimidir.", importance: "FormÃ¼l doÄŸruluÄŸunu korur.", effect: "HatalÄ± dozaj Ã¼rÃ¼n standardÄ±nÄ± bozar." },
    { criterion: "Dolum hattÄ±", description: "Ambalaj Ã§Ä±kÄ±ÅŸÄ±nÄ± yÃ¶netir.", importance: "Ticari akÄ±ÅŸÄ± belirler.", effect: "ZayÄ±f dolum tÃ¼m hattÄ± yavaÅŸlatÄ±r." },
  ],
  factorCardsTitle: "Prosesi Etkileyen FaktÃ¶rler",
  factorCardsDescription:
    "SÄ±vÄ± gÃ¼bre ve kimyasal hatlarda Ã¼rÃ¼n davranÄ±ÅŸÄ± kadar malzeme uyumu ve gÃ¼venlik de belirleyicidir.",
  factorCards: [
    { title: "FormÃ¼l yoÄŸunluÄŸu", description: "KarÄ±ÅŸtÄ±rma ve pompa seÃ§imini etkiler." },
    { title: "Kimyasal uyum", description: "Tank malzemesi ve conta seÃ§imini belirler." },
    { title: "Filtrasyon ihtiyacÄ±", description: "Dolum kalitesi ve hat temizliÄŸini etkiler." },
    { title: "SÄ±caklÄ±k", description: "Ã‡Ã¶zÃ¼nme ve reaksiyon hÄ±zÄ±nÄ± deÄŸiÅŸtirir." },
    { title: "Ambalaj tipi", description: "Dolum hattÄ± geometrisini belirler." },
    { title: "BakÄ±m temizliÄŸi", description: "CIP veya manuel temizlik kurgusunu etkiler." },
  ],
  relatedLinksTitle: "Ä°lgili Teknik Ä°Ã§erikler",
  relatedLinksDescription:
    "SÄ±vÄ± gÃ¼bre, kimyasal proses ve reaktÃ¶r-tank sistemleriyle ilgili teknik sayfalarÄ± aÅŸaÄŸÄ±da bulabilirsiniz.",
  relatedLinks: [
    { title: "SÄ±vÄ± GÃ¼bre Ãœretim Tesisi", description: "SÄ±vÄ± Ã¼retim hatlarÄ± iÃ§in hizmet sayfamÄ±zÄ± inceleyin.", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
    { title: "ReaktÃ¶rler ve Tanklar", description: "Makina kategorisinde proses tankÄ± ve reaktÃ¶r ailelerini gÃ¶rÃ¼n.", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
    { title: "Kimya ve Proses EndÃ¼strisi", description: "SektÃ¶r sayfasÄ±nda uygulama alanlarÄ±nÄ± deÄŸerlendirin.", href: "/sektorler/kimya-ve-proses-endustrisi" },
    { title: "Paketleme ve Dolum Sistemleri", description: "Dolum ve etiketleme ekipmanlarÄ±nÄ± makina tarafÄ±nda inceleyin.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    { title: "Organomineral GÃ¼bre Tesisi", description: "SÄ±vÄ± ve hibrit proses kurgularÄ± iÃ§in ilgili hizmeti gÃ¶rÃ¼n.", href: "/hizmetler/organomineral-gubre-tesisi" },
    { title: "Ä°letiÅŸim", description: "ReaktÃ¶r ve hat kurgusu iÃ§in teknik gÃ¶rÃ¼ÅŸme talep edin.", href: "/iletisim" },
  ],
};

const defaultTechnicalData: BlogTechnicalArticleData = {
  requiredDataTitle: "Konu Ä°Ã§in Gerekli Teknik Veriler",
  requiredDataDescription:
    "Makale konusu hangi ekipman veya prosesi ele alÄ±rsa alsÄ±n, saÄŸlÄ±klÄ± karar iÃ§in kapasite, Ã¼rÃ¼n davranÄ±ÅŸÄ± ve saha koÅŸullarÄ± birlikte deÄŸerlendirilmelidir.",
  requiredDataRows: [
    { label: "Kapasite", purpose: "Ekipman Ã¶lÃ§eÄŸini belirler.", request: "Saatlik veya gÃ¼nlÃ¼k hedef" },
    { label: "ÃœrÃ¼n tipi", purpose: "Ekipman ve proses yaklaÅŸÄ±mÄ±nÄ± etkiler.", request: "Toz / granÃ¼l / sÄ±vÄ±" },
    { label: "YoÄŸunluk", purpose: "Hacimsel davranÄ±ÅŸÄ± tanÄ±mlar.", request: "YÄ±ÄŸÄ±n veya proses yoÄŸunluÄŸu" },
    { label: "Nem / sÄ±caklÄ±k", purpose: "Enerji ve proses ihtiyacÄ±nÄ± etkiler.", request: "Mevcut ve hedef deÄŸerler" },
    { label: "Saha koÅŸulu", purpose: "YerleÅŸim ve bakÄ±m eriÅŸimini belirler.", request: "Alan ve Ã§alÄ±ÅŸma dÃ¼zeni" },
    { label: "Ã‡alÄ±ÅŸma rejimi", purpose: "Motor, tank veya hat gÃ¼venliÄŸini etkiler.", request: "SÃ¼rekli / vardiyalÄ± Ã§alÄ±ÅŸma" },
  ],
  exampleTitle: "Ã–rnek Teknik DeÄŸerlendirme",
  exampleDescription:
    "AÅŸaÄŸÄ±daki Ã¶rnek satÄ±rlar, teknik teklif Ã¶ncesinde hangi karar baÅŸlÄ±klarÄ±nÄ±n birlikte okunmasÄ± gerektiÄŸini gÃ¶sterir.",
  exampleRows: [
    { label: "Kapasite", value: "Hedef debi", comment: "Hat Ã¶lÃ§eÄŸinin baÅŸlangÄ±Ã§ noktasÄ±" },
    { label: "ÃœrÃ¼n davranÄ±ÅŸÄ±", value: "AkÄ±ÅŸ / nem / yoÄŸunluk", comment: "Makine seÃ§imini etkiler" },
    { label: "Proses adÄ±mÄ±", value: "HazÄ±rlÄ±k / ana iÅŸlem / Ã§Ä±kÄ±ÅŸ", comment: "AkÄ±ÅŸ sÄ±rasÄ±nÄ± belirler" },
    { label: "Enerji", value: "Elektrik / Ä±sÄ± / gaz", comment: "Ä°ÅŸletme modelini etkiler" },
    { label: "Saha", value: "YerleÅŸim / bakÄ±m", comment: "UygulanabilirliÄŸi doÄŸrular" },
    { label: "Ã‡Ä±kÄ±ÅŸ standardÄ±", value: "Son Ã¼rÃ¼n beklentisi", comment: "Kalite hedefini belirler" },
  ],
  decisionTableTitle: "Karar Matrisi",
  decisionTableDescription:
    "Ekipman ve tesis seÃ§iminde yalnÄ±z tek bir parametreye bakmak yerine tÃ¼m teknik Ã§erÃ§eve birlikte okunmalÄ±dÄ±r.",
  decisionTableRows: [
    { criterion: "Kapasite", description: "Saatlik veya gÃ¼nlÃ¼k hedef Ã¼retimdir.", importance: "Ekipman Ã¶lÃ§eÄŸini belirler.", effect: "YanlÄ±ÅŸ okunursa dar boÄŸaz oluÅŸur." },
    { criterion: "ÃœrÃ¼n davranÄ±ÅŸÄ±", description: "AkÄ±ÅŸ, nem ve yoÄŸunluk bilgisidir.", importance: "DoÄŸru ekipmanÄ± seÃ§tirir.", effect: "HatalÄ± varsayÄ±m bakÄ±m yÃ¼kÃ¼nÃ¼ artÄ±rÄ±r." },
    { criterion: "Enerji", description: "Elektrik veya Ä±sÄ±l yÃ¼k yaklaÅŸÄ±mÄ±dÄ±r.", importance: "Ä°ÅŸletme modelini etkiler.", effect: "Eksik gÃ¼Ã§ performansÄ± dÃ¼ÅŸÃ¼rÃ¼r." },
    { criterion: "YerleÅŸim", description: "SahanÄ±n fiziksel koÅŸullarÄ±dÄ±r.", importance: "Montaj ve servis iÃ§in kritiktir.", effect: "SÄ±kÄ±ÅŸÄ±k yerleÅŸim bakÄ±m zorluÄŸu yaratÄ±r." },
  ],
  factorCardsTitle: "Teknik KararÄ± Etkileyen FaktÃ¶rler",
  factorCardsDescription:
    "Proses ve ekipman kararlarÄ±, Ã¼rÃ¼n karakteri ile saha koÅŸullarÄ±nÄ±n kesiÅŸiminde ÅŸekillenir.",
  factorCards: [
    { title: "Kapasite hedefi", description: "TÃ¼m ekipman omurgasÄ±nÄ±n temelidir." },
    { title: "ÃœrÃ¼n tipi", description: "Makine yaklaÅŸÄ±mÄ±nÄ± doÄŸrudan etkiler." },
    { title: "Saha dÃ¼zeni", description: "Uygulanabilir ve servis edilebilir tasarÄ±m saÄŸlar." },
    { title: "Enerji modeli", description: "Ä°ÅŸletme maliyetini ve ekipman tercihini etkiler." },
  ],
  relatedLinksTitle: "Ä°lgili Teknik Ä°Ã§erikler",
  relatedLinksDescription:
    "Konuyu tamamlayan teknik sayfalar, hizmetler ve ekipman aileleri aÅŸaÄŸÄ±da yer alÄ±r.",
  relatedLinks: [
    { title: "Hizmetler", description: "Proje ve proses Ã§Ã¶zÃ¼mlerini hizmet tarafÄ±nda inceleyin.", href: "/hizmetler" },
    { title: "Makinalar & Ekipman", description: "Ekipman ailelerini kategori bazÄ±nda gÃ¶rÃ¼n.", href: "/makinalar-ekipman" },
    { title: "SektÃ¶rler", description: "Uygulama alanlarÄ±nÄ± sektÃ¶r bazÄ±nda deÄŸerlendirin.", href: "/sektorler" },
    { title: "Programlar", description: "Hesaplama ve Ã¶n seÃ§im araÃ§larÄ±na gidin.", href: "/programlar" },
    { title: "Blog / Makaleler", description: "DiÄŸer teknik iÃ§eriklere blog merkezinden ulaÅŸÄ±n.", href: "/kutuphane/blog" },
    { title: "Ä°letiÅŸim", description: "Teknik gÃ¶rÃ¼ÅŸme ve teklif talebi iÃ§in iletiÅŸime geÃ§in.", href: "/iletisim" },
  ],
};

const slugFamilies: Record<string, BlogTechnicalArticleData> = {
  "kurutma-tamburu-kapasite-hesabi": dryingData,
  "kurutma-tamburu-cap-boy-hesabi": dryingData,
  "rotary-dryer-design": dryingData,
  "tambur-kurutucu-nasil-calisir": dryingData,
  "kurutma-tamburu-nasil-calisir": dryingData,
  "kurutma-tamburu-hesaplama": dryingData,
  "kurutma-tamburu-nasil-hesaplanir": dryingData,
  "endustriyel-kurutma-sistemleri": dryingData,
  "camur-kurutma-sistemleri": dryingData,
  "camur-kurutma-sistemi": dryingData,
  "kurutma-tamburu-fan-secimi": dryingData,
  "kurutma-tamburu-brulor-secimi": dryingData,
  "maden-kurutma-tamburu": dryingData,
  "kum-kurutma-tesisi": dryingData,
  "tavuk-gubresi-kurutma": dryingData,
  "digestat-kurutma": dryingData,

  "helezon-konveyor-kapasite-hesabi": screwData,
  "helezon-kapasite-hesabi": screwData,
  "helezyon-konveyor-kapasite-hesabi": screwData,
  "helezon-motor-gucu-hesabi": screwData,
  "egimli-helezon-hesabi": screwData,
  "vidali-konveyor-hesabi": screwData,
  "vidali-konveyor-tasarimi": screwData,

  "konveyor-kapasite-hesabi": conveyorData,
  "bant-konveyor-kapasite-hesabi": conveyorData,
  "kovali-elevator-kapasite-hesabi": conveyorData,
  "zincirli-konveyor-secimi": conveyorData,

  "organomineral-gubre-tesisi-maliyeti": fertilizerData,
  "granul-gubre-uretim-sureci": fertilizerData,
  "granul-gubre-uretim-tesisi-nasil-kurulur": fertilizerData,
  "organomineral-gubre-uretimi": fertilizerData,
  "npk-gubre-uretimi": fertilizerData,
  "gubre-tesisi-kurulumu": fertilizerData,
  "gubre-uretim-hatti-nasil-kurulur": fertilizerData,
  "gubre-uretim-hatti": fertilizerData,
  "organomineral-gubre-tesisi-nasil-kurulur": fertilizerData,
  "tambur-granulator-kapasite-hesabi": fertilizerData,
  "tambur-granulator-calisma-prensibi": fertilizerData,
  "sogutma-tamburu-kapasite-hesabi": fertilizerData,
  "kaplama-tamburu-kullanim-alanlari": fertilizerData,

  "kompost-tesisi-nasil-kurulur": compostData,
  "kompost-tesisi-kurulumu": compostData,
  "kompost-tesisi-kapasite-hesabi": compostData,
  "kompost-kurutma-sistemi": compostData,
  "buyukbas-hayvan-gubresi-kompost": compostData,
  "organik-atik-isleme-tesisi": compostData,
  "organik-atik-tesisi": compostData,
  "kompost-uretim-sureci": compostData,

  "biyogaz-on-islem-sistemleri": biogasData,
  "biyogaz-on-islem": biogasData,
  "biyogaz-tesisi-kapasite-hesabi": biogasData,

  "sivi-gubre-tesisi-nasil-kurulur": liquidData,
  "sivi-gubre-uretim-tesisi": liquidData,
  "reaktor-ve-tank-secimi": liquidData,
  "sivi-dolum-hatti-secimi": liquidData,
  "toz-toplama-sistemi-secimi": defaultTechnicalData,
};

export function getBlogTechnicalArticleData(slug?: string): BlogTechnicalArticleData {
  if (!slug) {
    return defaultTechnicalData;
  }

  return slugFamilies[slug] ?? defaultTechnicalData;
}

