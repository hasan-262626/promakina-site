import { expect, it } from "vitest";
import { serializeJsonLd } from "@/lib/json-ld";

it("JSON-LD içindeki < ve satır ayırıcılar kaçırılır, veri değişmez", () => {
  const data = {
    name: "A </script><script>alert(1)</script>",
    text: `x${String.fromCharCode(0x2028)}y${String.fromCharCode(0x2029)}z`,
    nested: [{ q: "1 < 2" }],
  };
  const out = serializeJsonLd(data);
  expect(out).not.toContain("<");
  expect(out).not.toContain(String.fromCharCode(0x2028));
  expect(out).toContain("\\u003c/script>");
  expect(JSON.parse(out)).toEqual(data);
});
