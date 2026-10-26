import { PGlite } from "@electric-sql/pglite";
import { runMigrations, type Db } from "@/lib/admin/db-core";
import { hashPassword } from "@/lib/admin/auth-core";
import type { Role } from "@/lib/admin/permissions";

/** Her test dosyası için bellekte yeni bir Postgres (PGlite) ve şema. */
export async function createTestDb(): Promise<Db> {
  const lite = new PGlite();
  const db: Db = {
    async query(sql, params) {
      const result = await lite.query(sql, params as unknown[] | undefined);
      return { rows: result.rows as never[] };
    },
  };
  await runMigrations(db);
  return db;
}

export async function createUser(db: Db, email: string, password: string, role: Role) {
  const result = await db.query<{ id: string }>(
    "insert into admin_users (email, name, password_hash, role) values ($1, $2, $3, $4) returning id",
    [email, email.split("@")[0], await hashPassword(password), role],
  );
  return result.rows[0].id;
}
