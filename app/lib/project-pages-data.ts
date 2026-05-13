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
    slug: "kompost-tesisi-projeleri",
    title: "Kompost Tesisi Projeleri",
    cardDescription:
      "Evsel, organik, hayvansal ve tarimsal atik akislari icin kompostlastirma, stabilizasyon, kurutma, eleme ve nihai urun hazirlama odakli tesis projeleri gelistiriyoruz.",
    heroDescription:
      "Evsel organik atik, hayvansal gubre, aritma camuru ve tarimsal atik gibi farkli girdiler icin kompostlastirma, stabilizasyon, eleme ve son urun hazirlama odakli tesis projeleri gelistiriyoruz.",
    image: "/images/kompost1.jpg",
    imageAlt: "Kompost tesisi projeleri",
    metadataTitle: "Kompost Tesisi Projeleri | Pro Makina",
    metadataDescription:
      "Kompost tesisi projelerinde proses akisi, makine secimi, kurutma, eleme ve son urun hazirlama odakli tesis yaklasimini inceleyin.",
    projectScope: [
      "Girdi karakterizasyonu ve kompost proses sinifinin belirlenmesi",
      "Atik kabul, ayiklama, karisim ve olgunlastirma kurgusu",
      "Kurutma, eleme, paketleme ve son urun hazirlama planlamasi",
      "Saha yerlesimi, servis erisimi ve kapasite buyume senaryolari",
    ],
    machineGroups: [
      "Kompost tamburu ve olgunlastirma sistemleri",
      "Trommel elekler ve siniflandirma ekipmanlari",
      "Bant konveyorler, bunkerler ve besleme sistemleri",
      "Kurutma tamburlari, filtre ve koku kontrol ekipmanlari",
    ],
    processFlow: [
      "Atik kabul ve on ayiklama",
      "Karistirma, nem dengeleme ve yapilandirici hazirlama",
      "Aktif kompostlastirma ve olgunlastirma",
      "Eleme, gerekirse kurutma ve son urun sevki",
    ],
    investorBenefits: [
      "Farkli organik atik akislari icin proses uyumu saglanir",
      "Koku, nem ve urun kalitesi birlikte yonetilir",
      "Sahada surekli ve izlenebilir bir uretim ritmi kurulur",
      "Kompost urununun ticari degerini artiran bir son islem omurgasi olusur",
    ],
    quoteRequirements: [
      "Gunluk veya saatlik girdi tonaji",
      "Atik tipi, nem orani ve hedef son urun formu",
      "Saha olculeri, acik veya kapali alan tercihleri",
      "Koku kontrolu, paketleme ve depolama beklentileri",
    ],
    relatedLinks: [
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { label: "Kompost Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
      { label: "Trommel Elekler", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
      { label: "Evsel Organik Atiklar", href: "/sektorler/kompost-ve-organik-atik-tesisleri/evsel-organik-atiklar" },
    ],
  },
  {
    slug: "organomineral-gubre-tesisi-projeleri",
    title: "Organomineral Gubre Tesisi Projeleri",
    cardDescription:
      "Granul, mikro granul, toz ve ozel formulasyonlu organomineral gubre uretimi icin proses, kapasite, urun kalitesi ve yatirim verimliligi odakli proje yapilari hazirliyoruz.",
    heroDescription:
      "Organik ham madde, mineral bilesen ve granule son urun ihtiyacini birlikte degerlendirerek organomineral gubre tesisleri icin proses ve ekipman omurgasi tasarliyoruz.",
    image: "/images/granul1.jpg",
    imageAlt: "Organomineral gubre tesisi projeleri",
    metadataTitle: "Organomineral Gubre Tesisi Projeleri | Pro Makina",
    metadataDescription:
      "Organomineral gubre tesisi projelerinde granule son urun, kurutma, eleme ve paketleme odakli proses yaklasimini inceleyin.",
    projectScope: [
      "Formulasyona uygun ham madde ve katkilarin degerlendirilmesi",
      "Dozajlama, karistirma, granulation ve kurutma adimlarinin planlanmasi",
      "Eleme, geri donus, kaplama ve paketleme entegrasyonu",
      "Toz kontrolu ve urun standardini koruyan son islem yapisi",
    ],
    machineGroups: [
      "Dozaj bunkerleri ve mikro dozajlama sistemleri",
      "Granulator, kurutma, sogutma ve kaplama tamburlari",
      "Eleme sistemleri ve urun geri donus ekipmanlari",
      "Paketleme, torbalama ve big bag dolum hatlari",
    ],
    processFlow: [
      "Ham madde kabul ve hassas dozajlama",
      "Karistirma ve baglayici / katkili formulasyon hazirlama",
      "Granulation, kurutma ve sogutma",
      "Eleme, kaplama, paketleme ve son urun lojistigi",
    ],
    investorBenefits: [
      "Granul kalitesi ve proses sukliligi ayni kurguda ele alinir",
      "Enerji ve ekipman dengesi yatirim verimini iyilestirir",
      "Moduler buyume ve kapasite artisi senaryolari desteklenir",
      "Son urunde daha kararlı dane yapisi ve akiskanlik hedeflenir",
    ],
    quoteRequirements: [
      "Hedef urun tipi ve formulasyon sinifi",
      "Saatlik kapasite, hedef tane boyutu ve nem degerleri",
      "Ham madde kaynagi ve organik / mineral oranlari",
      "Paketleme, kaplama ve otomasyon beklentileri",
    ],
    relatedLinks: [
      { label: "Organomineral Gubre Tesisi", href: "/hizmetler/organomineral-gubre-tesisi" },
      { label: "Granul Gubre Uretim Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { label: "Kurutma Tamburlari", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
      { label: "Gubre Uretim Tesisleri", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
    ],
  },
  {
    slug: "granul-gubre-uretim-tesisi-projeleri",
    title: "Granul Gubre Uretim Tesisi Projeleri",
    cardDescription:
      "Dozajlama, karistirma, granulation, kurutma, sogutma, eleme, kaplama ve paketleme adimlarini tek proje disiplini icinde ele alan granul gubre tesisi cozumleri sunuyoruz.",
    heroDescription:
      "Granul gubre yatirimlarinda ham madde davranisi, kapasite ihtiyaci, granule kalite beklentisi ve saha yerlesimini birlikte okuyarak uygulanabilir tesis projeleri tasarliyoruz.",
    image: "/images/granul1.jpg",
    imageAlt: "Granul gubre uretim tesisi projeleri",
    metadataTitle: "Granul Gubre Uretim Tesisi Projeleri | Pro Makina",
    metadataDescription:
      "Granul gubre tesisi projelerinde granulation, kurutma, sogutma, eleme ve paketleme adimlarini teknik ve ticari acidan inceleyin.",
    projectScope: [
      "Granul gubre uretim senaryosuna uygun proses tasarimi",
      "Dozajlama, karistirma ve granulation adimlarinin olceklenmesi",
      "Kurutma, sogutma, eleme ve toz kontrol sistemlerinin entegrasyonu",
      "Paketleme ve sevkiyat altyapisinin yatirim planina gore kurgulanmasi",
    ],
    machineGroups: [
      "Makro ve mikro dozajlama sistemleri",
      "Granulator, kurutma ve sogutma tamburlari",
      "Eleme sistemleri, konveyorler ve elevatorler",
      "Paketleme, dolum ve toz toplama ekipmanlari",
    ],
    processFlow: [
      "Ham madde kabul ve dozajlama",
      "Karistirma ve granulation hazirligi",
      "Granulation, kurutma ve sogutma",
      "Eleme, geri donus, paketleme ve son urun cikisi",
    ],
    investorBenefits: [
      "Uretim ritmi ve granule kalite ayni anda optimize edilir",
      "Darbogaz riski dusurulur ve kapasite senaryolari netlesir",
      "Enerji kullanimi ve toz yonetimi proje erken asamada ele alinir",
      "Ticari urune donusen son hat kurgusu daha net planlanir",
    ],
    quoteRequirements: [
      "Planlanan saatlik uretim kapasitesi",
      "Ham madde dagilimi ve urun spesifikasyonu",
      "Hedef tane boyutu, nem araligi ve son urun standardi",
      "Paketleme tipi ve saha yerlesim sinirlari",
    ],
    relatedLinks: [
      { label: "Granul Gubre Uretim Tesisi", href: "/hizmetler/granul-gubre-uretim-tesisi" },
      { label: "Granul Gubre Uretim Sureci", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { label: "Tambur Sistemleri", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Gubre Uretim Tesisleri", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
    ],
  },
  {
    slug: "sivi-gubre-uretim-tesisi-projeleri",
    title: "Sivi Gubre Uretim Tesisi Projeleri",
    cardDescription:
      "Reaktor, cozundurme tanki, karistirma, filtrasyon, stoklama, dolum ve etiketleme sureclerini kapsayan sivi gubre uretim hatti projeleri gelistiriyoruz.",
    heroDescription:
      "Sivi gubre, organomineral sivi urun ve ozel formulasyonlu proseslerde reaktor, tank ve dolum sistemlerini birlikte ele alan proje yapilari sunuyoruz.",
    image: "/images/reaktor1.avif",
    imageAlt: "Sivi gubre uretim tesisi projeleri",
    metadataTitle: "Sivi Gubre Uretim Tesisi Projeleri | Pro Makina",
    metadataDescription:
      "Sivi gubre tesisi projelerinde reaktor, tank, filtrasyon, dolum ve etiketleme sureclerini teknik olarak inceleyin.",
    projectScope: [
      "Formulasyon mantigina gore reaktor ve tank kapasite planlamasi",
      "Karistirma, cozundurme, filtrasyon ve stoklama adimlarinin kurgulanmasi",
      "Dolum, siseleme, etiketleme ve sevkiyat akisinin tasarlanmasi",
      "Kimyasal uyum, proses guvenligi ve temizlik erisiminin degerlendirilmesi",
    ],
    machineGroups: [
      "Karistiricili reaktorler ve cozumdurme tanklari",
      "Stok tanklari ve proses baglanti hatlari",
      "Filtrasyon sistemleri ve dozaj pompasi hatlari",
      "Sivi dolum, siseleme ve etiketleme ekipmanlari",
    ],
    processFlow: [
      "Ham madde kabul ve dozajlama",
      "Cozundurme, karistirma ve reaksiyon adimlari",
      "Filtrasyon, stoklama ve ara kalite kontrol",
      "Dolum, etiketleme ve son urun sevki",
    ],
    investorBenefits: [
      "Urun kararliligi ve proses guvenligi birlikte planlanir",
      "Temizlik ve bakim erisimi yatirim asamasinda netlesir",
      "Sivi urun dolum hizina uygun ekipman omurgasi kurulur",
      "Farkli formulasyonlara uyum saglayan moduler hat yapisi olusur",
    ],
    quoteRequirements: [
      "Planlanan urun tipi ve formulasyon bilgisi",
      "Saatlik veya gunluk dolum kapasitesi",
      "Tank hacmi, isitma / sogutma ve karistirma beklentileri",
      "Ambalaj tipi ve otomasyon seviyesi",
    ],
    relatedLinks: [
      { label: "Sivi Gubre Uretim Tesisi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { label: "Reaktorler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Kimya ve Proses Endustrisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "Sivi Gubre Uretim Hatti", href: "/kutuphane/sivi-gubre-uretim-tesisi-nasil-kurulur" },
    ],
  },
  {
    slug: "biyogaz-ve-atik-yonetimi-projeleri",
    title: "Biyogaz ve Atik Yonetimi Projeleri",
    cardDescription:
      "Biyogaz besleme, organik atik kabulu, digestat yonetimi, kompostlastirma ve entegre atik degerlendirme surecleri icin muhendislik odakli proje cozumleri sunuyoruz.",
    heroDescription:
      "Biyogaz ve organik atik yonetimi projelerinde besleme surekliligi, on islem, digestat sonrasi yonetim ve yan urun degerlendirme adimlarini tek cati altinda ele aliyoruz.",
    image: "/images/biogaz1.jpg",
    imageAlt: "Biyogaz ve atik yonetimi projeleri",
    metadataTitle: "Biyogaz ve Atik Yonetimi Projeleri | Pro Makina",
    metadataDescription:
      "Biyogaz besleme, digestat yonetimi, on islem ve organik atik degerlendirme odakli proje yapilarini inceleyin.",
    projectScope: [
      "Atik kabul ve on islem mantiginin belirlenmesi",
      "Besleme bunkerleri, parcalama ve tasima hatlarinin projelendirilmesi",
      "Digestat sonrasi kurutma, kompostlastirma veya urunlestirme senaryolari",
      "Saha lojistigi, tampon stok ve kokuyla ilgili yardimci sistemlerin planlanmasi",
    ],
    machineGroups: [
      "Atik kabul bunkerleri ve besleme sistemleri",
      "Shredder, helezon ve bant konveyor hatlari",
      "Digestat kurutma ve kompost tamburu ekipmanlari",
      "Koku kontrol, filtre ve paketleme sistemleri",
    ],
    processFlow: [
      "Atik kabul ve siniflandirma",
      "Parcalama, homojenizasyon ve dozajli besleme",
      "Biyogaz prosesi sonrasi digestat yonetimi",
      "Kurutma, kompostlastirma veya yan urun hazirlama",
    ],
    investorBenefits: [
      "Biyogaz hattinin besleme ritmi daha istikrarli hale gelir",
      "Digestat sonrasi degerlendirme senaryolari netlesir",
      "Atik yonetimi ve enerji yatirimi ayni omurgada okunur",
      "Koku, stok ve saha akis riskleri proje asamasinda cozulur",
    ],
    quoteRequirements: [
      "Girdi tipi ve gunluk besleme tonaji",
      "Digestat sonrasi hedef urun veya yonetim senaryosu",
      "Tampon stok, on islem ve tasima beklentileri",
      "Saha yerlesimi ve kapali / acik alan kisitlari",
    ],
    relatedLinks: [
      { label: "Biyogaz On Islem", href: "/kutuphane/blog/biyogaz-on-islem" },
      { label: "Enerji ve Biyogaz Sistemleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Kompost Tesisi Kurulumu", href: "/hizmetler/kompost-tesisi-kurulumu" },
      { label: "Tasima Ekipmanlari", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    ],
  },
  {
    slug: "aritma-camuru-kurutma-projeleri",
    title: "Aritma Camuru Kurutma Projeleri",
    cardDescription:
      "Belediye ve endustriyel aritma camurlarinin besleme, susuzlastirma destek, kurutma, koku kontrol ve nihai urun hazirlama sureclerini kapsayan tesis projeleri hazirliyoruz.",
    heroDescription:
      "Yuksek nemli aritma camurunun kurutma, tasima, koku kontrol ve son urun yonetimi adimlarini birlikte ele alan kurutma tesisi projeleri gelistiriyoruz.",
    image: "/images/fabrika1.jpg",
    imageAlt: "Aritma camuru kurutma projeleri",
    metadataTitle: "Aritma Camuru Kurutma Projeleri | Pro Makina",
    metadataDescription:
      "Aritma camuru kurutma projelerinde besleme, susuzlastirma destek, kurutma ve koku kontrol odakli tesis yaklasimini inceleyin.",
    projectScope: [
      "Camur karakteri, nem dusurme hedefi ve kapasite analizinin yapilmasi",
      "Besleme bunkerleri ve susuzlastirma destek ekipmanlarinin kurgulanmasi",
      "Kurutma tamburu, gaz hatti, filtre ve fan altyapisinin belirlenmesi",
      "Koku kontrolu, son urun hazirlama ve depolama mantiginin projelendirilmesi",
    ],
    machineGroups: [
      "Camur besleme bunkerleri ve helezon sistemleri",
      "Kurutma tamburlari ve termal proses ekipmanlari",
      "Siklon, jet pulse filtre ve fan sistemleri",
      "Trommel elekler, paketleme ve sevkiyat ekipmanlari",
    ],
    processFlow: [
      "Camur kabul, tampon stok ve kontrollu besleme",
      "Susuzlastirma destek ve termal kurutma hazirligi",
      "Kurutma, toz ve koku yonetimi",
      "Son urun eleme, paketleme ve sevkiyat",
    ],
    investorBenefits: [
      "Nem dusurme hedefiyle uyumlu ekipman secimi yapilir",
      "Koku ve toz riskleri proje asamasinda cozulur",
      "Nihai urun degerlendirme senaryolari daha net kurulur",
      "Belediye ve endustriyel saha kisitlarina uygun bir hat yapisi olusur",
    ],
    quoteRequirements: [
      "Gunluk camur miktari ve giris / cikis nem hedefi",
      "Susuzlastirma sonrasi urun yapisi ve depolama beklentisi",
      "Koku kontrolu ve kapali alan gereksinimi",
      "Yakit tipi, enerji limiti ve saha yerlesim sinirlari",
    ],
    relatedLinks: [
      { label: "Camur Kurutma Tesisi", href: "/hizmetler/camur-kurutma-tesisi" },
      { label: "Camur Besleme", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/camur-besleme" },
      { label: "Susuzlastirma Destek Sistemleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/susuzlastirma-destek-sistemleri" },
      { label: "Kurutma Tamburlari", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
    ],
  },
  {
    slug: "maden-ve-mineral-isleme-projeleri",
    aliases: ["mineral-ve-dokme-kati-isleme-projeleri"],
    title: "Maden ve Mineral Isleme Projeleri",
    cardDescription:
      "Silis kumu, kuvars, kirec tasi, bentonit, kil, kukurt ve benzeri mineral hammaddeler icin kirma, eleme, kurutma, tasima ve stoklama odakli proses projeleri tasarliyoruz.",
    heroDescription:
      "Maden ve mineral isleme yatirimlarinda urun boyutu, asindiricilik, nem, kurutma yuku ve toz kontrolunu ayni muhendislik akisinda degerlendiriyoruz.",
    image: "/images/maden1.jpg",
    imageAlt: "Maden ve mineral isleme projeleri",
    metadataTitle: "Maden ve Mineral Isleme Projeleri | Pro Makina",
    metadataDescription:
      "Maden ve mineral isleme projelerinde kirma, eleme, kurutma, tasima ve stoklama odakli proses yaklasimini inceleyin.",
    projectScope: [
      "Mineral karakteri ve hedef urun boyutunun analiz edilmesi",
      "Kirma, eleme, tasima ve stoklama hatlarinin planlanmasi",
      "Kurutma ihtiyaci, gaz hatti ve toz toplama altyapisinin belirlenmesi",
      "Saha akisina uygun servis erisimi ve kapasite buyume senaryolarinin degerlendirilmesi",
    ],
    machineGroups: [
      "Ceneli, cekicli ve dik milli kiricilar",
      "Trommel elekler ve siniflandirma sistemleri",
      "Kurutma tamburlari ve termal proses ekipmanlari",
      "Bant konveyorler, elevatorler, silo ve bunker sistemleri",
    ],
    processFlow: [
      "Hammadde kabul ve kirma",
      "Eleme, siniflandirma ve tasima",
      "Gerekirse kurutma ve toz toplama",
      "Stoklama, paketleme veya sevkiyat hazirligi",
    ],
    investorBenefits: [
      "Asinma ve kapasite riskleri ekipman seciminde daha iyi yonetilir",
      "Kurutma ve eleme darboğazlari proje oncesi gorulur",
      "Toz, stok ve tasima akisina uygun bir tesis omurgasi kurulur",
      "Mineral bazli farkli urun tiplerine uyum saglayan moduler kurgu olusur",
    ],
    quoteRequirements: [
      "Malzeme tipi, tane boyutu ve hedef urun sinifi",
      "Saatlik kapasite ve nem bilgisi",
      "Kurutma ihtiyaci, enerji kaynagi ve saha uzunlugu",
      "Stoklama, paketleme veya sevkiyat beklentileri",
    ],
    relatedLinks: [
      { label: "Maden Kurutma ve Eleme Tesisi", href: "/hizmetler/maden-kurutma-ve-eleme-tesisi" },
      { label: "Silis Kumu Kurutma Tesisi", href: "/hizmetler/silis-kumu-kurutma-tesisi" },
      { label: "Kiricilar ve Parcalayicilar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Madencilik ve Mineral Isleme", href: "/sektorler/madencilik-ve-mineral-isleme" },
    ],
  },
  {
    slug: "kurutma-tamburu-ve-termal-proses-projeleri",
    title: "Kurutma Tamburu ve Termal Proses Projeleri",
    cardDescription:
      "Gubre, kompost, camur, kum, mineral ve dokme kati urunler icin doner kurutucu, sicak gaz, siklon, fan ve toz toplama ekipmanlarini birlikte ele alan kurutma projeleri gelistiriyoruz.",
    heroDescription:
      "Kurutma tamburu projelerinde buharlastirma yuku, gaz debisi, enerji ihtiyaci ve son urun davranisini ayni termal proses mantigi icinde planliyoruz.",
    image: "/images/fabrika1.jpg",
    imageAlt: "Kurutma tamburu ve termal proses projeleri",
    metadataTitle: "Kurutma Tamburu Projeleri | Pro Makina",
    metadataDescription:
      "Kurutma tamburu ve termal proses projelerinde gaz hatti, siklon, filtre ve enerji odakli tesis yaklasimini inceleyin.",
    projectScope: [
      "Su ucurma yuku ve termal proses gereksinimlerinin belirlenmesi",
      "Tambur capi, boyu, fan ve filtre altyapisinin secilmesi",
      "Besleme, urun cikisi ve toz toplama hatlarinin projelendirilmesi",
      "Yakit tipi, enerji verimliligi ve saha emniyetinin birlikte planlanmasi",
    ],
    machineGroups: [
      "Kurutma tamburlari ve rotary dryer sistemleri",
      "Sicak gaz jeneratore baglantilari ve brulor yapilari",
      "Siklon, jet pulse filtre, baca ve fan sistemleri",
      "Besleme konveyorleri ve cikis helezonlari",
    ],
    processFlow: [
      "Nemli urun kabul ve kontrollu besleme",
      "Termal kurutma ve gaz akisinin yonetimi",
      "Toz toplama, urun ayrisma ve cikis kontrolu",
      "Son urun sogutma, eleme veya sevkiyat hazirligi",
    ],
    investorBenefits: [
      "Enerji ve kapasite uyumu erken asamada netlesir",
      "Kurutma darboğazlari ve toz riski daha iyi yonetilir",
      "Farkli malzemelere uyarlanabilir bir termal proses omurgasi kurulur",
      "Saha guvenligi ve bakim erisimi proje asamasinda cozulur",
    ],
    quoteRequirements: [
      "Giris ve cikis nem degerleri",
      "Saatlik kapasite ve calisma suresi",
      "Malzeme tipi, tane boyutu ve bulk yogunlugu",
      "Enerji kaynagi, yakit tercihi ve saha limitleri",
    ],
    relatedLinks: [
      { label: "Kurutma Tamburu Imalati", href: "/hizmetler/kurutma-tamburu-imalati" },
      { label: "Kurutma Tamburu Hesabi", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
      { label: "Kurutma Tamburlari", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
      { label: "Silis Kumu Kurutma Tesisi", href: "/hizmetler/silis-kumu-kurutma-tesisi" },
    ],
  },
  {
    slug: "konveyor-ve-tasima-sistemleri-projeleri",
    title: "Konveyor ve Tasima Sistemleri Projeleri",
    cardDescription:
      "Bant konveyor, helezon konveyor, zincirli konveyor, kovali elevator, bunker ve silo baglantilariyla proses ici malzeme transferini guvenli ve kesintisiz hale getiren projeler hazirliyoruz.",
    heroDescription:
      "Tasima sistemleri projelerinde malzeme tipi, mesafe, egim, akiskanlik ve dozaj gereksinimlerine gore birbirine uyumlu transfer altyapisi tasarliyoruz.",
    image: "/images/makinalar1.png",
    imageAlt: "Konveyor ve tasima sistemleri projeleri",
    metadataTitle: "Konveyor ve Tasima Projeleri | Pro Makina",
    metadataDescription:
      "Bant konveyor, helezon konveyor, zincirli konveyor ve elevator odakli tasima sistemleri projelerini inceleyin.",
    projectScope: [
      "Malzeme akisina uygun tasima senaryosunun belirlenmesi",
      "Konveyor, elevator, bunker ve silo baglantilarinin projelendirilmesi",
      "Transfer noktalarinda toz, dokulme ve bakim erisiminin planlanmasi",
      "Hat boyu, elevasyon ve otomasyon senaryolarinin optimize edilmesi",
    ],
    machineGroups: [
      "Bant konveyorler ve transfer bandlari",
      "Helezon ve zincirli konveyor sistemleri",
      "Kovali elevatorler ve dikey tasima ekipmanlari",
      "Bunker, silo, rotary valf ve akis kontrol ekipmanlari",
    ],
    processFlow: [
      "Malzeme kabul ve ilk besleme",
      "Yatay veya egimli transfer",
      "Dikey tasima ve ara stoklama",
      "Dozajli cikis veya sonraki prosese kontrollu aktarim",
    ],
    investorBenefits: [
      "Hat ici malzeme akisinda durus ve dokulme azalir",
      "Bakim erisimi ve transfer guvenligi iyilesir",
      "Daha kontrollu dozaj ve stok yonetimi saglanir",
      "Farkli proses ekipmanlari arasinda kesintisiz baglanti kurulabilir",
    ],
    quoteRequirements: [
      "Malzeme tipi, bulk yogunlugu ve tane boyutu",
      "Transfer mesafesi, egim ve elevasyon bilgisi",
      "Saatlik kapasite ve calisma suresi",
      "Kapali hat, toz kontrolu veya paslanmaz ihtiyaci",
    ],
    relatedLinks: [
      { label: "Tasima Ekipmanlari", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Helezon Konveyorler", href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler" },
      { label: "Bant Konveyorler", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
      { label: "Kovali Elevatorler", href: "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler" },
    ],
  },
  {
    slug: "reaktor-ve-tank-sistemleri-projeleri",
    title: "Reaktor ve Tank Sistemleri Projeleri",
    cardDescription:
      "Sivi gubre, kimyasal proses, cozundurme, karistirma, stoklama ve kontrollu dozajlama ihtiyaclari icin reaktor ve tank sistemleri projeleri gelistiriyoruz.",
    heroDescription:
      "Reaktor ve tank projelerinde hacim, karistirma tipi, malzeme secimi, sicaklik kontrolu ve proses baglanti detaylarini birlikte tasarliyoruz.",
    image: "/images/reaktor1.avif",
    imageAlt: "Reaktor ve tank sistemleri projeleri",
    metadataTitle: "Reaktor ve Tank Sistemleri Projeleri | Pro Makina",
    metadataDescription:
      "Reaktor, tank, dozajlama ve stoklama odakli proses projelerinde kapasite ve baglanti secimlerini inceleyin.",
    projectScope: [
      "Kimyasal ve sivi proses icin hacim, malzeme ve emniyet seciminin yapilmasi",
      "Karistirma, cozumdurme, isitma / sogutma ve stoklama adimlarinin planlanmasi",
      "Filtrasyon, pompa, dozajlama ve dolum baglantilarinin projelendirilmesi",
      "Bakim, temizlik ve CIP erisimi ihtiyaclarinin degerlendirilmesi",
    ],
    machineGroups: [
      "Karistiricili reaktorler ve basincli tanklar",
      "Cozundurme, stok ve dengeleme tanklari",
      "Dozaj pompasi, filtrasyon ve proses baglanti ekipmanlari",
      "Sivi dolum ve sevkiyat altyapisi",
    ],
    processFlow: [
      "Ham madde kabul ve dozajlama",
      "Karistirma, reaksiyon veya cozumdurme",
      "Filtrasyon, ara stok ve kalite kontrol",
      "Dolum, etiketleme veya sonraki prosese aktarim",
    ],
    investorBenefits: [
      "Kimyasal uyum ve proses guvenligi daha iyi yonetilir",
      "Tank hacmi ile dolum hizi arasindaki uyum netlesir",
      "Temizlik ve servis erisimi yatirim sonrasi sorun yaratmaz",
      "Farkli urun formulasyonlarina cevap verebilen esnek bir hat kurulur",
    ],
    quoteRequirements: [
      "Urun tipi ve kimyasal karakter",
      "Tank hacmi, karistirma ve sicaklik beklentileri",
      "Dolum kapasitesi ve ambalaj senaryosu",
      "Paslanmaz kalite, basinç ve otomasyon gereksinimleri",
    ],
    relatedLinks: [
      { label: "Reaktorler ve Tanklar", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Sivi Gubre Uretim Tesisi", href: "/hizmetler/sivi-gubre-uretim-tesisi" },
      { label: "Kimya ve Proses Endustrisi", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "Iletisim", href: "/iletisim" },
    ],
  },
  {
    slug: "deri-atik-isleme-tesisi-projeleri",
    title: "Deri Atik Isleme Tesisi Projeleri",
    cardDescription:
      "Deri kaynakli atiklarin parcalama, tasima, ayristirma, proses hazirligi ve geri kazanim asamalarini kapsayan ozel endustriyel tesis cozumleri kurguluyoruz.",
    heroDescription:
      "Deri atik isleme projelerinde lifli ve nemli malzeme davranisini dikkate alarak parcalama, tasima, ayirma ve geri kazanim hazirlik hatlari tasarliyoruz.",
    image: "/images/geridonusum1.jpg",
    imageAlt: "Deri atik isleme tesisi projeleri",
    metadataTitle: "Deri Atik Isleme Projeleri | Pro Makina",
    metadataDescription:
      "Deri atik isleme tesislerinde parcalama, tasima, ayirma ve geri kazanima hazirlik odakli proje cozumlerini inceleyin.",
    projectScope: [
      "Atik karakteri, lif yapisi ve hedef parcacik boyutunun degerlendirilmesi",
      "Parcalama, ayirma ve tasima adimlarinin proses hedeflerine gore kurgulanmasi",
      "Toz, koku ve saha guvenligi ile ilgili yardimci sistemlerin planlanmasi",
      "Geri kazanima veya sonraki prosese uygun malzeme hazirlama yapisinin olusturulmasi",
    ],
    machineGroups: [
      "Shredder sistemleri ve bicakli kiricilar",
      "Bant ve helezon konveyor hatlari",
      "Bunker, stok ve kontrollu besleme sistemleri",
      "Toz toplama ve yardimci proses ekipmanlari",
    ],
    processFlow: [
      "Atik kabul ve tampon stok",
      "Parcalama, ayirma ve boyutlandirma",
      "Tasima ve proses hazirligi",
      "Geri kazanim veya sonraki hatta aktarim",
    ],
    investorBenefits: [
      "Atik akisinda duzen ve saha guvenligi saglanir",
      "Geri kazanim adimlarina uygun hazirlik urunu elde edilir",
      "Parcalama ve tasima darboğazlari daha iyi yonetilir",
      "Koku ve toz riski proje asamasinda kontrol altina alinir",
    ],
    quoteRequirements: [
      "Atik tipi, nem seviyesi ve hedef parcacik boyutu",
      "Saatlik besleme miktari ve calisma rejimi",
      "Kapali alan, toz veya koku kontrol beklentisi",
      "Sonraki proses veya geri kazanim hedefi",
    ],
    relatedLinks: [
      { label: "Geri Donusum ve Atik Yonetimi", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
      { label: "Kiricilar ve Parcalayicilar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar" },
      { label: "Tasima Ekipmanlari", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Iletisim", href: "/iletisim" },
    ],
  },
  {
    slug: "ozel-proses-ve-makine-imalati-projeleri",
    title: "Ozel Proses ve Makine Imalati Projeleri",
    cardDescription:
      "Standart makine seciminin yeterli olmadigi sahalarda kapasite, olcu, urun davranisi ve proses hedefine gore ozel makine ve hat projeleri gelistiriyoruz.",
    heroDescription:
      "Standart ekipman kataloglarinin yetersiz kaldigi projelerde saha olculeri, kapasite, urun davranisi ve entegrasyon ihtiyacina gore ozel proses ve makine imalati cozumleri tasarliyoruz.",
    image: "/images/makinalar1.png",
    imageAlt: "Ozel proses ve makine imalati projeleri",
    metadataTitle: "Ozel Proses ve Makine Projeleri | Pro Makina",
    metadataDescription:
      "Sahaya ozel proses ve makine imalati projelerinde kapasite, olcu ve entegrasyon odakli cozumleri inceleyin.",
    projectScope: [
      "Saha sinirlari ve ozel proses ihtiyacinin teknik olarak okunmasi",
      "Standart disi olcu, malzeme ve performans gereksinimlerinin belirlenmesi",
      "Atolye imalati, test ve saha entegrasyonu planlamasi",
      "Mevcut hatta uyum veya sifirdan ozel hat tasarimi yapilmasi",
    ],
    machineGroups: [
      "Ozel imalat tambur, reaktor ve tasima ekipmanlari",
      "Sahaya ozel bunker, silo ve baglanti sistemleri",
      "Deneysel veya pilot olcek yardimci proses ekipmanlari",
      "Mekanik entegrasyon ve yardimci platform imalatlari",
    ],
    processFlow: [
      "Ihtiyac analizi ve saha veri toplama",
      "Ozel tasarim ve muhendislik dogrulama",
      "Imalat, atolye montaji ve test",
      "Saha kurulumu, entegrasyon ve devreye alma",
    ],
    investorBenefits: [
      "Standart ekipmanla cozulmeyen sorunlar icin ozel bir omurga elde edilir",
      "Saha kisitlari ve proses hedefleri ayni anda yonetilir",
      "Mevcut tesisin zayif halkalari projeye ozel ekipmanla guclendirilebilir",
      "Yatirim daha kontrollu ve hedef odakli ilerler",
    ],
    quoteRequirements: [
      "Saha olculeri ve mevcut ekipman bilgisi",
      "Hedef kapasite ve urun davranisi tanimi",
      "Ozel malzeme, paslanmazlik veya asinma beklentileri",
      "Entegrasyon, otomasyon ve servis erisimi ihtiyaclari",
    ],
    relatedLinks: [
      { label: "Makine Imalati", href: "/hizmetler/makine-imalati" },
      { label: "Proses Tasarimi ve Muhendislik", href: "/hizmetler/proses-tasarimi-ve-muhendislik" },
      { label: "Makinalar ve Ekipman", href: "/makinalar-ekipman" },
      { label: "Iletisim", href: "/iletisim" },
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
