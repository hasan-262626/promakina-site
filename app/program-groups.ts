export type ProgramGroupTool = {
  slug: string;
  title: string;
};

export type ProgramGroup = {
  id: string;
  title: string;
  description: string;
  tools: ProgramGroupTool[];
};

export const programGroups: ProgramGroup[] = [
  {
    id: "makina-kapasite-hesaplari",
    title: "Makina Kapasite Hesapları",
    description:
      "Konveyör, elevatör, helezon ve benzeri hat ekipmanlarında kapasite, seçim ve temel mekanik uygunluk için kullanılan hesap araçları.",
    tools: [
      {
        slug: "helezon-kapasite-ve-mekanik-secim-programi",
        title: "Helezon (Screw Conveyor) Kapasite ve Mekanik Seçim Programı",
      },
      {
        slug: "elevator-kapasite-ve-secim-programi",
        title: "Elevatör Kapasite ve Seçim Programı",
      },
      {
        slug: "konveyor-kapasite-ve-secim-hesap-programi",
        title: "Konveyör Kapasite ve Seçim Hesap Programı",
      },
    ],
  },
  {
    id: "maliyet-hesaplari",
    title: "Maliyet Hesapları",
    description:
      "Sac, profil, boru, kaynak, ağırlık ve imalat kalemleri için malzeme ve ön maliyet odaklı hesap araçları.",
    tools: [
      {
        slug: "sac-kaynak-hesaplari",
        title: "Sac, Kaynak ve İmalat Hesapları",
      },
      {
        slug: "malzeme-agirlik-hesabi",
        title: "Sac Levha / Plaka Ağırlık Hesapları",
      },
      {
        slug: "malzeme-agirlik-hesabi",
        title: "Profil, Boru, Mil ve Lama Ağırlık Hesapları",
      },
      {
        slug: "sac-kaynak-hesaplari",
        title: "Büküm Açılım Boyu",
      },
      {
        slug: "sac-kaynak-hesaplari",
        title: "Abkant Tonaj Hesabı",
      },
      {
        slug: "sac-kaynak-hesaplari",
        title: "Kaynak Metrajı ve Dikiş Hesabı",
      },
    ],
  },
  {
    id: "mil-kaplin-ve-baglanti-hesaplari",
    title: "Mil, Kaplin ve Bağlantı Hesapları",
    description:
      "Mil çapı, kaplin seçimi, kama, segman ve bağlantı ölçülerine yönelik temel mühendislik hesap araçları.",
    tools: [
      {
        slug: "mil-capi-hesabi",
        title: "Mil Çapı Hesabı",
      },
      {
        slug: "kaplin-secimi-on-hesabi",
        title: "Kaplin Seçimi Ön Hesabı",
      },
      {
        slug: "kama-kanali-acim-olculeri",
        title: "Kama Kanalı Açım Ölçüleri",
      },
      {
        slug: "segman-ve-kanal-olculeri",
        title: "Segman ve Kanal Ölçüleri",
      },
    ],
  },
  {
    id: "guc-aktarim-hesaplari",
    title: "Güç Aktarım Hesapları",
    description:
      "Motor, devir, tork, kayış-kasnak, zincir-dişli ve hareket iletimi odaklı temel güç aktarım hesapları.",
    tools: [
      {
        slug: "kayis-kasnak-oran-hesabi",
        title: "Kayış-Kasnak Oran Hesabı",
      },
      {
        slug: "motor-gucu-on-hesabi",
        title: "Motor Gücü Ön Hesabı",
      },
      {
        slug: "zincir-disli-hesabi",
        title: "Zincir ve Dişli Hesapları",
      },
      {
        slug: "duz-helis-disli-hesabi",
        title: "Düz / Helis Dişli Hesabı",
      },
      {
        slug: "kremayer-disli-hesabi",
        title: "Kremayer Dişli Hesabı",
      },
      {
        slug: "triger-disli-hesabi",
        title: "Triger Dişli Hesabı",
      },
      {
        slug: "sonsuz-vida-disli-hesabi",
        title: "Sonsuz Vida Dişli Hesabı",
      },
    ],
  },
  {
    id: "donusum-araclari",
    title: "Dönüşüm Araçları",
    description:
      "Mühendislikte sık kullanılan birim dönüşümleri için hızlı ve sade dönüşüm araçları.",
    tools: [
      {
        slug: "donusum-araclari",
        title: "mm / inch",
      },
      {
        slug: "donusum-araclari",
        title: "kW / HP",
      },
      {
        slug: "donusum-araclari",
        title: "N·m / kgf·m",
      },
      {
        slug: "donusum-araclari",
        title: "dev/dk – s⁻¹",
      },
      {
        slug: "donusum-araclari",
        title: "Yoğunluk – Hacim – Ağırlık",
      },
      {
        slug: "donusum-araclari",
        title: "bar / psi",
      },
      {
        slug: "donusum-araclari",
        title: "Sıcaklık",
      },
      {
        slug: "donusum-araclari",
        title: "Açı Dönüşümü",
      },
    ],
  },
  {
    id: "diger-hesaplamalar",
    title: "Diğer Hesaplamalar",
    description:
      "Özel üretim, talaşlı imalat ve yardımcı mühendislik ihtiyaçları için tamamlayıcı hesap araçları.",
    tools: [
      {
        slug: "talasli-imalat-hesaplari",
        title: "Talaşlı İmalat Hesapları",
      },
      {
        slug: "talasli-imalat-hesaplari",
        title: "Havşa ve Delik Hesapları",
      },
      {
        slug: "iso-gecme-toleranslari",
        title: "ISO Geçme Toleransları",
      },
    ],
  },
];
