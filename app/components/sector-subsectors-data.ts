import { quickAccessItems } from "../home-quick-access-data";
import { trText } from "../lib/tr-text";

export type SectorSubsectorItem = {
  slug: string;
  label: string;
  title: string;
  description: string;
};

export type SectorCardItem = {
  slug: string;
  title: string;
  summary: string;
  subLinks: SectorSubsectorItem[];
  image: string;
  alt: string;
};

export type SectorMenuGroup = {
  id: string;
  label: string;
  href: string;
  items: {
    label: string;
    href: string;
  }[];
};

const sectorImageMap = new Map(
  quickAccessItems.map((item) => [
    item.href.replace("/sektorler/", ""),
    {
      image: item.image,
      alt: item.alt,
    },
  ]),
);

export const sectorCards: SectorCardItem[] = [
  {
    slug: "gubre-ve-granulasyon-tesisleri",
    title: "GÃ¼bre ï¿½Sretim Tesisleri",
    summary:
      "SÄ±vÄ±, toz ve granÃ¼l gÃ¼bre Ã¼retim tesisleri iÃ§in proses tasarÄ±mÄ±, ekipman seÃ§imi, makine imalatÄ± ve anahtar teslim Ã§Ã¶zÃ¼m seÃ§enekleri sunuyoruz.",
    image: sectorImageMap.get("gubre-ve-granulasyon-tesisleri")?.image ?? "/images/granul1.jpg",
    alt: sectorImageMap.get("gubre-ve-granulasyon-tesisleri")?.alt ?? "GÃ¼bre Ã¼retim tesisleri gÃ¶rseli",
    subLinks: [
      { slug: "sivi-organomineral", label: "SÄ±vÄ± Organomineral", title: "SÄ±vÄ± Organomineral GÃ¼bre ï¿½Sretim Tesisleri", description: "SÄ±vÄ± organomineral formÃ¼lasyonlara uygun Ã¼retim tesisi Ã§Ã¶zÃ¼mleri." },
      { slug: "sivi-npk", label: "SÄ±vÄ± NPK", title: "SÄ±vÄ± NPK GÃ¼bre ï¿½Sretim Tesisleri", description: "NPK bazlÄ± sÄ±vÄ± Ã¼rÃ¼nler iÃ§in dozajlama ve karÄ±ï¿½xÄ±m odaklÄ± Ã¼retim tesisleri." },
      { slug: "sivi-amino-asit", label: "SÄ±vÄ± Amino Asit", title: "SÄ±vÄ± Amino Asit GÃ¼bre ï¿½Sretim Tesisleri", description: "Amino asit iÃ§erikli sÄ±vÄ± gÃ¼breler iÃ§in kontrollÃ¼ Ã¼retim hatlarÄ±." },
      { slug: "organik-sivi-gubre", label: "Organik SÄ±vÄ± GÃ¼bre", title: "Organik SÄ±vÄ± GÃ¼bre Tesisleri", description: "Organik sÄ±vÄ± Ã¼rÃ¼nler iÃ§in karÄ±ï¿½xÄ±m, depolama ve dolum Ã§Ã¶zÃ¼mleri." },
      { slug: "organik-biyostimulan", label: "Organik BiyostimÃ¼lan", title: "Organik BiyostimÃ¼lan ï¿½Sretim Tesisleri", description: "BiyostimÃ¼lan odaklÄ± sÄ±vÄ± Ã¼rÃ¼nler iÃ§in proses ve dolum tesisleri." },
      { slug: "granul-organomineral", label: "GranÃ¼l Organomineral", title: "GranÃ¼l Organomineral GÃ¼bre ï¿½Sretim Tesisleri", description: "Organomineral Ã¼rÃ¼nlerin granÃ¼l forma dÃ¶nÃ¼ï¿½xtÃ¼rÃ¼ldÃ¼ï¿½xÃ¼ tesis Ã§Ã¶zÃ¼mleri." },
      { slug: "granul-npk", label: "GranÃ¼l NPK", title: "NPK GranÃ¼l GÃ¼bre ï¿½Sretim Tesisleri", description: "GranÃ¼l NPK Ã¼rÃ¼nleri iÃ§in granÃ¼lasyon, kurutma ve eleme tesisleri." },
      { slug: "granul-kompost-tesisleri", label: "GranÃ¼l Kompost Tesisleri", title: "GranÃ¼l Kompost Tesisleri", description: "Kompost bazlÄ± hammaddeleri granÃ¼l son Ã¼rÃ¼ne dÃ¶nÃ¼ï¿½xtÃ¼ren tesisler." },
      { slug: "toz-organomineral", label: "Toz Organomineral", title: "Toz Organomineral GÃ¼bre ï¿½Sretim Tesisleri", description: "Toz organomineral Ã¼rÃ¼nlerde hassas dozajlama ve karÄ±ï¿½xÄ±m tesisleri." },
      { slug: "toz-npk", label: "Toz NPK", title: "NPK Toz GÃ¼bre ï¿½Sretim Tesisleri", description: "Toz NPK Ã¼rÃ¼nler iÃ§in karÄ±ï¿½xÄ±m, eleme ve paketleme odaklÄ± tesisler." },
    ],
  },
  {
    slug: "kompost-ve-organik-atik-tesisleri",
    title: "Kompost ve Organik AtÄ±k Tesisleri",
    summary: "Evsel, tarÄ±msal ve hayvansal organik atÄ±klarÄ± kontrollÃ¼ biÃ§imde iï¿½xleyerek kompost ve son Ã¼rÃ¼n hazÄ±rlama Ã§Ã¶zÃ¼mleri sunuyoruz.",
    image: sectorImageMap.get("kompost-ve-organik-atik-tesisleri")?.image ?? "/images/kompost1.jpg",
    alt: sectorImageMap.get("kompost-ve-organik-atik-tesisleri")?.alt ?? "Kompost ve organik atÄ±k tesisleri",
    subLinks: [
      { slug: "evsel-atiklardan-kompost-tesisi", label: "Evsel AtÄ±klardan Kompost Tesisi", title: "Evsel AtÄ±klardan Kompost Tesisi", description: "Evsel organik atÄ±klarÄ±n kompost Ã¼rÃ¼nÃ¼ne dÃ¶nÃ¼ï¿½xtÃ¼rÃ¼ldÃ¼ï¿½xÃ¼ tesis Ã§Ã¶zÃ¼mleri." },
      { slug: "hayvansal-atiklardan-kompost-tesisi", label: "Hayvansal AtÄ±klardan Kompost Tesisi", title: "Hayvansal AtÄ±klardan Kompost Tesisi", description: "Hayvansal atÄ±klarÄ±n kontrollÃ¼ kompost prosesine alÄ±ndÄ±ï¿½xÄ± tesisler." },
      { slug: "tarimsal-atiklardan-kompost-tesisi", label: "TarÄ±msal AtÄ±klardan Kompost Tesisi", title: "TarÄ±msal AtÄ±klardan Kompost Tesisi", description: "TarÄ±msal yan Ã¼rÃ¼n ve artÄ±klar iÃ§in kompost Ã¼retim altyapÄ±larÄ±." },
      { slug: "mezbaha-atiklarindan-kompost-tesisi", label: "Mezbaha AtÄ±klarÄ±ndan Kompost Tesisi", title: "Mezbaha AtÄ±klarÄ±ndan Kompost Tesisi", description: "Mezbaha kaynaklÄ± organik atÄ±klarÄ±n gÃ¼venli iï¿½xlenmesine uygun tesis kurgularÄ±." },
      { slug: "gida-atiklarindan-kompost-tesisi", label: "GÄ±da AtÄ±klarÄ±ndan Kompost Tesisi", title: "GÄ±da AtÄ±klarÄ±ndan Kompost Tesisi", description: "GÄ±da kaynaklÄ± organik atÄ±klarÄ±n komposta dÃ¶nÃ¼ï¿½xtÃ¼rÃ¼ldÃ¼ï¿½xÃ¼ Ã¼retim tesisleri." },
      { slug: "park-ve-bahce-atiklarindan-kompost-tesisi", label: "Park ve BahÃ§e AtÄ±klarÄ±ndan Kompost Tesisi", title: "Park ve BahÃ§e AtÄ±klarÄ±ndan Kompost Tesisi", description: "Budama ve peyzaj atÄ±klarÄ± iÃ§in kompost hazÄ±rlama ve son Ã¼rÃ¼n tesisleri." },
    ],
  },
  {
    slug: "enerji-ve-biyogaz-sistemleri",
    title: "Enerji ve Biyogaz Sistemleri",
    summary: "Organik girdilerin enerji geri kazanÄ±mÄ±na uygun biÃ§imde hazÄ±rlanmasÄ±, beslenmesi ve yÃ¶netilmesi iÃ§in biyogaz ve biyokÃ¼tle Ã§Ã¶zÃ¼mleri sunuyoruz.",
    image: sectorImageMap.get("enerji-ve-biyogaz-sistemleri")?.image ?? "/images/biogaz1.jpg",
    alt: sectorImageMap.get("enerji-ve-biyogaz-sistemleri")?.alt ?? "Enerji ve biyogaz sistemleri",
    subLinks: [
      { slug: "biyogaz-tesisleri", label: "Biyogaz Tesisleri", title: "Biyogaz Tesisleri", description: "Organik girdileri enerji Ã¼retimine hazÄ±rlayan entegre biyogaz tesisleri." },
      { slug: "tarimsal-atik-biyogaz-tesisleri", label: "TarÄ±msal AtÄ±k Biyogaz Tesisleri", title: "TarÄ±msal AtÄ±k Biyogaz Tesisleri", description: "TarÄ±msal atÄ±klardan biyogaz Ã¼retimine uygun sÃ¼reÃ§ Ã§Ã¶zÃ¼mleri." },
      { slug: "hayvansal-atik-biyogaz-tesisleri", label: "Hayvansal AtÄ±k Biyogaz Tesisleri", title: "Hayvansal AtÄ±k Biyogaz Tesisleri", description: "Hayvansal atÄ±k akÄ±ï¿½xlarÄ± iÃ§in besleme ve biyogaz Ã¼retim tesisleri." },
      { slug: "gida-atiklarindan-biyogaz-tesisleri", label: "GÄ±da AtÄ±klarÄ±ndan Biyogaz Tesisleri", title: "GÄ±da AtÄ±klarÄ±ndan Biyogaz Tesisleri", description: "GÄ±da atÄ±klarÄ±nÄ± biyogaz Ã¼retim sÃ¼recine uygun hale getiren tesisler." },
      { slug: "biyokutle-enerji-tesisleri", label: "BiyokÃ¼tle Enerji Tesisleri", title: "BiyokÃ¼tle Enerji Tesisleri", description: "BiyokÃ¼tle kaynaklarÄ±nÄ± enerjiye dÃ¶nÃ¼ï¿½xtÃ¼rmeye yÃ¶nelik proses Ã§Ã¶zÃ¼mleri." },
      { slug: "biyometan-gaz-aritma-cozumleri", label: "Biyometan / Gaz ArÄ±tma ï¿½!Ã¶zÃ¼mleri", title: "Biyometan / Gaz ArÄ±tma ï¿½!Ã¶zÃ¼mleri", description: "Gaz iyileï¿½xtirme ve arÄ±tma sÃ¼reÃ§leri iÃ§in destek sistemleri." },
    ],
  },
  {
    slug: "madencilik-ve-mineral-isleme",
    title: "Madencilik ve Mineral Ä°ï¿½xleme",
    summary: "Mineral ve cevher hazÄ±rlama hatlarÄ±nda kÄ±rma, eleme, sÄ±nÄ±flandÄ±rma, kurutma ve transfer sÃ¼reÃ§leri iÃ§in tesis Ã§Ã¶zÃ¼mleri geliï¿½xtiriyoruz.",
    image: sectorImageMap.get("madencilik-ve-mineral-isleme")?.image ?? "/images/maden1.jpg",
    alt: sectorImageMap.get("madencilik-ve-mineral-isleme")?.alt ?? "Madencilik ve mineral iï¿½xleme",
    subLinks: [
      { slug: "silis-maden-tesisleri", label: "Silis Maden Tesisleri", title: "Silis Maden Tesisleri", description: "Silis bazlÄ± hammaddeler iÃ§in hazÄ±rlama ve iï¿½xleme tesisleri." },
      { slug: "perlit-isleme-tesisleri", label: "Perlit Ä°ï¿½xleme Tesisleri", title: "Perlit Ä°ï¿½xleme Tesisleri", description: "Perlit cevheri iÃ§in eleme, hazÄ±rlama ve prosese uygun akÄ±ï¿½x Ã§Ã¶zÃ¼mleri." },
      { slug: "kalsit-isleme-tesisleri", label: "Kalsit Ä°ï¿½xleme Tesisleri", title: "Kalsit Ä°ï¿½xleme Tesisleri", description: "Kalsit hammaddeleri iÃ§in kÄ±rma, sÄ±nÄ±flandÄ±rma ve transfer tesisleri." },
      { slug: "feldspat-isleme-tesisleri", label: "Feldspat Ä°ï¿½xleme Tesisleri", title: "Feldspat Ä°ï¿½xleme Tesisleri", description: "Feldspat Ã¼rÃ¼nleri iÃ§in kontrollÃ¼ akÄ±ï¿½x ve Ã¼retim tesis Ã§Ã¶zÃ¼mleri." },
      { slug: "kirma-eleme-ve-siniflandirma-tesisleri", label: "KÄ±rma Eleme ve SÄ±nÄ±flandÄ±rma Tesisleri", title: "KÄ±rma Eleme ve SÄ±nÄ±flandÄ±rma Tesisleri", description: "Primerden son fraksiyona kadar uzanan kÄ±rma-eleme tesis yapÄ±larÄ±." },
      { slug: "kurutma-ve-sogutma-cozumleri", label: "Kurutma ve Soï¿½xutma ï¿½!Ã¶zÃ¼mleri", title: "Kurutma ve Soï¿½xutma ï¿½!Ã¶zÃ¼mleri", description: "Mineral Ã¼rÃ¼nler iÃ§in kurutma, soï¿½xutma ve son kondisyon sÃ¼reÃ§leri." },
    ],
  },
  {
    slug: "kimya-ve-proses-endustrisi",
    title: "Kimya ve Proses EndÃ¼strisi",
    summary: "ReaktÃ¶r, tank, Ã§Ã¶zÃ¼ndÃ¼rme, dozajlama ve transfer altyapÄ±larÄ±yla kontrollÃ¼ ve gÃ¼venli kimyasal Ã¼retim tesisleri tasarlÄ±yoruz.",
    image: sectorImageMap.get("kimya-ve-proses-endustrisi")?.image ?? "/images/kimya1.jpg",
    alt: sectorImageMap.get("kimya-ve-proses-endustrisi")?.alt ?? "Kimya ve proses endÃ¼strisi",
    subLinks: [
      { slug: "sivi-kimyasal-hazirlama-tesisleri", label: "SÄ±vÄ± Kimyasal HazÄ±rlama Tesisleri", title: "SÄ±vÄ± Kimyasal HazÄ±rlama Tesisleri", description: "SÄ±vÄ± kimyasallar iÃ§in karÄ±ï¿½xtÄ±rma, dozajlama ve depolama tesisleri." },
      { slug: "reaktorlu-kimyasal-uretim-tesisleri", label: "ReaktÃ¶rlÃ¼ Kimyasal ï¿½Sretim Tesisleri", title: "ReaktÃ¶rlÃ¼ Kimyasal ï¿½Sretim Tesisleri", description: "Reaksiyon kontrollÃ¼ kimyasal Ã¼retim sÃ¼reÃ§leri iÃ§in reaktÃ¶r altyapÄ±larÄ±." },
      { slug: "asit-ve-baz-dozajlama-sistemleri", label: "Asit ve Baz Dozajlama Sistemleri", title: "Asit ve Baz Dozajlama Sistemleri", description: "Asit ve baz akÄ±ï¿½xlarÄ±nÄ± gÃ¼venli ve hassas biÃ§imde yÃ¶neten proses sistemleri." },
      { slug: "karistirma-ve-homojenizasyon-tesisleri", label: "KarÄ±ï¿½xtÄ±rma ve Homojenizasyon Tesisleri", title: "KarÄ±ï¿½xtÄ±rma ve Homojenizasyon Tesisleri", description: "Homojen kalite gerektiren sÄ±vÄ± ve yarÄ± akÄ±ï¿½xkan Ã¼retim hatlarÄ±." },
      { slug: "cozundurma-ve-formulasyon-hatlari", label: "ï¿½!Ã¶zÃ¼ndÃ¼rme ve FormÃ¼lasyon HatlarÄ±", title: "ï¿½!Ã¶zÃ¼ndÃ¼rme ve FormÃ¼lasyon HatlarÄ±", description: "Toz ve sÄ±vÄ± hammaddeleri formÃ¼lasyona dÃ¶nÃ¼ï¿½xtÃ¼ren Ã§Ã¶zÃ¼ndÃ¼rme hatlarÄ±." },
      { slug: "deterjan-ve-temizlik-kimyasal-sistemleri", label: "Deterjan ve Temizlik Kimyasal Sistemleri", title: "Deterjan ve Temizlik Kimyasal Sistemleri", description: "Temizlik kimyasallarÄ± iÃ§in hazÄ±rlama, karÄ±ï¿½xÄ±m ve son Ã¼rÃ¼n tesisleri." },
    ],
  },
  {
    slug: "geri-donusum-ve-atik-yonetimi",
    title: "Geri DÃ¶nÃ¼ï¿½xÃ¼m ve AtÄ±k YÃ¶netimi",
    summary: "Evsel ve endÃ¼striyel atÄ±klarÄ±n ayrÄ±ï¿½xtÄ±rÄ±lmasÄ±, kÃ¼Ã§Ã¼ltÃ¼lmesi ve geri kazanÄ±ma hazÄ±rlanmasÄ± iÃ§in entegre tesis Ã§Ã¶zÃ¼mleri sunuyoruz.",
    image: sectorImageMap.get("geri-donusum-ve-atik-yonetimi")?.image ?? "/images/geridonusum1.jpg",
    alt: sectorImageMap.get("geri-donusum-ve-atik-yonetimi")?.alt ?? "Geri dÃ¶nÃ¼ï¿½xÃ¼m ve atÄ±k yÃ¶netimi",
    subLinks: [
      { slug: "evsel-atik-geri-donusum-tesisleri", label: "Evsel AtÄ±k Geri DÃ¶nÃ¼ï¿½xÃ¼m Tesisleri", title: "Evsel AtÄ±k Geri DÃ¶nÃ¼ï¿½xÃ¼m Tesisleri", description: "Evsel atÄ±k akÄ±ï¿½xlarÄ± iÃ§in ayrÄ±ï¿½xtÄ±rma ve geri kazanÄ±m tesisleri." },
      { slug: "metal-geri-donusum-tesisleri", label: "Metal Geri DÃ¶nÃ¼ï¿½xÃ¼m Tesisleri", title: "Metal Geri DÃ¶nÃ¼ï¿½xÃ¼m Tesisleri", description: "Metal atÄ±klarÄ±n iï¿½xlenmesine yÃ¶nelik besleme ve transfer odaklÄ± tesisler." },
      { slug: "plastik-geri-donusum-tesisleri", label: "Plastik Geri DÃ¶nÃ¼ï¿½xÃ¼m Tesisleri", title: "Plastik Geri DÃ¶nÃ¼ï¿½xÃ¼m Tesisleri", description: "Plastik atÄ±klar iÃ§in kÄ±rma, eleme ve ayÄ±rma sÃ¼reÃ§leri sunan tesisler." },
      { slug: "kagit-ve-karton-geri-donusum-tesisleri", label: "Kaï¿½xÄ±t ve Karton Geri DÃ¶nÃ¼ï¿½xÃ¼m Tesisleri", title: "Kaï¿½xÄ±t ve Karton Geri DÃ¶nÃ¼ï¿½xÃ¼m Tesisleri", description: "Kaï¿½xÄ±t ve karton atÄ±klar iÃ§in geri kazanÄ±m odaklÄ± hazÄ±rlama tesisleri." },
      { slug: "cam-geri-donusum-tesisleri", label: "Cam Geri DÃ¶nÃ¼ï¿½xÃ¼m Tesisleri", title: "Cam Geri DÃ¶nÃ¼ï¿½xÃ¼m Tesisleri", description: "Cam atÄ±klarÄ±n ayrÄ±ï¿½xtÄ±rÄ±lmasÄ± ve iï¿½xlenmesi iÃ§in tesis Ã§Ã¶zÃ¼mleri." },
      { slug: "rdf-srf-hazirlama-tesisleri", label: "RDF / SRF HazÄ±rlama Tesisleri", title: "RDF / SRF HazÄ±rlama Tesisleri", description: "AtÄ±klardan tÃ¼retilmiï¿½x yakÄ±t hazÄ±rlama sÃ¼reÃ§leri iÃ§in entegre tesisler." },
    ],
  },
  {
    slug: "atik-su-camuru-ve-aritma-cozumleri",
    title: "AtÄ±k Su Ã‡amuru Ã‡Ã¶zÃ¼mleri",
    summary:
      "Pro Makina, atÄ±k su arÄ±tma tesisi kurmaz; arÄ±tma sonrasÄ± oluÅŸan Ã§amurun susuzlaÅŸtÄ±rÄ±lmasÄ±, kurutulmasÄ±, stabilize edilmesi ve bertaraf veya deÄŸerlendirme formuna hazÄ±rlanmasÄ± iÃ§in proses Ã§Ã¶zÃ¼mleri sunar.",
    image: sectorImageMap.get("atik-su-camuru-ve-aritma-cozumleri")?.image ?? "/images/sucamuru1.jpg",
    alt: sectorImageMap.get("atik-su-camuru-ve-aritma-cozumleri")?.alt ?? "AtÄ±k su Ã§amuru Ã§Ã¶zÃ¼mleri",
    subLinks: [
      {
        slug: "kapali-sistem-camur-kurutma",
        label: "KapalÄ± Sistem Ã‡amur Kurutma",
        title: "KapalÄ± Sistem Ã‡amur Kurutma",
        description: "Koku kontrolÃ¼, Ã§evresel uyum ve kontrollÃ¼ proses akÄ±ÅŸÄ± gereken projeler iÃ§in kapalÄ± sistem kurutma kurgularÄ±.",
      },
      {
        slug: "acik-sistem-camur-kurutma",
        label: "AÃ§Ä±k Sistem Ã‡amur Kurutma",
        title: "AÃ§Ä±k Sistem Ã‡amur Kurutma",
        description: "Uygun saha ÅŸartlarÄ±nda daha yalÄ±n akÄ±ÅŸ kurgusuyla planlanan aÃ§Ä±k sistem Ã§amur kurutma Ã§Ã¶zÃ¼mleri.",
      },
      {
        slug: "atik-su-camurundan-aty-hazirlama",
        label: "AtÄ±k Su Ã‡amurundan ATY HazÄ±rlama",
        title: "AtÄ±k Su Ã‡amurundan ATY HazÄ±rlama",
        description: "KurutulmuÅŸ Ã§amurun atÄ±ktan tÃ¼retilmiÅŸ yakÄ±t senaryolarÄ±na hazÄ±rlanmasÄ± iÃ§in proses ve Ã¼rÃ¼n hazÄ±rlama Ã§Ã¶zÃ¼mleri.",
      },
      {
        slug: "atik-su-camurundan-kompost-uretimi",
        label: "AtÄ±k Su Ã‡amurundan Kompost Ãœretimi",
        title: "AtÄ±k Su Ã‡amurundan Kompost Ãœretimi",
        description: "Uygun karÄ±ÅŸÄ±m ve proses ÅŸartlarÄ±nda Ã§amurun organik fraksiyonlarla birlikte kompost deÄŸerlendirme senaryolarÄ±.",
      },
      {
        slug: "camur-granul-pelet-hazirlama",
        label: "Ã‡amur GranÃ¼l / Pelet HazÄ±rlama",
        title: "Ã‡amur GranÃ¼l / Pelet HazÄ±rlama",
        description: "KurutulmuÅŸ Ã§amurun granÃ¼l veya pelet formuna hazÄ±rlanmasÄ±na yÃ¶nelik son Ã¼rÃ¼n kurgularÄ±.",
      },
      {
        slug: "bertaraf-ve-degerlendirme-prosesleri",
        label: "AtÄ±k Su Ã‡amuru Bertaraf ve DeÄŸerlendirme Prosesleri",
        title: "AtÄ±k Su Ã‡amuru Bertaraf ve DeÄŸerlendirme Prosesleri",
        description: "KurutulmuÅŸ veya stabilize edilmiÅŸ Ã§amurun bertaraf, sevkiyat veya geri kazanÄ±m senaryolarÄ±na hazÄ±rlanmasÄ±.",
      },
    ],
  },
  {
    slug: "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    title: "Yem, Toz ve DÃ¶kme KatÄ± Malzeme Ä°ï¿½xleme Sistemleri",
    summary: "Yem, premiks ve toz Ã¼rÃ¼nlerde depolama, dozajlama, taï¿½xÄ±ma, eleme ve son Ã¼rÃ¼n hazÄ±rlama sÃ¼reÃ§leri iÃ§in tesis Ã§Ã¶zÃ¼mleri sunuyoruz.",
    image: sectorImageMap.get("yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri")?.image ?? "/images/yem1.jpg",
    alt: sectorImageMap.get("yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri")?.alt ?? "Yem, toz ve dÃ¶kme katÄ± malzeme iï¿½xleme sistemleri",
    subLinks: [
      { slug: "buyukbas-yem-tesisleri", label: "BÃ¼yÃ¼kbaï¿½x Yem Tesisleri", title: "BÃ¼yÃ¼kbaï¿½x Yem Tesisleri", description: "BÃ¼yÃ¼kbaï¿½x yem Ã¼retimi iÃ§in dozajlama ve karÄ±ï¿½xÄ±m odaklÄ± tesisler." },
      { slug: "kucukbas-yem-tesisleri", label: "KÃ¼Ã§Ã¼kbaï¿½x Yem Tesisleri", title: "KÃ¼Ã§Ã¼kbaï¿½x Yem Tesisleri", description: "KÃ¼Ã§Ã¼kbaï¿½x yem Ã¼rÃ¼nleri iÃ§in depolama ve Ã¼retim tesisleri." },
      { slug: "kanatli-yem-tesisleri", label: "KanatlÄ± Yem Tesisleri", title: "KanatlÄ± Yem Tesisleri", description: "KanatlÄ± yem formÃ¼lasyonlarÄ± iÃ§in hassas besleme ve Ã¼retim hatlarÄ±." },
      { slug: "balik-yemi-tesisleri", label: "BalÄ±k Yemi Tesisleri", title: "BalÄ±k Yemi Tesisleri", description: "BalÄ±k yemi Ã¼retimi iÃ§in besleme, karÄ±ï¿½xÄ±m ve son hat Ã§Ã¶zÃ¼mleri." },
      { slug: "kedi-kopek-mamasi-tesisleri", label: "Kedi KÃ¶pek MamasÄ± Tesisleri", title: "Kedi KÃ¶pek MamasÄ± Tesisleri", description: "Pet food Ã¼retimine uygun proses ve son Ã¼rÃ¼n hazÄ±rlama tesisleri." },
      { slug: "toz-karisim-ve-premiks-hatlari", label: "Toz KarÄ±ï¿½xÄ±m ve Premiks HatlarÄ±", title: "Toz KarÄ±ï¿½xÄ±m ve Premiks HatlarÄ±", description: "Toz Ã¼rÃ¼n ve premiks akÄ±ï¿½xlarÄ± iÃ§in kontrollÃ¼ karÄ±ï¿½xÄ±m tesisleri." },
    ],
  },
];

function normalizeTextTree<T>(value: T, key?: string): T {
  if (typeof value === "string") {
    if (key === "slug" || key === "image") {
      return value;
    }

    return trText(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeTextTree(item)) as T;
  }

  if (value && typeof value === "object") {
    const output: Record<string, unknown> = {};

    for (const [entryKey, entryValue] of Object.entries(value as Record<string, unknown>)) {
      output[entryKey] = normalizeTextTree(entryValue, entryKey);
    }

    return output as T;
  }

  return value;
}

for (let index = 0; index < sectorCards.length; index += 1) {
  sectorCards[index] = normalizeTextTree(sectorCards[index]);
}

export function getSectorCardBySlug(slug: string) {
  return sectorCards.find((sector) => sector.slug === slug);
}

export function buildSectorMenuGroups(): SectorMenuGroup[] {
  return sectorCards.map((sector) => ({
    id: sector.slug,
    label: sector.title,
    href: `/sektorler/${sector.slug}`,
    items: sector.subLinks.map((item) => ({
      label: item.label,
      href: `/sektorler/${sector.slug}/${item.slug}`,
    })),
  }));
}
