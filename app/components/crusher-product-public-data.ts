export type CrusherPublicProductRecord = {
  categorySlug: "kiricilar-ve-parcalayicilar";
  publicSlug:
    | "cekicli-kiricilar"
    | "shredder-sistemleri"
    | "dik-milli-kiricilar"
    | "ceneli-kiricilar"
    | "bicakli-primer-kiricilar"
    | "bicakli-sekonder-kiricilar"
    | "zincirli-kiricilar";
  dataSlug:
    | "cekicli-kırıcılar"
    | "shredder-sistemleri"
    | "dik-milli-kırıcılar"
    | "ceneli-kırıcılar"
    | "bicakli-primer-kırıcılar"
    | "bicakli-sekonder-kırıcılar"
    | "zincirli-kırıcılar";
  title: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  usageAreas: string[];
  technicalFeatures: string[];
  advantages: string[];
  processRole: string[];
  optionalEquipment: string[];
  relatedPages: { label: string; href: string }[];
};

export const crusherPublicProductRecords: CrusherPublicProductRecord[] = [
  {
    categorySlug: "kiricilar-ve-parcalayicilar",
    publicSlug: "cekicli-kiricilar",
    dataSlug: "cekicli-kırıcılar",
    title: "Çekiçli Kırıcılar",
    description:
      "Gübre, kompost ve kırılgan mineral hatları için çekiçli kırıcı imalatı yapıyoruz.",
    heroTitle: "Çekiçli Kırıcılar",
    heroDescription:
      "Topaklı, kırılgan veya kontrollü boyut küçültme gereken ürünler için ağır hizmet tipi çekiçli kırıcı çözümleri sunuyoruz.",
    usageAreas: [
      "Granül gübre ve organomineral üretim hatları",
      "Kompost ve organik atık ön işleme sistemleri",
      "Kırılgan mineral ve dökme katı malzeme prosesleri",
    ],
    technicalFeatures: [
      "Yüksek devirli rotor ve dengeli gövde yapısı",
      "Ürüne göre seçilen çekiç ve iç kaplama kombinasyonu",
      "Kapasiteye uygun giriş ağzı ve çıkış kontrolü",
    ],
    advantages: [
      "Homojen kırma davranışı sağlar",
      "Bakım erişimi kolay ağır hizmet tipi gövde sunar",
      "Hat içine kolay entegre olur",
    ],
    processRole: [
      "Ön küçültme veya ara kırma adımında kullanılır",
      "Kuruma, eleme veya granülasyon öncesinde ürün hazırlığını destekler",
    ],
    optionalEquipment: [
      "Toz emiş bağlantısı",
      "Aşınma plakası ve çekiç seti alternatifleri",
      "Sensör ve otomasyon grubu",
    ],
    relatedPages: [
      { label: "Shredder Sistemleri", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri" },
      { label: "Gübre Tesisi Kurulumu", href: "/hizmetler/gubre-tesisi-kurulumu" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
  {
    categorySlug: "kiricilar-ve-parcalayicilar",
    publicSlug: "shredder-sistemleri",
    dataSlug: "shredder-sistemleri",
    title: "Shredder Sistemleri",
    description:
      "Karma atık ve hacimli malzemeler için shredder sistemleri üretiyoruz.",
    heroTitle: "Shredder Sistemleri",
    heroDescription:
      "Hacimli, heterojen ve dayanımı yüksek atık akışlarında ilk kademe boyut küçültme için özel shredder çözümleri geliştiriyoruz.",
    usageAreas: [
      "Geri dönüşüm ve atık yönetimi tesisleri",
      "Kompost ve RDF / SRF hazırlama hatları",
      "Endüstriyel atık küçültme uygulamaları",
    ],
    technicalFeatures: [
      "Yüksek torklu tahrik sistemi",
      "Malzeme karakterine göre bıçak ve şaft kombinasyonu",
      "Yüksek darbe ve yabancı madde riskine uygun gövde yapısı",
    ],
    advantages: [
      "Hacimli malzemede kontrollü küçültme sağlar",
      "Güçlü tahrik ve düşük devir ile zor ürünlerde verim sunar",
      "Hat öncesi malzeme hazırlığını stabilize eder",
    ],
    processRole: [
      "İlk kademe parçalayıcı olarak çalışır",
      "Sonraki kırma, eleme veya ayırma adımlarını besler",
    ],
    optionalEquipment: [
      "Aşınma dayanımlı bıçak grubu",
      "Hidrolik itici veya besleme desteği",
      "Yük sensörü ve otomasyon paketi",
    ],
    relatedPages: [
      { label: "Bıçaklı Primer Kırıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-primer-kiricilar" },
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
  {
    categorySlug: "kiricilar-ve-parcalayicilar",
    publicSlug: "dik-milli-kiricilar",
    dataSlug: "dik-milli-kırıcılar",
    title: "Dik Milli Kırıcılar",
    description:
      "Agrega, mineral ve benzeri malzemelerde kontrollü boyut küçültme için dik milli kırıcı çözümleri sunuyoruz.",
    heroTitle: "Dik Milli Kırıcılar",
    heroDescription:
      "Abrasif ve mineral esaslı ürünlerde hedef tane boyutuna kontrollü yaklaşmak için dik milli kırıcı sistemleri geliştiriyoruz.",
    usageAreas: [
      "Mineral işleme ve agrega hatları",
      "Kırma-eleme ve sınıflandırma prosesleri",
      "Düşük nemli kırılgan ürün uygulamaları",
    ],
    technicalFeatures: [
      "Dik milli yüksek hızlı darbe prensibi",
      "Aşınmaya uygun iç yüzey ve rotor kurgusu",
      "Hedef tane dağılımına göre ayarlanabilir yapı",
    ],
    advantages: [
      "İnce ürün fraksiyonunda kontrollü dağılım sağlar",
      "Yüksek kapasitede sürekli çalışma imkanı sunar",
      "Sınıflandırma sistemleriyle uyumlu proses akışı kurar",
    ],
    processRole: [
      "Sekonder veya tersiyer kırma adımında çalışır",
      "Eleme öncesi son boyut küçültme görevini üstlenir",
    ],
    optionalEquipment: [
      "Aşınma plakaları",
      "Titreşim ve sıcaklık izleme sensörleri",
      "Bakım platformu",
    ],
    relatedPages: [
      { label: "Çeneli Kırıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/ceneli-kiricilar" },
      { label: "Madencilik ve Mineral İşleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
  {
    categorySlug: "kiricilar-ve-parcalayicilar",
    publicSlug: "ceneli-kiricilar",
    dataSlug: "ceneli-kırıcılar",
    title: "Çeneli Kırıcılar",
    description:
      "Sert ve iri boyutlu malzemelerin ilk kademe kırılması için çeneli kırıcı çözümleri sunuyoruz.",
    heroTitle: "Çeneli Kırıcılar",
    heroDescription:
      "İri boyutlu, sert ve yüksek darbe dayanımı isteyen malzemelerde primer kırma için çeneli kırıcı sistemleri tasarlıyoruz.",
    usageAreas: [
      "Primer kırma gerektiren maden hatları",
      "Agrega ve taş kırma tesisleri",
      "Yüksek giriş boyutlu endüstriyel malzeme uygulamaları",
    ],
    technicalFeatures: [
      "Güçlü çene gövdesi ve yataklama sistemi",
      "Ayarlanabilir çıkış açıklığı",
      "Ağır hizmet tipi şase ve tahrik yapısı",
    ],
    advantages: [
      "Yüksek giriş boyutunu güvenli şekilde küçültür",
      "Primer kademede kararlı performans sağlar",
      "Sonraki kademelere dengeli malzeme besler",
    ],
    processRole: [
      "İlk kademe kırma ekipmanı olarak çalışır",
      "Sekonder kırıcı ve eleme adımlarının yükünü dengeler",
    ],
    optionalEquipment: [
      "Titreşimli besleyici entegrasyonu",
      "Aşınma plakaları",
      "Otomatik ayar ve izleme sistemi",
    ],
    relatedPages: [
      { label: "Dik Milli Kırıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/dik-milli-kiricilar" },
      { label: "Kırma Eleme ve Sınıflandırma Tesisleri", href: "/sektorler/madencilik-ve-mineral-isleme/kirma-eleme-ve-siniflandirma-tesisleri" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
  {
    categorySlug: "kiricilar-ve-parcalayicilar",
    publicSlug: "bicakli-primer-kiricilar",
    dataSlug: "bicakli-primer-kırıcılar",
    title: "Bıçaklı Primer Kırıcılar",
    description:
      "İlk kademe boyut küçültme için bıçaklı primer kırıcı çözümleri sunuyoruz.",
    heroTitle: "Bıçaklı Primer Kırıcılar",
    heroDescription:
      "Lifli, hacimli veya kesme etkisiyle küçültülmesi gereken ürünlerde ilk kademe işleme için bıçaklı primer kırıcı çözümleri geliştiriyoruz.",
    usageAreas: [
      "Geri dönüşüm ve hacimli atık hatları",
      "Organik atık ve RDF hazırlama uygulamaları",
      "Kesme prensibi gerektiren endüstriyel prosesler",
    ],
    technicalFeatures: [
      "Kesme odaklı bıçak geometrisi",
      "Yüksek torklu düşük devir tahrik yapısı",
      "Malzeme girişine uygun besleme ağzı ve gövde kurgusu",
    ],
    advantages: [
      "Hacimli ürünlerde kontrollü ilk küçültme sağlar",
      "Sonraki kırma veya ayırma adımına uygun malzeme hazırlar",
      "Zor ürünlerde kesme etkisiyle stabil performans sunar",
    ],
    processRole: [
      "İlk kademe parçalama ve kırma görevini üstlenir",
      "Shredder veya sekonder kırıcı öncesinde ürün hazırlığını destekler",
    ],
    optionalEquipment: [
      "Besleme bunkerleri",
      "Hidrolik itici sistem",
      "Bıçak koruma ve sensör grubu",
    ],
    relatedPages: [
      { label: "Bıçaklı Sekonder Kırıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-sekonder-kiricilar" },
      { label: "Shredder Sistemleri", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
  {
    categorySlug: "kiricilar-ve-parcalayicilar",
    publicSlug: "bicakli-sekonder-kiricilar",
    dataSlug: "bicakli-sekonder-kırıcılar",
    title: "Bıçaklı Sekonder Kırıcılar",
    description:
      "Kontrollü çıkış boyutu için bıçaklı sekonder kırıcı imalatı yapıyoruz.",
    heroTitle: "Bıçaklı Sekonder Kırıcılar",
    heroDescription:
      "İlk küçültme sonrası daha kontrollü çıkış boyutu elde etmek için bıçaklı sekonder kırıcı çözümleri sunuyoruz.",
    usageAreas: [
      "Geri dönüşüm hatlarında ikinci kademe küçültme",
      "Organik atık ve RDF boyut standardizasyonu",
      "Kesme kontrollü son ürün hazırlama uygulamaları",
    ],
    technicalFeatures: [
      "Kontrollü bıçak aralığı ve rotor yapısı",
      "Ürüne göre optimize edilen çıkış boyutu yaklaşımı",
      "Sürekli çalışmaya uygun tahrik ve gövde tasarımı",
    ],
    advantages: [
      "Daha tutarlı çıkış boyutu sağlar",
      "Eleme ve son hazırlık aşamalarını destekler",
      "Kesme bazlı küçültmede ürün davranışını kontrol altında tutar",
    ],
    processRole: [
      "Primer kırma sonrası ikinci kademe küçültme yapar",
      "Sonraki ayırma, eleme veya depolama adımlarını dengeler",
    ],
    optionalEquipment: [
      "Değiştirilebilir bıçak setleri",
      "Aşınma plakaları",
      "Sensör ve otomasyon altyapısı",
    ],
    relatedPages: [
      { label: "Bıçaklı Primer Kırıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-primer-kiricilar" },
      { label: "Shredder Sistemleri", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
  {
    categorySlug: "kiricilar-ve-parcalayicilar",
    publicSlug: "zincirli-kiricilar",
    dataSlug: "zincirli-kırıcılar",
    title: "Zincirli Kırıcılar",
    description:
      "Topaklı ve yarı nemli ürünler için zincirli kırıcı imalatı yapıyoruz.",
    heroTitle: "Zincirli Kırıcılar",
    heroDescription:
      "Topak çözme, yarı nemli ürün küçültme ve granül öncesi hazırlık için zincirli kırıcı sistemleri geliştiriyoruz.",
    usageAreas: [
      "Organomineral ve granül gübre hatları",
      "Kompost ve yarı nemli organik ürün prosesleri",
      "Topak çözme gerektiren endüstriyel akışlar",
    ],
    technicalFeatures: [
      "Zincir darbe prensibiyle topak çözme yaklaşımı",
      "Yarı nemli ürünlerde akışı destekleyen gövde yapısı",
      "Bakım erişimine uygun ağır hizmet tipi tasarım",
    ],
    advantages: [
      "Topaklı ürünleri akışa uygun hale getirir",
      "Granülasyon veya eleme öncesinde stabil besleme sağlar",
      "Yarı nemli ürünlerde verimli boyut küçültme sunar",
    ],
    processRole: [
      "Topak çözme ve ara kırma ekipmanı olarak çalışır",
      "Kuruma, granülasyon veya eleme öncesi ürün hazırlığını güçlendirir",
    ],
    optionalEquipment: [
      "Aşınma zincir setleri",
      "Toz emiş bağlantısı",
      "Kontrollü besleme bunkerleri",
    ],
    relatedPages: [
      { label: "Çekiçli Kırıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar" },
      { label: "Granül Gübre Üretim Süreci", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
];
