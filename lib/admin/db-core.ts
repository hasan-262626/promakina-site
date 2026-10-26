import { migrations } from "./schema.mjs";

/**
 * Veritabanı erişimi. Bu dosya `server-only` içe aktarmaz; proxy (yönlendirme önbelleği) de kullanır.
 * Tüm sorgular parametrelidir ($1, $2 ...); SQL metnine kullanıcı verisi eklenmez.
 *
 * Sürücü seçimi DATABASE_URL şemasına göre yapılır:
 *  - postgres:// veya postgresql://  → node-postgres havuzu (production)
 *  - pglite:<klasör>                 → gömülü Postgres (yalnız yerel geliştirme/test; Vercel'de kapalı)
 */

export type QueryResult<T> = { rows: T[] };
export type Db = {
  query<T = Record<string, unknown>>(sql: string, params?: unknown[]): Promise<QueryResult<T>>;
};

declare global {
  var __promakinaAdminDb: Promise<Db> | undefined;
}

export function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

export async function runMigrations(db: Db) {
  await db.query("create table if not exists schema_migrations (version integer primary key, applied_at timestamptz not null default now())");
  const applied = new Set((await db.query<{ version: number }>("select version from schema_migrations")).rows.map((r) => r.version));
  for (const migration of migrations) {
    if (applied.has(migration.version)) continue;
    await db.query("begin");
    try {
      // Migration metni sabit kaynak koddur; kullanıcı girdisi içermez.
      for (const statement of migration.sql.split(/;\s*\n/).map((s: string) => s.trim()).filter(Boolean)) {
        await db.query(statement);
      }
      await db.query("insert into schema_migrations (version) values ($1)", [migration.version]);
      await db.query("commit");
    } catch (error) {
      await db.query("rollback");
      throw error;
    }
  }
}

async function connect(): Promise<Db> {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL tanımlı değil");

  if (url.startsWith("pglite:")) {
    if (process.env.VERCEL === "1") throw new Error("Gömülü veritabanı Vercel üzerinde kullanılamaz");
    const { PGlite } = await import("@electric-sql/pglite");
    const dir = url.slice("pglite:".length) || undefined;
    if (dir) (await import("node:fs")).mkdirSync(dir, { recursive: true });
    const lite = new PGlite(dir);
    const db: Db = {
      async query(sql, params) {
        const result = await lite.query(sql, params as unknown[] | undefined);
        return { rows: result.rows as never[] };
      },
    };
    await runMigrations(db);
    return db;
  }

  if (!/^postgres(ql)?:\/\//.test(url)) throw new Error("DATABASE_URL desteklenmeyen şema");
  const { Pool } = await import("pg");
  const pool = new Pool({ connectionString: url, max: 5, idleTimeoutMillis: 10_000, connectionTimeoutMillis: 5_000 });
  // Migration işlemi (begin/commit) tek bir bağlantı üzerinde çalışmalı.
  const client = await pool.connect();
  try {
    await runMigrations({
      async query(sql, params) {
        return { rows: (await client.query(sql, params as unknown[] | undefined)).rows };
      },
    });
  } finally {
    client.release();
  }
  return {
    async query(sql, params) {
      const result = await pool.query(sql, params as unknown[] | undefined);
      return { rows: result.rows };
    },
  };
}

export function getDb(): Promise<Db> {
  if (!globalThis.__promakinaAdminDb) {
    globalThis.__promakinaAdminDb = connect().catch((error) => {
      globalThis.__promakinaAdminDb = undefined;
      throw error;
    });
  }
  return globalThis.__promakinaAdminDb;
}
