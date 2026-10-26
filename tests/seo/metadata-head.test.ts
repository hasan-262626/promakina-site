import { describe, expect, it } from "vitest";
import { shouldServeStreamingMetadata } from "next/dist/server/lib/streaming-metadata";
import nextConfig from "@/next.config";

/**
 * Dinamik sayfalarda Next varsayılan olarak metadata'yı stream eder: yalnız kendi bot listesindekilere <head> verir.
 * Veritabanı/CMS geç yanıt verdiğinde diğer istemcilerde title, description, canonical ve hreflang <body>'ye düşer
 * (canlı site sağlığı taramasında zincirli konveyör sayfasında görüldü). Metadata her istemciye <head> içinde verilmeli.
 */
const userAgents = [
  "ProMakina-AdminHealthScan/1.0",
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  "Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)",
  "Mozilla/5.0 (compatible; SemrushBot/7~bl; +http://www.semrush.com/bot.html)",
  "Screaming Frog SEO Spider/20.0",
  "Mozilla/5.0 (compatible; YandexBot/3.0)",
  "Mozilla/5.0 (compatible; bingbot/2.0)",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36",
];

describe("metadata <head> içinde (streaming metadata kapalı)", () => {
  it("htmlLimitedBots tüm istemcileri kapsar", () => {
    expect(nextConfig.htmlLimitedBots).toBeInstanceOf(RegExp);
  });

  it.each(userAgents)("%s → engelleyici metadata", (ua) => {
    expect(shouldServeStreamingMetadata(ua, nextConfig.htmlLimitedBots?.source)).toBe(false);
  });

  it("bilinen sınır: User-Agent başlığı hiç yoksa Next yine stream eder", () => {
    // Next'in kendi kuralı (yapılandırılamaz). Arama motorları ve site sağlığı taraması her zaman UA gönderir.
    expect(shouldServeStreamingMetadata("", nextConfig.htmlLimitedBots?.source)).toBe(true);
  });
});
