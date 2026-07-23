import type { DrumSystemDetailPageData } from "../components/drum-system-detail-page";

function section(
  title: string,
  config: Omit<DrumSystemDetailPageData["sections"][number], "title">,
): DrumSystemDetailPageData["sections"][number] {
  return { title, ...config };
}

function table(title: string, headers: string[], rows: string[][], note?: string) {
  return { title, headers, rows, note };
}

function formula(title: string, formulaText: string, example?: string[]) {
  return { title, formula: formulaText, example };
}

function faq(question: string, answer: string) {
  return { question, answer };
}

function page(data: DrumSystemDetailPageData): DrumSystemDetailPageData {
  return data;
}

const commonHeroLinks = [
  { label: "Organomineral Gübre Tesisi", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
  { label: "Granül Gübre Üretim Tesisi", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
  { label: "Tambur Hesapları", href: "/programlar?modal=tambur-kapasite-hesabi" },
];

const commonCtaTitle = "Gübre tesisi projeniz için teknik değerlendirme alın.";
const commonCtaDescription =
  "Kapasite, hammadde, reçete, hedef ürün, nem oranı ve saha yerleşiminize göre uygun gübre üretim hattı, tambur sistemi, paketleme ve otomasyon çözümünü birlikte netleştirebiliriz.";

export const fertilizerSystemDetailPages: DrumSystemDetailPageData[] = [
  page({
    slug: "organomineral-gubre-tesisi-maliyeti",
    title: "Organomineral Gübre Tesisi Maliyeti",
    badgeLabel: "Gübre Tesisi",
    metaTitle:
      "Organomineral Gübre Tesisi Maliyeti | Makine, Kapasite ve Yatırım Analizi",
    description:
      "Organomineral gübre tesisi maliyeti; kapasite, makine listesi, inşaat, enerji, personel, hammadde, granülasyon, kurutma, soğutma ve paketleme hattına göre nasıl hesaplanır?",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/organomineral-gubre-tesisi-maliyeti",
    openGraphTitle: "Organomineral Gübre Tesisi Maliyeti",
    openGraphDescription:
      "Organomineral gübre tesisi maliyetini kapasite, makine, enerji ve paketleme yüküyle birlikte inceleyin.",
    heroDescription:
      "Organomineral gübre tesisi maliyeti; sadece ana makine fiyatından oluşmaz. Kapasite, hammadde hazırlama, dozajlama, granülasyon tamburu, kurutma tamburu, soğutma tamburu, eleme, recycle hattı, kaplama, paketleme, otomasyon, bina, enerji, personel ve işletme giderleri birlikte değerlendirilmelidir.",
    readingTime: "10-12 dk",
    heroTopic: "Yatırım, kapasite, enerji ve proses ekipmanı dengesi",
    heroCtaLabel: "Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar?modal=tambur-kapasite-hesabi",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Organomineral gübre tesisi yatırımlarında en yaygın hata, toplam maliyeti yalnız ana tambur ya da paketleme ünitesi üzerinden okumaktır. Oysa tesis maliyeti; proses kurgusu, kapasite hedefi, organik hammaddenin nemi, enerji altyapısı ve saha yerleşimiyle birlikte şekillenir.",
      "Gerçekçi bir yatırım analizi için /sektorler/gubre-ve-granulasyon-tesisleri ve /kutuphane/blog/gubre-kurutma-ve-sogutma-prosesi sayfalarında anlatılan proses bağımlılıkları aynı tabloda değerlendirilmelidir.",
    ],
    flowTitle: "Organomineral Gübre Tesisi Ana Proses Akışı",
    flowSteps: [
      "Hammadde kabul",
      "Organik hammadde hazırlama",
      "Mineral hammadde dozajlama",
      "Mikser / homojenizasyon",
      "Granülasyon tamburu",
      "Kurutma tamburu",
      "Soğutma tamburu",
      "Elek ve recycle hattı",
      "Kaplama / paketleme",
    ],
    flowNote:
      "Maliyet hesabında her proses adımı yalnız makine sayısı değil; enerji, operatör, bakım ve saha ihtiyacı olarak da etkili olur.",
    sections: [
      section("Organomineral gübre tesisi maliyetini belirleyen ana faktörler", {
        paragraphs: [
          "Organomineral hatlarda kapasite arttıkça tambur sistemleri, elek alanı, recycle hattı ve paketleme ekipmanları hızla büyür. Organik hammaddenin nemi ve yoğunluğu da kurutma yükünü doğrudan etkiler.",
        ],
        table: table(
          "Ana Maliyet Faktörleri",
          ["Faktör", "Maliyete Etkisi", "Açıklama"],
          [
            ["Kapasite", "Çok yüksek", "Tambur, kurutucu, elek, paketleme ve taşıma sistemlerini büyütür"],
            ["Hammadde tipi", "Yüksek", "Organik madde nemi ve yoğunluğu proses tasarımını etkiler"],
            ["Granülasyon sistemi", "Yüksek", "Granül kalitesi ve recycle oranını belirler"],
            ["Kurutma sistemi", "Çok yüksek", "Brülör, fan, siklon ve filtre ihtiyacını etkiler"],
            ["Paketleme sistemi", "Orta-yüksek", "Torbalama, big bag ve otomasyon seviyesine göre değişir"],
            ["Otomasyon", "Orta", "İlk yatırım artar ama işletme kontrolünü güçlendirir"],
            ["Bina ve altyapı", "Yüksek", "Kapalı alan, temel, enerji ve saha yerleşimi gerektirir"],
          ],
        ),
      }),
      section("Makine maliyet kalemleri", {
        paragraphs: [
          "Makine listesi yatırım analizinin omurgasını oluşturur. Ancak maliyeti yalnız ana ekipman değil; toz toplama, taşıma, otomasyon ve yardımcı tanklar da belirler.",
        ],
        table: table(
          "Makine ve Sistemler",
          ["Makine / Sistem", "Görevi", "Maliyet Seviyesi"],
          [
            ["Hammadde siloları", "Stoklama", "Orta"],
            ["Dozaj bunkerleri", "Reçete besleme", "Orta"],
            ["Mikser", "Homojen karışım", "Orta"],
            ["Granülasyon tamburu", "Granül oluşumu", "Yüksek"],
            ["Kurutma tamburu", "Nem düşürme", "Yüksek"],
            ["Soğutma tamburu", "Sıcaklık düşürme", "Orta-yüksek"],
            ["Elek sistemi", "Ürün sınıflandırma", "Orta"],
            ["Recycle hattı", "Elek altı/üstü dönüşü", "Orta"],
            ["Kaplama tamburu", "Ürün yüzey kalitesi", "Orta"],
            ["Torbalama / big bag", "Ambalajlama", "Orta-yüksek"],
            ["Jet pulse filtre", "Toz kontrolü", "Orta-yüksek"],
          ],
        ),
      }),
      section("Kapasite maliyeti nasıl etkiler?", {
        paragraphs: [
          "Yıllık üretim hedefi, yalnız satış projeksiyonunu değil kurutma ve paketleme altyapısını da belirler. Düşük planlanan kapasite, ileride darboğaz; aşırı yüksek kapasite ise gereksiz yatırım yükü doğurabilir.",
        ],
        formulas: [
          formula(
            "Yıllık Üretim Kapasitesi",
            "Yıllık üretim kapasitesi = Saatlik kapasite × Günlük çalışma saati × Yıllık çalışma günü",
            ["Örnek: 10 ton/saat × 24 saat/gün × 300 gün/yıl = 72.000 ton/yıl"],
          ),
        ],
      }),
      section("İşletme maliyeti kalemleri", {
        paragraphs: [
          "İşletme maliyetinde en büyük baskı çoğu zaman hammadde ve kurutma enerjisinden gelir. Buna ek olarak elektrik, personel, ambalaj, filtre sarfı ve bakım giderleri uzun vadeli toplam maliyeti belirler.",
        ],
        table: table(
          "Başlıca İşletme Giderleri",
          ["Gider Kalemi", "Etkileyen Faktör"],
          [
            ["Hammadde", "Reçete ve tedarik fiyatı"],
            ["Elektrik", "Motor güçleri ve çalışma saati"],
            ["Yakıt", "Kurutma yükü ve nem"],
            ["Personel", "Vardiya düzeni"],
            ["Bakım", "Tambur, rulman, ring, filtre ve konveyör bakımı"],
            ["Ambalaj", "Torba, big bag, etiket"],
            ["Filtre sarfı", "Toz yükü ve çalışma süresi"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Maliyet Analizinde Teknik Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Kapasite", "Makine boyutlarını ve enerji altyapısını belirler."],
        ["Hammadde nemi", "Kurutma yükünü ve brülör maliyetini etkiler."],
        ["Reçete yapısı", "Dozaj hassasiyeti ve silo sayısını değiştirir."],
        ["Paketleme hedefi", "Torbalama ve big bag yatırımını belirler."],
        ["Toz yükü", "Filtre ve aspirasyon maliyetini etkiler."],
        ["Otomasyon seviyesi", "İlk yatırım ile kalite kontrol dengesini kurar."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Maliyet Hesabı Hataları",
      ["Hata", "Sonuç"],
      [
        ["Sadece makine fiyatına bakmak", "Gerçek yatırım düşük görünür"],
        ["Kurutma enerji yükünü hesaplamamak", "İşletme maliyeti yanlış çıkar"],
        ["Recycle hattını unutmak", "Granülasyon kapasitesi yetersiz kalır"],
        ["Paketleme kapasitesini düşük seçmek", "Hat sonunda darboğaz olur"],
        ["Toz toplama sistemini ihmal etmek", "İşletme ve emisyon sorunu"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina organomineral gübre tesisi maliyetini yalnız ekipman listesi olarak değil; kapasite, proses akışı, hammadde davranışı, kurutma yükü, paketleme hedefi, otomasyon seviyesi ve saha yerleşimiyle birlikte değerlendirir.",
      "Bu yaklaşım, teklif aşamasında yatırımın gizli kalemlerini görünür hale getirir ve daha sağlıklı etaplama yapılmasını sağlar.",
    ],
    approachBullets: [
      "Kapasite ve yıllık üretim doğrulaması",
      "Hammadde ve reçete analizi",
      "Granülasyon-kurutma yük dengesi",
      "Paketleme ve sevkiyat kapasitesi",
      "Toz toplama ve otomasyon ihtiyacı",
      "Bina, enerji ve saha yerleşimi",
    ],
    faqs: [
      faq("Organomineral gübre tesisi maliyeti neye göre değişir?", "Kapasite, hammadde nemi, proses akışı, kurutma yükü, paketleme seviyesi ve otomasyona göre değişir."),
      faq("En pahalı ekipmanlar hangileridir?", "Çoğu projede granülasyon, kurutma, brülör ve filtre hattı en yüksek etkili kalemlerdir."),
      faq("Kurutma sistemi maliyeti neden yüksektir?", "Brülör, fan, siklon, filtre ve enerji altyapısı kurutma tarafında birlikte büyür."),
      faq("Organomineral gübre tesisi kaç ton/saat kurulabilir?", "Ürün reçetesi ve saha koşullarına bağlı olarak farklı tonajlarda tasarlanabilir."),
      faq("Paketleme hattı yatırım maliyetini etkiler mi?", "Evet; torbalama, big bag, otomasyon ve paletleme seçimi maliyeti önemli ölçüde etkiler."),
    ],
    relatedLinks: [
      { title: "Organomineral Gübre Tesisi", description: "Hizmet sayfasında saha ve çözüm yaklaşımını inceleyin.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "Granül Gübre Üretim Tesisi", description: "Granül hat yatırımına odaklanan hizmet yapısını görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "Granül Gübre Üretim Süreci", description: "Maliyet kalemlerinin dayandığı teknik proses akışını açın.", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "Gübre Kurutma ve Soğutma Prosesi", description: "Enerji ve ürün stabilitesi tarafını detaylandırın.", href: "/kutuphane/blog/gubre-kurutma-ve-sogutma-prosesi" },
      { title: "Tambur Hesapları", description: "Kurutma ve tambur boyutlandırmasını program üzerinden kontrol edin.", href: "/programlar?modal=tambur-kapasite-hesabi" },
      { title: "İletişim", description: "Yatırım verilerinizle teknik değerlendirme talep edin.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "granul-gubre-uretim-sureci",
    title: "Granül Gübre Üretim Süreci",
    badgeLabel: "Gübre Tesisi",
    metaTitle:
      "Granül Gübre Üretim Süreci | Hammadde, Granülasyon, Kurutma ve Paketleme",
    description:
      "Granül gübre üretim süreci; hammadde dozajlama, mikser, granülasyon tamburu, kurutma, soğutma, eleme, recycle, kaplama ve paketleme aşamalarıyla nasıl ilerler?",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/granul-gubre-uretim-sureci",
    openGraphTitle: "Granül Gübre Üretim Süreci",
    openGraphDescription:
      "Granül gübre prosesini hammadde kabulden paketlemeye kadar adım adım inceleyin.",
    heroDescription:
      "Granül gübre üretim süreci; toz veya ince hammaddelerin belirli reçeteye göre dozajlanması, karıştırılması, granülasyon tamburunda şekillendirilmesi, kurutulması, soğutulması, elenmesi, kaplanması ve paketlenmesiyle tamamlanır.",
    readingTime: "10-12 dk",
    heroTopic: "Dozajlama, granülasyon, kurutma, recycle ve paketleme",
    heroCtaLabel: "Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar?modal=tambur-kapasite-hesabi",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Granül gübre üretim sürecinin temel amacı; homojen besin içeriğine sahip, taşınabilir, depolanabilir, toz oranı düşük ve paketlemeye uygun granül ürün elde etmektir. Bu hedefe ulaşmak için her proses adımının kapasite dengesi korunmalıdır.",
      "Özellikle /kutuphane/blog/granulator-tamburu-secimi ve /kutuphane/blog/kurutma-tamburu-hesaplama içeriklerinde anlatılan granülasyon ve kurutma tarafı, süreç performansının belirleyici bölümünü oluşturur.",
    ],
    flowTitle: "Granül Gübre Üretim Süreci",
    flowSteps: [
      "Hammadde kabul",
      "Silo ve bunker stoklama",
      "Tartımlı dozajlama",
      "Mikser",
      "Granülasyon tamburu",
      "Kurutma tamburu",
      "Soğutma tamburu",
      "Elek / recycle",
      "Kaplama / paketleme",
    ],
    flowNote:
      "Granül hatlarda her aşama bir sonraki ekipmanın yükünü belirler; proses tasarımı bu nedenle tek bir makine kararıyla kurulamaz.",
    sections: [
      section("Granül gübre üretiminde temel amaç", {
        paragraphs: [
          "Granül ürün, toz forma göre çok daha kolay taşınır, paketlenir ve tarla uygulamasında daha kontrollü davranır. Bu nedenle süreç yalnız granül oluşturmak değil, aynı zamanda granül çapını ve nemini de yönetmek zorundadır.",
        ],
      }),
      section("Hammadde hazırlama ve dozajlama", {
        paragraphs: [
          "Silo, bunker ve tartımlı dozajlama ekipmanları reçete doğruluğunun temelidir. Reçete hassasiyeti bozulduğunda sonraki tüm prosesler çalışsa bile nihai kalite dalgalanır.",
        ],
      }),
      section("Mikser ve homojenizasyon", {
        paragraphs: [
          "Granülasyon öncesinde karışım homojen değilse tambur içinde granül büyümesi düzensizleşir. Bu nedenle mikser yalnız karıştırma değil, proses dengeleme ekipmanıdır.",
        ],
      }),
      section("Granülasyon tamburu, kurutma ve soğutma", {
        paragraphs: [
          "Granülasyon tamburu, karışımın bağlayıcı sıvı ve recycle ürün desteğiyle granül forma dönüştüğü ana ekipmandır. Ardından kurutma tamburu granülün nemini düşürür, soğutma tamburu ise paketleme öncesi sıcaklığı dengeler.",
        ],
        formulas: [
          formula(
            "Recycle ve Toplam Granülatör Yükü",
            "Recycle yükü = Nihai ürün kapasitesi × Recycle oranı / 100\n\nToplam granülatör yükü = Nihai ürün kapasitesi + Recycle yükü + Bağlayıcı yükü",
          ),
        ],
      }),
      section("Kaplama ve paketleme", {
        paragraphs: [
          "Kaplama tamburu toz azaltma ve yüzey kalitesi için kullanılır. Paketleme ise tüm sürecin ticari ürüne dönüştüğü son aşamadır; bu nedenle hat kapasitesine uyumlu seçilmelidir.",
        ],
        table: table(
          "Granül Gübre Üretim Hattı Ekipmanları",
          ["Aşama", "Kullanılan Makine", "Görev"],
          [
            ["Stoklama", "Silo / bunker", "Hammadde depolama"],
            ["Dozajlama", "Tartımlı konveyör / helezon", "Reçete besleme"],
            ["Karıştırma", "Mikser", "Homojen karışım"],
            ["Granülasyon", "Granülasyon tamburu", "Granül oluşumu"],
            ["Kurutma", "Kurutma tamburu", "Nem düşürme"],
            ["Soğutma", "Soğutma tamburu", "Sıcaklık düşürme"],
            ["Eleme", "Döner/vibrasyonlu elek", "Tane sınıflandırma"],
            ["Kaplama", "Kaplama tamburu", "Yüzey işlemi"],
            ["Paketleme", "Torbalama / big bag", "Sevkiyat hazırlığı"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Granül Gübre Sürecinde Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Reçete doğruluğu", "Besin içeriğinin tutarlılığını sağlar."],
        ["Bağlayıcı kontrolü", "Granül oluşumu ve toz oranını etkiler."],
        ["Recycle oranı", "Granül çekirdeği ve tane dağılımını belirler."],
        ["Kurutma yükü", "Nem ve paketleme kararlılığını etkiler."],
        ["Soğutma kapasitesi", "Ürün sıcaklığını sevkiyat için uygun hale getirir."],
        ["Paketleme hızı", "Hat sonundaki darboğaz riskini belirler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Üretim Hataları",
      ["Hata", "Sonuç"],
      [
        ["Dozaj hassasiyetinin düşük olması", "Reçete sapması"],
        ["Bağlayıcı dozajının kontrolsüz olması", "Topaklanma veya toz"],
        ["Kurutmanın yetersiz olması", "Paketlemede nem sorunu"],
        ["Soğutmanın zayıf olması", "Torbada terleme"],
        ["Eleme alanının küçük olması", "Uygun ürün ayrımı bozulur"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina granül gübre üretim sürecini silo-bunker dozajlamasından paketlemeye kadar kesintisiz bir hat olarak ele alır. Böylece her makinenin yalnız tekil kapasitesi değil, hattın toplam dengesi okunur.",
      "Özellikle granülasyon, kurutma ve recycle hattı birlikte ele alındığında daha kararlı ürün kalitesi elde edilir.",
    ],
    approachBullets: [
      "Reçete ve dozaj kontrolü",
      "Granülasyon tamburu tasarımı",
      "Kurutma ve soğutma yük dengesi",
      "Elek ve recycle entegrasyonu",
      "Kaplama ve paketleme planı",
      "Toz toplama ve otomasyon",
    ],
    faqs: [
      faq("Granül gübre nasıl üretilir?", "Hammadde dozajlanır, karıştırılır, granülasyona alınır, kurutulur, soğutulur, elenir ve paketlenir."),
      faq("Granül gübre üretim hattında hangi makineler vardır?", "Silo, bunker, dozajlama, mikser, granülasyon tamburu, kurutma, soğutma, elek, recycle, kaplama ve paketleme ekipmanları bulunur."),
      faq("Granülasyon tamburu ne işe yarar?", "Bağlayıcı ve hareket desteğiyle toz karışımı granül forma dönüştürür."),
      faq("Recycle hattı neden kullanılır?", "Granül çekirdeği oluşumunu destekler ve uygun tane dağılımını iyileştirir."),
      faq("Kurutma ve soğutma neden gereklidir?", "Nem ve sıcaklık kontrolü olmadan granül paketlemeye uygun hale gelmez."),
    ],
    relatedLinks: [
      { title: "Granülatör Tamburu Seçimi", description: "Granül oluşumunun merkezindeki tambur tasarımını inceleyin.", href: "/kutuphane/blog/granulator-tamburu-secimi" },
      { title: "Gübre Kurutma ve Soğutma Prosesi", description: "Granül hattının termal bölümünü detaylandırın.", href: "/kutuphane/blog/gubre-kurutma-ve-sogutma-prosesi" },
      { title: "Granül Gübre Üretim Tesisi", description: "Hizmet sayfasında tesis bazlı yaklaşımı görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "Tambur Sistemleri", description: "Granülasyon, kurutma ve soğutma tamburlarını ürün bazında görün.", href: "/makinalar-ekipman/tambur-sistemleri" },
      { title: "Tambur Hesapları", description: "Granül hat için tambur ve proses hesaplarını açın.", href: "/programlar?modal=tambur-kapasite-hesabi" },
      { title: "Paketleme ve Dolum Sistemleri", description: "Hat sonu ekipman ailesini inceleyin.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "npk-gubre-uretimi",
    title: "NPK Gübre Üretimi",
    badgeLabel: "Gübre Tesisi",
    metaTitle:
      "NPK Gübre Üretimi | Azot, Fosfor, Potasyum ve Granül Gübre Prosesi",
    description:
      "NPK gübre üretimi için hammadde dozajlama, karıştırma, granülasyon, kurutma, soğutma, eleme, kaplama, paketleme ve proses ekipmanlarını inceleyin.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/npk-gubre-uretimi",
    openGraphTitle: "NPK Gübre Üretimi",
    openGraphDescription:
      "NPK gübre üretiminde reçete, granülasyon, kurutma ve kalite kontrol ilişkisini inceleyin.",
    heroDescription:
      "NPK gübre üretimi; azot, fosfor ve potasyum kaynaklı hammaddelerin belirli reçeteye göre dozajlanması, homojen karıştırılması ve granül formda son ürüne dönüştürülmesi sürecidir. Reçete hassasiyeti, granül kalitesi, nem kontrolü ve paketleme doğruluğu bu proseste kritik öneme sahiptir.",
    readingTime: "10-12 dk",
    heroTopic: "Reçete doğruluğu, NPK dengesi, granül kalite ve paketleme",
    heroCtaLabel: "Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar?modal=tambur-kapasite-hesabi",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "NPK gübre üretiminde ürün değeri yalnız tonajdan değil, reçetenin doğru tutulmasından gelir. Bu yüzden dozajlama hassasiyeti, granülasyon dengesi ve kurutma kalitesi aynı derecede önemlidir.",
      "Azot, fosfor ve potasyum kaynakları farklı akışkanlık, nem ve tane boyutu davranışı gösterebildiği için hat tasarımı yalnız standart granül mantığıyla kurulamaz.",
    ],
    flowTitle: "NPK Gübre Üretim Prosesi",
    flowSteps: [
      "Azot hammaddeleri",
      "Fosfor hammaddeleri",
      "Potasyum hammaddeleri",
      "Dozajlama",
      "Mikser",
      "Granülasyon",
      "Kurutma",
      "Soğutma",
      "Eleme / kaplama / paketleme",
    ],
    flowNote:
      "NPK üretiminde her hammadde grubu farklı davranabildiği için reçete ve dozaj kontrolü prosesin merkezinde yer alır.",
    sections: [
      section("NPK gübre nedir?", {
        paragraphs: [
          "NPK gübre; bitki besin elementi olarak azot, fosfor ve potasyum içeren mineral veya organomineral formdaki gübre grubudur. Ürünün ticari başarısı, bu elementlerin hedef oranlarda ve homojen dağılımda tutulmasına bağlıdır.",
        ],
      }),
      section("NPK üretiminde hammadde dozajlama ve karıştırma", {
        paragraphs: [
          "NPK hatlarında silo, bunker ve tartımlı sistemler reçete doğruluğunu belirler. Mikser ise farklı besin kaynaklarının granülasyon öncesinde homojen dağılmasını sağlar.",
        ],
      }),
      section("NPK granülasyon prosesi", {
        paragraphs: [
          "Granülasyon tamburu, NPK karışımının bağlayıcı ve recycle desteğiyle granül forma dönüştüğü ana bölümdür. Granül kalitesi hem bağlayıcı davranışına hem tambur hareketine bağlıdır.",
        ],
      }),
      section("Kurutma, soğutma ve eleme", {
        paragraphs: [
          "Granülasyondan çıkan ürün genellikle nemli ve sıcak olur. Bu nedenle kurutma tamburu, soğutma tamburu ve elek sistemi ürünün pazarlanabilir forma ulaşmasında birlikte çalışır.",
        ],
        table: table(
          "NPK Üretiminde Makine Seçim Tablosu",
          ["Proses", "Makine", "Kritik Kriter"],
          [
            ["Hammadde besleme", "Silo / bunker", "Akışkanlık"],
            ["Dozajlama", "Tartımlı sistem", "Reçete doğruluğu"],
            ["Karıştırma", "Mikser", "Homojenlik"],
            ["Granülasyon", "Tambur granülatör", "Bağlayıcı ve devir"],
            ["Kurutma", "Kurutma tamburu", "Nem hedefi"],
            ["Soğutma", "Soğutma tamburu", "Paketleme sıcaklığı"],
            ["Eleme", "Elek", "Granül çapı"],
            ["Kaplama", "Kaplama tamburu", "Toz azaltma"],
          ],
        ),
      }),
      section("NPK üretiminde kalite kontrol", {
        bullets: [
          "NPK oranı",
          "Granül çap dağılımı",
          "Nem",
          "Sertlik",
          "Toz oranı",
          "Paket ağırlığı",
          "Homojenlik",
        ],
        paragraphs: [
          "Kalite kontrol yalnız laboratuvar başlığı değil, aynı zamanda proses ekipmanlarının doğru seçildiğinin saha göstergesidir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "NPK Üretiminde Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Reçete hassasiyeti", "Besin elementi oranını tutturur."],
        ["Bağlayıcı kontrolü", "Granül oluşumunu ve yüzey kalitesini etkiler."],
        ["Kurutma hedefi", "Nem ve depolama davranışını belirler."],
        ["Elek açıklığı", "Granül çap dağılımını kontrol eder."],
        ["Kaplama seviyesi", "Toz azaltma ve görünümü etkiler."],
        ["Paketleme doğruluğu", "Ticari kaliteyi tamamlar."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan NPK Üretim Hataları",
      ["Hata", "Sonuç"],
      [
        ["Reçete dozajını manuel kontrol etmek", "Besin elementi sapması"],
        ["Kurutma sıcaklığını yüksek tutmak", "Ürün kalitesi bozulabilir"],
        ["Elek seçimini yanlış yapmak", "Granül çapı dağılır"],
        ["Kaplama yapmamak", "Toz oranı artabilir"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina NPK gübre üretimini yalnız karışım hazırlama olarak değil; dozaj, granülasyon, kurutma, soğutma, eleme ve paketlemeyi birlikte yöneten bir proses olarak ele alır.",
      "Bu yaklaşım, reçete doğruluğu ile mekanik hat kapasitesini aynı çerçevede buluşturur.",
    ],
    approachBullets: [
      "Reçete ve silo planı",
      "Tartımlı dozajlama",
      "Granülasyon tamburu optimizasyonu",
      "Kurutma-soğutma entegrasyonu",
      "Elek ve kaplama doğrulaması",
      "Paketleme ve kalite kontrol",
    ],
    faqs: [
      faq("NPK gübre nasıl üretilir?", "Azot, fosfor ve potasyum kaynakları dozajlanır, karıştırılır, granüle edilir, kurutulur ve paketlenir."),
      faq("NPK gübre üretiminde hangi makineler gerekir?", "Silo, bunker, mikser, granülasyon tamburu, kurutma, soğutma, elek, kaplama ve paketleme ekipmanları gerekir."),
      faq("NPK granülasyonunda bağlayıcı kullanılır mı?", "Ürün reçetesine ve hedef granül davranışına göre kullanılabilir."),
      faq("NPK üretiminde kurutma neden önemlidir?", "Nem kontrolü olmadan ürün depolama ve paketleme sorunları doğurabilir."),
      faq("NPK gübre paketleme nasıl yapılır?", "Tartımlı torbalama veya big bag sistemleriyle, ürün sıcaklığı ve nemi kontrol edildikten sonra yapılır."),
    ],
    relatedLinks: [
      { title: "Granül Gübre Üretim Süreci", description: "NPK hattını daha genel granül üretim çerçevesinde inceleyin.", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "Granülasyon Prosesi", description: "NPK granülasyonunun çekirdek proses mantığını okuyun.", href: "/kutuphane/blog/granulasyon-prosesi" },
      { title: "Granülatör Tamburu Seçimi", description: "Granül kalitesini belirleyen tambur tasarımını görün.", href: "/kutuphane/blog/granulator-tamburu-secimi" },
      { title: "Gübre Kurutma ve Soğutma Prosesi", description: "NPK hattının termal bölümünü detaylandırın.", href: "/kutuphane/blog/gubre-kurutma-ve-sogutma-prosesi" },
      { title: "Granül Gübre Üretim Tesisi", description: "NPK benzeri granül hatların hizmet kurgusunu inceleyin.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "İletişim", description: "NPK reçete ve kapasite hedefiniz için teknik görüşme talep edin.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "gubre-tesisi-kurulumu",
    title: "Gübre Tesisi Kurulumu",
    badgeLabel: "Gübre Tesisi",
    metaTitle:
      "Gübre Tesisi Kurulumu | Proses, Makine, Saha Yerleşimi ve Devreye Alma",
    description:
      "Gübre tesisi kurulumu için kapasite belirleme, proses seçimi, makine listesi, saha yerleşimi, otomasyon, montaj, devreye alma ve yatırım planlama adımlarını inceleyin.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/gubre-tesisi-kurulumu",
    openGraphTitle: "Gübre Tesisi Kurulumu",
    openGraphDescription:
      "Gübre tesisi kurulumunu kapasite, proses, makine listesi ve devreye alma adımlarıyla inceleyin.",
    heroDescription:
      "Gübre tesisi kurulumu; yatırım fikrinden saha devreye almaya kadar kapasite, ürün tipi, hammadde, proses akışı, makine seçimi, bina yerleşimi, otomasyon, montaj ve işletme planlamasının birlikte yapılmasını gerektirir.",
    readingTime: "10-12 dk",
    heroTopic: "Kapasite planı, proses tasarımı, montaj ve devreye alma",
    heroCtaLabel: "Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar?modal=tambur-kapasite-hesabi",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Gübre tesisi kurulumu, sadece makine siparişi verilerek tamamlanan bir süreç değildir. Ürün tipi, kapasite, hammadde yapısı ve saha akışı başlangıçta doğru tanımlanmazsa yatırım gecikir veya beklenen performansa ulaşamaz.",
      "Bu yüzden kurulum kararı, /sektorler/gubre-ve-granulasyon-tesisleri sayfasında anlatılan tesis çözümleri ile birlikte okunması gereken bir mühendislik ve planlama konusudur.",
    ],
    flowTitle: "Gübre Tesisi Kurulum Yol Haritası",
    flowSteps: [
      "Yatırım hedefi",
      "Ürün ve reçete seçimi",
      "Kapasite analizi",
      "Proses tasarımı",
      "Makine seçimi",
      "Saha yerleşimi",
      "İmalat",
      "Montaj",
      "Devreye alma",
    ],
    flowNote:
      "Başarılı kurulumlarda teknik tasarım ile saha uygulaması birbirinden kopuk ilerlemez; aynı iş akışı içinde doğrulanır.",
    sections: [
      section("Gübre tesisi kurulumuna nereden başlanır?", {
        numbered: [
          "Ürün tipi belirlenir",
          "Kapasite hedefi seçilir",
          "Hammadde kaynakları analiz edilir",
          "Proses akışı oluşturulur",
          "Makine listesi hazırlanır",
          "Saha yerleşimi yapılır",
          "Enerji ve yardımcı sistemler hesaplanır",
          "Montaj ve devreye alma planlanır",
        ],
        paragraphs: [
          "Kurulumun başlangıcında yapılan bu kararlar daha sonraki yatırım bütçesini, mekanik yerleşimi ve üretim kalitesini doğrudan etkiler.",
        ],
      }),
      section("Gübre tesisi türleri", {
        table: table(
          "Tesis Türleri",
          ["Tesis türü", "Ana proses", "Ana ekipman"],
          [
            ["Granül gübre tesisi", "Granülasyon", "Tambur, kurutucu, elek"],
            ["Organomineral gübre tesisi", "Organik + mineral karışım", "Dozaj, granülasyon, kurutma"],
            ["Sıvı gübre tesisi", "Çözündürme / reaksiyon", "Reaktör, tank, filtre"],
            ["Kompost bazlı gübre tesisi", "Organik ürün hazırlama", "Kompost, kurutma, eleme"],
            ["NPK tesisi", "Mineral reçete", "Dozaj, mikser, granülasyon"],
          ],
        ),
        paragraphs: [
          "Tesis tipi belirlendiğinde kurulum senaryosu da farklılaşır. Örneğin sıvı hat ile granül hat aynı bina, aynı yardımcı sistem ve aynı montaj mantığıyla planlanmaz.",
        ],
      }),
      section("Makine seçimi, saha yerleşimi ve otomasyon", {
        paragraphs: [
          "Makine seçimi yapılırken yalnız katalog kapasitesi değil, ürün akış sırası ve erişim alanları da düşünülmelidir. Saha yerleşimi geç planlanırsa montaj ve servis güzergahları zorlaşır.",
          "Otomasyon sistemi ise reçete yönetimi, motor senkronizasyonu, emniyet ve kalite tekrar edilebilirliği için kritik rol oynar.",
        ],
      }),
      section("Montaj ve devreye alma", {
        paragraphs: [
          "Montaj; şase, platform, makine hizalaması, taşıma ekipmanları, elektrik-kontrol kablolaması ve sıcak hava / aspirasyon bağlantılarıyla birlikte ilerler. Devreye alma aşamasında ürünsüz ve ürünlü testler ayrı ayrı yapılmalıdır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Kurulum Sürecinde Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Ürün tipi", "Tesis mimarisini belirler."],
        ["Kapasite hedefi", "Makine ve bina ölçeğini etkiler."],
        ["Hammadde kaynakları", "Besleme ve kurutma yükünü belirler."],
        ["Saha yerleşimi", "Montaj ve servis kolaylığını etkiler."],
        ["Otomasyon", "Reçete ve kalite kararlılığını sağlar."],
        ["Paketleme hızı", "Son hat darboğazını önler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Kurulum Hataları",
      ["Hata", "Sonuç"],
      [
        ["Kapasiteyi pazar analizinden bağımsız seçmek", "Satış/üretim dengesizliği"],
        ["Saha yerleşimini geç planlamak", "Montaj ve akış sorunları"],
        ["Kurutma yükünü eksik almak", "Ürün nemli çıkar"],
        ["Paketlemeyi düşük kapasiteli seçmek", "Hat darboğazı"],
        ["Otomasyonu ihmal etmek", "Reçete ve kalite dalgalanması"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina gübre tesisi kurulumunu yalnız makine tedariki olarak değil; kapasite planı, proses mühendisliği, saha yerleşimi, montaj ve devreye alma zinciri olarak ele alır.",
      "Bu yaklaşım, yatırımcının ilk fikir aşamasından üretime geçişe kadar daha kontrollü ilerlemesini sağlar.",
    ],
    approachBullets: [
      "Ürün ve kapasite analizi",
      "Makine listesi ve layout",
      "Kurutma ve tambur hesapları",
      "Paketleme ve sevkiyat dengesi",
      "Montaj ve devreye alma planı",
      "Operatör eğitimi ve ilk dönem destek",
    ],
    faqs: [
      faq("Gübre tesisi kurmak için hangi makineler gerekir?", "Tesis tipine göre silo, dozaj, mikser, tambur sistemleri, elek, paketleme ve yardımcı ekipmanlar gerekir."),
      faq("Gübre tesisi maliyeti neye göre değişir?", "Kapasite, ürün tipi, kurutma yükü, otomasyon ve paketleme yapısına göre değişir."),
      faq("Granül gübre tesisi kaç ton/saat kurulabilir?", "Ürün, saha ve yatırım hedeflerine göre farklı tonajlarda kurgulanabilir."),
      faq("Sıvı gübre tesisi ayrı mı planlanmalıdır?", "Evet, reaktör-tank ağırlıklı proses olduğu için granül hatlardan farklı planlanır."),
      faq("Gübre tesisi kurulumu ne kadar sürer?", "Kapsama, ekipman ölçeğine ve saha hazırlığına göre değişir."),
    ],
    relatedLinks: [
      { title: "Gübre Tesisi Kurulumu Hizmeti", description: "Kurulum hizmet kapsamını doğrudan inceleyin.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "Organomineral Gübre Tesisi", description: "Organomineral hat özelindeki çözüm yaklaşımını görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "Granül Gübre Üretim Süreci", description: "Kurulum kararının dayandığı proses akışını açın.", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "Gübre Üretim Hattı", description: "Hat mimarisini bölüm bölüm inceleyin.", href: "/kutuphane/blog/gubre-uretim-hatti" },
      { title: "Tambur Hesapları", description: "Kurulum öncesi tambur ve termal hesapları programla değerlendirin.", href: "/programlar?modal=tambur-kapasite-hesabi" },
      { title: "İletişim", description: "Saha verileriniz için teknik kurulum değerlendirmesi talep edin.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "gubre-uretim-hatti",
    title: "Gübre Üretim Hattı",
    badgeLabel: "Gübre Tesisi",
    metaTitle:
      "Gübre Üretim Hattı | Dozajlama, Karıştırma, Granülasyon ve Paketleme",
    description:
      "Gübre üretim hattında kullanılan hammadde besleme, dozajlama, mikser, granülasyon tamburu, kurutma, soğutma, eleme, kaplama ve paketleme sistemlerini inceleyin.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/gubre-uretim-hatti",
    openGraphTitle: "Gübre Üretim Hattı",
    openGraphDescription:
      "Gübre üretim hattını hammadde kabulden paketlemeye kadar teknik olarak inceleyin.",
    heroDescription:
      "Gübre üretim hattı; hammaddenin tesise kabulünden paketli son ürüne kadar tüm proses adımlarını bir araya getiren entegre sistemdir. Her makinenin kapasitesi ve çalışma şekli, hattın genel performansını etkiler.",
    readingTime: "10-12 dk",
    heroTopic: "Hammadde akışı, kapasite dengesi ve entegre hat mimarisi",
    heroCtaLabel: "Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar?modal=tambur-kapasite-hesabi",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Gübre üretim hattı tek bir makineye değil, makinalar arası kapasite dengesine dayanır. Hat içindeki en zayıf veya en yavaş ana ekipman, toplam kapasiteyi aşağı çeker.",
      "Bu nedenle silo-bunker, dozaj, mikser, granülasyon, kurutma, soğutma, eleme ve paketleme bölümleri ayrı ayrı değil; aynı akış içinde değerlendirilmelidir.",
    ],
    flowTitle: "Standart Granül Gübre Hattı",
    flowSteps: [
      "Hammadde kabul",
      "Depolama",
      "Dozajlama",
      "Karıştırma",
      "Granülasyon",
      "Kurutma",
      "Soğutma",
      "Eleme",
      "Kaplama / paketleme",
    ],
    flowNote:
      "Hat kapasitesi, teorik olarak en güçlü ekipmanla değil; proses zincirindeki en düşük kapasiteli ana makineyle sınırlanır.",
    sections: [
      section("Gübre üretim hattı nedir?", {
        paragraphs: [
          "Gübre üretim hattı, hammadde girişinden son ürün sevkiyatına kadar her akış adımını senkronize eden entegre sistemdir. Hat içindeki makineler farklı kapasite ve görevlerde olsa da aynı ürün hedefini paylaşır.",
        ],
      }),
      section("Hattın ana bölümleri", {
        paragraphs: [
          "Depolama bölümü hammaddeyi tutar, dozajlama reçeteyi belirler, mikser homojenliği kurar, tambur sistemleri granülasyonu ve termal işlemi üstlenir, paketleme ise hattı ticari ürüne dönüştürür.",
        ],
        table: table(
          "Gübre Üretim Hattı Makine Tablosu",
          ["Hat Bölümü", "Makine", "Görev"],
          [
            ["Depolama", "Silo/bunker", "Hammadde tutma"],
            ["Dozajlama", "Tartımlı konveyör", "Reçete kontrolü"],
            ["Karıştırma", "Mikser", "Homojen karışım"],
            ["Granülasyon", "Granülatör tamburu", "Granül form"],
            ["Kurutma", "Kurutma tamburu", "Nem kontrolü"],
            ["Soğutma", "Soğutma tamburu", "Sıcaklık kontrolü"],
            ["Eleme", "Döner/vibrasyonlu elek", "Sınıflandırma"],
            ["Paketleme", "Torbalama", "Son ürün"],
          ],
        ),
      }),
      section("Kapasite dengesi neden önemlidir?", {
        paragraphs: [
          "Hattın kapasitesi tüm makinelerin nominal değerlerinin toplamı değildir. Sistemi gerçekte, ürün akışında darboğaz oluşturan en düşük kapasiteli ana ekipman belirler.",
        ],
        formulas: [
          formula("Hat Kapasitesi", "Hat kapasitesi = En düşük kapasiteli ana ekipmanın kapasitesi"),
        ],
      }),
      section("Tambur sistemleri, kurutma ve paketleme", {
        paragraphs: [
          "Granül ve organomineral hatlarda tambur sistemleri hattın en kritik bölümüdür. Kurutma ve soğutma zayıfsa paketleme ne kadar iyi olursa olsun ürün ticari sorun çıkarabilir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Gübre Üretim Hattı Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Hat kapasitesi", "Makine boyutlarını ve akış hızını belirler."],
        ["Reçete hassasiyeti", "Dozaj ve silo yapısını etkiler."],
        ["Granülasyon tipi", "Tambur ve recycle yapısını belirler."],
        ["Nem yükü", "Kurutma tarafını büyütür."],
        ["Paketleme hedefi", "Son bölümün kapasite dengesini belirler."],
        ["Otomasyon seviyesi", "Bütün hattın eşgüdümünü etkiler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Hat Tasarım Hataları",
      ["Hata", "Sonuç"],
      [
        ["Makinaları ayrı ayrı seçmek", "Hat dengesi bozulur"],
        ["Dozaj ve mikseri küçümsemek", "Reçete hataları oluşur"],
        ["Kurutma ve soğutmayı paketlemeden bağımsız düşünmek", "Son ürün kalitesi düşer"],
        ["Paketleme hattını küçük seçmek", "Darboğaz oluşur"],
        ["Aspirasyon ve filtreyi geç düşünmek", "Saha tozu ve emisyon sorunu büyür"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina gübre üretim hattını bölümler toplamı olarak değil; akış dengesi, kapasite senkronizasyonu ve bakım erişimi üzerinden okur.",
      "Bu sayede teklif aşamasında görünmeyen darboğazlar daha erken fark edilir.",
    ],
    approachBullets: [
      "Depolama ve dozaj dengesi",
      "Granülasyon ve tambur entegrasyonu",
      "Kurutma-soğutma uyumu",
      "Elek ve recycle planı",
      "Paketleme ve sevkiyat",
      "Aspirasyon ve otomasyon",
    ],
    faqs: [
      faq("Gübre üretim hattı hangi bölümlerden oluşur?", "Depolama, dozajlama, karıştırma, granülasyon, kurutma, soğutma, eleme ve paketleme bölümlerinden oluşur."),
      faq("Hattın kapasitesi nasıl belirlenir?", "En düşük kapasiteli ana ekipman ve proses akışına göre belirlenir."),
      faq("Dozajlama neden önemlidir?", "Reçete doğruluğu ve homojen kalite için kritiktir."),
      faq("Tambur sistemleri nerede kullanılır?", "Granülasyon, kurutma, soğutma ve bazı kaplama aşamalarında kullanılır."),
      faq("Paketleme hattı kapasiteyi etkiler mi?", "Evet; son aşama yetersizse tüm üretim hattı yavaşlar."),
    ],
    relatedLinks: [
      { title: "Gübre Tesisi Kurulumu", description: "Hat tasarımını yatırım ve montaj perspektifiyle görün.", href: "/kutuphane/blog/gubre-tesisi-kurulumu" },
      { title: "Granülasyon Prosesi", description: "Hattın granül oluşturan çekirdek bölümünü açın.", href: "/kutuphane/blog/granulasyon-prosesi" },
      { title: "Gübre Kurutma ve Soğutma Prosesi", description: "Termal bölümün hat dengesine etkisini inceleyin.", href: "/kutuphane/blog/gubre-kurutma-ve-sogutma-prosesi" },
      { title: "Tambur Sistemleri", description: "Hat içinde kullanılan döner sistem ailesini görün.", href: "/makinalar-ekipman/tambur-sistemleri" },
      { title: "Paketleme ve Dolum Sistemleri", description: "Hat sonu ekipmanlarını ürün grubuna göre inceleyin.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "İletişim", description: "Hat kapasitesi ve ürün hedefiniz için teknik görüşme alın.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "gubre-kurutma-ve-sogutma-prosesi",
    title: "Gübre Kurutma ve Soğutma Prosesi",
    badgeLabel: "Gübre Tesisi",
    metaTitle:
      "Gübre Kurutma ve Soğutma Prosesi | Nem, Sıcaklık ve Ürün Stabilitesi",
    description:
      "Granül ve organomineral gübre üretiminde kurutma ve soğutma prosesi; ürün nemi, sıcaklığı, kurutma tamburu, soğutma tamburu, fan, siklon ve filtre sistemiyle nasıl yönetilir?",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/gubre-kurutma-ve-sogutma-prosesi",
    openGraphTitle: "Gübre Kurutma ve Soğutma Prosesi",
    openGraphDescription:
      "Gübre kurutma ve soğutma hattında nem, sıcaklık, fan ve filtre ilişkisini inceleyin.",
    heroDescription:
      "Gübre üretiminde kurutma ve soğutma prosesi; granül ürünün paketleme öncesi uygun nem ve sıcaklığa getirilmesini sağlar. Kurutma yetersiz olursa ürün torbada bozulabilir; soğutma yetersiz olursa paket içinde terleme ve topaklanma oluşabilir.",
    readingTime: "10-12 dk",
    heroTopic: "Nem kontrolü, sıcaklık düşürme ve paketleme kararlılığı",
    heroCtaLabel: "Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar?modal=tambur-kapasite-hesabi",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Granül ürünün ticari başarısı çoğu zaman kurutma ve soğutma bölümünde belirlenir. Ürün yeterince kurutulmazsa torbada bozulabilir; yeterince soğutulmazsa paket içinde terleme görülebilir.",
      "Bu yüzden /kutuphane/blog/kurutma-tamburu-hesaplama, /kutuphane/blog/sogutma-tamburu-nasil-calisir ve bu sayfadaki gübre prosesi birlikte okunmalıdır.",
    ],
    flowTitle: "Gübre Kurutma ve Soğutma Prosesi",
    flowSteps: [
      "Granülatör çıkışı nemli ürün",
      "Kurutma tamburu",
      "Brülör / sıcak hava",
      "Siklon + filtre",
      "Kurutulmuş ürün",
      "Soğutma tamburu",
      "Elek",
      "Paketleme",
    ],
    flowNote:
      "Kurutma ve soğutma hattı granül ürünün son nem ve sıcaklık davranışını birlikte yönettiği için paketlemeye doğrudan bağlanır.",
    sections: [
      section("Gübre üretiminde kurutma neden gereklidir?", {
        paragraphs: [
          "Granülasyon sonrası ürün genellikle paketlemeye uygun nemde değildir. Kurutma tamburu granül ürünün raf stabilitesi ve depolanabilirliği için gerekli rutubet düşüşünü sağlar.",
        ],
      }),
      section("Kurutma tamburu ve nem kontrolü", {
        paragraphs: [
          "Kurutma yükü, ürün nemi ve hedef çıkış nemi farkından doğar. Nem hesabı doğru yapılmadığında brülör ve fan tarafı da yanlış seçilir.",
        ],
        formulas: [
          formula(
            "Buharlaşacak Su",
            "Buharlaşacak su = Yaş ürün kapasitesi - Hedef nemde çıkış kapasitesi",
          ),
        ],
      }),
      section("Soğutma tamburu ve ürün sıcaklığı", {
        paragraphs: [
          "Soğutma tamburu, kurutma sonrası sıcak çıkan granülün paketleme ve eleme öncesi uygun sıcaklığa gelmesini sağlar. Yetersiz soğutma torbada yoğuşma ve topaklanma doğurabilir.",
        ],
        formulas: [
          formula(
            "Soğutma Yükü",
            "Soğutma yükü = Kapasite × 1000 × Özgül ısı × Sıcaklık farkı / 3600",
          ),
        ],
      }),
      section("Fan, siklon ve filtre sistemleri", {
        paragraphs: [
          "Kurutma tarafındaki sıcak ve tozlu hava doğru emilmezse hem ürün kalitesi hem emisyon performansı zarar görür. Bu nedenle fan, siklon ve filtre birlikte boyutlandırılmalıdır.",
        ],
      }),
      section("Gübre kurutma-soğutma hatası tablosu", {
        table: table(
          "Tipik Problemler",
          ["Problem", "Muhtemel Sebep"],
          [
            ["Ürün nemli çıkıyor", "Brülör yetersiz, kalış süresi kısa"],
            ["Ürün torbada terliyor", "Soğutma yetersiz"],
            ["Granül kırılıyor", "Devir yüksek, iç yapı agresif"],
            ["Toz fazla", "Kurutma veya eleme hatası"],
            ["Filtre tıkanıyor", "Toz yükü yüksek, ön siklon yetersiz"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Kurutma ve Soğutma Sürecinde Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Giriş nemi", "Kurutma yükünü belirler."],
        ["Hedef çıkış nemi", "Paketleme stabilitesini etkiler."],
        ["Ürün sıcaklığı", "Soğutma ihtiyacını belirler."],
        ["Fan debisi", "Gaz akışı ve nem uzaklaştırmayı etkiler."],
        ["Toz yükü", "Siklon ve filtre seçimini değiştirir."],
        ["Eleme entegrasyonu", "Uygun ürün ayrımını tamamlar."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Tasarım Hataları",
      ["Hata", "Sonuç"],
      [
        ["Kurutma yükünü küçümsemek", "Ürün nemli kalır"],
        ["Soğutmayı ihmal etmek", "Paket içinde terleme olur"],
        ["Fan ve filtreyi küçük seçmek", "Gaz akışı dengesizleşir"],
        ["İç kanat yapısını ürüne göre seçmemek", "Granül kırılabilir"],
        ["Elek entegrasyonunu geç planlamak", "Tane dağılımı bozulur"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina gübre kurutma ve soğutma prosesini tek termal blok olarak değil; ürün nemi, sıcaklığı, toz yükü ve paketleme hedefiyle birlikte değerlendirir.",
      "Bu yaklaşım, granül ürünün sahada daha stabil ve daha ticari davranmasını sağlar.",
    ],
    approachBullets: [
      "Nem hedefi ve brülör yükü",
      "Soğutma sıcaklık farkı",
      "Fan-siklon-filtre dengesi",
      "Tambur iç yapı seçimi",
      "Elek ve paketleme entegrasyonu",
      "Toz ve ürün kaybı kontrolü",
    ],
    faqs: [
      faq("Gübre neden kurutulur?", "Paketleme, depolama ve ürün stabilitesi için uygun nem seviyesine getirilir."),
      faq("Soğutma tamburu neden gereklidir?", "Sıcak granülün paketleme öncesi terleme yapmadan soğumasını sağlar."),
      faq("Gübre kurutma nem hesabı nasıl yapılır?", "Giriş ve hedef çıkış nemine göre buharlaşacak su hesaplanır."),
      faq("Kurutma sonrası elek gerekir mi?", "Granül boyutu ve recycle yönetimi için çoğu hatta gerekir."),
      faq("Paketleme öncesi ürün sıcaklığı kaç olmalıdır?", "Ürün, torbada terleme yapmayacak kadar düşürülmelidir; kesin değer prosese göre belirlenir."),
    ],
    relatedLinks: [
      { title: "Kurutma Tamburu Kapasite Hesabı", description: "Nem ve ısı yükünü teknik formüllerle inceleyin.", href: "/kutuphane/blog/kurutma-tamburu-hesaplama" },
      { title: "Soğutma Tamburu Nasıl Çalışır?", description: "Soğutma bölümünü detay teknik makaleyle tamamlayın.", href: "/kutuphane/blog/sogutma-tamburu-nasil-calisir" },
      { title: "Granül Gübre Üretim Süreci", description: "Kurutma-soğutma bölümünün bağlı olduğu ana hat akışını görün.", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "Tambur Sistemleri", description: "Kurutma ve soğutma tamburlarını ürün bazında inceleyin.", href: "/makinalar-ekipman/tambur-sistemleri" },
      { title: "Tambur Hesapları", description: "Kurutma ve soğutma tarafını programlarla değerlendirin.", href: "/programlar?modal=tambur-kapasite-hesabi" },
      { title: "İletişim", description: "Ürün nem ve sıcaklık hedefiniz için teknik görüşme alın.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "gubre-paketleme-hatti",
    title: "Gübre Paketleme Hattı",
    badgeLabel: "Gübre Tesisi",
    metaTitle:
      "Gübre Paketleme Hattı | Torbalama, Big Bag, Tartım ve Sevkiyat Sistemi",
    description:
      "Gübre paketleme hattında açık ağız torbalama, big bag dolum, tartım sistemi, konveyör, dikiş/kapatma, etiketleme, toz kontrol ve sevkiyat ekipmanlarını inceleyin.",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/gubre-paketleme-hatti",
    openGraphTitle: "Gübre Paketleme Hattı",
    openGraphDescription:
      "Gübre paketleme hattında torbalama, tartım, toz kontrolü ve sevkiyat adımlarını inceleyin.",
    heroDescription:
      "Gübre paketleme hattı, üretim sürecinin ticari ürüne dönüştüğü son aşamadır. Tartım doğruluğu, torba kalitesi, toz kontrolü, paketleme hızı ve sevkiyat düzeni ürünün pazara sunum kalitesini belirler.",
    readingTime: "10-12 dk",
    heroTopic: "Torbalama, big bag, tartım doğruluğu ve sevkiyat hazırlığı",
    heroCtaLabel: "Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar?modal=tambur-kapasite-hesabi",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Paketleme hattı çoğu projede en son düşünülse de ticari kaliteyi doğrudan belirleyen bölümdür. Uygun torbalama, tartım ve toz kontrolü olmadan iyi bir granül bile pazarda sorun çıkarabilir.",
      "Bu nedenle paketleme kapasitesi, ana üretim hattından bağımsız seçilmemeli; granül debisi ve sevkiyat modeliyle birlikte planlanmalıdır.",
    ],
    flowTitle: "Gübre Paketleme Hattı",
    flowSteps: [
      "Elek / soğutma çıkışı",
      "Ara stok bunkeri",
      "Tartım kantarı",
      "Açık ağız torbalama",
      "Dikiş / kapatma",
      "Konveyör",
      "Paletleme",
      "Sevkiyat",
    ],
    flowNote:
      "Paketleme hattı, üretim kapasitesi ile lojistik hedef arasında tampon görevi görür; bu nedenle ara stok ve tartım bölümü kritik öneme sahiptir.",
    sections: [
      section("Açık ağız torbalama ve big bag dolum", {
        paragraphs: [
          "Açık ağız torbalama, yaygın granül gübre uygulamalarında standart çözümdür. Big bag dolum ise daha büyük sevkiyat ve dökme ürün lojistiği gereken hatlarda öne çıkar.",
        ],
      }),
      section("Tartım hassasiyeti", {
        paragraphs: [
          "Paket başına doğru dolum, hem müşteri memnuniyeti hem yasal doğruluk açısından önemlidir. Tartım sistemi yavaş veya dengesizse tüm hatın verimi düşebilir.",
        ],
        formulas: [
          formula(
            "Saatlik Torba Adedi",
            "Saatlik torba adedi = Saatlik kapasite (kg/saat) / Torba ağırlığı (kg)",
            [
              "Örnek: 10 ton/saat = 10.000 kg/saat",
              "50 kg torba için: 10.000 / 50 = 200 torba/saat",
            ],
          ),
        ],
      }),
      section("Toz kontrolü ve kapasite dengesi", {
        paragraphs: [
          "Paketleme hattında oluşan toz, hem operatör güvenliği hem ürün kaybı açısından önemlidir. Ara stok bunkeri, torbalama noktası ve kapatma istasyonunda lokal aspirasyon gerekebilir.",
        ],
        table: table(
          "Paketleme Hattı Kapasite Yaklaşımı",
          ["Kapasite", "50 kg torba/saat", "Yorum"],
          [
            ["5 ton/saat", "100 torba/saat", "Orta kapasite"],
            ["10 ton/saat", "200 torba/saat", "Yüksek kapasite"],
            ["15 ton/saat", "300 torba/saat", "Otomasyon önemli"],
          ],
        ),
      }),
    ],
    selectionCriteria: table(
      "Gübre Paketleme Hattında Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Torba ağırlığı", "Saatlik paket adedini belirler."],
        ["Saatlik kapasite", "Torbalama makinesi ölçeğini belirler."],
        ["Toz yükü", "Aspirasyon ve filtre ihtiyacını etkiler."],
        ["Big bag ihtiyacı", "Ek dolum istasyonu gerektirir."],
        ["Paletleme düzeni", "Sevkiyat verimini etkiler."],
        ["Tartım doğruluğu", "Ticari kaliteyi belirler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Paketleme Hatası",
      ["Hata", "Sonuç"],
      [
        ["Paketleme kapasitesini düşük seçmek", "Hat darboğazı oluşur"],
        ["Tartım hassasiyetini düşük almak", "Paket sapması oluşur"],
        ["Toz kontrolünü ihmal etmek", "Saha kirlenir ve ürün kaybı artar"],
        ["Big bag ihtiyacını sonradan düşünmek", "Ek yatırım doğar"],
        ["Paletleme akışını planlamamak", "Sevkiyat aksar"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina gübre paketleme hattını, granül kalitesi kadar sevkiyat ritmini de etkileyen bir sistem olarak ele alır. Bu nedenle tartım, torbalama, toz kontrolü ve konveyör akışı birlikte değerlendirilir.",
      "Paketleme bölümü ana üretim hattıyla uyumlu seçildiğinde saha darboğazları ciddi ölçüde azalır.",
    ],
    approachBullets: [
      "Tartım ve torbalama hızı",
      "Big bag opsiyonu",
      "Lokal toz kontrolü",
      "Ara stok bunkeri tasarımı",
      "Konveyör ve paletleme akışı",
      "Operatör ergonomisi",
    ],
    faqs: [
      faq("Gübre paketleme hattında hangi makineler vardır?", "Ara stok bunkeri, tartım, torbalama, dikiş/kapatma, konveyör ve gerekirse big bag dolum ekipmanları bulunur."),
      faq("10 ton/saat hat kaç torba doldurur?", "50 kg torba için teorik olarak yaklaşık 200 torba/saat doldurur."),
      faq("Big bag dolum ne zaman gerekir?", "Dökme lojistik veya yüksek tonajlı sevkiyat hedeflerinde tercih edilir."),
      faq("Paketleme hattında toz nasıl kontrol edilir?", "Lokal aspirasyon ve filtre sistemleriyle kontrol edilir."),
      faq("Tartım hassasiyeti neden önemlidir?", "Ticari doğruluk, müşteri memnuniyeti ve ürün standardı için önemlidir."),
    ],
    relatedLinks: [
      { title: "Paketleme ve Dolum Sistemleri", description: "Paketleme makine ailesini ürün sayfalarıyla inceleyin.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "Granül Gübre Üretim Süreci", description: "Paketleme hattının bağlı olduğu ana üretim akışını görün.", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "Gübre Üretim Hattı", description: "Paketleme bölümünü tüm hat içinde değerlendirin.", href: "/kutuphane/blog/gubre-uretim-hatti" },
      { title: "Taşıma Ekipmanları", description: "Konveyör ve taşıma tarafını ürün bazında görün.", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { title: "Granül Gübre Üretim Tesisi", description: "Paketleme seviyesiyle birlikte hat tasarımını hizmet düzeyinde inceleyin.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "İletişim", description: "Paketleme hızınız ve ambalaj tipiniz için teknik değerlendirme alın.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "granulasyon-prosesi",
    title: "Granülasyon Prosesi",
    badgeLabel: "Gübre Tesisi",
    metaTitle: "Granülasyon Prosesi | Toz Hammaddeden Granül Ürün Üretimi",
    description:
      "Granülasyon prosesi; toz hammadde, bağlayıcı, recycle, nem, granülasyon tamburu, kurutma, eleme ve ürün kalite kriterleriyle nasıl yönetilir?",
    canonical: "https://www.promakina.com.tr/kutuphane/blog/granulasyon-prosesi",
    openGraphTitle: "Granülasyon Prosesi",
    openGraphDescription:
      "Granülasyon prosesinde bağlayıcı, recycle, tambur hareketi ve kurutma ilişkisini inceleyin.",
    heroDescription:
      "Granülasyon prosesi; toz veya ince taneli hammaddenin bağlayıcı, nem, mekanik yuvarlanma ve recycle desteğiyle belirli tane boyutunda granül ürüne dönüştürülmesidir.",
    readingTime: "10-12 dk",
    heroTopic: "Bağlayıcı, recycle, granül büyümesi ve ürün kalite kontrolü",
    heroCtaLabel: "Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar?modal=tambur-kapasite-hesabi",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Granülasyon prosesi, gübre hatlarında ürünün ticari forma dönüştüğü çekirdek aşamadır. Burada ürün yalnız yuvarlanmaz; aynı zamanda çekirdeklenir, büyür, sertleşir ve elek kriterlerine yaklaşır.",
      "Bu nedenle granülasyon; bağlayıcı, nem, recycle ve tambur hareketinin birlikte yönetildiği kontrollü bir proses olarak düşünülmelidir.",
    ],
    flowTitle: "Granülasyon Prosesi Akışı",
    flowSteps: [
      "Toz hammadde",
      "Dozajlama",
      "Karıştırma",
      "Bağlayıcı ilavesi",
      "Granülasyon tamburu",
      "Kurutma",
      "Eleme",
      "Recycle",
      "Uygun granül ürün",
    ],
    flowNote:
      "Granülasyon kalitesi çoğu zaman granülatör tamburu ile recycle hattının birlikte çalışmasına bağlıdır.",
    sections: [
      section("Granül oluşum mekanizması", {
        bullets: [
          "Islanma",
          "Çekirdek oluşumu",
          "Granül büyümesi",
          "Yuvarlanma",
          "Sertleşme",
          "Eleme",
        ],
        paragraphs: [
          "Granülasyonun bu temel aşamaları, tambur devri ve bağlayıcı dağılımı doğru kurulmadığında birbirini desteklemez ve ürün tozlu veya topaklı çıkabilir.",
        ],
      }),
      section("Bağlayıcı ve nem kontrolü", {
        paragraphs: [
          "Bağlayıcı, toz partiküllerin çekirdek granüllere tutunmasını sağlar. Nem fazla olduğunda topaklaşma; az olduğunda ise yüksek toz oranı görülebilir.",
        ],
        formulas: [
          formula(
            "Bağlayıcı Debisi",
            "Bağlayıcı debisi = Kapasite × Bağlayıcı dozajı",
          ),
        ],
      }),
      section("Recycle ve tane boyutu kontrolü", {
        paragraphs: [
          "Elek altı ve elek üstü ürünlerin kontrollü geri dönüşü, granül çekirdeği oluşumunu ve ürün tane dağılımını dengeler. Recycle oranı düşük kalırsa çekirdeklenme zayıflayabilir.",
        ],
      }),
      section("Granülasyon tamburu tasarımı", {
        paragraphs: [
          "Granülasyon tamburu, bağlayıcı püskürtme, iç yapı ve residence time yönünden kurutma tamburundan farklıdır. Daha detaylı teknik değerlendirme için /kutuphane/blog/granulator-tamburu-secimi sayfası doğrudan referanstır.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Granülasyon Prosesi Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Bağlayıcı dozu", "Granül çekirdeği ve yüzey davranışını belirler."],
        ["Recycle oranı", "Tane dağılımını ve çekirdek oluşumunu etkiler."],
        ["Tambur devri", "Yuvarlanma ve kırılma davranışını belirler."],
        ["Nem", "Topaklanma veya toz riskini etkiler."],
        ["Elek açıklığı", "Uygun granül fraksiyonunu ayırır."],
        ["Kurutma şiddeti", "Granül çatlaması ve sertliğini etkiler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Granülasyon Hataları",
      ["Hata", "Sonuç"],
      [
        ["Bağlayıcı fazla", "Topaklanma"],
        ["Bağlayıcı az", "Toz oranı yüksek"],
        ["Recycle düşük", "Çekirdek oluşumu zayıf"],
        ["Devir yüksek", "Kırılma veya savrulma"],
        ["Kurutma agresif", "Granül çatlaması"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina granülasyon prosesini yalnız tambur boyutlandırması olarak değil; bağlayıcı sistemi, recycle hattı, kurutma-soğutma entegrasyonu ve ürün kalite hedefiyle birlikte ele alır.",
      "Bu yaklaşım, granül çap dağılımı ve toz oranını daha erken aşamada yönetilebilir hale getirir.",
    ],
    approachBullets: [
      "Bağlayıcı sistemi tasarımı",
      "Recycle hattı optimizasyonu",
      "Granülatör tamburu seçimi",
      "Kurutma ve eleme entegrasyonu",
      "Granül kalite kriterleri",
      "Proses otomasyonu",
    ],
    faqs: [
      faq("Granülasyon prosesi nedir?", "Toz veya ince taneli hammaddenin granül forma dönüştürüldüğü prosestir."),
      faq("Bağlayıcı neden kullanılır?", "Partiküllerin birbirine tutunmasını ve granül büyümesini destekler."),
      faq("Recycle ne işe yarar?", "Granül çekirdeği oluşumunu ve tane dağılımını iyileştirir."),
      faq("Granül çapı nasıl kontrol edilir?", "Bağlayıcı, tambur devri, recycle oranı ve elek sistemiyle kontrol edilir."),
      faq("Granülasyon tamburu şart mıdır?", "Birçok granül gübre uygulamasında ana ekipman olarak büyük avantaj sağlar."),
    ],
    relatedLinks: [
      { title: "Granülatör Tamburu Seçimi", description: "Granülasyonun ana ekipmanını detay teknik rehberle inceleyin.", href: "/kutuphane/blog/granulator-tamburu-secimi" },
      { title: "Granül Gübre Üretim Süreci", description: "Granülasyonu tüm hat akışı içinde görün.", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "Organomineral Gübre Makinaları", description: "Granülasyonun bağlı olduğu makine ailesini inceleyin.", href: "/kutuphane/blog/organomineral-gubre-makinalari" },
      { title: "Tambur Hesapları", description: "Tambur davranışını ve kapasiteyi programlarla değerlendirin.", href: "/programlar?modal=tambur-kapasite-hesabi" },
      { title: "Granül Gübre Üretim Tesisi", description: "Granülasyon odaklı hizmet yapısını görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "İletişim", description: "Bağlayıcı, reçete ve kapasite verinizle teknik görüşme alın.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "organomineral-gubre-makinalari",
    title: "Organomineral Gübre Makinaları",
    badgeLabel: "Gübre Tesisi",
    metaTitle:
      "Organomineral Gübre Makinaları | Dozajlama, Granülasyon, Kurutma ve Paketleme",
    description:
      "Organomineral gübre üretiminde kullanılan hammadde hazırlama, dozajlama, mikser, granülasyon tamburu, kurutma, soğutma, eleme, kaplama ve paketleme makinelerini inceleyin.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/organomineral-gubre-makinalari",
    openGraphTitle: "Organomineral Gübre Makinaları",
    openGraphDescription:
      "Organomineral gübre üretiminde kullanılan ana makineleri ve görevlerini inceleyin.",
    heroDescription:
      "Organomineral gübre makinaları, organik hammadde ile mineral besin kaynaklarının kontrollü şekilde karıştırılıp granül veya paketli ürün haline getirilmesini sağlayan proses ekipmanlarıdır.",
    readingTime: "10-12 dk",
    heroTopic: "Dozaj, granülasyon, kurutma, eleme ve paketleme ekipmanları",
    heroCtaLabel: "Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar?modal=tambur-kapasite-hesabi",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Organomineral gübre hatlarında doğru makine seçimi, yalnız kapasite değil ürün davranışı için de kritiktir. Organik hammadde ve mineral fraksiyon birlikte işlendiği için standart mineral hatlara göre farklı besleme ve kurutma kararları gerekebilir.",
      "Bu yüzden makine seçimi, /sektorler/gubre-ve-granulasyon-tesisleri ve /kutuphane/blog/organomineral-gubre-tesisi-maliyeti ile birlikte okunmalıdır.",
    ],
    flowTitle: "Organomineral Gübre Makine Akışı",
    flowSteps: [
      "Organik hammadde",
      "Mineral hammadde",
      "Dozajlama",
      "Mikser",
      "Granülasyon",
      "Kurutma",
      "Soğutma",
      "Eleme",
      "Kaplama / paketleme",
    ],
    flowNote:
      "Makine zinciri, organik ve mineral hammaddelerin birlikte kararlı işlenmesini sağlayacak şekilde planlanmalıdır.",
    sections: [
      section("Organomineral gübre üretiminde kullanılan ana makineler", {
        table: table(
          "Ana Makine Listesi",
          ["Makine", "Görev", "Önemi"],
          [
            ["Hammadde bunkeri", "Organik/mineral stok", "Sürekli besleme"],
            ["Dozaj sistemi", "Reçete kontrolü", "Formül doğruluğu"],
            ["Mikser", "Homojenizasyon", "Ürün kalitesi"],
            ["Granülasyon tamburu", "Granül oluşumu", "Ticari form"],
            ["Kurutma tamburu", "Nem düşürme", "Raf stabilitesi"],
            ["Soğutma tamburu", "Sıcaklık düşürme", "Paketleme kalitesi"],
            ["Elek", "Sınıflandırma", "Granül çapı"],
            ["Kaplama tamburu", "Yüzey işlemi", "Toz azaltma"],
            ["Torbalama", "Paketleme", "Sevkiyat"],
          ],
        ),
        paragraphs: [
          "Bu ekipmanlar tek başına değil, hat içi akış dengesine göre değerlendirilmelidir. Bir bölüm zayıf kaldığında tüm sistem verimi düşer.",
        ],
      }),
      section("Organik hammadde hazırlama ve mineral dozajlama", {
        paragraphs: [
          "Organik fraksiyonun nemi ve yoğunluğu değişken olabildiği için bunker, helezon veya konveyör kararları bu davranışa göre alınmalıdır. Mineral tarafında ise tartımlı dozajlama reçete doğruluğunu belirler.",
        ],
      }),
      section("Tambur sistemleri ve paketleme", {
        paragraphs: [
          "Granülasyon, kurutma ve soğutma tamburları organomineral hattın omurgasını oluşturur. Hat sonunda paketleme ve big bag çözümleri kapasiteye göre şekillenir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Makine Seçimi Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Organik hammadde nemi", "Besleme ve kurutma sistemini etkiler."],
        ["Reçete yapısı", "Dozaj ve silo ihtiyacını belirler."],
        ["Granül hedefi", "Tambur ve elek kararını etkiler."],
        ["Kurutma yükü", "Brülör ve hava sistemini büyütür."],
        ["Paketleme tipi", "Torbalama / big bag seçimini belirler."],
        ["Toz yükü", "Aspirasyon ve filtre ihtiyacını etkiler."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Makine Seçimi Hataları",
      ["Hata", "Sonuç"],
      [
        ["Organik hammaddenin davranışını küçümsemek", "Besleme ve bunker sorunu"],
        ["Dozaj hassasiyetini düşük bırakmak", "Reçete sapması"],
        ["Granülasyon ve kurutmayı ayrı düşünmek", "Kararsız ürün kalitesi"],
        ["Elek ve recycle'ı zayıf seçmek", "Granül çapı bozulur"],
        ["Paketleme hızını küçük seçmek", "Hat darboğazı oluşur"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina organomineral gübre makinalarını ürün bazlı görev listesi olarak değil; proses içindeki etkileşimleriyle birlikte değerlendirir.",
      "Bu yaklaşım, makine listesini teklif formatından çıkarıp gerçek hat tasarımına dönüştürür.",
    ],
    approachBullets: [
      "Bunker ve dozaj planı",
      "Granülasyon tamburu kurgusu",
      "Kurutma-soğutma dengesi",
      "Elek ve recycle planı",
      "Paketleme ve big bag entegrasyonu",
      "Toz toplama ve otomasyon",
    ],
    faqs: [
      faq("Organomineral gübre üretiminde hangi makineler vardır?", "Bunker, dozaj, mikser, granülasyon, kurutma, soğutma, elek, kaplama ve paketleme makineleri bulunur."),
      faq("Granülasyon tamburu gerekli midir?", "Birçok organomineral hat için granül kaliteyi belirleyen ana ekipmandır."),
      faq("Kurutma tamburu neden kullanılır?", "Ürünün nemini düşürerek depolama ve paketleme stabilitesi sağlar."),
      faq("Elek ve recycle hattı ne işe yarar?", "Uygun granül boyutunu ayırır ve geri dönüşle granül kaliteyi destekler."),
      faq("Organomineral gübre paketleme nasıl yapılır?", "Torbalama veya big bag sistemleriyle, uygun sıcaklık ve nem seviyesinde yapılır."),
    ],
    relatedLinks: [
      { title: "Organomineral Gübre Tesisi", description: "Hizmet sayfasında bu makine zincirinin tesis çözümünü görün.", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { title: "Organomineral Gübre Tesisi Maliyeti", description: "Makine seçiminin yatırım etkisini inceleyin.", href: "/kutuphane/blog/organomineral-gubre-tesisi-maliyeti" },
      { title: "Granülatör Tamburu Seçimi", description: "Granül oluşumunu belirleyen tambur tasarımını açın.", href: "/kutuphane/blog/granulator-tamburu-secimi" },
      { title: "Gübre Kurutma ve Soğutma Prosesi", description: "Termal bölümün makine zincirindeki yerini görün.", href: "/kutuphane/blog/gubre-kurutma-ve-sogutma-prosesi" },
      { title: "Tambur Sistemleri", description: "Tambur ürün ailesini makina bazında inceleyin.", href: "/makinalar-ekipman/tambur-sistemleri" },
      { title: "İletişim", description: "Makine seçiminiz için teknik değerlendirme talep edin.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
  page({
    slug: "granul-gubre-tesisi-makine-listesi",
    title: "Granül Gübre Tesisi Makine Listesi",
    badgeLabel: "Gübre Tesisi",
    metaTitle:
      "Granül Gübre Tesisi Makine Listesi | Komple Hat Ekipmanları",
    description:
      "Granül gübre tesisi makine listesi; silo, bunker, dozajlama, mikser, granülasyon tamburu, kurutma, soğutma, elek, recycle, kaplama, filtre ve paketleme ekipmanlarını içerir.",
    canonical:
      "https://www.promakina.com.tr/kutuphane/blog/granul-gubre-tesisi-makine-listesi",
    openGraphTitle: "Granül Gübre Tesisi Makine Listesi",
    openGraphDescription:
      "Granül gübre tesisi için gerekli ana ve yardımcı ekipman listesini teknik sırayla inceleyin.",
    heroDescription:
      "Granül gübre tesisi makine listesi, hammadde kabulünden paketli son ürüne kadar tüm proses adımlarında kullanılan ana ve yardımcı ekipmanları kapsar. Doğru makine listesi, yatırım planlaması ve teklif çalışması için temel dokümandır.",
    readingTime: "10-12 dk",
    heroTopic: "Komple hat ekipmanı, yardımcı sistemler ve kapasiteye göre listeleme",
    heroCtaLabel: "Gübre Tesisi İçin Teklif Al",
    heroCtaHref: "https://wa.me/905320580104",
    heroSecondaryLabel: "Tambur Hesaplarını Aç",
    heroSecondaryHref: "/programlar?modal=tambur-kapasite-hesabi",
    heroLinks: commonHeroLinks,
    introParagraphs: [
      "Granül gübre tesisi için makine listesi hazırlamak, yalnız büyük ekipmanları sıralamak değildir. Yardımcı sistemler, recycle hattı, toz toplama, bağlayıcı sistemi ve otomasyon da aynı liste içinde yer almalıdır.",
      "Eksik liste hazırlanırsa teklif ve yatırım analizi gerçeği yansıtmaz. Bu yüzden makine listesi, proses akışına göre yapılandırılmış teknik bir doküman olarak ele alınmalıdır.",
    ],
    flowTitle: "Granül Gübre Tesisi Makine Sıralaması",
    flowSteps: [
      "Hammadde kabul bunkeri",
      "Silolar / bunkerler",
      "Dozajlama",
      "Mikser",
      "Granülasyon tamburu",
      "Kurutma tamburu",
      "Soğutma tamburu",
      "Elek / recycle",
      "Kaplama / paketleme",
    ],
    flowNote:
      "Makine listesi, üretim hattındaki gerçek sıralamayı ve her aşamada gereken yardımcı sistemleri birlikte göstermelidir.",
    sections: [
      section("Komple granül gübre tesisi makine listesi", {
        table: table(
          "Ana ve Yardımcı Ekipmanlar",
          ["No", "Makine / Sistem", "Görev"],
          [
            ["1", "Hammadde kabul bunkeri", "Ürün kabul"],
            ["2", "Hammadde siloları", "Stoklama"],
            ["3", "Dozaj bunkerleri", "Reçete hazırlık"],
            ["4", "Tartımlı konveyör / helezon", "Hassas besleme"],
            ["5", "Mikser", "Homojen karışım"],
            ["6", "Granülasyon tamburu", "Granül üretimi"],
            ["7", "Bağlayıcı hazırlama tankı", "Sıvı bağlayıcı"],
            ["8", "Nozzle sistemi", "Bağlayıcı püskürtme"],
            ["9", "Kurutma tamburu", "Nem düşürme"],
            ["10", "Brülör / sıcak hava odası", "Isı üretimi"],
            ["11", "Soğutma tamburu", "Ürün soğutma"],
            ["12", "Elek sistemi", "Sınıflandırma"],
            ["13", "Kırıcı", "Elek üstü kırma"],
            ["14", "Recycle konveyörleri", "Geri dönüş"],
            ["15", "Kaplama tamburu", "Ürün kaplama"],
            ["16", "Siklon", "Toz ön ayırma"],
            ["17", "Jet pulse filtre", "Toz toplama"],
            ["18", "Bant konveyörler", "Transfer"],
            ["19", "Kovalı elevatör", "Dikey taşıma"],
            ["20", "Torbalama sistemi", "Paketleme"],
            ["21", "Big bag dolum", "Dökme paketleme"],
            ["22", "Otomasyon panosu", "Kontrol"],
          ],
        ),
      }),
      section("Ana makine grupları", {
        subsections: [
          {
            title: "Hammadde hazırlama",
            paragraphs: ["Bunker, silo ve stok ekipmanları hammadde akışını düzenler."],
          },
          {
            title: "Dozajlama ve karıştırma",
            paragraphs: ["Tartımlı sistem ve mikser reçete doğruluğunu ve homojenliği sağlar."],
          },
          {
            title: "Granülasyon",
            paragraphs: ["Granülasyon tamburu ve nozzle sistemi ticari granül formu üretir."],
          },
          {
            title: "Kurutma ve soğutma",
            paragraphs: ["Tambur kurutma ve soğutma ürün stabilitesini belirler."],
          },
          {
            title: "Eleme ve recycle",
            paragraphs: ["Granül çapını ve geri dönüş akışını kontrol eder."],
          },
          {
            title: "Paketleme",
            paragraphs: ["Torbalama ve big bag ile sevkiyat hazırlanır."],
          },
          {
            title: "Toz toplama ve otomasyon",
            paragraphs: ["Filtre, siklon ve kontrol panoları sistem güvenilirliğini sağlar."],
          },
        ],
      }),
      section("Makine listesi kapasiteye göre nasıl değişir?", {
        table: table(
          "Kapasiteye Göre Yaklaşım",
          ["Kapasite", "Makine yaklaşımı"],
          [
            ["1-3 ton/saat", "Kompakt hat"],
            ["3-8 ton/saat", "Orta kapasiteli entegre hat"],
            ["8-15 ton/saat", "Endüstriyel tam hat"],
            ["15+ ton/saat", "Çoklu ekipman ve yüksek otomasyon"],
          ],
        ),
        paragraphs: [
          "Kapasite büyüdükçe yalnız tamburlar değil, silo sayısı, konveyör kesiti, filtre alanı ve otomasyon seviyesi de değişir.",
        ],
      }),
    ],
    selectionCriteria: table(
      "Makine Listesi Hazırlarken Seçim Kriterleri",
      ["Kriter", "Neden önemlidir?"],
      [
        ["Kapasite", "Makine boyutlarını ve adetlerini belirler."],
        ["Reçete tipi", "Dozaj ve bağlayıcı altyapısını etkiler."],
        ["Granül hedefi", "Granülasyon ve elek seçimini yönlendirir."],
        ["Nem yükü", "Kurutma sistemi büyüklüğünü belirler."],
        ["Paketleme hedefi", "Torbalama ve big bag ihtiyacını değiştirir."],
        ["Otomasyon seviyesi", "Makine listesindeki kontrol elemanlarını artırır."],
      ],
    ),
    mistakes: table(
      "Sık Yapılan Listeleme Hataları",
      ["Hata", "Sonuç"],
      [
        ["Yardımcı ekipmanları unutmak", "Teklif eksik kalır"],
        ["Recycle hattını eklememek", "Ürün kalitesi düşer"],
        ["Toz toplama sistemini yazmamak", "Emisyon problemi"],
        ["Paketlemeyi kapasiteye göre seçmemek", "Hat darboğazı"],
        ["Otomasyonu düşük düşünmek", "İşletme hatası artar"],
      ],
    ),
    approachParagraphs: [
      "Pro Makina granül gübre tesisi için makine listesini, teklif eki olmaktan çıkarıp gerçek proses sırasına göre kurgulanmış bir mühendislik kontrol listesine dönüştürür.",
      "Bu sayede yatırım kararında hangi ekipmanın neden gerekli olduğu daha net görünür.",
    ],
    approachBullets: [
      "Proses sırasına göre ekipman listesi",
      "Yardımcı sistem tamamlama",
      "Kapasiteye göre ölçekleme",
      "Toz toplama ve otomasyon dahil etme",
      "Paketleme ve sevkiyat entegrasyonu",
      "Teklif ve saha planı uyumu",
    ],
    faqs: [
      faq("Granül gübre tesisi için hangi makineler gerekir?", "Silo, dozajlama, mikser, granülasyon, kurutma, soğutma, elek, recycle, kaplama, filtre ve paketleme ekipmanları gerekir."),
      faq("Makine listesi kapasiteye göre değişir mi?", "Evet; makine boyutu, adedi ve otomasyon seviyesi kapasiteye göre değişir."),
      faq("Recycle hattı zorunlu mudur?", "Birçok granül hatta ürün kalitesi için önemli bir bölümdür."),
      faq("Paketleme sistemi listeye dahil edilmeli mi?", "Evet; son ürün akışı açısından temel ekipmandır."),
      faq("Otomasyon panosu gerekli midir?", "Çoğu endüstriyel hatta güvenlik ve kararlılık için gereklidir."),
    ],
    relatedLinks: [
      { title: "Granül Gübre Üretim Süreci", description: "Makine listesinin dayandığı gerçek proses akışını görün.", href: "/kutuphane/blog/granul-gubre-uretim-sureci" },
      { title: "Gübre Üretim Hattı", description: "Makine listesini bütün hat mimarisi içinde okuyun.", href: "/kutuphane/blog/gubre-uretim-hatti" },
      { title: "Organomineral Gübre Makinaları", description: "Organomineral hat makinalarıyla karşılaştırmalı inceleyin.", href: "/kutuphane/blog/organomineral-gubre-makinalari" },
      { title: "Tambur Sistemleri", description: "Granülasyon, kurutma ve soğutma tamburlarını inceleyin.", href: "/makinalar-ekipman/tambur-sistemleri" },
      { title: "Paketleme ve Dolum Sistemleri", description: "Hat sonu makinaları ürün sayfalarıyla görün.", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { title: "İletişim", description: "Kendi makine listenizi birlikte netleştirmek için teknik görüşme talep edin.", href: "/iletisim" },
    ],
    ctaTitle: commonCtaTitle,
    ctaDescription: commonCtaDescription,
  }),
];

export const fertilizerSystemDetailMap = Object.fromEntries(
  fertilizerSystemDetailPages.map((entry) => [entry.slug, entry]),
) as Record<string, DrumSystemDetailPageData>;
