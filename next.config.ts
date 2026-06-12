import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
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
        source: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/camur-besleme",
        destination: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/kapali-sistem-camur-kurutma",
        permanent: true,
      },
      {
        source: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/susuzlastirma-destek-sistemleri",
        destination: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/camur-susuzlastirma-sistemleri",
        permanent: true,
      },
      {
        source: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/son-urun-yonetimi",
        destination: "/sektorler/atik-su-camuru-ve-aritma-cozumleri/bertaraf-ve-degerlendirme-prosesleri",
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
