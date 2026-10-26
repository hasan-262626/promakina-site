/** Yönlendirme grafiği denetimi: döngü (A → B → A) ve zincir (A → B → C; önerilen A → C). */

export type RedirectEdge = { source: string; destination: string; origin: "admin" | "next.config" | "proxy" };

export type RedirectIssue =
  | { type: "loop"; path: string[] }
  | { type: "chain"; path: string[]; suggestion: { source: string; destination: string } };

const pathOnly = (value: string) => {
  const p = value.split("?")[0].split("#")[0];
  return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
};

export function analyzeRedirects(edges: RedirectEdge[]): RedirectIssue[] {
  const next = new Map<string, string>();
  for (const edge of edges) if (!next.has(pathOnly(edge.source))) next.set(pathOnly(edge.source), pathOnly(edge.destination));

  const issues: RedirectIssue[] = [];
  const reportedLoops = new Set<string>();
  for (const start of next.keys()) {
    const path = [start];
    const seen = new Set([start]);
    let current = next.get(start);
    while (current !== undefined && next.has(current) && !seen.has(current) && path.length < 20) {
      path.push(current);
      seen.add(current);
      current = next.get(current);
    }
    if (current !== undefined && seen.has(current)) {
      const loopStart = path.indexOf(current);
      const loop = path.slice(loopStart);
      const key = [...loop].sort().join("|");
      if (!reportedLoops.has(key)) {
        reportedLoops.add(key);
        issues.push({ type: "loop", path: [...loop, current] });
      }
      continue;
    }
    if (current !== undefined) path.push(current);
    if (path.length > 2) {
      issues.push({ type: "chain", path, suggestion: { source: start, destination: path[path.length - 1] } });
    }
  }
  return issues;
}

/** Yeni kural eklenirse döngü oluşur mu? (kaydetmeden önce kontrol) */
export function wouldCreateLoop(edges: RedirectEdge[], candidate: { source: string; destination: string }) {
  const issues = analyzeRedirects([{ ...candidate, origin: "admin" }, ...edges.filter((e) => pathOnly(e.source) !== pathOnly(candidate.source))]);
  return issues.some((issue) => issue.type === "loop" && issue.path.includes(pathOnly(candidate.source)));
}
