import type { LibraryCategory, LibraryItem } from "../data";
import { trText } from "./tr-text";

export type LibraryDetailSection = {
  title: string;
  blocks: {
    heading: string;
    text: string;
  }[];
};

export type LibraryFaqItem = {
  question: string;
  answer: string;
};

export type LibraryServiceLink = {
  title: string;
  href: string;
  description: string;
};

export const libraryCategoryConfig: Record<
  LibraryCategory,
  {
    anchor: string;
    title: string;
    description: string;
  }
> = {
  "Blog / Makaleler": {
    anchor: "blog-makaleler",
    title: "Blog / Makaleler",
    description:
      "SEO uyumlu, teknik ama anlaşılır içeriklerle yatırım kararını, ekipman seçimini ve proses mantığını destekleyen uzun form makaleler.",
  },
  "Teknik Rehberler": {
    anchor: "teknik-rehberler",
    title: "Teknik Rehberler",
    description:
      "Mühendislik odaklı seçim mantıkları, hesap yaklaşımı ve saha uygulama kriterleri içeren rehber içerikler.",
  },
  "PDF Kataloglar": {
    anchor: "pdf-kataloglar",
    title: "PDF Kataloglar",
    description:
      "Makine ve sistem ailelerini toplu biçimde değerlendirmek isteyen ekipler için katalog mantığında içerikler.",
  },
  "Video Icerikler": {
    anchor: "video-icerikler",
    title: "Video İçerikler",
    description:
      "Saha, makine ve proses akışlarını görsel anlatımla destekleyen bilgilendirici içerik başlıkları.",
  },
  "Sik Sorulan Sorular": {
    anchor: "sik-sorulan-sorular",
    title: "Sık Sorulan Sorular",
    description:
      "Arama niyeti yüksek sorulara kısa, net ve karar destekleyici cevaplar veren SEO uyumlu soru sayfaları.",
  },
  "Terimler Sozlugu": {
    anchor: "terimler-sozlugu",
    title: "Terimler Sözlüğü",
    description:
      "Her biri kendi URL’sinde yayınlanan, kısa tanım ve kullanım alanı sunan mühendislik terimi sayfaları.",
  },
  Programlar: {
    anchor: "programlar",
    title: "Programlar",
    description:
      "Hesap, seçim ve ön mühendislik araçlarını tamamlayan açıklayıcı içerik başlıkları.",
  },
};

const fertilizerServiceLinks: LibraryServiceLink[] = [
  {
    title: "Gübre Tesisi Kurulumu",
    href: "/hizmetler/gubre-tesisi-kurulumu",
    description: "Anahtar teslim gübre yatırımları için genel mühendislik ve kurulum yaklaşımı.",
  },
  {
    title: "Organomineral Gübre Tesisi Kurulumu",
    href: "/hizmetler/organomineral-gubre-tesisi",
    description: "Organik ve mineral hammaddelerin dengeli işlendiği üretim tesisleri.",
  },
  {
    title: "Granül Gübre Üretim Tesisi",
    href: "/hizmetler/granul-gubre-uretim-tesisi",
    description: "Granülasyon, kurutma, soğutma ve eleme odaklı yüksek verimli üretim hatları.",
  },
  {
    title: "Sıvı Gübre Üretim Tesisi",
    href: "/hizmetler/sivi-gubre-uretim-tesisi",
    description: "Sıvı organomineral, amino asitli ve NPK ürünler için proses ve dolum altyapısı.",
  },
];

const compostServiceLinks: LibraryServiceLink[] = [
  {
    title: "Kompost Tesisi Kurulumu",
    href: "/hizmetler/kompost-tesisi-kurulumu",
    description: "Organik atıkların kontrollü işlenmesi ve son ürün hazırlama çözümleri.",
  },
  {
    title: "Gübre Tesisi Kurulumu",
    href: "/hizmetler/gubre-tesisi-kurulumu",
    description: "Komposttan gübreye uzanan yatırım yapıları için bütünleşik yaklaşım.",
  },
];

const generalServiceLinks: LibraryServiceLink[] = [
  {
    title: "Gübre Tesisi Kurulumu",
    href: "/hizmetler/gubre-tesisi-kurulumu",
    description: "Anahtar teslim üretim tesisi yatırımlarında proje, imalat ve kurulum çözümleri.",
  },
  {
    title: "Kompost Tesisi Kurulumu",
    href: "/hizmetler/kompost-tesisi-kurulumu",
    description: "Organik atık işleme ve kompost üretim tesisleri için saha odaklı mühendislik.",
  },
];

function relatedServiceLinks(item: LibraryItem): LibraryServiceLink[] {
  const title = trText(item.title).toLocaleLowerCase("tr-TR");

  if (title.includes("gübre") || title.includes("granül") || title.includes("organomineral")) {
    return fertilizerServiceLinks;
  }

  if (title.includes("kompost")) {
    return compostServiceLinks;
  }

  return generalServiceLinks;
}

function buildBlogSections(item: LibraryItem): LibraryDetailSection[] {
  const title = trText(item.title);
  const summary = trText(item.summary);
  const firstHeading = trText(item.sections[0]?.heading ?? "Teknik Çerçeve");
  const secondHeading = trText(item.sections[1]?.heading ?? "Uygulama Notları");

  return [
    {
      title: "Sektörel Arka Plan ve Teknik Çerçeve",
      blocks: [
        {
          heading: "Konuya Genel Bakış",
          text: `${title} başlığı, Türkiye’de yatırım kararı veren teknik ekipler ile ticari karar vericilerin en sık araştırdığı başlıklar arasında yer alır. ${summary} Bu nedenle konuyu yalnızca teorik bilgi olarak değil; saha uygulaması, ekipman seçimi, kapasite etkisi ve işletme devamlılığı üzerinden değerlendirmek gerekir. Özellikle gübre, kompost, proses ve makine imalatı alanlarında çalışan firmalar için içeriklerin anlaşılır ama teknik doğruluğu yüksek olması önemlidir. Bu makalede konunun mühendislik temeli ile sahadaki karşılığı birlikte ele alınır.`,
        },
        {
          heading: "Türkiye Pazarı İçin Önemi",
          text: `Türkiye pazarında aynı başlığın farklı sektörlerde farklı sonuçlar doğurabildiği görülür. Bölgesel hammadde yapısı, enerji maliyeti, operatör alışkanlıkları ve yatırım ölçeği teknik çözüm tercihini doğrudan etkiler. Bu yüzden ${title.toLocaleLowerCase("tr-TR")} konusu değerlendirilirken yalnızca katalog verileri değil, ürün davranışı, bakım yaklaşımı, lojistik yapı ve satış hedefi de dikkate alınmalıdır. Sağlıklı teknik içerik, yatırımcının doğru soruyu doğru aşamada sormasını sağlar.`,
        },
      ],
    },
    {
      title: firstHeading,
      blocks: [
        {
          heading: "Mühendislik Mantığı",
          text: `${trText(item.sections[0]?.text ?? summary)} Bu başlık altında asıl dikkat edilmesi gereken nokta, proses içindeki her kararın bir sonraki ekipmanı ve toplam hat dengesini etkilemesidir. Kapasite, nem, tane yapısı, yoğunluk, sıcaklık ve çalışma süresi gibi parametreler tek başına değil birbirleriyle ilişkili biçimde okunmalıdır. Bu yaklaşım, yatırımın ilerleyen aşamalarında darboğaz ve kalite sapması riskini azaltır.`,
        },
        {
          heading: "Sahaya Yansıyan Sonuçlar",
          text: `Teknik olarak doğru planlanmış bir sistem, yalnızca daha iyi çalışan ekipman anlamına gelmez; aynı zamanda daha öngörülebilir bakım, daha kontrollü ürün standardı ve daha düşük duruş riski anlamına gelir. Türkiye’de sahadan gelen gerçek veriler incelendiğinde, ilk yatırım aşamasında atlanan küçük mühendislik kararlarının ileride yüksek işletme maliyetine dönüştüğü görülür. Bu nedenle ${title.toLocaleLowerCase("tr-TR")} konusu, uygulama başlamadan önce detaylı ele alınmalıdır.`,
        },
      ],
    },
    {
      title: secondHeading,
      blocks: [
        {
          heading: "Proses İçindeki Rolü",
          text: `${trText(item.sections[1]?.text ?? summary)} Bu yapı yalnızca tek bir ekipman veya adım olarak düşünülmemeli, prosesin bütününe hizmet eden bir karar alanı olarak ele alınmalıdır. Özellikle üretim hattı içinde birden fazla akışın aynı anda yönetildiği tesislerde, bu başlığın doğru kurgulanması hem enerji verimini hem de son ürün kararlılığını etkiler. Teknik rehberlik olmadan yapılan seçimler, kısa vadede çalışıyor görünse bile uzun vadede kapasite kaybına neden olabilir.`,
        },
        {
          heading: "Seçim Kriterleri",
          text: `Seçim yapılırken ürün tipi, vardiya sayısı, bakım erişimi, operatör kabiliyeti ve gelecekteki büyüme ihtiyacı birlikte düşünülmelidir. Türkiye pazarında yaygın görülen yatırım modeli, başlangıçta sınırlı kapasite ile başlayıp sonra büyümektir. Bu nedenle ilk seçimlerin modüler büyümeye açık olması önemlidir. Doğru yaklaşım, bugünkü ihtiyacı çözerken yarınki genişleme ihtiyacını da bloke etmeyen sistem kurmaktır.`,
        },
      ],
    },
    {
      title: "Yatırım, Verimlilik ve Ticari Etki",
      blocks: [
        {
          heading: "Teknik Kararın Ticari Sonucu",
          text: `${title} ile ilgili alınan her teknik karar, doğrudan yatırım maliyetine ve geri dönüş süresine yansır. Yanlış boyutlandırılan ekipman, gereksiz büyük seçilen makine veya eksik proses kurgusu, ilk yatırımın yanı sıra işletme giderlerini de yükseltir. Buna karşılık doğru mühendislik kurgusu, daha kısa devreye alma süresi, daha az ürün kaybı ve daha dengeli kapasite kullanımı sağlar. Bu nedenle teknik içeriklerin ticari perspektifle birlikte okunması gerekir.`,
        },
        {
          heading: "Ön Tasarım İçin Rehberlik",
          text: `Mühendisler için bu tür makalelerin asıl değeri, ön tasarım aşamasında doğru çerçeveyi sunmasıdır. Hangi ekipmanın neden seçileceği, hangi parametrenin kritik olduğu ve ne zaman proses testine ihtiyaç duyulacağı daha net görünür. Bu da yatırımcı ile mühendislik ekibi arasında daha sağlıklı bir iletişim kurulmasına yardımcı olur. Teknik dilin anlaşılır olması, karar hızını artırırken hata riskini düşürür.`,
        },
      ],
    },
  ];
}

function buildGuideSections(item: LibraryItem): LibraryDetailSection[] {
  const title = trText(item.title);
  const summary = trText(item.summary);

  return [
    {
      title: "Teknik Çerçeve",
      blocks: [
        {
          heading: "Temel Mühendislik Yaklaşımı",
          text: `${summary} ${title} başlığında temel yaklaşım, ekipman veya sistem davranışını sayısal veriler, saha koşulları ve bakım gerçekleri ile birlikte değerlendirmektir. Teknik rehber içerikleri, yalnızca tanım veren metinler olmamalı; seçim mantığını ve uygulama sonucunu da anlatmalıdır. Bu nedenle bu rehberde konu, mühendislik kararlarının sahaya nasıl yansıdığı üzerinden ilerler.`,
        },
        {
          heading: "Hesap ve Seçim Disiplini",
          text: `Bir teknik rehberin asıl amacı, kullanıcıyı gereksiz teori ile yormadan doğru hesap mantığına yönlendirmektir. Kapasite, debi, yoğunluk, hız, nem, ürün davranışı ve sistem tipi gibi parametreler birlikte okunduğunda doğru ön seçim yapılabilir. Bu yaklaşım, daha sonra yapılacak detaylı mühendislik hesaplarının zeminini oluşturur ve sahada yanlış ekipman seçimi riskini azaltır.`,
        },
      ],
    },
    {
      title: trText(item.sections[0]?.heading ?? "Teknik İnceleme"),
      blocks: [
        {
          heading: "Uygulama Kriterleri",
          text: `${trText(item.sections[0]?.text ?? summary)} Teknik uygulamada her karar, ürün tipi ve işletme senaryosu ile birlikte değerlendirilmelidir. Türkiye’de aynı ekipman farklı sektörlerde farklı sorunlar yaratabildiği için seçim süreci yalnızca katalog karşılaştırmasına bırakılmamalıdır. Özellikle proses sürekliliği, bakım erişimi ve operatör davranışı birlikte düşünülmelidir.`,
        },
        {
          heading: "Sahada Dikkat Edilecek Noktalar",
          text: `Sahada karşılaşılan tipik sorunlar çoğu zaman ilk projelendirme aşamasında verilen küçük kararlardan kaynaklanır. Bu nedenle teknik rehberlerde; ürün akışı, dar boğaz oluşumu, emniyet payı, yedek parça erişimi ve enerji kullanımı mutlaka yorumlanmalıdır. Sağlıklı rehberlik, yalnızca neyin seçileceğini değil, neden seçileceğini de görünür kılar.`,
        },
      ],
    },
    {
      title: trText(item.sections[1]?.heading ?? "Uygulama Notları"),
      blocks: [
        {
          heading: "Proses İçindeki Etki",
          text: `${trText(item.sections[1]?.text ?? summary)} Teknik açıdan değerlendirildiğinde bu başlık, hat dengesini ve sonuçta elde edilen performansı doğrudan etkiler. Bir sistemin tek başına güçlü görünmesi yeterli değildir; öncesindeki ve sonrasındaki ekipmanlarla aynı mantıkta çalışması gerekir. Bu yüzden rehber içeriklerde konu her zaman proses bütünü içinde yorumlanmalıdır.`,
        },
        {
          heading: "Doğru Sonuca Giden Yol",
          text: `Mühendislik kararlarında hızlı ama güvenli ilerlemek için temel parametreler netleştirilmeli, sonra ekipman seçimi yapılmalıdır. Bu sıra tersine döndüğünde tesis içinde uygunsuz hız, yetersiz kapasite veya yüksek bakım ihtiyacı gibi sonuçlar ortaya çıkar. Teknik rehberin rolü, bu hataları henüz tasarım aşamasındayken önlemektir.`,
        },
      ],
    },
    {
      title: "Sonuç ve Ön Tasarım Notları",
      blocks: [
        {
          heading: "Mühendis İçin Çıkarımlar",
          text: `${title} konusu, ön tasarım yapacak mühendis için yalnızca teorik bilgi değildir; aynı zamanda seçim mantığını sadeleştiren bir yol haritasıdır. Bu rehber üzerinden kapasite, ekipman boyutu, servis faktörü ve proses uyumu gibi temel kararlar ilk aşamada şekillenebilir. Sonraki detay hesaplar daha hızlı ve daha güvenli ilerler.`,
        },
        {
          heading: "Yatırımcı İçin Çıkarımlar",
          text: `Yatırımcı tarafında ise doğru teknik rehber, proje görüşmelerini daha verimli hale getirir. Hangi verilerin kritik olduğu, hangi ekipmanın ne zaman gerekli olduğu ve kapasite kararının neden önemli olduğu daha iyi anlaşılır. Bu sayede teknik ekip ile yatırımcı aynı zeminde buluşur ve karar süreci hızlanır.`,
        },
      ],
    },
  ];
}

function buildFaqCategoryContent(item: LibraryItem): { sections: LibraryDetailSection[]; faqs: LibraryFaqItem[] } {
  const title = trText(item.title);
  const answerSeed = trText(item.summary);

  const faqs = [
    {
      question: `${title} neden önemlidir?`,
      answer: `${answerSeed} Bu başlık, yatırım kararının doğruluğu ve sahadaki işletme güvenliği açısından kritik kabul edilir.`,
    },
    {
      question: `${title} hangi durumlarda tekrar değerlendirilmelidir?`,
      answer:
        "Kapasite artışı, ürün tipi değişimi, saha revizyonu veya bakım sıklığı yükseldiğinde teknik yaklaşım yeniden gözden geçirilmelidir.",
    },
    {
      question: `${title} seçiminde en sık yapılan hata nedir?`,
      answer:
        "Sistem yalnızca ilk yatırım maliyeti üzerinden değerlendirilip proses bütünlüğünün göz ardı edilmesidir.",
    },
    {
      question: `${title} için hangi veriler mutlaka bilinmelidir?`,
      answer:
        "Ürün tipi, kapasite, yoğunluk, nem, çalışma süresi ve saha koşulları netleştirilmeden sağlıklı seçim yapılamaz.",
    },
  ];

  return {
    sections: [
      {
        title: "Kısa Teknik Değerlendirme",
        blocks: [
          {
            heading: "Temel Cevap",
            text: `${answerSeed} Bu soru başlığı, kullanıcıların arama motorlarında en sık sorduğu teknik karar noktalarından biridir. Kısa cevaplar sade görünse de arka planda kapasite, proses dengesi ve ekipman uyumu gibi mühendislik gerçekleri yer alır.`,
          },
          {
            heading: "Ne Zaman Kritik Hale Gelir?",
            text: `${title} konusu özellikle yeni yatırım, revizyon, kapasite artışı veya saha şikâyeti olduğunda daha kritik hale gelir. Bu yüzden soru-cevap formatı, hızlı karar desteği sağlamak için ideal yapı sunar.`,
          },
        ],
      },
    ],
    faqs,
  };
}

function buildGlossaryContent(item: LibraryItem): LibraryDetailSection[] {
  const title = trText(item.title);
  const summary = trText(item.summary);

  return [
    {
      title: "Tanım",
      blocks: [
        {
          heading: `${title} ne anlama gelir?`,
          text: `${trText(item.heroDescription)} ${summary} Terim, özellikle proses ekipmanları, gübre üretim tesisleri, kompost hatları ve endüstriyel makina imalatı içinde teknik ekipler tarafından sık kullanılır.`,
        },
      ],
    },
    {
      title: "Kullanım Alanı",
      blocks: [
        {
          heading: "Hangi proseslerde kullanılır?",
          text: `${trText(item.sections[1]?.text ?? item.sections[0]?.text ?? summary)} Kullanım alanı; ürün tipi, kapasite ve sistem amacına göre değişebilir. Bu nedenle terimin anlamı kadar proses içindeki fonksiyonu da bilinmelidir.`,
        },
      ],
    },
    {
      title: "Mühendislik Açısından Önemi",
      blocks: [
        {
          heading: "Neden bilinmelidir?",
          text: `${title} gibi terimler, ekipman seçimi ve proses tasarımında doğru iletişim kurmak için önemlidir. Aynı kelimenin yanlış yorumlanması, saha uygulamasında hatalı ekipman talebine veya yanlış beklentiye yol açabilir.`,
        },
      ],
    },
  ];
}

export function buildLibraryDetailContent(item: LibraryItem) {
  switch (item.category) {
    case "Blog / Makaleler":
      return {
        sections: buildBlogSections(item),
        faqs: [] as LibraryFaqItem[],
        serviceLinks: relatedServiceLinks(item),
      };
    case "Teknik Rehberler":
      return {
        sections: buildGuideSections(item),
        faqs: [] as LibraryFaqItem[],
        serviceLinks: relatedServiceLinks(item),
      };
    case "Sik Sorulan Sorular": {
      const content = buildFaqCategoryContent(item);
      return {
        sections: content.sections,
        faqs: content.faqs,
        serviceLinks: relatedServiceLinks(item),
      };
    }
    case "Terimler Sozlugu":
      return {
        sections: buildGlossaryContent(item),
        faqs: [] as LibraryFaqItem[],
        serviceLinks: relatedServiceLinks(item),
      };
    default:
      return {
        sections: buildGuideSections(item),
        faqs: [] as LibraryFaqItem[],
        serviceLinks: relatedServiceLinks(item),
      };
  }
}
