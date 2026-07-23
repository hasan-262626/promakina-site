import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/susuzlastirma-destek-sistemleri",
        destination: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
        permanent: true,
      },
      {
        source: "/makinalar/toz-toplama-sistemleri/siklon-ayiricilar",
        destination: "/makinalar-ekipman/toz-toplama-sistemleri/siklon-ayiricilar",
        permanent: true,
      },
      {
        source: "/programlar/vida-acim-olculeri",
        destination: "/programlar",
        permanent: true,
      },
      {
        source: "/sektorler/enerji-ve-biyogaz-sistemleri/yardimci-akis-sistemleri",
        destination: "/sektorler/enerji-ve-biyogaz-sistemleri",
        permanent: true,
      },
      {
        source: "/sektorler/enerji-ve-biyogaz-sistemleri/depolama-ve-dozajlama-cozumleri",
        destination: "/sektorler/enerji-ve-biyogaz-sistemleri",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri/siniflandirma-elekleri",
        destination: "/makinalar-ekipman/eleme-ve-siniflandirma-sistemleri",
        permanent: true,
      },
      {
        source: "/sektorler/enerji-ve-biyogaz-sistemleri/besleme-ve-transfer-hatlari",
        destination: "/sektorler/enerji-ve-biyogaz-sistemleri",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri/ffs-torbalama",
        destination: "/makinalar-ekipman/paketleme-ve-dolum-sistemleri",
        permanent: true,
      },
      {
        source: "/sektorler/geri-donusum-ve-atik-yonetimi/son-urun-hazirlama-cozumleri",
        destination: "/sektorler/geri-donusum-ve-atik-yonetimi",
        permanent: true,
      },
      {
        source: "/makinalar/dozajlama-ve-tartim-sistemleri",
        destination: "/makinalar-ekipman/dozajlama-sistemleri",
        permanent: true,
      },
      {
        source: "/makinalar/yardimci-ekipmanlar-ve-akis-sistemleri/klapeler",
        destination: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/klapeler",
        permanent: true,
      },
      {
        source: "/makinalar/kiricilar-ve-parcalayicilar/ceneli-kırıcılar",
        destination: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/ceneli-kiricilar",
        permanent: true,
      },
      {
        source: "/makinalar/tasima-ekipmanlari/kovali-elevatorler",
        destination: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler",
        permanent: true,
      },
      {
        source: "/sektorler/kompost-ve-organik-atik-tesisleri/hayvansal-ahir-atiklari",
        destination: "/sektorler/kompost-ve-organik-atik-tesisleri",
        permanent: true,
      },
      {
        source: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/son-urun-yonetimi",
        destination: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
        permanent: true,
      },
      {
        source: "/makinalar/yardimci-ekipmanlar-ve-akis-sistemleri/distributor",
        destination: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/distributor",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/kırıcılar-ve-parcalayicilar",
        destination: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
        permanent: true,
      },
      {
        source: "/sektorler/kompost-ve-organik-atik-tesisleri/olgunlastirma-tamburlari",
        destination: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/bicakli-primer-kırıcılar",
        destination: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-primer-kiricilar",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/bicakli-sekonder-kırıcılar",
        destination: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/cekicli-kırıcılar",
        destination: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/ceneli-kırıcılar",
        destination: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/ceneli-kiricilar",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/dik-milli-kırıcılar",
        destination: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/dik-milli-kiricilar",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/shredder-sistemleri",
        destination: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/kırıcılar-ve-parcalayicilar/zincirli-kırıcılar",
        destination: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/zincirli-kiricilar",
        permanent: true,
      },
      {
        source: "/makinalar/dozajlama-sistemleri/dozaj-bant-kantari",
        destination: "/makinalar-ekipman/dozajlama-sistemleri/dozaj-bant-kantari",
        permanent: true,
      },
      {
        source: "/makinalar/yardimci-ekipmanlar-ve-akis-sistemleri/yukleme-korugu",
        destination: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/yukleme-korugu",
        permanent: true,
      },
      {
        source: "/makinalar/dozajlama-sistemleri/makro-dozajlama",
        destination: "/makinalar-ekipman/dozajlama-sistemleri/makro-dozajlama",
        permanent: true,
      },
      {
        source: "/makinalar/depolama-ve-besleme-sistemleri/bunker-ve-hazneler",
        destination: "/makinalar-ekipman/depolama-ve-besleme-sistemleri/bunker-ve-hazneler",
        permanent: true,
      },
      {
        source: "/makinalar/kiricilar-ve-parcalayicilar/dik-milli-kırıcılar",
        destination: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/dik-milli-kiricilar",
        permanent: true,
      },
      {
        source: "/makinalar/kiricilar-ve-parcalayicilar/cekicli-kırıcılar",
        destination: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/cekicli-kiricilar",
        permanent: true,
      },
      {
        source: "/sektorler/geri-donusum-ve-atik-yonetimi/shredder-sistemleri",
        destination: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri",
        permanent: true,
      },
      {
        source: "/makinalar/tasima-ekipmanlari/bant-konveyorler",
        destination: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/depolama-ve-besleme-sistemleri/surgulu-klapeler",
        destination: "/makinalar-ekipman/yardimci-ekipmanlar-ve-akis-sistemleri/surgulu-kapaklar",
        permanent: true,
      },
      {
        source: "/makinalar/dozajlama-sistemleri/mikro-dozajlama",
        destination: "/makinalar-ekipman/dozajlama-sistemleri/mikro-dozajlama",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-sekonder-kiricilar",
        destination: "/makinalar-ekipman/kiricilar-ve-parcalayicilar",
        permanent: true,
      },
      {
        source: "/sektorler/kompost-ve-organik-atik-tesisleri/balik-atiklari",
        destination: "/sektorler/kompost-ve-organik-atik-tesisleri",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/tasima-ekipmanlari/bant-konveyorler",
        destination: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyorler",
        destination: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/tasima-ekipmanlari/kovali-elevatorler",
        destination: "/makinalar-ekipman/tasima-ekipmanlari/zincirli-elevatorler",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburlari",
        destination: "/makinalar-ekipman/tambur-sistemleri/granulator-tamburu",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburlari",
        destination: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburlari",
        destination: "/makinalar-ekipman/tambur-sistemleri/sogutma-tamburu",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburlari",
        destination: "/makinalar-ekipman/tambur-sistemleri/kaplama-tamburu",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburlari",
        destination: "/makinalar-ekipman/tambur-sistemleri/kompost-tamburu",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurma-tanklari",
        destination: "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari",
        permanent: true,
      },
      {
        source: "/sektorler/gubre-ve-granulasyon-tesisleri/granul-kompost",
        destination: "/sektorler/gubre-ve-granulasyon-tesisleri/granul-kompost-tesisleri",
        permanent: true,
      },
      {
        source: "/sektorler/enerji-ve-biyogaz-sistemleri/son-urun-yan-urun-hazirlama",
        destination: "/sektorler/enerji-ve-biyogaz-sistemleri",
        permanent: true,
      },
      {
        source: "/sektorler/geri-donusum-ve-atik-yonetimi/eleme-ve-ayirma-sistemleri",
        destination: "/sektorler/geri-donusum-ve-atik-yonetimi",
        permanent: true,
      },
      {
        source: "/sektorler/kompost-ve-organik-atik-tesisleri/peyzaj-atiklari",
        destination: "/sektorler/kompost-ve-organik-atik-tesisleri",
        permanent: true,
      },
      {
        source: "/sektorler/enerji-ve-biyogaz-sistemleri/biyogaz-tesisleri",
        destination: "/sektorler/enerji-ve-biyogaz-sistemleri",
        permanent: true,
      },
      {
        source: "/sektorler/madencilik-ve-mineral-isleme/kurutma-ve-sogutma-cozumleri",
        destination: "/sektorler/madencilik-ve-mineral-isleme",
        permanent: true,
      },
      {
        source: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/camur-granul-pelet-hazirlama",
        destination: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
        permanent: true,
      },
      {
        source: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/bertaraf-ve-degerlendirme-prosesleri",
        destination: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
        permanent: true,
      },
      {
        source: "/kutuphane/blog/kurutma-tamburu-kapasite-hesabi",
        destination: "/kutuphane/blog/kurutma-tamburu-hesaplama",
        permanent: true,
      },
      {
        source: "/kutuphane/blog/kurutma-tamburu-cap-boy-hesabi",
        destination: "/kutuphane/blog/kurutma-tamburu-hesaplama",
        permanent: true,
      },
      {
        source: "/kutuphane/blog/kurutma-tamburu-nasil-hesaplanir",
        destination: "/kutuphane/blog/kurutma-tamburu-hesaplama",
        permanent: true,
      },
      {
        source: "/cozumler/turquality-danismanligi",
        destination: "/hizmetler",
        permanent: true,
      },
      {
        source: "/cozumler/greenquality-hizmetleri",
        destination: "/hizmetler",
        permanent: true,
      },
      {
        source: "/cozumler/dijital-donusum-hizmetleri",
        destination: "/hizmetler",
        permanent: true,
      },
      {
        source: "/cozumler/kurumsallasma-danismanligi",
        destination: "/hizmetler",
        permanent: true,
      },
      {
        source: "/cozumler/egitim-hizmetleri",
        destination: "/hizmetler",
        permanent: true,
      },
      {
        source: "/makinalar",
        destination: "/makinalar-ekipman",
        permanent: true,
      },
      {
        source: "/makinalar/tasima-sistemleri",
        destination: "/makinalar-ekipman/tasima-ekipmanlari",
        permanent: true,
      },
      {
        source: "/makinalar/tasima-sistemleri/:product",
        destination: "/makinalar-ekipman/tasima-ekipmanlari/:product",
        permanent: true,
      },
      {
        source: "/makinalar/depolama-sistemleri",
        destination: "/makinalar-ekipman/depolama-ve-besleme-sistemleri",
        permanent: true,
      },
      {
        source: "/makinalar/depolama-sistemleri/:product",
        destination: "/makinalar-ekipman/depolama-ve-besleme-sistemleri/:product",
        permanent: true,
      },
      {
        source: "/makinalar/:path*",
        destination: "/makinalar-ekipman/:path*",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/tasima-sistemleri",
        destination: "/makinalar-ekipman/tasima-ekipmanlari",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/tasima-sistemleri/:product",
        destination: "/makinalar-ekipman/tasima-ekipmanlari/:product",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/depolama-sistemleri",
        destination: "/makinalar-ekipman/depolama-ve-besleme-sistemleri",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/depolama-sistemleri/:product",
        destination: "/makinalar-ekipman/depolama-ve-besleme-sistemleri/:product",
        permanent: true,
      },
      {
        source: "/kutuphane/sss",
        destination: "/kutuphane/sik-sorulan-sorular",
        permanent: true,
      },
      {
        source: "/kutuphane/kompost-tesisi-nasil-kurulur",
        destination: "/kutuphane/blog/kompost-tesisi-nasil-kurulur",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/tasima-ekipmanlari/helezon-konveyor",
        destination: "/makinalar-ekipman/tasima-ekipmanlari/vidali-helezonlar",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyor",
        destination: "/makinalar-ekipman/tasima-ekipmanlari/bantli-konveyorler",
        permanent: true,
      },
      {
        source: "/makinalar-ekipman/dozajlama",
        destination: "/makinalar-ekipman/dozajlama-sistemleri",
        permanent: true,
      },
      {
        source: "/sektorler/gubre-uretim-tesisleri",
        destination: "/sektorler/gubre-ve-granulasyon-tesisleri",
        permanent: true,
      },
      {
        source: "/hizmetler/kurutma-tamburu-imalati",
        destination: "/makinalar-ekipman/tambur-sistemleri/kurutma-tamburu",
        permanent: true,
      },
      {
        source: "/hizmetler/kurutma-sistemleri",
        destination: "/makinalar-ekipman/tambur-sistemleri",
        permanent: true,
      },
      {
        source: "/hizmetler/camur-kurutma-tesisi",
        destination: "/sektorler/atik-su-camuru-ve-aritma-cozumleri",
        permanent: true,
      },
      {
        source: "/hizmetler/gubre-tesisi-kurulumu",
        destination: "/sektorler/gubre-ve-granulasyon-tesisleri",
        permanent: true,
      },
      {
        source: "/hizmetler/granul-gubre-uretim-tesisi",
        destination: "/sektorler/gubre-ve-granulasyon-tesisleri",
        permanent: true,
      },
      {
        source: "/hizmetler/organomineral-gubre-tesisi",
        destination: "/sektorler/gubre-ve-granulasyon-tesisleri",
        permanent: true,
      },
      {
        source: "/hizmetler/sivi-gubre-uretim-tesisi",
        destination: "/sektorler/gubre-ve-granulasyon-tesisleri",
        permanent: true,
      },
      {
        source: "/hizmetler/kompost-tesisi-kurulumu",
        destination: "/sektorler/kompost-ve-organik-atik-tesisleri",
        permanent: true,
      },
      {
        source: "/hizmetler/maden-kurutma-ve-eleme-tesisi",
        destination: "/sektorler/madencilik-ve-mineral-isleme",
        permanent: true,
      },
      {
        source: "/hizmetler/silis-kumu-kurutma-tesisi",
        destination: "/sektorler/madencilik-ve-mineral-isleme",
        permanent: true,
      },
      {
        source: "/hizmetler/makina-ve-ekipman-imalati",
        destination: "/hizmetler/makine-imalati",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
