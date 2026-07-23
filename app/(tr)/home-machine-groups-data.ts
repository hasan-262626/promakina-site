import { machineCategoryPages } from "./components/machine-group-data";
import {
  getMachinePublicCategorySlug,
  getMachinePublicProductSlug,
} from "./lib/machine-route-utils";

export type HomeMachineGroupCardProduct = {
  label: string;
  href: string;
};

export type HomeMachineGroupCard = {
  eyebrow: string;
  title: string;
  description?: string;
  products: HomeMachineGroupCardProduct[];
  seoNote?: string;
  buttonLabel: string;
  href: string;
  image: string;
  alt: string;
};

const homeMachineGroupCardVisuals: Record<string, { image: string; alt: string }> = {
  "tambur-sistemleri": {
    image: "/images/tambur kurutma/tamkurutma21.jpg",
    alt: "Endüstriyel kurutma ve granülasyon tambur sistemleri",
  },
  "tasima-ekipmanlari": {
    image: "/images/konveyor/konvey38.jpg",
    alt: "Bantlı, zincirli ve vidalı taşıma ekipmanları",
  },
  "kiricilar-ve-parcalayicilar": {
    image: "/images/kirici zincirli/kiricizincir1.jpg",
    alt: "Endüstriyel kırıcı ve parçalayıcı sistemleri",
  },
  "reaktorler-ve-tanklar": {
    image: "/images/sıvı/sivi11.webp",
    alt: "Paslanmaz reaktör ve proses tankları",
  },
  "eleme-ve-siniflandirma-sistemleri": {
    image: "/images/elek/elek1.png",
    alt: "Eleme ve ürün sınıflandırma sistemleri",
  },
  "toz-toplama-sistemleri": {
    image: "/images/siklon/siklon2.jpg",
    alt: "Siklon ve endüstriyel toz toplama sistemleri",
  },
  "paketleme-ve-dolum-sistemleri": {
    image: "/images/paketleme/paket1.jpg",
    alt: "Otomatik paketleme ve dolum ekipmanları",
  },
  "depolama-ve-besleme-sistemleri": {
    image: "/images/bunker/bunker2.jpg",
    alt: "Silo, bunker ve kontrollü besleme sistemleri",
  },
  "yardimci-ekipmanlar-ve-akis-sistemleri": {
    image: "/images/klape/klap1.png",
    alt: "Klape, distribütör ve yardımcı akış ekipmanları",
  },
  "dozajlama-sistemleri": {
    image: "/images/dozaj konveyor/dozaj1.jpg",
    alt: "Mikro ve makro dozajlama sistemleri",
  },
};

const homeMachineGroupCardDescriptions: Record<string, string> = {
  "tambur-sistemleri":
    "Kurutma, soğutma, granülasyon, kaplama ve kompost proseslerinde kullanılan tambur sistemleri; ürünün nem, tane boyutu, sıcaklık ve kalış süresi ihtiyaçlarına göre tasarlanır.",
  "tasima-ekipmanlari":
    "Bantlı konveyör, vidalı helezon, zincirli konveyör ve elevatör çözümleri; dökme katı, toz ve granül malzemelerin tesis içinde kontrollü, güvenli ve sürekli taşınmasını sağlar.",
  "kiricilar-ve-parcalayicilar":
    "Kırıcı ve parçalayıcı sistemler; hammadde boyutunu küçültmek, topakları açmak, proses öncesi homojen besleme sağlamak ve sonraki ekipmanların verimli çalışmasını desteklemek için kullanılır.",
  "reaktorler-ve-tanklar":
    "Reaktörler ve proses tankları; sıvı gübre, kimyasal prosesler, karıştırma, çözündürme, stoklama ve reaksiyon uygulamaları için malzeme özelliklerine uygun olarak projelendirilir.",
  "eleme-ve-siniflandirma-sistemleri":
    "Eleme ve sınıflandırma sistemleri; ürün tane boyutunu ayırmak, geri dönüş akışlarını yönetmek, istenen fraksiyonu elde etmek ve son ürün kalitesini korumak için kullanılır.",
  "toz-toplama-sistemleri":
    "Siklon, jet pulse filtre, fan ve kanal çözümleri; kurutma, kırma, eleme ve taşıma hatlarında oluşan tozu kontrol altına almak ve proses havasını yönetmek için tasarlanır.",
  "paketleme-ve-dolum-sistemleri":
    "Paketleme ve dolum sistemleri; toz, granül ve sıvı ürünlerin torba, big bag, şişe veya bidon formatında kontrollü, tartımlı ve izlenebilir şekilde sevk edilmesini sağlar.",
  "depolama-ve-besleme-sistemleri":
    "Silo, bunker, besleme haznesi ve kontrollü çıkış ekipmanları; hammaddenin prosese düzenli verilmesi, kapasite dalgalanmalarının azaltılması ve hat sürekliliğinin korunması için kullanılır.",
  "yardimci-ekipmanlar-ve-akis-sistemleri":
    "Klape, rotary valf, distribütör, hava kanalı ve bağlantı ekipmanları; ana proses makineleri arasındaki akışı kontrol eder, yönlendirir ve tesis işletmesini daha dengeli hale getirir.",
  "dozajlama-sistemleri":
    "Mikro ve makro dozajlama sistemleri; reçeteli üretimlerde hammadde oranlarının doğru yönetilmesi, tartımlı besleme yapılması ve proses tekrarlanabilirliğinin korunması için geliştirilir.",
};

const canonicalProductHrefOverrides: Record<string, string | null> = {
  "kiricilar-ve-parcalayicilar/bicakli-sekonder-kiricilar": null,
  "depolama-ve-besleme-sistemleri/surgulu-klapeler":
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/surgulu-kapaklar",
};

export const homeMachineGroupCards: HomeMachineGroupCard[] = machineCategoryPages.map(
  (category) => {
    const publicCategorySlug = getMachinePublicCategorySlug(category.slug);
    const cardVisual = homeMachineGroupCardVisuals[publicCategorySlug];

    return {
      eyebrow: category.title,
      title: category.title,
      description: homeMachineGroupCardDescriptions[publicCategorySlug] ?? category.shortDescription,
      products: category.products.flatMap((product) => {
        const publicProductSlug = getMachinePublicProductSlug(product.slug);
        const routeKey = `${publicCategorySlug}/${publicProductSlug}`;
        const overrideHref = canonicalProductHrefOverrides[routeKey];

        if (overrideHref === null) {
          return [];
        }

        return [
          {
            label: product.title,
            href: overrideHref ?? `/makinalar-ekipman/${publicCategorySlug}/${publicProductSlug}`,
          },
        ];
      }),
      seoNote: category.seoNote,
      buttonLabel: "Kategoriyi İncele",
      href: `/makinalar-ekipman/${publicCategorySlug}`,
      image: cardVisual?.image ?? category.cardImage ?? category.heroImage,
      alt: cardVisual?.alt ?? category.title,
    };
  },
);
