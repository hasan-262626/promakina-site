import type { DrumSystemsCategoryContent } from "../(tr)/components/drum-systems-category-page";
import { intlRouteLabel } from "./route-label";
import { getTrCategoryCards } from "../(tr)/lib/machine-category-cards";
import { getHeroLabels } from "./chrome";
import { absoluteUrl, type IntlLocale } from "./config";
import { getContent } from "./content";
import { getDrumPageTexts, groupOf, isDrumPageKey } from "./content/drum-pages";
import { intlDrumChrome, trDrumChrome } from "./content/drum-pages/chrome";
import { getDrumSystemsCategoryTexts } from "./drum-systems-category";
import { pathFor, routeKeys, type RouteKey } from "./routes";

/**
 * Makine kategori sayfaları (Tambur Sistemleri dışındaki 9 kategori). Tasarım tek kaynaktır: Tambur Sistemleri
 * şablonu (DrumSystemsCategoryPage). Kartlar TR kategori verisinden gelir; EN/RU/AR aynı sırayı ve görselleri
 * kullanır, yalnızca metinler çevrilir.
 *
 * "Öne Çıkan İç Linkler" kutusu her kategoriye özeldir ve yalnız dört dilde de var olan sayfalara bağlanır;
 * başlık ve açıklamalar ürün sayfalarındaki "teknik kaynaklar" bağlantılarıyla aynı metinlerdir.
 */

export type MachineCategoryKey =
  | "conveying"
  | "crushers"
  | "reactorsTanks"
  | "screeningSystems"
  | "dustCollection"
  | "packagingSystems"
  | "storageSystems"
  | "auxiliaryFlow"
  | "dosingSystems";

const spotlightKeys: Record<MachineCategoryKey, RouteKey[]> = {
  conveying: ["storageSystems", "dosingSystems", "fertilizerPlants"],
  crushers: ["screeningSystems", "conveying", "recycling"],
  reactorsTanks: ["dosingSystems", "chemicalProcess", "fertilizerPlants"],
  screeningSystems: ["crushers", "drumSystems", "mining"],
  dustCollection: ["rotaryDryer", "rotaryAirlock", "chemicalProcess"],
  packagingSystems: ["storageSystems", "dosingSystems", "fertilizerPlants"],
  storageSystems: ["conveying", "dosingSystems", "auxiliaryFlow"],
  auxiliaryFlow: ["storageSystems", "conveying", "dustCollection"],
  dosingSystems: ["storageSystems", "granulatorDrum", "fertilizerPlants"],
};

const trRouteLabels = trDrumChrome.routeLabels as Partial<Record<RouteKey, string>>;
const trResourceDescriptions = trDrumChrome.resourceDescriptions as Partial<Record<RouteKey, string>>;

const trKeyByPath = new Map<string, RouteKey>(routeKeys.map((key) => [pathFor(key, "tr"), key]));

export function machineCategoryKeyForTrSlug(trSlug: string): MachineCategoryKey | undefined {
  const key = trKeyByPath.get(`/makinalar-ekipman/${trSlug}`);
  return key && key in spotlightKeys ? (key as MachineCategoryKey) : undefined;
}

export function isMachineCategoryKey(key: RouteKey): key is MachineCategoryKey {
  return key in spotlightKeys;
}

/** TR Kırıcılar ve Parçalayıcılar sayfasının meta verisi (sayfa ve CMS varsayılanı aynı kaynaktan okur). */
export const CRUSHERS_TR_META = {
  title: "Kırıcılar ve Parçalayıcılar",
  description:
    "Çekiçli kırıcı, zincirli kırıcı, shredder, bıçaklı primer kırıcı, bıçaklı sekonder kırıcı, çeneli kırıcı ve dik milli kırıcı çözümlerini inceleyin.",
};

/** TR spotlight "Teknik Teklif Al" kartı; Tambur Sistemleri sayfasındakiyle aynı metin. */
const trQuoteLink = {
  title: "Teknik Teklif Al",
  description: "Kapasite, ürün tipi ve saha koşullarınıza göre teknik teklif talebinizi iletin.",
  href: "/iletisim",
};

function requireText(value: string | undefined, what: string) {
  if (!value) throw new Error(`Kategori sayfası: ${what} eksik`);
  return value;
}

/** TR kategori sayfası içeriği (hero ve kartlar mevcut TR verisinden). */
export function buildTrMachineCategoryContent(
  trSlug: string,
  hero: DrumSystemsCategoryContent["hero"],
): DrumSystemsCategoryContent {
  const key = machineCategoryKeyForTrSlug(trSlug);
  if (!key) throw new Error(`Kategori sayfası: ${trSlug} tanımlı değil`);
  return {
    hero,
    spotlight: {
      heading: "Öne Çıkan İç Linkler",
      links: [
        ...spotlightKeys[key].map((linkKey) => ({
          title: requireText(trRouteLabels[linkKey], `TR etiket ${linkKey}`),
          description: requireText(trResourceDescriptions[linkKey], `TR açıklama ${linkKey}`),
          href: pathFor(linkKey, "tr"),
        })),
        trQuoteLink,
      ],
    },
    badge: "Ürün Sayfası",
    detailLabel: "Detayları İncele",
    cards: getTrCategoryCards(trSlug),
  };
}

type CardTexts = Record<string, string>;

/** TR kart açıklamalarının çevirileri (TR ürün yoluna göre). */
const cardDescriptions: Record<IntlLocale, CardTexts> = {
  en: {
    "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler": "Durable belt conveyor systems built to custom dimensions for material handling lines.",
    "/makinalar-ekipman/tasima-ekipmanlari/zincirli-konveyorler": "Chain conveyors manufactured for lines that require heavy-duty and controlled transfer.",
    "/makinalar-ekipman/tasima-ekipmanlari/tripper-arabali-konveyor": "Tripper conveyor solutions for controlled product discharge at different points along the line.",
    "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar": "Screw conveyors manufactured for powders, granules and lines that require controlled feeding.",
    "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler": "Chain bucket elevators for vertical transport and heavy-duty processes.",
    "/makinalar-ekipman/tasima-ekipmanlari/bantli-elevatorler": "Belt bucket elevators providing controlled vertical transport for granular and fragile products.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar": "Hammer crushers manufactured for fertilizer, compost and friable mineral lines.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri": "Shredder systems for mixed waste and bulky materials.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/dik-milli-kiricilar": "Vertical shaft impact crushers for controlled size reduction of aggregates, minerals and similar materials.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/ceneli-kiricilar": "Jaw crushers for first-stage crushing of hard and coarse materials.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-primer-kiricilar": "Primary impact crushers for first-stage size reduction.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-sekonder-kiricilar": "Secondary impact crushers manufactured for a controlled output size.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/zincirli-kiricilar": "Chain crushers manufactured for lumpy and semi-moist products.",
    "/makinalar-ekipman/reaktorler-ve-tanklar/sogutma-tanklari": "Cooling tanks manufactured to custom dimensions for liquid products and process streams.",
    "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler": "Agitated reactors manufactured for chemical and liquid process lines.",
    "/makinalar-ekipman/reaktorler-ve-tanklar/basincli-reaktorler": "Pressure reactors manufactured for processes operating under pressure.",
    "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari": "Dissolution tanks for solid-liquid preparation processes.",
    "/makinalar-ekipman/reaktorler-ve-tanklar/stok-tanklari": "Storage tanks manufactured for safe storage and process balance.",
    "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/vibrasyonlu-elekler": "Vibrating screens for precise separation and efficient classification.",
    "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler": "Trommel screens manufactured for organic waste and compost lines.",
    "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/susuzlandirma-elekleri": "Dewatering screens developed to separate water from high-moisture products.",
    "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/sulu-elekler": "Water-assisted wet screening and classification for sand, aggregates and suitable minerals.",
    "/makinalar-ekipman/toz-toplama-sistemleri/pulse-jet-filtreler": "Pulse-jet filter systems for industrial dust collection lines.",
    "/makinalar-ekipman/toz-toplama-sistemleri/siklon-ayiricilar": "Cyclone separators for particle pre-separation and dust load reduction.",
    "/makinalar-ekipman/toz-toplama-sistemleri/baca-yikama-scrubber-sistemleri": "Custom wet scrubber systems for treating process gases with a scrubbing liquid.",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/acik-agiz-torbalama": "Open-mouth bagging systems for granular and powder products.",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/big-bag-dolum": "Big bag filling systems for high-tonnage bagging requirements.",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/paletleme-hatlari": "Palletizing line solutions for preparing filled products for dispatch.",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/sivi-dolum-siseleme": "Liquid filling and bottling solutions for accurately dosed filling and controlled flow in bottling lines.",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/sise-etiketleme-makinasi": "Bottle labeling machines for neat, fast and consistent label application on bottles and similar packaging.",
    "/makinalar-ekipman/depolama-ve-besleme-sistemleri/silo-sistemleri": "Safe, process-compatible silo systems for bulk solids.",
    "/makinalar-ekipman/depolama-ve-besleme-sistemleri/bunker-ve-hazneler": "Bunker and hopper systems for controlled product receipt and feeding.",
    "/makinalar-ekipman/depolama-ve-besleme-sistemleri/teremi-bunkeri": "Truck intake hoppers for controlled receipt, buffering and steady process feeding of bulk solids.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/yukleme-korugu": "Loading bellows for dust-free, safe transfer of powders and granules into bulk tankers, trucks, wagons or ships.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/distributor": "Distributor systems for controlled routing of granular, powder and pellet materials to different process lines.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/klapeler": "Flap diverter solutions for directing, stopping and controlling product flow in bulk handling systems.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/surgulu-kapaklar": "Slide gates for safe, controlled product flow at silo, bunker, screw and conveyor outlets.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/hava-kilidi": "Rotary airlocks for controlled passage of powders and granules, air sealing and balanced transfer between lines.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/blower": "High-efficiency blower systems for pneumatic conveying and air-assisted product transfer lines.",
    "/makinalar-ekipman/dozajlama-sistemleri/mikro-dozajlama": "Micro dosing systems for weighing premix, vitamins, minerals and additives in small amounts and transferring them to the process in a controlled way.",
    "/makinalar-ekipman/dozajlama-sistemleri/makro-dozajlama": "Macro dosing systems for recipe-based weighing and controlled feeding of minerals, salt, DCP, marble powder and similar raw materials.",
    "/makinalar-ekipman/dozajlama-sistemleri/dozaj-bant-kantari": "Weigh belt feeders for weighing and feeding raw materials in a controlled way in continuous-flow production lines.",
  },
  ru: {
    "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler": "Прочные ленточные конвейеры индивидуальных размеров для линий транспортирования материалов.",
    "/makinalar-ekipman/tasima-ekipmanlari/zincirli-konveyorler": "Цепные конвейеры для линий с тяжёлым режимом работы и контролируемой перегрузкой.",
    "/makinalar-ekipman/tasima-ekipmanlari/tripper-arabali-konveyor": "Конвейеры с разгрузочной тележкой для контролируемой выгрузки продукта в разных точках линии.",
    "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar": "Шнековые конвейеры для порошков, гранул и линий с контролируемой подачей.",
    "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler": "Цепные ковшовые элеваторы для вертикального транспорта и тяжёлых режимов работы.",
    "/makinalar-ekipman/tasima-ekipmanlari/bantli-elevatorler": "Ленточные ковшовые элеваторы для контролируемого вертикального транспорта гранулированных и хрупких продуктов.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar": "Молотковые дробилки для линий удобрений, компоста и хрупких минералов.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri": "Шредеры для смешанных отходов и крупногабаритных материалов.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/dik-milli-kiricilar": "Центробежно-ударные дробилки для контролируемого дробления заполнителей, минералов и подобных материалов.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/ceneli-kiricilar": "Щековые дробилки для первичного дробления твёрдых и крупных материалов.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-primer-kiricilar": "Роторные дробилки первичного дробления для первой стадии уменьшения крупности.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-sekonder-kiricilar": "Роторные дробилки вторичного дробления для контролируемой крупности на выходе.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/zincirli-kiricilar": "Цепные дробилки для комковатых и полувлажных продуктов.",
    "/makinalar-ekipman/reaktorler-ve-tanklar/sogutma-tanklari": "Ёмкости охлаждения индивидуальных размеров для жидких продуктов и технологических потоков.",
    "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler": "Реакторы с мешалкой для химических и жидкостных технологических линий.",
    "/makinalar-ekipman/reaktorler-ve-tanklar/basincli-reaktorler": "Реакторы давления для процессов, протекающих под давлением.",
    "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari": "Ёмкости растворения для процессов приготовления растворов из твёрдого сырья.",
    "/makinalar-ekipman/reaktorler-ve-tanklar/stok-tanklari": "Ёмкости хранения для безопасного хранения и баланса процесса.",
    "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/vibrasyonlu-elekler": "Вибрационные грохоты для точного разделения и эффективной классификации.",
    "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler": "Барабанные грохоты для линий органических отходов и компоста.",
    "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/susuzlandirma-elekleri": "Обезвоживающие грохоты для отделения воды от продуктов с высокой влажностью.",
    "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/sulu-elekler": "Мокрое грохочение и классификация с подачей воды для песка, заполнителей и подходящих минералов.",
    "/makinalar-ekipman/toz-toplama-sistemleri/pulse-jet-filtreler": "Импульсные рукавные фильтры для промышленных систем пылеулавливания.",
    "/makinalar-ekipman/toz-toplama-sistemleri/siklon-ayiricilar": "Циклонные сепараторы для предварительного отделения частиц и снижения пылевой нагрузки.",
    "/makinalar-ekipman/toz-toplama-sistemleri/baca-yikama-scrubber-sistemleri": "Мокрые скрубберы по проекту для очистки технологических газов промывочной жидкостью.",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/acik-agiz-torbalama": "Системы фасовки в открытые мешки для гранулированных и порошковых продуктов.",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/big-bag-dolum": "Системы наполнения биг-бэгов для фасовки больших объёмов.",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/paletleme-hatlari": "Линии паллетирования для подготовки фасованной продукции к отгрузке.",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/sivi-dolum-siseleme": "Решения для розлива и бутилирования жидкостей с точным дозированием и контролируемым потоком.",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/sise-etiketleme-makinasi": "Этикетировочные машины для ровного, быстрого и стабильного нанесения этикеток на бутылки и подобную тару.",
    "/makinalar-ekipman/depolama-ve-besleme-sistemleri/silo-sistemleri": "Надёжные силосные системы для сыпучих материалов, согласованные с процессом.",
    "/makinalar-ekipman/depolama-ve-besleme-sistemleri/bunker-ve-hazneler": "Бункеры и воронки для контролируемого приёма и подачи продукта.",
    "/makinalar-ekipman/depolama-ve-besleme-sistemleri/teremi-bunkeri": "Приёмные бункеры для контролируемого приёма, буферизации и равномерной подачи сыпучих материалов в процесс.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/yukleme-korugu": "Загрузочные рукава для беспыльной и безопасной загрузки порошков и гранул в цистерны, самосвалы, вагоны или суда.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/distributor": "Распределители для контролируемого направления гранул, порошков и пеллет на разные технологические линии.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/klapeler": "Перекидные клапаны для направления, остановки и контроля потока продукта в системах транспорта сыпучих.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/surgulu-kapaklar": "Шиберные задвижки для безопасного и контролируемого потока на выпусках силосов, бункеров, шнеков и конвейеров.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/hava-kilidi": "Шлюзовые затворы для контролируемого прохода порошков и гранул, герметизации по воздуху и сбалансированной передачи между линиями.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/blower": "Высокоэффективные воздуходувки для пневмотранспорта и линий перемещения продукта воздухом.",
    "/makinalar-ekipman/dozajlama-sistemleri/mikro-dozajlama": "Системы микродозирования для взвешивания премиксов, витаминов, минералов и добавок в малых количествах и их контролируемой передачи в процесс.",
    "/makinalar-ekipman/dozajlama-sistemleri/makro-dozajlama": "Системы макродозирования для взвешивания по рецепту и контролируемой подачи минералов, соли, DCP, мраморной муки и подобного сырья.",
    "/makinalar-ekipman/dozajlama-sistemleri/dozaj-bant-kantari": "Ленточные весовые дозаторы для взвешивания и контролируемой подачи сырья на линиях непрерывного производства.",
  },
  ar: {
    "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler": "أنظمة نواقل حزامية متينة بمقاسات خاصة لخطوط مناولة المواد.",
    "/makinalar-ekipman/tasima-ekipmanlari/zincirli-konveyorler": "نواقل سلسلية مصنعة للخطوط التي تتطلب خدمة شاقة ونقلًا متحكمًا به.",
    "/makinalar-ekipman/tasima-ekipmanlari/tripper-arabali-konveyor": "حلول نواقل بعربة تفريغ لتفريغ المنتج بشكل متحكم به في نقاط مختلفة على امتداد الخط.",
    "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar": "نواقل لولبية مصنعة للمساحيق والحبيبات والخطوط التي تتطلب تلقيمًا متحكمًا به.",
    "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler": "رافعات قواديس بالسلاسل للنقل الرأسي والعمليات الشاقة.",
    "/makinalar-ekipman/tasima-ekipmanlari/bantli-elevatorler": "رافعات قواديس بالسير توفر نقلًا رأسيًا متحكمًا به للمنتجات الحبيبية والهشة.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar": "كسارات مطرقية مصنعة لخطوط الأسمدة والسماد العضوي والمعادن الهشة.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri": "أنظمة تقطيع للنفايات المختلطة والمواد كبيرة الحجم.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/dik-milli-kiricilar": "كسارات صدمية بعمود رأسي لتقليل الحجم بشكل متحكم به في الركام والمعادن والمواد المشابهة.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/ceneli-kiricilar": "كسارات فكية للتكسير الأولي للمواد الصلبة وكبيرة الحجم.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-primer-kiricilar": "كسارات صدمية أولية للمرحلة الأولى من تقليل الحجم.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-sekonder-kiricilar": "كسارات صدمية ثانوية مصنعة للحصول على حجم مخرج متحكم به.",
    "/makinalar-ekipman/kiricilar-ve-parcalayicilar/zincirli-kiricilar": "كسارات سلسلية مصنعة للمنتجات المتكتلة وشبه الرطبة.",
    "/makinalar-ekipman/reaktorler-ve-tanklar/sogutma-tanklari": "خزانات تبريد مصنعة بمقاسات خاصة للمنتجات السائلة وتيارات العمليات.",
    "/makinalar-ekipman/reaktorler-ve-tanklar/karistiricili-reaktorler": "مفاعلات بخلاط مصنعة لخطوط العمليات الكيميائية والسائلة.",
    "/makinalar-ekipman/reaktorler-ve-tanklar/basincli-reaktorler": "مفاعلات ضغط مصنعة للعمليات التي تعمل تحت الضغط.",
    "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari": "خزانات إذابة لعمليات تحضير المحاليل من المواد الصلبة.",
    "/makinalar-ekipman/reaktorler-ve-tanklar/stok-tanklari": "خزانات تخزين مصنعة للتخزين الآمن وتوازن العملية.",
    "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/vibrasyonlu-elekler": "غرابيل اهتزازية للفصل الدقيق والتصنيف عالي الكفاءة.",
    "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler": "غرابيل أسطوانية دوارة مصنعة لخطوط النفايات العضوية والسماد العضوي.",
    "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/susuzlandirma-elekleri": "غرابيل نزح المياه لفصل الماء عن المنتجات عالية الرطوبة.",
    "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/sulu-elekler": "غربلة وتصنيف رطب بمساعدة الماء للرمل والركام والمعادن المناسبة.",
    "/makinalar-ekipman/toz-toplama-sistemleri/pulse-jet-filtreler": "أنظمة مرشحات النبض النفاث لخطوط جمع الغبار الصناعية.",
    "/makinalar-ekipman/toz-toplama-sistemleri/siklon-ayiricilar": "فواصل سيكلون للفصل الأولي للجسيمات وتقليل حمل الغبار.",
    "/makinalar-ekipman/toz-toplama-sistemleri/baca-yikama-scrubber-sistemleri": "أنظمة غسيل غازات رطبة مصممة حسب المشروع لمعالجة غازات العملية بسائل الغسيل.",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/acik-agiz-torbalama": "أنظمة تعبئة الأكياس المفتوحة للمنتجات الحبيبية والمسحوقة.",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/big-bag-dolum": "أنظمة تعبئة الأكياس الكبيرة لاحتياجات التعبئة عالية الحمولة.",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/paletleme-hatlari": "حلول خطوط التنضيد على المنصات لتجهيز المنتجات المعبأة للشحن.",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/sivi-dolum-siseleme": "حلول تعبئة السوائل والزجاجات بجرعات دقيقة وتدفق متحكم به في خطوط التعبئة.",
    "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/sise-etiketleme-makinasi": "آلات وضع الملصقات على الزجاجات لتطبيق ملصقات منتظم وسريع وموحد على الزجاجات والعبوات المشابهة.",
    "/makinalar-ekipman/depolama-ve-besleme-sistemleri/silo-sistemleri": "أنظمة صوامع آمنة ومتوافقة مع العملية للمواد الصلبة السائبة.",
    "/makinalar-ekipman/depolama-ve-besleme-sistemleri/bunker-ve-hazneler": "أنظمة قواديس وأحواض لاستلام المنتج وتلقيمه بشكل متحكم به.",
    "/makinalar-ekipman/depolama-ve-besleme-sistemleri/teremi-bunkeri": "قواديس استلام للاستلام المتحكم به والتخزين المؤقت والتلقيم المنتظم للمواد الصلبة السائبة إلى العملية.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/yukleme-korugu": "خراطيم تحميل لنقل المساحيق والحبيبات دون غبار وبأمان إلى الصهاريج والشاحنات والعربات أو السفن.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/distributor": "أنظمة موزعات لتوجيه المواد الحبيبية والمسحوقة والكريات بشكل متحكم به إلى خطوط عمليات مختلفة.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/klapeler": "حلول صمامات تحويل لتوجيه تدفق المنتج وإيقافه والتحكم فيه في أنظمة مناولة المواد السائبة.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/surgulu-kapaklar": "بوابات منزلقة لتدفق آمن ومتحكم به للمنتج عند مخارج الصوامع والقواديس والنواقل اللولبية والنواقل.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/hava-kilidi": "صمامات إقفال هوائي دوارة لمرور متحكم به للمساحيق والحبيبات وإحكام الهواء ونقل متوازن بين الخطوط.",
    "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/blower": "أنظمة نافخات عالية الكفاءة لخطوط النقل الهوائي ونقل المنتج بمساعدة الهواء.",
    "/makinalar-ekipman/dozajlama-sistemleri/mikro-dozajlama": "أنظمة جرعات دقيقة لوزن البريمكس والفيتامينات والمعادن والإضافات بكميات صغيرة ونقلها إلى العملية بشكل متحكم به.",
    "/makinalar-ekipman/dozajlama-sistemleri/makro-dozajlama": "أنظمة جرعات كبيرة لوزن المعادن والملح وDCP ومسحوق الرخام والمواد الخام المشابهة وفق الوصفة وتلقيمها بشكل متحكم به.",
    "/makinalar-ekipman/dozajlama-sistemleri/dozaj-bant-kantari": "مغذيات وزنية حزامية لوزن المواد الخام وتلقيمها بشكل متحكم به في خطوط الإنتاج ذات التدفق المستمر.",
  },
};

function productLabel(key: RouteKey, locale: IntlLocale, labelFor: (key: RouteKey) => string) {
  // Sol menülerle aynı mantık: premium şablonlu ürünlerde etiket ürün metninden gelir.
  if (isDrumPageKey(key) && groupOf(key) !== "drumSystems") return getDrumPageTexts(key, locale).breadcrumbLabel;
  return labelFor(key);
}

/** EN/RU/AR kategori sayfası içeriği: TR kartlarıyla aynı sıra ve görseller. */
export function buildIntlMachineCategoryContent(locale: IntlLocale, categoryKey: MachineCategoryKey): DrumSystemsCategoryContent {
  const shared = getDrumSystemsCategoryTexts(locale);
  const labelFor = (key: RouteKey) => (intlRouteLabel(locale, key));
  const quote = shared.spotlight[shared.spotlight.length - 1];
  const trSlug = pathFor(categoryKey, "tr").split("/").pop() ?? "";

  return {
    hero: {
      title: labelFor(categoryKey),
      calculatorHref: pathFor("contact", locale),
      labels: { ...getHeroLabels(locale), calculator: shared.calculatorLabel },
      quoteHref: pathFor("contact", locale),
    },
    spotlight: {
      heading: shared.spotlightHeading,
      links: [
        ...spotlightKeys[categoryKey].map((linkKey) => ({
          title: labelFor(linkKey),
          description: requireText(intlDrumChrome[locale].resourceDescriptions[linkKey], `${locale} açıklama ${linkKey}`),
          href: pathFor(linkKey, locale),
        })),
        { title: quote.title, description: quote.description, href: pathFor("contact", locale) },
      ],
    },
    badge: shared.badge,
    detailLabel: shared.detailLabel,
    cards: getTrCategoryCards(trSlug).map((card) => {
      const productKey = trKeyByPath.get(card.href);
      const description = cardDescriptions[locale][card.href];
      if (!productKey || !description) throw new Error(`Kategori sayfası: ${card.href} için ${locale} rota veya açıklama eksik`);
      const title = productLabel(productKey, locale, labelFor);
      return { key: card.key, href: pathFor(productKey, locale), image: card.image, alt: title, title, description };
    }),
  };
}

/** Görünmeyen yapısal veri: breadcrumb ve ürün listesi (canlı alan adıyla). */
export function buildIntlMachineCategorySchema(locale: IntlLocale, categoryKey: MachineCategoryKey, content: DrumSystemsCategoryContent) {
  const pages = getContent(locale).pages;
  const url = absoluteUrl(pathFor(categoryKey, locale));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: (["home", "machines", categoryKey] as const).map((key, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: pages[key].breadcrumbLabel,
          item: absoluteUrl(pathFor(key, locale)),
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${url}#products`,
        name: content.hero.title,
        itemListElement: content.cards.map((card, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: card.title,
          url: absoluteUrl(card.href),
        })),
      },
    ],
  };
}
