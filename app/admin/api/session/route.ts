import { guardAdminApi, json, methodNotAllowed } from "@/lib/admin/api";

export const dynamic = "force-dynamic";

/** Geçerli oturumun özeti. Token, oturum kimliği veya parola bilgisi döndürülmez. */
export async function GET(request: Request) {
  const guard = await guardAdminApi(request, "dashboard.view");
  if (guard.response) return guard.response;
  const { email, name, role } = guard.user;
  return json({ email, name, role });
}

const notAllowed = () => methodNotAllowed(["GET"]);
export { notAllowed as POST, notAllowed as PUT, notAllowed as PATCH, notAllowed as DELETE };
