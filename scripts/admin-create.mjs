// İlk (veya ek) admin kullanıcısını terminalden güvenli şekilde oluşturur.
// Kullanım: DATABASE_URL=... AUTH_SECRET=... npm run admin:create
//  - E-posta ADMIN_BOOTSTRAP_EMAIL'den veya terminalden alınır; parola yalnız terminalden, gizli girişle alınır.
//  - Parola kaynak koda, ortam değişkenine veya log'a yazılmaz; veritabanına Argon2id özeti kaydedilir.
//  - Bu betik bir HTTP route'u değildir; production sitesinden çalıştırılamaz.
import readline from "node:readline";
import { hash } from "@node-rs/argon2";
import { migrations } from "../lib/admin/schema.mjs";

const ROLES = ["SUPER_ADMIN", "ADMIN", "EDITOR"];

// Tek bir readline arayüzü: hem etkileşimli terminalde hem de girdi borudan verildiğinde satırlar sırayla okunur.
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: Boolean(process.stdin.isTTY) });
const lines = rl[Symbol.asyncIterator]();
let muted = false;
const originalWrite = rl._writeToOutput?.bind(rl);
if (originalWrite) rl._writeToOutput = (s) => (muted ? undefined : originalWrite(s));

async function ask(question, { hidden = false } = {}) {
  process.stdout.write(question);
  // Parola girilirken terminal yankısı kapatılır; parola ekranda görünmez.
  muted = hidden;
  const { value } = await lines.next();
  muted = false;
  if (hidden) process.stdout.write("\n");
  return value ?? "";
}

async function connect(url) {
  if (url.startsWith("pglite:")) {
    const { PGlite } = await import("@electric-sql/pglite");
    const dir = url.slice("pglite:".length);
    (await import("node:fs")).mkdirSync(dir, { recursive: true });
    const lite = new PGlite(dir);
    return { query: (sql, params) => lite.query(sql, params), close: () => lite.close() };
  }
  const { default: pg } = await import("pg");
  const client = new pg.Client({ connectionString: url });
  await client.connect();
  return { query: (sql, params) => client.query(sql, params), close: () => client.end() };
}

async function migrate(db) {
  await db.query("create table if not exists schema_migrations (version integer primary key, applied_at timestamptz not null default now())");
  const applied = new Set((await db.query("select version from schema_migrations")).rows.map((r) => r.version));
  for (const m of migrations) {
    if (applied.has(m.version)) continue;
    await db.query("begin");
    for (const statement of m.sql.split(/;\s*\n/).map((s) => s.trim()).filter(Boolean)) await db.query(statement);
    await db.query("insert into schema_migrations (version) values ($1)", [m.version]);
    await db.query("commit");
  }
}

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL tanımlı değil.");
  process.exit(1);
}

const email = (process.env.ADMIN_BOOTSTRAP_EMAIL || (await ask("E-posta: "))).trim().toLowerCase();
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  console.error("Geçersiz e-posta.");
  process.exit(1);
}
const name = (await ask("Ad Soyad: ")).trim() || email.split("@")[0];
const roleAnswer = (await ask(`Rol (${ROLES.join("/")}) [SUPER_ADMIN]: `)).trim().toUpperCase() || "SUPER_ADMIN";
if (!ROLES.includes(roleAnswer)) {
  console.error("Geçersiz rol.");
  process.exit(1);
}
const password = await ask("Parola (en az 12 karakter, harf ve rakam): ", { hidden: true });
const confirm = await ask("Parola (tekrar): ", { hidden: true });
if (password !== confirm) {
  console.error("Parolalar eşleşmiyor.");
  process.exit(1);
}
if (password.length < 12 || password.length > 128 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
  console.error("Parola en az 12 karakter olmalı ve harf ile rakam içermeli.");
  process.exit(1);
}

const db = await connect(url);
try {
  await migrate(db);
  const passwordHash = await hash(password, { algorithm: 2, memoryCost: 19_456, timeCost: 2, parallelism: 1 });
  const existing = await db.query("select id from admin_users where email = $1", [email]);
  if (existing.rows[0]) {
    const reset = (await ask("Bu e-posta kayıtlı. Parola ve rol güncellensin mi? (evet/hayır): ")).trim().toLowerCase();
    if (reset !== "evet") process.exit(0);
    await db.query("update admin_users set password_hash = $2, role = $3, active = true, updated_at = now() where email = $1", [email, passwordHash, roleAnswer]);
    await db.query("delete from admin_sessions where user_id = $1", [existing.rows[0].id]);
  } else {
    await db.query("insert into admin_users (email, name, password_hash, role) values ($1, $2, $3, $4)", [email, name, passwordHash, roleAnswer]);
  }
  await db.query("insert into admin_audit_log (user_email, action, target, detail) values ($1, $2, $3, $4)", [
    email,
    existing.rows[0] ? "user.reset_cli" : "user.create_cli",
    email,
    JSON.stringify({ role: roleAnswer }),
  ]);
  console.log(`Kullanıcı hazır: ${email} (${roleAnswer})`);
} finally {
  rl.close();
  await db.close();
}
