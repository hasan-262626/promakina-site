import type { SectorDetailText } from "../types";

type CompostKey =
  | "sectorHouseholdCompost"
  | "sectorAnimalCompost"
  | "sectorAgriculturalCompost"
  | "sectorSlaughterhouseCompost"
  | "sectorFoodCompost"
  | "sectorParkGardenCompost";

export const trCompostPages: Record<CompostKey, SectorDetailText> = {
  sectorHouseholdCompost: {
    meta: {
      title: "Evsel Atıklardan Kompost Tesisi",
      description:
        "Evsel atıklardan kompost tesisi: torba açma, plastik ve cam gibi yabancı maddelerin ayrımı, sızıntı suyu ve koku kontrolü, tambur kompostlaştırma ve son ürün elemesi.",
    },
    label: "Evsel Atıklardan Kompost Tesisi",
    h1: "Evsel Atıklardan Kompost Tesisi",
    lead:
      "Belediye ve site atıklarındaki organik fraksiyonu, yabancı maddelerden arındırılmış ve kullanılabilir komposta dönüştüren tesisler kuruyoruz.",
    introTitle: "Evsel Atıkta Kompost Kalitesini Belirleyen Şey: Ayrım",
    intro: [
      "Evsel atıktan kompost üretiminde kompostun kalitesini büyük ölçüde atığın kaynağında ayrı toplanıp toplanmadığı belirler. Kaynağında ayrılmış mutfak ve bahçe atığı daha temiz bir girdi sağlar; karışık evsel atıktan ayrılan organik fraksiyon ise plastik, cam, metal ve tekstil gibi yabancı maddeler içerir ve daha kapsamlı bir ön işlem gerektirir.",
      "Ön işlem aşamasında torbalar açılır, atık parçalanır ve elek ile organik fraksiyon ayrılır. Metal ayırma ve elle ayıklama noktaları atığın bileşimine göre eklenir. Evsel organik atık yüksek nemli ve hızla kokuya dönüşen bir malzeme olduğu için kabul alanının kapalı olması, sızıntı suyunun toplanması ve atık havanın arıtılması planlanır.",
      "Kompostlaştırma tambur, tünel veya kontrollü yığın yöntemleriyle yapılabilir. Yoğun kompostlaştırma ve olgunlaştırmadan sonra son eleme ile ince kompost ayrılır; elek üstü kısım ise yapı malzemesi olarak sürece geri döndürülebilir.",
    ],
    imageAlts: [
      "Evsel organik atıkların trommel elekle ayrıldığı kompost tesisi",
      "Evsel atık kompost tesisinde besleme bunkeri ve konveyör hattı",
    ],
    processTitle: "Evsel Atıklardan Kompost Üretim Akışı",
    processIntro: "Akışın ağırlık noktası, yabancı maddelerin kompostlaştırmadan önce ve son elemede ayrılmasıdır.",
    steps: [
      { title: "Kapalı alanda kabul", text: "Atık kapalı kabul alanına boşaltılır; sızıntı suyu toplanır, atık havası emilir." },
      { title: "Torba açma ve parçalama", text: "Torbalar açılır ve atık, organik fraksiyonun ayrılmasına uygun boyuta parçalanır." },
      { title: "Yabancı madde ayrımı", text: "Trommel elek, metal ayırıcı ve ayıklama noktalarıyla plastik, cam ve metal ayrılır." },
      { title: "Yoğun kompostlaştırma", text: "Organik fraksiyon, nemi ve yapısı ayarlanarak tamburda veya kontrollü ortamda kompostlaştırılır." },
      { title: "Olgunlaştırma", text: "Malzeme stabil hale gelene kadar olgunlaştırma alanında bekletilir." },
      { title: "Son eleme ve paketleme", text: "İnce kompost ayrılır, elek üstü geri devredilir, ürün paketlenir veya dökme sevk edilir." },
    ],
    machinesTitle: "Evsel Atık Kompost Tesisinde Kullanılan Ekipmanlar",
    machineNotes: {
      shredderSystems: "Torba açma ve evsel atığın organik ayrıma uygun boyuta parçalanması.",
      trommelScreen: "Organik fraksiyonun yabancı maddelerden ayrılması ve son ürün elemesi.",
      beltConveyor: "Kabul, ayıklama ve kompostlaştırma alanları arasında atık taşınması.",
      compostDrum: "Organik fraksiyonun kapalı ortamda yoğun kompostlaştırılması.",
      wetScrubber: "Kabul ve proses alanından emilen kokulu havanın yıkanması.",
      bigBagFilling: "Elenmiş kompostun big bag ambalajlara doldurulması.",
    },
    faqTitle: "Evsel Atıklardan Kompost Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Karışık evsel atıktan kaliteli kompost üretilebilir mi?", a: "Karışık atıktan ayrılan organik fraksiyon daha fazla yabancı madde içerir. Kapsamlı ön işlemle kompost üretilebilir; ancak ürün kalitesi kaynağında ayrı toplanan atığa göre genellikle daha sınırlıdır." },
      { q: "Evsel kompost tesisinde koku nasıl kontrol edilir?", a: "Kabul ve proses alanları kapalı tutulur, iç hava emilerek yıkayıcı veya biyofiltre ile arıtılır; sızıntı suyu ayrıca toplanır." },
      { q: "Plastik parçalar kompostta nasıl azaltılır?", a: "Torba açma, trommel eleme, ayıklama ve son elemede çok kademeli ayrım uygulanır; en etkili önlem atığın kaynağında ayrı toplanmasıdır." },
      { q: "Tambur kompostlaştırma mı, yığın yöntemi mi seçilmeli?", a: "Saha alanı, koku hassasiyeti, kapasite ve yatırım bütçesine göre karar verilir. Tambur, yoğun fazı kapalı ve kontrollü yürütmeyi kolaylaştırır." },
      { q: "Belediye ölçeğinde kapasite nasıl belirlenir?", a: "Nüfus, kaynağında ayrı toplama oranı, mevsimsel değişim ve atığın nemi birlikte değerlendirilerek günlük kabul kapasitesi hesaplanır." },
    ],
    cta: {
      title: "Evsel atık kompost tesisiniz için teklif isteyin",
      description: "Atığın toplama şeklini, günlük miktarını ve saha durumunu paylaşın; ön işlem ve kompostlaştırma kapasitesini birlikte belirleyelim.",
    },
  },

  sectorAnimalCompost: {
    meta: {
      title: "Hayvansal Atıklardan Kompost Tesisi",
      description:
        "Büyükbaş, kanatlı ve küçükbaş gübresi için kompost tesisi: gübre türüne göre nem ve karbon-azot dengesi, yapı malzemesiyle karıştırma, kompostlaştırma ve eleme.",
    },
    label: "Hayvansal Atıklardan Kompost Tesisi",
    h1: "Hayvansal Atıklardan Kompost Tesisi: Gübre Türüne Göre Proses",
    lead:
      "Büyükbaş, kanatlı ve küçükbaş işletmelerinin gübresini, gübre türüne göre ayarlanmış karışım ve kompostlaştırma süreciyle değerli ürüne dönüştürüyoruz.",
    introTitle: "Gübre Türü Değiştikçe Proses Neden Değişir?",
    intro: [
      "Hayvansal atıktan kompost üretiminde ilk soru, gübrenin hangi işletmeden geldiğidir. Büyükbaş gübresi genellikle yüksek nemlidir ve yapı malzemesi ilavesi gerektirir. Kanatlı gübresi azotça zengindir ve amonyak kokusu belirgindir. Küçükbaş gübresi ise altlık malzemesiyle karışık geldiğinden daha kuru ve lifli olabilir.",
      "Bu farklar, karışım reçetesini belirler: nem fazlası saman, talaş veya elek üstü kompost gibi yapı malzemesiyle dengelenir; karbon-azot oranı kompostlaşmaya uygun aralığa getirilir. Karışımın homojenliği, kompostlaşmanın düzgün başlaması ve koku yükünün azalması için belirleyicidir.",
      "Kompostlaştırma sırasında sıcaklığın yükselmesi patojenlerin ve yabancı ot tohumlarının azaltılmasına yardımcı olur. Olgunlaştırmadan sonra elenen kompost dökme, torbalı veya granül ürün olarak satılabilir. Anahtar teslim tesis kapsamı için hayvansal atık kompost tesisi sayfamızı da inceleyebilirsiniz.",
    ],
    imageAlts: [
      "Hayvansal atıkların yükleyiciyle besleme bunkerine alındığı kompost tesisi",
      "Hayvansal atık kompostunun tambur ve konveyörle işlendiği hat",
    ],
    processTitle: "Hayvansal Atıklardan Kompost Üretim Akışı",
    processIntro: "Akışın ilk adımları gübre türüne göre ayarlanır; kompostlaştırma ve eleme adımları ortaktır.",
    steps: [
      { title: "Gübre kabulü", text: "Gübre türü, nemi ve altlık içeriği belirlenir; kabul bunkerine alınır." },
      { title: "Karışım reçetesi", text: "Nem ve karbon-azot dengesi için yapı malzemesi ve elek üstü kompost oranı belirlenir." },
      { title: "Karıştırma", text: "Gübre ve yapı malzemesi homojen karışım haline getirilir." },
      { title: "Yoğun kompostlaştırma", text: "Karışım havalandırılarak sıcaklık yükselmesi sağlanır ve izlenir." },
      { title: "Olgunlaştırma", text: "Kompost stabil hale gelene kadar olgunlaştırılır." },
      { title: "Eleme ve son ürün", text: "Kompost elenir; gerekirse kurutulur ve paketlenir veya granül hatta gönderilir." },
    ],
    machinesTitle: "Hayvansal Atık Kompost Tesisinde Kullanılan Ekipmanlar",
    machineNotes: {
      bunkersHoppers: "Gübre ve yapı malzemesinin kabulü ve kontrollü beslenmesi için bunkerler.",
      screwConveyor: "Islak ve yapışkan gübrenin bunker altından düzenli taşınması.",
      mixingDrum: "Gübre ile yapı malzemesinin homojen karıştırılması.",
      compostDrum: "Karışımın kapalı ortamda yoğun kompostlaştırılması.",
      trommelScreen: "Olgun kompostun elenmesi ve elek üstünün geri devri.",
      rotaryDryer: "Torbalı veya granül ürün hedefinde kompost neminin düşürülmesi.",
    },
    faqTitle: "Hayvansal Atıklardan Kompost Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Büyükbaş ve kanatlı gübresi aynı tesiste işlenebilir mi?", a: "Evet. Ancak nem ve azot içerikleri farklı olduğu için karışım reçetesi ve yapı malzemesi oranı gübre türüne göre ayrı ayarlanır." },
      { q: "Kanatlı gübresinde amonyak kokusu nasıl azaltılır?", a: "Karbon kaynağı ilavesiyle karbon-azot dengesi iyileştirilir, kapalı alanlarda emilen hava arıtılır ve karışım homojen tutulur." },
      { q: "Yapı malzemesi olarak ne kullanılır?", a: "Saman, talaş, budama atığı veya elenmiş kompostun elek üstü kısmı kullanılabilir. Seçim, yerel bulunabilirliğe ve gübrenin nemine göre yapılır." },
      { q: "Kompostlaştırma patojenleri yok eder mi?", a: "Kontrollü kompostlaştırmadaki sıcaklık artışı patojen ve yabancı ot tohumlarını önemli ölçüde azaltır. Gerekli koşullar ilgili mevzuata göre izlenir." },
      { q: "Hayvansal kompost granül gübreye dönüştürülebilir mi?", a: "Evet. Olgun ve elenmiş kompost, granülasyon ve kurutma hattıyla granül organik gübreye dönüştürülebilir." },
    ],
    cta: {
      title: "Hayvansal atık kompost tesisiniz için teklif isteyin",
      description: "İşletme tipinizi, günlük gübre miktarınızı ve hedef ürününüzü paylaşın; karışım ve kompostlaştırma kapasitesini birlikte belirleyelim.",
    },
  },

  sectorAgriculturalCompost: {
    meta: {
      title: "Tarımsal Atıklardan Kompost Tesisi",
      description:
        "Tarımsal atıklardan kompost tesisi: sap, saman, sera ve meyve-sebze artıklarının parçalanması, azot ve nem dengesi, mevsimsel stok yönetimi, kompostlaştırma ve eleme.",
    },
    label: "Tarımsal Atıklardan Kompost Tesisi",
    h1: "Tarımsal Atıklardan Kompost Tesisi",
    lead:
      "Hasat sonrası sap ve saman, sera bitki artıkları ve meyve-sebze atıklarını mevsimsel değişime uygun kompost tesislerinde işliyoruz.",
    introTitle: "Mevsimsel ve Lifli Tarımsal Atıkların Kompostlaştırılması",
    intro: [
      "Tarımsal atıklar çoğunlukla mevsimseldir: hasat dönemlerinde büyük miktarda sap, saman ve bitki artığı oluşurken yılın diğer dönemlerinde girdi azalır. Tesis kapasitesi ve stok alanı bu dalgalanmaya göre planlanmazsa yoğun dönemde kabul darboğazı, sakin dönemde atıl kapasite oluşur.",
      "Sap, saman ve sera artıkları lifli ve karbonca zengindir; kompostlaşmanın başlaması için parçalanmaları, nemlendirilmeleri ve hayvan gübresi gibi azotlu bir girdiyle dengelenmeleri gerekir. Meyve-sebze atıkları ise nemli ve azotça daha zengin olduğundan lifli atıklarla karıştırılması dengeyi kolaylaştırır.",
      "Sera atıklarında bitkileri bağlamakta kullanılan plastik ip ve klipsler en sık karşılaşılan yabancı maddedir; bu malzemeler parçalama öncesinde ve son elemede ayrılmalıdır. Anahtar teslim tesis kapsamı için bitkisel ve tarımsal atık kompost tesisi sayfamızı inceleyebilirsiniz.",
    ],
    imageAlts: [
      "Tarımsal bitki atıklarının konveyörle trommel eleğe beslendiği kompost hattı",
      "Tarımsal atık kompostunun elenerek big bag ambalaja ayrıldığı tesis",
    ],
    processTitle: "Tarımsal Atıklardan Kompost Üretim Akışı",
    processIntro: "Akış, lifli ve mevsimsel atığın parçalanıp dengeli bir karışıma dönüştürülmesiyle başlar.",
    steps: [
      { title: "Kabul ve mevsimsel stok", text: "Hasat dönemindeki atık fazlası, kontrollü stok alanında bekletilir." },
      { title: "Yabancı madde ayrımı", text: "Sera atıklarındaki plastik ip, klips ve taşlar parçalama öncesinde ayrılır." },
      { title: "Parçalama", text: "Sap, saman ve bitki artıkları kompostlaşmaya uygun boyuta parçalanır." },
      { title: "Karışım ve nem ayarı", text: "Azotlu girdi ve su eklenerek karbon-azot ve nem dengesi sağlanır." },
      { title: "Kompostlaştırma ve olgunlaştırma", text: "Karışım havalandırılarak kompostlaştırılır ve olgunlaştırılır." },
      { title: "Eleme ve paketleme", text: "Kompost elenir; elek üstü yapı malzemesi olarak geri döner, ürün paketlenir." },
    ],
    machinesTitle: "Tarımsal Atık Kompost Tesisinde Kullanılan Ekipmanlar",
    machineNotes: {
      shredderSystems: "Lifli sap, saman ve sera artıklarının ön parçalanması.",
      hammerCrusher: "Parçalanmış bitkisel atığın daha ince boyuta indirilmesi.",
      beltConveyor: "Stok, parçalama ve kompostlaştırma alanları arasında atık transferi.",
      compostDrum: "Dengelenmiş karışımın yoğun kompostlaştırma fazı.",
      trommelScreen: "Olgun kompostun elenmesi ve plastik kalıntıların ayrılması.",
      openMouthBagging: "Elenmiş kompostun torbalanması.",
    },
    faqTitle: "Tarımsal Atıklardan Kompost Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Saman ve sap tek başına kompostlaştırılabilir mi?", a: "Karbonca zengin oldukları için tek başlarına yavaş kompostlaşırlar. Hayvan gübresi gibi azotlu bir girdi ve nem ilavesiyle süreç hızlanır." },
      { q: "Mevsimsel atık dalgalanması nasıl yönetilir?", a: "Yoğun dönemdeki fazla atık için stok alanı planlanır ve tesis kapasitesi yıllık ortalama ile en yoğun dönem arasında dengelenir." },
      { q: "Sera atıklarındaki plastik ipler sorun yaratır mı?", a: "Evet. Parçalayıcıya sarılabilir ve kompostu kirletebilir. Parçalama öncesi ayıklama ve son elemede ayrım gerekir." },
      { q: "İlaç kalıntıları komposta geçer mi?", a: "Bitki koruma ürünü kalıntısı riski olan atıklarda kompost kullanım alanı, analiz sonuçlarına ve mevzuata göre değerlendirilmelidir." },
      { q: "Tarımsal kompost hangi alanlarda kullanılır?", a: "Tarla, bahçe ve sera uygulamalarında toprak düzenleyici olarak veya granül organik gübre hammaddesi olarak kullanılabilir." },
    ],
    cta: {
      title: "Tarımsal atık kompost tesisiniz için teklif isteyin",
      description: "Atık türlerinizi, mevsimsel miktarlarınızı ve saha bilginizi paylaşın; parçalama, stok ve kompostlaştırma kapasitesini birlikte planlayalım.",
    },
  },

  sectorSlaughterhouseCompost: {
    meta: {
      title: "Mezbaha Atıklarından Kompost Tesisi",
      description:
        "Mezbaha atıklarından kompost tesisi: işkembe içeriği, gübre ve hayvansal yan ürünler için mevzuata uygun ön işlem, hijyenizasyon, kapalı kompostlaştırma ve koku kontrolü.",
    },
    label: "Mezbaha Atıklarından Kompost Tesisi",
    h1: "Mezbaha Atıklarından Kompost Tesisi",
    lead:
      "Kesimhane ve et işleme tesislerinden çıkan organik atıkları, hayvansal yan ürün kurallarına uygun ve kapalı proseslerle komposta dönüştürüyoruz.",
    introTitle: "Mezbaha Atıklarında Mevzuat, Hijyen ve Koku Önceliği",
    intro: [
      "Mezbaha atıkları; işkembe içeriği, ahır ve bekleme alanı gübresi, yağ tutucu çamuru ve hayvansal yan ürünlerden oluşabilir. Bu atıkların bir kısmı hayvansal yan ürün mevzuatı kapsamındadır ve hangi yöntemle işlenebileceği, gereken ısıl işlem veya hijyenizasyon şartları yetkili kurumun belirlediği kurallara bağlıdır. Bu nedenle tesis tasarımı, mevzuat sınıflandırmasının netleştirilmesiyle başlar.",
      "Mezbaha atıkları nemli, proteince zengin ve hızla kokuşan malzemelerdir. Kabul alanının kapalı olması, sızıntı suyunun toplanması ve atık havanın arıtılması bu tesislerde zorunlu kabul edilmelidir. Atık, yapı malzemesiyle karıştırılarak kompostlaşmaya uygun nem ve gözenekliliğe getirilir.",
      "Mevzuatın gerektirdiği durumlarda ön işlem olarak parçalama ve kontrollü ısıl işlem uygulanır, ardından kapalı ortamda yoğun kompostlaştırma yapılır. Olgunlaştırma ve elemeden sonra ürünün kullanım alanı analiz sonuçlarına göre belirlenir.",
    ],
    imageAlts: [
      "Mezbaha kaynaklı organik atıkların kapalı tesiste işlendiği kompost hattı",
      "Mezbaha atığı kompostunun olgunlaştırma ve eleme alanı",
    ],
    processTitle: "Mezbaha Atıklarından Kompost Üretim Akışı",
    processIntro: "Akıştaki ısıl işlem ve hijyenizasyon adımlarının şartları, atığın mevzuattaki sınıfına göre belirlenir.",
    steps: [
      { title: "Atık sınıflandırması", text: "Atık akışları mevzuattaki sınıflarına göre ayrılır ve kabul edilebilecek olanlar belirlenir." },
      { title: "Kapalı kabul", text: "Atık kapalı alana alınır; sızıntı suyu ve kokulu hava toplanır." },
      { title: "Parçalama", text: "İri parçalar, ısıl işlem ve kompostlaştırmaya uygun boyuta indirilir." },
      { title: "Hijyenizasyon (gerekiyorsa)", text: "Mevzuatın istediği durumlarda atık kontrollü ısıl işlemden geçirilir." },
      { title: "Karıştırma ve kompostlaştırma", text: "Atık yapı malzemesiyle karıştırılır ve kapalı ortamda kompostlaştırılır." },
      { title: "Olgunlaştırma ve eleme", text: "Stabil hale gelen kompost elenir, ürünün kullanım alanı analizle belirlenir." },
    ],
    machinesTitle: "Mezbaha Atığı Kompost Tesisinde Kullanılan Ekipmanlar",
    machineNotes: {
      shredderSystems: "İri mezbaha atıklarının ısıl işlem ve kompostlaştırma öncesi parçalanması.",
      screwConveyor: "Islak ve yapışkan atığın kapalı olarak taşınması.",
      sterilizationDrum: "Mevzuatın gerektirdiği durumlarda kontrollü ısıl işlem için tambur.",
      compostDrum: "Atık ve yapı malzemesi karışımının kapalı ortamda kompostlaştırılması.",
      wetScrubber: "Kabul ve proses alanlarından emilen kokulu havanın yıkanması.",
      trommelScreen: "Olgun kompostun elenmesi ve elek üstünün ayrılması.",
    },
    faqTitle: "Mezbaha Atıklarından Kompost Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Tüm mezbaha atıkları komposta dönüştürülebilir mi?", a: "Hayır. Bazı hayvansal yan ürünlerin işlenme yöntemi mevzuatla sınırlandırılmıştır. Hangi atığın kompostlanabileceği yetkili kurum şartlarına göre belirlenir." },
      { q: "Hijyenizasyon her durumda gerekli midir?", a: "Gereklilik ve şartlar atığın sınıfına göre değişir. Proje başında mevzuat değerlendirmesi yapılarak ısıl işlem adımının kapsamı netleştirilir." },
      { q: "Mezbaha atıklarında koku nasıl kontrol edilir?", a: "Kabul ve proses kapalı alanda yapılır, iç hava emilerek yıkayıcı veya biyofiltreyle arıtılır; atık bekletilmeden işleme alınır." },
      { q: "İşkembe içeriği tek başına kompostlanabilir mi?", a: "Nemli olduğu için genellikle yapı malzemesiyle karıştırılır. Karışım oranı nem ve gözenekliliğe göre belirlenir." },
      { q: "Kompost ürünü nerede kullanılabilir?", a: "Kullanım alanı, ürün analizleri ve ilgili mevzuatın izin verdiği uygulamalara göre belirlenir." },
    ],
    cta: {
      title: "Mezbaha atığı kompost tesisiniz için teklif isteyin",
      description: "Atık türlerinizi, günlük miktarınızı ve mevcut izin durumunuzu paylaşın; ön işlem ve kapalı kompostlaştırma kurgusunu birlikte belirleyelim.",
    },
  },

  sectorFoodCompost: {
    meta: {
      title: "Gıda Atıklarından Kompost Tesisi",
      description:
        "Gıda atıklarından kompost tesisi: ambalajlı atıkların ayrımı, fazla suyun alınması, yapı malzemesiyle karıştırma, kapalı kompostlaştırma ve koku kontrolü çözümleri.",
    },
    label: "Gıda Atıklarından Kompost Tesisi",
    h1: "Gıda Atıklarından Kompost Tesisi",
    lead:
      "Gıda üretimi, toptan hal, market ve yemekhane atıklarını nem ve koku yükünü yöneten kapalı kompost proseslerine alıyoruz.",
    introTitle: "Yüksek Nemli ve Hızla Bozulan Atık İçin Kompost Kurgusu",
    intro: [
      "Gıda atıkları; gıda işleme tesislerinin üretim artıkları, hal ve market atıkları ile yemekhane ve restoran atıklarını kapsar. Bu atıklar yüksek nemli, yapısı zayıf ve hızla asitleşip kokuşan malzemelerdir. Kompostlaşmanın sağlıklı başlaması için fazla suyun alınması ve yapı malzemesiyle gözenekli bir karışım oluşturulması gerekir.",
      "Market ve hal atıklarında ambalaj en büyük yabancı madde kaynağıdır. Ambalajlı atıklar için ambalaj ayırma, ambalajsız akışlar için ise parçalama ve eleme yeterli olabilir. Pişmiş yemek ve et içeren atıklar hayvansal yan ürün kurallarına tabi olabileceğinden kabul edilecek atık türleri baştan tanımlanır.",
      "Atık bekletilmeden işlenir; kabul ve kompostlaştırma kapalı alanda yürütülür, kokulu hava arıtılır. Olgunlaştırma ve son elemeden sonra ürünün kullanım alanı analizlere göre belirlenir.",
    ],
    imageAlts: [
      "Gıda atıklarının yükleyiciyle besleme bunkerine alındığı kompost tesisi",
      "Gıda atıklarının konveyörle kompost tamburuna taşındığı hat",
    ],
    processTitle: "Gıda Atıklarından Kompost Üretim Akışı",
    processIntro: "Akış, atığın beklemeden işlenmesi ve nem fazlasının kompostlaştırma öncesinde alınmasına göre kurulur.",
    steps: [
      { title: "Kabul ve atık tanımı", text: "Atığın kaynağı, ambalaj durumu ve mevzuat sınıfı kabulde kontrol edilir." },
      { title: "Ambalaj ayırma ve parçalama", text: "Ambalajlı atıklar ayrılır, gıda kısmı parçalanır." },
      { title: "Fazla suyun alınması", text: "Serbest su elek üzerinden ayrılarak karışımın nemi düşürülür." },
      { title: "Yapı malzemesiyle karıştırma", text: "Talaş, budama atığı veya elek üstü kompostla gözenekli karışım oluşturulur." },
      { title: "Kapalı kompostlaştırma", text: "Karışım tamburda veya kapalı ortamda kontrollü olarak kompostlaştırılır." },
      { title: "Olgunlaştırma ve eleme", text: "Olgun kompost elenir; elek üstü yapı malzemesi olarak geri döner." },
    ],
    machinesTitle: "Gıda Atığı Kompost Tesisinde Kullanılan Ekipmanlar",
    machineNotes: {
      shredderSystems: "Gıda atıklarının ve ambalaj ayrımı sonrası organik kısmın parçalanması.",
      dewateringScreen: "Gıda atığındaki serbest suyun kompostlaştırma öncesi ayrılması.",
      screwConveyor: "Islak ve yapışkan gıda atığının kapalı olarak taşınması.",
      mixingDrum: "Gıda atığı ile yapı malzemesinin homojen karıştırılması.",
      compostDrum: "Karışımın kapalı ortamda yoğun kompostlaştırılması.",
      trommelScreen: "Olgun kompostun elenmesi ve kalıntı ambalajın ayrılması.",
    },
    faqTitle: "Gıda Atıklarından Kompost Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Ambalajlı gıda atıkları kompostlanabilir mi?", a: "Ambalaj önce ayrılmalıdır. Ambalaj ayırma ekipmanı ve son eleme ile organik kısım kompostlanabilir; ambalaj oranı yüksekse ön işlem kapsamı genişler." },
      { q: "Gıda atığı neden hızla kokar?", a: "Kolay ayrışan şeker ve proteinler hızla asitleşir ve kokulu gazlar oluşturur. Atığın beklemeden işlenmesi ve kapalı proses bu riski azaltır." },
      { q: "Pişmiş yemek atıkları kabul edilebilir mi?", a: "Et içeren ve pişmiş atıklar hayvansal yan ürün kurallarına tabi olabilir. Kabul şartları ve gerekli işlem adımları mevzuata göre belirlenir." },
      { q: "Gıda atığına neden yapı malzemesi eklenir?", a: "Gıda atığı ıslak ve yoğundur. Yapı malzemesi gözeneklilik sağlayarak havalanmayı ve kompostlaşmanın düzgün başlamasını destekler." },
      { q: "Gıda atığı için kompost mu, biyogaz mı uygundur?", a: "Atık miktarı, enerji hedefi ve saha koşullarına bağlıdır. Biyogaz enerji üretir, kompost ise doğrudan toprak düzenleyici ürün sağlar; iki süreç birlikte de planlanabilir." },
    ],
    cta: {
      title: "Gıda atığı kompost tesisiniz için teklif isteyin",
      description: "Atık kaynaklarınızı, ambalaj durumunu ve günlük miktarı paylaşın; ön işlem ve kapalı kompostlaştırma kapasitesini birlikte belirleyelim.",
    },
  },

  sectorParkGardenCompost: {
    meta: {
      title: "Park ve Bahçe Atıklarından Kompost Tesisi",
      description:
        "Park ve bahçe atıklarından kompost tesisi: budama dalı, yaprak ve çim atıklarının parçalanması, odunsu fraksiyonun ayrılması, kompostlaştırma, kompost ve malç elemesi.",
    },
    label: "Park ve Bahçe Atıklarından Kompost Tesisi",
    h1: "Park ve Bahçe Atıklarından Kompost Tesisi",
    lead:
      "Belediye park, bahçe ve peyzaj alanlarından gelen budama, yaprak ve çim atıklarını kompost ve malç ürünlerine dönüştürüyoruz.",
    introTitle: "Budama, Yaprak ve Çim Atıklarını Doğru Dengelemek",
    intro: [
      "Park ve bahçe atıkları üç farklı karakterde gelir: odunsu budama dalları, kuru yapraklar ve nemli, azotça zengin çim atıkları. Odunsu kısım parçalanmadan kompostlaşmaz; çim atığı ise tek başına yığıldığında hızla sıkışır ve kokar. Bu nedenle tesis, farklı atıkları dengeli bir karışıma dönüştürecek şekilde kurgulanır.",
      "Atık miktarı mevsime göre değişir: ilkbahar ve yaz aylarında çim, sonbaharda yaprak, kış aylarında budama atığı öne çıkar. Belediye atıklarında toprak, taş ve çöp poşeti gibi yabancı maddeler de bulunabildiğinden parçalama öncesinde ayıklama gerekir.",
      "Kompostlaştırma ve olgunlaştırmadan sonra yapılan elemede ince kompost ayrılır. Odunsu elek üstü yeniden yapı malzemesi olarak kullanılabilir veya malç ürünü olarak değerlendirilebilir.",
    ],
    imageAlts: [
      "Park ve bahçe atıklarının yükleyiciyle besleme bunkerine alındığı kompost tesisi",
      "Park ve bahçe atığı kompostunun elenerek big bag ambalaja ayrılması",
    ],
    processTitle: "Park ve Bahçe Atıklarından Kompost Üretim Akışı",
    processIntro: "Akış, odunsu, yapraklı ve çim atıklarının mevsimsel oranlarına göre ayarlanır.",
    steps: [
      { title: "Kabul ve ayıklama", text: "Atık türüne göre ayrılır; taş, toprak ve poşet gibi yabancı maddeler ayıklanır." },
      { title: "Odunsu atığın parçalanması", text: "Budama dalları kompostlaşmaya uygun boyuta parçalanır." },
      { title: "Karışım hazırlama", text: "Odunsu, yapraklı ve çim atıkları nem ve karbon-azot dengesine göre karıştırılır." },
      { title: "Kompostlaştırma", text: "Karışım havalandırılarak kompostlaştırılır." },
      { title: "Olgunlaştırma", text: "Kompost stabil hale gelene kadar olgunlaştırılır." },
      { title: "Eleme: kompost ve malç", text: "İnce kompost ayrılır; odunsu elek üstü malç olarak veya yapı malzemesi olarak kullanılır." },
    ],
    machinesTitle: "Park ve Bahçe Atığı Kompost Tesisinde Kullanılan Ekipmanlar",
    machineNotes: {
      shredderSystems: "Budama dalları ve odunsu atıkların parçalanması.",
      hammerCrusher: "Parçalanmış odunsu atığın daha ince fraksiyona indirilmesi.",
      trommelScreen: "Olgun kompostun ince ürün ve odunsu elek üstü olarak ayrılması.",
      compostDrum: "Karışımın kontrollü yoğun kompostlaştırma fazı.",
      beltConveyor: "Parçalama, kompostlaştırma ve eleme alanları arasında transfer.",
      bigBagFilling: "Elenmiş kompost veya malçın big bag ambalaja doldurulması.",
    },
    faqTitle: "Park ve Bahçe Atıklarından Kompost Tesisi Hakkında Sık Sorulan Sorular",
    faqs: [
      { q: "Çim atığı neden tek başına kompostlanmamalı?", a: "Çim nemli ve azotça zengindir; tek başına yığıldığında sıkışır, havasız kalır ve kokar. Odunsu ve yapraklı atıkla karıştırılması gerekir." },
      { q: "Budama dalları kompostlaşır mı?", a: "Parçalanmadan çok yavaş kompostlaşır. Parçalanan odunsu atık hem kompostlaşır hem de karışıma yapı ve gözeneklilik kazandırır." },
      { q: "Malç ile kompost arasındaki fark nedir?", a: "Malç, toprak yüzeyini örtmek için kullanılan iri odunsu parçalardır. Kompost ise olgunlaşmış, ince yapılı toprak düzenleyicidir." },
      { q: "Belediye atığındaki yabancı maddeler nasıl ayrılır?", a: "Kabulde ayıklama, parçalama öncesi kontrol ve son elemede ayrım yapılır; taş ve metal parçalar parçalayıcıyı korumak için önceden alınır." },
      { q: "Park ve bahçe kompostu nerede kullanılır?", a: "Belediye peyzaj alanlarında, park ve bahçelerde toprak düzenleyici olarak ve fidan dikiminde kullanılabilir." },
    ],
    cta: {
      title: "Park ve bahçe atığı kompost tesisiniz için teklif isteyin",
      description: "Atık türlerinizi, mevsimsel miktarlarınızı ve hedef ürünlerinizi paylaşın; parçalama ve eleme kapasitesini birlikte belirleyelim.",
    },
  },
};
