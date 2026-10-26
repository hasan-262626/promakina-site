import type { NextConfig } from "next";

/**
 * Public site CSP'si rapor modunda (Content-Security-Policy-Report-Only) kalır; zorunlu moda geçilmedi çünkü:
 * - GTM kapsayıcısına kod dışından eklenen her yeni etiket (piksel, ısı haritası vb.) zorunlu CSP'de sessizce engellenir;
 * - GA4 ülke uzantılı google.<tld> adreslerine istek atar, bunların tamamı listelenemez;
 * - 798 statik sayfada nonce kullanılamadığı için script-src 'unsafe-inline' gerekir; zorunlu modun XSS kazancı sınırlıdır.
 * İhlaller /api/csp-report ile toplanır (Admin → Güvenlik). Birkaç hafta beklenmeyen rapor görülmezse zorunlu moda geçilebilir.
 * /admin için daha sıkı, nonce tabanlı ve zorunlu CSP proxy.ts içinde üretilir.
 */
const publicCsp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline'",
  // GA4 (Google Signals) ölçümünde görülen hedefler: analytics.google.com, *.g.doubleclick.net ve ülke uzantılı
  // google.<tld>/ads/ga-audiences (TR ziyaretçide google.com.tr). Ülke uzantılarının tamamı listelenemez.
  "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.g.doubleclick.net https://*.google.com https://www.google.com.tr https://images.unsplash.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://*.g.doubleclick.net https://*.google.com https://www.googletagmanager.com",
  "frame-src https://www.googletagmanager.com https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  // İhlaller /api/csp-report adresine gruplanmış olarak kaydedilir (Admin → Güvenlik).
  "report-uri /api/csp-report",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // HSTS yalnız HTTPS yanıtlarında tarayıcı tarafından dikkate alınır; preload bilinçli olarak eklenmedi.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  // Yerel (native/WASM) sunucu paketleri paketlenmeden node_modules'tan yüklenir.
  serverExternalPackages: ["@node-rs/argon2", "@electric-sql/pglite", "pg"],
  experimental: {
    // Admin yetkisiz erişimde gerçek 403 (forbidden) yanıtı için.
    authInterrupts: true,
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // Admin kendi zorunlu CSP'sini proxy'de alır; rapor modundaki public CSP admin dışına uygulanır.
        source: "/((?!admin(?:/|$)).*)",
        headers: [{ key: "Content-Security-Policy-Report-Only", value: publicCsp }],
      },
      { source: "/api/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex" }, { key: "Cache-Control", value: "no-store" }] },
    ];
  },
  async redirects() {
    return [
      {
        // Yazım hatalı eşdeğer sayfa doğru adresle birleştirildi (tek adım, 308).
        source: "/kutuphane/blog/helezyon-konveyor-kapasite-hesabi",
        destination: "/kutuphane/blog/helezon-konveyor-kapasite-hesabi",
        permanent: true,
      },
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
        destination: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/bicakli-sekonder-kiricilar",
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
        // Paket 2B-4: blog sürümündeki formül, tablo ve FAQ içeriği kütüphane
        // sürümüne aktarıldı; sıralamada olan kütüphane URL'si keeper'dır.
        source: "/kutuphane/blog/kurutma-tamburu-tasarim-kriterleri",
        destination: "/kutuphane/kurutma-tamburu-tasarim-kriterleri",
        permanent: true,
      },
      // Paket 3C: kurutma blog kümesindeki kopya/çakışan sayfalar keeper sürümlerine birleştirildi.
      {
        // Tambur odaklı SSS'ler proses sayfasına aktarıldı; ticari sorgu ürün sayfasına bırakıldı.
        source: "/kutuphane/blog/silis-kumu-kurutma-tamburu",
        destination: "/kutuphane/blog/silis-kumu-kurutma-prosesi",
        permanent: true,
      },
      {
        source: "/kutuphane/blog/silis-kumu-kurutma-tesisi-nasil-tasarlanir",
        destination: "/kutuphane/blog/silis-kumu-kurutma-prosesi",
        permanent: true,
      },
      {
        source: "/kutuphane/blog/kurutma-tamburu-brulor-secimi",
        destination: "/kutuphane/blog/kurutma-tamburunda-brulor-secimi",
        permanent: true,
      },
      {
        source: "/kutuphane/blog/kurutma-tamburu-fan-secimi",
        destination: "/kutuphane/blog/kurutma-tamburunda-fan-siklon-filtre-secimi",
        permanent: true,
      },
      {
        source: "/kutuphane/blog/digestat-kurutma-ve-kompostlastirma-sistemi",
        destination: "/kutuphane/blog/digestat-kurutma-ve-kompostlastirma",
        permanent: true,
      },
      {
        source: "/kutuphane/blog/kurutma-tamburu-ve-kurutma-sistemleri",
        destination: "/kutuphane/blog/kurutma-sistemleri",
        permanent: true,
      },
      {
        // İngilizce içerik TR ağacında lang="tr" ile yayındaydı; İngilizce sürüme taşındı.
        source: "/cozumler/rotary-dryer-manufacturer",
        destination: "/en/machines-equipment/drum-systems/rotary-dryer",
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
