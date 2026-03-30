"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ToolkitInfo,
  ToolkitInput,
  ToolkitLead,
  ToolkitReadonly,
  ToolkitResult,
  ToolkitSelect,
} from "./technical-toolkit";

type CategorySlug =
  | "kiricilar-ve-parcalayicilar"
  | "reaktorler-ve-tanklar"
  | "eleme-ve-siniflandirma-sistemleri"
  | "toz-toplama-sistemleri"
  | "paketleme-ve-dolum-sistemleri"
  | "depolama-ve-besleme-sistemleri";

type Option = {
  id: string;
  label: string;
  seo: string;
  description: string;
  intro: string;
  auto: {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
    note: string;
  };
  technicalSpecs: string[];
  applications: string[];
  materials: string[];
  advantages: string[];
  faqs: { question: string; answer: string }[];
};

type CategoryConfig = {
  title: string;
  heroIntro: string;
  summary: string;
  calculatorTitle: string;
  options: Option[];
  capacityOptions: string[];
  optionalEquipment: string[];
  materialDensity: Record<string, number>;
  resultLabels: [string, string, string, string, string, string, string];
  autoLabels: [string, string, string, string, string, string];
  seoCta: string;
};

const sharedSectors = [
  "Gübre ve granülasyon tesisleri",
  "Kompost ve organik atık tesisleri",
  "Atık su çamuru ve arıtma sistemleri",
  "Geri dönüşüm ve atık yönetimi",
  "Enerji ve biyogaz sistemleri",
  "Madencilik ve mineral işleme",
  "Kimya ve proses endüstrisi",
  "Yem, toz ve dökme katı malzeme işleme sistemleri",
];

const sharedServices = [
  "Proses Tasarımı ve Mühendislik",
  "Makine İmalatı",
  "Anahtar Teslim Tesis Kurulumu",
  "Kurulum ve Devreye Alma",
  "Modernizasyon ve Revizyon",
  "Teknik Danışmanlık",
  "Bakım ve Servis",
];

const sharedProjects = [
  "Kompost tesisi projeleri",
  "Organomineral gübre tesisi projeleri",
  "Geri dönüşüm ve atık işleme projeleri",
  "Biyogaz ve enerji tesisi projeleri",
  "Mineral işleme ve proses tesisleri",
  "Özel proses ve makine imalat projeleri",
];

const configs: Record<CategorySlug, CategoryConfig> = {
  "kiricilar-ve-parcalayicilar": {
    title: "Kırıcılar ve Parçalayıcılar",
    heroIntro:
      "Kırıcı ve parçalayıcı sistemlerde doğru makina seçimi; malzemenin yapısına, giriş boyutuna, hedef ürün boyutuna ve kapasite ihtiyacına göre belirlenir. Farklı kırma ve parçalama ihtiyaçları için geliştirilen sistemleri tek kategori altında sunuyoruz.",
    summary:
      "Farklı malzemelerin boyut küçültme, parçalama ve ön kırma ihtiyaçlarına yönelik kırıcı ve parçalayıcı sistemleri tek çatı altında sunuyoruz. Her ekipman tipi, malzeme yapısı ve proses hedeflerine göre ayrı değerlendirilir.",
    calculatorTitle: "Kırıcı Seçim ve Ön Kapasite Hesabı",
    capacityOptions: ["2–80 ton/saat arası kapasite seçenekleri", "Malzeme sertliğine göre özel kırıcı boyutlandırması", "Servis sınıfına göre ağır hizmet çözümleri"],
    optionalEquipment: ["Manyetik ayırıcı entegrasyonu", "Besleme bunkerleri", "Konveyör ve elek bağlantıları", "Toz toplama bağlantısı", "Servis platformu ve bakım kapağı", "Otomasyon ve sensör seti"],
    materialDensity: {
      "Organik atık": 550,
      Kompost: 650,
      "Granül gübre": 950,
      Mineral: 1450,
      "Kırılgan mineral": 1350,
      "Sert taş / kaya": 1600,
      "Yarı nemli malzeme": 900,
      "RDF / atık": 320,
      "Kırpıntı / lifli malzeme": 260,
      "Özel malzeme": 1000,
    },
    resultLabels: ["Seçilen kırıcı tipi uygunluğu", "Yaklaşık küçültme oranı", "Ön kapasite uygunluk yorumu", "Malzemeye uygunluk", "Nem / yapışkanlık riski", "Aşınma riski", "Teknik özet"],
    autoLabels: ["Önerilen kırıcı sınıfı", "Önerilen rotor / kırma mantığı", "Önerilen besleme karakteri", "Önerilen gövde / astar notu", "Önerilen servis sınıfı", "Ön teknik not"],
    seoCta: "Kırıcılar ve parçalayıcılar, çekiçli değirmen, zincirli kırıcı, çeneli kırıcı, primer kırıcı ve kırıcı kapasite hesabı başlıklarında projenize en uygun sistemi birlikte netleştirelim.",
    options: [
      {
        id: "hammer",
        label: "Çekiçli Değirmenler",
        seo: "çekiçli değirmen",
        description: "Kırılgan ve orta sertlikte ürünlerde kontrollü boyut küçültme için kullanılan yüksek devirli kırma sistemleri.",
        intro: "Çekiçli değirmen seçimi yapılırken hedef çıkış boyutu, ürün kırılganlığı ve besleme kararlılığı birlikte değerlendirilmelidir.",
        auto: { a: "Çekiçli değirmen sınıfı", b: "Yüksek devirli rotor", c: "Düzenli besleme önerilir", d: "Aşınmaya dayanıklı iç yüzey", e: "Orta / yüksek servis sınıfı", note: "İnce kırma ve kontrollü çıkış için elek ve rotor karakteri birlikte seçilmelidir." },
        technicalSpecs: ["Ağır hizmet gövde yapısı", "Aşınmaya dayanıklı iç yüzeyler", "Farklı rotor seçenekleri", "Servis ve bakım kapağı alternatifleri", "Otomasyon ve sensör entegrasyonu"],
        applications: ["Gübre hammaddesi kırma hatları", "Kompost ve organik atık ön işleme", "Kırılgan mineral hazırlama", "Geri dönüşüm hazırlık hatları"],
        materials: ["Organik atık", "Granül gübre", "Kırılgan mineral", "Lifli malzeme"],
        advantages: ["Yüksek küçültme verimi", "Sürekli beslemeye uygun çalışma", "Bakım dostu yapı", "Prosese özel rotor seçeneği"],
        faqs: [
          { question: "Çekiçli değirmen hangi ürünlerde uygundur?", answer: "Kırılgan, orta sertlikte ve kontrollü küçültme istenen ürünlerde güçlü bir çözümdür." },
        ],
      },
      {
        id: "chain",
        label: "Zincirli Kırıcılar",
        seo: "zincirli kırıcı",
        description: "Topaklı ve yarı nemli ürünlerde parçalama etkisini artıran zincir temelli kırma çözümleri.",
        intro: "Zincirli kırıcı seçimi yapılırken yapışkanlık, nem oranı ve topak kırma hedefi birlikte değerlendirilmelidir.",
        auto: { a: "Zincirli kırıcı sınıfı", b: "Serbest salınımlı zincir grubu", c: "Orta / düzensiz besleme kabulü", d: "Nemli ürüne uygun iç kaplama", e: "Orta servis sınıfı", note: "Nemli ve topaklı ürünlerde iç temizlik ve servis erişimi önemlidir." },
        technicalSpecs: ["Ağır hizmet gövde yapısı", "Aşınmaya dayanıklı zincir setleri", "Farklı rotor ve zincir düzenleri", "Servis ve bakım kapağı alternatifleri", "Otomasyon ve sensör entegrasyonu"],
        applications: ["Gübre hammaddesi kırma hatları", "Nemli granül geri dönüşü", "Kompost ve organik karışımlar", "Yarı nemli ürün hazırlık hatları"],
        materials: ["Granül gübre", "Yarı nemli malzeme", "Kompost", "Organik atık"],
        advantages: ["Topak kırmada güçlü etki", "Düzensiz beslemeye tolerans", "Bakım dostu yapı", "Prosese özel zincir karakteri"],
        faqs: [{ question: "Nemli malzeme için zincirli kırıcı uygun mudur?", answer: "Evet, topaklı ve yarı nemli ürünlerde güçlü ön parçalama sağlayabilir." }],
      },
      {
        id: "jaw",
        label: "Çeneli Kırıcılar",
        seo: "çeneli kırıcı",
        description: "Sert ve iri taneli malzemelerde ön kırma için kullanılan klasik ve dayanımlı kırma sistemleri.",
        intro: "Çeneli kırıcı seçimi yapılırken giriş boyutu, malzeme sertliği ve primer kırma ihtiyacı dikkate alınmalıdır.",
        auto: { a: "Çeneli kırıcı sınıfı", b: "Primer çene mekanizması", c: "Düzenli ve kontrollü besleme", d: "Ağır hizmet çene ve astar", e: "Yüksek servis sınıfı", note: "Sert taş ve iri giriş boyutlarında primer kırma yaklaşımı öne çıkar." },
        technicalSpecs: ["Ağır hizmet gövde yapısı", "Değiştirilebilir çene plakaları", "Farklı kırma boşluğu seçenekleri", "Servis ve bakım kapağı alternatifleri", "Otomasyon ve sensör entegrasyonu"],
        applications: ["Mineral ve taş kırma hatları", "Primer kırma istasyonları", "Sert malzeme hazırlık hatları", "Endüstriyel ön küçültme sistemleri"],
        materials: ["Sert taş / kaya", "Mineral", "Kırılgan mineral"],
        advantages: ["İri giriş boyutlarında güvenli çalışma", "Yüksek dayanım", "Servis kolaylığı", "Primer kırmada stabil performans"],
        faqs: [{ question: "Giriş boyutu çeneli kırıcı seçiminde neden önemlidir?", answer: "Besleme ağzı, kırma boşluğu ve nihai küçültme yaklaşımı doğrudan giriş boyutuna göre belirlenir." }],
      },
      {
        id: "primary",
        label: "Primer Kırıcılar",
        seo: "primer kırıcı",
        description: "İlk kademe boyut küçültme için geliştirilen, yüksek giriş boyutlarını karşılayan ağır hizmet sistemleri.",
        intro: "Primer kırıcı seçimi yapılırken giriş boyutu, hat kararlılığı ve sürekli besleme karakteri birlikte değerlendirilmelidir.",
        auto: { a: "Primer kırıcı sınıfı", b: "İlk kademe kırma mantığı", c: "Sürekli besleme tavsiyesi", d: "Ağır hizmet astar ve gövde", e: "Yüksek servis sınıfı", note: "Primer kırmada besleme kararlılığı ve bakım erişimi kritik önemdedir." },
        technicalSpecs: ["Ağır hizmet gövde yapısı", "Yüksek dayanımlı kırma elemanları", "Servis ve bakım kapağı alternatifleri", "Besleme kontrol altyapısı", "Otomasyon ve sensör entegrasyonu"],
        applications: ["Mineral ve taş kırma hatları", "Geri dönüşüm ön küçültme", "Atık hazırlık sistemleri", "Ağır hizmet proses hatları"],
        materials: ["Sert taş / kaya", "Mineral", "RDF / atık"],
        advantages: ["İlk kademe küçültmede güçlü yapı", "Yüksek servis sınıfı", "Sürekli beslemeye uygun çalışma", "Bakım dostu yapı"],
        faqs: [{ question: "Primer kırıcı ne zaman gerekir?", answer: "İri giriş boyutu ve çok kademeli kırma ihtiyacı olan proseslerde primer kırıcı tercih edilir." }],
      },
      {
        id: "shredder",
        label: "Parçalayıcı Sistemler",
        seo: "parçalayıcı makina",
        description: "Hacimli, lifli veya karma atık akışlarında boyut küçültme için kullanılan parçalayıcı sistemler.",
        intro: "Parçalayıcı seçiminde malzeme şekli, lifli yapı, düzensiz besleme ve istenen ön küçültme seviyesi birlikte değerlendirilmelidir.",
        auto: { a: "Parçalayıcı sınıfı", b: "Bıçak / parçalayıcı şaft mantığı", c: "Düzensiz besleme kabulü", d: "Ağır hizmet bıçak ve gövde", e: "Yüksek servis sınıfı", note: "Lifli ve karma malzemelerde şaft yapısı ve bıçak dizilimi birlikte seçilmelidir." },
        technicalSpecs: ["Ağır hizmet gövde yapısı", "Farklı bıçak ve şaft seçenekleri", "Servis ve bakım kapağı alternatifleri", "Besleme kontrol altyapısı", "Otomasyon ve sensör entegrasyonu"],
        applications: ["RDF ve atık boyut küçültme sistemleri", "Organik atık ön işleme", "Lifli malzeme parçalama", "Geri dönüşüm hazırlık hatları"],
        materials: ["RDF / atık", "Kırpıntı / lifli malzeme", "Organik atık"],
        advantages: ["Düzensiz malzemede güçlü performans", "Yüksek dayanım", "Bakım dostu yapı", "Ön kırmada esnek kullanım"],
        faqs: [{ question: "Parçalayıcı ile kırıcı arasındaki fark nedir?", answer: "Parçalayıcı sistemler daha çok hacimli ve düzensiz malzemede ön küçültme sağlar; kırıcılar ise daha kontrollü ürün boyutu hedefler." }],
      },
      {
        id: "fine",
        label: "İkincil / İnce Kırıcılar",
        seo: "endüstriyel kırma sistemleri",
        description: "İlk kırma sonrası daha kontrollü ürün boyutuna ulaşmak için kullanılan ince kırma çözümleri.",
        intro: "İkincil / ince kırıcı seçimi yapılırken hedef çıkış boyutu ve küçültme oranı dikkatle değerlendirilmelidir.",
        auto: { a: "İnce kırıcı sınıfı", b: "İkincil küçültme mantığı", c: "Düzenli besleme önerilir", d: "Aşınmaya dayanıklı ince kırma iç yapısı", e: "Orta servis sınıfı", note: "İnce kırmada küçültme oranı ve malzeme aşındırıcılığı birlikte ele alınmalıdır." },
        technicalSpecs: ["Ağır hizmet gövde yapısı", "Aşınmaya dayanıklı iç yüzeyler", "Farklı kırma elemanı seçenekleri", "Servis ve bakım kapağı alternatifleri", "Otomasyon ve sensör entegrasyonu"],
        applications: ["İkincil kırma hatları", "Nihai ürün hazırlığı", "Granül ve mineral düzenleme", "Proses öncesi ince küçültme"],
        materials: ["Granül gübre", "Mineral", "Kırılgan mineral"],
        advantages: ["Kontrollü çıkış boyutu", "İkincil hat entegrasyonu", "Bakım kolaylığı", "Aşınma yönetimi"],
        faqs: [{ question: "Küçültme oranı neden önemlidir?", answer: "Giriş ve çıkış boyutu arasındaki oran, uygun ekipman sınıfını ve kırma kademesini belirler." }],
      },
    ],
  },
  "reaktorler-ve-tanklar": {
    title: "Reaktörler ve Tanklar",
    heroIntro:
      "Karıştırma, çözündürme, stoklama, ısıtma, soğutma ve basınçlı proses ihtiyaçları için kullanılan reaktör ve tank çözümlerini tek kategori altında sunuyoruz. Ürün tipi, proses süresi, sıcaklık, doluluk oranı ve güvenlik payı gibi kriterlere göre doğru sistemi belirlemenize yardımcı oluyoruz.",
    summary:
      "Reaktör ve tank sistemleri; proses tipi, kapasite, basınç, sıcaklık ve malzeme davranışına göre özel olarak değerlendirilir. Karıştırıcılı, ısıtmalı, soğutmalı, basınçlı ve stok amaçlı çözümleri tek çatı altında sunuyoruz.",
    calculatorTitle: "Reaktör / Tank Seçim ve Ön Hacim Hesabı",
    capacityOptions: ["500 litre – 100 m³ ve üzeri hacim seçenekleri", "Net hacme göre brüt hacim optimizasyonu", "Basınç, sıcaklık ve karıştırıcı ihtiyacına göre özel tasarım"],
    optionalEquipment: ["Seviye, sıcaklık ve basınç sensörleri", "İç serpantin ve ceket sistemleri", "Karıştırıcı ve baffle paketleri", "Platform ve servis merdiveni", "Loadcell ve otomasyon entegrasyonu", "Temizlik ve CIP bağlantıları"],
    materialDensity: {
      "Sıvı gübre": 1150,
      "Organomineral çözelti": 1200,
      "Amino asit çözeltisi": 1080,
      "Asidik çözelti": 1180,
      "Alkali çözelti": 1120,
      "Su bazlı karışım": 1000,
      "Yoğun sıvı": 1250,
      Süspansiyon: 1350,
      "Çamur / yarı akışkan ürün": 1050,
      "Özel kimyasal": 1100,
    },
    resultLabels: ["Önerilen net hacim", "Önerilen brüt hacim", "Önerilen doluluk sınıfı", "Karıştırıcı gerekliliği", "Isıtma / soğutma gerekliliği", "Basınç / vakum teknik uyarısı", "Teknik özet"],
    autoLabels: ["Önerilen toplam tank hacmi", "Önerilen brüt hacim", "Önerilen doluluk aralığı", "Önerilen güvenlik payı", "Önerilen karıştırıcı / ceket notu", "Ön teknik not"],
    seoCta: "Reaktörler ve tanklar, karıştırıcılı reaktör, çözündürme tankı, stok tankı, basınçlı reaktör ve reaktör hacim hesabı başlıklarında projenize en uygun sistemi birlikte netleştirelim.",
    options: [
      { id: "agit", label: "Karıştırıcılı Reaktörler", seo: "karıştırıcılı reaktör", description: "Karıştırma, reaksiyon ve homojen proses kurgusu için kullanılan reaktör sistemleri.", intro: "Karıştırıcılı reaktör seçiminde hacim, viskozite, sıcaklık ve reaksiyon süresi birlikte değerlendirilmelidir.", auto: { a: "Karıştırıcılı reaktör sınıfı", b: "Brüt hacim ve güvenlik payı önerisi", c: "Doluluk %60 – %80", d: "Karıştırıcı ve baffle önerisi", e: "Standart proses sınıfı", note: "Yüksek viskozitede karıştırıcı momenti ve geometri birlikte ele alınmalıdır." }, technicalSpecs: ["Karıştırıcılı tasarım seçenekleri", "Ceketli ve serpantinli yapı", "Seviye, sıcaklık ve basınç ölçüm altyapısı", "Prosese uygun iç kaplama / yüzey seçeneği"], applications: ["Sıvı gübre üretim hatları", "Kimyasal hazırlama sistemleri", "Reaksiyon ve çözündürme sistemleri"], materials: ["Sıvı ürünler", "Süspansiyonlar", "Yoğun akışkanlar"], advantages: ["Homojen karışım", "Proses kontrolü", "Özel karıştırıcı seçimi", "Güvenli çalışma"], faqs: [{ question: "Karıştırıcı seçimi neye göre yapılır?", answer: "Viskozite, hacim, hedef karışım süresi ve proses tipine göre belirlenir." }] },
      { id: "dissolve", label: "Çözündürme Tankları", seo: "çözündürme tankı", description: "Katı veya sıvı bileşenlerin kontrollü çözündürülmesi için tasarlanan proses tankları.", intro: "Çözündürme tanklarında doluluk, karıştırma ve ısı kontrolü birlikte ele alınmalıdır.", auto: { a: "Çözündürme tankı sınıfı", b: "Brüt hacim önerisi", c: "Doluluk %55 – %75", d: "Isıtma / serpantin notu", e: "Standart proses sınıfı", note: "Çözünme süresine göre karıştırıcı ve sıcaklık yaklaşımı optimize edilmelidir." }, technicalSpecs: ["Karıştırıcılı tasarım seçenekleri", "Ceketli ve serpantinli yapı", "Seviye ve sıcaklık ölçümü", "Prosese uygun iç yüzey seçeneği"], applications: ["Kimyasal hazırlama sistemleri", "Amino asit ve biyostimülan prosesleri", "Çözündürme ve hazırlık hatları"], materials: ["Sıvı ürünler", "Kimyasal çözeltiler", "Süspansiyonlar"], advantages: ["Kontrollü çözündürme", "Hızlı proses hazırlığı", "Bakım kolaylığı", "Ölçeklenebilir hacim"], faqs: [{ question: "Çözündürme tankında ısıtma ne zaman gerekir?", answer: "Çözünme süresini kısaltmak veya viskoziteyi düşürmek için ısıtma gerekebilir." }] },
      { id: "storage", label: "Stok Tankları", seo: "stok tankı", description: "Ara stok, nihai ürün depolama ve kontrollü proses bekleme için kullanılan tank çözümleri.", intro: "Stok tanklarında net hacim, doluluk ve güvenlik payı temel seçim kriterleridir.", auto: { a: "Stok tankı sınıfı", b: "Brüt hacim önerisi", c: "Doluluk %70 – %85", d: "Basit karıştırıcı / sirkülasyon notu", e: "Depolama sınıfı", note: "Depolama süresi ve ürün karakteri malzeme ve iç yüzey seçiminde belirleyicidir." }, technicalSpecs: ["Stok ve proses bekleme tasarımı", "Seviye altyapısı", "Opsiyonel karıştırıcı", "Prosese uygun gövde malzemesi"], applications: ["Stok ve proses hazırlık tankları", "Sıvı gübre depolama", "Kimyasal çözelti depolama"], materials: ["Sıvı ürünler", "Kimyasal çözeltiler", "Asidik ortamlar"], advantages: ["Güvenli depolama", "Net hacim yönetimi", "Kolay bakım", "Uzun ömürlü gövde yapısı"], faqs: [{ question: "Reaktör ile stok tankı arasındaki fark nedir?", answer: "Reaktör aktif proses yürütür; stok tankı ise ağırlıklı olarak depolama ve bekletme amaçlıdır." }] },
      { id: "pressure", label: "Basınçlı Reaktörler", seo: "basınçlı reaktör", description: "Basınç altında çalışan ve güvenlik kriterleri yüksek prosesler için tasarlanan özel reaktör sistemleri.", intro: "Basınçlı reaktör seçiminde tasarım basıncı, sıcaklık ve malzeme güvenliği birlikte değerlendirilmelidir.", auto: { a: "Basınçlı reaktör sınıfı", b: "Brüt hacim ve güvenlik payı önerisi", c: "Doluluk %50 – %75", d: "Ceket / serpantin ve emniyet notu", e: "Basınçlı proses sınıfı", note: "Basınç ve sıcaklık kombinasyonu, standart mühendislik doğrulaması ile kesinleştirilmelidir." }, technicalSpecs: ["Basınçlı ve vakumlu çalışma opsiyonları", "Ceketli ve serpantinli yapı", "Seviye, sıcaklık ve basınç ölçüm altyapısı", "Prosese uygun iç kaplama / yüzey seçeneği"], applications: ["Basınçlı proses hatları", "Kimya ve proses endüstrisi", "Reaksiyon ve çözündürme sistemleri"], materials: ["Asidik çözelti", "Alkali çözelti", "Özel kimyasal"], advantages: ["Güvenli proses yönetimi", "Yüksek mühendislik doğruluğu", "Özel malzeme seçimi", "Proses kontrolü"], faqs: [{ question: "Basınçlı tank hangi durumlarda tercih edilir?", answer: "Proseste iç basınç oluştuğunda veya kontrollü basınç altında çalışma gerektiğinde tercih edilir." }] },
    ],
  },
  "eleme-ve-siniflandirma-sistemleri": {
    title: "Eleme ve Sınıflandırma Sistemleri",
    heroIntro:
      "Ürünün tane boyutuna göre ayrıştırılması, sınıflandırılması ve proses veriminin artırılması için kullanılan eleme sistemlerini tek kategori altında sunuyoruz. Malzeme yapısı, nem durumu, kapasite ve hedef fraksiyonlara göre doğru sistemi belirlemenize yardımcı oluyoruz.",
    summary:
      "Döner elek, vibrasyonlu elek, trommel sistemleri ve çok katlı eleme çözümleri ile ürün ayrıştırma ve proses verim sistemlerini tek çatı altında sunuyoruz.",
    calculatorTitle: "Eleme Sistemi Seçim ve Ön Değerlendirme Aracı",
    capacityOptions: ["3–120 ton/saat arası kapasite seçenekleri", "Hedef fraksiyona göre elek alanı ve kat yapısı optimizasyonu", "Nem ve tıkanma riskine göre özel proses ayarı"],
    optionalEquipment: ["Toz emiş bağlantısı", "Alt ve üst ürün konveyörleri", "Titreşim kontrol sistemi", "By-pass hattı", "Servis platformu", "Otomasyon ve sensör seti"],
    materialDensity: {
      Kompost: 650,
      "Organik atık": 560,
      "Granül gübre": 980,
      Mineral: 1450,
      "Toz ürün": 760,
      "Yarı nemli ürün": 900,
      "Yapışkan ürün": 880,
    },
    resultLabels: ["Ön eleme uygunluğu", "Sınıflandırma uygunluğu", "Tıkanma riski", "Önerilen sistem yapısı", "Nem / yapışkanlık notu", "Yaklaşık kapasite uygunluğu", "Teknik özet"],
    autoLabels: ["Önerilen elek tipi", "Önerilen elek açıklığı sınıfı", "Önerilen kat yapısı", "Nem / yapışkanlık teknik notu", "Önerilen sistem karakteri", "Ön teknik not"],
    seoCta: "Eleme ve sınıflandırma sistemleri, döner elek, vibrasyonlu elek, trommel ve eleme kapasite hesabı başlıklarında projenize en uygun sistemi birlikte netleştirelim.",
    options: [
      { id: "rotary", label: "Döner Elek", seo: "döner elek", description: "Dairesel hareketle çalışan ve sürekli akışta ayrıştırma sağlayan döner eleme sistemleri.", intro: "Döner elek seçiminde çap, elek alanı, nem ve hedef ayırma boyutu birlikte değerlendirilmelidir.", auto: { a: "Döner elek sınıfı", b: "Elek açıklığı önerisi", c: "Tek kat / çok kat notu", d: "Nem ve tıkanma uyarısı", e: "Sürekli akış sınıfı", note: "Yapışkan malzemede temizleme yaklaşımı ayrıca değerlendirilmelidir." }, technicalSpecs: ["Farklı göz açıklığı seçenekleri", "Aşınmaya dayanıklı elek yüzeyi", "Hat içi veya bağımsız kurulum seçenekleri", "Servis erişim kolaylığı"], applications: ["Kompost eleme hatları", "Gübre sınıflandırma hatları", "RDF / atık ön eleme"], materials: ["Kompost", "Organik atık", "Yarı nemli ürün"], advantages: ["Sürekli akışta dengeli eleme", "Hacimli ürünlerde uygun çalışma", "Kolay bakım", "Hat entegrasyonu"], faqs: [{ question: "Döner elek hangi üründe avantaj sağlar?", answer: "Kompost, organik atık ve hacimli akışlarda sürekli ayrıştırma için güçlü bir çözümdür." }] },
      { id: "vibratory", label: "Vibrasyonlu Elek", seo: "vibrasyonlu elek", description: "Titreşim temelli ayrıştırma ile daha hassas sınıflandırma sağlayan elek sistemleri.", intro: "Vibrasyonlu elek seçiminde hedef ayırma boyutu, kat sayısı ve tıkanma riski birlikte değerlendirilmelidir.", auto: { a: "Vibrasyonlu elek sınıfı", b: "Elek açıklığı önerisi", c: "Çok katlı yapı notu", d: "Nem ve yapışkanlık uyarısı", e: "Hassas sınıflandırma sınıfı", note: "İnce fraksiyonlarda titreşim karakteri ve kat sayısı birlikte belirlenmelidir." }, technicalSpecs: ["Farklı göz açıklığı seçenekleri", "Titreşim bazlı ayırma mekanizması", "Aşınmaya dayanıklı elek yüzeyi", "Hat içi veya bağımsız kurulum seçenekleri"], applications: ["Gübre sınıflandırma hatları", "Mineral ayırma sistemleri", "Nihai ürün kalite kontrol elemesi"], materials: ["Granül gübre", "Mineral", "Toz ürün"], advantages: ["Hassas sınıflandırma", "Çok katlı yapı seçenekleri", "Kontrollü ürün kalitesi", "Kompakt tasarım"], faqs: [{ question: "Kat sayısı neden önemlidir?", answer: "Tek geçişte birden fazla fraksiyon almak için kat sayısı kritik bir seçim kriteridir." }] },
      { id: "trommel", label: "Trommel Sistemleri", seo: "trommel", description: "Döner tambur mantığıyla çalışan ve iri akışlarda ön eleme ile sınıflandırma sağlayan sistemler.", intro: "Trommel sistemlerinde çap, uzunluk, nem ve tıkanma davranışı birlikte ele alınmalıdır.", auto: { a: "Trommel sınıfı", b: "Elek açıklığı önerisi", c: "Tek kat ön eleme notu", d: "Nem ve tıkanma uyarısı", e: "Ön eleme sınıfı", note: "Hacimli ve nemli ürünlerde trommel yapısı avantaj sağlayabilir." }, technicalSpecs: ["Farklı göz açıklığı seçenekleri", "Dönüş bazlı ayırma mekanizması", "Aşınmaya dayanıklı elek yüzeyi", "Hat içi veya bağımsız kurulum seçenekleri"], applications: ["Kompost eleme hatları", "RDF / atık ön eleme", "Ön eleme ve nihai sınıflandırma hatları"], materials: ["Kompost", "Organik atık", "Yapışkan ürün"], advantages: ["Hacimli ürünlerde uygun çalışma", "Ön elemede güçlü yapı", "Sürekli hat entegrasyonu", "Bakım kolaylığı"], faqs: [{ question: "Trommel ile döner elek arasındaki fark nedir?", answer: "Trommel sistemleri genelde daha iri ve hacimli ürünlerde ön eleme karakteriyle öne çıkar." }] },
    ],
  },
  "toz-toplama-sistemleri": {
    title: "Toz Toplama Sistemleri",
    heroIntro:
      "Tesislerde toz kontrolü, filtreleme ve çevresel yönetim için kullanılan toz toplama sistemlerini tek kategori altında sunuyoruz. Hat yapısı, debi, ürün tipi ve toz karakterine göre doğru filtrasyon sistemini belirlemenize yardımcı oluyoruz.",
    summary:
      "Jet pulse filtreler, siklonlar, torba filtreler ve merkezi toz toplama hatları ile proses içinde temiz ve kontrollü filtrasyon altyapısını tek çatı altında sunuyoruz.",
    calculatorTitle: "Toz Toplama Sistemi Seçim ve Ön Debi Aracı",
    capacityOptions: ["1.000–120.000 m³/h arası hava debisi seçenekleri", "Hat noktası sayısına göre merkezi veya lokal çözümler", "Toz tipi ve sıcaklığa göre filtre medya optimizasyonu"],
    optionalEquipment: ["Fan ve kanal hattı", "ATEX güvenlik ekipmanları", "Otomatik temizleme sistemi", "Seviye ve basınç sensörleri", "Bunker ve boşaltma elemanları", "Otomasyon ve izleme paneli"],
    materialDensity: {
      "Toz gübre": 780,
      "Organik toz": 520,
      "Mineral tozu": 1350,
      "Kuru karışım": 820,
      "Proses tozu": 760,
      "Nemli toz": 900,
    },
    resultLabels: ["Sistem uygunluğu", "Önerilen filtre sınıfı", "Nem / sıcaklık riski", "Çok noktalı hat uygunluğu", "Filtrasyon karakteri", "Güvenlik / ATEX notu", "Teknik özet"],
    autoLabels: ["Önerilen filtre tipi", "Önerilen gövde sınıfı", "Önerilen filtre medya notu", "Ön ATEX / güvenlik notu", "Önerilen sistem karakteri", "Ön teknik not"],
    seoCta: "Toz toplama sistemleri, jet pulse filtre, siklon, torba filtre ve toz toplama hesabı başlıklarında projenize en uygun sistemi birlikte netleştirelim.",
    options: [
      { id: "jet", label: "Jet Pulse Filtreler", seo: "jet pulse filtre", description: "Basınçlı hava ile otomatik temizleme yapan endüstriyel filtre sistemleri.", intro: "Jet pulse filtre seçiminde debi, toz tipi, sıcaklık ve temizleme karakteri birlikte değerlendirilmelidir.", auto: { a: "Jet pulse filtre sınıfı", b: "Modüler gövde önerisi", c: "Filtre medya notu", d: "ATEX / güvenlik notu", e: "Sürekli temizleme sınıfı", note: "Yüksek debili ve çok noktalı uygulamalarda jet pulse filtre öne çıkar." }, technicalSpecs: ["Otomatik temizleme sistemi", "Modüler filtre gövdesi", "Farklı filtre medya seçenekleri", "ATEX ve güvenlik altyapısı"], applications: ["Gübre ve toz ürün üretim hatları", "Öğütme ve transfer noktaları", "Genel proses toz kontrolü"], materials: ["Toz gübre", "Mineral tozu", "Kuru karışım"], advantages: ["Sürekli temizleme", "Yüksek debi kabiliyeti", "Merkezi hat uyumu", "Kolay bakım"], faqs: [{ question: "Jet pulse filtre ne zaman tercih edilir?", answer: "Yüksek debili ve sürekli toz yükü olan proseslerde güçlü bir çözümdür." }] },
      { id: "cyclone", label: "Siklonlar", seo: "siklon", description: "Santrifüj etkiyle kaba toz ayrıştırması sağlayan ön filtrasyon ekipmanları.", intro: "Siklon seçiminde hava debisi, toz yükü ve partikül karakteri birlikte değerlendirilmelidir.", auto: { a: "Siklon sınıfı", b: "Ön ayırıcı gövde önerisi", c: "Filtre medya ihtiyacı yok / ön kademe", d: "ATEX / güvenlik notu", e: "Ön ayırma sınıfı", note: "İnce filtrasyon ihtiyacında siklon çoğu zaman ilave filtre ile birlikte değerlendirilir." }, technicalSpecs: ["Basit ve dayanımlı gövde yapısı", "Ön filtrasyon mantığı", "Düşük bakım ihtiyacı", "Yüksek sıcaklık dayanımı seçenekleri"], applications: ["Kırma ve eleme sistemleri", "Öğütme ve transfer noktaları", "Genel proses toz kontrolü"], materials: ["Mineral tozu", "Proses tozu", "Kuru karışım"], advantages: ["Basit yapı", "Düşük bakım ihtiyacı", "Ön ayırmada etkili performans", "Dayanıklı çalışma"], faqs: [{ question: "Siklon tek başına yeterli olur mu?", answer: "Kaba toz ayrıştırmada yeterli olabilir; ince filtrasyon ihtiyacında ilave filtre gerekebilir." }] },
      { id: "bag", label: "Torba Filtreler", seo: "torba filtre", description: "Toz toplama ve hassas filtrasyon gerektiren proseslerde kullanılan torba filtre sistemleri.", intro: "Torba filtre seçiminde debi, filtre hassasiyeti, sıcaklık ve toz karakteri birlikte değerlendirilmelidir.", auto: { a: "Torba filtre sınıfı", b: "Gövde ve torba alanı önerisi", c: "Filtre medya notu", d: "ATEX / güvenlik notu", e: "Hassas filtrasyon sınıfı", note: "İnce partikül kontrolünde torba filtre ve temizlik karakteri birlikte ele alınmalıdır." }, technicalSpecs: ["Farklı filtre medya seçenekleri", "Modüler gövde yapısı", "Basınç ve seviye izleme altyapısı", "ATEX ve güvenlik altyapısı"], applications: ["Paketleme ve dolum hatları", "Toz ürün üretim hatları", "Genel proses toz kontrolü"], materials: ["Toz gübre", "Organik toz", "Proses tozu"], advantages: ["Hassas filtrasyon", "Çok noktalı hat uyumu", "Modüler yapı", "Bakım kolaylığı"], faqs: [{ question: "Torba filtre hangi durumda öne çıkar?", answer: "İnce partikül kontrolü ve hassas filtreleme gereken uygulamalarda öne çıkar." }] },
    ],
  },
  "paketleme-ve-dolum-sistemleri": {
    title: "Paketleme ve Dolum Sistemleri",
    heroIntro:
      "Torbalama, dolum ve son ürün hazırlama süreçlerinde kullanılan sistemleri tek kategori altında sunuyoruz. Ürün tipi, ambalaj formatı, kapasite ve hassasiyet ihtiyacına göre doğru dolum sistemini belirlemenize yardımcı oluyoruz.",
    summary:
      "Açık ağız torbalama, big bag dolum, sıvı dolum ve otomasyon seviyesine göre değişen paketleme çözümlerini tek çatı altında sunuyoruz.",
    calculatorTitle: "Paketleme ve Dolum Sistemi Ön Seçim Aracı",
    capacityOptions: ["Düşük, orta ve yüksek adet / saat seçenekleri", "Ambalaj formatına göre özel dozajlama yapısı", "Manuel, yarı otomatik ve tam otomatik çözümler"],
    optionalEquipment: ["Checkweigher ve kontrol terazisi", "Etiketleme ve kodlama entegrasyonu", "Paletleme hazırlık hattı", "Toz kontrol bağlantısı", "Otomasyon ve sensör paketleri", "Ürün besleme bunkerleri"],
    materialDensity: {
      "Granül ürün": 900,
      "Toz ürün": 760,
      "Sıvı ürün": 1000,
      "Organik ürün": 650,
      "Mineral ürün": 1350,
      "Karışım ürün": 980,
    },
    resultLabels: ["Sistem uygunluğu", "Paketleme sınıfı", "Önerilen operasyon seviyesi", "Dozajlama uygunluğu", "Toz / akış karakteri notu", "Hassasiyet yorumu", "Teknik özet"],
    autoLabels: ["Önerilen dolum sistemi", "Önerilen dozajlama sınıfı", "Önerilen hassasiyet notu", "Önerilen ürün besleme tipi", "Önerilen otomasyon karakteri", "Ön teknik not"],
    seoCta: "Paketleme ve dolum sistemleri, torbalama sistemi, big bag dolum, açık ağız torbalama ve paketleme kapasite hesabı başlıklarında projenize en uygun sistemi birlikte netleştirelim.",
    options: [
      { id: "open-mouth", label: "Açık Ağız Torbalama", seo: "açık ağız torbalama", description: "Granül ve toz ürünlerin kontrollü torbalanması için kullanılan klasik torbalama sistemleri.", intro: "Açık ağız torbalama seçiminde ürün tipi, torba ağırlığı ve istenen otomasyon seviyesi birlikte değerlendirilmelidir.", auto: { a: "Açık ağız torbalama sınıfı", b: "Dozajlama yapısı önerisi", c: "Hassasiyet notu", d: "Ürün besleme tipi", e: "Yarı / tam otomatik sınıf", note: "Tozlu ürünlerde besleme ve toz kontrol sistemi birlikte ele alınmalıdır." }, technicalSpecs: ["Farklı dozajlama seçenekleri", "Yarı ve tam otomatik yapı", "Toz kontrollü dolum yaklaşımı", "Tartım entegrasyonu"], applications: ["Gübre torbalama hatları", "Toz ürün paketleme", "Granül ürün dolum sistemleri"], materials: ["Granül ürün", "Toz ürün", "Karışım ürün"], advantages: ["Esnek torba formatı", "Kontrollü tartım", "Operasyon kolaylığı", "Hat entegrasyonu"], faqs: [{ question: "Açık ağız torbalama hangi ürünlerde uygundur?", answer: "Granül ve toz ürünlerin standart torba formatında paketlenmesinde yaygın olarak kullanılır." }] },
      { id: "bigbag", label: "Big Bag Dolum", seo: "big bag dolum", description: "Yüksek ağırlıklı ambalajlar için kontrollü dolum ve yükleme sağlayan sistemler.", intro: "Big bag dolum seçiminde kapasite, torba ağırlığı ve ürün akış karakteri birlikte değerlendirilmelidir.", auto: { a: "Big bag dolum sınıfı", b: "Dozajlama yapısı önerisi", c: "Hassasiyet notu", d: "Ürün besleme tipi", e: "Yarı / tam otomatik sınıf", note: "Yüksek kapasiteli torbalamada operatör ergonomisi ve ürün kontrolü önemlidir." }, technicalSpecs: ["Big bag askı ve dolum yapısı", "Tartım entegrasyonu", "Ürün besleme kontrolü", "Yarı ve tam otomatik seçenekler"], applications: ["Big bag yükleme sistemleri", "Granül ve mineral ürün dolumu", "Dökme katı paketleme"], materials: ["Granül ürün", "Mineral ürün", "Karışım ürün"], advantages: ["Yüksek ağırlıkta güvenli dolum", "Esnek torba kullanımı", "Kontrollü tartım", "Hat entegrasyonu"], faqs: [{ question: "Big bag dolum hangi durumlarda tercih edilir?", answer: "Yüksek ağırlıklı ambalaj ve dökme katı ürün sevkiyatında güçlü bir çözümdür." }] },
      { id: "liquid", label: "Şişeleme ve Sıvı Dolum Hatları", seo: "sıvı dolum hattı", description: "Sıvı ürünlerin hassas ve kontrollü ambalajlanması için kullanılan dolum sistemleri.", intro: "Sıvı dolum hattı seçiminde ürün viskozitesi, ambalaj tipi ve hassasiyet beklentisi birlikte değerlendirilmelidir.", auto: { a: "Sıvı dolum sınıfı", b: "Dozajlama yapısı önerisi", c: "Hassasiyet notu", d: "Besleme ve sıvı kontrol tipi", e: "Yarı / tam otomatik sınıf", note: "Sıvı ürünlerde dolum hassasiyeti ve hijyenik tasarım birlikte ele alınmalıdır." }, technicalSpecs: ["Sıvı dolum nozulları", "Hassas tartım / dozajlama", "Hijyenik tasarım seçenekleri", "Yarı ve tam otomatik yapı"], applications: ["Sıvı ürün dolum sistemleri", "Kimyasal dolum hatları", "Biyostimülan ve sıvı gübre dolumu"], materials: ["Sıvı ürün", "Organik ürün", "Karışım ürün"], advantages: ["Yüksek hassasiyet", "Hijyenik çalışma", "Farklı ambalaj formatlarına uyum", "Otomasyon entegrasyonu"], faqs: [{ question: "Sıvı dolum hattında hassasiyet neden önemlidir?", answer: "Ürün standardı, yasal tolerans ve operasyon kararlılığı için hassas dozaj kritik önemdedir." }] },
    ],
  },
  "depolama-ve-besleme-sistemleri": {
    title: "Depolama ve Besleme Sistemleri",
    heroIntro:
      "Depolama, ürün alma ve kontrollü besleme süreçlerinde çalışan ekipmanları tek sistem yaklaşımıyla sunuyoruz. Malzeme davranışı, kapasite, akış karakteri ve saha yapısına göre doğru silo, bunker ve besleme sistemini belirlemenize yardımcı oluyoruz.",
    summary:
      "Silo sistemleri, bunkerler, ürün alma ve dozajlama besleme çözümleri ile depolama ve kontrollü transfer altyapısını tek çatı altında sunuyoruz.",
    calculatorTitle: "Depolama ve Besleme Sistemi Ön Hacim Hesabı",
    capacityOptions: ["1–500 m³ arası stok hacmi seçenekleri", "Doluluk ve güvenlik payına göre brüt hacim optimizasyonu", "Akış karakterine göre koni ve çıkış geometrisi tasarımı"],
    optionalEquipment: ["Titreşim ve akış yardımcısı sistemler", "Dozajlama ekipmanları", "Seviye sensörleri", "Platform ve servis yapıları", "Ağır hizmet çıkış ekipmanları", "Otomasyon ve tartım sistemleri"],
    materialDensity: {
      "Toz ürün": 760,
      "Granül ürün": 920,
      "Organik malzeme": 580,
      Mineral: 1450,
      "Yapışkan ürün": 920,
      "Nemli ürün": 880,
      "Serbest akışlı ürün": 720,
    },
    resultLabels: ["Önerilen net hacim", "Önerilen brüt hacim", "Besleme sınıfı", "Akış riski", "Çıkış geometrisi notu", "Akış yardımcısı gerekliliği", "Teknik özet"],
    autoLabels: ["Önerilen silo / bunker tipi", "Önerilen hacim sınıfı", "Önerilen çıkış geometrisi", "Akış yardımcısı notu", "Önerilen sistem karakteri", "Ön teknik not"],
    seoCta: "Depolama ve besleme sistemleri, silo sistemleri, bunker, silo hacim hesabı ve bunker hacim hesabı başlıklarında projenize en uygun sistemi birlikte netleştirelim.",
    options: [
      { id: "silo", label: "Silo Sistemleri", seo: "silo sistemleri", description: "Yüksek hacimli depolama ve kontrollü ürün alma için tasarlanan silo çözümleri.", intro: "Silo seçiminde stok hacmi, doluluk, güvenlik payı ve ürün akış karakteri birlikte değerlendirilmelidir.", auto: { a: "Silo sınıfı", b: "Brüt hacim önerisi", c: "Çıkış geometrisi önerisi", d: "Akış yardımcısı notu", e: "Stok sınıfı", note: "Toz ve yapışkan ürünlerde koni açısı ve akış yardımcısı gerekliliği birlikte değerlendirilmelidir." }, technicalSpecs: ["Farklı stok hacmi seçenekleri", "Çıkış konisi ve akış yardımcısı altyapısı", "Seviye sensörü ve otomasyon entegrasyonu", "Ağır hizmet çıkış çözümleri"], applications: ["Gübre hammaddesi depolama", "Toz ürün ara stok sistemleri", "Mineral ve dökme katı depolama"], materials: ["Toz ürün", "Granül ürün", "Mineral"], advantages: ["Yüksek stok hacmi", "Kontrollü ürün alma", "Hat entegrasyonu", "Sahaya uyarlanabilir yapı"], faqs: [{ question: "Silo hacmi nasıl belirlenir?", answer: "Tüketim hızı, hedef stok süresi, doluluk ve güvenlik payı birlikte değerlendirilerek belirlenir." }] },
      { id: "bunker", label: "Bunkerler", seo: "bunker", description: "Kısa süreli stok ve kontrollü besleme için kullanılan kompakt bunker çözümleri.", intro: "Bunker seçiminde akış karakteri, besleme tipi ve doluluk oranı birlikte değerlendirilmelidir.", auto: { a: "Bunker sınıfı", b: "Brüt hacim önerisi", c: "Çıkış geometrisi önerisi", d: "Akış yardımcısı notu", e: "Besleme ön stok sınıfı", note: "Kısa çevrimli beslemede bunker çıkış geometrisi ve dozaj ekipmanı birlikte seçilmelidir." }, technicalSpecs: ["Kompakt stok ve besleme yapısı", "Çıkış ekipmanı entegrasyonu", "Titreşim ve akış yardımcısı seçenekleri", "Seviye sensörü altyapısı"], applications: ["Kompost ve organik ürün bunkerleri", "Proses besleme ve dozajlama hatları", "Ara stok ve transfer hazneleri"], materials: ["Organik malzeme", "Yapışkan ürün", "Nemli ürün"], advantages: ["Kompakt yerleşim", "Kontrollü besleme", "Hızlı entegrasyon", "Bakım kolaylığı"], faqs: [{ question: "Bunker ile silo arasındaki fark nedir?", answer: "Bunkerler daha kısa süreli stok ve daha aktif besleme amaçlı kullanılır; silo sistemleri daha yüksek hacimli depolamaya yöneliktir." }] },
      { id: "feed", label: "Ürün Alma ve Besleme Sistemleri", seo: "besleme sistemi", description: "Sabit veya değişken debide kontrollü ürün alma ve hatta besleme sağlayan sistemler.", intro: "Besleme sistemi seçiminde saatlik tüketim, akış karakteri ve çıkış sayısı birlikte değerlendirilmelidir.", auto: { a: "Besleme sistemi sınıfı", b: "Brüt hacim önerisi", c: "Çıkış geometrisi önerisi", d: "Akış yardımcısı notu", e: "Dozaj / transfer sınıfı", note: "Akış problemi olan ürünlerde yardımcı sistemler ve çıkış yapısı kritik önemdedir." }, technicalSpecs: ["Dozajlama ve besleme ekipmanı entegrasyonu", "Seviye ve tartım altyapısı", "Akış yardımcısı seçenekleri", "Ağır hizmet çıkış yapısı"], applications: ["Proses besleme ve dozajlama hatları", "Ürün alma sistemleri", "Ara stok ve transfer hazneleri"], materials: ["Toz ürün", "Granül ürün", "Serbest akışlı ürün"], advantages: ["Kontrollü besleme", "Hat kararlılığı", "Esnek çıkış sayısı", "Otomasyon entegrasyonu"], faqs: [{ question: "Akış problemi olan ürünlerde ne yapılır?", answer: "Dik koni, vibrasyon, akış yardımcısı ve uygun çıkış geometrisi birlikte değerlendirilir." }] },
    ],
  },
};

function num(value: string) {
  const parsed = Number(value.replace(",", ".").trim());
  return Number.isFinite(parsed) ? parsed : NaN;
}

function fmt(value: number, digits = 2) {
  if (!Number.isFinite(value)) return "—";
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: digits }).format(value);
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-700" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getDefaultFaqs(slug: CategorySlug) {
  switch (slug) {
    case "kiricilar-ve-parcalayicilar":
      return [
        { question: "Hangi kırıcı tipi seçilmeli?", answer: "Kırıcı tipi; malzeme türü, giriş boyutu, hedef çıkış boyutu ve kapasite ihtiyacına göre belirlenir." },
        { question: "Nemli malzeme için hangi sistem daha uygundur?", answer: "Nemli ve topaklı ürünlerde zincirli kırıcı veya uygun iç yapılı parçalayıcı çözümler daha avantajlı olabilir." },
        { question: "Giriş ve çıkış boyutu kırıcı seçiminde neden önemlidir?", answer: "Küçültme oranı ekipman sınıfını ve tek kademede ulaşılabilecek ürün boyutunu doğrudan etkiler." },
        { question: "Aşındırıcı malzemede hangi iç kaplama tercih edilir?", answer: "Aşınma seviyesi yükseldikçe dayanımlı astar, çene veya rotor malzemesi tercih edilmelidir." },
        { question: "Kırıcılar özel kapasiteye göre üretilebilir mi?", answer: "Evet. Kapasite, giriş boyutu ve servis sınıfına göre özel boyutlandırma yapılabilir." },
        { question: "Bakım ve yedek parça desteği sağlanıyor mu?", answer: "Evet. Kritik yedek parçalar, aşınma elemanları ve bakım desteği proje kapsamına göre sağlanabilir." },
      ];
    case "reaktorler-ve-tanklar":
      return [
        { question: "Tank hacmi nasıl belirlenir?", answer: "Net proses hacmi, doluluk oranı ve güvenlik payı birlikte değerlendirilerek brüt hacim belirlenir." },
        { question: "Reaktör ile stok tankı arasındaki fark nedir?", answer: "Reaktör aktif proses yürütür; stok tankı ise depolama ve bekletme odaklı çalışır." },
        { question: "Isıtmalı veya soğutmalı tank ne zaman gerekir?", answer: "Sıcaklık kontrolü ürün viskozitesi, çözünme süresi veya proses stabilitesi için gerekli olduğunda tercih edilir." },
        { question: "Basınçlı tank hangi durumlarda tercih edilir?", answer: "Basınçlı veya kontrollü gaz ortamında çalışan proseslerde tercih edilir." },
        { question: "Doluluk oranı neden önemlidir?", answer: "Karıştırma verimi, güvenlik boşluğu ve proses kararlılığı için doluluk oranı kritik bir kriterdir." },
        { question: "Karıştırıcı seçimi neye göre yapılır?", answer: "Viskozite, tank çapı, hedef karışım süresi ve proses tipi birlikte değerlendirilir." },
      ];
    case "eleme-ve-siniflandirma-sistemleri":
      return [
        { question: "Hangi elek tipi seçilmeli?", answer: "Elek tipi; kapasite, nem, hedef ayırma boyutu ve ürün karakterine göre belirlenir." },
        { question: "Yapışkan ürünlerde hangi sistem daha uygundur?", answer: "Nemli ve yapışkan ürünlerde döner elek veya trommel gibi daha toleranslı yapılar avantaj sağlayabilir." },
        { question: "Elek açıklığı nasıl belirlenir?", answer: "Hedeflenen fraksiyon boyutu ve ürün dağılımına göre belirlenir." },
        { question: "Çok katlı elek ne zaman gerekir?", answer: "Tek geçişte birden fazla fraksiyon alınmak istendiğinde çok katlı yapı tercih edilir." },
        { question: "Tıkanma riski nasıl yönetilir?", answer: "Uygun elek tipi, yüzey yapısı, titreşim karakteri ve temizleme yaklaşımı ile yönetilir." },
        { question: "Eleme sistemleri özel kapasiteye göre üretilebilir mi?", answer: "Evet. Elek alanı, kat yapısı ve şase tasarımı kapasiteye göre uyarlanabilir." },
      ];
    case "toz-toplama-sistemleri":
      return [
        { question: "Hangi filtre sistemi seçilmeli?", answer: "Filtre tipi; debi, toz karakteri, sıcaklık ve proses güvenlik ihtiyaçlarına göre belirlenir." },
        { question: "Jet pulse filtre ile torba filtre arasında fark var mı?", answer: "Jet pulse filtre bir temizleme yöntemi iken torba filtre daha çok kullanılan filtre yapısını ifade eder; projede birlikte değerlendirilebilir." },
        { question: "Siklon tek başına yeterli olur mu?", answer: "Kaba toz ayrıştırmada yeterli olabilir; ince filtrasyon gereken uygulamalarda ilave filtre gerekebilir." },
        { question: "Nemli toz filtre seçiminde neden önemlidir?", answer: "Nem, filtre tıkanması ve medya seçimi üzerinde doğrudan etkilidir." },
        { question: "ATEX riski nasıl değerlendirilir?", answer: "Patlayıcı toz karakteri, sıcaklık ve hat tasarımı birlikte değerlendirilerek güvenlik yaklaşımı belirlenir." },
        { question: "Merkezi toz toplama hattı ne zaman gerekir?", answer: "Birden fazla emiş noktasının tek bir sistemde toplanması gerektiğinde merkezi çözüm tercih edilir." },
      ];
    case "paketleme-ve-dolum-sistemleri":
      return [
        { question: "Hangi dolum sistemi seçilmeli?", answer: "Ürün tipi, ambalaj formatı, kapasite ve hassasiyet ihtiyacına göre belirlenir." },
        { question: "Açık ağız torbalama ne zaman uygundur?", answer: "Granül ve toz ürünlerin standart torbalarda paketlenmesinde yaygın olarak tercih edilir." },
        { question: "Big bag dolum hangi ürünlerde kullanılır?", answer: "Yüksek ağırlıklı sevkiyat ve dökme katı ürünlerde kullanılır." },
        { question: "Sıvı dolum hattı için hijyenik tasarım gerekir mi?", answer: "Ürünün kimyasal ve proses gereksinimlerine göre hijyenik tasarım önemli olabilir." },
        { question: "Yarı otomatik ile tam otomatik sistem arasındaki fark nedir?", answer: "Operatör müdahalesi seviyesi ve toplam hat otomasyonu açısından ayrışırlar." },
        { question: "Paketleme hassasiyeti neden önemlidir?", answer: "Ürün standardı, müşteri beklentisi ve yasal toleranslar için dolum hassasiyeti kritiktir." },
      ];
    default:
      return [
        { question: "Silo hacmi nasıl belirlenir?", answer: "Tüketim hızı, hedef stok süresi, doluluk ve güvenlik payı birlikte değerlendirilerek belirlenir." },
        { question: "Bunker ile silo arasındaki fark nedir?", answer: "Bunker daha kısa süreli stok ve aktif besleme içindir; silo daha yüksek hacimli depolama sağlar." },
        { question: "Akış problemi olan ürünlerde ne yapılır?", answer: "Dik koni, vibrasyon, akış yardımcısı ve uygun çıkış geometrisi birlikte değerlendirilir." },
        { question: "Doluluk oranı neden önemlidir?", answer: "Brüt hacim, güvenlik boşluğu ve stabil ürün alma açısından doluluk oranı kritik bir parametredir." },
        { question: "Çıkış geometrisi neye göre seçilir?", answer: "Ürünün akış karakteri, yapışkanlık durumu ve besleme ekipmanı tipine göre belirlenir." },
        { question: "Besleme sistemleri özel kapasiteye göre üretilebilir mi?", answer: "Evet. Hacim, tüketim ve çıkış sayısına göre özel tasarım yapılabilir." },
      ];
  }
}

const requiredOptionLabels: Record<CategorySlug, string[]> = {
  "kiricilar-ve-parcalayicilar": ["Çekiçli Değirmenler", "Zincirli Kırıcılar", "Çeneli Kırıcılar", "Primer Kırıcılar", "Parçalayıcı Sistemler", "İkincil / İnce Kırıcılar"],
  "reaktorler-ve-tanklar": ["Karıştırıcılı Reaktörler", "Çözündürme Tankları", "Stok Tankları", "Isıtmalı Tanklar", "Soğutmalı Tanklar", "Basınçlı Reaktörler", "Vakum Tankları", "Proses Hazırlık Tankları"],
  "eleme-ve-siniflandirma-sistemleri": ["Döner Elek", "Vibrasyonlu Elek", "Trommel Sistemleri", "Çok Katlı Elek Sistemleri", "Ön Eleme ve Nihai Sınıflandırma Hatları"],
  "toz-toplama-sistemleri": ["Jet Pulse Filtreler", "Siklonlar", "Torba Filtreler", "Merkezi Toz Toplama Hatları", "Noktasal Toz Emiş Sistemleri"],
  "paketleme-ve-dolum-sistemleri": ["Açık Ağız Torbalama", "Big Bag Dolum", "Şişeleme ve Sıvı Dolum Hatları", "Valfli Torba Dolum", "Yarı Otomatik / Tam Otomatik Dolum Sistemleri"],
  "depolama-ve-besleme-sistemleri": ["Silo Sistemleri", "Bunkerler", "Ürün Alma ve Besleme Sistemleri", "Dozajlama Bunkerleri", "Ara Stok ve Transfer Hazneleri"],
};

function withFallbackOptions(slug: CategorySlug, options: Option[]) {
  const present = new Set(options.map((item) => item.label));
  const missing = requiredOptionLabels[slug].filter((label) => !present.has(label));
  const fallbacks = missing.map<Option>((label) => ({
    id: label.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    label,
    seo: label.toLowerCase(),
    description: `${label} için proses odaklı seçim, ön değerlendirme ve teklif altyapısı aynı premium yapı içinde sunulur.`,
    intro: `${label} seçiminde kapasite, malzeme karakteri ve proses hedefleri birlikte değerlendirilmelidir.`,
    auto: {
      a: `${label} sınıfı`,
      b: "Önerilen geometri / kapasite notu",
      c: "Önerilen proses karakteri",
      d: "Önerilen gövde ve servis notu",
      e: "Önerilen uygulama sınıfı",
      note: "Nihai mühendislik doğrulaması proje verilerine göre yapılmalıdır.",
    },
    technicalSpecs: ["Prosese uygun mekanik yapı", "Servis ve bakım kolaylığı", "Ağır hizmet ve özel malzeme seçenekleri", "Otomasyon ve sensör entegrasyonu"],
    applications: ["Endüstriyel proses hatları", "Dökme katı ve proses uygulamaları", "Projeye özel makina çözümleri"],
    materials: ["Prosese özel malzemeler", "Dökme katılar", "Akışkan veya yarı akışkan ürünler"],
    advantages: ["Projeye özel çözüm", "Sahaya uygun tasarım", "Bakım dostu yapı", "Hat entegrasyonu"],
    faqs: [{ question: `${label} özel kapasiteye göre üretilebilir mi?`, answer: "Evet. Proses verileri, kapasite ihtiyacı ve saha koşullarına göre özel boyutlandırma yapılabilir." }],
  }));
  return [...options, ...fallbacks];
}

export default function MachineCategoryExperience({ slug }: { slug: CategorySlug }) {
  const config = configs[slug];
  const heroImage =
    slug === "kiricilar-ve-parcalayicilar"
      ? "/images/hammermill2.jpg"
      : slug === "reaktorler-ve-tanklar"
        ? "/images/tank1.jpg"
      : slug === "eleme-ve-siniflandirma-sistemleri"
        ? "/images/elek1.jpg"
      : slug === "toz-toplama-sistemleri"
        ? "/images/toz1.jpg"
      : slug === "paketleme-ve-dolum-sistemleri"
        ? "/images/dolum1.jpg"
        : slug === "depolama-ve-besleme-sistemleri"
          ? "/images/bunker1.jpg"
        : null;
  const allOptions = withFallbackOptions(slug, config.options);
  const [activeId, setActiveId] = useState(allOptions[0]?.id ?? "");
  const [openTip, setOpenTip] = useState<string | null>(null);
  const [materialType, setMaterialType] = useState(Object.keys(config.materialDensity)[0] ?? "");
  const [density, setDensity] = useState(String(config.materialDensity[Object.keys(config.materialDensity)[0] ?? ""] ?? 1000));
  const [densityManual, setDensityManual] = useState(false);
  const [targetCapacity, setTargetCapacity] = useState("25");
  const [inputSize, setInputSize] = useState("80");
  const [outputSize, setOutputSize] = useState("8");
  const [moisture, setMoisture] = useState("");
  const [hardness, setHardness] = useState("Orta");
  const [abrasion, setAbrasion] = useState("Orta");
  const [sticky, setSticky] = useState("Hayır");
  const [mode, setMode] = useState("Standart");
  const [continuous, setContinuous] = useState("Evet");
  const [irregularFeed, setIrregularFeed] = useState("Hayır");
  const [volume, setVolume] = useState("12");
  const [fillRate, setFillRate] = useState("75");
  const [safety, setSafety] = useState("15");
  const [temperature, setTemperature] = useState("40");
  const [designTemperature, setDesignTemperature] = useState("");
  const [pressure, setPressure] = useState("");
  const [viscosity, setViscosity] = useState("Orta");
  const [mixer, setMixer] = useState("Evet");
  const [heated, setHeated] = useState("Hayır");
  const [cooled, setCooled] = useState("Hayır");
  const [pressurized, setPressurized] = useState("Hayır");
  const [vacuum, setVacuum] = useState("Hayır");
  const [airflow, setAirflow] = useState("12000");
  const [pointCount, setPointCount] = useState("4");
  const [accuracy, setAccuracy] = useState("Standart");
  const [packagingWeight, setPackagingWeight] = useState("25");
  const [automation, setAutomation] = useState("Yarı Otomatik");
  const [stockVolume, setStockVolume] = useState("25");
  const [consumption, setConsumption] = useState("8");
  const [flowIssue, setFlowIssue] = useState("Hayır");
  const [outletCount, setOutletCount] = useState("1");

  const profile = allOptions.find((item) => item.id === activeId) ?? allOptions[0];

  const materialOptions = Object.keys(config.materialDensity);
  const systemSummary = (() => {
    switch (slug) {
      case "kiricilar-ve-parcalayicilar": {
        const ratio = num(inputSize) > 0 && num(outputSize) > 0 ? num(inputSize) / num(outputSize) : NaN;
        const suitability =
          !Number.isFinite(ratio)
            ? "Seçilen veriler için ön değerlendirme yapılamadı."
            : ratio > 12 && (activeId === "jaw" || activeId === "primary")
              ? "Yüksek küçültme oranı için çok kademeli yaklaşım gerekebilir."
              : "Seçilen ekipman sınıfı yaklaşık ön seçim için uygun görünüyor.";
        return {
          main: suitability,
          cards: [
            profile.label,
            `${fmt(ratio, 1)} : 1`,
            num(targetCapacity) > 0 ? `${fmt(num(targetCapacity), 1)} ton/saat için sınır kontrolü yapıldı` : "Kapasite verisi eksik",
            `${materialType} / ${hardness} sertlik`,
            moisture ? `%${fmt(num(moisture), 0)} nem` : "Nem bilgisi girilmedi",
            `${abrasion} aşınma seviyesi`,
            `${profile.label}, ${materialType.toLowerCase()} ve ${fmt(ratio, 1)} küçültme oranı ile yaklaşık ön seçim üretildi.`,
          ],
        };
      }
      case "reaktorler-ve-tanklar": {
        const gross = num(volume) > 0 && num(fillRate) > 0 ? num(volume) / (num(fillRate) / 100) : NaN;
        const total = Number.isFinite(gross) ? gross * (1 + Math.max(num(safety), 0) / 100) : NaN;
        return {
          main: pressurized === "Evet" || vacuum === "Evet" ? "Basınç / vakum nedeniyle standart mühendislik doğrulaması gerekir." : "Seçilen proses verileri için ön hacim değerlendirmesi üretildi.",
          cards: [
            `${fmt(num(volume), 1)} m³`,
            `${fmt(total, 1)} m³`,
            `%${fillRate}`,
            mixer,
            heated === "Evet" || cooled === "Evet" ? `${heated === "Evet" ? "Isıtma" : ""} ${cooled === "Evet" ? "Soğutma" : ""}`.trim() : "İlave ısıl ihtiyaç yok",
            pressurized === "Evet" || vacuum === "Evet" ? "Basınç / vakum dikkate alınmalı" : "Atmosferik çalışma yaklaşımı",
            `${profile.label}, ${materialType.toLowerCase()} için ${fmt(total, 1)} m³ civarında öneri üretildi.`,
          ],
        };
      }
      case "eleme-ve-siniflandirma-sistemleri": {
        const ratio = num(inputSize) > 0 && num(outputSize) > 0 ? num(inputSize) / num(outputSize) : NaN;
        return {
          main: sticky === "Evet" || flowIssue === "Evet" ? "Tıkanma riski yüksek olabilir; temizleme ve elek tipi birlikte değerlendirilmelidir." : "Seçilen eleme tipi yaklaşık ön değerlendirmede uygun görünüyor.",
          cards: [
            "Ön eleme uygun",
            ratio > 1 ? "Sınıflandırma mümkün" : "Ayırma oranı düşük",
            sticky === "Evet" ? "Tıkanma riski yüksek" : "Tıkanma riski kontrollü",
            profile.label,
            moisture ? `%${fmt(num(moisture), 0)} nem` : "Nem bilgisi yok",
            `${fmt(num(targetCapacity), 1)} ton/saat`,
            `${profile.label}, ${materialType.toLowerCase()} ve ${fmt(num(outputSize), 1)} mm ayırma boyutu için ön değerlendirme üretildi.`,
          ],
        };
      }
      case "toz-toplama-sistemleri": {
        return {
          main: num(airflow) > 0 ? "Debi ve nokta sayısına göre ön filtre sınıfı üretildi." : "Debi bilgisi eksik olduğu için değerlendirme sınırlı.",
          cards: [
            profile.label,
            `${fmt(num(airflow), 0)} m³/h`,
            temperature && num(temperature) > 80 ? "Sıcaklık nedeniyle özel medya gerekebilir" : "Standart sıcaklık aralığı",
            num(pointCount) > 3 ? "Çok noktalı hat uygun" : "Lokal toplama uygun",
            moisture ? `%${fmt(num(moisture), 0)} nem` : "Nem bilgisi yok",
            mode,
            `${profile.label}, ${materialType.toLowerCase()} ve ${fmt(num(airflow), 0)} m³/h debi için ön sistem önerisi üretildi.`,
          ],
        };
      }
      case "paketleme-ve-dolum-sistemleri": {
        return {
          main: num(targetCapacity) > 0 ? "Ürün tipi ve otomasyon seviyesine göre ön dolum sistemi önerisi üretildi." : "Kapasite bilgisi girilmedi.",
          cards: [
            profile.label,
            automation,
            accuracy,
            `${fmt(num(packagingWeight), 1)} kg / birim`,
            materialType,
            mode,
            `${profile.label}, ${materialType.toLowerCase()} ve ${fmt(num(targetCapacity), 1)} hedef kapasite için ön seçim üretildi.`,
          ],
        };
      }
      default: {
        const gross = num(stockVolume) > 0 && num(fillRate) > 0 ? num(stockVolume) / (num(fillRate) / 100) : NaN;
        const total = Number.isFinite(gross) ? gross * (1 + Math.max(num(safety), 0) / 100) : NaN;
        return {
          main: flowIssue === "Evet" ? "Akış problemi nedeniyle çıkış geometrisi ve yardımcı sistemler birlikte değerlendirilmelidir." : "Net ve brüt hacim için ön hesap üretildi.",
          cards: [
            `${fmt(num(stockVolume), 1)} m³`,
            `${fmt(total, 1)} m³`,
            mode,
            flowIssue === "Evet" ? "Akış riski mevcut" : "Akış riski kontrollü",
            num(outletCount) > 1 ? `${outletCount} çıkış` : "Tek çıkış",
            `${fmt(num(consumption), 1)} ton/saat`,
            `${profile.label}, ${materialType.toLowerCase()} için ${fmt(total, 1)} m³ civarında brüt hacim önerisi üretildi.`,
          ],
        };
      }
    }
  })();

  const quoteText = `${config.title} / ${profile.label} için ${targetCapacity || "—"} hedef kapasite, ${materialType || "—"} malzeme tipi ve seçilen proses verileri ile teklif talep ediyorum.`;

  const commonAuto = [profile.auto.a, profile.auto.b, profile.auto.c, profile.auto.d, profile.auto.e, profile.auto.note];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200 text-white">
        {heroImage ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-[position:65%_center] bg-no-repeat sm:bg-center"
              style={{ backgroundImage: `url('${heroImage}')` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,30,0.82)_0%,rgba(3,10,30,0.72)_40%,rgba(3,10,30,0.55)_70%,rgba(3,10,30,0.45)_100%)]" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.2),_transparent_35%),linear-gradient(135deg,#0f172a_0%,#1e3a8a_45%,#0f172a_100%)]" />
        )}
        <div className={`relative mx-auto grid max-w-7xl grid-cols-1 px-4 py-10 sm:px-6 sm:py-10 lg:px-10 lg:py-[60px] ${heroImage ? "min-h-[320px] sm:min-h-[360px] lg:min-h-[360px]" : "min-h-[45vh] lg:min-h-[420px]"}`}>
          <div className="self-center">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.16em] text-white/80 backdrop-blur">
              MAKİNALAR & EKİPMAN
            </div>
            <p className="mt-5 text-sm font-medium text-blue-200">{config.title}</p>
            <h1 className="mt-3 max-w-[700px] text-[32px] font-semibold leading-[1.2] tracking-tight text-white sm:text-[36px] lg:text-[42px]">
              {config.title}
            </h1>
            <p className="mt-4 max-w-[600px] text-base leading-[1.6] text-white/90">{config.heroIntro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#teklif-formu" className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700">Teklif Al</a>
              <Link href="/makinalar-ekipman" className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">Tüm Gruplara Dön</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Kısa Tanım</p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{config.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Alt Seçenekler</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Alt makina gruplarını inceleyin</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {allOptions.map((option) => (
            <button key={option.id} type="button" onClick={() => setActiveId(option.id)} className={`rounded-3xl border p-6 text-left transition ${activeId === option.id ? "border-blue-200 bg-blue-50 shadow-[0_16px_45px_rgba(37,99,235,0.12)]" : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-[0_16px_45px_rgba(15,23,42,0.08)]"}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">{option.seo}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{option.label}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{option.description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{config.calculatorTitle}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{profile.label}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{profile.intro}</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Müşteri Seçimi</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Bu bölümde gerekli tüm seçim ve girişleri tek seferde doldurun.</p>
              <p className="mt-2 text-xs font-medium text-slate-500">Lütfen gerekli alanları doldurun. Sonuçlar ve standart veriler otomatik güncellenecektir.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <ToolkitSelect label="Alt Sistem" value={profile.label} onChange={(value) => setActiveId(allOptions.find((item) => item.label === value)?.id ?? allOptions[0].id)} options={allOptions.map((item) => item.label)} tip="Değerlendirmek istediğiniz alt makina grubudur." tipId={`${slug}-subtype`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitSelect label="Malzeme / Ürün Türü" value={materialType} onChange={(value) => { setMaterialType(value); if (!densityManual) setDensity(String(config.materialDensity[value] ?? 1000)); }} options={materialOptions} tip="Prosese giren ürün veya akışkan türüdür." tipId={`${slug}-material`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Hedef Kapasite / Hacim" value={targetCapacity} onChange={setTargetCapacity} unit={slug === "reaktorler-ve-tanklar" || slug === "depolama-ve-besleme-sistemleri" ? "m³/saat" : slug === "toz-toplama-sistemleri" ? "m³/h" : slug === "paketleme-ve-dolum-sistemleri" ? "adet/saat" : "ton/saat"} tip="Saatlik veya proses bazlı hedef kapasite değeridir." tipId={`${slug}-capacity`} openTip={openTip} setOpenTip={setOpenTip} />
                <ToolkitInput label="Yoğunluk" value={density} onChange={(value) => { setDensityManual(true); setDensity(value); }} unit="kg/m³" helperText="Seçime göre otomatik gelir, istenirse değiştirilebilir." tip="Malzemenin yaklaşık yoğunluk değeridir." tipId={`${slug}-density`} openTip={openTip} setOpenTip={setOpenTip} />
                {(slug === "kiricilar-ve-parcalayicilar" || slug === "eleme-ve-siniflandirma-sistemleri") && <ToolkitInput label="Giriş Boyutu" value={inputSize} onChange={setInputSize} unit="mm" tip="Prosese giren ürünün yaklaşık maksimum boyutudur." tipId={`${slug}-input-size`} openTip={openTip} setOpenTip={setOpenTip} />}
                {(slug === "kiricilar-ve-parcalayicilar" || slug === "eleme-ve-siniflandirma-sistemleri") && <ToolkitInput label="Çıkış / Ayırma Boyutu" value={outputSize} onChange={setOutputSize} unit="mm" tip="Hedeflenen çıkış veya ayırma boyutudur." tipId={`${slug}-output-size`} openTip={openTip} setOpenTip={setOpenTip} />}
                {slug === "kiricilar-ve-parcalayicilar" && <>
                  <ToolkitSelect label="Aşındırıcılık Seviyesi" value={abrasion} onChange={setAbrasion} options={["Düşük", "Orta", "Yüksek"]} tip="Malzemenin aşınma etkisini belirtir." tipId={`${slug}-abrasion`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Sertlik Seviyesi" value={hardness} onChange={setHardness} options={["Düşük", "Orta", "Yüksek"]} tip="Malzemenin kırılma direncini temsil eder." tipId={`${slug}-hardness`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Yapışkan Malzeme mi?" value={sticky} onChange={setSticky} options={["Hayır", "Evet"]} tip="Malzemenin iç yüzeylere yapışma eğilimini belirtir." tipId={`${slug}-sticky`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Ön kırma mı / ince kırma mı?" value={mode} onChange={setMode} options={["Ön kırma", "İnce kırma"]} tip="Kırma kademesini belirtir." tipId={`${slug}-mode`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Sürekli Besleme mi?" value={continuous} onChange={setContinuous} options={["Evet", "Hayır"]} tip="Beslemenin sürekli olup olmadığını belirtir." tipId={`${slug}-continuous`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Besleme Düzensiz mi?" value={irregularFeed} onChange={setIrregularFeed} options={["Hayır", "Evet"]} tip="Düzensiz besleme varsa uygun kırıcı sınıfı değişebilir." tipId={`${slug}-irregular`} openTip={openTip} setOpenTip={setOpenTip} />
                </>}
                {slug === "reaktorler-ve-tanklar" && <>
                  <ToolkitInput label="Hedef Hacim" value={volume} onChange={setVolume} unit="m³" tip="Proseste ihtiyaç duyulan net çalışma hacmidir." tipId={`${slug}-volume`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Çalışma Doluluk Oranı" value={fillRate} onChange={setFillRate} unit="%" tip="Tankın çalışma sırasında dolu olması hedeflenen yaklaşık oranıdır." tipId={`${slug}-fill`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Güvenlik Payı" value={safety} onChange={setSafety} unit="%" tip="Brüt hacim için bırakılması istenen güvenlik payıdır." tipId={`${slug}-safety`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Karıştırıcı Var mı?" value={mixer} onChange={setMixer} options={["Evet", "Hayır"]} tip="Karıştırıcı ihtiyacını belirtir." tipId={`${slug}-mixer`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Isıtmalı mı?" value={heated} onChange={setHeated} options={["Hayır", "Evet"]} tip="Isı girdisi gerekip gerekmediğini belirtir." tipId={`${slug}-heated`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Soğutmalı mı?" value={cooled} onChange={setCooled} options={["Hayır", "Evet"]} tip="Soğutma ihtiyacını belirtir." tipId={`${slug}-cooled`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Basınçlı mı?" value={pressurized} onChange={setPressurized} options={["Hayır", "Evet"]} tip="Basınç altında çalışma ihtiyacını belirtir." tipId={`${slug}-pressurized`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Vakumlu mu?" value={vacuum} onChange={setVacuum} options={["Hayır", "Evet"]} tip="Vakum altında çalışma ihtiyacını belirtir." tipId={`${slug}-vacuum`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Çalışma Sıcaklığı" value={temperature} onChange={setTemperature} unit="°C" tip="Normal proses sıcaklığıdır." tipId={`${slug}-temp`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Tasarım Sıcaklığı" value={designTemperature} onChange={setDesignTemperature} unit="°C" helperText="Opsiyonel" tip="Tasarım koşulu için referans sıcaklıktır." tipId={`${slug}-design-temp`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Tasarım Basıncı" value={pressure} onChange={setPressure} unit="bar" helperText="Opsiyonel" tip="Tasarım basıncıdır." tipId={`${slug}-pressure`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Viskozite Sınıfı" value={viscosity} onChange={setViscosity} options={["Düşük", "Orta", "Yüksek"]} tip="Akışkanın viskozite sınıfını belirtir." tipId={`${slug}-viscosity`} openTip={openTip} setOpenTip={setOpenTip} />
                </>}
                {slug === "eleme-ve-siniflandirma-sistemleri" && <>
                  <ToolkitInput label="Nem Oranı" value={moisture} onChange={setMoisture} unit="%" helperText="Opsiyonel" tip="Ürünün nem oranıdır." tipId={`${slug}-moisture`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Tıkanma Riski Var mı?" value={flowIssue} onChange={setFlowIssue} options={["Hayır", "Evet"]} tip="Elek yüzeyinde tıkanma ihtimali olup olmadığını belirtir." tipId={`${slug}-clog`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Yapışkan Malzeme mi?" value={sticky} onChange={setSticky} options={["Hayır", "Evet"]} tip="Malzemenin yapışma eğilimini belirtir." tipId={`${slug}-sticky2`} openTip={openTip} setOpenTip={setOpenTip} />
                </>}
                {slug === "toz-toplama-sistemleri" && <>
                  <ToolkitInput label="Hat / Emiş Noktası Sayısı" value={pointCount} onChange={setPointCount} unit="adet" tip="Sisteme bağlanacak emiş noktasının sayısıdır." tipId={`${slug}-points`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Hava Debisi İhtiyacı" value={airflow} onChange={setAirflow} unit="m³/h" tip="Toplam emiş debisi ihtiyacıdır." tipId={`${slug}-airflow`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Sıcaklık" value={temperature} onChange={setTemperature} unit="°C" tip="Gaz akışının yaklaşık sıcaklığıdır." tipId={`${slug}-temp2`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Filtreleme Hassasiyeti" value={accuracy} onChange={setAccuracy} options={["Standart", "Yüksek", "Çok Yüksek"]} tip="İstenen filtreleme hassasiyet seviyesidir." tipId={`${slug}-accuracy`} openTip={openTip} setOpenTip={setOpenTip} />
                </>}
                {slug === "paketleme-ve-dolum-sistemleri" && <>
                  <ToolkitInput label="Ambalaj Ağırlığı" value={packagingWeight} onChange={setPackagingWeight} unit="kg" tip="Birim ambalaj başına hedef dolum ağırlığıdır." tipId={`${slug}-packweight`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Hassasiyet Beklentisi" value={accuracy} onChange={setAccuracy} options={["Standart", "Yüksek", "Çok Yüksek"]} tip="Dolum tolerans beklentisini belirtir." tipId={`${slug}-accuracy2`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Otomasyon Seviyesi" value={automation} onChange={setAutomation} options={["Manuel", "Yarı Otomatik", "Tam Otomatik"]} tip="Hat otomasyon düzeyini belirtir." tipId={`${slug}-automation`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Ürün Yapısı" value={mode} onChange={setMode} options={["Granül", "Toz", "Sıvı"]} tip="Ürünün dolum karakterini belirtir." tipId={`${slug}-mode2`} openTip={openTip} setOpenTip={setOpenTip} />
                </>}
                {slug === "depolama-ve-besleme-sistemleri" && <>
                  <ToolkitInput label="Hedef Stok Hacmi" value={stockVolume} onChange={setStockVolume} unit="m³" tip="Net olarak depolanmak istenen hacimdir." tipId={`${slug}-stock`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Günlük / Saatlik Tüketim" value={consumption} onChange={setConsumption} unit="ton/saat" tip="Besleme hattının tüketim miktarıdır." tipId={`${slug}-consumption`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Akış Problemi Var mı?" value={flowIssue} onChange={setFlowIssue} options={["Hayır", "Evet"]} tip="Malzemenin köprü yapma veya akmama riski olup olmadığını belirtir." tipId={`${slug}-flowissue`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitSelect label="Besleme Tipi" value={mode} onChange={setMode} options={["Sürekli", "Dozajlı", "Partili"]} tip="Hat besleme karakterini belirtir." tipId={`${slug}-feedmode`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Güvenlik Payı" value={safety} onChange={setSafety} unit="%" tip="Brüt hacim için bırakılacak ek güvenlik payıdır." tipId={`${slug}-safety2`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Doluluk Oranı" value={fillRate} onChange={setFillRate} unit="%" tip="Çalışma sırasında hedeflenen yaklaşık doluluk oranıdır." tipId={`${slug}-fill2`} openTip={openTip} setOpenTip={setOpenTip} />
                  <ToolkitInput label="Çıkış Sayısı" value={outletCount} onChange={setOutletCount} unit="adet" helperText="Opsiyonel" tip="Besleme veya ürün alma hattı için çıkış adedidir." tipId={`${slug}-outlet`} openTip={openTip} setOpenTip={setOpenTip} />
                </>}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Standarttan Otomatik Gelen Alanlar</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Bu bölümdeki değerler seçiminize ve standarda göre otomatik oluşur.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {config.autoLabels.map((label, index) => (
                  <ToolkitReadonly key={label} label={label} value={commonAuto[index] ?? "—"} helperText="Hesap sonucuna göre otomatik oluşur" />
                ))}
              </div>
            </div>

            <ToolkitInfo title="Nasıl Kullanılır?" text="Önce alt sistemi seçin. Ardından kapasite, malzeme tipi ve proses verilerini aynı panel içinde girin. Sistem, yaklaşık ön değerlendirme sonuçlarını ve otomatik önerileri anlık olarak güncelleyecektir." />
            <ToolkitInfo title="Teknik Bilgi" text={`${config.summary} Bu araç yaklaşık ön hesap üretir; nihai mühendislik doğrulaması proje verilerine göre yapılmalıdır.`} />
          </div>

          <div className="space-y-6">
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-950">Sonuçlar</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Sonuçlar yaklaşık ön hesap niteliğindedir. Nihai mühendislik doğrulaması gerekir.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {config.resultLabels.map((label, index) => (
                  <ToolkitResult key={label} label={label} value={systemSummary.cards[index] ?? "—"} tone={index === 0 ? "info" : undefined} />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-semibold text-amber-900">Teknik Değerlendirme</h3>
              <p className="mt-3 text-sm leading-7 text-amber-900/85">{systemSummary.main}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="teklif-formu" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Bu grup için teklif alın</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Prosesinize uygun çözümü birlikte netleştirelim</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">Teknik verilerinizi paylaşın; prosesinize en uygun makina çözümünü birlikte netleştirelim.</p>
            <div className="mt-6 grid gap-4">
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" placeholder="Ad Soyad" />
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" placeholder="Firma Adı" />
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" placeholder="Telefon" />
              <input className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" placeholder="E-posta" />
              <input className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700 outline-none" value={profile.label} readOnly />
              <input className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-700 outline-none" value={materialType} readOnly />
              <textarea className="min-h-[140px] rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-400" defaultValue={quoteText} />
              <button className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-blue-700 px-6 text-sm font-semibold text-white transition hover:bg-blue-800">Teklif Gönder</button>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-slate-950">Teknik özet</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{systemSummary.cards[6]}</p>
            <div className="mt-6 grid gap-4">
              <ToolkitResult label="Alt Sistem" value={profile.label} />
              <ToolkitResult label="Malzeme / Ürün Türü" value={materialType} />
              <ToolkitResult label="Yoğunluk" value={`${density} kg/m³`} />
              <ToolkitResult label="Yaklaşık Ön Hesap" value={systemSummary.main} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ListCard title="Teknik Özellikler" items={profile.technicalSpecs} />
          <ListCard title="Kapasite Seçenekleri" items={config.capacityOptions} />
          <ListCard title="Kullanım Alanları" items={profile.applications} />
          <ListCard title="Opsiyonel Ekipmanlar" items={config.optionalEquipment} />
          <ListCard title="Malzeme Türleri" items={profile.materials} />
          <ListCard title="Avantajlar" items={profile.advantages} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <ListCard title="İlgili Sektörler" items={sharedSectors} />
          <ListCard title="İlgili Hizmetler" items={sharedServices} />
          <ListCard title="İlgili Projeler" items={sharedProjects} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Görseller ve Teknik Çizimler</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Bu alanda ürün görselleri, teknik çizim PDF&apos;leri, kesit detayları ve saha uygulama fotoğrafları sunulabilir. Sayfa yapısı teknik döküman ve görsel içerik yüklemeye hazırdır.</p>
            <h3 className="mt-6 text-lg font-semibold text-slate-950">Teknik çizim ve ürün görselleri alanı</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-sm text-slate-500">Premium placeholder #{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Sık Sorulan Sorular</h2>
            <div className="mt-6 space-y-4">
              {[...getDefaultFaqs(slug), ...profile.faqs].map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                  <summary className="cursor-pointer list-none font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
        <ToolkitLead title="Projeniz için doğru ekipman seçimini birlikte yapalım" text={config.seoCta} />
      </section>
    </main>
  );
}
