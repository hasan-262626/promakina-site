export type SectorInfoCard = {
  title: string;
  text: string;
};

export type SectorFaqItem = {
  question: string;
  answer: string;
};

export type SectorFormField = {
  id: string;
  label: string;
  type: "select" | "number" | "text";
  required?: boolean;
  options?: string[];
  unit?: string;
};

export type SectorExperienceConfig = {
  heroBadge: string;
  heroIntro: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  primaryEyebrow: string;
  primaryTitle: string;
  primaryDescription: string;
  primaryCards: SectorInfoCard[];
  offerEyebrow: string;
  offerTitle: string;
  offerDescription: string;
  offerCards: SectorInfoCard[];
  equipmentEyebrow: string;
  equipmentTitle: string;
  equipmentDescription: string;
  equipmentCards: SectorInfoCard[];
  faqEyebrow: string;
  faqTitle: string;
  faqDescription: string;
  faqs: SectorFaqItem[];
};

export const sectorExperienceConfigs: Record<string, SectorExperienceConfig> = {
  "kompost-ve-organik-atik-tesisleri": {
    heroBadge: "KOMPOST VE ORGANİK ATIK İ�~LEME �!�Z�SMLERİ",
    heroIntro: "Organik atıkları kontrollü biçimde kompost ve son ürüne dönü�xtüren tesis yakla�xımları.",
    heroTitle: "Kompost ve Organik Atık Tesisleri",
    heroDescription:
      "Evsel, tarımsal ve hayvansal organik atıkların kontrollü i�xlenmesi için kompost, kurutma, eleme ve son ürün hazırlama süreçlerine uygun tesis çözümleri sunuyoruz.",
    heroImage: "/images/kompost/kompost1.jpg",
    primaryEyebrow: "Temel Yakla�xım",
    primaryTitle: "İ�xlenen organik materyaller ve proses yakla�xımı",
    primaryDescription:
      "Kompost tesislerinde sistem kurgusu; organik girdinin nemi, lif yapısı, karı�xım karakteri ve hedef son ürün beklentisine göre �xekillenir.",
    primaryCards: [
      { title: "Girdi karakteri", text: "Evsel, hayvansal veya tarımsal organik atıkların her biri farklı hazırlama ve i�xlem adımları gerektirir." },
      { title: "Nem ve yapı dengesi", text: "Nem seviyesi ile organik yapının akı�x davranı�xı, tambur ve son ürün hattı seçiminde belirleyici olur." },
      { title: "Son ürün hedefi", text: "Kompost, kurutulmu�x ürün veya zenginle�xtirilmi�x ürün hedefi tesisin eleme ve son hat mantı�xını de�xi�xtirir." },
    ],
    offerEyebrow: "Sunulan �!özümler",
    offerTitle: "Kompost ve organik atık i�xleme için sundu�xumuz çözümler",
    offerDescription:
      "Atık kabulünden son ürün hazırlama a�xamasına kadar süreci tek bir proses mantı�xında ele alıyor, sahaya uygun çözümler geli�xtiriyoruz.",
    offerCards: [
      { title: "Proses tasarımı", text: "Atık tipi, nem seviyesi ve hedef son ürüne göre tesis akı�xını teknik olarak kurguluyoruz." },
      { title: "Hat yerle�ximi", text: "Besleme, tambur, eleme ve stok noktalarını saha lojisti�xiyle uyumlu �xekilde planlıyoruz." },
      { title: "Kurutma ve olgunla�xtırma", text: "Organik akı�xın ihtiyacına göre tambur kurutma ve kontrollü olgunla�xtırma çözümleri sunuyoruz." },
      { title: "Eleme ve son ürün hazırlama", text: "Son ürün standardını destekleyen eleme, sınıflandırma ve çıkı�x çözümleri geli�xtiriyoruz." },
      { title: "Koku ve toz kontrolü", text: "�!evresel uyum için emi�x, filtrasyon ve kapalı akı�x noktalarını sürece dahil ediyoruz." },
      { title: "Kurulum ve devreye alma", text: "İmalat, saha montajı ve i�xletmeye alma adımlarını kontrollü biçimde yönetiyoruz." },
    ],
    equipmentEyebrow: "Makine ve Ekipman",
    equipmentTitle: "Kompost ve organik atık i�xleme için kullanılan ba�xlıca makine ve ekipmanlar",
    equipmentDescription:
      "Kompost hatlarında kullanılan ekipmanlar, girdi karakterine ve hedef son ürün yapısına göre birbiriyle uyumlu �xekilde seçilmelidir.",
    equipmentCards: [
      { title: "Besleme bunkerleri", text: "Organik girdinin hatta kontrollü ve güvenli biçimde alınmasını sa�xlar." },
      { title: "Karı�xtırma sistemleri", text: "Farklı organik fraksiyonların dengeli biçimde bir araya gelmesini destekler." },
      { title: "Olgunla�xtırma tamburları", text: "Kompostun kontrollü ilerlemesini ve homojen olgunla�xmasını sa�xlar." },
      { title: "Kurutma tamburları", text: "Yüksek nemli organik akı�xlarda hacim azaltma ve nem dü�xürme için kullanılır." },
      { title: "Eleme sistemleri", text: "Son ürünü istenen fraksiyonlara ayırarak kalite standardını destekler." },
      { title: "Konveyör ve transfer hatları", text: "Hazırlama, tambur ve son ürün noktaları arasında kesintisiz akı�x kurar." },
      { title: "Toz ve koku kontrol sistemleri", text: "Emisyon yönetimi ve saha güvenli�xi için destek altyapısı sa�xlar." },
      { title: "Paketleme ve son hat", text: "Hazırlanan son ürünün torbalama veya sevkiyat öncesi çıkı�xını tamamlar." },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Kompost ve organik atık tesisleri hakkında sık sorulan sorular",
    faqDescription: "Kompost yatırımlarında en sık kar�xıla�xılan teknik ve operasyonel ba�xlıkları tek yerde topladık.",
    faqs: [
      { question: "Farklı organik atık tipleri aynı tesiste i�xlenebilir mi?", answer: "Evet, uygun ön hazırlık ve proses ayrımı ile farklı organik akı�xlar tek tesiste yönetilebilir." },
      { question: "Kurutma her kompost tesisinde gerekli midir?", answer: "Hayır, kurutma ihtiyacı atı�xın nemine, depolama planına ve hedef son ürün yapısına göre belirlenir." },
      { question: "Koku kontrolü nasıl planlanır?", answer: "Koku kontrolü; emi�x noktaları, filtreleme ve saha hava akı�xı birlikte de�xerlendirilerek projelendirilir." },
      { question: "Son ürün kalitesi nasıl korunur?", answer: "Karı�xım dengesi, tambur süresi, eleme do�xrulu�xu ve nem yönetimi birlikte ele alınmalıdır." },
      { question: "Mevcut sahaya kompost hattı entegre edilebilir mi?", answer: "Evet, saha ko�xulları ve mevcut akı�xlar incelenerek uygun entegrasyon planı yapılabilir." },
    ],
  },
  "enerji-ve-biyogaz-sistemleri": {
    heroBadge: "ENERJİ VE BİYOGAZ PROSES �!�Z�SMLERİ",
    heroIntro: "Organik girdileri enerji geri kazanımına hazırlayan kontrollü proses ve ekipman çözümleri.",
    heroTitle: "Enerji ve Biyogaz Sistemleri",
    heroDescription:
      "Biyogaz ve enerji odaklı proseslerde organik girdilerin hazırlanması, beslenmesi, aktarılması ve destek ekipmanlarının kurulumu için teknik çözümler sunuyoruz.",
    heroImage: "/images/biyogaz/biogaz1.jpg",
    primaryEyebrow: "Temel Yakla�xım",
    primaryTitle: "Girdi yapısı ve proses sistemi yakla�xımı",
    primaryDescription:
      "Biyogaz ve enerji sistemlerinde hat kurgusu; girdinin akı�x davranı�xı, nemi, lif yapısı ve besleme süreklili�xi ihtiyacına göre planlanır.",
    primaryCards: [
      { title: "Girdi tipi", text: "Tarımsal, hayvansal veya gıda kaynaklı akı�xlar için hazırlama ve besleme mantı�xı farklıla�xır." },
      { title: "Besleme süreklili�xi", text: "Kararlı besleme, biyogaz proseslerinde i�xletme performansı açısından kritik öneme sahiptir." },
      { title: "Yan ürün yönetimi", text: "Son ürün ve yan akı�xların nasıl yönetilece�xi, ana sistem kurgusunun bir parçası olarak ele alınır." },
    ],
    offerEyebrow: "Sunulan �!özümler",
    offerTitle: "Enerji ve biyogaz prosesleri için sundu�xumuz çözümler",
    offerDescription:
      "�n hazırlık, dozajlama, transfer ve yardımcı akı�x ekipmanlarını aynı proses disiplini içinde de�xerlendirerek çözüm geli�xtiriyoruz.",
    offerCards: [
      { title: "Girdi hazırlama", text: "Organik girdileri prosesin ihtiyacına uygun forma getiren hazırlama çözümleri sunuyoruz." },
      { title: "Besleme ve dozajlama", text: "Kararlı ve kontrollü besleme için bunker, dozaj ve transfer mantı�xını planlıyoruz." },
      { title: "Transfer altyapısı", text: "Hat içi akı�xı güvenli ve sürekli kılan konveyör, helezon ve yardımcı ekipmanları belirliyoruz." },
      { title: "Koku ve çevresel kontrol", text: "Organik akı�xlarda çevresel kontrol ihtiyacını saha planı ile birlikte ele alıyoruz." },
      { title: "Revizyon ve entegrasyon", text: "Mevcut biyogaz veya enerji hatlarına yeni ekipman ve proses deste�xi entegre ediyoruz." },
      { title: "Kurulum ve devreye alma", text: "İmalat, montaj ve devreye alma sürecini tek merkezden yönetiyoruz." },
    ],
    equipmentEyebrow: "Makine ve Ekipman",
    equipmentTitle: "Enerji ve biyogaz sistemlerinde kullanılan ba�xlıca makine ve ekipmanlar",
    equipmentDescription:
      "Bu sistemlerde kullanılan ekipmanlar, zorlu girdi yapılarında dayanıklılık ve sürekli besleme performansı sa�xlayacak �xekilde seçilir.",
    equipmentCards: [
      { title: "Girdi bunkerleri", text: "Organik girdilerin kontrollü kabulü ve tamponlanması için kullanılır." },
      { title: "Hazırlama konveyörleri", text: "�n hazırlık ve proses giri�x noktaları arasında dengeli transfer sa�xlar." },
      { title: "Dozajlama sistemleri", text: "Belirlenen debide düzenli ve kontrollü besleme yapar." },
      { title: "Helezon transfer hatları", text: "Nemli ve lifli akı�xların kontrollü ta�xınmasında görev alır." },
      { title: "Depolama üniteleri", text: "Ara stoklama ve proses tamponlaması için güvenli kapasite sunar." },
      { title: "Yardımcı akı�x sistemleri", text: "Hat içi yönlendirme ve akı�x süreklili�xini destekler." },
      { title: "Toz ve koku kontrol sistemleri", text: "�!evresel performans ve saha güvenli�xi için destek sa�xlar." },
      { title: "Kontrol ve otomasyon panoları", text: "Besleme senkronizasyonu ve proses izleme altyapısını yönetir." },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Enerji ve biyogaz sistemleri hakkında sık sorulan sorular",
    faqDescription: "Biyogaz ve enerji projelerinde girdi, kapasite ve saha kurgusuna dair sık sorulan ba�xlıkları derledik.",
    faqs: [
      { question: "Farklı organik girdiler aynı hatta beslenebilir mi?", answer: "Evet, uygun ön hazırlık ve dozajlama yapısı ile farklı girdiler aynı sistem içinde yönetilebilir." },
      { question: "Günlük besleme kapasitesi nasıl belirlenir?", answer: "Besleme kapasitesi girdi tipi, proses planı ve çalı�xma saatine göre netle�xtirilir." },
      { question: "Koku kontrolü bu tesislerde zorunlu mudur?", answer: "Birçok sahada koku yönetimi hem çevresel uyum hem de i�xletme konforu açısından önemli bir ihtiyaçtır." },
      { question: "Mevcut biyogaz tesisine yeni besleme sistemi eklenebilir mi?", answer: "Evet, mevcut altyapı incelenerek yeni ekipmanlar sisteme uygun biçimde entegre edilebilir." },
      { question: "Yan ürün yönetimi de proje kapsamına dahil olur mu?", answer: "Evet, son ürün ve yan akı�xların yönetimi proje kurgusunun önemli bir parçası olarak ele alınır." },
    ],
  },
  "madencilik-ve-mineral-isleme": {
    heroBadge: "MADENCİLİK VE MİNERAL İ�~LEME �!�Z�SMLERİ",
    heroIntro: "Kırma, eleme, transfer ve kurutma süreçleri için dengeli ve güçlü tesis kurguları.",
    heroTitle: "Madencilik ve Mineral İ�xleme",
    heroDescription:
      "Agrega, mineral ve cevher hazırlama hatlarında kırma, eleme, sınıflandırma, besleme, kurutma ve transfer süreçleri için proses ve ekipman çözümleri sunuyoruz.",
    heroImage: "/images/maden/maden1.jpg",
    primaryEyebrow: "Temel Yakla�xım",
    primaryTitle: "İ�xlenen malzeme yapısı ve proses mantı�xı",
    primaryDescription:
      "Madencilik ve mineral i�xleme hatlarında ekipman seçimi; malzemenin sertli�xi, a�xındırıcılı�xı, giri�x boyutu ve hedef çıkı�x fraksiyonuna göre belirlenir.",
    primaryCards: [
      { title: "Malzeme sertli�xi", text: "Kırıcı tipi, gövde yapısı ve sarf seçimi sertlik de�xerine göre �xekillenir." },
      { title: "Fraksiyon beklentisi", text: "Hedef ürün boyutu; kırma-eleme kademe sayısını ve elek mantı�xını belirler." },
      { title: "Transfer dengesi", text: "Besleme, stok ve çıkı�x akı�xının dengesi tüm hattın kararlı çalı�xması için gereklidir." },
    ],
    offerEyebrow: "Sunulan �!özümler",
    offerTitle: "Madencilik ve mineral i�xleme için sundu�xumuz çözümler",
    offerDescription:
      "Kırma, eleme, kurutma ve transfer adımlarını tek bir proses mantı�xında de�xerlendirerek sahaya özel çözümler üretiyoruz.",
    offerCards: [
      { title: "Proses tasarımı", text: "Malzeme karakteri ve hedef ürün yapısına göre kırma-eleme akı�xını kurguluyoruz." },
      { title: "Kırıcı ve elek seçimi", text: "Sertlik, a�xındırıcılık ve kapasite beklentisine göre ekipmanları belirliyoruz." },
      { title: "Hat yerle�ximi", text: "Bunker, transfer ve stok noktalarını saha lojisti�xine uygun �xekilde planlıyoruz." },
      { title: "Kurutma ve so�xutma çözümleri", text: "Nem ve sıcaklık kontrolü gereken akı�xlar için destek prosesler geli�xtiriyoruz." },
      { title: "Toz kontrolü", text: "Toz olu�xan noktalarda emi�x ve filtrasyon çözümlerini hatla birlikte ele alıyoruz." },
      { title: "Kurulum ve devreye alma", text: "İmalat, montaj ve devreye alma sürecini kontrollü biçimde yönetiyoruz." },
    ],
    equipmentEyebrow: "Makine ve Ekipman",
    equipmentTitle: "Madencilik ve mineral i�xleme için kullanılan ba�xlıca makine ve ekipmanlar",
    equipmentDescription:
      "Kırma ve eleme hatlarında tüm ekipmanların aynı kapasite ve akı�x mantı�xında dengelenmesi, tesis verimi açısından kritik önemdedir.",
    equipmentCards: [
      { title: "Primer kırıcılar", text: "İri boyutlu malzemelerin ilk kademe küçültülmesinde görev alır." },
      { title: "Sekonder kırıcılar", text: "�Srünü hedef fraksiyona yakla�xtıran ikinci kademe kırma i�xlemini yapar." },
      { title: "Elek sistemleri", text: "�Srünü istenen boyutlara ayırarak sınıflandırma do�xrulu�xu sa�xlar." },
      { title: "Besleyiciler", text: "Kırıcı ve elek hatlarına kararlı malzeme beslemesi yapar." },
      { title: "Bunker ve stok üniteleri", text: "Ara stok ve kontrollü akı�x için tampon kapasite sunar." },
      { title: "Konveyör ve transfer hatları", text: "Hat içi ta�xımayı güvenli ve sürekli biçimde tamamlar." },
      { title: "Kurutma tamburları", text: "Nemli mineral akı�xları için kontrollü kurutma deste�xi sa�xlar." },
      { title: "So�xutma sistemleri", text: "Kurutma sonrası ürün sıcaklı�xını dengeler ve son hat performansını iyile�xtirir." },
      { title: "Toz toplama sistemleri", text: "Tozlu proses noktalarında çevresel kontrol ve saha güvenli�xi sa�xlar." },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Madencilik ve mineral i�xleme hakkında sık sorulan sorular",
    faqDescription: "Madencilik yatırımlarında en sık gündeme gelen kapasite, ürün boyutu ve hat dengesi sorularını derledik.",
    faqs: [
      { question: "Primer ve sekonder kırma seçimi nasıl yapılır?", answer: "Giri�x boyutu, hedef ürün, malzeme sertli�xi ve kapasite ihtiyacı birlikte de�xerlendirilerek seçim yapılır." },
      { question: "Aynı hat üzerinde farklı ürün boyutları alınabilir mi?", answer: "Evet, uygun elek ve transfer yapısı ile farklı fraksiyonlar aynı tesiste üretilebilir." },
      { question: "Toz kontrolü her madencilik hattında gerekli midir?", answer: "�zellikle ince ürün ve kapalı alan uygulamalarında toz kontrolü önemli bir ihtiyaçtır." },
      { question: "Mevcut kırma-eleme hattı revize edilebilir mi?", answer: "Evet, mevcut ekipman parkı incelenerek kapasite artı�xı ve proses iyile�xtirmesi yapılabilir." },
      { question: "Kurutma ve so�xutma ne zaman gerekli olur?", answer: "Malzemenin nemi, hedef kondisyonu ve depolama gereksinimine göre kurutma-so�xutma ihtiyacı netle�xir." },
    ],
  },
  "kimya-ve-proses-endustrisi": {
    heroBadge: "KİMYA VE PROSES END�SSTRİSİ �!�Z�SMLERİ",
    heroIntro: "Reaktör, tank ve proses destek ekipmanlarıyla güvenli ve kontrollü üretim kurguları.",
    heroTitle: "Kimya ve Proses Endüstrisi",
    heroDescription:
      "Kimyasal ve proses hatlarında reaktör, tank, çözündürme, so�xutma, dozajlama ve transfer ekipmanları ile kontrollü ve güvenli üretim altyapıları sunuyoruz.",
    heroImage: "/images/01-genel/proses1.png",
    primaryEyebrow: "Temel Yakla�xım",
    primaryTitle: "Proses yapısı ve ekipman yakla�xımı",
    primaryDescription:
      "Kimya ve proses hatlarında ekipman seçimi; ürünün viskozitesi, kimyasal uyumlulu�xu, sıcaklık ihtiyacı ve çalı�xma �xekline göre �xekillenir.",
    primaryCards: [
      { title: "Kimyasal uyumluluk", text: "Gövde malzemesi, conta yapısı ve ba�xlantılar kimyasal karaktere uygun seçilmelidir." },
      { title: "�!alı�xma modu", text: "Batch veya sürekli çalı�xma mantı�xı, tank ve reaktör düzenini do�xrudan etkiler." },
      { title: "Sıcaklık yönetimi", text: "Isıtma veya so�xutma ihtiyacı, proses verimlili�xi ve ekipman yapısını belirler." },
    ],
    offerEyebrow: "Sunulan �!özümler",
    offerTitle: "Kimya ve proses endüstrisi için sundu�xumuz çözümler",
    offerDescription:
      "Karı�xtırma, çözündürme, reaksiyon ve transfer süreçlerini bir arada dü�xünerek güvenli ve sürdürülebilir tesis altyapıları kuruyoruz.",
    offerCards: [
      { title: "Proses tasarımı", text: "Karı�xım, reaksiyon ve akı�x adımlarını ürün yapısına göre kurguluyoruz." },
      { title: "Ekipman seçimi", text: "Reaktör, tank ve dozaj sistemlerini proses ihtiyaçlarına göre netle�xtiriyoruz." },
      { title: "Otomasyon ve kontrol", text: "Sıcaklık, basınç ve dozaj takibini süreçle uyumlu hale getiriyoruz." },
      { title: "Hat yerle�ximi", text: "Bakım eri�ximi, güvenlik ve proses akı�xını birlikte gözeten saha planı olu�xturuyoruz." },
      { title: "Revizyon ve modernizasyon", text: "Mevcut kimya hatlarında kapasite ve proses iyile�xtirme çalı�xmaları yapıyoruz." },
      { title: "Kurulum ve devreye alma", text: "Montaj, entegrasyon ve i�xletmeye alma adımlarını tek merkezden yürütüyoruz." },
    ],
    equipmentEyebrow: "Makine ve Ekipman",
    equipmentTitle: "Kimya ve proses endüstrisinde kullanılan ba�xlıca makine ve ekipmanlar",
    equipmentDescription:
      "Kimyasal proseslerde ekipmanlar yalnızca kapasiteye göre de�xil; güvenlik, sızdırmazlık ve ürün uyumlulu�xu açısından da birlikte de�xerlendirilmelidir.",
    equipmentCards: [
      { title: "Karı�xtırıcılı reaktörler", text: "Homojen karı�xım ve kontrollü reaksiyon için ana ekipman görevini üstlenir." },
      { title: "Basınçlı reaktörler", text: "�zel proses ko�xullarında güvenli reaksiyon ortamı sa�xlar." },
      { title: "�!özündürme tankları", text: "Toz ve sıvı hammaddelerin kontrollü çözündürülmesine yardımcı olur." },
      { title: "So�xutma ve stok tankları", text: "�Srün sıcaklı�xını dengelemek ve ara stoklama yapmak için kullanılır." },
      { title: "Dozajlama sistemleri", text: "Kimyasal akı�xların hassas ve kontrollü �xekilde beslenmesini sa�xlar." },
      { title: "Transfer hatları", text: "�Srünü proses boyunca güvenli biçimde yönlendirir ve aktarır." },
      { title: "Yardımcı akı�x ekipmanları", text: "Vana, pompa ve kontrol noktaları ile sistem akı�xını destekler." },
      { title: "Kontrol panoları", text: "Batch ve proses parametrelerinin izlenmesini ve yönetimini sa�xlar." },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Kimya ve proses endüstrisi hakkında sık sorulan sorular",
    faqDescription: "Kimya tesislerinde ekipman seçimi, çalı�xma �xekli ve güvenlik gereksinimlerine dair sık sorulan ba�xlıkları derledik.",
    faqs: [
      { question: "Batch ve sürekli sistem arasında nasıl seçim yapılır?", answer: "Seçim, ürün çe�xitlili�xi, üretim hacmi ve proses kararlılı�xı beklentisine göre yapılır." },
      { question: "Basınçlı sistem her uygulamada gerekli midir?", answer: "Hayır, basınçlı sistem ihtiyacı ürün yapısı ve proses ko�xullarına göre belirlenir." },
      { question: "Paslanmaz ekipman ne zaman tercih edilmelidir?", answer: "Korozyon riski, hijyen ihtiyacı ve ürün saflı�xı beklentisi olan uygulamalarda tercih edilir." },
      { question: "Mevcut tesise yeni tank veya reaktör eklenebilir mi?", answer: "Evet, mevcut proses akı�xı ve saha ko�xulları analiz edilerek yeni ekipman entegre edilebilir." },
      { question: "Otomasyon altyapısı proje kapsamına dahil edilebilir mi?", answer: "Evet, dozaj, sıcaklık ve basınç takibini yöneten otomasyon çözümleri proje kapsamına alınabilir." },
    ],
  },
  "geri-donusum-ve-atik-yonetimi": {
    heroBadge: "GERİ D�N�S�~�SM VE ATIK Y�NETİMİ �!�Z�SMLERİ",
    heroIntro: "Ayrı�xtırma, küçültme ve geri kazanım için esnek ve kontrollü proses sistemleri.",
    heroTitle: "Geri Dönü�xüm ve Atık Yönetimi",
    heroDescription:
      "Katı atık, endüstriyel atık ve geri kazanılabilir materyallerin ayrı�xtırılması, küçültülmesi, ta�xınması ve prosese uygun hazırlanması için ekipman ve tesis çözümleri sunuyoruz.",
    heroImage: "/images/01-genel/geridonusum1.jpg",
    primaryEyebrow: "Temel Yakla�xım",
    primaryTitle: "İ�xlenen atık tipi ve sistem kurgusu",
    primaryDescription:
      "Geri dönü�xüm hatlarında atı�xın heterojenli�xi, yabancı madde riski ve hedef geri kazanım çıktısı sistem kurgusunu do�xrudan belirler.",
    primaryCards: [
      { title: "Atık karakteri", text: "Evsel, plastik, metal veya karı�xık akı�xların her biri farklı boyut küçültme ve ayırma mantı�xı gerektirir." },
      { title: "Boyutlandırma ihtiyacı", text: "İlk kırma ve sonraki eleme adımları, hedef son ürün beklentisine göre �xekillenir." },
      { title: "Hat güvenli�xi", text: "Yabancı madde ve zorlu akı�xlar nedeniyle ekipman koruması sistem tasarımının parçası olmalıdır." },
    ],
    offerEyebrow: "Sunulan �!özümler",
    offerTitle: "Geri dönü�xüm ve atık yönetimi için sundu�xumuz çözümler",
    offerDescription:
      "Atık kabulünden küçültmeye, ayırmadan son ürün hazırlamaya kadar tüm süreci birbirini tamamlayan sistemlerle kurguluyoruz.",
    offerCards: [
      { title: "Proses tasarımı", text: "Atık tipi ve hedef son ürün yapısına göre kırma, ayırma ve transfer akı�xını olu�xturuyoruz." },
      { title: "Küçültme çözümleri", text: "Shredder ve kırıcı sistemlerini atı�xın karakterine göre belirliyoruz." },
      { title: "Ayırma ve eleme", text: "Farklı fraksiyonları verimli biçimde ayıran sistemleri projeye entegre ediyoruz." },
      { title: "Transfer altyapısı", text: "Atık akı�xını güvenli ve sürekli ta�xıyan konveyör ve besleme çözümleri geli�xtiriyoruz." },
      { title: "�!evresel kontrol", text: "Toz, emisyon ve saha güvenli�xi ba�xlıklarını süreçle birlikte planlıyoruz." },
      { title: "Kurulum ve devreye alma", text: "İmalat, saha kurulumu ve i�xletmeye alma süreçlerini kontrollü biçimde yürütüyoruz." },
    ],
    equipmentEyebrow: "Makine ve Ekipman",
    equipmentTitle: "Geri dönü�xüm ve atık yönetiminde kullanılan ba�xlıca makine ve ekipmanlar",
    equipmentDescription:
      "Atık i�xleme hatlarında ekipmanlar, güvenlik ve esneklik ihtiyacı dikkate alınarak bir bütün halinde de�xerlendirilmelidir.",
    equipmentCards: [
      { title: "Shredder sistemleri", text: "Heterojen atık akı�xlarında ilk kademe küçültme görevi üstlenir." },
      { title: "Primer kırıcılar", text: "Daha büyük ve zorlu atık fraksiyonlarını yönetilebilir boyuta indirir." },
      { title: "Sekonder kırıcılar", text: "Sonraki ayırma ve eleme adımlarına uygun ürün boyutu olu�xturur." },
      { title: "Eleme sistemleri", text: "Farklı fraksiyonları ayırarak geri kazanım verimini artırır." },
      { title: "Ayırma üniteleri", text: "�Srün ve atık akı�xlarının kontrollü �xekilde ayrı�xmasını destekler." },
      { title: "Konveyör ve besleme hatları", text: "Hat içi transferi kesintisiz ve güvenli biçimde sürdürür." },
      { title: "Toz kontrol sistemleri", text: "Tozlu proses noktalarında emi�x ve filtrasyon deste�xi verir." },
      { title: "Son ürün hazırlama ekipmanları", text: "Geri kazanılan ürünün stoklama veya sevkiyat öncesi hazırlanmasını sa�xlar." },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Geri dönü�xüm ve atık yönetimi hakkında sık sorulan sorular",
    faqDescription: "Atık yönetimi projelerinde kapasite, hat esnekli�xi ve küçültme mantı�xına dair temel soruları yanıtladık.",
    faqs: [
      { question: "Tek bir hatla farklı atık türleri i�xlenebilir mi?", answer: "Evet, uygun ön ayırma ve modüler ekipman seçimi ile farklı akı�xlar aynı tesiste yönetilebilir." },
      { question: "Mobil ve sabit tesis seçimi nasıl yapılır?", answer: "Saha yapısı, atık kayna�xı, kapasite ve lojistik gereksinimleri birlikte de�xerlendirilerek karar verilir." },
      { question: "Shredder ile kırıcı birlikte kullanılmalı mı?", answer: "Bu karar, giri�x malzemesinin boyutu ve hedef çıkı�x yapısına göre belirlenir." },
      { question: "Toz kontrolü hangi hatlarda kritik hale gelir?", answer: "İnce fraksiyon olu�xturan ve kapalı ortamda çalı�xan hatlarda toz kontrolü daha kritik hale gelir." },
      { question: "Mevcut bir geri dönü�xüm hattı modernize edilebilir mi?", answer: "Evet, mevcut ekipman parkı analiz edilerek kapasite ve proses iyile�xtirmesi yapılabilir." },
    ],
  },
  "atik-su-camuru-ve-aritma-cozumleri": {
    heroBadge: "ATIK SU �!AMURU VE ARITMA �!�Z�SMLERİ",
    heroIntro: "�!amur i�xleme, susuzla�xtırma ve kurutma süreçleri için kontrollü tesis kurguları.",
    heroTitle: "Atık Su �!amuru ve Arıtma �!özümleri",
    heroDescription:
      "Atık su arıtma süreçlerinden çıkan çamurun susuzla�xtırılması, kurutulması, ta�xınması ve i�xlenmesi için ekipman ve tesis çözümleri sunuyoruz.",
    heroImage: "/images/atik su camuru/sucamuru1.jpg",
    primaryEyebrow: "Temel Yakla�xım",
    primaryTitle: "Giri�x çamuru özellikleri ve proses yakla�xımı",
    primaryDescription:
      "Atık su çamuru çözümlerinde sistem tasarımı; giri�x nemi, akı�x davranı�xı, yapı�xkanlık ve hedef son ürün beklentisine göre belirlenir.",
    primaryCards: [
      { title: "Giri�x nemi", text: "Kurutma sistemi, enerji ihtiyacı ve hat ölçe�xi giri�x nemine göre �xekillenir." },
      { title: "Akı�x ve yapı�xkanlık", text: "Ta�xıma ve besleme ekipmanlarının seçimi çamurun fiziksel davranı�xına göre yapılır." },
      { title: "Hedef çıkı�x ko�xulu", text: "Kuruluk seviyesi ve son kullanım amacı, proses kurgusunun ana belirleyicilerindendir." },
    ],
    offerEyebrow: "Sunulan �!özümler",
    offerTitle: "Atık su çamuru ve arıtma çözümleri için sundu�xumuz çözümler",
    offerDescription:
      "Susuzla�xtırma, kurutma, transfer ve son ürün yönetimi ba�xlıklarını bir bütün halinde ele alarak sahaya uygun çözümler sunuyoruz.",
    offerCards: [
      { title: "Proses tasarımı", text: "�!amur karakterine ve hedef nem seviyesine göre süreç akı�xını planlıyoruz." },
      { title: "Kurutma ve destek kurgusu", text: "Kurutma hattı ile yardımcı ekipmanları aynı proses dengesi içinde belirliyoruz." },
      { title: "Ta�xıma ve besleme sistemleri", text: "Yapı�xkan ve zor akan çamurlar için güvenli akı�x çözümleri geli�xtiriyoruz." },
      { title: "Enerji optimizasyonu", text: "Kurutma ve transfer a�xamalarını enerji verimlili�xiyle birlikte de�xerlendiriyoruz." },
      { title: "Koku ve emisyon kontrolü", text: "�!evresel kontrol ihtiyaçlarını hat tasarımının ayrılmaz parçası olarak planlıyoruz." },
      { title: "Kurulum ve devreye alma", text: "İmalat, saha kurulumu ve i�xletmeye alma sürecini kontrollü biçimde yürütüyoruz." },
    ],
    equipmentEyebrow: "Makine ve Ekipman",
    equipmentTitle: "Atık su çamuru ve arıtma çözümlerinde kullanılan ba�xlıca makine ve ekipmanlar",
    equipmentDescription:
      "Bu tesislerde ekipmanlar, çamurun fiziksel karakteri ve hedef son ürün yapısına göre birlikte de�xerlendirilmelidir.",
    equipmentCards: [
      { title: "Susuzla�xtırma sistemleri", text: "�!amur hacmini azaltarak sonraki proses adımlarını kolayla�xtırır." },
      { title: "Kurutma hatları", text: "Hedef çıkı�x nemine ula�xmak için kontrollü kurutma uygular." },
      { title: "�!amur ta�xıma hatları", text: "Yapı�xkan akı�xları güvenli ve sürekli biçimde transfer eder." },
      { title: "Besleme sistemleri", text: "Kurutma ve son ürün a�xamalarına kararlı besleme yapar." },
      { title: "Depolama üniteleri", text: "Ara stok ve tampon kapasite olu�xturarak sistem dengesini destekler." },
      { title: "Eleme ve ayırma sistemleri", text: "Yabancı madde ve fraksiyon ayrımı gereken noktalarda görev alır." },
      { title: "Toz ve koku kontrol sistemleri", text: "Emisyon yönetimi ve saha konforu için destek altyapısı sa�xlar." },
      { title: "Son ürün yönetim ekipmanları", text: "Kurutulmu�x veya i�xlenmi�x ürünün çıkı�x ve sevkiyat a�xamasını tamamlar." },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Atık su çamuru ve arıtma çözümleri hakkında sık sorulan sorular",
    faqDescription: "Arıtma projelerinde nem, enerji ve son ürün yönetimiyle ilgili en sık sorulan ba�xlıkları özetledik.",
    faqs: [
      { question: "Giri�x çamur nemi çok yüksekse hangi sistem tercih edilir?", answer: "Bu durumda susuzla�xtırma ve kurutma a�xamaları birlikte de�xerlendirilerek uygun kombinasyon belirlenir." },
      { question: "Kurutulmu�x ürün depolanabilir mi?", answer: "Evet, hedef son ürün yapısına göre uygun depolama ve sevkiyat altyapısı planlanabilir." },
      { question: "Koku kontrolü bu tesislerde zorunlu mudur?", answer: "Birçok uygulamada koku kontrolü çevresel uyum ve i�xletme konforu açısından önemli bir ihtiyaçtır." },
      { question: "Mevcut arıtma tesisine kurutma hattı eklenebilir mi?", answer: "Evet, saha ve mevcut akı�x incelenerek yeni kurutma ve transfer hatları entegre edilebilir." },
      { question: "Son ürün hazırlama sistemi proje kapsamına dahil olur mu?", answer: "Evet, son ürünün depolama ve sevkiyat ihtiyacı proje kapsamında ele alınabilir." },
    ],
  },
  "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri": {
    heroBadge: "YEM, TOZ VE D�KME KATI MALZEME İ�~LEME �!�Z�SMLERİ",
    heroIntro: "Depolama, dozajlama ve transfer süreçleri için düzenli ve verimli tesis çözümleri.",
    heroTitle: "Yem, Toz ve Dökme Katı Malzeme İ�xleme Sistemleri",
    heroDescription:
      "Yem, un, premiks, mineral ve benzeri dökme katı ürünlerde depolama, dozajlama, ta�xıma, eleme, bo�xaltma ve son ürün hazırlama süreçleri için ekipman ve tesis çözümleri sunuyoruz.",
    heroImage: "/images/01-genel/yem1.jpg",
    primaryEyebrow: "Temel Yakla�xım",
    primaryTitle: "Malzeme tipi ve akı�x / dozajlama yakla�xımı",
    primaryDescription:
      "Dökme katı malzeme i�xleme hatlarında akı�x davranı�xı, toz olu�xumu, dozaj hassasiyeti ve son ürün lojisti�xi birlikte de�xerlendirilmelidir.",
    primaryCards: [
      { title: "Akı�x davranı�xı", text: "Malzemenin köprülenme e�xilimi ve akı�xkanlı�xı bunker ile besleme tasarımını belirler." },
      { title: "Dozaj hassasiyeti", text: "Reçete do�xrulu�xu gereken hatlarda tartım ve dozaj sistemleri kritik rol oynar." },
      { title: "Son hat ihtiyacı", text: "Paketleme, yükleme ve sevkiyat kurgusu, ana proses akı�xıyla birlikte planlanmalıdır." },
    ],
    offerEyebrow: "Sunulan �!özümler",
    offerTitle: "Yem, toz ve dökme katı malzeme i�xleme için sundu�xumuz çözümler",
    offerDescription:
      "Depolama, dozajlama, ta�xıma ve son ürün hazırlama adımlarını birbirini tamamlayan ekipmanlarla tek sistem içinde kuruyoruz.",
    offerCards: [
      { title: "Proses tasarımı", text: "Malzeme karakteri ve kapasiteye göre hat akı�xını teknik olarak planlıyoruz." },
      { title: "Depolama ve besleme", text: "Silo ve bunker düzenini ürün davranı�xına göre yapılandırıyoruz." },
      { title: "Dozajlama sistemleri", text: "Reçete do�xrulu�xunu destekleyen tartım ve dozaj çözümleri geli�xtiriyoruz." },
      { title: "Transfer altyapısı", text: "Helezon, konveyör ve elevatör hatlarını proses dengesiyle uyumlu kuruyoruz." },
      { title: "Eleme ve son ürün hazırlama", text: "�Srün standardını destekleyen eleme ve çıkı�x çözümlerini projelendiriyoruz." },
      { title: "Kurulum ve devreye alma", text: "İmalat, montaj ve i�xletmeye alma sürecini tek merkezden yönetiyoruz." },
    ],
    equipmentEyebrow: "Makine ve Ekipman",
    equipmentTitle: "Yem, toz ve dökme katı malzeme i�xleme için kullanılan ba�xlıca makine ve ekipmanlar",
    equipmentDescription:
      "Bu tesislerde kullanılan ekipmanlar, ürün akı�xını kesintisiz sürdürecek ve reçete do�xrulu�xunu koruyacak �xekilde seçilmelidir.",
    equipmentCards: [
      { title: "Silo ve bunkerler", text: "�Srünlerin güvenli depolanmasını ve tamponlanmasını sa�xlar." },
      { title: "Besleme sistemleri", text: "Malzemenin hatta kararlı ve kontrollü biçimde verilmesini sa�xlar." },
      { title: "Dozajlama sistemleri", text: "Hassas tartım ve reçete uyumlu besleme için kullanılır." },
      { title: "Dozaj kantarları", text: "Do�xru oranlarda tartım yaparak ürün standardını destekler." },
      { title: "Helezon ve konveyörler", text: "Yatay transfer noktalarında güvenli malzeme akı�xı olu�xturur." },
      { title: "Elevatör sistemleri", text: "Dikey ürün transferi gereken bölgelerde görev alır." },
      { title: "Eleme sistemleri", text: "Fraksiyon ayrımı ve ürün standardı sa�xlar." },
      { title: "Paketleme ve son hat", text: "Torbalama, paletleme ve sevkiyat hazırlı�xını tamamlar." },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Yem, toz ve dökme katı malzeme i�xleme sistemleri hakkında sık sorulan sorular",
    faqDescription: "Depolama, dozajlama ve son ürün lojisti�xiyle ilgili sık sorulan ba�xlıkları bir araya getirdik.",
    faqs: [
      { question: "Aynı hatta birden fazla ürün i�xlenebilir mi?", answer: "Evet, ürün geçi�xi ve temizlik gereksinimi dikkate alınarak çoklu ürün kurgusu yapılabilir." },
      { question: "Dozajlama her hatta gerekli midir?", answer: "Hayır, dozajlama ihtiyacı ürün reçetesi ve kalite beklentisine göre belirlenir." },
      { question: "Silo kapasitesi nasıl belirlenir?", answer: "Silo kapasitesi günlük tüketim, sevkiyat planı ve malzeme yo�xunlu�xuna göre hesaplanır." },
      { question: "Paketleme hattı sonradan eklenebilir mi?", answer: "Evet, yerle�xim buna uygun hazırlanmı�xsa paketleme sistemleri sonradan entegre edilebilir." },
      { question: "Hijyenik tasarım gereken hatlarda özel çözüm sunuyor musunuz?", answer: "Evet, ürün tipine göre hijyenik tasarım ve uygun malzeme seçimiyle özel çözümler geli�xtiriyoruz." },
    ],
  },
};
