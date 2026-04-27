export type ProgramItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type ProgramGroupTool = {
  slug: string;
  title: string;
};

export type ProgramGroup = {
  id: string;
  title: string;
  description: string;
  tools: ProgramGroupTool[];
};

export type ProgramShellField = {
  label: string;
  description: string;
};

export type ProgramShellChip = {
  short: string;
  meaning: string;
};

export type ProgramShellDiagram =
  | "capacity"
  | "weight"
  | "conversion"
  | "motor"
  | "gear"
  | "shaft"
  | "sheet"
  | "filter"
  | "tank";

export type ProgramShellConfig = {
  title: string;
  diagram: ProgramShellDiagram;
  caption: string;
  fields: ProgramShellField[];
  chips: ProgramShellChip[];
};

export type GenericProgramKind =
  | "tambur"
  | "siklon"
  | "jet-pulse"
  | "tank"
  | "bunker"
  | "elek"
  | "triger"
  | "sonsuz-vida";

export type ProgramMeta = ProgramItem & {
  groupId: ProgramGroup["id"];
  shell?: ProgramShellConfig;
  genericKind?: GenericProgramKind;
};

export const sectorProductOptions: Record<string, string[]> = {
  "Gübre": [
    "Sıvı Organomineral",
    "Sıvı NPK",
    "Sıvı Amino Asit",
    "Organik Sıvı Gübre",
    "Organik Biyostimülan",
    "Granül Organomineral",
    "Granül NPK",
    "Granül Kompost",
    "Toz Organomineral",
    "Toz NPK",
  ],
  "Kompost ve Organik Atık": [
    "Evsel organik atık",
    "Hayvansal atık",
    "Tarımsal atık",
    "Gıda atığı",
    "Park ve bahçe atığı",
    "Karışık organik atık",
  ],
  "Madencilik ve Mineral": [
    "Silis",
    "Perlit",
    "Kalsit",
    "Feldspat",
    "Bentonit",
    "Zeolit",
    "Kuvars",
    "Kömür",
  ],
  "Geri Dönüşüm ve Atık Yönetimi": [
    "Plastik",
    "Metal",
    "Kağıt ve karton",
    "Cam",
    "Evsel karışık atık",
    "RDF / SRF fraksiyonu",
  ],
  "Yem, Toz ve Dökme Katı": [
    "Büyükbaş yem",
    "Küçükbaş yem",
    "Kanatlı yem",
    "Premiks",
    "Mineral toz",
    "Toz karışım",
  ],
  "Atık Su ve Çamur": [
    "Evsel çamur",
    "Endüstriyel çamur",
    "Kurutulmuş çamur",
    "Susuzlaştırılmış çamur",
  ],
  "Enerji ve Biyogaz": [
    "Tarımsal atık",
    "Hayvansal atık",
    "Gıda atığı",
    "Organik çamur",
    "Biyokütle karışımı",
  ],
  "Kimya ve Proses": [
    "Sıvı kimyasal",
    "Korozif ürün",
    "Çözelti",
    "Emülsiyon",
    "Deterjan bazı",
  ],
};

const rawProgramDefinitions: ProgramMeta[] = [
  {
    slug: "helezon-kapasite-ve-mekanik-secim-programi",
    title: "Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı",
    description:
      "Helezon çapı, hatve, devir, kapasite uygunluğu, motor gücü ve mekanik seçim önerileri için profesyonel ön seçim aracıdır.",
    image: "/images/konveyor2.jpg",
    alt: "Helezon kapasite ve mekanik seçim programı görseli",
    groupId: "makina-kapasite-hesaplari",
  },
  {
    slug: "elevator-kapasite-ve-secim-programi",
    title: "Elevatör Kapasite ve Seçim Programı",
    description:
      "Bantlı veya zincirli elevatör seçimi, kova ölçüsü, hat hızı ve temel mekanik uygunluk için ön seçim aracıdır.",
    image: "/images/konveyor2.jpg",
    alt: "Elevatör kapasite ve seçim programı görseli",
    groupId: "makina-kapasite-hesaplari",
  },
  {
    slug: "konveyor-kapasite-ve-secim-hesap-programi",
    title: "Konveyör Kapasite ve Seçim Hesap Programı",
    description:
      "Bantlı konveyör kapasitesi, bant genişliği, bant hızı, tambur çapı ve tahrik önerileri için profesyonel seçim ekranıdır.",
    image: "/images/konveyor2.jpg",
    alt: "Konveyör kapasite ve seçim hesap programı görseli",
    groupId: "makina-kapasite-hesaplari",
  },
  {
    slug: "tambur-hesabi",
    title: "Tambur Hesabı",
    description:
      "Tambur çapı, boyu, dönüş hızı ve doluluk yaklaşımına göre ön boyutlandırma ve proses uygunluğu sunar.",
    image: "/images/tambur1.jpg",
    alt: "Tambur hesabı görseli",
    groupId: "makina-kapasite-hesaplari",
    genericKind: "tambur",
    shell: {
      title: "Tambur ön boyutlandırma kurgusu",
      diagram: "capacity",
      caption:
        "Besleme kapasitesi, ürün yapısı ve hedef bekleme süresine göre tambur çapı ile dönüş hızı birlikte değerlendirilir.",
      fields: [
        {
          label: "Ürün ve proses seçimi",
          description: "Tambur hesabında ürün tipi, nem durumu ve proses amacı seçim mantığını belirler.",
        },
        {
          label: "Kapasite ve çalışma süresi",
          description: "Saatlik besleme, doluluk ve bekleme süresi birlikte boyutlandırma yaklaşımını etkiler.",
        },
        {
          label: "Otomatik öneriler",
          description: "Sistem çap, boy ve dönüş hızı için ön mühendislik önerileri üretir.",
        },
      ],
      chips: [
        { short: "Q", meaning: "Besleme kapasitesi" },
        { short: "D", meaning: "Tambur çapı" },
        { short: "L", meaning: "Tambur boyu" },
      ],
    },
  },
  {
    slug: "siklon-hesabi",
    title: "Siklon Hesabı",
    description:
      "Gaz debisi, partikül yükü ve hedef ayırma performansına göre siklon gövdesi ve akış uygunluğunu değerlendirir.",
    image: "/images/proses1.jpg",
    alt: "Siklon hesabı görseli",
    groupId: "makina-kapasite-hesaplari",
    genericKind: "siklon",
    shell: {
      title: "Siklon seçim mantığı",
      diagram: "filter",
      caption:
        "Gaz debisi, giriş hızı ve partikül karakterine göre gövde çapı, basınç kaybı ve ayırma sınıfı birlikte yorumlanır.",
      fields: [
        {
          label: "Gaz akışı",
          description: "Debi, sıcaklık ve toz yükü siklon giriş hızını ve gövde boyutunu belirler.",
        },
        {
          label: "Partikül yapısı",
          description: "Ürün tipi ve tane karakteri ayırma verimini doğrudan etkiler.",
        },
        {
          label: "Otomatik kontrol",
          description: "Sistem önerilen hız aralığını ve basınç kaybı riskini anlık olarak yorumlar.",
        },
      ],
      chips: [
        { short: "Q", meaning: "Gaz debisi" },
        { short: "V", meaning: "Giriş hızı" },
        { short: "ΔP", meaning: "Basınç kaybı" },
      ],
    },
  },
  {
    slug: "jet-pulse-hesabi",
    title: "Jet Pulse Hesabı",
    description:
      "Filtre yüzeyi, hava debisi ve temizleme periyoduna göre jet pulse filtre sistemi için ön kapasite ve ekipman önerisi sunar.",
    image: "/images/fabrika1.jpg",
    alt: "Jet pulse hesabı görseli",
    groupId: "makina-kapasite-hesaplari",
    genericKind: "jet-pulse",
    shell: {
      title: "Filtre yüzeyi ve temizlik kurgusu",
      diagram: "filter",
      caption:
        "Hava debisi, toz yükü ve çalışma rejimine göre filtre alanı, torba adedi ve jet pulse periyodu birlikte ele alınır.",
      fields: [
        {
          label: "Hava debisi ve yük",
          description: "Toplam emiş debisi ve toz yükü filtre alanı hesabının ana girdisidir.",
        },
        {
          label: "Çalışma rejimi",
          description: "Sürekli veya kesikli çalışma filtre yüzeyi ve darbe sıklığı üzerinde etkilidir.",
        },
        {
          label: "Bakım yorumu",
          description: "Sistem yüzey yetersizliği, yüksek hız veya kısa temizlik periyodu risklerini gösterir.",
        },
      ],
      chips: [
        { short: "A", meaning: "Filtre alanı" },
        { short: "Q", meaning: "Hava debisi" },
        { short: "P", meaning: "Jet pulse" },
      ],
    },
  },
  {
    slug: "tank-hesabi",
    title: "Tank Hesabı",
    description:
      "Hacim, bekleme süresi, ürün yoğunluğu ve proses gereksinimlerine göre tank kapasitesi ve temel boyutlandırma yaklaşımı sağlar.",
    image: "/images/tank1.jpg",
    alt: "Tank hesabı görseli",
    groupId: "makina-kapasite-hesaplari",
    genericKind: "tank",
    shell: {
      title: "Tank hacmi ve geometri yaklaşımı",
      diagram: "tank",
      caption:
        "Ürün tipi, bekleme süresi ve karıştırma gereksinimine göre önerilen hacim, çap / yükseklik oranı ve ekipman yaklaşımı oluşturulur.",
      fields: [
        {
          label: "Ürün karakteri",
          description: "Sıvı, kimyasal veya yoğun karışım seçimi malzeme ve geometri önerisini değiştirir.",
        },
        {
          label: "Bekleme süresi",
          description: "Hedef stok süresi ve batch yaklaşımı toplam hacmi belirler.",
        },
        {
          label: "Karıştırma ihtiyacı",
          description: "Homojenizasyon gereksinimi olduğunda karıştırıcı ve iç ekipman önerileri öne çıkar.",
        },
      ],
      chips: [
        { short: "V", meaning: "Tank hacmi" },
        { short: "H/D", meaning: "Yükseklik / çap oranı" },
        { short: "Mix", meaning: "Karıştırma ihtiyacı" },
      ],
    },
  },
  {
    slug: "bunker-hesabi",
    title: "Bunker Hesabı",
    description:
      "Malzeme akışı, stok süresi ve boşaltma gereksinimine göre bunker hacmi ve geometrik ön seçim sunar.",
    image: "/images/konveyor2.jpg",
    alt: "Bunker hesabı görseli",
    groupId: "makina-kapasite-hesaplari",
    genericKind: "bunker",
    shell: {
      title: "Bunker hacmi ve akış güvenliği",
      diagram: "capacity",
      caption:
        "Stok süresi, ürün akış davranışı ve boşaltma ekipmanı birlikte değerlendirilerek hacim ve konik geometri önerisi yapılır.",
      fields: [
        {
          label: "Stok ihtiyacı",
          description: "Saatlik veya günlük besleme ile hedef stok süresi bunker hacmini belirler.",
        },
        {
          label: "Akış davranışı",
          description: "Nemli, köprüleşen veya yapışkan malzemelerde duvar açısı ve titreşim ekipmanı kritik hale gelir.",
        },
        {
          label: "Boşaltma önerisi",
          description: "Sistem çıkış ağzı, konik açı ve akış yardımcısı önerilerini otomatik yorumlar.",
        },
      ],
      chips: [
        { short: "V", meaning: "Bunker hacmi" },
        { short: "α", meaning: "Konik açı" },
        { short: "Q", meaning: "Boşaltma debisi" },
      ],
    },
  },
  {
    slug: "elek-hesabi",
    title: "Elek Hesabı",
    description:
      "Eleme alanı, tane boyutu dağılımı ve kapasite hedeflerine göre elek seçimi ve ön boyutlandırma değerlendirmesi sunar.",
    image: "/images/makinalar1.png",
    alt: "Elek hesabı görseli",
    groupId: "makina-kapasite-hesaplari",
    genericKind: "elek",
    shell: {
      title: "Eleme alanı ve sınıflandırma yaklaşımı",
      diagram: "capacity",
      caption:
        "Besleme kapasitesi, ürün tane boyutu ve hedef fraksiyona göre elek yüzeyi, kat sayısı ve mesh önerileri oluşturulur.",
      fields: [
        {
          label: "Besleme özellikleri",
          description: "Kapasite, nem ve tane boyutu dağılımı eleme verimi açısından temel girdidir.",
        },
        {
          label: "Hedef fraksiyon",
          description: "Kesim boyutu ve istenen ayrım eleme yüzeyi ile kat sayısını etkiler.",
        },
        {
          label: "Sistem yorumları",
          description: "Yapışma, aşırı ince fraksiyon veya düşük alan riski varsa anlık uyarı üretilir.",
        },
      ],
      chips: [
        { short: "A", meaning: "Elek alanı" },
        { short: "Mesh", meaning: "Kesim boyutu" },
        { short: "n", meaning: "Kat sayısı" },
      ],
    },
  },
  {
    slug: "sac-kaynak-hesaplari",
    title: "Sac, Kaynak ve İmalat Hesapları",
    description:
      "Sac ağırlık, büküm açılım boyu, abkant tonajı ve kaynak dolgu miktarı için hızlı imalat ön hesapları sunar.",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=1200&q=80",
    alt: "Sac ve kaynak hesapları görseli",
    groupId: "maliyet-hesaplari",
    shell: {
      title: "İmalat girdileri ve maliyet yaklaşımı",
      diagram: "sheet",
      caption:
        "Sac kalınlığı, büküm boyu, kaynak tipi ve miktar bilgisine göre imalat girdileri ile yaklaşık yük hesabı oluşturulur.",
      fields: [
        {
          label: "Geometri ve ölçüler",
          description: "Sac boyutları, büküm hattı ve dikiş uzunluğu ana maliyet girdileridir.",
        },
        {
          label: "Malzeme ve adet",
          description: "Malzeme tipi, kalınlık ve üretim adedi toplam imalat yükünü değiştirir.",
        },
        {
          label: "Otomatik özet",
          description: "Sistem ağırlık, tonaj ve kaynak ihtiyacı için hızlı ön değerlendirme üretir.",
        },
      ],
      chips: [
        { short: "kg", meaning: "Malzeme yükü" },
        { short: "m", meaning: "Büküm / kaynak metrajı" },
        { short: "t", meaning: "Abkant tonajı" },
      ],
    },
  },
  {
    slug: "malzeme-agirlik-hesabi",
    title: "Malzeme Ağırlık Hesabı",
    description:
      "Sac, lama, dolu mil, profil ve disk gibi geometriler için boyut ve yoğunluk bilgisine göre ağırlık hesabını hızla değerlendirin.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Malzeme ağırlık hesabı görseli",
    groupId: "maliyet-hesaplari",
  },
  {
    slug: "mil-capi-hesabi",
    title: "Mil Çapı Hesabı",
    description:
      "Burulma momenti, eğilme etkisi ve malzeme seçimine göre dolu mil veya boru mil ön boyutlandırması yapar.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "Mil çapı hesabı görseli",
    groupId: "mil-kaplin-ve-baglanti-hesaplari",
    shell: {
      title: "Mil boyutlandırma kurgusu",
      diagram: "shaft",
      caption:
        "Tork, devir, çalışma tipi ve malzeme seçimine göre önerilen mil çapı ile güvenlik yorumu birlikte verilir.",
      fields: [
        {
          label: "Tork ve devir",
          description: "Mil çapı hesabının temelinde aktarılan moment ve çalışma devri bulunur.",
        },
        {
          label: "Malzeme ve güvenlik",
          description: "Malzeme dayanımı ve servis faktörü önerilen çapı doğrudan etkiler.",
        },
        {
          label: "Bağlantı yaklaşımı",
          description: "Kama, kaplin ve göbek ölçüleri için uyum kontrolü otomatik gösterilir.",
        },
      ],
      chips: [
        { short: "T", meaning: "Tork" },
        { short: "n", meaning: "Devir" },
        { short: "d", meaning: "Mil çapı" },
      ],
    },
  },
  {
    slug: "kaplin-secimi-on-hesabi",
    title: "Kaplin Seçimi Ön Hesabı",
    description:
      "Tork, devir ve mil çapına göre kaplin sınıfı, esnek-rijit karşılaştırması ve ön uygunluk yorumu sunar.",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
    alt: "Kaplin seçimi ön hesabı görseli",
    groupId: "mil-kaplin-ve-baglanti-hesaplari",
    shell: {
      title: "Kaplin ön seçim mantığı",
      diagram: "shaft",
      caption:
        "Tork, mil çapı ve çalışma rejimine göre kaplin tipi, elastik yapı ve bağlantı uyumu birlikte değerlendirilir.",
      fields: [
        {
          label: "Tork ve çalışma şekli",
          description: "Sürekli, darbeli veya hassas çalışma seçimi kaplin sınıfını etkiler.",
        },
        {
          label: "Mil bağlantısı",
          description: "Mil çapı ve kama bilgisi göbek uygunluğunu belirler.",
        },
        {
          label: "Sistem yorumu",
          description: "Titreşim, hizalama ve servis kolaylığı açısından ön öneri sunulur.",
        },
      ],
      chips: [
        { short: "T", meaning: "Tork" },
        { short: "d", meaning: "Mil çapı" },
        { short: "K", meaning: "Kaplin sınıfı" },
      ],
    },
  },
  {
    slug: "kama-kanali-acim-olculeri",
    title: "Kama Kanalı Açım Ölçüleri",
    description:
      "Kama eni, kama yüksekliği, mile girilecek t1 ve deliğe girilecek t2 değerlerini standart aralığa göre sunar.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    alt: "Kama kanalı açım ölçüleri görseli",
    groupId: "mil-kaplin-ve-baglanti-hesaplari",
    shell: {
      title: "Standart kama bağlantısı yaklaşımı",
      diagram: "shaft",
      caption:
        "Mil çapı ve standart seçimine göre kama genişliği, kanal ölçüsü ve montaj uygunluğu hızlıca değerlendirilir.",
      fields: [
        {
          label: "Mil çapı",
          description: "Seçilen çap aralığı standart kama serisini ve kanal ölçülerini belirler.",
        },
        {
          label: "Standart seçim",
          description: "DIN / ISO yaklaşımı kanal derinliği ve tolerans aralığını etkiler.",
        },
        {
          label: "Bağlantı kontrolü",
          description: "Sistem ölçülerin mekanik bütünlüğe uygun olup olmadığını ön yorumla verir.",
        },
      ],
      chips: [
        { short: "b", meaning: "Kama eni" },
        { short: "t1", meaning: "Mil kanalı" },
        { short: "t2", meaning: "Göbek kanalı" },
      ],
    },
  },
  {
    slug: "segman-ve-kanal-olculeri",
    title: "Segman ve Kanal Ölçüleri",
    description:
      "DIN 472 iç segman ve DIN 471 dış segman standartlarına göre segman kalınlığı, kanal genişliği ve kanal derinliği bilgilerini sunar.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    alt: "Segman ve kanal ölçüleri görseli",
    groupId: "mil-kaplin-ve-baglanti-hesaplari",
    shell: {
      title: "Segman kanalı seçim yaklaşımı",
      diagram: "shaft",
      caption:
        "Mil veya delik çapına göre segman kalınlığı, kanal genişliği ve montaj için gerekli ölçüler otomatik getirilir.",
      fields: [
        {
          label: "Segman tipi",
          description: "İç veya dış segman seçimi kanal yönünü ve ölçü standardını belirler.",
        },
        {
          label: "Çap aralığı",
          description: "Nominal çap segman serisini ve kanal ölçülerini otomatik eşleştirir.",
        },
        {
          label: "Montaj yorumu",
          description: "Sistem sıkılık ve servis kolaylığı açısından hızlı teknik yorum sunar.",
        },
      ],
      chips: [
        { short: "d", meaning: "Nominal çap" },
        { short: "m", meaning: "Segman kalınlığı" },
        { short: "g", meaning: "Kanal genişliği" },
      ],
    },
  },
  {
    slug: "motor-gucu-on-hesabi",
    title: "Motor Gücü Ön Hesabı",
    description:
      "Tork, devir, verim ve servis faktörüne göre gerekli motor gücü ve redüktör çıkış değerlendirmesi yapar.",
    image: "https://images.unsplash.com/photo-1581092335397-9fa34110866f?auto=format&fit=crop&w=1200&q=80",
    alt: "Motor gücü ön hesabı görseli",
    groupId: "guc-aktarim-hesaplari",
    shell: {
      title: "Güç iletimi ön değerlendirmesi",
      diagram: "motor",
      caption:
        "Tork, devir, servis faktörü ve verim bilgilerine göre motor gücü ile redüktör çıkış ihtiyacı birlikte değerlendirilir.",
      fields: [
        {
          label: "Yük bilgisi",
          description: "Moment, hız ve çalışma süresi motor gücü seçiminin temelini oluşturur.",
        },
        {
          label: "Servis faktörü",
          description: "Darbeli veya sürekli çalışma seçimi emniyet payını etkiler.",
        },
        {
          label: "Tahrik önerisi",
          description: "Sistem güç aralığı, tork ve redüktör uygunluğu için otomatik yorum üretir.",
        },
      ],
      chips: [
        { short: "P", meaning: "Motor gücü" },
        { short: "T", meaning: "Tork" },
        { short: "n", meaning: "Devir" },
      ],
    },
  },
  {
    slug: "kayis-kasnak-oran-hesabi",
    title: "Kayış-Kasnak Oran Hesabı",
    description:
      "Kasnak çapı, devir, kayış hızı ve merkez mesafesine göre oran ve kayış boyu ön hesabı sunar.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Kayış kasnak oran hesabı görseli",
    groupId: "guc-aktarim-hesaplari",
    shell: {
      title: "Kayış-kasnak iletim zinciri",
      diagram: "motor",
      caption:
        "Sürücü ve sürülen kasnak çapları ile hedef devir oranına göre merkez mesafesi ve kayış boyu ön hesabı yapılır.",
      fields: [
        {
          label: "Devir ve oran",
          description: "Hedef devir oranı kasnak çapları ve kayış hızını belirler.",
        },
        {
          label: "Merkez mesafesi",
          description: "Seçilen mesafe kayış boyu ve servis uygunluğu açısından önemlidir.",
        },
        {
          label: "Sistem yorumu",
          description: "Aşırı hız, küçük kasnak veya servis sınırı riski varsa anında gösterilir.",
        },
      ],
      chips: [
        { short: "i", meaning: "Devir oranı" },
        { short: "D", meaning: "Kasnak çapı" },
        { short: "L", meaning: "Kayış boyu" },
      ],
    },
  },
  {
    slug: "zincir-disli-hesabi",
    title: "Zincir ve Dişli Hesapları",
    description:
      "Zincir ve dişli seçim süreçlerinde kullanılabilecek temel ölçü, oran ve uyum hesaplarını inceleyin.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    alt: "Zincir ve dişli hesapları görseli",
    groupId: "guc-aktarim-hesaplari",
    shell: {
      title: "Zincir-dişli seçim mantığı",
      diagram: "gear",
      caption:
        "Devir oranı, tork ve merkez mesafesine göre dişli adımı, diş sayısı ve zincir uygunluğu ön değerlendirilir.",
      fields: [
        {
          label: "Oran ve devir",
          description: "Sistem hedef çevrim oranına göre diş sayısı kombinasyonlarını sınırlar.",
        },
        {
          label: "Yük ve servis",
          description: "Tork ve çalışma rejimi zincir serisinin seçimini etkiler.",
        },
        {
          label: "Montaj uygunluğu",
          description: "Merkez mesafesi ve zincir boyu için otomatik yerleşim yorumu üretilir.",
        },
      ],
      chips: [
        { short: "Z", meaning: "Diş sayısı" },
        { short: "p", meaning: "Zincir adımı" },
        { short: "i", meaning: "İletim oranı" },
      ],
    },
  },
  {
    slug: "duz-helis-disli-hesabi",
    title: "Düz / Helis Dişli Hesabı",
    description:
      "Düz ve helisel dişli hesaplarında temel ölçü, oran ve mekanik uyum verilerini tek ekranda değerlendirin.",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
    alt: "Düz helis dişli hesabı görseli",
    groupId: "guc-aktarim-hesaplari",
  },
  {
    slug: "kremayer-disli-hesabi",
    title: "Kremayer Dişli Hesabı",
    description:
      "Lineer hareket sistemlerinde kremayer ve dişli uyumunu değerlendirmek için teknik bir yardımcı araç sunar.",
    image: "https://images.unsplash.com/photo-1581092918484-8313b2f1141c?auto=format&fit=crop&w=1200&q=80",
    alt: "Kremayer dişli hesabı görseli",
    groupId: "guc-aktarim-hesaplari",
  },
  {
    slug: "triger-disli-hesabi",
    title: "Triger Dişli Hesabı",
    description:
      "Triger dişli seçiminde ölçü, hatve ve temel aktarım uygunluğunu değerlendiren sade mühendislik aracıdır.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "Triger dişli hesabı görseli",
    groupId: "guc-aktarim-hesaplari",
    genericKind: "triger",
    shell: {
      title: "Triger iletim ön seçimi",
      diagram: "gear",
      caption:
        "Kasnak çapı, hatve, hedef oran ve servis sınıfına göre triger dişli için ön aktarım önerileri oluşturulur.",
      fields: [
        {
          label: "Hatve ve oran",
          description: "Triger dişli hatvesi ile kasnak diş sayıları aktarım dengesini belirler.",
        },
        {
          label: "Çalışma yükü",
          description: "Yük dalgalanması ve servis faktörü dişli serisi seçiminde dikkate alınır.",
        },
        {
          label: "Uygunluk yorumu",
          description: "Sistem aşırı küçük kasnak veya yüksek hız riskini anında gösterir.",
        },
      ],
      chips: [
        { short: "p", meaning: "Hatve" },
        { short: "Z", meaning: "Diş sayısı" },
        { short: "i", meaning: "Aktarım oranı" },
      ],
    },
  },
  {
    slug: "sonsuz-vida-disli-hesabi",
    title: "Sonsuz Vida Dişli Hesabı",
    description:
      "Sonsuz vida ve dişli kombinasyonlarında temel oran, güç aktarımı ve ölçü yaklaşımını değerlendiren ön seçim ekranıdır.",
    image: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=1200&q=80",
    alt: "Sonsuz vida dişli hesabı görseli",
    groupId: "guc-aktarim-hesaplari",
    genericKind: "sonsuz-vida",
    shell: {
      title: "Sonsuz vida ön boyutlandırma",
      diagram: "gear",
      caption:
        "Hedef oran, tork ve ısıl yük bilgilerine göre sonsuz vida dişli çiftinin ön seçim mantığı oluşturulur.",
      fields: [
        {
          label: "Oran ve tork",
          description: "Yüksek oranlı aktarım ihtiyacı ve tork seviyesi dişli sınıfını belirler.",
        },
        {
          label: "Çalışma sıcaklığı",
          description: "Isıl yük ve servis koşulu verim ile malzeme seçiminde kritik rol oynar.",
        },
        {
          label: "Sistem yorumu",
          description: "Verim düşüşü, yüksek ısı veya servis sınıfı riski otomatik gösterilir.",
        },
      ],
      chips: [
        { short: "i", meaning: "İletim oranı" },
        { short: "T", meaning: "Tork" },
        { short: "η", meaning: "Verim" },
      ],
    },
  },
  {
    slug: "donusum-araclari",
    title: "Dönüşüm Araçları",
    description:
      "Uzunluk, güç, tork, basınç, sıcaklık ve yoğunluk tabanlı mühendislik dönüşümlerini tek ekranda yönetin.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    alt: "Dönüşüm araçları görseli",
    groupId: "donusum-araclari",
    shell: {
      title: "Mühendislik dönüşüm paneli",
      diagram: "conversion",
      caption:
        "Birimler arasında çift yönlü dönüşüm yaparak kapasite, yoğunluk ve güç verilerini teknik değerlendirmeye hazır hale getirin.",
      fields: [
        {
          label: "Kaynak değer",
          description: "Tek bir değeri girmeniz yeterlidir; diğer alanlar otomatik güncellenir.",
        },
        {
          label: "Referans ölçü",
          description: "Bazı dönüşümlerde çap veya yoğunluk gibi ek referans veriler kullanılır.",
        },
        {
          label: "Sektörel veri",
          description: "Yoğunluk ve hacim araçlarında sektör bazlı hazır ürün listeleri kullanılabilir.",
        },
      ],
      chips: [
        { short: "mm", meaning: "Uzunluk" },
        { short: "kW", meaning: "Güç" },
        { short: "kg/m³", meaning: "Yoğunluk" },
      ],
    },
  },
  {
    slug: "ahir-atigi-hesaplama",
    title: "Ahır Atığı Hesaplama",
    description:
      "Hayvan türü ve işletme yapısına göre günlük, aylık ve yıllık atık miktarını hesaplayarak kompost, biyogaz ve taşıma sistemleri için ön veri üretir.",
    image: "/images/fabrika1.jpg",
    alt: "Ahır atığı hesaplama programı görseli",
    groupId: "diger-hesaplamalar",
  },
  {
    slug: "evsel-atik-cop-hesaplama",
    title: "Evsel Atık / Çöp Hesaplama",
    description:
      "Nüfus, yerleşim tipi ve organik oran verilerine göre evsel atık miktarını hesaplayarak ayrıştırma ve organik atık tesisleri için ön kapasite çıkarır.",
    image: "/images/fabrika1.jpg",
    alt: "Evsel atık ve çöp hesaplama programı görseli",
    groupId: "diger-hesaplamalar",
  },
  {
    slug: "atik-su-ve-aritma-camuru-hesaplama",
    title: "Atık Su ve Arıtma Çamuru Hesaplama",
    description:
      "Debi veya mevcut çamur verileriyle susuzlaştırma ve kurutma sonrası tonajları hesaplayarak arıtma çamuru prosesleri için ön fizibilite sağlar.",
    image: "/images/proses1.jpg",
    alt: "Atık su ve arıtma çamuru hesaplama programı görseli",
    groupId: "diger-hesaplamalar",
  },
  {
    slug: "biyogaz-guc-kw-hesaplama",
    title: "Biyogaz Güç (kW) Hesaplama",
    description:
      "Besleme tipi ve tonaja göre biyogaz potansiyeli, elektrik gücü ve yıllık enerji üretimi için ön hesap oluşturur.",
    image: "/images/proses1.jpg",
    alt: "Biyogaz güç hesaplama programı görseli",
    groupId: "diger-hesaplamalar",
  },
  {
    slug: "kompost-son-urun-hesaplama",
    title: "Kompost Son Ürün Hesaplama",
    description:
      "Giriş atığı, nem ve kütle kaybı yaklaşımına göre son kompost miktarını hesaplayarak ürün ve depolama planlamasına destek olur.",
    image: "/images/tambur1.jpg",
    alt: "Kompost son ürün hesaplama programı görseli",
    groupId: "diger-hesaplamalar",
  },
  {
    slug: "kurutma-nem-dusurme-hesaplama",
    title: "Kurutma / Nem Düşürme Hesaplama",
    description:
      "Giriş tonajı ile giriş ve çıkış nemine göre buharlaşacak suyu ve kurutma yükünü hesaplayarak proses ön boyutlandırması sağlar.",
    image: "/images/tambur1.jpg",
    alt: "Kurutma ve nem düşürme hesaplama programı görseli",
    groupId: "diger-hesaplamalar",
  },
  {
    slug: "depolama-hacmi-stok-suresi-hesaplama",
    title: "Depolama Hacmi / Stok Süresi Hesaplama",
    description:
      "Yoğunluk, tüketim ve stok süresine göre bunker, silo veya açık stok hacmi için ön kapasite hesabı yapar.",
    image: "/images/tank1.jpg",
    alt: "Depolama hacmi ve stok süresi hesaplama programı görseli",
    groupId: "diger-hesaplamalar",
  },
  {
    slug: "talasli-imalat-hesaplari",
    title: "Talaşlı İmalat Hesapları",
    description:
      "Havşa, delik yerleşimi ve temel talaşlı imalat referansları için çok amaçlı yardımcı mühendislik ekranıdır.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    alt: "Talaşlı imalat hesapları görseli",
    groupId: "diger-hesaplamalar",
    shell: {
      title: "Talaşlı imalat ön değerlendirmesi",
      diagram: "sheet",
      caption:
        "Delik, havşa ve yardımcı işleme verilerini tek ekranda toplayarak imalat öncesi hızlı kontrol ve karar desteği sağlar.",
      fields: [
        {
          label: "Kesici ve geometri",
          description: "Delik çapı, takım tipi ve işleme adımı sonuçların temelini oluşturur.",
        },
        {
          label: "İşleme yaklaşımı",
          description: "Ön delik, havşa ve yardımcı ölçüler operasyon dizilimine göre yorumlanır.",
        },
        {
          label: "Operasyon özeti",
          description: "Sistem hız, sıra ve işleme riskleri için kısa bir teknik özet üretir.",
        },
      ],
      chips: [
        { short: "Ø", meaning: "Delik çapı" },
        { short: "L", meaning: "İşleme boyu" },
        { short: "n", meaning: "Devir" },
      ],
    },
  },
  {
    slug: "iso-gecme-toleranslari",
    title: "ISO Geçme Toleransları",
    description:
      "Mil toleransı, delik toleransı ve geçme karşılaştırması için limit ölçüleri değerlendiren teknik hesap aracıdır.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    alt: "ISO geçme toleransları görseli",
    groupId: "diger-hesaplamalar",
    shell: {
      title: "Geçme ve tolerans kontrolü",
      diagram: "shaft",
      caption:
        "Mil ve delik tolerans sınıflarına göre boşluk, sıkılık ve montaj yaklaşımı teknik olarak karşılaştırılır.",
      fields: [
        {
          label: "Nominal ölçü",
          description: "Temel çap değeri tolerans bandının hesaplanacağı başlangıç verisidir.",
        },
        {
          label: "Tolerans sınıfı",
          description: "Mil ve delik sınıfları boşluklu veya sıkı geçme karakterini belirler.",
        },
        {
          label: "Montaj yorumu",
          description: "Sistem servis, sökme ve hassasiyet açısından geçme önerisini yorumlar.",
        },
      ],
      chips: [
        { short: "H7", meaning: "Delik sınıfı" },
        { short: "h6", meaning: "Mil sınıfı" },
        { short: "Δ", meaning: "Geçme aralığı" },
      ],
    },
  },
];

const groupDefinitions: Array<{
  id: ProgramGroup["id"];
  title: string;
  description: string;
  toolSlugs: string[];
}> = [
  {
    id: "makina-kapasite-hesaplari",
    title: "Makine Kapasite Hesapları",
    description:
      "Konveyör, elevatör, helezon, tambur, siklon, filtre, tank, bunker ve eleme ekipmanları için kapasite, seçim ve temel mekanik uygunluk hesap araçları.",
    toolSlugs: [
      "helezon-kapasite-ve-mekanik-secim-programi",
      "elevator-kapasite-ve-secim-programi",
      "konveyor-kapasite-ve-secim-hesap-programi",
      "tambur-hesabi",
      "siklon-hesabi",
      "jet-pulse-hesabi",
      "tank-hesabi",
      "bunker-hesabi",
      "elek-hesabi",
    ],
  },
  {
    id: "maliyet-hesaplari",
    title: "Maliyet Hesapları",
    description:
      "Sac, profil, boru, kaynak, ağırlık ve imalat kalemleri için malzeme ve ön maliyet odaklı hesap araçları.",
    toolSlugs: [
      "sac-kaynak-hesaplari",
      "malzeme-agirlik-hesabi",
    ],
  },
  {
    id: "mil-kaplin-ve-baglanti-hesaplari",
    title: "Mil, Kaplin ve Bağlantı Hesapları",
    description:
      "Mil çapı, kaplin seçimi, kama, segman ve bağlantı ölçülerine yönelik temel mühendislik hesap araçları.",
    toolSlugs: [
      "mil-capi-hesabi",
      "kaplin-secimi-on-hesabi",
      "kama-kanali-acim-olculeri",
      "segman-ve-kanal-olculeri",
    ],
  },
  {
    id: "guc-aktarim-hesaplari",
    title: "Güç Aktarım Hesapları",
    description:
      "Motor, devir, tork, kayış-kasnak, zincir-dişli ve hareket iletimi odaklı temel güç aktarım hesapları.",
    toolSlugs: [
      "motor-gucu-on-hesabi",
      "kayis-kasnak-oran-hesabi",
      "zincir-disli-hesabi",
      "duz-helis-disli-hesabi",
      "kremayer-disli-hesabi",
      "triger-disli-hesabi",
      "sonsuz-vida-disli-hesabi",
    ],
  },
  {
    id: "donusum-araclari",
    title: "Dönüşüm Araçları",
    description:
      "Mühendislikte sık kullanılan birim dönüşümleri için hızlı ve sade dönüşüm araçları.",
    toolSlugs: ["donusum-araclari"],
  },
  {
    id: "diger-hesaplamalar",
    title: "Diğer Hesaplamalar",
    description:
      "Özel üretim, talaşlı imalat ve yardımcı mühendislik ihtiyaçları için tamamlayıcı hesap araçları.",
    toolSlugs: [
      "ahir-atigi-hesaplama",
      "evsel-atik-cop-hesaplama",
      "atik-su-ve-aritma-camuru-hesaplama",
      "biyogaz-guc-kw-hesaplama",
      "kompost-son-urun-hesaplama",
      "kurutma-nem-dusurme-hesaplama",
      "depolama-hacmi-stok-suresi-hesaplama",
      "talasli-imalat-hesaplari",
      "iso-gecme-toleranslari",
    ],
  },
];

const programDefinitionOverrides: Record<string, Partial<ProgramMeta>> = {
  "donusum-araclari": {
    title: "Mühendislik Hesapları",
    description:
      "Uzunluk, güç, tork, basınç, sıcaklık ve yoğunluk tabanlı mühendislik dönüşümlerini tek ekranda yönetin.",
    alt: "Mühendislik hesapları görseli",
  },
  "talasli-imalat-hesaplari": {
    groupId: "donusum-araclari",
  },
  "iso-gecme-toleranslari": {
    groupId: "donusum-araclari",
  },
};

export const programDefinitions: ProgramMeta[] = rawProgramDefinitions.map((item) => ({
  ...item,
  ...(programDefinitionOverrides[item.slug] ?? {}),
}));

const resolvedGroupDefinitions = groupDefinitions.map((group) => {
  if (group.id === "donusum-araclari") {
    return {
      ...group,
      title: "Mühendislik Hesapları",
      description:
        "Birim dönüşümleri, talaşlı imalat ve tolerans gibi yardımcı mühendislik araçlarını tek grupta toplayan profesyonel hesap alanı.",
      toolSlugs: ["donusum-araclari", "talasli-imalat-hesaplari", "iso-gecme-toleranslari"],
    };
  }

  if (group.id === "diger-hesaplamalar") {
    return {
      ...group,
      toolSlugs: group.toolSlugs.filter(
        (slug) => slug !== "talasli-imalat-hesaplari" && slug !== "iso-gecme-toleranslari",
      ),
    };
  }

  return group;
});

export const programItems: ProgramItem[] = programDefinitions.map(
  ({ slug, title, description, image, alt }) => ({
    slug,
    title,
    description,
    image,
    alt,
  }),
);

export const programGroups: ProgramGroup[] = resolvedGroupDefinitions.map((group) => ({
  id: group.id,
  title: group.title,
  description: group.description,
  tools: group.toolSlugs
    .map((slug) => programDefinitions.find((item) => item.slug === slug))
    .filter((item): item is ProgramMeta => Boolean(item))
    .map((item) => ({
      slug: item.slug,
      title: item.title,
    })),
}));

export function getProgramMeta(slug: string) {
  return programDefinitions.find((item) => item.slug === slug);
}
