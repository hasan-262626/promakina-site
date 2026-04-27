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
    heroBadge: "KOMPOST VE ORGANİK ATIK İŞLEME ÇÖZÜMLERİ",
    heroIntro: "Organik atıkları kontrollü biçimde kompost ve son ürüne dönüştüren tesis yaklaşımları.",
    heroTitle: "Kompost ve Organik Atık Tesisleri",
    heroDescription:
      "Evsel, tarımsal ve hayvansal organik atıkların kontrollü işlenmesi için kompost, kurutma, eleme ve son ürün hazırlama süreçlerine uygun tesis çözümleri sunuyoruz.",
    heroImage: "/images/kompost1.jpg",
    primaryEyebrow: "Temel Yaklaşım",
    primaryTitle: "İşlenen organik materyaller ve proses yaklaşımı",
    primaryDescription:
      "Kompost tesislerinde sistem kurgusu; organik girdinin nemi, lif yapısı, karışım karakteri ve hedef son ürün beklentisine göre şekillenir.",
    primaryCards: [
      { title: "Girdi karakteri", text: "Evsel, hayvansal veya tarımsal organik atıkların her biri farklı hazırlama ve işlem adımları gerektirir." },
      { title: "Nem ve yapı dengesi", text: "Nem seviyesi ile organik yapının akış davranışı, tambur ve son ürün hattı seçiminde belirleyici olur." },
      { title: "Son ürün hedefi", text: "Kompost, kurutulmuş ürün veya zenginleştirilmiş ürün hedefi tesisin eleme ve son hat mantığını değiştirir." },
    ],
    offerEyebrow: "Sunulan Çözümler",
    offerTitle: "Kompost ve organik atık işleme için sunduğumuz çözümler",
    offerDescription:
      "Atık kabulünden son ürün hazırlama aşamasına kadar süreci tek bir proses mantığında ele alıyor, sahaya uygun çözümler geliştiriyoruz.",
    offerCards: [
      { title: "Proses tasarımı", text: "Atık tipi, nem seviyesi ve hedef son ürüne göre tesis akışını teknik olarak kurguluyoruz." },
      { title: "Hat yerleşimi", text: "Besleme, tambur, eleme ve stok noktalarını saha lojistiğiyle uyumlu şekilde planlıyoruz." },
      { title: "Kurutma ve olgunlaştırma", text: "Organik akışın ihtiyacına göre tambur kurutma ve kontrollü olgunlaştırma çözümleri sunuyoruz." },
      { title: "Eleme ve son ürün hazırlama", text: "Son ürün standardını destekleyen eleme, sınıflandırma ve çıkış çözümleri geliştiriyoruz." },
      { title: "Koku ve toz kontrolü", text: "Çevresel uyum için emiş, filtrasyon ve kapalı akış noktalarını sürece dahil ediyoruz." },
      { title: "Kurulum ve devreye alma", text: "İmalat, saha montajı ve işletmeye alma adımlarını kontrollü biçimde yönetiyoruz." },
    ],
    equipmentEyebrow: "Makine ve Ekipman",
    equipmentTitle: "Kompost ve organik atık işleme için kullanılan başlıca makine ve ekipmanlar",
    equipmentDescription:
      "Kompost hatlarında kullanılan ekipmanlar, girdi karakterine ve hedef son ürün yapısına göre birbiriyle uyumlu şekilde seçilmelidir.",
    equipmentCards: [
      { title: "Besleme bunkerleri", text: "Organik girdinin hatta kontrollü ve güvenli biçimde alınmasını sağlar." },
      { title: "Karıştırma sistemleri", text: "Farklı organik fraksiyonların dengeli biçimde bir araya gelmesini destekler." },
      { title: "Olgunlaştırma tamburları", text: "Kompostun kontrollü ilerlemesini ve homojen olgunlaşmasını sağlar." },
      { title: "Kurutma tamburları", text: "Yüksek nemli organik akışlarda hacim azaltma ve nem düşürme için kullanılır." },
      { title: "Eleme sistemleri", text: "Son ürünü istenen fraksiyonlara ayırarak kalite standardını destekler." },
      { title: "Konveyör ve transfer hatları", text: "Hazırlama, tambur ve son ürün noktaları arasında kesintisiz akış kurar." },
      { title: "Toz ve koku kontrol sistemleri", text: "Emisyon yönetimi ve saha güvenliği için destek altyapısı sağlar." },
      { title: "Paketleme ve son hat", text: "Hazırlanan son ürünün torbalama veya sevkiyat öncesi çıkışını tamamlar." },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Kompost ve organik atık tesisleri hakkında sık sorulan sorular",
    faqDescription: "Kompost yatırımlarında en sık karşılaşılan teknik ve operasyonel başlıkları tek yerde topladık.",
    faqs: [
      { question: "Farklı organik atık tipleri aynı tesiste işlenebilir mi?", answer: "Evet, uygun ön hazırlık ve proses ayrımı ile farklı organik akışlar tek tesiste yönetilebilir." },
      { question: "Kurutma her kompost tesisinde gerekli midir?", answer: "Hayır, kurutma ihtiyacı atığın nemine, depolama planına ve hedef son ürün yapısına göre belirlenir." },
      { question: "Koku kontrolü nasıl planlanır?", answer: "Koku kontrolü; emiş noktaları, filtreleme ve saha hava akışı birlikte değerlendirilerek projelendirilir." },
      { question: "Son ürün kalitesi nasıl korunur?", answer: "Karışım dengesi, tambur süresi, eleme doğruluğu ve nem yönetimi birlikte ele alınmalıdır." },
      { question: "Mevcut sahaya kompost hattı entegre edilebilir mi?", answer: "Evet, saha koşulları ve mevcut akışlar incelenerek uygun entegrasyon planı yapılabilir." },
    ],
  },
  "enerji-ve-biyogaz-sistemleri": {
    heroBadge: "ENERJİ VE BİYOGAZ PROSES ÇÖZÜMLERİ",
    heroIntro: "Organik girdileri enerji geri kazanımına hazırlayan kontrollü proses ve ekipman çözümleri.",
    heroTitle: "Enerji ve Biyogaz Sistemleri",
    heroDescription:
      "Biyogaz ve enerji odaklı proseslerde organik girdilerin hazırlanması, beslenmesi, aktarılması ve destek ekipmanlarının kurulumu için teknik çözümler sunuyoruz.",
    heroImage: "/images/biogaz1.jpg",
    primaryEyebrow: "Temel Yaklaşım",
    primaryTitle: "Girdi yapısı ve proses sistemi yaklaşımı",
    primaryDescription:
      "Biyogaz ve enerji sistemlerinde hat kurgusu; girdinin akış davranışı, nemi, lif yapısı ve besleme sürekliliği ihtiyacına göre planlanır.",
    primaryCards: [
      { title: "Girdi tipi", text: "Tarımsal, hayvansal veya gıda kaynaklı akışlar için hazırlama ve besleme mantığı farklılaşır." },
      { title: "Besleme sürekliliği", text: "Kararlı besleme, biyogaz proseslerinde işletme performansı açısından kritik öneme sahiptir." },
      { title: "Yan ürün yönetimi", text: "Son ürün ve yan akışların nasıl yönetileceği, ana sistem kurgusunun bir parçası olarak ele alınır." },
    ],
    offerEyebrow: "Sunulan Çözümler",
    offerTitle: "Enerji ve biyogaz prosesleri için sunduğumuz çözümler",
    offerDescription:
      "Ön hazırlık, dozajlama, transfer ve yardımcı akış ekipmanlarını aynı proses disiplini içinde değerlendirerek çözüm geliştiriyoruz.",
    offerCards: [
      { title: "Girdi hazırlama", text: "Organik girdileri prosesin ihtiyacına uygun forma getiren hazırlama çözümleri sunuyoruz." },
      { title: "Besleme ve dozajlama", text: "Kararlı ve kontrollü besleme için bunker, dozaj ve transfer mantığını planlıyoruz." },
      { title: "Transfer altyapısı", text: "Hat içi akışı güvenli ve sürekli kılan konveyör, helezon ve yardımcı ekipmanları belirliyoruz." },
      { title: "Koku ve çevresel kontrol", text: "Organik akışlarda çevresel kontrol ihtiyacını saha planı ile birlikte ele alıyoruz." },
      { title: "Revizyon ve entegrasyon", text: "Mevcut biyogaz veya enerji hatlarına yeni ekipman ve proses desteği entegre ediyoruz." },
      { title: "Kurulum ve devreye alma", text: "İmalat, montaj ve devreye alma sürecini tek merkezden yönetiyoruz." },
    ],
    equipmentEyebrow: "Makine ve Ekipman",
    equipmentTitle: "Enerji ve biyogaz sistemlerinde kullanılan başlıca makine ve ekipmanlar",
    equipmentDescription:
      "Bu sistemlerde kullanılan ekipmanlar, zorlu girdi yapılarında dayanıklılık ve sürekli besleme performansı sağlayacak şekilde seçilir.",
    equipmentCards: [
      { title: "Girdi bunkerleri", text: "Organik girdilerin kontrollü kabulü ve tamponlanması için kullanılır." },
      { title: "Hazırlama konveyörleri", text: "Ön hazırlık ve proses giriş noktaları arasında dengeli transfer sağlar." },
      { title: "Dozajlama sistemleri", text: "Belirlenen debide düzenli ve kontrollü besleme yapar." },
      { title: "Helezon transfer hatları", text: "Nemli ve lifli akışların kontrollü taşınmasında görev alır." },
      { title: "Depolama üniteleri", text: "Ara stoklama ve proses tamponlaması için güvenli kapasite sunar." },
      { title: "Yardımcı akış sistemleri", text: "Hat içi yönlendirme ve akış sürekliliğini destekler." },
      { title: "Toz ve koku kontrol sistemleri", text: "Çevresel performans ve saha güvenliği için destek sağlar." },
      { title: "Kontrol ve otomasyon panoları", text: "Besleme senkronizasyonu ve proses izleme altyapısını yönetir." },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Enerji ve biyogaz sistemleri hakkında sık sorulan sorular",
    faqDescription: "Biyogaz ve enerji projelerinde girdi, kapasite ve saha kurgusuna dair sık sorulan başlıkları derledik.",
    faqs: [
      { question: "Farklı organik girdiler aynı hatta beslenebilir mi?", answer: "Evet, uygun ön hazırlık ve dozajlama yapısı ile farklı girdiler aynı sistem içinde yönetilebilir." },
      { question: "Günlük besleme kapasitesi nasıl belirlenir?", answer: "Besleme kapasitesi girdi tipi, proses planı ve çalışma saatine göre netleştirilir." },
      { question: "Koku kontrolü bu tesislerde zorunlu mudur?", answer: "Birçok sahada koku yönetimi hem çevresel uyum hem de işletme konforu açısından önemli bir ihtiyaçtır." },
      { question: "Mevcut biyogaz tesisine yeni besleme sistemi eklenebilir mi?", answer: "Evet, mevcut altyapı incelenerek yeni ekipmanlar sisteme uygun biçimde entegre edilebilir." },
      { question: "Yan ürün yönetimi de proje kapsamına dahil olur mu?", answer: "Evet, son ürün ve yan akışların yönetimi proje kurgusunun önemli bir parçası olarak ele alınır." },
    ],
  },
  "madencilik-ve-mineral-isleme": {
    heroBadge: "MADENCİLİK VE MİNERAL İŞLEME ÇÖZÜMLERİ",
    heroIntro: "Kırma, eleme, transfer ve kurutma süreçleri için dengeli ve güçlü tesis kurguları.",
    heroTitle: "Madencilik ve Mineral İşleme",
    heroDescription:
      "Agrega, mineral ve cevher hazırlama hatlarında kırma, eleme, sınıflandırma, besleme, kurutma ve transfer süreçleri için proses ve ekipman çözümleri sunuyoruz.",
    heroImage: "/images/maden1.jpg",
    primaryEyebrow: "Temel Yaklaşım",
    primaryTitle: "İşlenen malzeme yapısı ve proses mantığı",
    primaryDescription:
      "Madencilik ve mineral işleme hatlarında ekipman seçimi; malzemenin sertliği, aşındırıcılığı, giriş boyutu ve hedef çıkış fraksiyonuna göre belirlenir.",
    primaryCards: [
      { title: "Malzeme sertliği", text: "Kırıcı tipi, gövde yapısı ve sarf seçimi sertlik değerine göre şekillenir." },
      { title: "Fraksiyon beklentisi", text: "Hedef ürün boyutu; kırma-eleme kademe sayısını ve elek mantığını belirler." },
      { title: "Transfer dengesi", text: "Besleme, stok ve çıkış akışının dengesi tüm hattın kararlı çalışması için gereklidir." },
    ],
    offerEyebrow: "Sunulan Çözümler",
    offerTitle: "Madencilik ve mineral işleme için sunduğumuz çözümler",
    offerDescription:
      "Kırma, eleme, kurutma ve transfer adımlarını tek bir proses mantığında değerlendirerek sahaya özel çözümler üretiyoruz.",
    offerCards: [
      { title: "Proses tasarımı", text: "Malzeme karakteri ve hedef ürün yapısına göre kırma-eleme akışını kurguluyoruz." },
      { title: "Kırıcı ve elek seçimi", text: "Sertlik, aşındırıcılık ve kapasite beklentisine göre ekipmanları belirliyoruz." },
      { title: "Hat yerleşimi", text: "Bunker, transfer ve stok noktalarını saha lojistiğine uygun şekilde planlıyoruz." },
      { title: "Kurutma ve soğutma çözümleri", text: "Nem ve sıcaklık kontrolü gereken akışlar için destek prosesler geliştiriyoruz." },
      { title: "Toz kontrolü", text: "Toz oluşan noktalarda emiş ve filtrasyon çözümlerini hatla birlikte ele alıyoruz." },
      { title: "Kurulum ve devreye alma", text: "İmalat, montaj ve devreye alma sürecini kontrollü biçimde yönetiyoruz." },
    ],
    equipmentEyebrow: "Makine ve Ekipman",
    equipmentTitle: "Madencilik ve mineral işleme için kullanılan başlıca makine ve ekipmanlar",
    equipmentDescription:
      "Kırma ve eleme hatlarında tüm ekipmanların aynı kapasite ve akış mantığında dengelenmesi, tesis verimi açısından kritik önemdedir.",
    equipmentCards: [
      { title: "Primer kırıcılar", text: "İri boyutlu malzemelerin ilk kademe küçültülmesinde görev alır." },
      { title: "Sekonder kırıcılar", text: "Ürünü hedef fraksiyona yaklaştıran ikinci kademe kırma işlemini yapar." },
      { title: "Elek sistemleri", text: "Ürünü istenen boyutlara ayırarak sınıflandırma doğruluğu sağlar." },
      { title: "Besleyiciler", text: "Kırıcı ve elek hatlarına kararlı malzeme beslemesi yapar." },
      { title: "Bunker ve stok üniteleri", text: "Ara stok ve kontrollü akış için tampon kapasite sunar." },
      { title: "Konveyör ve transfer hatları", text: "Hat içi taşımayı güvenli ve sürekli biçimde tamamlar." },
      { title: "Kurutma tamburları", text: "Nemli mineral akışları için kontrollü kurutma desteği sağlar." },
      { title: "Soğutma sistemleri", text: "Kurutma sonrası ürün sıcaklığını dengeler ve son hat performansını iyileştirir." },
      { title: "Toz toplama sistemleri", text: "Tozlu proses noktalarında çevresel kontrol ve saha güvenliği sağlar." },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Madencilik ve mineral işleme hakkında sık sorulan sorular",
    faqDescription: "Madencilik yatırımlarında en sık gündeme gelen kapasite, ürün boyutu ve hat dengesi sorularını derledik.",
    faqs: [
      { question: "Primer ve sekonder kırma seçimi nasıl yapılır?", answer: "Giriş boyutu, hedef ürün, malzeme sertliği ve kapasite ihtiyacı birlikte değerlendirilerek seçim yapılır." },
      { question: "Aynı hat üzerinde farklı ürün boyutları alınabilir mi?", answer: "Evet, uygun elek ve transfer yapısı ile farklı fraksiyonlar aynı tesiste üretilebilir." },
      { question: "Toz kontrolü her madencilik hattında gerekli midir?", answer: "Özellikle ince ürün ve kapalı alan uygulamalarında toz kontrolü önemli bir ihtiyaçtır." },
      { question: "Mevcut kırma-eleme hattı revize edilebilir mi?", answer: "Evet, mevcut ekipman parkı incelenerek kapasite artışı ve proses iyileştirmesi yapılabilir." },
      { question: "Kurutma ve soğutma ne zaman gerekli olur?", answer: "Malzemenin nemi, hedef kondisyonu ve depolama gereksinimine göre kurutma-soğutma ihtiyacı netleşir." },
    ],
  },
  "kimya-ve-proses-endustrisi": {
    heroBadge: "KİMYA VE PROSES ENDÜSTRİSİ ÇÖZÜMLERİ",
    heroIntro: "Reaktör, tank ve proses destek ekipmanlarıyla güvenli ve kontrollü üretim kurguları.",
    heroTitle: "Kimya ve Proses Endüstrisi",
    heroDescription:
      "Kimyasal ve proses hatlarında reaktör, tank, çözündürme, soğutma, dozajlama ve transfer ekipmanları ile kontrollü ve güvenli üretim altyapıları sunuyoruz.",
    heroImage: "/images/kimya1.jpg",
    primaryEyebrow: "Temel Yaklaşım",
    primaryTitle: "Proses yapısı ve ekipman yaklaşımı",
    primaryDescription:
      "Kimya ve proses hatlarında ekipman seçimi; ürünün viskozitesi, kimyasal uyumluluğu, sıcaklık ihtiyacı ve çalışma şekline göre şekillenir.",
    primaryCards: [
      { title: "Kimyasal uyumluluk", text: "Gövde malzemesi, conta yapısı ve bağlantılar kimyasal karaktere uygun seçilmelidir." },
      { title: "Çalışma modu", text: "Batch veya sürekli çalışma mantığı, tank ve reaktör düzenini doğrudan etkiler." },
      { title: "Sıcaklık yönetimi", text: "Isıtma veya soğutma ihtiyacı, proses verimliliği ve ekipman yapısını belirler." },
    ],
    offerEyebrow: "Sunulan Çözümler",
    offerTitle: "Kimya ve proses endüstrisi için sunduğumuz çözümler",
    offerDescription:
      "Karıştırma, çözündürme, reaksiyon ve transfer süreçlerini bir arada düşünerek güvenli ve sürdürülebilir tesis altyapıları kuruyoruz.",
    offerCards: [
      { title: "Proses tasarımı", text: "Karışım, reaksiyon ve akış adımlarını ürün yapısına göre kurguluyoruz." },
      { title: "Ekipman seçimi", text: "Reaktör, tank ve dozaj sistemlerini proses ihtiyaçlarına göre netleştiriyoruz." },
      { title: "Otomasyon ve kontrol", text: "Sıcaklık, basınç ve dozaj takibini süreçle uyumlu hale getiriyoruz." },
      { title: "Hat yerleşimi", text: "Bakım erişimi, güvenlik ve proses akışını birlikte gözeten saha planı oluşturuyoruz." },
      { title: "Revizyon ve modernizasyon", text: "Mevcut kimya hatlarında kapasite ve proses iyileştirme çalışmaları yapıyoruz." },
      { title: "Kurulum ve devreye alma", text: "Montaj, entegrasyon ve işletmeye alma adımlarını tek merkezden yürütüyoruz." },
    ],
    equipmentEyebrow: "Makine ve Ekipman",
    equipmentTitle: "Kimya ve proses endüstrisinde kullanılan başlıca makine ve ekipmanlar",
    equipmentDescription:
      "Kimyasal proseslerde ekipmanlar yalnızca kapasiteye göre değil; güvenlik, sızdırmazlık ve ürün uyumluluğu açısından da birlikte değerlendirilmelidir.",
    equipmentCards: [
      { title: "Karıştırıcılı reaktörler", text: "Homojen karışım ve kontrollü reaksiyon için ana ekipman görevini üstlenir." },
      { title: "Basınçlı reaktörler", text: "Özel proses koşullarında güvenli reaksiyon ortamı sağlar." },
      { title: "Çözündürme tankları", text: "Toz ve sıvı hammaddelerin kontrollü çözündürülmesine yardımcı olur." },
      { title: "Soğutma ve stok tankları", text: "Ürün sıcaklığını dengelemek ve ara stoklama yapmak için kullanılır." },
      { title: "Dozajlama sistemleri", text: "Kimyasal akışların hassas ve kontrollü şekilde beslenmesini sağlar." },
      { title: "Transfer hatları", text: "Ürünü proses boyunca güvenli biçimde yönlendirir ve aktarır." },
      { title: "Yardımcı akış ekipmanları", text: "Vana, pompa ve kontrol noktaları ile sistem akışını destekler." },
      { title: "Kontrol panoları", text: "Batch ve proses parametrelerinin izlenmesini ve yönetimini sağlar." },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Kimya ve proses endüstrisi hakkında sık sorulan sorular",
    faqDescription: "Kimya tesislerinde ekipman seçimi, çalışma şekli ve güvenlik gereksinimlerine dair sık sorulan başlıkları derledik.",
    faqs: [
      { question: "Batch ve sürekli sistem arasında nasıl seçim yapılır?", answer: "Seçim, ürün çeşitliliği, üretim hacmi ve proses kararlılığı beklentisine göre yapılır." },
      { question: "Basınçlı sistem her uygulamada gerekli midir?", answer: "Hayır, basınçlı sistem ihtiyacı ürün yapısı ve proses koşullarına göre belirlenir." },
      { question: "Paslanmaz ekipman ne zaman tercih edilmelidir?", answer: "Korozyon riski, hijyen ihtiyacı ve ürün saflığı beklentisi olan uygulamalarda tercih edilir." },
      { question: "Mevcut tesise yeni tank veya reaktör eklenebilir mi?", answer: "Evet, mevcut proses akışı ve saha koşulları analiz edilerek yeni ekipman entegre edilebilir." },
      { question: "Otomasyon altyapısı proje kapsamına dahil edilebilir mi?", answer: "Evet, dozaj, sıcaklık ve basınç takibini yöneten otomasyon çözümleri proje kapsamına alınabilir." },
    ],
  },
  "geri-donusum-ve-atik-yonetimi": {
    heroBadge: "GERİ DÖNÜŞÜM VE ATIK YÖNETİMİ ÇÖZÜMLERİ",
    heroIntro: "Ayrıştırma, küçültme ve geri kazanım için esnek ve kontrollü proses sistemleri.",
    heroTitle: "Geri Dönüşüm ve Atık Yönetimi",
    heroDescription:
      "Katı atık, endüstriyel atık ve geri kazanılabilir materyallerin ayrıştırılması, küçültülmesi, taşınması ve prosese uygun hazırlanması için ekipman ve tesis çözümleri sunuyoruz.",
    heroImage: "/images/geridonusum1.jpg",
    primaryEyebrow: "Temel Yaklaşım",
    primaryTitle: "İşlenen atık tipi ve sistem kurgusu",
    primaryDescription:
      "Geri dönüşüm hatlarında atığın heterojenliği, yabancı madde riski ve hedef geri kazanım çıktısı sistem kurgusunu doğrudan belirler.",
    primaryCards: [
      { title: "Atık karakteri", text: "Evsel, plastik, metal veya karışık akışların her biri farklı boyut küçültme ve ayırma mantığı gerektirir." },
      { title: "Boyutlandırma ihtiyacı", text: "İlk kırma ve sonraki eleme adımları, hedef son ürün beklentisine göre şekillenir." },
      { title: "Hat güvenliği", text: "Yabancı madde ve zorlu akışlar nedeniyle ekipman koruması sistem tasarımının parçası olmalıdır." },
    ],
    offerEyebrow: "Sunulan Çözümler",
    offerTitle: "Geri dönüşüm ve atık yönetimi için sunduğumuz çözümler",
    offerDescription:
      "Atık kabulünden küçültmeye, ayırmadan son ürün hazırlamaya kadar tüm süreci birbirini tamamlayan sistemlerle kurguluyoruz.",
    offerCards: [
      { title: "Proses tasarımı", text: "Atık tipi ve hedef son ürün yapısına göre kırma, ayırma ve transfer akışını oluşturuyoruz." },
      { title: "Küçültme çözümleri", text: "Shredder ve kırıcı sistemlerini atığın karakterine göre belirliyoruz." },
      { title: "Ayırma ve eleme", text: "Farklı fraksiyonları verimli biçimde ayıran sistemleri projeye entegre ediyoruz." },
      { title: "Transfer altyapısı", text: "Atık akışını güvenli ve sürekli taşıyan konveyör ve besleme çözümleri geliştiriyoruz." },
      { title: "Çevresel kontrol", text: "Toz, emisyon ve saha güvenliği başlıklarını süreçle birlikte planlıyoruz." },
      { title: "Kurulum ve devreye alma", text: "İmalat, saha kurulumu ve işletmeye alma süreçlerini kontrollü biçimde yürütüyoruz." },
    ],
    equipmentEyebrow: "Makine ve Ekipman",
    equipmentTitle: "Geri dönüşüm ve atık yönetiminde kullanılan başlıca makine ve ekipmanlar",
    equipmentDescription:
      "Atık işleme hatlarında ekipmanlar, güvenlik ve esneklik ihtiyacı dikkate alınarak bir bütün halinde değerlendirilmelidir.",
    equipmentCards: [
      { title: "Shredder sistemleri", text: "Heterojen atık akışlarında ilk kademe küçültme görevi üstlenir." },
      { title: "Primer kırıcılar", text: "Daha büyük ve zorlu atık fraksiyonlarını yönetilebilir boyuta indirir." },
      { title: "Sekonder kırıcılar", text: "Sonraki ayırma ve eleme adımlarına uygun ürün boyutu oluşturur." },
      { title: "Eleme sistemleri", text: "Farklı fraksiyonları ayırarak geri kazanım verimini artırır." },
      { title: "Ayırma üniteleri", text: "Ürün ve atık akışlarının kontrollü şekilde ayrışmasını destekler." },
      { title: "Konveyör ve besleme hatları", text: "Hat içi transferi kesintisiz ve güvenli biçimde sürdürür." },
      { title: "Toz kontrol sistemleri", text: "Tozlu proses noktalarında emiş ve filtrasyon desteği verir." },
      { title: "Son ürün hazırlama ekipmanları", text: "Geri kazanılan ürünün stoklama veya sevkiyat öncesi hazırlanmasını sağlar." },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Geri dönüşüm ve atık yönetimi hakkında sık sorulan sorular",
    faqDescription: "Atık yönetimi projelerinde kapasite, hat esnekliği ve küçültme mantığına dair temel soruları yanıtladık.",
    faqs: [
      { question: "Tek bir hatla farklı atık türleri işlenebilir mi?", answer: "Evet, uygun ön ayırma ve modüler ekipman seçimi ile farklı akışlar aynı tesiste yönetilebilir." },
      { question: "Mobil ve sabit tesis seçimi nasıl yapılır?", answer: "Saha yapısı, atık kaynağı, kapasite ve lojistik gereksinimleri birlikte değerlendirilerek karar verilir." },
      { question: "Shredder ile kırıcı birlikte kullanılmalı mı?", answer: "Bu karar, giriş malzemesinin boyutu ve hedef çıkış yapısına göre belirlenir." },
      { question: "Toz kontrolü hangi hatlarda kritik hale gelir?", answer: "İnce fraksiyon oluşturan ve kapalı ortamda çalışan hatlarda toz kontrolü daha kritik hale gelir." },
      { question: "Mevcut bir geri dönüşüm hattı modernize edilebilir mi?", answer: "Evet, mevcut ekipman parkı analiz edilerek kapasite ve proses iyileştirmesi yapılabilir." },
    ],
  },
  "atik-su-camuru-ve-aritma-cozumleri": {
    heroBadge: "ATIK SU ÇAMURU VE ARITMA ÇÖZÜMLERİ",
    heroIntro: "Çamur işleme, susuzlaştırma ve kurutma süreçleri için kontrollü tesis kurguları.",
    heroTitle: "Atık Su Çamuru ve Arıtma Çözümleri",
    heroDescription:
      "Atık su arıtma süreçlerinden çıkan çamurun susuzlaştırılması, kurutulması, taşınması ve işlenmesi için ekipman ve tesis çözümleri sunuyoruz.",
    heroImage: "/images/sucamuru1.jpg",
    primaryEyebrow: "Temel Yaklaşım",
    primaryTitle: "Giriş çamuru özellikleri ve proses yaklaşımı",
    primaryDescription:
      "Atık su çamuru çözümlerinde sistem tasarımı; giriş nemi, akış davranışı, yapışkanlık ve hedef son ürün beklentisine göre belirlenir.",
    primaryCards: [
      { title: "Giriş nemi", text: "Kurutma sistemi, enerji ihtiyacı ve hat ölçeği giriş nemine göre şekillenir." },
      { title: "Akış ve yapışkanlık", text: "Taşıma ve besleme ekipmanlarının seçimi çamurun fiziksel davranışına göre yapılır." },
      { title: "Hedef çıkış koşulu", text: "Kuruluk seviyesi ve son kullanım amacı, proses kurgusunun ana belirleyicilerindendir." },
    ],
    offerEyebrow: "Sunulan Çözümler",
    offerTitle: "Atık su çamuru ve arıtma çözümleri için sunduğumuz çözümler",
    offerDescription:
      "Susuzlaştırma, kurutma, transfer ve son ürün yönetimi başlıklarını bir bütün halinde ele alarak sahaya uygun çözümler sunuyoruz.",
    offerCards: [
      { title: "Proses tasarımı", text: "Çamur karakterine ve hedef nem seviyesine göre süreç akışını planlıyoruz." },
      { title: "Kurutma ve destek kurgusu", text: "Kurutma hattı ile yardımcı ekipmanları aynı proses dengesi içinde belirliyoruz." },
      { title: "Taşıma ve besleme sistemleri", text: "Yapışkan ve zor akan çamurlar için güvenli akış çözümleri geliştiriyoruz." },
      { title: "Enerji optimizasyonu", text: "Kurutma ve transfer aşamalarını enerji verimliliğiyle birlikte değerlendiriyoruz." },
      { title: "Koku ve emisyon kontrolü", text: "Çevresel kontrol ihtiyaçlarını hat tasarımının ayrılmaz parçası olarak planlıyoruz." },
      { title: "Kurulum ve devreye alma", text: "İmalat, saha kurulumu ve işletmeye alma sürecini kontrollü biçimde yürütüyoruz." },
    ],
    equipmentEyebrow: "Makine ve Ekipman",
    equipmentTitle: "Atık su çamuru ve arıtma çözümlerinde kullanılan başlıca makine ve ekipmanlar",
    equipmentDescription:
      "Bu tesislerde ekipmanlar, çamurun fiziksel karakteri ve hedef son ürün yapısına göre birlikte değerlendirilmelidir.",
    equipmentCards: [
      { title: "Susuzlaştırma sistemleri", text: "Çamur hacmini azaltarak sonraki proses adımlarını kolaylaştırır." },
      { title: "Kurutma hatları", text: "Hedef çıkış nemine ulaşmak için kontrollü kurutma uygular." },
      { title: "Çamur taşıma hatları", text: "Yapışkan akışları güvenli ve sürekli biçimde transfer eder." },
      { title: "Besleme sistemleri", text: "Kurutma ve son ürün aşamalarına kararlı besleme yapar." },
      { title: "Depolama üniteleri", text: "Ara stok ve tampon kapasite oluşturarak sistem dengesini destekler." },
      { title: "Eleme ve ayırma sistemleri", text: "Yabancı madde ve fraksiyon ayrımı gereken noktalarda görev alır." },
      { title: "Toz ve koku kontrol sistemleri", text: "Emisyon yönetimi ve saha konforu için destek altyapısı sağlar." },
      { title: "Son ürün yönetim ekipmanları", text: "Kurutulmuş veya işlenmiş ürünün çıkış ve sevkiyat aşamasını tamamlar." },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Atık su çamuru ve arıtma çözümleri hakkında sık sorulan sorular",
    faqDescription: "Arıtma projelerinde nem, enerji ve son ürün yönetimiyle ilgili en sık sorulan başlıkları özetledik.",
    faqs: [
      { question: "Giriş çamur nemi çok yüksekse hangi sistem tercih edilir?", answer: "Bu durumda susuzlaştırma ve kurutma aşamaları birlikte değerlendirilerek uygun kombinasyon belirlenir." },
      { question: "Kurutulmuş ürün depolanabilir mi?", answer: "Evet, hedef son ürün yapısına göre uygun depolama ve sevkiyat altyapısı planlanabilir." },
      { question: "Koku kontrolü bu tesislerde zorunlu mudur?", answer: "Birçok uygulamada koku kontrolü çevresel uyum ve işletme konforu açısından önemli bir ihtiyaçtır." },
      { question: "Mevcut arıtma tesisine kurutma hattı eklenebilir mi?", answer: "Evet, saha ve mevcut akış incelenerek yeni kurutma ve transfer hatları entegre edilebilir." },
      { question: "Son ürün hazırlama sistemi proje kapsamına dahil olur mu?", answer: "Evet, son ürünün depolama ve sevkiyat ihtiyacı proje kapsamında ele alınabilir." },
    ],
  },
  "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri": {
    heroBadge: "YEM, TOZ VE DÖKME KATI MALZEME İŞLEME ÇÖZÜMLERİ",
    heroIntro: "Depolama, dozajlama ve transfer süreçleri için düzenli ve verimli tesis çözümleri.",
    heroTitle: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
    heroDescription:
      "Yem, un, premiks, mineral ve benzeri dökme katı ürünlerde depolama, dozajlama, taşıma, eleme, boşaltma ve son ürün hazırlama süreçleri için ekipman ve tesis çözümleri sunuyoruz.",
    heroImage: "/images/yem1.jpg",
    primaryEyebrow: "Temel Yaklaşım",
    primaryTitle: "Malzeme tipi ve akış / dozajlama yaklaşımı",
    primaryDescription:
      "Dökme katı malzeme işleme hatlarında akış davranışı, toz oluşumu, dozaj hassasiyeti ve son ürün lojistiği birlikte değerlendirilmelidir.",
    primaryCards: [
      { title: "Akış davranışı", text: "Malzemenin köprülenme eğilimi ve akışkanlığı bunker ile besleme tasarımını belirler." },
      { title: "Dozaj hassasiyeti", text: "Reçete doğruluğu gereken hatlarda tartım ve dozaj sistemleri kritik rol oynar." },
      { title: "Son hat ihtiyacı", text: "Paketleme, yükleme ve sevkiyat kurgusu, ana proses akışıyla birlikte planlanmalıdır." },
    ],
    offerEyebrow: "Sunulan Çözümler",
    offerTitle: "Yem, toz ve dökme katı malzeme işleme için sunduğumuz çözümler",
    offerDescription:
      "Depolama, dozajlama, taşıma ve son ürün hazırlama adımlarını birbirini tamamlayan ekipmanlarla tek sistem içinde kuruyoruz.",
    offerCards: [
      { title: "Proses tasarımı", text: "Malzeme karakteri ve kapasiteye göre hat akışını teknik olarak planlıyoruz." },
      { title: "Depolama ve besleme", text: "Silo ve bunker düzenini ürün davranışına göre yapılandırıyoruz." },
      { title: "Dozajlama sistemleri", text: "Reçete doğruluğunu destekleyen tartım ve dozaj çözümleri geliştiriyoruz." },
      { title: "Transfer altyapısı", text: "Helezon, konveyör ve elevatör hatlarını proses dengesiyle uyumlu kuruyoruz." },
      { title: "Eleme ve son ürün hazırlama", text: "Ürün standardını destekleyen eleme ve çıkış çözümlerini projelendiriyoruz." },
      { title: "Kurulum ve devreye alma", text: "İmalat, montaj ve işletmeye alma sürecini tek merkezden yönetiyoruz." },
    ],
    equipmentEyebrow: "Makine ve Ekipman",
    equipmentTitle: "Yem, toz ve dökme katı malzeme işleme için kullanılan başlıca makine ve ekipmanlar",
    equipmentDescription:
      "Bu tesislerde kullanılan ekipmanlar, ürün akışını kesintisiz sürdürecek ve reçete doğruluğunu koruyacak şekilde seçilmelidir.",
    equipmentCards: [
      { title: "Silo ve bunkerler", text: "Ürünlerin güvenli depolanmasını ve tamponlanmasını sağlar." },
      { title: "Besleme sistemleri", text: "Malzemenin hatta kararlı ve kontrollü biçimde verilmesini sağlar." },
      { title: "Dozajlama sistemleri", text: "Hassas tartım ve reçete uyumlu besleme için kullanılır." },
      { title: "Dozaj kantarları", text: "Doğru oranlarda tartım yaparak ürün standardını destekler." },
      { title: "Helezon ve konveyörler", text: "Yatay transfer noktalarında güvenli malzeme akışı oluşturur." },
      { title: "Elevatör sistemleri", text: "Dikey ürün transferi gereken bölgelerde görev alır." },
      { title: "Eleme sistemleri", text: "Fraksiyon ayrımı ve ürün standardı sağlar." },
      { title: "Paketleme ve son hat", text: "Torbalama, paletleme ve sevkiyat hazırlığını tamamlar." },
    ],
    faqEyebrow: "SSS",
    faqTitle: "Yem, toz ve dökme katı malzeme işleme sistemleri hakkında sık sorulan sorular",
    faqDescription: "Depolama, dozajlama ve son ürün lojistiğiyle ilgili sık sorulan başlıkları bir araya getirdik.",
    faqs: [
      { question: "Aynı hatta birden fazla ürün işlenebilir mi?", answer: "Evet, ürün geçişi ve temizlik gereksinimi dikkate alınarak çoklu ürün kurgusu yapılabilir." },
      { question: "Dozajlama her hatta gerekli midir?", answer: "Hayır, dozajlama ihtiyacı ürün reçetesi ve kalite beklentisine göre belirlenir." },
      { question: "Silo kapasitesi nasıl belirlenir?", answer: "Silo kapasitesi günlük tüketim, sevkiyat planı ve malzeme yoğunluğuna göre hesaplanır." },
      { question: "Paketleme hattı sonradan eklenebilir mi?", answer: "Evet, yerleşim buna uygun hazırlanmışsa paketleme sistemleri sonradan entegre edilebilir." },
      { question: "Hijyenik tasarım gereken hatlarda özel çözüm sunuyor musunuz?", answer: "Evet, ürün tipine göre hijyenik tasarım ve uygun malzeme seçimiyle özel çözümler geliştiriyoruz." },
    ],
  },
};
