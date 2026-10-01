// Build site-relative URLs that respect the GitHub Pages base path.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function u(path = ""): string {
  const clean = path.replace(/^\//, "");
  return clean ? `${BASE}/${clean}` : `${BASE}/`;
}
