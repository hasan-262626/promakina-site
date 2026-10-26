import { z } from "zod";
import { guardAdminApi, json, methodNotAllowed } from "@/lib/admin/api";
import { listLeads } from "@/lib/admin/data";
import { audit } from "@/lib/admin/server";
import { leadStatusSchema } from "@/lib/admin/validation";

export const dynamic = "force-dynamic";

const querySchema = z.object({
  kind: z.enum(["contact", "rfq"]).default("contact"),
  status: leadStatusSchema.optional(),
  page: z.coerce.number().int().min(1).max(10_000).default(1),
});

/** Lead listesi (JSON). Yalnız "leads.view" yetkisi olan oturumla; her erişim audit'e yazılır. */
export async function GET(request: Request) {
  const guard = await guardAdminApi(request, "leads.view");
  if (guard.response) return guard.response;
  const url = new URL(request.url);
  const parsed = querySchema.safeParse(Object.fromEntries(url.searchParams));
  if (!parsed.success) return json({ error: "invalid_query" }, 400);
  try {
    const result = await listLeads(parsed.data);
    await audit(guard.user, "lead.api_list", parsed.data.kind, { page: parsed.data.page, count: result.rows.length });
    return json(result);
  } catch {
    // İç hata ayrıntısı (SQL, dosya yolu, yığın izi) istemciye dönmez.
    return json({ error: "internal_error" }, 500);
  }
}

const notAllowed = () => methodNotAllowed(["GET"]);
export { notAllowed as POST, notAllowed as PUT, notAllowed as PATCH, notAllowed as DELETE };
