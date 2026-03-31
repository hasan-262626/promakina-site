"use client";

import { useMemo, useState } from "react";
import { ProductDetailSystem } from "./product-detail-system";

type TransportKey = "belt" | "chain-conveyor" | "screw" | "chain-elevator" | "belt-elevator";

type TransportProduct = {
  id: TransportKey;
  title: string;
  heroDescription: string;
  overviewParagraphs: string[];
  highlightText: string;
  specs: string[];
  applications: string[];
  optionalEquipment: string[];
  spareParts: string[];
  gallery: { src: string; alt: string; caption: string }[];
};

const transportGallery = [
  {
    src: "/images/konveyor2.jpg",
    alt: "Taşıma ekipmanları genel görünüm",
    caption: "Genel sistem görünümü",
  },
  {
    src: "/images/konveyor1.jpg",
    alt: "Konveyör imalat detayı",
    caption: "İmalat ve şase detayı",
  },
  {
    src: "/images/konveyor2.jpg",
    alt: "Taşıma hattı saha kurgusu",
    caption: "Hat yerleşimi ve transfer kurgusu",
  },
  {
    src: "/images/konveyor1.jpg",
    alt: "Tahrik ve destek elemanları",
    caption: "Tahrik ve destek ekipmanları",
  },
];

const transportProducts: TransportProduct[] = [
  {
    id: "belt",
    title: "Bantlı Konveyörler",
    heroDescription:
      "Malzeme taşıma hatları için dayanıklı ve özel ölçü üretim bantlı konveyör sistemleri sunuyoruz.",
    overviewParagraphs: [
      "Bantlı konveyörler; granül, toz, mineral ve organik ürünlerin yatay veya kontrollü eğimli hatlarda düzenli şekilde taşınması için kullanılır. Hat boyu, bant genişliği, ürün yoğunluğu ve çalışma sınıfı birlikte değerlendirilir.",
      "Endüstriyel proses hatlarında açık veya kapalı gövde seçenekleri, toz kontrol çözümleri, özel şase yapıları ve ağır hizmet yürüyüş takımları ile projeye uygun bantlı konveyör imalatı yapıyoruz.",
    ],
    highlightText:
      "Bantlı konveyör seçiminde kapasite kadar ürün davranışı, eğim, hat uzunluğu ve çevresel koşullar da belirleyicidir. Doğru bant tipi ve taşıyıcı istasyon yapısı sistem verimini doğrudan etkiler.",
    specs: [
      "Projeye uygun bant genişliği ve hat uzunluğu",
      "Açık veya kapalı gövde seçenekleri",
      "Standart veya ağır hizmet istasyon yapısı",
      "Frekans kontrollü tahrik sistemi",
      "Toz kontrollü ve etek saclı tasarım seçenekleri",
      "Farklı tambur ve gergi sistemi alternatifleri",
    ],
    applications: [
      "Granül gübre üretim hatları",
      "Kompost ve organik atık tesisleri",
      "Mineral ve dökme katı malzeme taşıma",
      "Paketleme ve dolum hatları",
      "Depolama ve bunker besleme sistemleri",
    ],
    optionalEquipment: [
      "Kapalı üst kapak",
      "Yan etek sacı",
      "Sıyırıcı ve fırça temizleyici",
      "Yürüyüş platformu",
      "Kayma ve hız sensörleri",
      "Toz emiş bağlantıları",
    ],
    spareParts: [
      "Bant",
      "Tahrik ve kuyruk tamburu",
      "Taşıyıcı ve dönüş ruloları",
      "Motor-redüktör grubu",
      "Sıyırıcılar",
      "Gergi ekipmanları",
    ],
    gallery: transportGallery,
  },
  {
    id: "chain-conveyor",
    title: "Zincirli Konveyörler",
    heroDescription:
      "Ağır hizmet ve kontrollü transfer gerektiren hatlar için zincirli konveyör imalatı yapıyoruz.",
    overviewParagraphs: [
      "Zincirli konveyörler; kapalı kanal yapısı, yüksek dayanım ihtiyacı ve daha kontrollü ürün sürükleme karakteri gereken proseslerde tercih edilir. Aşındırıcı, iri taneli veya zor akışan malzemeler için güçlü çözümler sunar.",
      "Gövde kalınlığı, zincir tipi, palet yapısı ve tahrik sınıfı; kapasite ve malzeme davranışına göre projeye özel belirlenir. Endüstriyel taşıma hatları için uzun ömürlü zincirli konveyör sistemleri üretiyoruz.",
    ],
    highlightText:
      "Zincirli konveyörlerde ağır hizmet sınıfı, kanal genişliği ve zincir-paleti yapısı kapasite kadar önemlidir. Zor malzemelerde güvenli transfer için kapalı hat yaklaşımı öne çıkar.",
    specs: [
      "Projeye özel kanal genişliği ve hat boyu",
      "Standart veya ağır hizmet zincir yapısı",
      "Kapalı gövde ve toz kontrollü tasarım",
      "Aşınma dayanımlı iç yüzey seçenekleri",
      "Redüktörlü ve tork kontrollü tahrik sistemi",
      "Servis ve bakım erişimine uygun kapaklar",
    ],
    applications: [
      "Organomineral gübre hatları",
      "Kompost ve organik karışım sistemleri",
      "Mineral taşıma hatları",
      "Kırıcı ve elek besleme sistemleri",
      "Ağır hizmet endüstriyel prosesler",
    ],
    optionalEquipment: [
      "Aşınma plakaları",
      "Kapalı tip gövde",
      "Bakım kapağı",
      "Hız sensörü",
      "Tıkanma sensörü",
      "Ağır hizmet tahrik paketi",
    ],
    spareParts: [
      "Zincir grubu",
      "Palet ve sürükleyici elemanlar",
      "Motor-redüktör",
      "Dişli ve dişli grubu",
      "Yataklama ekipmanları",
      "Kapak ve conta grupları",
    ],
    gallery: transportGallery,
  },
  {
    id: "screw",
    title: "Vidalı Helezonlar",
    heroDescription:
      "Toz, granül ve kontrollü besleme gerektiren hatlar için vidalı helezon imalatı yapıyoruz.",
    overviewParagraphs: [
      "Vidalı helezon sistemleri; kapalı transfer, dozajlı besleme ve kompakt yerleşim gerektiren proseslerde öne çıkar. Helezon çapı, hatve, devir ve doluluk oranı ürün yapısına göre belirlenir.",
      "Toz ürünlerden yarı nemli karışımlara kadar farklı uygulamalar için U tip, boru tip, şaftlı veya şaftsız helezon çözümleri sunuyoruz. Besleme, karıştırma ve transfer fonksiyonları aynı hat içinde birleştirilebilir.",
    ],
    highlightText:
      "Vidalı helezonlarda kapasite; çap, hatve, devir ve doluluk ilişkisi ile kurulur. Yapışkan veya aşındırıcı ürünlerde gövde ve iç yüzey seçimi ayrıca mühendislik ister.",
    specs: [
      "Standart veya özel çap seçenekleri",
      "U tip veya boru tip gövde yapısı",
      "Şaftlı ve şaftsız konfigürasyonlar",
      "Projeye göre hatve ve devir kurgusu",
      "Aşınma dayanımlı veya paslanmaz malzeme seçenekleri",
      "Besleme ve boşaltma ağızları ile hat entegrasyonu",
    ],
    applications: [
      "Toz gübre ve mineral hatları",
      "Kompost ve organik madde transferi",
      "Kimyasal hammaddelerin kontrollü beslenmesi",
      "Bunker altı besleme sistemleri",
      "Paketleme öncesi dozaj hatları",
    ],
    optionalEquipment: [
      "Asma yatak sistemleri",
      "Seviye ve tıkanma sensörleri",
      "Bakım kapağı",
      "Değişken hızlı sürücü",
      "Bunker bağlantısı",
      "Ara çıkış ve dağıtım ağızları",
    ],
    spareParts: [
      "Helezon yaprakları",
      "Orta ve uç yataklar",
      "Motor-redüktör grubu",
      "Burç ve yatak elemanları",
      "Kapak ve conta takımları",
      "Aşınma plakaları",
    ],
    gallery: transportGallery,
  },
  {
    id: "chain-elevator",
    title: "Zincirli Elevatörler",
    heroDescription:
      "Dikey taşıma ve ağır hizmet prosesleri için zincirli elevatör çözümleri üretiyoruz.",
    overviewParagraphs: [
      "Zincirli elevatörler; sıcak, aşındırıcı, yapışkan veya ağır hizmet sınıfına giren malzemelerin dikey taşınmasında tercih edilir. Kova yapısı, zincir tipi, gövde sınıfı ve boşaltma karakteri ürüne göre belirlenir.",
      "Gübre, mineral, kimyasal ve proses hammaddelerinde daha emniyetli dikey transfer için projeye özel zincirli elevatör imalatı yapıyor; servis, bakım ve sensör çözümlerini sisteme dahil ediyoruz.",
    ],
    highlightText:
      "Zincirli elevatörlerde sıcaklık, aşınma ve doluluk davranışı seçim mantığını doğrudan etkiler. Daha güçlü mekanik yapı gereken uygulamalarda zincirli sistem öne çıkar.",
    specs: [
      "Projeye özel dikey yükseklik",
      "Tek veya çift sıra zincir seçenekleri",
      "Ağır hizmet elevatör gövdesi",
      "Metal kova veya yüksek dayanımlı kova seçenekleri",
      "Geri dönüş önleyici ve sensör entegrasyonu",
      "Servis ve bakım kapaklı yapı",
    ],
    applications: [
      "Granül gübre ve organomineral hatları",
      "Mineral ve dökme katı taşıma",
      "Sıcak veya aşındırıcı ürün prosesleri",
      "Depolama ve silo besleme hatları",
      "Ağır sanayi taşıma sistemleri",
    ],
    optionalEquipment: [
      "Geri dönüş önleyici",
      "Kayma ve hız sensörü",
      "Doluluk sensörü",
      "Bakım kapağı",
      "Aşınma plakaları",
      "Ağır hizmet redüktör paketi",
    ],
    spareParts: [
      "Zincir seti",
      "Kovalar",
      "Dişli ve tahrik elemanları",
      "Motor-redüktör",
      "Sensör grupları",
      "Conta ve kapak ekipmanları",
    ],
    gallery: transportGallery,
  },
  {
    id: "belt-elevator",
    title: "Bantlı Elevatörler",
    heroDescription:
      "Granül ve kırılgan ürünler için kontrollü dikey taşıma sağlayan bantlı elevatör sistemleri sunuyoruz.",
    overviewParagraphs: [
      "Bantlı elevatörler; granül, tohum, yem ve benzeri ürünlerin daha nazik karakterde dikey taşınması için kullanılır. Bant tipi, kova aralığı, boşaltma karakteri ve kapasite birlikte değerlendirilir.",
      "Düzenli ürün akışı ve daha düşük darbe etkisi gereken proseslerde bantlı elevatörler öne çıkar. Kapalı gövde, sensör sistemleri ve otomasyon entegrasyonu ile projeye uygun çözümler geliştiriyoruz.",
    ],
    highlightText:
      "Bantlı elevatör seçimi ürün kırılganlığı ve temiz boşaltma ihtiyacı ile doğrudan ilişkilidir. Bant sınıfı, kova ölçüsü ve hız aralığı sistem performansını belirler.",
    specs: [
      "Projeye özel kaldırma yüksekliği",
      "Farklı bant tipi ve dayanım sınıfları",
      "Kova ölçüsü ve aralığı optimizasyonu",
      "Kapalı gövde ve toz kontrollü yapı",
      "Redüktörlü tahrik ve gerdirme sistemi",
      "Servis ve bakım erişimi",
    ],
    applications: [
      "Granül gübre ve tohum hatları",
      "Yem ve tarımsal ürün transferi",
      "Paketleme öncesi dikey taşıma",
      "Silo ve bunker besleme hatları",
      "Kırılgan ürün taşıma sistemleri",
    ],
    optionalEquipment: [
      "Bant gergi sistemi",
      "Kayma sensörü",
      "Hız sensörü",
      "Kapalı üst gövde",
      "Bakım kapağı",
      "Acil stop ve güvenlik ekipmanları",
    ],
    spareParts: [
      "Bant",
      "Kovalar",
      "Tambur setleri",
      "Motor-redüktör",
      "Rulman ve yataklar",
      "Sensör ve güvenlik ekipmanları",
    ],
    gallery: transportGallery,
  },
];

export default function TransportEquipmentExperience() {
  const [activeId, setActiveId] = useState<TransportKey>("belt");

  const activeProduct = useMemo(
    () => transportProducts.find((product) => product.id === activeId) ?? transportProducts[0],
    [activeId],
  );

  const relatedProducts = transportProducts
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
      categoryLabel="Taşıma Ekipmanları"
      categoryHref="/makinalar/tasima-ekipmanlari"
      title={activeProduct.title}
      heroDescription={activeProduct.heroDescription}
      heroImage="/images/konveyor2.jpg"
      overviewParagraphs={activeProduct.overviewParagraphs}
      highlightText={activeProduct.highlightText}
      specs={activeProduct.specs}
      applications={activeProduct.applications}
      gallery={activeProduct.gallery}
      optionalEquipment={activeProduct.optionalEquipment}
      spareParts={activeProduct.spareParts}
      relatedProducts={relatedProducts}
      calculatorFamily="transport"
      ctaTitle="Taşıma ekipmanları için doğru sistem seçimini birlikte yapalım"
      ctaText="Bantlı konveyör, zincirli konveyör, vidalı helezon, zincirli elevatör ve bantlı elevatör çözümleri için kapasite, hat boyu ve ürün karakterine uygun sistemi birlikte netleştirelim."
    />
  );
}
