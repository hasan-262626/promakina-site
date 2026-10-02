import type { SectorDetailText } from "../types";

type EnergyKey =
  | "sectorAgriculturalBiogas"
  | "sectorAnimalBiogas"
  | "sectorFoodBiogas"
  | "sectorBiomassEnergy"
  | "sectorBiomethane";

export const trEnergyPages: Record<EnergyKey, SectorDetailText> = {
  sectorAgriculturalBiogas: {
    meta: {
      title: "Tarımsal Atık Biyogaz Tesisi: Ön İşlem",
      description:
        "Tarımsal atık biyogaz tesisleri için silaj, sap ve bitkisel artıkların parçalanması, katı besleme, digestatın ayrıştırılması ve kurutulması için ekipman çözümleri.",
    },
    label: "Tarımsal Atık Biyogaz Tesisleri",
    h1: "Tarımsal Atık Biyogaz Tesisleri: Ön İşlem, Besleme ve Digestat",
    lead:
      "Silaj, sap ve bitkisel artıkların fermentöre düzenli ve uygun boyutta beslenmesi ile digestatın değerlendirilmesi için ekipman çözümleri sunuyoruz.",
    introTitle: "Lifli Tarımsal Girdiyi Fermentöre Hazırlamak",
    intro: [
      "Tarımsal biyogaz tesislerinde mısır silajı gibi enerji bitkileri, sap, saman ve sebze artıkları anaerobik fermentörde biyogaza dönüştürülür. Lifli girdiler fermentörde yüzey tabakası oluşturabilir ve mikroorganizmaların erişimini sınırlayabilir. Bu nedenle girdinin uygun boyuta küçültülmesi ve düzenli beslenmesi gaz üretiminin kararlılığı için önemlidir.",
      "Pro Makina'nın bu tesislerdeki kapsamı; girdi kabul bunkerleri, parçalama, katı besleme ve transfer ekipmanları ile digestat tarafındaki katı-sıvı ayrımı ve kurutma sistemleridir. Fermentör, gaz depolama ve enerji dönüşüm ünitesi (kojenerasyon) proje tasarımcısı tarafından belirlenir; ekipmanlarımızın bu sistemlerle arayüzü proje başında tanımlanır.",
      "Digestat, fermentasyon sonrası kalan maddedir. Katı fazı ayrılarak kurutulabilir veya kompostlaştırılabilir, sıvı fazı ise depolanarak değerlendirilir. Digestatın kullanım şekli ilgili mevzuata ve analiz sonuçlarına göre belirlenir.",
    ],
    imageAlts: [
      "Tarımsal atık biyogaz tesisinde fermentör ve silaj stok alanı",
      "Tarımsal biyogaz tesisinde yükleyiciyle silaj beslemesi",
    ],
    processTitle: "Tarımsal Atık Biyogaz Tesisinde Malzeme Akışı",
    processIntro: "Akışta Pro Makina ekipmanları fermentör öncesi hazırlık ve fermentör sonrası digestat işleme adımlarında yer alır.",
    steps: [
      { title: "Girdi kabulü ve stok", text: "Silaj ve tarımsal artıklar stok alanından kabul bunkerine alınır." },
      { title: "Boyut küçültme", text: "Lifli girdiler fermentörde yüzey tabakası oluşturmayacak boyuta indirilir." },
      { title: "Katı besleme", text: "Girdi, vidalı besleyici ile fermentöre düzenli ve dozajlı olarak beslenir." },
      { title: "Anaerobik fermentasyon", text: "Fermentörde biyogaz üretilir; gaz depolama ve enerji ünitesine gönderilir." },
      { title: "Digestat ayrımı", text: "Fermentasyon kalıntısı katı ve sıvı faza ayrılır." },
      { title: "Katı digestatın değerlendirilmesi", text: "Katı faz kurutulur veya kompostlaştırılır; sıvı faz depolanır." },
    ],
    machinesTitle: "Tarımsal Biyogaz Tesisinde Kullanılan Ekipmanlar",
    machineNotes: {
      bunkersHoppers: "Silaj ve tarımsal artıkların kabul edildiği ve tamponlandığı bunkerler.",
      hammerCrusher: "Sap ve saman gibi lifli girdilerin boyutunun küçültülmesi.",
      screwConveyor: "Katı girdinin fermentöre dozajlı olarak beslenmesi.",
      beltConveyor: "Stok alanı ile hazırlık ekipmanları arasında girdi transferi.",
      dewateringScreen: "Digestatın katı ve sıvı fazlarına ayrılması.",
      rotaryDryer: "Ayrılan katı digestatın neminin düşürülmesi.",
    },
    faqTitle: "Tarımsal Atık Biyogaz Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Pro Makina biyogaz tesisinin hangi bölümlerini sağlar?", a: "Girdi kabulü, parçalama, katı besleme ve transfer ekipmanları ile digestat ayrımı ve kurutma sistemlerini sağlıyoruz. Fermentör ve enerji ünitesiyle arayüz proje başında tanımlanır." },
      { q: "Saman ve sap biyogaz tesisinde kullanılabilir mi?", a: "Kullanılabilir; ancak lifli yapıları nedeniyle boyut küçültme ve uygun karışım oranı gerekir. Gaz verimi girdi analizine göre değerlendirilir." },
      { q: "Girdi neden parçalanmalıdır?", a: "Küçük parçacıklar mikroorganizmaların erişimini artırır, fermentörde yüzey tabakası ve besleme tıkanması riskini azaltır." },
      { q: "Digestat ne olarak kullanılabilir?", a: "Katı digestat kurutulup veya kompostlaştırılıp organik ürün hammaddesi olabilir; sıvı faz depolanarak değerlendirilir. Kullanım mevzuata ve analize bağlıdır." },
      { q: "Mevcut biyogaz tesisine besleme hattı eklenebilir mi?", a: "Evet. Mevcut fermentörün besleme noktaları ve kapasitesi incelenerek uygun bunker, parçalama ve besleme ekipmanı seçilir." },
    ],
    cta: {
      title: "Tarımsal biyogaz tesisiniz için teklif isteyin",
      description: "Girdi türlerinizi, günlük besleme miktarınızı ve digestat hedefinizi paylaşın; ön işlem ve besleme hattını birlikte belirleyelim.",
    },
  },

  sectorAnimalBiogas: {
    meta: {
      title: "Hayvansal Atık Biyogaz Tesisi: Gübre Besleme",
      description:
        "Hayvansal atık biyogaz tesisleri için sıvı ve katı gübre kabulü, kum ve yabancı madde riski, fermentör beslemesi, digestat ayrımı, kurutma ve kompostlaştırma çözümleri.",
    },
    label: "Hayvansal Atık Biyogaz Tesisleri",
    h1: "Hayvansal Atık Biyogaz Tesisleri: Gübre Kabulü ve Digestat",
    lead:
      "Büyükbaş ve kanatlı işletmelerinin gübresini fermentöre düzenli besleyen ve digestatı değerlendiren ekipman çözümleri sunuyoruz.",
    introTitle: "Gübre Türüne Göre Kabul, Besleme ve Digestat Yönetimi",
    intro: [
      "Hayvansal biyogaz tesislerinde girdi çoğunlukla büyükbaş gübresi ve kanatlı gübresidir. Sıvı gübre pompalanarak alınabilirken katı gübre ve altlıklı gübre için kabul bunkeri ve katı besleme sistemi gerekir. Altlık malzemesindeki kum ve taşlar fermentörde çökelerek hacim kaybına ve ekipman aşınmasına yol açabilir; bu risk kabul aşamasında değerlendirilir.",
      "Kanatlı gübresi azotça zengindir ve fermentasyonda amonyak birikimine neden olabilir. Bu nedenle kanatlı gübresi genellikle başka girdilerle dengelenerek beslenir. Besleme miktarı ve karışım oranı fermentör tasarımcısının belirlediği sınırlar içinde tutulur.",
      "Pro Makina'nın kapsamı kabul, besleme ve transfer ekipmanları ile digestat tarafındaki ayrım, kurutma ve kompostlaştırma sistemleridir. Digestatın katı fazı kompostlaştırılarak toprak düzenleyiciye dönüştürülebilir; kullanım koşulları mevzuata göre belirlenir.",
    ],
    imageAlts: [
      "Hayvansal atık biyogaz tesisinde gübre kabul alanı ve fermentörler",
      "Hayvansal atık biyogaz tesisinde fermentörler ve besleme ünitesi",
    ],
    processTitle: "Hayvansal Atık Biyogaz Tesisinde Malzeme Akışı",
    processIntro: "Akış, sıvı ve katı gübrenin ayrı kabul edilip fermentöre dengeli beslenmesine göre kurulur.",
    steps: [
      { title: "Gübre kabulü", text: "Sıvı gübre kabul çukuruna, katı ve altlıklı gübre kabul bunkerine alınır." },
      { title: "Yabancı madde kontrolü", text: "Kum, taş ve iri yabancı maddeler fermentöre girmeden ayrılır." },
      { title: "Dengeli besleme", text: "Gübre türleri, fermentör sınırlarına uygun oranda dozajlanarak beslenir." },
      { title: "Anaerobik fermentasyon", text: "Fermentörde biyogaz üretilir ve gaz hattına gönderilir." },
      { title: "Digestat ayrımı", text: "Digestat katı ve sıvı faza ayrılır; sıvı faz depolanır." },
      { title: "Katı digestatın işlenmesi", text: "Katı faz kurutulur veya kompostlaştırılarak ürüne dönüştürülür." },
    ],
    machinesTitle: "Hayvansal Biyogaz Tesisinde Kullanılan Ekipmanlar",
    machineNotes: {
      bunkersHoppers: "Katı ve altlıklı gübrenin kabul edildiği bunkerler.",
      screwConveyor: "Katı gübrenin fermentöre dozajlı ve kapalı beslenmesi.",
      dewateringScreen: "Digestatın katı ve sıvı fazlarına ayrılması.",
      storageTank: "Sıvı fazın veya proses sıvılarının tamponlandığı tanklar.",
      rotaryDryer: "Katı digestatın neminin düşürülmesi.",
      compostDrum: "Katı digestatın kompostlaştırılarak stabil ürüne dönüştürülmesi.",
    },
    faqTitle: "Hayvansal Atık Biyogaz Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Büyükbaş gübresi tek başına biyogaz tesisinde kullanılabilir mi?", a: "Kullanılabilir; gaz verimi enerji bitkilerine göre daha düşük olabileceğinden genellikle başka girdilerle birlikte değerlendirilir." },
      { q: "Kanatlı gübresinde nelere dikkat edilir?", a: "Yüksek azot içeriği fermentörde amonyak birikimine yol açabilir. Kanatlı gübresi diğer girdilerle dengelenerek ve kontrollü oranda beslenir." },
      { q: "Gübredeki kum neden sorun olur?", a: "Kum fermentör tabanında birikerek hacmi azaltır ve pompa, karıştırıcı gibi ekipmanları aşındırır. Kabul aşamasında ayrılması önerilir." },
      { q: "Digestat kompost olarak kullanılabilir mi?", a: "Katı digestat kompostlaştırılarak stabil bir toprak düzenleyiciye dönüştürülebilir. Kullanım koşulları mevzuat ve analiz sonuçlarına göre belirlenir." },
      { q: "Pro Makina fermentör de sağlıyor mu?", a: "Bu tesislerdeki kapsamımız kabul, besleme, transfer ve digestat işleme ekipmanlarıdır. Fermentör ve gaz sistemleri proje tasarımcısıyla birlikte tanımlanır." },
    ],
    cta: {
      title: "Hayvansal atık biyogaz tesisiniz için teklif isteyin",
      description: "Gübre türünü, günlük miktarı ve digestat hedefinizi paylaşın; kabul, besleme ve digestat işleme ekipmanlarını birlikte belirleyelim.",
    },
  },

  sectorFoodBiogas: {
    meta: {
      title: "Gıda Atıklarından Biyogaz Tesisi: Ön İşlem",
      description:
        "Gıda atıklarından biyogaz tesisleri için ambalaj ve yabancı madde ayrımı, parçalama, tampon tankı, gerekli hallerde hijyenizasyon, kontrollü besleme ve koku kontrolü.",
    },
    label: "Gıda Atıklarından Biyogaz Tesisleri",
    h1: "Gıda Atıklarından Biyogaz Tesisleri: Ön İşlem ve Kontrollü Besleme",
    lead:
      "Gıda üretimi, market ve yemekhane atıklarını yabancı maddeden arındırıp fermentöre kontrollü besleyen ön işlem hatları kuruyoruz.",
    introTitle: "Enerjisi Yüksek, Hassas Bir Girdi: Gıda Atığı",
    intro: [
      "Gıda atıkları kolay ayrışan organik madde içerdiği için biyogaz potansiyeli yüksek bir girdidir. Ancak aynı özellik, fermentöre ani ve fazla beslendiğinde asitleşmeye ve gaz üretiminin düşmesine yol açabilir. Bu nedenle gıda atığı tampon tankında dengelenir ve fermentöre kontrollü miktarda beslenir.",
      "Market ve hal atıklarındaki ambalaj, gıda atığı biyogaz tesislerinin en büyük teknik sorunudur. Plastik ve diğer yabancı maddeler fermentörde yüzer veya çöker tabaka oluşturabilir ve ekipmanı aşındırabilir. Ön işlemde parçalama, ambalaj ayırma ve eleme adımlarıyla bu maddeler ayrılır.",
      "Et ve pişmiş yemek içeren atıklar hayvansal yan ürün kurallarına tabi olabilir; bu durumda mevzuatın öngördüğü hijyenizasyon adımı akışa eklenir. Kabul ve ön işlem alanları kapalı tasarlanır, kokulu hava arıtılır.",
    ],
    imageAlts: [
      "Gıda atıklarından biyogaz tesisinde atık kabul alanı ve fermentörler",
      "Gıda atığı biyogaz tesisinde yükleyiciyle atık beslemesi",
    ],
    processTitle: "Gıda Atıklarından Biyogaz Ön İşlem Akışı",
    processIntro: "Akış, yabancı maddelerin fermentöre girmeden ayrılması ve beslemenin dengelenmesine göre kurulur.",
    steps: [
      { title: "Kapalı kabul", text: "Atık kapalı alanda kabul edilir; atık türü ve mevzuat sınıfı kontrol edilir." },
      { title: "Parçalama ve ambalaj ayırma", text: "Ambalajlı atıklar açılır, ambalaj ile organik kısım ayrılır." },
      { title: "Eleme", text: "Kalan plastik, kum ve iri parçalar sıvılaştırılmış atıktan elenir." },
      { title: "Hijyenizasyon (gerekiyorsa)", text: "Mevzuatın istediği atıklarda kontrollü ısıl işlem uygulanır." },
      { title: "Tampon tankı", text: "Atık tampon tankında homojenize edilir ve besleme için bekletilir." },
      { title: "Kontrollü besleme", text: "Fermentöre, asitleşmeyi önleyecek düzenli miktarlarda beslenir." },
    ],
    machinesTitle: "Gıda Atığı Biyogaz Ön İşlem Hattında Kullanılan Ekipmanlar",
    machineNotes: {
      shredderSystems: "Ambalajlı ve iri gıda atıklarının açılması ve parçalanması.",
      wetScreen: "Sıvılaştırılmış atıktan plastik ve iri partiküllerin elenmesi.",
      storageTank: "Atığın homojenize edilip fermentör beslemesi için tamponlandığı tank.",
      screwConveyor: "Parçalanmış atığın kapalı olarak taşınması.",
      dewateringScreen: "Ayrılan ambalaj ve kaba fraksiyonun suyunun alınması.",
      wetScrubber: "Kabul ve ön işlem alanından emilen kokulu havanın yıkanması.",
    },
    faqTitle: "Gıda Atıklarından Biyogaz Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Gıda atığı neden kontrollü beslenmelidir?", a: "Kolay ayrışan gıda atığı fazla beslendiğinde fermentörde asit birikimine ve gaz üretiminde düşüşe yol açabilir. Tampon tankı ve düzenli besleme bu riski azaltır." },
      { q: "Ambalajlı gıda atıkları biyogaz tesisinde işlenebilir mi?", a: "Evet, ancak ambalajın fermentöre girmeden ayrılması gerekir. Ambalaj oranı ön işlem hattının kapsamını belirler." },
      { q: "Hijyenizasyon her gıda atığı için gerekli midir?", a: "Hayır. Gereklilik atığın içeriğine ve mevzuattaki sınıfına bağlıdır. Proje başında kabul edilecek atık türleri ve şartları netleştirilir." },
      { q: "Gıda atığı biyogaz tesisinde koku nasıl önlenir?", a: "Kabul ve ön işlem kapalı alanda yapılır, iç hava emilerek arıtılır ve atık uzun süre bekletilmez." },
      { q: "Mevcut tarımsal biyogaz tesisine gıda atığı eklenebilir mi?", a: "Mevzuat izinleri ve fermentör kapasitesi uygunsa ön işlem ve tampon tankı eklenerek gıda atığı karışıma alınabilir." },
    ],
    cta: {
      title: "Gıda atığı biyogaz ön işlem hattınız için teklif isteyin",
      description: "Atık kaynaklarınızı, ambalaj oranını ve günlük miktarı paylaşın; ayırma, tampon ve besleme kapasitesini birlikte belirleyelim.",
    },
  },

  sectorBiomassEnergy: {
    meta: {
      title: "Biyokütle Enerji Tesisi: Yakıt Hazırlama",
      description:
        "Biyokütle enerji tesisleri için yakıt hazırlama hattı: odun yongası ve tarımsal artıkların kırılması, elenmesi, kurutulması, silolanması ve kazana beslenmesi.",
    },
    label: "Biyokütle Enerji Tesisleri",
    h1: "Biyokütle Enerji Tesisleri: Yakıt Hazırlama ve Besleme Hattı",
    lead:
      "Katı biyokütleyi kazan veya gazlaştırıcının istediği boyut ve nemde hazırlayan, depolayan ve düzenli besleyen hatlar kuruyoruz.",
    introTitle: "Biyokütle Enerjisi Biyogazdan Nasıl Ayrılır?",
    intro: [
      "Biyokütle enerji tesisleri; odun yongası, orman ve budama atıkları, fındık kabuğu, sap ve benzeri katı biyokütleyi yakma veya gazlaştırma yoluyla ısı, buhar ya da elektriğe dönüştürür. Bu süreç, organik atığın havasız ortamda mikroorganizmalarla ayrıştırıldığı biyogaz üretiminden farklıdır; burada kritik olan yakıtın fiziksel özellikleridir.",
      "Yakıtın nemi, ısıl değeri doğrudan etkiler; tane boyutu ve yabancı madde içeriği ise kazan besleme sisteminin kararlı çalışmasını belirler. Taş ve metal parçalar besleme ekipmanını ve kazanı zorlayabilir. Bu nedenle biyokütle, kazana gönderilmeden önce kırılır, elenir ve gerektiğinde kurutulur.",
      "Pro Makina'nın kapsamı yakıt hazırlama, depolama ve besleme hattıdır. Kazan veya gazlaştırıcı seçimi enerji tesisi tasarımcısı tarafından yapılır; yakıt hattımız bu ünitenin istediği boyut, nem ve besleme debisine göre tasarlanır. Kuru biyokütle tozunun oluşturabileceği yangın ve patlama riskleri de tasarımda dikkate alınır.",
    ],
    imageAlts: [
      "Biyokütle enerji tesisinde odun yongası stok alanı ve kazan binası",
      "Biyokütle yakıtının konveyörle kazan besleme hattına taşınması",
    ],
    processTitle: "Biyokütle Yakıt Hazırlama ve Besleme Akışı",
    processIntro: "Akış, farklı biyokütle türlerini kazanın istediği tek tip yakıta dönüştürmeye göre kurulur.",
    steps: [
      { title: "Kabul ve stok", text: "Biyokütle türlerine göre stok alanına alınır; nem ve yabancı madde durumu kontrol edilir." },
      { title: "Parçalama ve kırma", text: "İri odunsu malzeme ve artıklar hedef boyuta indirilir." },
      { title: "Eleme", text: "İri parçalar geri döndürülür; taş, metal ve ince toz ayrılır." },
      { title: "Kurutma (gerekiyorsa)", text: "Nemli yakıt, kazanın istediği nem değerine kadar kurutulur." },
      { title: "Silo ve tampon stok", text: "Hazırlanan yakıt silo veya bunkerde stoklanır." },
      { title: "Kazana besleme", text: "Yakıt, kazan veya gazlaştırıcıya düzenli debide beslenir." },
    ],
    machinesTitle: "Biyokütle Yakıt Hazırlama Hattında Kullanılan Ekipmanlar",
    machineNotes: {
      shredderSystems: "İri odun, kütük ve budama atıklarının ön parçalanması.",
      hammerCrusher: "Parçalanmış biyokütlenin hedef tane boyutuna kırılması.",
      trommelScreen: "İri parçaların, taşların ve ince tozun yakıttan ayrılması.",
      rotaryDryer: "Nemli biyokütlenin kazanın istediği nem değerine kurutulması.",
      chainConveyor: "Biyokütle yakıtının silo ve kazan besleme noktasına taşınması.",
      siloSystems: "Hazırlanan yakıtın tampon stoklanması ve düzenli çekilmesi.",
    },
    faqTitle: "Biyokütle Enerji Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Biyokütle enerji tesisi ile biyogaz tesisi aynı şey mi?", a: "Hayır. Biyokütle tesisleri katı biyokütleyi yakma veya gazlaştırma ile enerjiye dönüştürür. Biyogaz tesisleri ise organik atığı havasız ortamda mikroorganizmalarla ayrıştırarak gaz üretir." },
      { q: "Yakıt nemi neden önemlidir?", a: "Yakıttaki suyun buharlaşması enerji tüketir; nem arttıkça kullanılabilir ısıl değer düşer ve yanma kararlılığı etkilenir." },
      { q: "Hangi biyokütle türleri kullanılabilir?", a: "Odun yongası, orman ve budama atıkları, fındık kabuğu, sap ve benzeri artıklar kullanılabilir. Uygunluk kazan veya gazlaştırıcı üreticisinin yakıt şartlarına göre belirlenir." },
      { q: "Pro Makina kazan da sağlıyor mu?", a: "Kapsamımız yakıt hazırlama, depolama ve besleme hattıdır. Enerji dönüşüm ünitesi tesis tasarımcısı tarafından seçilir ve hattımız bu üniteye göre tasarlanır." },
      { q: "Biyokütle hattında yangın ve toz riski nasıl yönetilir?", a: "Kuru biyokütle tozu yanıcıdır. Toz emişi, kapalı transfer ve ilgili patlama koruma şartları tasarım aşamasında değerlendirilir." },
    ],
    cta: {
      title: "Biyokütle yakıt hazırlama hattınız için teklif isteyin",
      description: "Biyokütle türlerinizi, giriş nemini ve kazanın yakıt şartlarını paylaşın; kırma, kurutma ve besleme kapasitesini birlikte belirleyelim.",
    },
  },

  sectorBiomethane: {
    meta: {
      title: "Biyometan ve Biyogaz Arıtma Çözümleri",
      description:
        "Biyogazdan biyometan üretimi: karbondioksit, hidrojen sülfür ve nem giderimi, arıtma teknolojisi seçimi, ön arıtma ve yardımcı sistemler için mühendislik desteği.",
    },
    label: "Biyometan / Gaz Arıtma Çözümleri",
    h1: "Biyometan ve Biyogaz Arıtma Çözümleri",
    lead:
      "Ham biyogazın biyometana yükseltilmesi için ön arıtma, yardımcı sistemler ve proje mühendisliği desteği sunuyoruz.",
    introTitle: "Ham Biyogazdan Biyometana: Neler Ayrıştırılır?",
    intro: [
      "Ham biyogaz, metanın yanında karbondioksit, su buharı, hidrojen sülfür ve kaynağına bağlı olarak siloksan gibi bileşenler içerir. Biyogaz doğrudan kojenerasyon motorunda kullanılabilir; ancak doğal gaz şebekesine verilecek veya araç yakıtı olarak kullanılacaksa bu bileşenlerin ayrıştırılarak metan oranının yükseltilmesi gerekir. Bu işleme biyogaz arıtma (upgrading), elde edilen gaza biyometan denir.",
      "Arıtma teknolojisi olarak su ile yıkama, membran ayırma, basınç salınımlı adsorpsiyon (PSA) ve kimyasal absorpsiyon (amin yıkama) kullanılır. Seçim; gaz debisi, ham gaz bileşimi, hedef gaz kalitesi ve enerji tüketimine göre yapılır. Hidrojen sülfür ve nem genellikle ana arıtma ünitesinden önce giderilir.",
      "Pro Makina bu projelerde ön arıtma ve yardımcı sistemler, proses suyu ve kimyasal tankları ile atık hava yıkama ekipmanlarında destek verir. Ana arıtma ünitesi teknoloji sağlayıcısıyla birlikte seçilir; şebekeye verme veya araç yakıtı kullanımında gaz kalitesi şartları ilgili otoritece belirlenir.",
    ],
    imageAlts: [
      "Biyogaz arıtma ve biyometan üretim kolonları",
      "Biyogaz arıtma tesisinde gaz kolonları ve proses binası",
    ],
    processTitle: "Biyogazdan Biyometana Arıtma Akışı",
    processIntro: "Akıştaki teknoloji seçimi ham gaz bileşimine ve hedef kullanıma göre değişir; adımların sırası genel olarak aynıdır.",
    steps: [
      { title: "Ham gaz analizi", text: "Metan, karbondioksit, hidrojen sülfür, nem ve siloksan içeriği ölçülür." },
      { title: "Kükürt giderimi", text: "Hidrojen sülfür biyolojik, kimyasal veya adsorpsiyon yöntemleriyle azaltılır." },
      { title: "Nem ve partikül giderimi", text: "Gaz soğutularak yoğuşan su ayrılır, partiküller tutulur." },
      { title: "Karbondioksit ayrımı", text: "Seçilen teknolojiyle karbondioksit ayrılarak metan oranı yükseltilir." },
      { title: "Kalite kontrol ve koku verme", text: "Biyometan kalitesi ölçülür; şebeke şartlarına göre koku verilir." },
      { title: "Basınçlandırma ve kullanım", text: "Gaz şebeke veya araç yakıtı için gereken basınca getirilir." },
    ],
    machinesTitle: "Biyogaz Arıtma Projelerinde Kullanılan Yardımcı Ekipmanlar",
    machineNotes: {
      wetScrubber: "Tesis atık havası ve kokulu gazların yıkanması; gaz hattında kullanımı proje şartlarıyla doğrulanır.",
      dissolutionTank: "Kükürt giderimi için kullanılan kimyasal çözeltilerin hazırlanması.",
      storageTank: "Proses suyu, kimyasal ve yoğuşma suyu için depolama tankları.",
    },
    faqTitle: "Biyometan ve Biyogaz Arıtma Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Biyogaz ile biyometan arasındaki fark nedir?", a: "Biyogaz, metan ile birlikte karbondioksit ve diğer bileşenleri içeren ham gazdır. Biyometan ise bu bileşenlerin ayrıştırılmasıyla metan oranı yükseltilmiş, doğal gaza benzer gazdır." },
      { q: "Hangi arıtma teknolojisi seçilmelidir?", a: "Su ile yıkama, membran, PSA ve amin yıkama yöntemleri arasından gaz debisi, ham gaz bileşimi, hedef kalite ve enerji tüketimine göre seçim yapılır." },
      { q: "Hidrojen sülfür neden önce giderilir?", a: "Hidrojen sülfür korozyona yol açar ve bazı arıtma teknolojilerine zarar verebilir. Bu nedenle ana arıtma öncesinde azaltılır." },
      { q: "Biyometan doğal gaz şebekesine verilebilir mi?", a: "Gaz kalitesi ve basıncı şebeke işletmecisinin şartlarını karşılıyorsa verilebilir. Şartlar ilgili otorite tarafından belirlenir." },
      { q: "Pro Makina arıtma ünitesini de sağlıyor mu?", a: "Ana arıtma ünitesi teknoloji sağlayıcısıyla birlikte seçilir. Pro Makina ön arıtma, yardımcı sistemler, tanklar ve atık hava yıkama ekipmanlarında destek verir." },
    ],
    cta: {
      title: "Biyogaz arıtma projeniz için teknik görüşme isteyin",
      description: "Ham biyogaz debinizi, gaz analizinizi ve hedef kullanımı paylaşın; ön arıtma ve yardımcı sistem kapsamını birlikte netleştirelim.",
    },
  },
};
