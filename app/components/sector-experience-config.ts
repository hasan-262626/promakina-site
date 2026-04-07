export type SectorInfoCard = {
  title: string;
  text: string;
  href?: string;
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
  solutionEyebrow: string;
  solutionTitle: string;
  solutionDescription: string;
  solutionCards: SectorInfoCard[];
  servicesDescription: string;
  services: SectorInfoCard[];
  criticalDescription: string;
  criticalTopics: SectorInfoCard[];
  faqDescription: string;
  faqs: SectorFaqItem[];
  formTitle: string;
  formDescription: string;
  formFields: SectorFormField[];
  messagePlaceholder: string;
};

export const sectorExperienceConfigs: Record<string, SectorExperienceConfig> = {
  "kompost-ve-organik-atik-tesisleri": {
    heroBadge: "KOMPOST VE ORGANİK ATIK İŞLEME ÇÖZÜMLERİ",
    heroIntro:
      "Organik atıkların geri kazanımı için proses, tambur sistemleri ve saha kurulum çözümleri.",
    heroTitle: "Kompost ve Organik Atık Tesisleri",
    heroDescription:
      "Evsel organik atık, tarımsal atık, hayvansal atık ve benzeri organik içeriklerin kontrollü işlenmesi için kompost, kurutma, eleme ve son ürün hazırlama hatları tasarlıyoruz.",
    heroImage: "/images/kompost1.jpg",
    solutionEyebrow: "Kompost Çözümleri",
    solutionTitle: "Hangi kompost ve organik atık işleme çözümlerini sunuyoruz?",
    solutionDescription:
      "Kompost, kurutma, eleme ve son ürün hazırlama süreçleri için farklı atık karakterlerine uygun proses çözümlerini tek yapı altında planlıyoruz.",
    solutionCards: [
      { title: "Kompost Hazırlama Hatları", text: "Organik akışların kırma, karışım ve proses öncesi hazırlanması için kompakt hat çözümleri." },
      { title: "Olgunlaştırma Tamburları", text: "Kompostun kontrollü ilerlemesi ve homojen olgunlaşması için tambur sistemleri." },
      { title: "Kurutma Tamburları", text: "Yüksek nemli organik girdilerde kontrollü kurutma ve hacim azaltma çözümleri." },
      { title: "Eleme ve Sınıflandırma Hatları", text: "Son ürün kalitesini artırmak için elek, ayırma ve sınıflandırma çözümleri." },
      { title: "Son Ürün Hazırlama ve Paketleme", text: "Kompost veya kurutulmuş organik ürünlerin son hat hazırlığı ve paketleme altyapısı." },
      { title: "Koku ve Toz Kontrol Sistemleri", text: "Saha güvenliği ve çevresel performans için emiş, filtrasyon ve kontrol sistemleri." },
    ],
    servicesDescription:
      "Kompost ve organik atık işleme tesislerinde atık karakterine uygun proses kurgusundan saha kurulumuna kadar tüm teknik adımları tek merkezden yönetiyoruz.",
    services: [
      { title: "Proses Tasarımı", text: "Atık tipi, nem ve hedef son ürüne göre proses akışını birlikte kurguluyoruz." },
      { title: "Atık Karakterine Uygun Hat Kurgusu", text: "Farklı organik girdiler için tambur, eleme ve kurutma kurgularını özelleştiriyoruz." },
      { title: "Makine İmalatı", text: "Projeye özel tambur, konveyör, bunker ve yardımcı ekipman imalatı gerçekleştiriyoruz." },
      { title: "Tesis Yerleşimi", text: "Saha akışı, araç dolaşımı ve bakım erişimi dikkate alınarak yerleşim hazırlıyoruz." },
      { title: "Kurulum ve Devreye Alma", text: "İmalat sonrası saha kurulumu, entegrasyon ve devreye alma süreçlerini yönetiyoruz." },
      { title: "Anahtar Teslim Tesis Kurulumu", text: "Mühendislikten imalata ve saha devreye almaya kadar tüm süreci yürütüyoruz." },
    ],
    criticalDescription:
      "Kompost tesislerinde proses kararlılığı ve son ürün kalitesi; atık karakteri, kurutma dengesi ve çevresel kontrol başlıklarıyla birlikte değerlendirilmelidir.",
    criticalTopics: [
      { title: "Atık nem oranı", text: "Nem seviyesi tambur seçimini, kurutma ihtiyacını ve proses kararlılığını doğrudan etkiler." },
      { title: "Karbon / azot dengesi", text: "Doğru C/N dengesi kompost kalitesi ve olgunlaşma süresi için kritik rol oynar." },
      { title: "Koku kontrolü", text: "Koku yönetimi saha konforu ve çevresel uyum açısından prosesin önemli parçasıdır." },
      { title: "Kurutma verimi", text: "Yüksek nemli akışlarda doğru kurutma ekipmanı ve enerji dengesi kurulmalıdır." },
      { title: "Son ürün homojenliği", text: "Kompostun pazarlanabilir ve stabil olması için homojen ürün yapısı gerekir." },
      { title: "Eleme kalitesi", text: "Doğru elek seçimi son ürün sınıflandırmasını ve verimi belirler." },
      { title: "Toz ve çevresel güvenlik", text: "Toz emişi ve saha güvenliği çevresel performans için ihmal edilmemelidir." },
      { title: "Saha lojistiği", text: "Girdi kabulü, ara stoklama ve ürün çıkış akışı yerleşim planıyla birlikte düşünülmelidir." },
    ],
    faqDescription:
      "Kompost ve organik atık işleme yatırımlarında en sık sorulan teknik ve operasyonel başlıkları bir araya getirdik.",
    faqs: [
      { question: "Farklı organik atık türleri aynı tesiste işlenebilir mi?", answer: "Evet, uygun ön hazırlık, karışım ve proses ayrımı ile farklı organik akışlar aynı tesis içinde yönetilebilir." },
      { question: "Günlük giriş kapasitesi nasıl belirlenir?", answer: "Kapasite; atık tipi, nem, saha kabul miktarı, çalışma saati ve hedef son ürüne göre belirlenir." },
      { question: "Kurutma her kompost tesisinde gerekli midir?", answer: "Hayır, kurutma ihtiyacı atığın nemine, depolama koşullarına ve hedef son ürün yapısına göre değerlendirilir." },
      { question: "Koku kontrolü için hangi çözümler uygulanır?", answer: "Koku kontrolü için emiş hatları, filtreler, kapalı transfer noktaları ve doğru saha hava akışı birlikte planlanır." },
      { question: "Anahtar teslim kompost tesisi kurulumu yapıyor musunuz?", answer: "Evet, proses tasarımı, makine imalatı, saha kurulumu ve devreye alma dahil anahtar teslim çözümler sunuyoruz." },
    ],
    formTitle: "Kompost ve Organik Atık Tesisleri için teklif veya teknik görüşme talep edin",
    formDescription:
      "Atık tipi, günlük giriş kapasitesi, hedef son ürün ve saha şartlarınıza göre en uygun kompost veya organik atık işleme çözümünü birlikte değerlendirelim.",
    formFields: [
      { id: "wasteType", label: "Atık Türü", type: "select", required: true, options: ["Evsel Organik Atık", "Tarımsal Atık", "Hayvansal Atık", "Karışık Organik Atık"] },
      { id: "dailyInputCapacity", label: "Günlük Giriş Kapasitesi", type: "number", unit: "ton/gün" },
      { id: "targetOutput", label: "Hedef Son Ürün", type: "select", options: ["Kompost", "Kurutulmuş Organik Ürün", "Elek Altı / Elek Üstü Ayrımı", "Henüz net değil"] },
    ],
    messagePlaceholder:
      "Atık kaynağı, günlük kapasite, saha bilgisi ve hedef son ürünle ilgili detayları paylaşabilirsiniz.",
  },
  "madencilik-ve-mineral-isleme": {
    heroBadge: "MADENCİLİK VE MİNERAL İŞLEME ÇÖZÜMLERİ",
    heroIntro:
      "Kırma, eleme, besleme, taşıma ve mineral hazırlama süreçleri için doğru makine kurgusu.",
    heroTitle: "Madencilik ve Mineral İşleme",
    heroDescription:
      "Agrega, mineral ve cevher hazırlama hatlarında kırma, eleme, sınıflandırma, besleme ve malzeme transferi için sektör ihtiyacına uygun proses ve ekipman çözümleri sunuyoruz.",
    heroImage: "/images/maden1.jpg",
    solutionEyebrow: "Mineral İşleme",
    solutionTitle: "Hangi madencilik ve mineral işleme çözümlerini sunuyoruz?",
    solutionDescription:
      "Farklı sertlik, aşındırıcılık ve tane boyutu beklentilerine uygun kırma, eleme ve transfer sistemlerini bir araya getiriyoruz.",
    solutionCards: [
      { title: "Primer Kırma Hatları", text: "İri boyutlu malzemelerin ilk kademe küçültülmesi için kırıcı ve besleme sistemleri." },
      { title: "Sekonder ve Tersiyer Kırma Çözümleri", text: "Hedef tane boyutuna yaklaşmak için kontrollü ikinci ve üçüncü kademe kırma altyapısı." },
      { title: "Eleme ve Sınıflandırma Sistemleri", text: "Ürün boyutlandırma ve kalite kontrolü için elek ve sınıflandırma hatları." },
      { title: "Besleme ve Depolama Üniteleri", text: "Sürekli ve dengeli malzeme akışı için bunker, silo ve besleme çözümleri." },
      { title: "Konveyör ve Transfer Hatları", text: "Kırılmış ürünlerin hat içinde güvenli ve sürekli taşınması için transfer sistemleri." },
      { title: "Toz Kontrol ve Filtrasyon Çözümleri", text: "Toz oluşumunu kontrol altına alan emiş, filtrasyon ve saha güvenliği çözümleri." },
    ],
    servicesDescription:
      "Madencilik ve mineral işleme hatlarında proses tasarımından makine imalatına ve saha devreye almaya kadar ihtiyaca özel çözümler geliştiriyoruz.",
    services: [
      { title: "Proses Tasarımı", text: "Malzeme karakterine ve hedef ürün boyutuna göre kırma-eleme akışını planlıyoruz." },
      { title: "Kırıcı ve Elek Seçimi", text: "Aşındırıcılık, sertlik ve kapasite beklentisine göre ekipman seçimini netleştiriyoruz." },
      { title: "Hat Yerleşimi", text: "Saha akışı, bakım erişimi ve malzeme lojistiği için doğru yerleşim kurgusu hazırlıyoruz." },
      { title: "Makine İmalatı", text: "Projeye özel kırıcı, elek, bunker, konveyör ve yardımcı ekipman imalatı yapıyoruz." },
      { title: "Revizyon ve Kapasite Artırımı", text: "Mevcut hatlarda darboğaz analizi yaparak kapasite ve verim iyileştirmeleri öneriyoruz." },
      { title: "Kurulum ve Devreye Alma", text: "Saha kurulumu, entegrasyon ve işletmeye alma süreçlerini kontrollü şekilde yönetiyoruz." },
    ],
    criticalDescription:
      "Madencilik tesislerinde malzeme karakteri ve ekipman uyumu; verim, bakım ihtiyacı ve enerji tüketimi üzerinde doğrudan belirleyicidir.",
    criticalTopics: [
      { title: "Malzeme sertliği", text: "Kırıcı tipi ve aşınma ekipmanlarının seçimi malzeme sertliğine göre yapılmalıdır." },
      { title: "Aşındırıcılık", text: "Aşındırıcı malzemelerde gövde, astar ve sarf malzeme seçimi ömrü belirler." },
      { title: "Giriş-çıkış tane boyutu", text: "Doğru kademe kurgusu için besleme ve hedef ürün boyutu net tanımlanmalıdır." },
      { title: "Kapasite dengesi", text: "Tüm kırma, eleme ve taşıma ekipmanları aynı hat debisine göre dengelenmelidir." },
      { title: "Elek verimi", text: "Eleme yüzeyi, kat sayısı ve titreşim karakteri son ürün doğruluğunu etkiler." },
      { title: "Toz kontrolü", text: "Toz emiş ve filtrasyon çözümleri saha güvenliği ve çevresel uyum için kritik önemdedir." },
      { title: "Bakım erişimi", text: "Ağır ekipmanlarda servis ve sarf değişimi için erişim kolaylığı planlanmalıdır." },
      { title: "Enerji verimliliği", text: "Doğru makine seçimi ve hat dengesi enerji tüketimini doğrudan etkiler." },
    ],
    faqDescription:
      "Madencilik ve mineral işleme yatırımlarında en çok sorulan kapasite, kırma kademesi ve hat uyumu başlıklarını özetledik.",
    faqs: [
      { question: "Primer ve sekonder kırma seçimi nasıl yapılır?", answer: "Seçim; giriş boyutu, hedef ürün, malzeme sertliği ve toplam kapasite ihtiyacına göre yapılır." },
      { question: "Aynı hat üzerinde farklı ürün boyutları alınabilir mi?", answer: "Evet, uygun elek ve transfer kurgusu ile farklı ürün fraksiyonları aynı tesiste alınabilir." },
      { question: "Toz kontrolü zorunlu mudur?", answer: "Özellikle kapalı alanlarda ve ince ürün hatlarında toz kontrolü hem güvenlik hem de çevresel performans için gereklidir." },
      { question: "Mevcut kırma hattında kapasite artırımı yapılabilir mi?", answer: "Evet, mevcut ekipmanlar incelenerek revizyon, ek kırıcı veya elek entegrasyonu ile kapasite artışı planlanabilir." },
      { question: "Anahtar teslim mineral işleme hattı kuruyor musunuz?", answer: "Evet, proses tasarımı, ekipman imalatı, saha kurulumu ve devreye alma dahil çözümler sunuyoruz." },
    ],
    formTitle: "Madencilik ve Mineral İşleme için teklif veya teknik görüşme talep edin",
    formDescription:
      "Malzeme türü, hedef kapasite, giriş-çıkış boyutu ve tesis durumunu paylaşın; size uygun kırma-eleme ve transfer kurgusunu birlikte değerlendirelim.",
    formFields: [
      { id: "materialType", label: "Malzeme Türü", type: "text", required: true },
      { id: "hourlyCapacity", label: "Saatlik Kapasite", type: "number", unit: "ton/saat" },
      { id: "inputSize", label: "Giriş Boyutu", type: "text" },
      { id: "targetOutputSize", label: "Hedef Çıkış Boyutu", type: "text" },
      { id: "plantStatus", label: "Tesis Durumu", type: "select", options: ["Yeni", "Revizyon", "Kapasite Artışı"] },
    ],
    messagePlaceholder:
      "Malzeme yapısı, kapasite, mevcut hat bilgisi ve hedef ürün boyutu gibi detayları paylaşabilirsiniz.",
  },
  "kimya-ve-proses-endustrisi": {
    heroBadge: "KİMYA VE PROSES ENDÜSTRİSİ ÇÖZÜMLERİ",
    heroIntro:
      "Karışım, reaksiyon, depolama ve proses akışı için güvenilir ekipman çözümleri.",
    heroTitle: "Kimya ve Proses Endüstrisi",
    heroDescription:
      "Kimyasal ve proses hatlarında reaktör, tank, çözündürme, soğutma, dozajlama ve transfer ekipmanları ile kontrollü ve güvenli üretim altyapıları sunuyoruz.",
    heroImage: "/images/kimya1.jpg",
    solutionEyebrow: "Kimya Prosesleri",
    solutionTitle: "Hangi kimya ve proses çözümlerini sunuyoruz?",
    solutionDescription:
      "Reaktör, tank ve yardımcı proses ekipmanlarını; batch veya sürekli çalışma mantığına göre güvenli bir üretim kurgusunda bir araya getiriyoruz.",
    solutionCards: [
      { title: "Karıştırıcılı Reaktörler", text: "Homojen karışım ve kontrollü reaksiyon için karıştırıcılı reaktör sistemleri." },
      { title: "Basınçlı Reaktörler", text: "Basınç altında çalışan özel kimyasal prosesler için güvenli reaktör çözümleri." },
      { title: "Çözündürme Tankları", text: "Toz ve sıvı hammaddelerin kontrollü çözündürülmesi için tank sistemleri." },
      { title: "Soğutma ve Stok Tankları", text: "Ürün sıcaklığı yönetimi ve ara stoklama için tank çözümleri." },
      { title: "Dozajlama ve Besleme Sistemleri", text: "Kimyasal akışların kontrollü beslenmesi ve hassas dozajlanması için ekipmanlar." },
      { title: "Yardımcı Akış ve Transfer Ekipmanları", text: "Hat içi yönlendirme, akış kontrolü ve güvenli ürün transferi için yardımcı sistemler." },
    ],
    servicesDescription:
      "Kimya ve proses hatlarında malzeme uyumluluğu, güvenlik, otomasyon ve saha koşullarını birlikte değerlendirerek doğru üretim altyapısını kuruyoruz.",
    services: [
      { title: "Proses Tasarımı", text: "Karışım, çözündürme ve reaksiyon adımlarına uygun proses akışını teknik olarak planlıyoruz." },
      { title: "Ekipman Seçimi", text: "Kimyasal uyumluluk, basınç ve sıcaklık koşullarına göre doğru ekipmanları belirliyoruz." },
      { title: "Makine İmalatı", text: "Projeye özel reaktör, tank, dozajlama ve transfer ekipmanları üretiyoruz." },
      { title: "Tesis Yerleşim Planı", text: "Bakım erişimi, güvenlik ve proses akışı dikkate alınarak saha planı hazırlıyoruz." },
      { title: "Otomasyon ve Kontrol", text: "Batch yönetimi, sıcaklık takibi, dozaj sıralaması ve proses kontrol altyapısını kuruyoruz." },
      { title: "Kurulum ve Devreye Alma", text: "Saha montajı, bağlantılar ve sistem devreye alma süreçlerini yönetiyoruz." },
    ],
    criticalDescription:
      "Kimya ve proses endüstrisinde güvenli ve kararlı üretim; ekipman malzemesi, proses koşulları ve otomasyon seviyesiyle birlikte ele alınmalıdır.",
    criticalTopics: [
      { title: "Kimyasal uyumluluk", text: "Ekipman malzemesi kimyasal bileşenlerle uyumlu seçilmelidir." },
      { title: "Basınç ve sıcaklık", text: "Çalışma koşulları gövde, conta ve yardımcı sistem seçiminde belirleyicidir." },
      { title: "Karışım homojenliği", text: "Ürün kalitesini korumak için karıştırıcı tipi ve devir yapısı doğru belirlenmelidir." },
      { title: "Doğru hacim seçimi", text: "Tank ve reaktör hacmi batch yapısı ve işletme planına göre seçilmelidir." },
      { title: "Sızdırmazlık", text: "Hat güvenliği ve ürün kaybını önlemek için sızdırmaz yapı kritik önemdedir." },
      { title: "Temizlik ve bakım", text: "Temizlik kolaylığı ve bakım erişimi işletme sürekliliğini destekler." },
      { title: "Otomasyon", text: "Dozaj, sıcaklık, basınç ve proses sıralaması otomasyonla güvence altına alınmalıdır." },
      { title: "İş güvenliği", text: "Kimyasal proseslerde saha güvenliği ve ekipman koruma sistemleri birlikte düşünülmelidir." },
    ],
    faqDescription:
      "Kimya ve proses yatırımlarında ekipman seçimi, batch yapısı ve proses güvenliği hakkında en çok sorulan başlıkları derledik.",
    faqs: [
      { question: "Batch ve sürekli proses arasında nasıl seçim yapılır?", answer: "Seçim; ürün çeşidi, üretim miktarı, reçete esnekliği ve proses kararlılığı beklentisine göre yapılır." },
      { question: "Basınçlı reaktör her kimyasal proseste gerekli midir?", answer: "Hayır, basınçlı reaktör ihtiyacı ürün karakteri, reaksiyon şartları ve güvenlik gereksinimine göre belirlenir." },
      { question: "Paslanmaz çelik ekipman ne zaman tercih edilir?", answer: "Kimyasal uyumluluk, hijyen, korozyon direnci ve ürün saflığı beklentisi olduğunda paslanmaz çelik tercih edilir." },
      { question: "Mevcut reaktör hattına yeni tank ve dozaj sistemi eklenebilir mi?", answer: "Evet, mevcut saha ve proses akışı incelenerek yeni ekipman entegrasyonu yapılabilir." },
      { question: "Otomasyon altyapısı tesisle birlikte kuruluyor mu?", answer: "Evet, ihtiyaç halinde PLC, reçete yönetimi ve proses kontrol altyapısı ile birlikte çözüm sunuyoruz." },
    ],
    formTitle: "Kimya ve Proses Endüstrisi için teklif veya teknik görüşme talep edin",
    formDescription:
      "Ürün tipi, batch veya sürekli çalışma yapısı, kapasite ve proses şartlarını paylaşın; size uygun reaktör, tank ve yardımcı ekipman kurgusunu birlikte değerlendirelim.",
    formFields: [
      { id: "chemicalType", label: "Ürün / Kimyasal Türü", type: "text", required: true },
      { id: "workingMode", label: "Çalışma Şekli", type: "select", options: ["Batch", "Sürekli"] },
      { id: "batchCapacity", label: "Hedef Batch Kapasitesi", type: "number", unit: "ton/batch" },
      { id: "thermalNeed", label: "Isıtma / Soğutma İhtiyacı", type: "text" },
      { id: "pressureNeed", label: "Basınçlı Sistem Gerekli mi?", type: "select", options: ["Evet", "Hayır", "Henüz net değil"] },
    ],
    messagePlaceholder:
      "Ürün tipi, proses sıcaklığı, batch yapısı, saha koşulları ve özel gereksinimleri yazabilirsiniz.",
  },
  "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri": {
    heroBadge: "YEM, TOZ VE DÖKME KATI MALZEME İŞLEME ÇÖZÜMLERİ",
    heroIntro:
      "Depolama, dozajlama, transfer ve son ürün hazırlama süreçleri için entegre sistemler.",
    heroTitle: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri",
    heroDescription:
      "Yem, un, premiks, mineral ve benzeri dökme katı ürünlerde depolama, dozajlama, taşıma, eleme, boşaltma ve son ürün hazırlama süreçleri için ekipman ve tesis çözümleri sunuyoruz.",
    heroImage: "/images/yem1.jpg",
    solutionEyebrow: "Dökme Katı Çözümleri",
    solutionTitle: "Hangi dökme katı malzeme işleme çözümlerini sunuyoruz?",
    solutionDescription:
      "Depolama, dozajlama, transfer ve son hat ihtiyaçlarını aynı proses mantığında birleştirerek sektöre özel çözümler geliştiriyoruz.",
    solutionCards: [
      { title: "Depolama ve Besleme Sistemleri", text: "Silo, bunker ve besleme ekipmanları ile dengeli ham madde akışı çözümleri." },
      { title: "Dozajlama Sistemleri", text: "Reçeteye uygun hassas tartım ve kontrollü besleme altyapıları." },
      { title: "Konveyör ve Elevatör Hatları", text: "Toz ve dökme katı ürünlerin güvenli ve sürekli transferi için taşıma sistemleri." },
      { title: "Eleme ve Sınıflandırma Sistemleri", text: "Ürün kalitesi ve proses hazırlığı için eleme ve ayırma çözümleri." },
      { title: "Yükleme ve Boşaltma Sistemleri", text: "Kamyon, silobas ve depo noktaları için kontrollü dolum-boşaltma sistemleri." },
      { title: "Paketleme ve Son Hat Çözümleri", text: "Torbalama, paletleme ve son ürün sevkiyatı için tamamlayıcı hat sistemleri." },
    ],
    servicesDescription:
      "Dökme katı malzeme işleme hatlarında depolamadan dozajlamaya, taşıma ekipmanlarından son ürün hazırlamaya kadar tüm süreci birlikte tasarlıyoruz.",
    services: [
      { title: "Proses Tasarımı", text: "Malzeme karakteri, kapasite ve reçete yapısına göre hat kurgusunu hazırlıyoruz." },
      { title: "Ekipman Seçimi", text: "Silo, bunker, helezon, konveyör ve dozaj ekipmanlarını prosese göre seçiyoruz." },
      { title: "Makine İmalatı", text: "Projeye özel taşıma, depolama ve besleme ekipmanları üretiyoruz." },
      { title: "Tesis Yerleşim Planı", text: "Malzeme akışı, bakım kolaylığı ve lojistik gereksinimler doğrultusunda saha planı hazırlıyoruz." },
      { title: "Otomasyon ve Kontrol", text: "Dozaj, reçete ve transfer süreçlerini otomasyon altyapısıyla entegre ediyoruz." },
      { title: "Kurulum ve Devreye Alma", text: "Saha montajı ve işletmeye alma süreçlerini kontrollü biçimde yürütüyoruz." },
      { title: "Revizyon / Modernizasyon", text: "Mevcut hatları değerlendirerek kapasite, hassasiyet ve akış iyileştirmeleri sağlıyoruz." },
      { title: "Anahtar Teslim Çözüm", text: "Mühendislik, imalat ve saha devreye alma adımlarını tek merkezden yönetiyoruz." },
    ],
    criticalDescription:
      "Dökme katı malzemelerde akış davranışı ve dozaj hassasiyeti; depolama güvenliği, hijyen ve lojistikle birlikte düşünülmelidir.",
    criticalTopics: [
      { title: "Akış davranışı", text: "Malzemenin akışkanlığı bunker ve boşaltma ekipmanlarının seçimini doğrudan etkiler." },
      { title: "Toz kontrolü", text: "Tozlu hatlarda emiş, sızdırmazlık ve filtreleme performansı kritik rol oynar." },
      { title: "Dozaj hassasiyeti", text: "Reçete doğruluğu için besleme ve tartım altyapısı hassas seçilmelidir." },
      { title: "Hat kapasite dengesi", text: "Tüm taşıma ve depolama noktaları aynı debi mantığında dengelenmelidir." },
      { title: "Depolama güvenliği", text: "Silo ve bunker tasarımlarında akış, bakım ve güvenlik birlikte ele alınmalıdır." },
      { title: "Reçete doğruluğu", text: "Doğru tartım ve sıralama ürün kalitesi üzerinde belirleyicidir." },
      { title: "Hijyen ve bakım", text: "Özellikle yem ve gıda bağlantılı hatlarda hijyenik tasarım ön plana çıkar." },
      { title: "Son ürün lojistiği", text: "Paketleme, yükleme ve sevkiyat akışı tesis tasarımıyla birlikte düşünülmelidir." },
    ],
    faqDescription:
      "Dökme katı malzeme işleme hatlarında kapasite, dozajlama ve depolama güvenliğiyle ilgili sık sorulan soruları özetledik.",
    faqs: [
      { question: "Aynı hatta birden fazla ürün işlenebilir mi?", answer: "Evet, ürün geçişi, temizlik ihtiyacı ve reçete yapısı dikkate alınarak çoklu ürün kurguları oluşturulabilir." },
      { question: "Dozajlama her hatta gerekli midir?", answer: "Hayır, dozajlama ihtiyacı ürün reçetesi, kalite beklentisi ve otomasyon seviyesine göre değerlendirilir." },
      { question: "Silo kapasitesi nasıl belirlenir?", answer: "Silo kapasitesi günlük tüketim, sevkiyat planı, malzeme yoğunluğu ve saha koşullarına göre hesaplanır." },
      { question: "Paketleme hattı sonradan eklenebilir mi?", answer: "Evet, uygun yerleşim ve transfer noktaları bırakıldığında paketleme sistemleri sonradan entegre edilebilir." },
      { question: "Hijyenik tasarım ihtiyacı olan hatlarda özel çözüm sunuyor musunuz?", answer: "Evet, ürün tipine göre paslanmaz ekipman, erişilebilir temizlik noktaları ve hijyenik tasarım çözümleri sunuyoruz." },
    ],
    formTitle: "Yem, Toz ve Dökme Katı Malzeme İşleme Sistemleri için teklif veya teknik görüşme talep edin",
    formDescription:
      "Malzeme türü, kapasite, depolama ve dozaj ihtiyacınızı paylaşın; size uygun taşıma, depolama ve son hat çözümünü birlikte netleştirelim.",
    formFields: [
      { id: "materialType", label: "Malzeme Türü", type: "text", required: true },
      { id: "targetCapacity", label: "Hedef Kapasite", type: "text" },
      { id: "storageNeed", label: "Depolama İhtiyacı", type: "select", options: ["Evet", "Hayır"] },
      { id: "dosingNeed", label: "Dozajlama Gerekli mi?", type: "select", options: ["Evet", "Hayır"] },
      { id: "packagingNeed", label: "Paketleme Gerekli mi?", type: "select", options: ["Evet", "Hayır"] },
    ],
    messagePlaceholder:
      "Malzeme tipi, hedef kapasite, reçete yapısı, depolama ve son hat ihtiyaçlarınızı paylaşabilirsiniz.",
  },
  "geri-donusum-ve-atik-yonetimi": {
    heroBadge: "GERİ DÖNÜŞÜM VE ATIK YÖNETİMİ ÇÖZÜMLERİ",
    heroIntro:
      "Atıkların ayrıştırılması, küçültülmesi, taşınması ve yeniden değerlendirilmesi için proses çözümleri.",
    heroTitle: "Geri Dönüşüm ve Atık Yönetimi",
    heroDescription:
      "Katı atık, endüstriyel atık ve geri kazanılabilir materyallerin ayrıştırılması, küçültülmesi, taşınması ve prosese uygun hazırlanması için ekipman ve tesis çözümleri sunuyoruz.",
    heroImage: "/images/geridonusum1.jpg",
    solutionEyebrow: "Geri Dönüşüm Çözümleri",
    solutionTitle: "Hangi geri dönüşüm ve atık yönetimi çözümlerini sunuyoruz?",
    solutionDescription:
      "Parçalama, ayırma, transfer ve son ürün hazırlama süreçlerini; atık karakterine göre ölçeklenebilir ve güvenli sistemlerle kurguluyoruz.",
    solutionCards: [
      { title: "Shredder Sistemleri", text: "Heterojen atık akışlarında ilk kademe küçültme için güçlü shredder çözümleri." },
      { title: "Primer ve Sekonder Kırma", text: "Atık boyutunu kontrollü şekilde düşüren kırma kademeleri ve yardımcı ekipmanlar." },
      { title: "Eleme ve Ayırma Sistemleri", text: "Farklı fraksiyonları ayırmak ve geri kazanımı desteklemek için eleme çözümleri." },
      { title: "Konveyör ve Besleme Hatları", text: "Atık akışlarını güvenli ve sürekli taşıyan transfer sistemleri." },
      { title: "Toz ve Çevresel Kontrol Sistemleri", text: "Toz, emisyon ve saha güvenliğini yöneten yardımcı kontrol çözümleri." },
      { title: "Son Ürün Hazırlama Çözümleri", text: "Geri kazanılan ürünlerin stoklama, yükleme ve son hazırlık ihtiyaçları için sistemler." },
    ],
    servicesDescription:
      "Geri dönüşüm ve atık yönetimi hatlarında atık karakteri, boyut küçültme ihtiyacı ve saha güvenliğini birlikte değerlendirerek çözüm geliştiriyoruz.",
    services: [
      { title: "Proses Tasarımı", text: "Atık akışına göre kırma, eleme, ayırma ve transfer sürecini planlıyoruz." },
      { title: "Ekipman Seçimi", text: "Atığın heterojenliği ve hedef ürün yapısına göre doğru makineleri belirliyoruz." },
      { title: "Makine İmalatı", text: "Shredder, kırıcı, konveyör ve yardımcı ekipmanları projeye özel üretiyoruz." },
      { title: "Hat Yerleşimi", text: "Atık kabulü, işleme ve ürün çıkışı arasında dengeli saha akışı hazırlıyoruz." },
      { title: "Kurulum ve Devreye Alma", text: "Saha montajı ve sistem entegrasyonunu kontrollü şekilde tamamlıyoruz." },
      { title: "Anahtar Teslim Çözüm", text: "Mühendislikten saha işletmeye almaya kadar tüm süreçleri tek yapı altında yönetiyoruz." },
    ],
    criticalDescription:
      "Atık yönetimi hatlarında proses başarısı; atık heterojenliği, güvenlik, bakım erişimi ve enerji dengesiyle birlikte değerlendirilmelidir.",
    criticalTopics: [
      { title: "Atık heterojenliği", text: "Farklı malzeme karakterleri ekipman seçimi ve hat esnekliğini doğrudan etkiler." },
      { title: "Metal / yabancı madde riski", text: "Yabancı madde varlığı kırıcı ve shredder sistemlerinde güvenlik önlemi gerektirir." },
      { title: "Boyut küçültme kademesi", text: "Tek veya çok kademeli kırma ihtiyacı hedef ürün boyutuna göre belirlenmelidir." },
      { title: "Toz ve emisyon kontrolü", text: "Tozlu akışlarda çevresel kontrol sistemleri saha güvenliği için kritik önemdedir." },
      { title: "Hat güvenliği", text: "Yüksek torklu ekipmanlarda acil duruş ve koruma altyapısı eksiksiz kurulmalıdır." },
      { title: "Bakım erişimi", text: "Sarf değişimi ve periyodik bakım için erişim kolaylığı tasarımın parçası olmalıdır." },
      { title: "Enerji tüketimi", text: "Atık türüne uygun ekipman seçimi gereksiz enerji tüketimini azaltır." },
      { title: "Esnek proses yapısı", text: "Değişken atık akışlarına uyum sağlayan modüler yapı yatırım değerini artırır." },
    ],
    faqDescription:
      "Geri dönüşüm tesislerinde en sık sorulan atık tipi, kapasite ve boyut küçültme mantığına dair soruları bir araya getirdik.",
    faqs: [
      { question: "Tek bir hatla farklı atık türleri işlenebilir mi?", answer: "Evet, uygun ön ayırma, kırma ve transfer kurgusu ile farklı atık akışları aynı hatta yönetilebilir." },
      { question: "Mobil tesis mi sabit tesis mi daha uygundur?", answer: "Seçim; saha yapısı, malzeme kaynağı, taşıma mesafesi ve kapasite ihtiyacına göre yapılır." },
      { question: "Shredder ve kırıcı birlikte kullanılmalı mı?", answer: "Atığın giriş boyutu ve hedef çıkış ürününe göre iki kademeli küçültme ihtiyacı doğabilir." },
      { question: "Toz kontrolü hangi hatlarda gereklidir?", answer: "İnce fraksiyon oluşan ve kapalı alanda çalışan tüm hatlarda toz kontrolü önerilir." },
      { question: "Mevcut atık işleme hattı revize edilebilir mi?", answer: "Evet, mevcut ekipman parkı incelenerek kapasite artışı veya proses revizyonu uygulanabilir." },
    ],
    formTitle: "Geri Dönüşüm ve Atık Yönetimi için teklif veya teknik görüşme talep edin",
    formDescription:
      "Atık türü, kapasite, giriş-çıkış boyutu ve tesis modelini paylaşın; size uygun küçültme, ayırma ve transfer çözümünü birlikte oluşturalım.",
    formFields: [
      { id: "wasteType", label: "Atık Türü", type: "text", required: true },
      { id: "capacity", label: "Kapasite", type: "text" },
      { id: "inputSize", label: "Giriş Boyutu", type: "text" },
      { id: "targetOutputSize", label: "Hedef Çıkış Boyutu", type: "text" },
      { id: "plantType", label: "Sabit Tesis / Mobil Tesis", type: "select", options: ["Sabit", "Mobil", "Henüz net değil"] },
    ],
    messagePlaceholder:
      "Atık tipi, kapasite, mevcut saha bilgisi ve hedef ürün yapısı gibi detayları paylaşabilirsiniz.",
  },
  "enerji-ve-biyogaz-sistemleri": {
    heroBadge: "ENERJİ VE BİYOGAZ PROSES ÇÖZÜMLERİ",
    heroIntro:
      "Organik atık ve enerji odaklı proseslerde besleme, hazırlama ve destek sistemleri.",
    heroTitle: "Enerji ve Biyogaz Sistemleri",
    heroDescription:
      "Biyogaz ve enerji odaklı proseslerde organik girdilerin hazırlanması, dozajlanması, aktarılması ve destek ekipmanlarının kurulumu için teknik çözümler sunuyoruz.",
    heroImage: "/images/biogaz1.jpg",
    solutionEyebrow: "Biyogaz Çözümleri",
    solutionTitle: "Hangi enerji ve biyogaz çözümlerini sunuyoruz?",
    solutionDescription:
      "Besleme, hazırlama, dozajlama ve yardımcı akış sistemlerini biyogaz prosesinin sürekliliğini destekleyecek şekilde bir araya getiriyoruz.",
    solutionCards: [
      { title: "Organik Girdi Hazırlama Sistemleri", text: "Farklı organik girdilerin biyogaz hattına uygun hale getirilmesi için ön hazırlık çözümleri." },
      { title: "Besleme ve Transfer Hatları", text: "Organik girdilerin güvenli ve sürekli şekilde prosese aktarılması için hat sistemleri." },
      { title: "Depolama ve Dozajlama Çözümleri", text: "Besleme kararlılığı için bunker, silo ve dozaj altyapıları." },
      { title: "Yardımcı Akış Sistemleri", text: "Hat içi akış kontrolü ve proses desteği için yardımcı ekipman çözümleri." },
      { title: "Toz ve Koku Kontrolü", text: "Saha güvenliği ve çevresel uyum için emiş, filtrasyon ve koku yönetimi sistemleri." },
      { title: "Son Ürün / Yan Ürün Hazırlama", text: "Yan ürün ve çıkış akışlarının kontrollü yönetimi için destek sistemleri." },
    ],
    servicesDescription:
      "Biyogaz ve enerji tesislerinde girdi hazırlama, besleme sürekliliği ve yardımcı proses ekipmanlarının tüm mühendislik adımlarını birlikte yürütüyoruz.",
    services: [
      { title: "Proses Tasarımı", text: "Girdi yapısı ve günlük besleme planına göre hat akışını netleştiriyoruz." },
      { title: "Ekipman Seçimi", text: "Besleme, dozajlama ve transfer ekipmanlarını proses kararlılığına göre belirliyoruz." },
      { title: "Makine İmalatı", text: "Projeye özel bunker, konveyör, dozaj ve yardımcı akış ekipmanları üretiyoruz." },
      { title: "Tesis Yerleşim Planı", text: "Ara stok, besleme noktaları ve saha güvenliğini dikkate alan yerleşim planı hazırlıyoruz." },
      { title: "Kurulum ve Devreye Alma", text: "Saha kurulumunu ve işletmeye alma sürecini kontrollü şekilde tamamlıyoruz." },
      { title: "Anahtar Teslim Çözüm", text: "Mühendislik, imalat ve saha entegrasyonunu tek yapı altında topluyoruz." },
    ],
    criticalDescription:
      "Enerji ve biyogaz hatlarında proses sürekliliği; girdi kararlılığı, koku kontrolü ve dayanıklı ekipman seçimiyle sağlanır.",
    criticalTopics: [
      { title: "Girdi kararlılığı", text: "Düzensiz girdi yapısı biyogaz prosesi besleme sürekliliğini olumsuz etkiler." },
      { title: "Nem ve akışkanlık", text: "Girdi nemi ve akış davranışı bunker, helezon ve transfer sistemlerini belirler." },
      { title: "Besleme sürekliliği", text: "Kesintisiz besleme için dozaj ve taşıma altyapısı dengeli kurulmalıdır." },
      { title: "Koku kontrolü", text: "Organik girdi işlenen sahalarda koku yönetimi tasarımın önemli parçasıdır." },
      { title: "Hat güvenliği", text: "Zorlayıcı organik akışlarda ekipman koruma ve saha güvenliği birlikte düşünülmelidir." },
      { title: "Otomasyon", text: "Süreç izleme ve dozaj kararlılığı için otomasyon seviyesi net belirlenmelidir." },
      { title: "Dayanıklılık", text: "Aşındırıcı ve nemli girdiler için ağır hizmet tipi ekipman seçimi önemlidir." },
      { title: "Bakım planlaması", text: "Sistem tasarımı bakım aralıklarını ve saha erişimini desteklemelidir." },
    ],
    faqDescription:
      "Biyogaz ve enerji odaklı tesislerde besleme, girdi hazırlama ve saha sürekliliğine ilişkin en sık sorulan başlıkları derledik.",
    faqs: [
      { question: "Farklı organik girdiler aynı biyogaz besleme sisteminde kullanılabilir mi?", answer: "Evet, uygun ön hazırlık ve dozajlama kurgusu ile farklı girdiler aynı hatta yönetilebilir." },
      { question: "Günlük besleme kapasitesi nasıl belirlenir?", answer: "Besleme kapasitesi; girdi tipi, proses planı, çalışma saati ve fermentasyon tasarımına göre belirlenir." },
      { question: "Koku kontrolü için hangi sistemler kullanılır?", answer: "Koku kontrolü için kapalı transfer noktaları, emiş hatları ve filtreleme çözümleri birlikte planlanır." },
      { question: "Mevcut biyogaz hattına destek ekipman eklenebilir mi?", answer: "Evet, mevcut hattın besleme ve transfer altyapısı incelenerek yeni yardımcı ekipmanlar entegre edilebilir." },
      { question: "Anahtar teslim besleme ve hazırlama hattı kuruyor musunuz?", answer: "Evet, mühendislikten saha devreye almaya kadar entegre çözümler sunuyoruz." },
    ],
    formTitle: "Enerji ve Biyogaz Sistemleri için teklif veya teknik görüşme talep edin",
    formDescription:
      "Girdi türü, günlük besleme kapasitesi ve sistem tipinizi paylaşın; biyogaz ve enerji prosesi için uygun yardımcı ekipman kurgusunu birlikte değerlendirelim.",
    formFields: [
      { id: "feedType", label: "Girdi Türü", type: "text", required: true },
      { id: "dailyFeedCapacity", label: "Günlük Besleme Kapasitesi", type: "number", unit: "ton/gün" },
      { id: "systemType", label: "Sistem Tipi", type: "select", options: ["Yeni yatırım", "Mevcut hat desteği", "Revizyon"] },
      { id: "automationLevelSpecific", label: "Otomasyon Seviyesi", type: "select", options: ["Yarı Otomatik", "Tam Otomatik", "Henüz net değil"] },
    ],
    messagePlaceholder:
      "Girdi tipi, günlük besleme planı, mevcut sistem ve saha ihtiyaçlarını paylaşabilirsiniz.",
  },
  "atik-su-camuru-ve-aritma-cozumleri": {
    heroBadge: "ATIK SU ÇAMURU VE ARITMA ÇÖZÜMLERİ",
    heroIntro:
      "Çamur işleme, susuzlaştırma, kurutma ve son ürün hazırlama süreçleri için teknik sistemler.",
    heroTitle: "Atık Su Çamuru ve Arıtma Çözümleri",
    heroDescription:
      "Atık su arıtma süreçlerinden çıkan çamurun susuzlaştırılması, kurutulması, taşınması ve işlenmesi için ekipman ve tesis çözümleri sunuyoruz.",
    heroImage: "/images/sucamuru1.jpg",
    solutionEyebrow: "Arıtma Çözümleri",
    solutionTitle: "Hangi atık su çamuru ve arıtma çözümlerini sunuyoruz?",
    solutionDescription:
      "Çamur kurutma, taşıma, besleme ve son ürün yönetimi başlıklarını tek süreç mantığında planlayarak verimli arıtma destek sistemleri kuruyoruz.",
    solutionCards: [
      { title: "Susuzlaştırma Sistemleri", text: "Çamurun hacmini azaltmak ve sonraki proseslere hazırlamak için susuzlaştırma destek çözümleri." },
      { title: "Kurutma Hatları", text: "Hedef çıkış nemine ulaşmak için kontrollü termal ve mekanik kurutma hatları." },
      { title: "Çamur Taşıma ve Besleme", text: "Çamurun dengeli aktarımı için taşıma ve dozajlama sistemleri." },
      { title: "Eleme ve Ayırma Sistemleri", text: "Çamur akışında yabancı madde veya fraksiyon ayırımı için destek hatlar." },
      { title: "Toz ve Koku Kontrolü", text: "Çamur işleme süreçlerinde emisyon ve koku yönetimi için yardımcı sistemler." },
      { title: "Son Ürün Yönetimi", text: "Kurutulmuş veya işlenmiş ürünün depolama, taşıma ve çıkış yönetimi için çözümler." },
    ],
    servicesDescription:
      "Atık su çamuru ve arıtma hatlarında nem azaltma, taşıma ve son ürün yönetimi süreçlerini saha şartlarına göre optimize ediyoruz.",
    services: [
      { title: "Proses Tasarımı", text: "Giriş çamuru karakteri ve hedef çıkış nemine göre proses akışını planlıyoruz." },
      { title: "Ekipman Seçimi", text: "Kurutma, taşıma ve besleme ekipmanlarını çamur yapısına göre belirliyoruz." },
      { title: "Makine İmalatı", text: "Projeye özel kurutma tamburu, konveyör, bunker ve yardımcı ekipmanlar üretiyoruz." },
      { title: "Tesis Yerleşim Planı", text: "Saha lojistiği, bakım erişimi ve çevresel kontrol gereksinimlerine göre yerleşim hazırlıyoruz." },
      { title: "Kurulum ve Devreye Alma", text: "Saha montajı ve işletmeye alma süreçlerini kontrollü şekilde tamamlıyoruz." },
      { title: "Anahtar Teslim Çözüm", text: "Proses tasarımından imalat ve devreye almaya kadar entegre hizmet sunuyoruz." },
    ],
    criticalDescription:
      "Çamur işleme hatlarında verim; giriş-çıkış nemi, enerji tüketimi, koku kontrolü ve bakım ihtiyacıyla birlikte değerlendirilmelidir.",
    criticalTopics: [
      { title: "Giriş çamur nemi", text: "Giriş nemi kurutma sistemi seçimi ve enerji ihtiyacı üzerinde belirleyicidir." },
      { title: "Hedef çıkış nemi", text: "Son kullanım amacına göre istenen nem seviyesi net tanımlanmalıdır." },
      { title: "Koku ve emisyon kontrolü", text: "Çamur işleme sahalarında koku ve emisyon yönetimi çevresel uyum için kritiktir." },
      { title: "Hat sürekliliği", text: "Besleme ve kurutma akışlarının kararlı olması proses verimini artırır." },
      { title: "Enerji tüketimi", text: "Kurutma ve taşıma sistemleri enerji verimliliği açısından birlikte ele alınmalıdır." },
      { title: "Aşındırıcılık ve bakım", text: "Çamur karakteri ekipman aşınması ve bakım sıklığını etkiler." },
      { title: "Depolama ve lojistik", text: "Girdi ve son ürün lojistiği saha kapasitesine uygun planlanmalıdır." },
      { title: "Çevresel uyum", text: "Arıtma tesislerinde çevresel limitler ve güvenlik kriterleri tasarımın temel parçasıdır." },
    ],
    faqDescription:
      "Atık su çamuru ve arıtma projelerinde en sık karşılaşılan nem, enerji ve son ürün yönetimi sorularını özetledik.",
    faqs: [
      { question: "Giriş çamur nemi yüksekse hangi sistem tercih edilir?", answer: "Seçim; giriş nemi, hedef çıkış seviyesi ve günlük kapasiteye göre susuzlaştırma ile kurutma kombinasyonu şeklinde yapılır." },
      { question: "Kurutulmuş ürün depolanabilir mi?", answer: "Evet, hedef son ürün yapısına göre kurutulmuş ürün depolama ve sevkiyat için uygun hale getirilebilir." },
      { question: "Koku kontrolü zorunlu mudur?", answer: "Çamur işleme sahalarında koku kontrolü çevresel uyum ve işletme konforu için büyük önem taşır." },
      { question: "Mevcut arıtma tesisine kurutma hattı eklenebilir mi?", answer: "Evet, mevcut saha ve çamur akışı incelenerek kurutma ve transfer hatları entegre edilebilir." },
      { question: "Anahtar teslim çamur işleme tesisi kuruyor musunuz?", answer: "Evet, proses tasarımı, ekipman imalatı, kurulum ve devreye alma dahil entegre çözümler sunuyoruz." },
    ],
    formTitle: "Atık Su Çamuru ve Arıtma Çözümleri için teklif veya teknik görüşme talep edin",
    formDescription:
      "Giriş çamuru tipi, günlük miktar, hedef nem seviyesi ve son ürün beklentinizi paylaşın; size uygun arıtma destek çözümünü birlikte oluşturalım.",
    formFields: [
      { id: "sludgeType", label: "Giriş Çamur Türü", type: "text", required: true },
      { id: "dailyInputAmount", label: "Günlük Giriş Miktarı", type: "number", unit: "ton/gün" },
      { id: "inputMoisture", label: "Giriş Nemi", type: "text" },
      { id: "targetMoisture", label: "Hedef Çıkış Nemi", type: "text" },
      { id: "targetProduct", label: "Son Ürün Hedefi", type: "select", options: ["Kurutulmuş ürün", "Bertaraf öncesi hacim azaltma", "Diğer"] },
    ],
    messagePlaceholder:
      "Çamur tipi, nem oranı, günlük miktar ve hedef son ürünle ilgili teknik detayları paylaşabilirsiniz.",
  },
};
