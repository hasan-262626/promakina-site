import { describe, expect, it } from "vitest";
import { analyzeRedirects, wouldCreateLoop, type RedirectEdge } from "@/lib/admin/redirect-analysis";

const e = (source: string, destination: string): RedirectEdge => ({ source, destination, origin: "admin" });

describe("yönlendirme analizi", () => {
  it("zinciri tespit eder ve doğrudan hedef önerir", () => {
    const issues = analyzeRedirects([e("/a", "/b"), e("/b", "/c")]);
    expect(issues).toContainEqual({ type: "chain", path: ["/a", "/b", "/c"], suggestion: { source: "/a", destination: "/c" } });
  });

  it("döngüyü tespit eder", () => {
    const issues = analyzeRedirects([e("/a", "/b"), e("/b", "/a")]);
    expect(issues.filter((i) => i.type === "loop")).toHaveLength(1);
  });

  it("kendine yönlendirme döngüdür", () => {
    expect(analyzeRedirects([e("/a", "/a")])[0].type).toBe("loop");
  });

  it("tek adımlı yönlendirmede sorun yoktur", () => {
    expect(analyzeRedirects([e("/a", "/b"), e("/c", "/d")])).toEqual([]);
  });

  it("eklenmeden önce döngü oluşturacak kural yakalanır", () => {
    expect(wouldCreateLoop([e("/b", "/a")], { source: "/a", destination: "/b" })).toBe(true);
    expect(wouldCreateLoop([e("/b", "/c")], { source: "/a", destination: "/b" })).toBe(false);
  });
});
