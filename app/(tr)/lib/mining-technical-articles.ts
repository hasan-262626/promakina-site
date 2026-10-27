import type { BlogTechnicalArticleData } from "./blog-technical-article-data";
import type { TopicalArticle } from "./topical-authority-blog-data";

/**
 * Maden ve mineral teknik makaleleri: şablonla üretilen metin yerine konuya özgü, elle yazılmış içerik.
 * Bu alanlar CMS'te düzenlenebilir makalelerin kod varsayılanıdır; yayınlanmış bir CMS sürümü varsa o kullanılır.
 */
export type HandwrittenArticle = Pick<TopicalArticle, "description" | "heroDescription" | "sections" | "summaryRows" | "faqs"> &
  Partial<Pick<TopicalArticle, "metaTitle">>;

const DRYER = "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu";

export const miningHandwrittenArticles: Record<string, HandwrittenArticle> = {
  "mineral-toz-kurutma-sistemi": {
    description:
      "İnce mineral tozlarının kurutulmasında toz taşınımı, kurutucu tipi seçimi, fan-siklon-filtre tasarımı, yapışma ve ürün sıcaklığı ile su yükü ve enerji hesabını teknik olarak inceleyin.",
    heroDescription:
      "İnce mineral tozunda kurutma; ürünün önemli bir kısmının gazla taşındığı, siklon ve filtrenin ürün hattının parçası olduğu bir prosestir. Bu rehber kurutucu seçimini, gaz hattını ve enerji hesabını toz davranışı üzerinden ele alır.",
    sections: [
      {
        title: "İnce mineral tozu kurutmayı neden farklılaştırır?",
        paragraphs: [
          "Tane boyutu küçüldükçe birim kütle başına yüzey alanı artar; yüzey nemi daha hızlı buharlaşır, ancak tanenin gaz akımıyla taşınma eğilimi de belirgin şekilde yükselir. Bu nedenle ince tozda kurutma hızı çoğu zaman sorun değildir; asıl tasarım konusu ürünün nerede ve ne kadar kaybedildiğidir.",
          "Kalsit, feldspat, kaolin veya kuvars unu gibi öğütülmüş ürünlerde kurutucu, ürünün bir kısmını egzoz gazıyla birlikte siklona taşır. Siklon ve filtrede toplanan malzeme çoğu zaman satılabilir üründür; bu yüzden gaz hattı emisyon ekipmanı değil, ürün toplama hattı olarak boyutlandırılır.",
        ],
      },
      {
        title: "Kurutucu tipi nasıl seçilir?",
        paragraphs: [
          "Geniş tane aralığı içeren veya ince tozla birlikte iri fraksiyon taşıyan ürünlerde döner kurutucu, düşük gaz hızında çalışacak şekilde tasarlanır. Tamamı ince ve serbest akan, yalnız yüzey nemi taşıyan tozlarda ise ürünü gaz akımı içinde kurutup siklonda toplayan pnömatik (flash) kurutucular değerlendirilebilir. Granüler ve dar tane aralıklı ürünlerde akışkan yatak alternatif olabilir.",
          "Seçimde belirleyici olan; giriş nemi, tane dağılımının ince ucu, ürünün yapışma eğilimi ve kurutucudan sonra ürünün toplanacağı noktadır. Aynı mineral için öğütme öncesi kurutma ile öğütülmüş tozun kurutulması farklı kurutucu tipleri gerektirebilir.",
        ],
      },
      {
        title: "Toz taşınımı ve ürün kaybı",
        paragraphs: [
          "Döner kurutucuda gaz hızı, ince fraksiyonun terminal hızının altında tutulmadıkça ürünün önemli bir kısmı tamburu terk eder. Gaz hızını düşürmek için tambur çapı büyütülür veya fan debisi, yalnız buharlaşan suyu ve yanma gazını taşıyacak kadar sınırlanır.",
          "Siklonun ayırma verimi tane boyutu küçüldükçe düşer; birkaç mikronun altındaki fraksiyon büyük ölçüde filtreye geçer. Ürün dengesinin doğru kurulması için kurutucu çıkışı, siklon altı ve filtre altı akışlarının hangi oranlarda nereye gideceği tasarım başında hesaplanır.",
        ],
      },
      {
        title: "Fan, siklon ve jet pulse filtre tasarımı",
        paragraphs: [
          "Fan debisi; buharlaşan su, yanma gazı ve sızıntı havasının toplamına göre belirlenir, fan basıncı ise tambur, siklon, filtre ve kanal kayıplarının toplamını karşılamalıdır. Fan genellikle filtre sonrası, temiz gaz tarafında konumlandırılarak aşınmadan korunur.",
          "Jet pulse filtrede filtre alanı, ince mineral tozunun hava/kumaş oranına göre seçilir; nemli egzoz gazında torba yüzeyinde yoğuşmayı önlemek için filtre giriş sıcaklığı çiğ noktasının güvenli şekilde üzerinde tutulur ve gövde gerektiğinde yalıtılır. Torba malzemesi egzoz sıcaklığına göre belirlenir.",
        ],
      },
      {
        title: "Yapışma, topaklanma ve ürün sıcaklığı",
        paragraphs: [
          "Kil içeren veya öğütülmüş ince tozlar belirli bir nem aralığında yapışkan davranış gösterir; gövde ve kanatlarda kek oluşumu, kurutucu girişinde topaklanma ve filtre torbalarında kör tabaka bu aralıkta ortaya çıkar. Giriş bölgesinde çarpma barları veya zincir perde, gerektiğinde kuru ürünle geri karıştırma bu aralığı aşmak için kullanılır.",
          "Ürün sıcaklığı yalnız nem hedefi için değil, sonraki proses için de sınırlanır. Kurutucudan sıcak çıkan toz silo ve big-bag dolumunda yoğuşma ve topaklanma riski yaratabileceği için soğutma ihtiyacı ayrıca değerlendirilir.",
        ],
      },
      {
        title: "Kapasite ve enerji hesabı",
        paragraphs: [
          "Su yükü, kuru katı dengesinden hesaplanır: kuru katı = yaş besleme × (1 − giriş nemi), kuru ürün = kuru katı / (1 − çıkış nemi), buharlaşacak su = yaş besleme − kuru ürün. Örnek olarak 5 t/saat yaş tozun %8 nemden %0,5 neme indirilmesinde kuru katı 4,60 t/saat, kuru ürün yaklaşık 4,623 t/saat ve buharlaşacak su yaklaşık 377 kg/saat olur.",
          "Suyu 100 °C'de buharlaştırmak için gereken gizli ısı yaklaşık 2,26 MJ/kg'dır; örnekteki su yükü için bu tek başına yaklaşık 850 MJ/saat (≈ 237 kW) eder. Gerçek ısıl ihtiyaç; ürünün ve suyun ısıtılması, egzoz gazıyla atılan ısı ve gövde kayıpları eklenerek bulunur. Değerler hesap yöntemini göstermek için seçilmiş bir örnektir, tesis performansı değildir.",
        ],
      },
    ],
    summaryRows: [
      { criterion: "Tane dağılımının ince ucu", description: "Siklon ve filtreye geçecek ürün oranını belirler.", importance: "Ürün dengesinin ana girdisidir." },
      { criterion: "Yapışkan nem aralığı", description: "Kek oluşumu ve topaklanma riskini tanımlar.", importance: "Giriş bölgesi ve geri karışım kararını etkiler." },
      { criterion: "Egzoz sıcaklığı ve çiğ noktası", description: "Filtrede yoğuşma riskini belirler.", importance: "Filtre ve yalıtım tasarımını yönlendirir." },
      { criterion: "Su yükü", description: "Brülör ve fan boyutunun temelidir.", importance: "Enerji ihtiyacını belirler." },
    ],
    faqs: [
      {
        question: "Mineral tozu kurutmada siklon neden ürün hattının parçasıdır?",
        answer: "İnce tozun bir kısmı kurutucudan gazla taşınır. Siklon bu ürünü geri kazanır; ayırma verimi düşük seçilirse ürün kaybı artar ve filtre gereğinden fazla yüklenir.",
      },
      {
        question: "Flash kurutucu ne zaman tercih edilir?",
        answer: "Tamamı ince, serbest akan ve yalnız yüzey nemi taşıyan tozlarda ürün gaz akımı içinde kısa sürede kurutulup siklonda toplanabilir. Geniş tane aralığı, iri fraksiyon veya yapışkan davranış varsa döner kurutucu daha uygundur.",
      },
      {
        question: "Filtrede yoğuşma nasıl önlenir?",
        answer: "Filtre giriş sıcaklığı egzoz gazının çiğ noktasının güvenli şekilde üzerinde tutulur, kanal ve filtre gövdesi gerektiğinde yalıtılır; devreye alma ve duruşlarda soğuk gazın filtreden geçmesi kontrol edilir.",
      },
      {
        question: "Enerji ihtiyacı nasıl hesaplanır?",
        answer: "Önce kuru katı dengesinden buharlaşacak su bulunur. Buna suyun gizli ısısı, ürün ve suyun ısıtılması, egzoz ve gövde kayıpları eklenerek brülör ısıl gücü belirlenir.",
      },
      {
        question: "Teknik teklif için hangi bilgiler gerekir?",
        answer: "Mineral tipi, tane dağılımı (özellikle ince uç), saatlik kapasite, giriş ve hedef nem, yapışma davranışı, ürün sıcaklık sınırı, yakıt tipi ve ürünün toplanacağı nokta temel verilerdir.",
      },
    ],
  },

  "kuvars-ve-silis-kumu-eleme-hatti": {
    description:
      "Kuvars ve silis kumu eleme hattında yıkama, susuzlandırma, elek seçimi ve kapasite, titreşimli elek ile fraksiyonlama, konveyör-silo bağlantıları ve son ürün tane boyutu kontrolünü inceleyin.",
    heroDescription:
      "Kuvars ve silis kumu eleme hattı; ham kumu cam, döküm, filtrasyon ve yapı kimyasalları için istenen tane aralıklarına ayıran hattır. Bu rehber yaş ve kuru elemeyi, elek kapasitesini ve fraksiyon kontrolünü ele alır.",
    sections: [
      {
        title: "Eleme hattının görevi ve ürün şartnamesi",
        paragraphs: [
          "Kuvars ve silis kumu satışında belirleyici olan tane aralığıdır. Cam sektörü genellikle alt ve üst sınırları milimetre cinsinden tanımlanmış dar bir aralık, filtrasyon belirli fraksiyonlar, yapı kimyasalları ise reçeteye göre farklı tane sınıfları ister. Eleme hattı bu şartnamelerden geriye doğru planlanır.",
          "Döküm kumunda tane inceliği ayrıca AFS tane inceliği numarasıyla ifade edilir; bu sınıflandırma döküm uygulamasına özgüdür ve elek analizinden hesaplanır. Diğer uygulamalarda şartname doğrudan elek açıklıkları ve fraksiyon oranlarıyla tanımlanır.",
        ],
      },
      {
        title: "Yıkama ve susuzlandırma",
        paragraphs: [
          "Ham kumdaki kil ve çok ince fraksiyon, hem ürün kalitesini hem de kuru elemenin verimini düşürür. Sulu eleme ve yıkama ile bu fraksiyon uzaklaştırılır; ardından susuzlandırma eleği serbest suyu alarak kumu stoklanabilir veya kurutucuya beslenebilir hale getirir.",
          "Susuzlandırma sonrası kalan nem, kum ince fraksiyon içerdikçe artar. Kuru eleme yapılacaksa bu nem kurutucunun su yükünü belirler; bu nedenle yıkama ve susuzlandırma kademesi kurutma ve eleme kapasitesiyle birlikte boyutlandırılır.",
        ],
      },
      {
        title: "Elek seçimi ve kapasite",
        paragraphs: [
          "Elek kapasitesi yalnız elek alanına bağlı değildir; açıklık boyutu, açık alan oranı, beslemedeki açıklığa yakın tane oranı, tabaka kalınlığı ve nem birlikte etkiler. İnce kumda düşük nem bile göz tıkanmasına ve ayırma veriminin düşmesine yol açabildiği için ince fraksiyonların kuru elemesi kurutma sonrasında yapılır.",
          "Elek boyutlandırmasında genişlik besleme debisi ve tabaka kalınlığına, uzunluk ise ayırma verimine göre seçilir. Aşındırıcı kum için elek yüzeyinde poliüretan veya aşınmaya dayanıklı tel seçenekleri, ürün tipine ve açıklığa göre değerlendirilir.",
        ],
      },
      {
        title: "Titreşimli elek ve fraksiyonlama",
        paragraphs: [
          "Çok katlı titreşimli elekler tek makinede birden fazla fraksiyon ayırır; kat sayısı ve açıklıklar ürün şartnamesine göre belirlenir. Her katın yükü farklı olduğundan katlar arasında yük dengesi ve tabaka kalınlığı ayrıca kontrol edilir.",
          "Çok ince fraksiyonlarda mekanik eleme verimi düştüğünden hava sınıflandırma gibi alternatifler değerlendirilebilir. Elek altına alınan ince toz, toz toplama hattına veya ayrı ürün akışına yönlendirilir.",
        ],
      },
      {
        title: "Konveyör, elevatör ve silo bağlantıları",
        paragraphs: [
          "Her fraksiyonun ayrı silo veya stok alanına gitmesi, eleme hattı yerleşiminin ana kısıtıdır. Kuru kum kovalı elevatör veya bantlı konveyörle taşınır; aktarma noktalarında düşme yüksekliği sınırlanarak hem aşınma hem tane kırılması azaltılır.",
          "Silo çıkışlarında köprüleşme ve segregasyon riski dikkate alınır; farklı tane boyutları silo içinde ayrışabileceği için dolum ve boşaltma düzeni fraksiyon homojenliğini koruyacak şekilde planlanır.",
        ],
      },
      {
        title: "Son ürün tane boyutu kontrolü",
        paragraphs: [
          "Hat çıkışında düzenli elek analizi yapılarak fraksiyonların şartnamede kalıp kalmadığı izlenir. Elek tellerinin aşınması açıklığı büyüttüğünden, analiz sonuçları elek bakım periyodunu belirlemek için de kullanılır.",
          "Döküm kumu üretiminde elek analizinden AFS tane inceliği numarası hesaplanır; cam ve filtrasyon kumunda ise fraksiyon oranları ve üst-alt sınır aşımları raporlanır.",
        ],
      },
    ],
    summaryRows: [
      { criterion: "Ürün şartnamesi", description: "İstenen fraksiyonlar ve sınır aşım toleransları.", importance: "Elek katları ve açıklıklarını belirler." },
      { criterion: "Kil ve ince oranı", description: "Yıkama ihtiyacını ve susuzlandırma sonrası nemi etkiler.", importance: "Yaş/kuru eleme kararını yönlendirir." },
      { criterion: "Besleme nemi", description: "İnce kumda göz tıkanmasının ana nedenidir.", importance: "Kurutma sonrası eleme gereksinimini belirler." },
      { criterion: "Aşındırıcılık", description: "Elek yüzeyi ve aktarma noktalarının ömrünü belirler.", importance: "Bakım periyodunu etkiler." },
    ],
    faqs: [
      {
        question: "Kuvars kumu yaş mı kuru mu elenmelidir?",
        answer: "Kil ve çok ince fraksiyonun ayrılması yaş elemeyle yapılır. Dar tane aralığı istenen ince fraksiyonların ayrılması ise çoğunlukla kurutma sonrasında kuru elemeyle yapılır; çünkü ince kumda düşük nem bile göz tıkanmasına yol açar.",
      },
      {
        question: "AFS numarası ne zaman kullanılır?",
        answer: "AFS tane inceliği numarası döküm kumu uygulamalarına özgü bir sınıflandırmadır ve elek analizinden hesaplanır. Cam, filtrasyon ve yapı kimyasalları için şartname doğrudan elek açıklıkları ve fraksiyon oranlarıyla tanımlanır.",
      },
      {
        question: "Elek kapasitesini ne belirler?",
        answer: "Elek alanının yanında açıklık boyutu, açık alan oranı, beslemedeki açıklığa yakın tane oranı, tabaka kalınlığı ve nem kapasiteyi belirler.",
      },
      {
        question: "Fraksiyonlar silolarda neden ayrışır?",
        answer: "Farklı boyuttaki taneler dolum ve boşaltma sırasında segregasyona uğrayabilir. Silo dolum noktası ve boşaltma düzeni fraksiyon homojenliğini koruyacak şekilde seçilir.",
      },
      {
        question: "Teknik teklif için hangi bilgiler gerekir?",
        answer: "Ham kumun elek analizi, kil ve ince oranı, saatlik kapasite, besleme nemi, istenen fraksiyonlar ve oranları, kurutma yapılıp yapılmayacağı ve fraksiyon başına stoklama şekli temel verilerdir.",
      },
    ],
  },

  "maden-tesislerinde-toz-toplama-sistemleri": {
    description:
      "Maden tesislerinde toz emiş noktaları, fan debisi ve basınç kaybı, siklon ve jet pulse filtre, kuvars tozunun iş sağlığı riskleri, kanal ve otomasyon seçimi ile bakım ve emisyon kontrolünü inceleyin.",
    heroDescription:
      "Maden tesislerinde toz; kırıcı, elek, aktarma noktası ve kurutucuda farklı karakterde oluşur. Bu rehber emiş noktalarının belirlenmesinden fan ve filtre seçimine, iş sağlığı risklerinden bakım planına kadar toz toplama hattını ele alır.",
    sections: [
      {
        title: "Toz nerede oluşur ve emiş noktaları nasıl belirlenir?",
        paragraphs: [
          "Maden hattında toz başlıca kırıcı giriş ve çıkışlarında, elek üstü ve altında, bant aktarma noktalarında, silo ve bunker dolumunda ve kurutucu egzozunda oluşur. Emiş noktası, tozun oluştuğu yere en yakın kapalı veya yarı kapalı muhafaza üzerine yerleştirilir.",
          "Muhafaza tasarımı emiş debisini doğrudan belirler: açıklıkları küçük tutulan bir muhafaza daha düşük debiyle aynı etkinliği sağlar. Malzeme düşüşünün sürüklediği hava ve aktarma yüksekliği emiş debisi hesabının girdileridir.",
        ],
      },
      {
        title: "Fan debisi ve basınç kaybı",
        paragraphs: [
          "Toplam fan debisi, emiş noktalarının debilerinin toplamıdır; kurutucu egzozu bağlıysa buharlaşan su ve yanma gazı da eklenir. Fan basıncı; muhafaza girişleri, kanal sürtünmesi, dirsekler, siklon ve filtre basınç kayıplarının toplamını karşılamalıdır.",
          "Çok noktalı sistemlerde kollar arasındaki basınç dengesi kurulmazsa debi en kolay yoldan geçer ve uzak noktalar yeterince emilmez. Dengeleme, kanal çaplarının hesapla seçilmesiyle yapılır; ayar klapeleri yalnız ince ayar için kullanılır.",
        ],
      },
      {
        title: "Kanal tasarımı",
        paragraphs: [
          "Kanal içi hız, tozun kanalda çökmesini önleyecek kadar yüksek, aşınmayı ve basınç kaybını artırmayacak kadar düşük seçilir. Endüstriyel havalandırma kaynakları mineral tozları için çoğunlukla yaklaşık 18–23 m/s aralığını referans gösterir; bu bir başlangıç değeridir, kesin hız tozun tane boyutu, yoğunluğu ve nemine göre her sistemde ayrıca belirlenir.",
          "Aşındırıcı kuvars tozunda dirseklerde geniş yarıçap ve aşınma plakası, yatay kanallarda temizleme kapakları kullanılır. Kurutucu egzozunun bağlandığı hatlarda yoğuşmayı önlemek için yalıtım değerlendirilir.",
        ],
      },
      {
        title: "Siklon ve jet pulse filtre seçimi",
        paragraphs: [
          "Siklon iri tozu ayırarak filtrenin toz yükünü azaltır ve aşındırıcı iri tanenin torbalara ulaşmasını engeller; ancak ince tozdaki ayırma verimi sınırlıdır. Emisyon kontrolünün asıl ekipmanı jet pulse filtredir.",
          "Filtre alanı, tozun tane boyutu ve yapışma eğilimine göre seçilen hava/kumaş oranına göre belirlenir. Torba malzemesi gaz sıcaklığına ve neme göre, temizleme düzeni ise filtre diferansiyel basıncına göre seçilir.",
        ],
      },
      {
        title: "Kuvars tozu ve iş sağlığı",
        paragraphs: [
          "Silis kumu ve kuvars işleyen tesislerde oluşan solunabilir kristal silika tozu, silikoz ve akciğer kanseri riskiyle ilişkilendirilen bir maruziyet etkenidir. Bu nedenle toz toplama, yalnız çevresel emisyon için değil, çalışan sağlığı için de tasarlanır.",
          "Toz kaynağında emiş, kapalı aktarma, filtre bakımı sırasında toza maruziyetin sınırlanması ve maruziyet ölçümleri birlikte planlanır. Maruziyet sınır değerleri yürürlükteki mevzuata göre değerlendirilir.",
        ],
      },
      {
        title: "Otomasyon, bakım ve emisyon kontrolü",
        paragraphs: [
          "Filtre diferansiyel basıncının izlenmesi, basınca göre temizleme, fan hız kontrolü ve filtre çıkışında toz izleme; sistemin sürekli tasarım debisinde çalışmasını sağlar. Ana proses ekipmanıyla kilitleme yapılarak toz toplama çalışmadan hattın devreye girmesi önlenir.",
          "Bakım planı; torba değişimi, siklon ve dirsek aşınma kontrolleri, kanal içi birikim temizliği ve fan titreşim takibini kapsar. Toz geri kazanımı yapılıyorsa toplanan malzemenin ürüne veya ayrı akışa yönlendirilmesi de planın parçasıdır.",
        ],
      },
    ],
    summaryRows: [
      { criterion: "Emiş noktaları ve muhafaza", description: "Toplam debiyi ve toz yakalama etkinliğini belirler.", importance: "Fan ve filtre boyutunun temelidir." },
      { criterion: "Kanal hızı ve dengesi", description: "Çökme, aşınma ve uzak noktaların emişini belirler.", importance: "Sistem performansını korur." },
      { criterion: "Hava/kumaş oranı", description: "Filtre alanını ve torba ömrünü belirler.", importance: "Emisyon ve bakım maliyetini etkiler." },
      { criterion: "Kristal silika maruziyeti", description: "Çalışan sağlığı açısından kontrol edilmesi gereken tozdur.", importance: "Kaynakta emiş ve kapalı aktarma gerektirir." },
    ],
    faqs: [
      {
        question: "Maden tesisinde hangi noktalardan emiş yapılır?",
        answer: "Kırıcı giriş ve çıkışları, elek üstü ve altı, bant aktarma noktaları, silo ve bunker dolumu ile kurutucu egzozu başlıca emiş noktalarıdır.",
      },
      {
        question: "Siklon tek başına yeterli midir?",
        answer: "Siklon iri tozu ayırır ve filtre yükünü azaltır, ancak ince tozda verimi sınırlıdır. Emisyon kontrolü için siklon sonrası jet pulse filtre kullanılır.",
      },
      {
        question: "Kanal hızı nasıl seçilir?",
        answer: "Tozun çökmeyeceği kadar yüksek, aşınma ve basınç kaybını artırmayacak kadar düşük seçilir. Kaynaklarda mineral tozları için verilen yaklaşık 18–23 m/s aralığı bir referanstır; kesin değer tozun özelliklerine göre projede belirlenir.",
      },
      {
        question: "Kuvars tozu neden ayrıca önemlidir?",
        answer: "Solunabilir kristal silika silikoz ve akciğer kanseri riskiyle ilişkilendirilir. Toz toplama sistemi çalışan maruziyetini sınırlayacak şekilde tasarlanır; maruziyet sınırları yürürlükteki mevzuata göre değerlendirilir.",
      },
      {
        question: "Teknik teklif için hangi bilgiler gerekir?",
        answer: "Emiş noktalarının listesi ve muhafaza durumu, toz tipi ve tane boyutu, gaz sıcaklığı ve nemi, kurutucu egzozunun bağlanıp bağlanmayacağı, saha yerleşimi ve tozun geri kazanılıp kazanılmayacağı temel verilerdir.",
      },
    ],
  },

  "maden-kurutma-ve-eleme-tesisi-secim-kriterleri": {
    description:
      "Maden kurutma ve eleme tesislerinde proses akışı, kırıcı seçimi, kurutma tamburu kapasitesi, elek açıklığı, konveyör-bunker entegrasyonu, toz toplama ve aşınma yönetimi için seçim kriterlerini inceleyin.",
    heroDescription:
      "Maden kurutma ve eleme tesislerinde ürün tane boyutu, nem, aşınma ve toz yüküne göre ekipman seçim kriterlerini bir araya getiren teknik blog sayfası.",
    sections: [
      {
        title: "Maden tesislerinde ana proses akışı nasıl kurulur?",
        paragraphs: [
          "Tipik akış kabul bunkeri, kırma, ön eleme, kurutma, son eleme ve stoklama sırasıyla ilerler. Kurutmanın kırmadan önce mi sonra mı yapılacağı nemli malzemenin kırıcıda yapışma eğilimine ve kurutucuya beslenebilecek en büyük tane boyutuna göre belirlenir.",
          "Ürün fraksiyonlarından biri kuru sevk edilmiyorsa yalnız o fraksiyonun kurutulması, kurutucu boyutunu ve enerji ihtiyacını belirgin şekilde azaltır.",
        ],
      },
      {
        title: "Kırıcı seçimi ve besleme boyutu ilişkisi",
        paragraphs: [
          "Kırıcı seçimi malzemenin sertliği, aşındırıcılığı, en büyük giriş boyutu ve istenen küçültme oranıyla yapılır. Primer kademede çeneli kırıcı, sonraki kademelerde darbeli veya dik milli kırıcılar hedef boyuta yaklaşır.",
          "Kurutucuya giden malzemenin üst tane boyutu, tambur içindeki kalış süresini ve kurumanın homojenliğini etkiler; bu nedenle kırma çıkış boyutu kurutucu tasarımının bir girdisidir.",
        ],
      },
      {
        title: "Kurutma tamburu kapasitesi ve nem yönetimi",
        paragraphs: [
          "Kurutma tamburu ton/saat ürüne göre değil, buharlaşacak su miktarına göre boyutlandırılır. Giriş nemi mevsimden mevsime değişiyorsa tasarım, en yüksek beklenen nem için yapılır; aksi halde yağışlı dönemlerde kapasite düşer.",
          "Açık stok alanlarında ham malzemenin yağıştan korunması kurutma yükünü azaltmanın düşük maliyetli yollarından biridir.",
        ],
      },
      {
        title: "Elek tipi, açıklık ve sınıflandırma standardı",
        paragraphs: [
          "Elek tipi ve açıklıkları ürün şartnamesine göre seçilir. İnce fraksiyonlarda kuru eleme kurutma sonrasında yapılır; nemli besleme elek gözlerini tıkar ve ayırma verimini düşürür.",
          "Kapasite elek alanı, açıklık, açık alan oranı ve tabaka kalınlığıyla birlikte değerlendirilir; aşındırıcı malzemede elek yüzeyi malzemesi bakım periyodunu belirler.",
        ],
      },
      {
        title: "Konveyör, elevatör ve bunker entegrasyonu",
        paragraphs: [
          "Kırıcı, kurutucu ve elek arasında ara bunkerler, ekipmanların birbirinin duruşundan etkilenmeden çalışmasını sağlar. Kurutucunun önündeki besleme bunkeri, kurutucuya sabit debi verilmesi için özellikle önemlidir.",
          "Kuru ve sıcak ürün taşınan hatlarda kovalı elevatör ve kapalı konveyörler toz kaçağını sınırlar; aktarma yükseklikleri aşınmayı ve tane kırılmasını azaltacak şekilde düşük tutulur.",
        ],
      },
      {
        title: "Toz yükü, siklon ve filtre sistemleri",
        paragraphs: [
          "Kurutucu egzozu ve kuru eleme noktaları hattın en yüksek toz yükünü oluşturur. Siklon iri tozu ve sürüklenen ürünü geri kazanır, jet pulse filtre ince tozu tutar.",
          "Kurutucu egzozu nemli olduğu için filtre giriş sıcaklığı çiğ noktasının üzerinde tutulur; kuru eleme emişleri ayrı bir filtreye veya aynı filtreye bağlanacaksa gaz sıcaklığı ve nem karışımı hesaba katılır.",
        ],
      },
      {
        title: "Bakım planı ve aşınma yönetimi",
        paragraphs: [
          "Aşındırıcı minerallerde kırıcı aşınma parçaları, tambur kanatları, şutlar, elek yüzeyleri ve siklon gövdesi düzenli kontrol gerektirir. Değiştirilebilir aşınma elemanları bakım süresini kısaltır.",
          "Tambur ring ve gale tekerleklerinin hizası, tahrik dişlisi ve sızdırmazlıklar periyodik kontrol listesinde yer alır; filtre diferansiyel basıncı torba durumunun en erken göstergesidir.",
        ],
      },
      {
        title: "Pro Makina ile maden tesislerinde ön mühendislik",
        paragraphs: [
          "Ön mühendislik aşamasında numunenin nem ve tane dağılımı analizi, buharlaşacak su hesabı, kırma ve eleme kademelerinin kapasite dengesi ve toz toplama noktaları birlikte değerlendirilir.",
          "Bu değerlendirme sonunda ekipman listesi, ön yerleşim ve tedarik kapsamı netleştirilerek teknik teklif hazırlanır.",
        ],
      },
    ],
    summaryRows: [
      { criterion: "Kurutma konumu", description: "Kırmadan önce veya sonra kurutma kararı.", importance: "Kırıcı yapışmasını ve kurutucu boyutunu belirler." },
      { criterion: "En yüksek giriş nemi", description: "Mevsimsel değişim dahil tasarım nemi.", importance: "Kurutucunun yıl boyu kapasitesini korur." },
      { criterion: "Ara bunkerler", description: "Ekipmanlar arasındaki tampon kapasite.", importance: "Duruşların hattı durdurmasını önler." },
      { criterion: "Aşınma noktaları", description: "Kanat, şut, elek ve siklon yüzeyleri.", importance: "Bakım süresini ve maliyetini belirler." },
    ],
    faqs: [
      {
        question: "Kurutma kırmadan önce mi sonra mı yapılmalıdır?",
        answer: "Nemli malzeme kırıcıda yapışıyorsa veya kurutucuya beslenebilecek boyut sınırlıysa sıralama buna göre seçilir. Yalnız belirli bir fraksiyon kuru sevk edilecekse sadece o fraksiyonun kurutulması enerji ihtiyacını azaltır.",
      },
      {
        question: "Kurutma tamburu neye göre boyutlandırılır?",
        answer: "Ton/saat ürüne göre değil, buharlaşacak su miktarına göre boyutlandırılır. Mevsimsel nem değişimi varsa en yüksek beklenen nem esas alınır.",
      },
      {
        question: "Ara bunker neden gereklidir?",
        answer: "Kırıcı, kurutucu ve elek arasında tampon kapasite oluşturarak bir ekipmanın kısa duruşunun tüm hattı durdurmasını önler ve kurutucuya sabit debi verilmesini sağlar.",
      },
      {
        question: "Toz toplama hattı nasıl planlanır?",
        answer: "Kurutucu egzozu ve kuru eleme noktaları başta olmak üzere emiş noktaları belirlenir; siklon ve jet pulse filtre, gaz sıcaklığı ve nem dikkate alınarak boyutlandırılır.",
      },
      {
        question: "Teknik teklif için hangi bilgiler gerekir?",
        answer: "Malzeme tipi, en büyük giriş boyutu, saatlik kapasite, mevsimsel nem aralığı, istenen fraksiyonlar, hangi fraksiyonların kuru sevk edileceği ve saha yerleşimi temel verilerdir.",
      },
    ],
  },

  "kum-kurutma-tesisi": {
    metaTitle: "Kum Kurutma Tesisi Kurulumu | Ekipman ve Kapasite",
    description:
      "Kum kurutma tesisi kurulumu: çalışma prensibi, makine listesi, kurutma tamburu, brülör, fan-siklon-filtre, eleme, konveyör ve silo, otomasyon, kapasite-enerji değerlendirmesi ve imalat-montaj kapsamı.",
    heroDescription:
      "Kum kurutma tesisi; yaş kumun beslenmesinden kuru ve sınıflandırılmış ürünün silo veya ambalaja alınmasına kadar tüm ekipmanları kapsayan bir yatırımdır. Bu sayfa tesisin makine listesini, kapasite ve enerji değerlendirmesini ve tedarik kapsamını özetler.",
    sections: [
      {
        title: "Tesisin çalışma prensibi",
        paragraphs: [
          "Yaş kum besleme bunkerinden dozajlı olarak kurutma tamburuna verilir. Brülör veya sıcak hava jeneratöründen gelen gaz tambur içinde kumla temas ederek nemi buharlaştırır; nemli egzoz gazı siklon ve jet pulse filtreden geçerek fanla bacaya atılır.",
          "Kuru kum gerekirse soğutulur, eleme ile fraksiyonlara ayrılır ve kovalı elevatör veya konveyörle silolara, big-bag veya torba dolum hattına taşınır. Tesisin kapasitesi bu zincirin en yavaş halkasıyla sınırlıdır.",
        ],
      },
      {
        title: "Ekipman ve makine listesi",
        paragraphs: [
          "Tipik bir kum kurutma tesisinde yaş kum bunkeri ve besleyici, besleme konveyörü, kurutma tamburu, brülör veya sıcak hava jeneratörü, siklon, jet pulse filtre, emiş fanı ve baca, kuru ürün elevatörü, elek, ürün siloları, dolum ekipmanları ve elektrik-otomasyon panosu bulunur.",
          "Hangi kalemlerin teklif kapsamında olacağı; mevcut ekipmanlar, saha altyapısı ve ürünün sevk şekline göre proje başında belirlenir.",
        ],
        subsections: [
          {
            heading: "Kurutma tamburu",
            paragraphs: [
              "Tesisin ana ekipmanıdır; çap, boy, eğim ve devir su yüküne ve kalış süresine göre seçilir. Kumun aşındırıcılığı nedeniyle giriş bölgesi, kanatlar ve çıkış oluğunda değiştirilebilir aşınma elemanları kullanılır.",
            ],
          },
          {
            heading: "Brülör ve sıcak hava sistemi",
            paragraphs: [
              "Isıl güç su yükü ve kayıplara göre belirlenir; yakıt tipi (doğalgaz, LPG, motorin veya alternatif kaynaklar) saha altyapısına göre seçilir. Modülasyonlu brülör, giriş nemindeki değişime göre ısıl gücü ayarlar.",
            ],
          },
          {
            heading: "Fan, siklon ve jet pulse filtre",
            paragraphs: [
              "Fan debisi buharlaşan su, yanma gazı ve sızıntı havasına; basıncı ise tambur, siklon, filtre ve kanal kayıplarına göre seçilir. Siklon iri tozu geri kazanır, filtre ince tozu tutar; filtre giriş sıcaklığı yoğuşmayı önleyecek şekilde kontrol edilir.",
            ],
          },
          {
            heading: "Eleme ve sınıflandırma",
            paragraphs: [
              "Kuru kum çok katlı titreşimli elekte müşteri şartnamesindeki fraksiyonlara ayrılır; elek altı ince toz toz toplama hattına veya ayrı ürün akışına yönlendirilir.",
            ],
          },
          {
            heading: "Konveyör, elevatör ve silo",
            paragraphs: [
              "Her fraksiyon için ayrı silo veya stok alanı planlanır. Kapalı taşıma ekipmanları toz kaçağını sınırlar; silo çıkışlarında segregasyon ve köprüleşme riskine göre boşaltma düzeni seçilir.",
            ],
          },
          {
            heading: "Otomasyon",
            paragraphs: [
              "PLC tabanlı kontrol; besleme debisi, brülör gücü, egzoz ve ürün sıcaklığı, fan hızı ve filtre basıncını izler. Ekipmanlar arasında kilitleme ile toz toplama ve fan çalışmadan brülörün ve beslemenin devreye girmesi önlenir.",
            ],
          },
        ],
      },
      {
        title: "Kapasite ve enerji değerlendirmesi",
        paragraphs: [
          "Tesis kapasitesi ton/saat kuru ürün olarak tanımlansa da kurutucu, buharlaşacak su miktarına göre boyutlandırılır. Bu nedenle aynı ton/saat kapasite için giriş nemi yüksek olan bir tesis daha büyük tambur, brülör ve fan gerektirir.",
          "Enerji değerlendirmesinde buharlaşacak su, kumun ısıtılması, egzoz ve gövde kayıpları birlikte hesaplanır; yakıt tüketimi ve yakıt tipi işletme maliyetinin ana kalemidir. Hesap yöntemi ve örnek su yükü hesabı silis kumu kurutma prosesi rehberinde ayrıntılı anlatılmıştır.",
        ],
      },
      {
        title: "İmalat, montaj ve devreye alma kapsamı",
        paragraphs: [
          "Tedarik kapsamı projeye göre ekipman imalatı, çelik konstrüksiyon ve platformlar, kanal ve baca, elektrik ve otomasyon, saha montajı, soğuk ve sıcak devreye alma ile operatör bilgilendirmesini içerebilir.",
          "İnşaat işleri, enerji ve yakıt altyapısı ile çevre izinlerinin hangi tarafta olacağı her projede ayrıca belirlenir.",
        ],
      },
      {
        title: "Teknik teklif için gerekli bilgiler",
        paragraphs: [
          "Teklifin doğru hazırlanması için kumun tipi ve kaynağı, saatlik kapasite, giriş nemi (mevsimsel aralık dahil) ve hedef çıkış nemi, istenen fraksiyonlar, yakıt tipi, ürünün sevk şekli (dökme, big-bag, torba), mevcut ekipmanlar ve saha ölçüleri gereklidir.",
        ],
      },
    ],
    summaryRows: [
      { criterion: "Buharlaşacak su", description: "Tambur, brülör ve fan boyutunun temelidir.", importance: "Yatırım ve yakıt maliyetini belirler." },
      { criterion: "Tedarik kapsamı", description: "Makine, çelik konstrüksiyon, otomasyon ve montaj sınırları.", importance: "Teklifin karşılaştırılabilirliğini sağlar." },
      { criterion: "Fraksiyon ve sevk şekli", description: "Elek, silo ve dolum ekipmanlarını belirler.", importance: "Son hattın yerleşimini yönlendirir." },
      { criterion: "Yakıt ve enerji altyapısı", description: "Brülör tipi ve işletme maliyeti.", importance: "Saha koşuluna göre seçilir." },
    ],
    faqs: [
      {
        question: "Kum kurutma tesisinde hangi makineler bulunur?",
        answer: "Yaş kum bunkeri ve besleyici, konveyör, kurutma tamburu, brülör, siklon, jet pulse filtre, fan ve baca, elevatör, elek, silolar, dolum ekipmanları ve otomasyon panosu tipik makine listesidir.",
      },
      {
        question: "Tesis kapasitesi nasıl belirlenir?",
        answer: "Kapasite kuru ürün olarak tanımlanır, ancak kurutucu buharlaşacak suya göre boyutlandırılır. Giriş nemi yükseldikçe aynı kapasite için daha büyük kurutma ekipmanı gerekir.",
      },
      {
        question: "Anahtar teslim kapsamda neler yer alabilir?",
        answer: "Ekipman imalatı, çelik konstrüksiyon, kanal ve baca, elektrik-otomasyon, montaj ve devreye alma kapsama alınabilir; inşaat, enerji altyapısı ve izinlerin sorumluluğu proje başında belirlenir.",
      },
      {
        question: "Teknik teklif için hangi bilgiler gerekir?",
        answer: "Kum tipi, saatlik kapasite, giriş ve hedef nem, istenen fraksiyonlar, yakıt tipi, sevk şekli, mevcut ekipmanlar ve saha ölçüleri gereklidir.",
      },
    ],
  },
};

const sharedRelatedLinks = [
  { title: "Kurutma Tamburu", description: "Ana kurutma ekipmanını ürün sayfasında inceleyin.", href: DRYER },
  { title: "Maden ve Mineral Kurutma Rehberi", description: "Mineral bazında kurutma farklarını karşılaştırın.", href: "/kutuphane/blog/maden-kurutma-tamburu" },
  { title: "Madencilik ve Mineral İşleme", description: "Sektör çözümlerini görün.", href: "/sektorler/madencilik-ve-mineral-isleme" },
  { title: "İletişim", description: "Teknik görüşme ve teklif talebi için iletişime geçin.", href: "/iletisim" },
];

/** Makaleye özgü teknik veri blokları (ortak blok yerine). */
export const miningTechnicalData: Record<string, BlogTechnicalArticleData> = {
  "mineral-toz-kurutma-sistemi": {
    requiredDataTitle: "Mineral Toz Kurutma İçin Gerekli Veriler",
    requiredDataDescription: "İnce tozda kurutucu ve gaz hattı, tozun tane dağılımı ve yapışma davranışına göre seçilir.",
    requiredDataRows: [
      { label: "Tane dağılımı", purpose: "Siklon ve filtreye geçecek ürün oranını belirler.", request: "Elek veya lazer analiz sonucu" },
      { label: "Giriş / hedef nem", purpose: "Su yükünü belirler.", request: "Yüzde değerler" },
      { label: "Yapışma davranışı", purpose: "Kek ve topaklanma riskini tanımlar.", request: "Gözlem veya numune testi" },
      { label: "Ürün sıcaklık sınırı", purpose: "Gaz sıcaklığını ve soğutma ihtiyacını belirler.", request: "Sonraki proses şartı" },
      { label: "Ürün toplama noktası", purpose: "Siklon ve filtre altının ürün hattına bağlanmasını belirler.", request: "Silo / değirmen / dolum" },
    ],
    exampleTitle: "Örnek Su Yükü ve Isı Hesabı",
    exampleDescription: "Hesap yöntemini göstermek için seçilmiş değerlerdir; tesis performansı değildir.",
    exampleRows: [
      { label: "Yaş besleme", value: "5 t/saat, %8 nem", comment: "Örnek değer" },
      { label: "Kuru katı", value: "4,60 t/saat", comment: "5 × (1 − 0,08)" },
      { label: "Kuru ürün (%0,5)", value: "≈ 4,623 t/saat", comment: "4,60 / 0,995" },
      { label: "Buharlaşacak su", value: "≈ 377 kg/saat", comment: "5 − 4,623" },
      { label: "Gizli ısı", value: "≈ 850 MJ/saat (≈ 237 kW)", comment: "377 kg × 2,26 MJ/kg; kayıplar hariç" },
    ],
    decisionTableTitle: "Kurutucu Seçim Matrisi",
    decisionTableDescription: "Ürünün tane yapısı ve nem davranışı kurutucu tipini belirler.",
    decisionTableRows: [
      { criterion: "Geniş tane aralığı", description: "İnce tozla birlikte iri fraksiyon", importance: "Döner kurutucu", effect: "Düşük gaz hızı, siklon ürün hattında" },
      { criterion: "Tamamı ince, serbest akan", description: "Yalnız yüzey nemi", importance: "Pnömatik (flash) kurutucu değerlendirilebilir", effect: "Ürün siklonda toplanır" },
      { criterion: "Dar tane aralıklı granül", description: "Akışkanlaşabilen ürün", importance: "Akışkan yatak alternatif", effect: "Gaz dağıtımı kritik" },
      { criterion: "Yapışkan nem aralığı", description: "Kil içeren tozlar", importance: "Giriş bölgesi önlemleri", effect: "Geri karışım gerekebilir" },
    ],
    factorCardsTitle: "Toz Kurutmada Kritik Faktörler",
    factorCardsDescription: "İnce tozda ürün dengesi ve gaz hattı birlikte tasarlanır.",
    factorCards: [
      { title: "Terminal hız", description: "Gaz hızı ince fraksiyonun sürüklenme sınırının altında tutulur." },
      { title: "Siklon verimi", description: "Ürün kaybını ve filtre yükünü belirler." },
      { title: "Çiğ noktası", description: "Filtrede yoğuşma riskini tanımlar." },
      { title: "Ürün sıcaklığı", description: "Silo ve dolumda topaklanma riskini etkiler." },
    ],
    relatedLinksTitle: "İlgili Teknik İçerikler",
    relatedLinksDescription: "Mineral toz kurutmayı tamamlayan sayfalar.",
    relatedLinks: [
      { title: "Maden Tesislerinde Toz Toplama Sistemleri", description: "Emiş noktaları, fan ve filtre seçimini okuyun.", href: "/kutuphane/blog/maden-tesislerinde-toz-toplama-sistemleri" },
      ...sharedRelatedLinks,
    ],
  },
  "kuvars-ve-silis-kumu-eleme-hatti": {
    requiredDataTitle: "Eleme Hattı İçin Gerekli Veriler",
    requiredDataDescription: "Eleme hattı ürün şartnamesinden geriye doğru planlanır.",
    requiredDataRows: [
      { label: "Ham kum elek analizi", purpose: "Fraksiyon dengesini ve elek yükünü belirler.", request: "Elek analizi sonucu" },
      { label: "Kil ve ince oranı", purpose: "Yıkama ihtiyacını belirler.", request: "Yüzde değer" },
      { label: "Ürün şartnamesi", purpose: "Elek katları ve açıklıklarını belirler.", request: "Fraksiyonlar ve toleranslar" },
      { label: "Besleme nemi", purpose: "Yaş veya kuru eleme kararını yönlendirir.", request: "Yüzde değer" },
      { label: "Stoklama şekli", purpose: "Silo ve konveyör düzenini belirler.", request: "Fraksiyon başına silo / stok" },
    ],
    exampleTitle: "Örnek Hat Kurgusu",
    exampleDescription: "Kurgunun mantığını gösteren örnek adımlardır; kesin tasarım numune analizine göre yapılır.",
    exampleRows: [
      { label: "Yıkama", value: "Sulu elek", comment: "Kil ve çok ince fraksiyon ayrılır" },
      { label: "Susuzlandırma", value: "Susuzlandırma eleği", comment: "Serbest su alınır" },
      { label: "Kurutma", value: "Kurutma tamburu", comment: "Kuru eleme için gerekli" },
      { label: "Fraksiyonlama", value: "Çok katlı titreşimli elek", comment: "Şartnamedeki aralıklar" },
      { label: "Stoklama", value: "Fraksiyon başına silo", comment: "Segregasyon kontrolü" },
    ],
    decisionTableTitle: "Eleme Kararları",
    decisionTableDescription: "Yaş ve kuru eleme, elek yüzeyi ve fraksiyon sayısı birlikte değerlendirilir.",
    decisionTableRows: [
      { criterion: "Yaş eleme", description: "Kil ve ince ayrımı", importance: "Ürün kalitesi", effect: "Susuzlandırma ve kurutma yükü doğar" },
      { criterion: "Kuru eleme", description: "Dar tane aralıkları", importance: "Şartname uyumu", effect: "Kurutma sonrası yapılır" },
      { criterion: "Elek yüzeyi", description: "Tel veya poliüretan", importance: "Aşınma ömrü", effect: "Açıklık kararlılığı" },
      { criterion: "Fraksiyon sayısı", description: "Elek kat sayısı", importance: "Ürün çeşitliliği", effect: "Silo ve konveyör sayısı artar" },
    ],
    factorCardsTitle: "Eleme Verimini Etkileyen Faktörler",
    factorCardsDescription: "Ayırma verimi elek alanından fazlasına bağlıdır.",
    factorCards: [
      { title: "Açıklığa yakın tane", description: "Oranı arttıkça ayırma zorlaşır." },
      { title: "Tabaka kalınlığı", description: "Elek genişliğini ve verimi belirler." },
      { title: "Nem", description: "İnce kumda göz tıkanmasının ana nedenidir." },
      { title: "Elek aşınması", description: "Açıklığı büyütür, analizle izlenir." },
    ],
    relatedLinksTitle: "İlgili Teknik İçerikler",
    relatedLinksDescription: "Eleme hattını tamamlayan sayfalar.",
    relatedLinks: [
      { title: "Silis Kumu Kurutma Prosesi", description: "Kuru eleme öncesi kurutma hesabını okuyun.", href: "/kutuphane/blog/silis-kumu-kurutma-prosesi" },
      { title: "Susuzlandırma Elekleri", description: "Yıkanmış kumun serbest suyunu alan elekleri görün.", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/susuzlandirma-elekleri" },
      ...sharedRelatedLinks,
    ],
  },
  "maden-tesislerinde-toz-toplama-sistemleri": {
    requiredDataTitle: "Toz Toplama Tasarımı İçin Gerekli Veriler",
    requiredDataDescription: "Debi, basınç ve filtre alanı emiş noktaları ve toz karakterinden hesaplanır.",
    requiredDataRows: [
      { label: "Emiş noktaları", purpose: "Toplam debiyi belirler.", request: "Nokta listesi ve muhafaza durumu" },
      { label: "Toz tipi ve tane boyutu", purpose: "Siklon verimi ve hava/kumaş oranını belirler.", request: "Mineral ve analiz" },
      { label: "Gaz sıcaklığı ve nemi", purpose: "Torba malzemesi ve yoğuşma riskini belirler.", request: "Kurutucu egzozu dahil" },
      { label: "Saha yerleşimi", purpose: "Kanal uzunluğu ve basınç kaybını belirler.", request: "Yerleşim planı" },
      { label: "Toz geri kazanımı", purpose: "Toplanan tozun yönünü belirler.", request: "Ürün / ayrı akış / bertaraf" },
    ],
    exampleTitle: "Örnek Basınç Kaybı Bileşenleri",
    exampleDescription: "Fan basıncını oluşturan kalemler; değerler projeye göre hesaplanır.",
    exampleRows: [
      { label: "Muhafaza girişleri", value: "Giriş kayıpları", comment: "Muhafaza tasarımına bağlı" },
      { label: "Kanal ve dirsekler", value: "Sürtünme kayıpları", comment: "Hız ve uzunluğa bağlı" },
      { label: "Siklon", value: "Ayırıcı kaybı", comment: "Siklon tipine bağlı" },
      { label: "Jet pulse filtre", value: "Diferansiyel basınç", comment: "Torba durumuyla değişir" },
      { label: "Baca", value: "Çıkış kaybı", comment: "Yükseklik ve hıza bağlı" },
    ],
    decisionTableTitle: "Ekipman Kararları",
    decisionTableDescription: "Toz toplama hattı emiş noktasından bacaya kadar bütün olarak boyutlandırılır.",
    decisionTableRows: [
      { criterion: "Siklon", description: "İri toz ön ayırma", importance: "Filtre yükünü azaltır", effect: "İnce tozda sınırlı" },
      { criterion: "Jet pulse filtre", description: "İnce toz tutma", importance: "Emisyon kontrolü", effect: "Hava/kumaş oranıyla boyutlanır" },
      { criterion: "Kanal hızı", description: "Çökme ve aşınma dengesi", importance: "Sürekli performans", effect: "Kol dengesi gerekir" },
      { criterion: "Kilitleme", description: "Proses-toz toplama bağı", importance: "İş güvenliği", effect: "Emişsiz çalışmayı önler" },
    ],
    factorCardsTitle: "Toz Toplamada Kritik Faktörler",
    factorCardsDescription: "Emisyon kontrolü ile çalışan sağlığı birlikte tasarlanır.",
    factorCards: [
      { title: "Kaynakta emiş", description: "Toz yayılmadan yakalanır." },
      { title: "Kristal silika", description: "Çalışan maruziyeti sınırlanır." },
      { title: "Diferansiyel basınç", description: "Temizleme ve bakımı yönlendirir." },
      { title: "Aşınma", description: "Dirsek ve siklon ömrünü belirler." },
    ],
    relatedLinksTitle: "İlgili Teknik İçerikler",
    relatedLinksDescription: "Toz toplama hattını tamamlayan sayfalar.",
    relatedLinks: [
      { title: "Toz Toplama Sistemleri", description: "Siklon ve filtre ekipmanlarını görün.", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { title: "Mineral Toz Kurutma Sistemi", description: "Kurutucu egzozunda toz ve ürün dengesini okuyun.", href: "/kutuphane/blog/mineral-toz-kurutma-sistemi" },
      ...sharedRelatedLinks,
    ],
  },
  "kum-kurutma-tesisi": {
    requiredDataTitle: "Kum Kurutma Tesisi Teklifi İçin Gerekli Veriler",
    requiredDataDescription: "Teklif kapsamı ve ekipman boyutu bu verilerle belirlenir.",
    requiredDataRows: [
      { label: "Kum tipi ve kaynağı", purpose: "Aşınma ve toz yükünü belirler.", request: "Doğal / yıkanmış / kırılmış" },
      { label: "Kapasite", purpose: "Tesis ölçeğini belirler.", request: "Ton/saat kuru ürün" },
      { label: "Giriş ve hedef nem", purpose: "Su yükü ve yakıt tüketimini belirler.", request: "Mevsimsel aralık dahil" },
      { label: "Fraksiyonlar", purpose: "Elek ve silo sayısını belirler.", request: "Şartname" },
      { label: "Yakıt tipi", purpose: "Brülör seçimini belirler.", request: "Doğalgaz / LPG / motorin / diğer" },
      { label: "Sevk şekli ve saha", purpose: "Dolum ve yerleşimi belirler.", request: "Dökme / big-bag / torba; saha ölçüleri" },
    ],
    exampleTitle: "Tipik Tedarik Kapsamı",
    exampleDescription: "Projeye göre kapsama alınabilen kalemlerdir; kesin kapsam teknik değerlendirme sonunda belirlenir.",
    exampleRows: [
      { label: "Besleme", value: "Bunker, besleyici, konveyör", comment: "Sabit debi" },
      { label: "Kurutma", value: "Tambur, brülör / sıcak hava", comment: "Su yüküne göre" },
      { label: "Gaz hattı", value: "Siklon, jet pulse filtre, fan, baca", comment: "Emisyon kontrolü" },
      { label: "Son hat", value: "Elevatör, elek, silo, dolum", comment: "Fraksiyon başına" },
      { label: "Otomasyon ve saha", value: "PLC, montaj, devreye alma", comment: "Kapsam sınırları ayrıca belirlenir" },
    ],
    decisionTableTitle: "Yatırım Kararları",
    decisionTableDescription: "Tesis yatırımını belirleyen başlıca kararlar.",
    decisionTableRows: [
      { criterion: "Su yükü", description: "Kapasite × nem farkı", importance: "Ekipman boyutu", effect: "Yatırım ve yakıt maliyeti" },
      { criterion: "Yakıt", description: "Saha altyapısı", importance: "İşletme maliyeti", effect: "Brülör tipi" },
      { criterion: "Son hat", description: "Fraksiyon ve sevk şekli", importance: "Yerleşim", effect: "Silo ve dolum sayısı" },
      { criterion: "Kapsam sınırı", description: "Anahtar teslim veya makine tedariki", importance: "Teklif karşılaştırması", effect: "Sorumluluk dağılımı" },
    ],
    factorCardsTitle: "Tesis Yatırımında Kritik Faktörler",
    factorCardsDescription: "Kurutma, gaz hattı ve son hat birlikte planlanır.",
    factorCards: [
      { title: "Mevsimsel nem", description: "Yıl boyu kapasiteyi belirler." },
      { title: "Darboğaz", description: "Zincirin en yavaş halkası kapasiteyi sınırlar." },
      { title: "Toz kontrolü", description: "Emisyon ve iş sağlığı gerekliliğidir." },
      { title: "Bakım erişimi", description: "Aşınma parçalarının değişim süresini kısaltır." },
    ],
    relatedLinksTitle: "İlgili Teknik İçerikler",
    relatedLinksDescription: "Kum kurutma tesisini tamamlayan sayfalar.",
    relatedLinks: [
      { title: "Silis Kumu Kurutma Prosesi ve Hesabı", description: "Isıtma yöntemi ve örnek su yükü hesabını okuyun.", href: "/kutuphane/blog/silis-kumu-kurutma-prosesi" },
      { title: "Kuvars ve Silis Kumu Eleme Hattı", description: "Fraksiyonlama ve elek seçimini inceleyin.", href: "/kutuphane/blog/kuvars-ve-silis-kumu-eleme-hatti" },
      ...sharedRelatedLinks,
    ],
  },
};
