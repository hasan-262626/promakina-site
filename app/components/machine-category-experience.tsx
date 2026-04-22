"use client";

import { useMemo, useState } from "react";
import { ProductDetailSystem } from "./product-detail-system";

type CategorySlug =
  | "kırıcılar-ve-parcalayicilar"
  | "reaktorler-ve-tanklar"
  | "eleme-ve-siniflandirma-sistemleri"
  | "toz-toplama-sistemleri"
  | "paketleme-ve-dolum-sistemleri"
  | "depolama-ve-besleme-sistemleri";

type ProductItem = {
  id: string;
  title: string;
  heroDescription: string;
  overviewParagraphs: string[];
  highlightText: string;
  specs: string[];
  applications: string[];
  optionalEquipment: string[];
  spareParts: string[];
};

type CategoryConfig = {
  title: string;
  heroImage: string;
  ctaTitle: string;
  ctaText: string;
  gallery: { src: string; alt: string; caption: string }[];
  products: ProductItem[];
};

function makeProduct(
  title: string,
  heroDescription: string,
  focus: string,
  specs: string[],
  applications: string[],
  options: string[],
  spareParts: string[],
): ProductItem {
  return {
    id: title.toLowerCase().replaceAll(" ", "-"),
    title,
    heroDescription,
    overviewParagraphs: [
      `${title}, proses hattında ürün davranışına ve kapasite ihtiyacına göre özel ölçülerde tasarlanan endüstriyel makina çözümlerinden biridir.`,
      `Özel ölçü üretim, hat entegrasyonu, bakım erişimi ve uzun ömürlü çalışma hedefi ile ${title.toLowerCase()} çözümlerini kurumsal makina imalat yaklaşımıyla sunuyoruz.`,
    ],
    highlightText: focus,
    specs,
    applications,
    optionalEquipment: options,
    spareParts,
  };
}

const heavyDutyOptions = [
  "Platform ve merdiven",
  "Sensör ve otomasyon grubu",
  "Aşınma plakası veya iç kaplama",
  "Özel motor-redüktör paketi",
  "Bakım kapağı",
  "ATEX veya özel saha opsiyonu",
];

const commonSpare = [
  "Motor-redüktör grubu",
  "Rulman ve yataklar",
  "Conta ve bağlantı elemanları",
  "Sensörler",
  "Kapak ve servis parçaları",
  "Aşınma elemanları",
];

const configs: Record<CategorySlug, CategoryConfig> = {
  "kırıcılar-ve-parcalayicilar": {
    title: "Kırıcılar ve Parçalayıcılar",
    heroImage: "/images/hammermill2.jpg",
    ctaTitle: "Kırıcı ve parçalayıcı sistemler için doğru çözümü birlikte netleştirelim",
    ctaText:
      "Çekiçli kırıcı, zincirli kırıcı, shredder, primer kırıcı ve sekonder kırıcı ihtiyaçlarınız için giriş boyutu, kapasite ve ürün karakterine uygun sistemi birlikte belirleyelim.",
    gallery: [
      { src: "/images/hammermill2.jpg", alt: "Kırıcı genel görünüm", caption: "Genel ürün görünümü" },
      { src: "/images/kırıcı3.jpg", alt: "Kırıcı imalat detayı", caption: "İmalat ve gövde detayı" },
      { src: "/images/hammermill2.jpg", alt: "Rotor detayı", caption: "Rotor ve kırma bölgesi" },
      { src: "/images/kırıcı3.jpg", alt: "Saha yerleşimi", caption: "Saha yerleşimi yaklaşımı" },
    ],
    products: [
      makeProduct("Çekiçli Kırıcılar", "Gübre, kompost ve kırılgan mineral hatları için çekiçli kırıcı imalatı yapıyoruz.", "Çekiçli kırıcılarda rotor hızı, elek yapısı ve aşınma yönetimi birlikte çözülür.", ["Projeye özel rotor ve gövde ölçüsü", "Aşınmaya dayanıklı iç yüzey", "Farklı çekiç ve elek seçenekleri", "Bakım kapağı ve servis erişimi", "Besleme ve boşaltma bağlantıları", "Ağır hizmet tahrik yapısı"], ["Granül gübre hatları", "Kompost ön işleme", "Kırılgan mineral hazırlama", "Geri dönüşüm ön hazırlığı"], heavyDutyOptions, ["Çekiç setleri", "Rotor", "Elekler", ...commonSpare]),
      makeProduct("Zincirli Kırıcılar", "Topaklı ve yarı nemli ürünler için zincirli kırıcı imalatı yapıyoruz.", "Zincirli kırıcılar, topak kırma ve nemli ürün davranışı açısından güçlü çözümler sunar.", ["Serbest salınımlı zincir grubu", "Nemli ürüne uygun gövde yapısı", "Ağır hizmet tahrik sistemi", "Servis ve bakım kapakları", "Hat entegrasyonuna uygun giriş-çıkış", "Özel iç kaplama alternatifleri"], ["Topaklı gübre hatları", "Organik karışım prosesleri", "Kompost hazırlama", "Nemli ürün kırma"], heavyDutyOptions, ["Zincir setleri", "Rotor", ...commonSpare]),
      makeProduct("Shredder Sistemleri", "Karma atık ve hacimli malzemeler için shredder sistemleri üretiyoruz.", "Shredder sistemlerinde şaft yapısı, bıçak dizilimi ve tork yönetimi ana tasarım parametreleridir.", ["Tek veya çift şaft seçeneği", "Yüksek torklu tahrik sistemi", "Ağır hizmet bıçak grupları", "Bakım dostu gövde yapısı", "Sensör ve otomasyon altyapısı", "Farklı çıkış boyutu kurguları"], ["RDF hazırlama", "Geri dönüşüm tesisleri", "Organik atık ön işleme", "Lifli malzeme parçalama"], heavyDutyOptions, ["Bıçak setleri", "Şaftlar", ...commonSpare]),
      makeProduct("Bıçaklı Primer Kırıcılar", "İlk kademe boyut küçültme için bıçaklı primer kırıcı çözümleri sunuyoruz.", "Primer kırıcılar yüksek giriş boyutunu güvenle kabul eden, ağır hizmet odaklı sistemlerdir.", ["Geniş besleme ağzı", "Ağır hizmet bıçak grubu", "Yüksek torklu tahrik", "Servis kapakları", "Besleme ekipmanı entegrasyonu", "Projeye uygun gövde kalınlığı"], ["İlk kademe atık hazırlığı", "Organik atık ön kırma", "Geri dönüşüm giriş hatları", "Endüstriyel ön küçültme"], heavyDutyOptions, ["Bıçaklar", "Şaftlar", ...commonSpare]),
      makeProduct("Bıçaklı Sekonder Kırıcılar", "Kontrollü çıkış boyutu için bıçaklı sekonder kırıcı imalatı yapıyoruz.", "Sekonder kırıcılar, primer kırma sonrası daha dengeli ürün boyutu üretmek için kullanılır.", ["Kontrollü çıkış boyutu", "Özel bıçak ve rotor dizilimi", "Aşınma dayanımlı gövde", "Sürekli beslemeye uygun yapı", "Bakım kapağı ve servis erişimi", "Tahrik ve sensör entegrasyonu"], ["İkinci kademe kırma", "Geri dönüşüm hatları", "Organik atık boyut küçültme", "Nihai ürün hazırlama"], heavyDutyOptions, ["Bıçak setleri", "Rotor", ...commonSpare]),
    ],
  },
  "reaktorler-ve-tanklar": {
    title: "Reaktörler ve Tanklar",
    heroImage: "/images/tank1.jpg",
    ctaTitle: "Reaktör ve tank çözümleri için prosesinize uygun yapıyı birlikte belirleyelim",
    ctaText:
      "Soğutma tankı, karıştırıcılı reaktör, basınçlı reaktör, çözündürme tankı ve stok tankı ihtiyaçlarınız için hacim, sıcaklık ve proses verilerine uygun sistemi birlikte seçelim.",
    gallery: [
      { src: "/images/tank1.jpg", alt: "Reaktör genel görünüm", caption: "Genel ürün görünümü" },
      { src: "/images/tank1.jpg", alt: "Tank imalat detayı", caption: "İmalat ve gövde detayı" },
      { src: "/images/tank1.jpg", alt: "Karıştırıcı detayı", caption: "Karıştırıcı ve iç geometri" },
      { src: "/images/tank1.jpg", alt: "Saha uygulaması", caption: "Saha kurulum yaklaşımı" },
    ],
    products: [
      makeProduct("Soğutma Tankları", "Sıvı ürün ve proses akışları için özel ölçülerde soğutma tankı imalatı yapıyoruz.", "Soğutma tankı tasarımında hacim, ısı transfer yüzeyi ve akışkan karakteri birlikte değerlendirilir.", ["Projeye uygun net ve brüt hacim", "Ceketli veya serpantinli yapı", "Karıştırıcı entegrasyonu", "Sıcaklık sensörü altyapısı", "Paslanmaz veya karbon çelik gövde", "CIP ve servis bağlantıları"], ["Sıvı gübre hatları", "Kimyasal proses sistemleri", "Karışım tankları", "Endüstriyel soğutma uygulamaları"], ["İzolasyon", "Loadcell", "CIP hattı", "Platform ve merdiven", "Sıcaklık sensörleri", "Otomasyon grubu"], ["Karıştırıcı motoru", "Vanalar", ...commonSpare]),
      makeProduct("Karıştırıcılı Reaktörler", "Kimyasal ve sıvı proses hatları için karıştırıcılı reaktör imalatı yapıyoruz.", "Karıştırıcılı reaktörlerde viskozite, reaksiyon süresi ve ısı ihtiyacı ana belirleyicidir.", ["Projeye uygun gövde hacmi", "Anchor, pervane veya özel karıştırıcı", "Ceketli çalışma opsiyonu", "Sıcaklık ve basınç izleme", "Paslanmaz veya özel alaşımlı malzeme", "Platform ve menhol yapısı"], ["Kimyasal proses tesisleri", "Sıvı gübre üretimi", "Çözündürme ve karışım hatları", "Katkı hazırlama sistemleri"], ["Baffle sistemi", "Loadcell", "CIP hattı", "Isıtma / soğutma paketi", "Otomasyon paneli", "Numune alma hattı"], ["Karıştırıcı paleti", "Şaft", ...commonSpare]),
      makeProduct("Basınçlı Reaktörler", "Basınç altında çalışan prosesler için basınçlı reaktör imalatı yapıyoruz.", "Basınçlı reaktörlerde güvenlik, mekanik dayanım ve proses gereksinimleri birlikte çözülür.", ["Projeye uygun basınç sınıfı", "Özel kapak ve gövde tasarımı", "Emniyet ekipmanları entegrasyonu", "Karıştırıcı ve ısı transfer opsiyonu", "Özel alaşımlı malzeme seçeneği", "Enstrümantasyon altyapısı"], ["Kimyasal reaksiyon prosesleri", "Özel proses üretim hatları", "Basınçlı karışım uygulamaları", "Endüstriyel reaktör sistemleri"], ["Emniyet valfi", "Basınç transmitteri", "Ceket sistemi", "Numune alma hattı", "CIP bağlantısı", "Platform"], ["Valf grupları", "Conta setleri", ...commonSpare]),
      makeProduct("Çözündürme Tankları", "Katı-sıvı hazırlama süreçleri için çözündürme tankı çözümleri sunuyoruz.", "Çözündürme tanklarında karıştırma yoğunluğu ve sirkülasyon davranışı çözünme performansını belirler.", ["Projeye uygun net hacim", "Karıştırıcılı veya sirkülasyonlu yapı", "Katı giriş ve sıvı besleme bağlantıları", "Isıtma opsiyonu", "Paslanmaz veya boyalı gövde", "Otomasyon altyapısı"], ["Sıvı gübre hazırlama", "Kimyasal çözündürme", "Reçete hazırlama hatları", "Katkı çözeltisi üretimi"], ["Loadcell", "CIP hattı", "Platform", "Isıtma ceketi", "Otomasyon paneli", "Seviye sensörü"], ["Karıştırıcı paletleri", "Motor-redüktör", ...commonSpare]),
      makeProduct("Stok Tankları", "Güvenli depolama ve proses dengesi için stok tankı imalatı yapıyoruz.", "Stok tanklarında güvenli depolama, dolum-boşaltma kontrolü ve saha yerleşimi birlikte planlanır.", ["Projeye uygun depolama hacmi", "Dikey veya yatay gövde yapısı", "Dolum ve boşaltma nozulları", "Seviye izleme altyapısı", "Karbon çelik veya paslanmaz gövde", "Platform ve merdiven"], ["Sıvı gübre depolama", "Kimyasal stok alanları", "Tampon depolama", "Dozaj öncesi akışkan hazırlama"], ["Loadcell", "Seviye göstergesi", "İzolasyon", "Platform ve merdiven", "Otomasyon paneli", "CIP bağlantısı"], ["Vanalar", "Sensörler", ...commonSpare]),
    ],
  },
  "eleme-ve-siniflandirma-sistemleri": {
    title: "Eleme ve Sınıflandırma Sistemleri",
    heroImage: "/images/elek1.jpg",
    ctaTitle: "Eleme ve sınıflandırma sistemlerinde doğru ürünü birlikte seçelim",
    ctaText:
      "Döner elek, vibrasyonlu elek, trommel elek, sınıflandırma eleği ve susuzlandırma eleği çözümleri için ürün davranışı ve kapasite ihtiyacınıza uygun sistemi birlikte belirleyelim.",
    gallery: [
      { src: "/images/elek1.jpg", alt: "Elek genel görünüm", caption: "Genel ürün görünümü" },
      { src: "/images/elek2.jpeg", alt: "Elek imalat detayı", caption: "İmalat ve gövde detayı" },
      { src: "/images/elek1.jpg", alt: "Elek yüzeyi", caption: "Elek yüzeyi ve akış karakteri" },
      { src: "/images/elek2.jpeg", alt: "Saha kurulumu", caption: "Saha yerleşimi yaklaşımı" },
    ],
    products: [
      makeProduct("Döner Elekler", "Granül, kompost ve dökme katı ürünler için döner elek imalatı yapıyoruz.", "Döner eleklerde delik açıklığı, tambur eğimi ve devir ayarı ayırma verimini doğrudan etkiler.", ["Projeye uygun tambur çapı ve boyu", "Farklı elek açıklığı seçenekleri", "Aşınma dayanımlı gövde", "Besleme ve alt ürün çıkış kurgusu", "Ayarlanabilir devir sistemi", "Bakım ve temizleme erişimi"], ["Granül gübre sınıflandırma", "Kompost eleme", "Organik atık ayırma", "Dökme katı ürün hazırlama"], ["Toz emiş bağlantısı", "Bakım platformu", "Temizleme sistemi", "Besleme bunkeri", "Alt ürün konveyörleri", "Otomasyon altyapısı"], ["Elek yüzeyi", "Support ruloları", ...commonSpare]),
      makeProduct("Vibrasyonlu Elekler", "Hassas ayırma ve yüksek verimli sınıflandırma için vibrasyonlu elek çözümleri üretiyoruz.", "Vibrasyonlu eleklerde ayırma hassasiyeti; elek yüzeyi, titreşim karakteri ve ürün nemi ile birlikte kurulur.", ["Tek veya çok katlı elek", "Projeye uygun elek yüzeyi", "Titreşim motoru veya eksantrik tahrik", "Aşınmaya dayanıklı gövde", "Yay ve şase sistemi", "Besleme ve çıkış bağlantıları"], ["Granül gübre sınıflandırma", "Mineral eleme hatları", "Toz ürün ayırma", "Paketleme öncesi kalite kontrol"], ["Kapalı gövde", "Toz emiş bağlantısı", "Farklı elek teli seçenekleri", "Platform", "Titreşim sensörleri", "Otomasyon bağlantıları"], ["Elek telleri", "Titreşim motorları", ...commonSpare]),
      makeProduct("Trommel Elekler", "Organik atık ve kompost hatları için trommel elek imalatı yapıyoruz.", "Trommel eleklerde ürün heterojenliği, nem seviyesi ve tambur iç akışı belirleyicidir.", ["Projeye uygun trommel çapı ve boyu", "Farklı delik ve panel seçenekleri", "Destek rulolu tambur yapısı", "Ağır hizmet şase ve tahrik", "Besleme ve alt ürün çıkışları", "Temizleme ve servis erişimi"], ["Kompost tesisleri", "Organik atık ayırma", "Geri dönüşüm hazırlama", "Biyogaz ön işleme"], ["Fırça temizleme sistemi", "Besleme bunkeri", "Toz/koku kontrol bağlantıları", "Yürüyüş platformu", "Konveyör entegrasyonu", "Otomasyon altyapısı"], ["Elek panelleri", "Support ruloları", ...commonSpare]),
      makeProduct("Sınıflandırma Elekleri", "Ürün kalite dağılımını kontrol etmek için sınıflandırma eleği çözümleri sunuyoruz.", "Sınıflandırma eleğinde amaç yalnızca eleme değil, ürün kalitesinin kararlı hale getirilmesidir.", ["Tek veya çok katlı yapı", "Projeye uygun elek yüzeyi", "Üst ürün-alt ürün ayrımı", "Aşınma dayanımlı gövde", "Hat entegrasyonuna uygun tahrik", "Bypass ve geri dönüş bağlantıları"], ["Granül gübre üretim hatları", "Mineral işleme sistemleri", "Kalite kontrol hatları", "Paketleme öncesi sınıflandırma"], ["Bypass ve geri dönüş hatları", "Toz kontrol bağlantısı", "Platform", "Sensör grubu", "Otomasyon altyapısı", "Kapalı gövde"], ["Elek yüzeyleri", "Titreşim grubu", ...commonSpare]),
      makeProduct("Susuzlandırma Elekleri", "Yüksek nemli ürünlerde su ayrımı için susuzlandırma eleği çözümleri geliştiriyoruz.", "Susuzlandırma eleğinde titreşim karakteri ve drenaj yüzeyi birlikte çözülmelidir.", ["Drenaj odaklı elek yüzeyi", "Titreşimli susuzlandırma yapısı", "Yüksek nemli ürüne uygun gövde", "Su toplama ve tahliye bağlantıları", "Korozyona dayanımlı malzeme seçenekleri", "Bakım ve temizleme erişimi"], ["Arıtma çamuru prosesleri", "Kompost ve organik karışımlar", "Yüksek nemli mineral ürünler", "Ön işlem hatları"], ["Su tahliye hattı", "Farklı elek paneli seçenekleri", "Korozyon dayanımlı kaplama", "Platform", "Sensör altyapısı", "Besleme regülasyon ekipmanları"], ["Elek panelleri", "Titreşim elemanları", ...commonSpare]),
    ],
  },
  "toz-toplama-sistemleri": {
    title: "Toz Toplama Sistemleri",
    heroImage: "/images/toz1.jpg",
    ctaTitle: "Toz toplama ve filtrasyon sistemleri için doğru çözümü birlikte seçelim",
    ctaText:
      "Pulse jet filtre, siklon ayırıcı, torba filtre, kartuş filtre ve bin vent filtre çözümleri için debi ve toz karakterine uygun sistemi birlikte netleştirelim.",
    gallery: [
      { src: "/images/toz1.jpg", alt: "Toz toplama genel görünüm", caption: "Genel ürün görünümü" },
      { src: "/images/toz8.png", alt: "Filtre imalat detayı", caption: "Filtre ve gövde detayı" },
      { src: "/images/toz1.jpg", alt: "Filtrasyon modülü", caption: "Filtrasyon modülü" },
      { src: "/images/toz8.png", alt: "Saha yerleşimi", caption: "Saha kurulum yaklaşımı" },
    ],
    products: [
      makeProduct("Jet Pulse Filtreler", "Endüstriyel toz toplama hatları için jet pulse filtre sistemleri üretiyoruz.", "Jet pulse filtrelerde doğru filtre alanı ve temizleme döngüsü sistem veriminin merkezindedir.", ["Projeye uygun filtre alanı", "Pulse jet temizleme sistemi", "Modüler gövde yapısı", "Toz bunker ve tahliye bağlantıları", "Fan ve kanal entegrasyonu", "Bakım kapakları"], ["Granül gübre hatları", "Mineral işleme sistemleri", "Paketleme ve dolum hatları", "Kırıcı ve elek besleme alanları"], ["Rotary valf", "Patlama kapağı", "Bin vent bağlantısı", "Basınç sensörü", "Platform", "ATEX opsiyonu"], ["Filtre torbaları", "Kafesler", "Solenoid valfler", ...commonSpare]),
      makeProduct("Siklon Ayırıcılar", "Partikül ön ayırma ve toz yükü düşürme için siklon ayırıcı sistemleri sunuyoruz.", "Siklon ayırıcıda debi ve partikül boyutu ilişkisi kritiktir.", ["Projeye uygun gövde çapı ve yükseklik", "Tekli veya çoklu siklon yapısı", "Toz bunker ve tahliye bağlantıları", "Fan ve kanal bağlantıları", "Aşınma dayanımlı iç yüzey", "Platform ve servis erişimi"], ["Kırıcı ve eleme hatları", "Ön toz ayırma sistemleri", "Mineral işleme prosesleri", "Genel endüstriyel havalandırma"], ["Rotary valf", "Aşınma plakası", "Platform", "Seviye sensörü", "ATEX opsiyonu", "Kanal bağlantı paketi"], ["Rotary valf", "Sensörler", ...commonSpare]),
    ],
  },
  "paketleme-ve-dolum-sistemleri": {
    title: "Paketleme ve Dolum Sistemleri",
    heroImage: "/images/dolum1.jpg",
    ctaTitle: "Paketleme ve dolum sistemlerinde doğru hattı birlikte belirleyelim",
    ctaText:
      "Açık ağız torbalama, valfli torba dolum, big bag dolum, FFS torbalama ve paletleme hatları için ambalaj tipi ve kapasitenize uygun çözümü birlikte seçelim.",
    gallery: [
      { src: "/images/dolum1.jpg", alt: "Paketleme genel görünüm", caption: "Genel ürün görünümü" },
      { src: "/images/dolum1.jpg", alt: "Dolum hattı detayı", caption: "Dolum ve hat yerleşimi" },
      { src: "/images/dolum1.jpg", alt: "Torbalama modülü", caption: "Torbalama ve dozaj yapısı" },
      { src: "/images/dolum1.jpg", alt: "Paletleme yaklaşımı", caption: "Hat sonu paletleme yaklaşımı" },
    ],
    products: [
      makeProduct("Açık Ağız Torbalama", "Granül ve toz ürünler için açık ağız torbalama sistemleri üretiyoruz.", "Açık ağız torbalamada ürün akışı ve çuval yönetimi birlikte çözülmelidir.", ["Farklı çuval boyutlarına uyum", "Net veya brüt tartım", "Pnömatik çuval tutma", "Dozaj ve besleme kontrolü", "Yarı otomatik veya tam otomatik yapı", "Dikiş hattı entegrasyonu"], ["Granül gübre paketleme", "Yem ve tohum torbalama", "Mineral ürün dolumu", "Dökme katı ürün hatları"], ["Dikiş makinesi", "Rulo konveyör", "Checkweigher", "Etiketleme sistemi", "Metal dedektör", "Otomasyon paneli"], ["Loadcell", "Pnömatik elemanlar", ...commonSpare]),
      makeProduct("Big Bag Dolum", "Yüksek tonajlı torbalama ihtiyaçları için big bag dolum sistemleri üretiyoruz.", "Big bag dolumda tartım doğruluğu kadar çuval tutma, vibrasyon ve operatör güvenliği de belirleyicidir.", ["Farklı big bag ölçülerine uyum", "Net veya brüt tartım", "Pnömatik çuval tutma", "Vibrasyon ve sıkıştırma opsiyonu", "Forklift veya konveyör uyumlu yapı", "Otomasyon altyapısı"], ["Granül gübre big bag dolumu", "Mineral ürün sevkiyatı", "Kompost ve organik ürün torbalama", "Dökme katı lojistik hazırlığı"], ["Vibrasyon tablası", "Rulo konveyör", "Paletleme entegrasyonu", "Etiketleme sistemi", "Toz emiş bağlantısı", "Platform"], ["Loadcell", "Pnömatik kelepçe grupları", ...commonSpare]),
      makeProduct("Sıvı Dolum Şişeleme", "Sıvı ürünlerin hassas dozajla doldurulması ve şişeleme hatlarında kontrollü akış için sıvı dolum şişeleme çözümleri sunuyoruz.", "Sıvı dolum şişeleme hatlarında dozaj doğruluğu, akış kontrolü ve şişe senkronizasyonu birlikte ele alınmalıdır.", ["Hassas sıvı dolum kontrolü", "Şişe besleme ve yönlendirme sistemi", "Nozul ve akış kontrol altyapısı", "Yarı otomatik veya tam otomatik yapı", "Dolum sonrası kapama entegrasyonu", "Hat senkronizasyonu ve otomasyon"], ["Sıvı gübre dolumu", "Kimyasal sıvı ürünler", "Katkı ve yardımcı ürün şişeleme", "Küçük ve orta ölçekli dolum hatları"], ["Kapak kapatma modülü", "Şişe konveyörü", "Dolum nozul paketi", "Checkweigher", "Etiketleme entegrasyonu", "Otomasyon paneli"], ["Nozul setleri", "Sensörler", ...commonSpare]),
      makeProduct("Şişe Etiketleme Makinası", "Şişe ve benzeri ambalajlarda düzgün, hızlı ve standart etiket uygulaması için şişe etiketleme makinası çözümleri sunuyoruz.", "Şişe etiketleme makinalarında hız, doğruluk ve etiket konum tekrarlanabilirliği birlikte çözülmelidir.", ["Farklı şişe ölçülerine uyum", "Hassas etiket pozisyonlama", "Hat hızıyla senkron çalışma", "Etiket besleme ve sarım sistemi", "Yarı otomatik veya tam otomatik yapı", "Kodlama ve izleme entegrasyonu"], ["Sıvı dolum şişeleme hatları", "Kimyasal ve yardımcı ürün ambalajları", "Standart etiketleme uygulamaları", "Hat sonu paketleme sistemleri"], ["Kodlama modülü", "Şişe konveyörü", "Hizalama ünitesi", "Sensör paketi", "Otomasyon paneli", "Kalite kontrol entegrasyonu"], ["Etiket ruloları", "Sensörler", ...commonSpare]),
      makeProduct("Paletleme Hatları", "Dolum sonrası sevkiyat hazırlığı için paletleme hattı çözümleri geliştiriyoruz.", "Paletleme hattında ritim, paket tutarlılığı ve sevkiyat ergonomisi birlikte çözülmelidir.", ["Projeye uygun paletleme kapasitesi", "Robotik veya klasik paletleme", "Paket yönlendirme konveyörleri", "Palet magazin entegrasyonu", "Stretch hood veya streç bağlantısı", "Merkezi otomasyon"], ["Gübre ve mineral paketleme", "Yem ve tohum torbalama", "Big bag ve torba sevkiyat hazırlığı", "Hat sonu lojistik sistemleri"], ["Stretch hood", "Streç sarma sistemi", "Palet magazin", "Etiketleme ve barkod", "Checkweigher entegrasyonu", "Robot güvenlik ekipmanları"], ["Konveyör parçaları", "Sensörler", ...commonSpare]),
    ],
  },
  "depolama-ve-besleme-sistemleri": {
    title: "Depolama ve Besleme Sistemleri",
    heroImage: "/images/bunker1.jpg",
    ctaTitle: "Depolama ve besleme sistemleri için doğru çözümü birlikte netleştirelim",
    ctaText:
      "Silo sistemi, bunker, vidalı besleyici, rotary valf ve sürgülü klape ihtiyaçlarınız için akış karakteri ve proses verilerine uygun sistemi birlikte seçelim.",
    gallery: [
      { src: "/images/bunker1.jpg", alt: "Depolama genel görünüm", caption: "Genel ürün görünümü" },
      { src: "/images/bunker2.jpg", alt: "Bunker detayı", caption: "Bunker ve besleme detayı" },
      { src: "/images/bunker1.jpg", alt: "Silo yapısı", caption: "Silo ve çıkış geometrisi" },
      { src: "/images/bunker2.jpg", alt: "Saha yerleşimi", caption: "Saha kurulum yaklaşımı" },
    ],
    products: [
      makeProduct("Silo Sistemleri", "Dökme katı ürünler için güvenli ve proses uyumlu silo sistemleri üretiyoruz.", "Silo seçiminde sadece hacim değil, ürünün akış karakteri ve boşaltma davranışı da belirleyicidir.", ["Projeye uygun depolama hacmi", "Dik veya yatay silo konfigürasyonları", "Dolum ve havalandırma nozulları", "Seviye izleme ve loadcell altyapısı", "Galvaniz, boyalı veya paslanmaz seçenekler", "Platform ve merdiven sistemleri"], ["Granül gübre depolama", "Mineral ve toz ürün stoklama", "Paketleme öncesi tampon depolama", "Proses besleme sistemleri"], ["Bin vent filtre", "Seviye sensörü", "Loadcell", "Patlama kapağı", "Platform ve merdiven", "Akış yardım ekipmanları"], ["Seviye sensörleri", "Bin vent filtre elemanları", ...commonSpare]),
      makeProduct("Bunker ve Hazneler", "Kontrollü ürün kabulü ve besleme için bunker ve hazne sistemleri üretiyoruz.", "Bunker tasarımında amaç yalnızca depolamak değil, ürünü düzenli akışla hat içine verebilmektir.", ["Projeye uygun bunker hacmi", "Farklı gövde açısı ve çıkış kesiti", "Aşınma dayanımlı iç yüzey", "Besleme ekipmanı entegrasyonu", "Loadcell ve seviye sensörü altyapısı", "Platform ve bakım erişimi"], ["Besleme öncesi ürün dengeleme", "Kırıcı ve elek besleme sistemleri", "Paketleme öncesi tampon bunkerler", "Organik ve mineral ürün kabul alanları"], ["Loadcell", "Vibrasyon motoru", "Seviye sensörü", "Aşınma plakası", "Platform", "Kapalı üst kapak"], ["Vibrasyon ekipmanları", "Loadcell", ...commonSpare]),
      makeProduct("Vidalı Besleyiciler", "Dozajlı ve kontrollü ürün besleme için vidalı besleyici sistemleri sunuyoruz.", "Besleme ekipmanlarında kararlı akış en kritik parametredir.", ["Projeye uygun vida çapı ve boyu", "Devir kontrollü yapı", "Tekli veya çoklu vida seçenekleri", "Bunker altı montaja uygun gövde", "Aşınma dayanımlı malzeme seçenekleri", "Loadcell ve otomasyon entegrasyonu"], ["Toz ve granül ürün besleme", "Paketleme öncesi dozaj", "Kimyasal proses hatları", "Kompost ve organik karışım besleme"], ["Frekans kontrollü sürücü", "Loadcell", "Seviye sensörü", "Bakım kapağı", "Bunker adaptörü", "Otomasyon paneli"], ["Vida yaprakları", "Yataklar", ...commonSpare]),
      makeProduct("Rotary Valfler", "Hava kilidi ve kontrollü ürün geçişi için rotary valf çözümleri üretiyoruz.", "Rotary valfte sızdırmazlık, rotor toleransı ve ürün davranışı birlikte düşünülmelidir.", ["Projeye uygun gövde ve rotor ölçüsü", "Hava kilidi odaklı çalışma", "Aşınma dayanımlı veya paslanmaz seçenekler", "Filtre ve silo altı bağlantı uyumu", "Motor-redüktör tahrik sistemi", "Bakım erişimi"], ["Toz toplama sistemleri", "Silo altı boşaltma", "Pnömatik taşıma beslemesi", "Toz ürün proses hatları"], ["ATEX opsiyonu", "Aşınma dayanımlı rotor", "Sensör ve hız kontrolü", "Filtre bağlantı adaptörü", "Otomasyon paneli", "Özel sızdırmazlık paketi"], ["Rotor", "Conta setleri", ...commonSpare]),
      makeProduct("Sürgülü Klapeler", "Hat üzerindeki ürün akışını kontrollü yönetmek için sürgülü klape çözümleri sunuyoruz.", "Sürgülü klapede akış kesitinin doğru seçilmesi ve sızdırmazlık yapısı kadar aktüasyon yöntemi de önemlidir.", ["Projeye uygun geçiş kesiti", "Manuel, pnömatik veya motorlu aktüatör", "Toz sızdırmazlığına uygun yapı", "Galvaniz veya paslanmaz seçenekler", "Silo, bunker ve kanal bağlantı uyumu", "Bakım dostu gövde yapısı"], ["Silo ve bunker çıkışları", "Filtre altı toz boşaltma", "Dozaj ve yönlendirme sistemleri", "Genel proses geçiş noktaları"], ["Pnömatik aktüatör", "Motorlu tahrik", "Limit switch", "Özel sızdırmazlık paketi", "ATEX opsiyonu", "Pozisyon geri bildirimi"], ["Conta setleri", "Aktüatör parçaları", ...commonSpare]),
    ],
  },
};

export default function MachineCategoryExperience({ slug }: { slug: CategorySlug }) {
  const config = configs[slug];
  const [activeId, setActiveId] = useState(config.products[0].id);
  const calculatorFamily =
    slug === "kırıcılar-ve-parcalayicilar"
      ? "crusher"
      : slug === "reaktorler-ve-tanklar"
        ? "reactor"
        : slug === "eleme-ve-siniflandirma-sistemleri"
          ? "screening"
          : slug === "toz-toplama-sistemleri"
            ? "dust"
            : slug === "paketleme-ve-dolum-sistemleri"
              ? "packaging"
              : "storage";

  const activeProduct = useMemo(
    () => config.products.find((product) => product.id === activeId) ?? config.products[0],
    [activeId, config.products],
  );

  const relatedProducts = config.products
    .filter((product) => product.id !== activeProduct.id)
    .map((product) => ({
      label: product.title,
      onClick: () => {
        setActiveId(product.id);
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
    }));

  return (
    <ProductDetailSystem
      categoryLabel={config.title}
      categoryHref={`/makinalar/${slug}`}
      title={activeProduct.title}
      heroDescription={activeProduct.heroDescription}
      heroImage={config.heroImage}
      overviewParagraphs={activeProduct.overviewParagraphs}
      highlightText={activeProduct.highlightText}
      specs={activeProduct.specs}
      applications={activeProduct.applications}
      gallery={config.gallery}
      optionalEquipment={activeProduct.optionalEquipment}
      spareParts={activeProduct.spareParts}
      relatedProducts={relatedProducts}
      calculatorFamily={calculatorFamily}
      ctaTitle={config.ctaTitle}
      ctaText={config.ctaText}
    />
  );
}
