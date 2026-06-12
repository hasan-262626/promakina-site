import { crusherPublicProductRecords } from "../components/crusher-product-public-data";
import {
  type CalculatorFamily,
  machineCategoryMap,
} from "../components/machine-group-data";
import {
  getMachinePublicCategorySlug,
  getMachinePublicProductSlug,
  normalizeMachineSlug,
} from "./machine-route-utils";

export type AuxiliarySystemLink = {
  label: string;
  href?: string;
  description?: string;
  onClick?: () => void;
};

type AuxiliarySystemKey =
  | "drumSystems"
  | "transportSystems"
  | "crusherSystems"
  | "reactorSystems"
  | "screeningSystems"
  | "dustSystems"
  | "packagingSystems"
  | "storageSystems"
  | "auxiliaryFlowSystems"
  | "dosageSystems"
  | "beltConveyors"
  | "chainConveyors"
  | "screwConveyors"
  | "chainElevators"
  | "beltElevators"
  | "drumGranulator"
  | "drumDryer"
  | "drumCooler"
  | "drumCoater"
  | "drumCompost"
  | "crusherShredder"
  | "crusherSecondaryKnife"
  | "reactorDissolvingTanks"
  | "packagingLiquidFilling"
  | "storageBunkers"
  | "storageSilos";

type SystemDefinition = {
  label: string;
  description: string;
  categorySlug: string;
  productSlug?: string;
};

const systemDefinitions: Record<AuxiliarySystemKey, SystemDefinition> = {
  drumSystems: {
    label: "Tambur Sistemleri",
    description: "Tambur prosesleriyle entegre çalışan ana ekipman grubuna hızlı erişim sağlar.",
    categorySlug: "tambur-sistemleri",
  },
  transportSystems: {
    label: "Taşıma Ekipmanları",
    description: "Ürünün hat boyunca kontrollü taşınması için kullanılan transfer çözümlerini kapsar.",
    categorySlug: "tasima-ekipmanlari",
  },
  crusherSystems: {
    label: "Kırıcılar ve Parçalayıcılar",
    description: "Boyut küçültme ve ön hazırlık adımlarında kullanılan kırma sistemlerini içerir.",
    categorySlug: "kiricilar-ve-parcalayicilar",
  },
  reactorSystems: {
    label: "Reaktörler ve Tanklar",
    description: "Karıştırma, çözündürme ve stoklama prosesleri için kullanılan reaktör ve tank altyapısını sunar.",
    categorySlug: "reaktorler-ve-tanklar",
  },
  screeningSystems: {
    label: "Eleme ve Sınıflandırma Sistemleri",
    description: "Ürün tane boyutu kontrolü ve kalite ayrımı için kullanılan sınıflandırma ekipmanlarını kapsar.",
    categorySlug: "eleme-ve-siniflandirma-sistemleri",
  },
  dustSystems: {
    label: "Toz Toplama Sistemleri",
    description: "Toz kontrolü, filtrasyon ve emisyon yönetimi için hatla birlikte çalışan sistemleri içerir.",
    categorySlug: "toz-toplama-sistemleri",
  },
  packagingSystems: {
    label: "Paketleme ve Dolum Sistemleri",
    description: "Son ürünün torbalama, dolum ve sevkiyat hazırlığı için kullanılan hat sonu çözümlerini kapsar.",
    categorySlug: "paketleme-ve-dolum-sistemleri",
  },
  storageSystems: {
    label: "Depolama ve Besleme Sistemleri",
    description: "Hammadde ve ürünün stoklanması, tamponlanması ve düzenli beslenmesi için kullanılır.",
    categorySlug: "depolama-ve-besleme-sistemleri",
  },
  auxiliaryFlowSystems: {
    label: "Yardımcı Ekipmanlar ve Akış Sistemleri",
    description: "Akış kontrolü, yönlendirme ve hava destekli transfer için kullanılan yardımcı ekipmanları içerir.",
    categorySlug: "yardimci-ekipmanlar-ve-akis-sistemleri",
  },
  dosageSystems: {
    label: "Dozajlama Sistemleri",
    description: "Hammadde ve katkıların kontrollü, hassas ve reçeteye uygun beslenmesi için kullanılır.",
    categorySlug: "dozajlama-sistemleri",
  },
  beltConveyors: {
    label: "Bantlı Konveyörler",
    description: "Ürünün proses hattında sürekli ve dengeli taşınmasını sağlayan ana transfer ekipmanıdır.",
    categorySlug: "tasima-ekipmanlari",
    productSlug: "bantli-konveyorler",
  },
  chainConveyors: {
    label: "Zincirli Konveyörler",
    description: "Ağır hizmet tipi malzemelerde kontrollü ve kapalı transfer için tercih edilir.",
    categorySlug: "tasima-ekipmanlari",
    productSlug: "zincirli-konveyorler",
  },
  screwConveyors: {
    label: "Vidalı Helezonlar",
    description: "Toz ve granül ürünlerin dozajlı, kapalı ve kompakt şekilde aktarılmasında kullanılır.",
    categorySlug: "tasima-ekipmanlari",
    productSlug: "vidali-helezonlar",
  },
  chainElevators: {
    label: "Zincirli Elevatörler",
    description: "Dikey taşıma gereken ağır hizmet uygulamalarında ürün akışını güvenli şekilde yukarı taşır.",
    categorySlug: "tasima-ekipmanlari",
    productSlug: "zincirli-elevatorler",
  },
  beltElevators: {
    label: "Bantlı Elevatörler",
    description: "Kırılgan ve granül ürünlerin nazik biçimde dikey taşınmasını destekler.",
    categorySlug: "tasima-ekipmanlari",
    productSlug: "bantli-elevatorler",
  },
  drumGranulator: {
    label: "Granülatör Tamburu",
    description: "Toz hammaddenin granül forma dönüştürüldüğü ana granülasyon adımında görev alır.",
    categorySlug: "tambur-sistemleri",
    productSlug: "granulator-tamburu",
  },
  drumDryer: {
    label: "Kurutma Tamburu",
    description: "Ürünün hedef nem seviyesine indirilmesi için termal proses hattında çalışır.",
    categorySlug: "tambur-sistemleri",
    productSlug: "kurutma-tamburu",
  },
  drumCooler: {
    label: "Soğutma Tamburu",
    description: "Sıcak granül veya kurutulmuş ürünün hat sonunda stabil hale gelmesini sağlar.",
    categorySlug: "tambur-sistemleri",
    productSlug: "sogutma-tamburu",
  },
  drumCoater: {
    label: "Kaplama Tamburu",
    description: "Granül ürün yüzeyine katkı, kaplama veya kondisyonlayıcı uygulamalarında kullanılır.",
    categorySlug: "tambur-sistemleri",
    productSlug: "kaplama-tamburu",
  },
  drumCompost: {
    label: "Kompost Tamburu",
    description: "Organik karışımların homojenleştirilmesi ve biyolojik süreç öncesi dengelenmesi için kullanılır.",
    categorySlug: "tambur-sistemleri",
    productSlug: "kompost-tamburu",
  },
  crusherShredder: {
    label: "Shredder Sistemleri",
    description: "Hacimli ve heterojen malzemelerde ilk kademe parçalama ve ön hazırlık sağlar.",
    categorySlug: "kiricilar-ve-parcalayicilar",
    productSlug: "shredder-sistemleri",
  },
  crusherSecondaryKnife: {
    label: "Bıçaklı Sekonder Kırıcılar",
    description: "Primer kırma sonrası daha kontrollü çıkış boyutu elde etmek için ikinci kademede kullanılır.",
    categorySlug: "kiricilar-ve-parcalayicilar",
    productSlug: "bicakli-sekonder-kiricilar",
  },
  reactorDissolvingTanks: {
    label: "Çözündürme Tankları",
    description: "Katı-sıvı karışımların çözündürülmesi ve prosese hazırlanması için kullanılır.",
    categorySlug: "reaktorler-ve-tanklar",
    productSlug: "cozundurme-tanklari",
  },
  packagingLiquidFilling: {
    label: "Sıvı Dolum Şişeleme",
    description: "Sıvı ürünlerin hassas dozajla doluma alınması ve hat sonunda ambalajlanmasını sağlar.",
    categorySlug: "paketleme-ve-dolum-sistemleri",
    productSlug: "sivi-dolum-siseleme",
  },
  storageBunkers: {
    label: "Bunker ve Hazneler",
    description: "Hammaddeyi tamponlamak ve hatta düzenli şekilde beslemek için kullanılır.",
    categorySlug: "depolama-ve-besleme-sistemleri",
    productSlug: "bunker-ve-hazneler",
  },
  storageSilos: {
    label: "Silo Sistemleri",
    description: "Toz, granül ve dökme katı ürünlerin stoklanması ve prosese kontrollü verilmesini sağlar.",
    categorySlug: "depolama-ve-besleme-sistemleri",
    productSlug: "silo-sistemleri",
  },
};

const specificMappings: Record<string, AuxiliarySystemKey[]> = {
  "tambur-sistemleri/granulator-tamburu": [
    "dosageSystems",
    "drumDryer",
    "drumCooler",
    "drumCoater",
    "screeningSystems",
    "dustSystems",
    "beltConveyors",
    "packagingSystems",
  ],
  "tambur-sistemleri/kurutma-tamburu": [
    "storageSystems",
    "beltConveyors",
    "drumCooler",
    "screeningSystems",
    "dustSystems",
    "packagingSystems",
  ],
  "tambur-sistemleri/sogutma-tamburu": [
    "drumDryer",
    "beltConveyors",
    "screeningSystems",
    "dustSystems",
    "packagingSystems",
    "storageSystems",
  ],
  "tambur-sistemleri/kaplama-tamburu": [
    "dosageSystems",
    "drumCooler",
    "screeningSystems",
    "beltConveyors",
    "packagingSystems",
    "dustSystems",
  ],
  "tambur-sistemleri/kompost-tamburu": [
    "storageSystems",
    "crusherSystems",
    "beltConveyors",
    "drumDryer",
    "screeningSystems",
    "packagingSystems",
    "dustSystems",
  ],
  "tasima-ekipmanlari/bantli-konveyorler": [
    "storageSystems",
    "dosageSystems",
    "screeningSystems",
    "crusherSystems",
    "drumSystems",
    "packagingSystems",
    "dustSystems",
  ],
  "tasima-ekipmanlari/zincirli-konveyorler": [
    "storageSilos",
    "storageSystems",
    "chainElevators",
    "dosageSystems",
    "packagingSystems",
  ],
  "tasima-ekipmanlari/tripper-arabali-konveyor": [
    "beltConveyors",
    "storageSilos",
    "storageSystems",
    "dosageSystems",
    "dustSystems",
  ],
  "tasima-ekipmanlari/vidali-helezonlar": [
    "storageSilos",
    "dosageSystems",
    "reactorSystems",
    "packagingSystems",
    "dustSystems",
  ],
  "tasima-ekipmanlari/zincirli-elevatorler": [
    "storageSilos",
    "storageSystems",
    "dosageSystems",
    "screeningSystems",
    "packagingSystems",
    "dustSystems",
  ],
  "tasima-ekipmanlari/bantli-elevatorler": [
    "storageSilos",
    "storageSystems",
    "dosageSystems",
    "screeningSystems",
    "packagingSystems",
    "dustSystems",
  ],
  "kiricilar-ve-parcalayicilar/bicakli-primer-kiricilar": [
    "storageBunkers",
    "beltConveyors",
    "screeningSystems",
    "crusherSecondaryKnife",
    "dustSystems",
    "crusherShredder",
  ],
};

const fallbackMappings: Record<string, AuxiliarySystemKey[]> = {
  "tambur-sistemleri": [
    "storageSystems",
    "beltConveyors",
    "dosageSystems",
    "screeningSystems",
    "dustSystems",
    "packagingSystems",
  ],
  "tasima-ekipmanlari": [
    "storageSystems",
    "dosageSystems",
    "screeningSystems",
    "packagingSystems",
    "dustSystems",
  ],
  "kiricilar-ve-parcalayicilar": [
    "storageSystems",
    "beltConveyors",
    "screeningSystems",
    "dustSystems",
    "packagingSystems",
  ],
  "reaktorler-ve-tanklar": [
    "dosageSystems",
    "packagingLiquidFilling",
    "screwConveyors",
    "reactorDissolvingTanks",
    "storageSystems",
  ],
  "eleme-ve-siniflandirma-sistemleri": [
    "storageSystems",
    "beltConveyors",
    "crusherSystems",
    "drumDryer",
    "drumCooler",
    "packagingSystems",
    "dustSystems",
  ],
  "toz-toplama-sistemleri": [
    "drumDryer",
    "crusherSystems",
    "screeningSystems",
    "packagingSystems",
    "storageSystems",
  ],
  "paketleme-ve-dolum-sistemleri": [
    "storageSilos",
    "beltConveyors",
    "chainElevators",
    "dosageSystems",
    "screeningSystems",
    "dustSystems",
  ],
  "depolama-ve-besleme-sistemleri": [
    "beltConveyors",
    "screwConveyors",
    "chainConveyors",
    "chainElevators",
    "dosageSystems",
    "crusherSystems",
    "packagingSystems",
  ],
  "yardimci-ekipmanlar-ve-akis-sistemleri": [
    "storageSystems",
    "transportSystems",
    "dosageSystems",
    "dustSystems",
    "packagingSystems",
  ],
  "dozajlama-sistemleri": [
    "storageSilos",
    "screwConveyors",
    "beltConveyors",
    "reactorSystems",
    "packagingSystems",
  ],
};

function resolveMachineHref(categorySlug: string, productSlug?: string) {
  const category = machineCategoryMap[categorySlug];

  if (!category) {
    return undefined;
  }

  const publicCategorySlug = getMachinePublicCategorySlug(category.slug);

  if (!productSlug) {
    return `/makinalar-ekipman/${publicCategorySlug}`;
  }

  if (categorySlug === "kiricilar-ve-parcalayicilar") {
    const crusherRecord =
      crusherPublicProductRecords.find(
        (item) =>
          normalizeMachineSlug(item.publicSlug) === normalizeMachineSlug(productSlug) ||
          normalizeMachineSlug(item.dataSlug) === normalizeMachineSlug(productSlug),
      ) ?? null;

    return crusherRecord
      ? `/makinalar-ekipman/${publicCategorySlug}/${crusherRecord.publicSlug}`
      : undefined;
  }

  const product =
    category.products.find(
      (item) => normalizeMachineSlug(item.slug) === normalizeMachineSlug(productSlug),
    ) ?? null;

  if (!product) {
    return undefined;
  }

  return `/makinalar-ekipman/${publicCategorySlug}/${getMachinePublicProductSlug(product.slug)}`;
}

function buildAuxiliaryLink(key: AuxiliarySystemKey): AuxiliarySystemLink | null {
  const definition = systemDefinitions[key];
  const href = resolveMachineHref(definition.categorySlug, definition.productSlug);

  if (!href) {
    return null;
  }

  return {
    label: definition.label,
    href,
    description: definition.description,
  };
}

export function getMachineAuxiliarySystems(args: {
  categorySlug: string;
  productSlug?: string;
  calculatorFamily?: CalculatorFamily;
  title?: string;
}) {
  const normalizedCategorySlug = normalizeMachineSlug(args.categorySlug);
  const normalizedProductSlug = args.productSlug
    ? normalizeMachineSlug(args.productSlug)
    : undefined;
  const mappingKey = normalizedProductSlug
    ? `${normalizedCategorySlug}/${normalizedProductSlug}`
    : normalizedCategorySlug;

  const selectedKeys =
    specificMappings[mappingKey] ??
    fallbackMappings[normalizedCategorySlug] ??
    (args.calculatorFamily ? fallbackMappings[normalizedCategorySlug] : []) ??
    [];

  const seen = new Set<string>();

  return selectedKeys
    .map((key) => buildAuxiliaryLink(key))
    .filter((item): item is AuxiliarySystemLink => {
      if (!item?.href) {
        return false;
      }

      if (seen.has(item.href)) {
        return false;
      }

      seen.add(item.href);
      return true;
    });
}
