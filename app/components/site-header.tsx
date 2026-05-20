"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { services } from "../data";
import { siteContact } from "../lib/site-contact";
import { trText } from "../lib/tr-text";
import { SocialLinks } from "./social-links";

const serviceMenuSlugs = [
  "anahtar-teslim-tesis-kurulumu",
  "proses-tasarimi-ve-muhendislik",
  "makine-imalati",
  "kurulum-ve-devreye-alma",
  "modernizasyon-ve-revizyon",
  "teknik-danismanlik",
  "bakim-ve-servis",
];

type MegaMenuItem = {
  label: string;
  href: string;
};

type MegaMenuGroup = {
  id: string;
  label: string;
  href: string;
  items: MegaMenuItem[];
};

const machineMenuGroups: MegaMenuGroup[] = [
  {
    id: "tambur-sistemleri",
    label: "Tambur Sistemleri",
    href: "/makinalar-ekipman/tambur-sistemleri",
    items: [
      { label: "Granülatör Tamburları", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Kurutma Tamburları", href: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari" },
      { label: "Soğutma Tamburları", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Kaplama Tamburları", href: "/makinalar-ekipman/tambur-sistemleri" },
      { label: "Kompost Tamburu", href: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu" },
    ],
  },
  {
    id: "tasima-ekipmanlari",
    label: "Taşıma Ekipmanları",
    href: "/makinalar-ekipman/tasima-ekipmanlari",
    items: [
      { label: "Bant Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler" },
      { label: "Zincirli Konveyörler", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Vidalı Helezonlar", href: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler" },
      { label: "Kovalı Elevatörler", href: "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler" },
      { label: "Bantlı Elevatörler", href: "/makinalar-ekipman/tasima-ekipmanlari" },
      { label: "Tripper Arabalı Konveyör", href: "/makinalar-ekipman/tasima-ekipmanlari" },
    ],
  },
  {
    id: "kiricilar-ve-parcalayicilar",
    label: "Kırıcılar ve Parçalayıcılar",
    href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
    items: [
      { label: "Çekiçli Kırıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar" },
      { label: "Çeneli Kırıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/ceneli-kiricilar" },
      { label: "Dik Milli Kırıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/dik-milli-kiricilar" },
      { label: "Zincirli Kırıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/zincirli-kiricilar" },
      { label: "Shredder Sistemleri", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri" },
      { label: "Bıçaklı Primer Kırıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-primer-kiricilar" },
      { label: "Bıçaklı Sekonder Kırıcılar", href: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-sekonder-kiricilar" },
    ],
  },
  {
    id: "reaktorler-ve-tanklar",
    label: "Reaktörler ve Tanklar",
    href: "/makinalar-ekipman/reaktorler-ve-tanklar",
    items: [
      { label: "Soğutma Tankları", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Karıştırıcılı Reaktörler", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Basınçlı Reaktörler", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Çözündürme Tankları", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
      { label: "Stok Tankları", href: "/makinalar-ekipman/reaktorler-ve-tanklar" },
    ],
  },
  {
    id: "eleme-ve-siniflandirma-sistemleri",
    label: "Eleme ve Sınıflandırma Sistemleri",
    href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
    items: [
      { label: "Vibrasyonlu Elekler", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
      { label: "Trommel Elekler", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/trommel-elekler" },
      { label: "Susuzlandırma Elekleri", href: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri" },
    ],
  },
  {
    id: "toz-toplama-sistemleri",
    label: "Toz Toplama Sistemleri",
    href: "/makinalar-ekipman/toz-toplama-sistemleri",
    items: [
      { label: "Jet Pulse Filtreler", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { label: "Siklon Ayırıcılar", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { label: "Torba Filtre Sistemleri", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
      { label: "Kartuş Filtreler", href: "/makinalar-ekipman/toz-toplama-sistemleri" },
    ],
  },
  {
    id: "paketleme-ve-dolum-sistemleri",
    label: "Paketleme ve Dolum Sistemleri",
    href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
    items: [
      { label: "Açık Ağız Torbalama", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Big Bag Dolum", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Paletleme Hatları", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Sıvı Dolum Şişeleme", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
      { label: "Şişe Etiketleme Makinası", href: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri" },
    ],
  },
  {
    id: "depolama-ve-besleme-sistemleri",
    label: "Depolama ve Besleme Sistemleri",
    href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri",
    items: [
      { label: "Silo Sistemleri", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { label: "Bunker ve Hazneler", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { label: "Teremi Bunkeri", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { label: "Vidalı Besleyiciler", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
      { label: "Rotary Valfler", href: "/makinalar-ekipman/depolama-ve-besleme-sistemleri" },
    ],
  },
  {
    id: "dozajlama-sistemleri",
    label: "Dozajlama Sistemleri",
    href: "/makinalar-ekipman/dozajlama-sistemleri",
    items: [
      { label: "Mikro Dozajlama", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { label: "Makro Dozajlama", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { label: "Dozaj Bant Kantarı", href: "/makinalar-ekipman/dozajlama-sistemleri" },
      { label: "Tartımlı Besleme Sistemleri", href: "/makinalar-ekipman/dozajlama-sistemleri" },
    ],
  },
];

const sectorMenuGroups: MegaMenuGroup[] = [
  {
    id: "gubre-ve-granulasyon-tesisleri",
    label: "Gübre Üretim Tesisleri",
    href: "/sektorler/gubre-ve-granulasyon-tesisleri",
    items: [
      { label: "Sıvı Organomineral", href: "/sektorler/gubre-ve-granulasyon-tesisleri/sivi-organomineral" },
      { label: "Sıvı NPK", href: "/sektorler/gubre-ve-granulasyon-tesisleri/sivi-npk" },
      { label: "Sıvı Amino Asit", href: "/sektorler/gubre-ve-granulasyon-tesisleri/sivi-amino-asit" },
      { label: "Organik Sıvı Gübre", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Organik Biyostimülan", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Granül Organomineral", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Granül NPK", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Granül Kompost Tesisleri", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Toz Organomineral", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
      { label: "Toz NPK", href: "/sektorler/gubre-ve-granulasyon-tesisleri" },
    ],
  },
  {
    id: "kompost-ve-organik-atik-tesisleri",
    label: "Kompost ve Organik Atık Tesisleri",
    href: "/sektorler/kompost-ve-organik-atik-tesisleri",
    items: [
      { label: "Evsel Atıklardan Kompost Tesisi", href: "/sektorler/kompost-ve-organik-atik-tesisleri/evsel-organik-atiklar" },
      { label: "Hayvansal Atıklardan Kompost Tesisi", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Tarımsal Atıklardan Kompost Tesisi", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Mezbaha Atıklarından Kompost Tesisi", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Gıda Atıklarından Kompost Tesisi", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
      { label: "Park ve Bahçe Atıklarından Kompost Tesisi", href: "/sektorler/kompost-ve-organik-atik-tesisleri" },
    ],
  },
  {
    id: "enerji-ve-biyogaz-sistemleri",
    label: "Enerji ve Biyogaz Sistemleri",
    href: "/sektorler/enerji-ve-biyogaz-sistemleri",
    items: [
      { label: "Biyogaz Tesisleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Tarımsal Atık Biyogaz Tesisleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Hayvansal Atık Biyogaz Tesisleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Gıda Atıklarından Biyogaz Tesisleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Biyokütle Enerji Tesisleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
      { label: "Biyometan / Gaz Arıtma Çözümleri", href: "/sektorler/enerji-ve-biyogaz-sistemleri" },
    ],
  },
  {
    id: "madencilik-ve-mineral-isleme",
    label: "Madencilik ve Mineral İşleme",
    href: "/sektorler/madencilik-ve-mineral-isleme",
    items: [
      { label: "Silis Maden Tesisleri", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { label: "Perlit İşleme Tesisleri", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { label: "Kalsit İşleme Tesisleri", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { label: "Feldspat İşleme Tesisleri", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { label: "Kırma Eleme ve Sınıflandırma Tesisleri", href: "/sektorler/madencilik-ve-mineral-isleme" },
      { label: "Kurutma ve Soğutma Çözümleri", href: "/sektorler/madencilik-ve-mineral-isleme" },
    ],
  },
  {
    id: "atik-su-camuru-ve-aritma-cozumleri",
    label: "Atık Su Çamuru ve Arıtma Çözümleri",
    href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
    items: [
      { label: "Evsel Atık Su Arıtma Çözümleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "Endüstriyel Atık Su Arıtma Çözümleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "Sanayi Atık Suyu Çözümleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "Arıtma Çamuru Kurutma Sistemleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri" },
      { label: "Arıtma Çamuru Susuzlaştırma Sistemleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/susuzlastirma-destek-sistemleri" },
      { label: "Çamur İşleme ve Nihai Ürün Hazırlama Sistemleri", href: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/camur-besleme" },
    ],
  },
  {
    id: "kimya-ve-proses-endustrisi",
    label: "Kimya ve Proses Endüstrisi",
    href: "/sektorler/kimya-ve-proses-endustrisi",
    items: [
      { label: "Sıvı Kimyasal Hazırlama Tesisleri", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "Reaktörlü Kimyasal Üretim Tesisleri", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "Asit ve Baz Dozajlama Sistemleri", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "Karıştırma ve Homojenizasyon Tesisleri", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "Çözündürme ve Formülasyon Hatları", href: "/sektorler/kimya-ve-proses-endustrisi" },
      { label: "Deterjan ve Temizlik Kimyasal Sistemleri", href: "/sektorler/kimya-ve-proses-endustrisi" },
    ],
  },
  {
    id: "geri-donusum-ve-atik-yonetimi",
    label: "Geri Dönüşüm ve Atık Yönetimi",
    href: "/sektorler/geri-donusum-ve-atik-yonetimi",
    items: [
      { label: "Evsel Atık Geri Dönüşüm Tesisleri", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
      { label: "Metal Geri Dönüşüm Tesisleri", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
      { label: "Plastik Geri Dönüşüm Tesisleri", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
      { label: "Kağıt ve Karton Geri Dönüşüm Tesisleri", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
      { label: "Cam Geri Dönüşüm Tesisleri", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
      { label: "RDF / SRF Hazırlama Tesisleri", href: "/sektorler/geri-donusum-ve-atik-yonetimi" },
    ],
  },
  {
    id: "yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    label: "Yem, Toz ve Dökme Katı Malzeme İşleme",
    href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri",
    items: [
      { label: "Büyükbaş Yem Tesisleri", href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri" },
      { label: "Küçükbaş Yem Tesisleri", href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri" },
      { label: "Kanatlı Yem Tesisleri", href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri" },
      { label: "Balık Yemi Tesisleri", href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri" },
      { label: "Kedi Köpek Maması Tesisleri", href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri" },
      { label: "Toz Karışım ve Premiks Hatları", href: "/sektorler/yem-toz-ve-dokme-kati-malzeme-isleme-sistemleri" },
    ],
  },
];

const libraryMenu = [
  { label: "Blog", href: "/kutuphane/blog" },
  { label: "Teknik Rehberler", href: "/kutuphane/teknik-rehberler" },
  { label: "PDF Kataloglar", href: "/kutuphane/pdf-kataloglar" },
  { label: "Video İçerikler", href: "/kutuphane/video-icerikler" },
  { label: "Sık Sorulan Sorular", href: "/kutuphane/sik-sorulan-sorular" },
  { label: "Terimler Sözlüğü", href: "/kutuphane/terimler-sozlugu" },
  { label: "Programlar", href: "/programlar" },
];

const primaryMobileLinks = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Sektörler", href: "/sektorler" },
  { label: "Projeler", href: "/projeler" },
  { label: "Kütüphane", href: "/kutuphane" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

const defaultMachineGroupId = machineMenuGroups[0].id;
const defaultSectorGroupId = sectorMenuGroups[0].id;

function ChevronDownIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5 7.5 10 12.5 15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DesktopDropdownTrigger({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 whitespace-nowrap text-[15px] font-semibold text-slate-800 transition hover:text-[#278DC0]"
    >
      <span>{label}</span>
      <ChevronDownIcon className="h-4 w-4 text-slate-400 transition duration-200 group-hover:rotate-180 group-hover:text-[#278DC0]" />
    </Link>
  );
}

function findMenuGroup(groups: MegaMenuGroup[], activeId: string) {
  return groups.find((group) => group.id === activeId) ?? groups[0];
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMachinesOpen, setMobileMachinesOpen] = useState(false);
  const [activeMachineGroup, setActiveMachineGroup] = useState(defaultMachineGroupId);
  const [activeSectorGroup, setActiveSectorGroup] = useState(defaultSectorGroupId);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileMachinesOpen(false);
  }, [pathname]);

  const menuServices = services.filter((service) => serviceMenuSlugs.includes(service.slug));
  const currentMachineGroup = useMemo(
    () => findMenuGroup(machineMenuGroups, activeMachineGroup),
    [activeMachineGroup],
  );
  const currentSectorGroup = useMemo(
    () => findMenuGroup(sectorMenuGroups, activeSectorGroup),
    [activeSectorGroup],
  );

  return (
    <header className="sticky top-0 z-[80] bg-white/95 shadow-[0_12px_32px_rgba(11,27,53,0.05)] backdrop-blur-xl">
      <div className="border-b border-slate-200/80">
        <div className="site-container flex items-center justify-end gap-4 py-3 text-[12px] text-slate-700 sm:justify-between sm:text-[13px]">
          <div className="hidden min-w-0 sm:block">
            <p className="truncate font-medium tracking-[0.01em] text-slate-600">
              Endüstriyel Tesis Çözümleri
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3 sm:gap-4 lg:gap-5">
            <SocialLinks variant="compact" className="hidden md:flex" />
            <a
              href={siteContact.phoneHref}
              data-cta-event="phone_click"
              data-cta-label="header_phone"
              className="hidden font-semibold text-slate-900 transition hover:text-[#278DC0] lg:inline-flex"
            >
              {siteContact.phoneDisplay}
            </a>
            <Link href="/iletisim" className="transition hover:text-[#278DC0]">
              İletişim
            </Link>
            <Link href="/kariyer" className="transition hover:text-[#278DC0]">
              Kariyer
            </Link>
            <button type="button" className="transition hover:text-[#278DC0]">
              Dil Değiştir
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200/80 bg-white/96">
        <div className="site-container flex items-center justify-between gap-4 py-4 lg:gap-6 lg:py-5 xl:gap-8 2xl:gap-10">
          <Link href="/" className="flex shrink-0 items-center">
            <div className="min-w-0 leading-none">
              <div className="text-[20px] font-bold uppercase tracking-[0.08em] text-slate-950 lg:text-[22px]">
                PRO MAKINA
              </div>
              <div className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.34em] text-slate-500 lg:text-[10px] lg:tracking-[0.4em]">
                PROCESS ENGINEERING
              </div>
            </div>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-end gap-6 xl:flex xl:pl-10 2xl:gap-8 2xl:pl-14">
            <nav className="min-w-0 flex-1">
              <ul className="flex min-w-0 items-center justify-center gap-4 text-[14px] font-semibold text-slate-800 xl:gap-4 2xl:gap-5">
              <li className="group relative">
                <DesktopDropdownTrigger label="Hizmetler" href="/hizmetler" />
                <div className="pointer-events-none invisible absolute left-1/2 top-full z-[90] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="w-[340px] rounded-[24px] border border-slate-200 bg-white p-3 shadow-[0_24px_60px_rgba(11,27,53,0.14)]">
                    <div className="grid gap-1 text-[15px] text-slate-700">
                      {menuServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/hizmetler/${service.slug}`}
                          className="rounded-xl px-4 py-3 transition hover:bg-slate-50 hover:text-[#278DC0]"
                        >
                          {trText(service.title)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              <li
                className="group relative"
                onMouseEnter={() => setActiveMachineGroup(defaultMachineGroupId)}
              >
                <DesktopDropdownTrigger label="Makinalar & Ekipman" href="/makinalar-ekipman" />
                <div className="pointer-events-none invisible absolute left-1/2 top-full z-[95] w-[1040px] max-w-[calc(100vw-48px)] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(11,27,53,0.18)]">
                    <div className="grid gap-8 px-8 py-8 lg:grid-cols-[0.9fr_1fr_0.96fr]">
                      <div className="rounded-[26px] bg-[linear-gradient(135deg,rgba(11,15,20,0.98),rgba(21,71,100,0.95),rgba(39,141,192,0.88))] p-6 text-white">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                          Makinalar & Ekipman
                        </p>
                        <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-tight">
                          Pro Makina Ekipmanları
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-slate-200">
                          Tambur sistemleri, konveyörler, kırıcılar, reaktörler, tanklar,
                          eleme sistemleri, toz toplama, paketleme ve dozajlama ekipmanlarını
                          proses odaklı mühendislik yaklaşımıyla inceliyoruz.
                        </p>
                        <Link
                          href="/makinalar-ekipman"
                          className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-[#278DC0]/10 hover:text-[#154764]"
                        >
                          Tüm Makinaları İncele
                        </Link>
                      </div>

                      <div>
                        <div className="mb-4 flex items-center gap-4">
                          <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#278DC0]">
                            Ana Makine Grupları
                          </h3>
                          <span className="h-px flex-1 bg-[#278DC0]/25" />
                        </div>
                        <div className="grid gap-2">
                          {machineMenuGroups.map((item) => {
                            const isActive = item.id === currentMachineGroup.id;

                            return (
                              <Link
                                key={item.id}
                                href={item.href}
                                onMouseEnter={() => setActiveMachineGroup(item.id)}
                                className={`group/item flex items-center justify-between rounded-[20px] border px-4 py-3 text-[15px] font-semibold transition ${
                                  isActive
                                    ? "border-[#278DC0]/16 bg-[#278DC0]/10 text-[#278DC0]"
                                    : "border-transparent text-slate-800 hover:border-[#278DC0]/16 hover:bg-[#278DC0]/10 hover:text-[#154764]"
                                }`}
                              >
                                <span>{item.label}</span>
                                <span
                                  className={`text-sm font-bold transition ${
                                    isActive
                                      ? "text-[#278DC0]"
                                      : "text-slate-300 group-hover/item:text-[#278DC0]"
                                  }`}
                                >
                                  →
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <div className="mb-4 flex items-center gap-4">
                          <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#278DC0]">
                            {currentMachineGroup.label}
                          </h3>
                          <span className="h-px flex-1 bg-[#278DC0]/25" />
                        </div>
                        <div className="grid gap-3">
                          {currentMachineGroup.items.map((item) => (
                            <Link
                              key={`${currentMachineGroup.id}-${item.label}`}
                              href={item.href}
                              className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-[#278DC0]/16 hover:bg-white hover:shadow-[0_12px_30px_rgba(11,27,53,0.08)]"
                            >
                              <span className="block text-sm font-semibold text-slate-900">
                                {item.label}
                              </span>
                              <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                                Ürün Sayfası
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className="group relative"
                onMouseEnter={() => setActiveSectorGroup(defaultSectorGroupId)}
              >
                <DesktopDropdownTrigger label="Sektörler" href="/sektorler" />
                <div className="pointer-events-none invisible absolute left-1/2 top-full z-[95] w-[1040px] max-w-[calc(100vw-48px)] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(11,27,53,0.18)]">
                    <div className="grid gap-8 px-8 py-8 lg:grid-cols-[0.92fr_1fr_0.96fr]">
                      <div className="rounded-[26px] bg-[linear-gradient(135deg,rgba(11,15,20,0.98),rgba(21,71,100,0.95),rgba(39,141,192,0.88))] p-6 text-white">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                          Sektörler
                        </p>
                        <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-tight">
                          Pro Makina Sektör Çözümleri
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-slate-200">
                          Gübre, kompost, biyogaz, madencilik, arıtma çamuru, kimya, geri
                          dönüşüm ve dökme katı malzeme proseslerinde sektör bazlı makine ve
                          tesis çözümleri sunuyoruz.
                        </p>
                        <Link
                          href="/sektorler"
                          className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-[#278DC0]/10 hover:text-[#154764]"
                        >
                          Tüm Sektörleri İncele
                        </Link>
                      </div>

                      <div>
                        <div className="mb-4 flex items-center gap-4">
                          <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#278DC0]">
                            Ana Sektörler
                          </h3>
                          <span className="h-px flex-1 bg-[#278DC0]/25" />
                        </div>
                        <div className="grid gap-2">
                          {sectorMenuGroups.map((item) => {
                            const isActive = item.id === currentSectorGroup.id;

                            return (
                              <Link
                                key={item.id}
                                href={item.href}
                                onMouseEnter={() => setActiveSectorGroup(item.id)}
                                className={`group/item flex items-center justify-between rounded-[20px] border px-4 py-3 text-[15px] font-semibold transition ${
                                  isActive
                                    ? "border-[#278DC0]/16 bg-[#278DC0]/10 text-[#278DC0]"
                                    : "border-transparent text-slate-800 hover:border-[#278DC0]/16 hover:bg-[#278DC0]/10 hover:text-[#154764]"
                                }`}
                              >
                                <span>{item.label}</span>
                                <span
                                  className={`text-sm font-bold transition ${
                                    isActive
                                      ? "text-[#278DC0]"
                                      : "text-slate-300 group-hover/item:text-[#278DC0]"
                                  }`}
                                >
                                  →
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <div className="mb-4 flex items-center gap-4">
                          <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#278DC0]">
                            {currentSectorGroup.label}
                          </h3>
                          <span className="h-px flex-1 bg-[#278DC0]/25" />
                        </div>
                        <div className="grid gap-3">
                          {currentSectorGroup.items.map((item) => (
                            <Link
                              key={`${currentSectorGroup.id}-${item.label}`}
                              href={item.href}
                              className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-[#278DC0]/16 hover:bg-white hover:shadow-[0_12px_30px_rgba(11,27,53,0.08)]"
                            >
                              <span className="block text-sm font-semibold text-slate-900">
                                {item.label}
                              </span>
                              <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                                Detay Sayfası
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  href="/projeler"
                  className="whitespace-nowrap text-[15px] transition hover:text-[#278DC0]"
                >
                  Projeler
                </Link>
              </li>

              <li className="group relative">
                <DesktopDropdownTrigger label="Kütüphane" href="/kutuphane" />
                <div className="pointer-events-none invisible absolute left-1/2 top-full z-[90] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="w-[320px] rounded-[24px] border border-slate-200 bg-white p-3 shadow-[0_24px_60px_rgba(11,27,53,0.14)]">
                    <div className="grid gap-1 text-[15px] text-slate-700">
                      {libraryMenu.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="rounded-xl px-4 py-3 transition hover:bg-slate-50 hover:text-[#278DC0]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  href="/hakkimizda"
                  className="whitespace-nowrap text-[15px] transition hover:text-[#278DC0]"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="whitespace-nowrap text-[15px] transition hover:text-[#278DC0]"
                >
                  İletişim
                </Link>
              </li>
              </ul>
            </nav>

            <div className="shrink-0 pl-2 xl:pl-3 2xl:pl-4">
              <Link
                href="/iletisim"
                data-cta-event="quote_button_click"
                data-cta-label="header_quote_button"
                className="inline-flex min-h-[48px] min-w-[114px] shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-slate-200 bg-white px-5 text-[14px] font-semibold text-slate-900 shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition hover:border-[#278DC0] hover:bg-[#278DC0] hover:text-white 2xl:min-h-[52px] 2xl:min-w-[120px] 2xl:px-6 2xl:text-[15px]"
              >
                Teklif Al
              </Link>
            </div>
          </div>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-site-menu"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="inline-flex shrink-0 items-center gap-3 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-[#278DC0] hover:text-[#278DC0] xl:hidden"
          >
            <span>Menü</span>
            <span className="flex h-4 w-4 flex-col justify-center gap-[3px]">
              <span className="block h-[2px] rounded-full bg-current" />
              <span className="block h-[2px] rounded-full bg-current" />
              <span className="block h-[2px] rounded-full bg-current" />
            </span>
          </button>
        </div>

        <div className="site-container">
          <div
            aria-hidden="true"
            className="h-1 rounded-full bg-gradient-to-r from-[#278DC0] via-[#154764] to-[#0B0F14]"
          />
        </div>

        {mobileMenuOpen ? (
          <div id="mobile-site-menu" className="border-t border-slate-200 bg-white xl:hidden">
            <div className="site-container py-4">
              <div className="rounded-[24px] border border-slate-200 bg-white p-3 shadow-[0_14px_42px_rgba(11,27,53,0.08)]">
                <div className="grid gap-1">
                  {primaryMobileLinks.slice(0, 1).map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 hover:text-[#278DC0]"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="rounded-[20px] border border-slate-200 bg-slate-50/90">
                    <button
                      type="button"
                      aria-expanded={mobileMachinesOpen}
                      onClick={() => setMobileMachinesOpen((current) => !current)}
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-900"
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <span>Makinalar & Ekipman</span>
                        <ChevronDownIcon
                          className={`h-4 w-4 text-slate-400 transition ${mobileMachinesOpen ? "rotate-180 text-[#278DC0]" : ""}`}
                        />
                      </span>
                    </button>
                    {mobileMachinesOpen ? (
                      <div className="border-t border-slate-200 px-3 pb-3 pt-2">
                        <Link
                          href="/makinalar-ekipman"
                          className="mb-2 flex rounded-2xl bg-[#0B0F14] px-4 py-3 text-sm font-semibold text-white"
                        >
                          Tüm Makinaları İncele
                        </Link>
                        <div className="grid gap-2">
                          {machineMenuGroups.map((item) => (
                            <Link
                              key={item.id}
                              href={item.href}
                              className="rounded-2xl border border-transparent px-3 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#278DC0]/16 hover:bg-white hover:text-[#278DC0]"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {primaryMobileLinks.slice(1).map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 hover:text-[#278DC0]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4">
                  <a
                    href={siteContact.phoneHref}
                    data-cta-event="phone_click"
                    data-cta-label="mobile_header_phone"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#0b1b35] px-5 text-sm font-semibold text-white transition hover:bg-[#12203f]"
                  >
                    {siteContact.phoneDisplay}
                  </a>
                  <Link
                    href="/iletisim"
                    data-cta-event="quote_button_click"
                    data-cta-label="mobile_header_quote_button"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#278DC0]/20 bg-[#278DC0]/10 px-5 text-sm font-semibold text-[#278DC0] transition hover:bg-[#154764] hover:text-white"
                  >
                    Teknik Teklif Al
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
