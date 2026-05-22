import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurma-tanklari",
        destination: "/makinalar-ekipman/reaktorler-ve-tanklar/cozundurme-tanklari",
        permanent: true,
      },
      {
        source: "/sektorler/enerji-ve-biyogaz-sistemleri/son-urun-yan-urun-hazirlama",
        destination: "/sektorler/enerji-ve-biyogaz-sistemleri",
        permanent: true,
      },
      {
        source: "/sektorler/geri-donusum-ve-atik-yonetimi/shredder-sistemleri",
        destination: "/makinalar-ekipman/kiricilar-ve-parcalayicilar/shredder-sistemleri",
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
