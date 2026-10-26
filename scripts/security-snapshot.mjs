// Bağımlılık güvenlik özeti: `npm audit` sonucunun yalnız sayıları ve paket adları kaydedilir.
// Admin > Güvenlik ekranı bu dosyayı gösterir. Kullanım: npm run security:snapshot
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
let raw;
try {
  // Sabit komut; kullanıcı girdisi içermez. npm audit açık bulduğunda sıfırdan farklı kodla çıkar.
  raw = execSync("npm audit --json", { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
} catch (error) {
  raw = error.stdout;
}
const report = JSON.parse(raw);
const packages = Object.entries(report.vulnerabilities ?? {}).map(([name, v]) => ({
  name,
  severity: v.severity,
  range: v.range,
  direct: v.isDirect,
  fixAvailable: typeof v.fixAvailable === "object" ? `${v.fixAvailable.name}@${v.fixAvailable.version}${v.fixAvailable.isSemVerMajor ? " (major)" : ""}` : Boolean(v.fixAvailable),
}));
const out = { generatedAt: new Date().toISOString(), counts: report.metadata?.vulnerabilities ?? {}, packages };
const file = path.join(root, "lib", "admin", "generated", "security-snapshot.json");
fs.mkdirSync(path.dirname(file), { recursive: true });
fs.writeFileSync(file, JSON.stringify(out, null, 2) + "\n");
console.log("security-snapshot:", JSON.stringify(out.counts));
