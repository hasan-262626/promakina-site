import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { ElevatorSelectionCalculator } from "@/app/(tr)/components/elevator-selection-calculator";

describe("elevatör: sunucu render", () => {
  const html = renderToString(createElement(ElevatorSelectionCalculator)).replace(/<!-- -->/g, "");

  it("varsayılan öneri bantlı elevatör olduğunda bantlı parametre paneli görünür, zincirli panel görünmez", () => {
    expect(html).toContain("Bantlı Elevatör Parametreleri");
    expect(html).not.toContain("Zincirli Elevatör Parametreleri");
    expect(html).toContain("Bant tipi ve sınıfı");
  });

  it("santrifüj boşaltma önerisinde santrifüj kafa tipi gösterilir", () => {
    expect(html).toContain("Santrifüj boşaltma");
    expect(html).toContain("Yüksek hızlı santrifüj kafa");
  });

  it("varsayılan seçimler seçenek listesindeki değerlerle eşleşir (select boş açılmaz)", () => {
    for (const value of ["Ortam sıcaklığı", "Sistem hesaplasın", "Lastik kaplı"]) {
      expect(html).toMatch(new RegExp(`<option value="${value}" selected=""`));
    }
  });

  it("varsayılan aksesuarlar seçili gelir ve bakım kapağı sonucu 'Seçildi' görünür", () => {
    expect((html.match(/>Seçildi</g) ?? []).length).toBeGreaterThanOrEqual(4);
    expect(html).not.toMatch(/Bakım kapağı ihtiyacı<\/p><p[^>]*>Önerilir/);
  });

  it("varsayılan hesap sonuçları korunur", () => {
    expect(html).toContain("19,80 ton/saat");
    expect(html).toContain("17.333 adet/saat");
    expect(html).toContain("⚠ Sınırda");
  });
});
