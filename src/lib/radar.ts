// Dependency-free SVG radar chart. Returns a string so it can be used both at
// build time (role pages) and in the browser (results, compare).

export interface RadarSeries {
  label: string;
  values: number[]; // 0..max, one per axis
  className: string; // CSS class controlling stroke/fill colour
}

export function radarSvg(axes: string[], series: RadarSeries[], max = 4, size = 360): string {
  const n = axes.length;
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 64;
  const angle = (i: number) => -Math.PI / 2 + (2 * Math.PI * i) / n;
  const point = (i: number, v: number) => {
    const r = (Math.max(0, Math.min(max, v)) / max) * radius;
    return [cx + r * Math.cos(angle(i)), cy + r * Math.sin(angle(i))] as const;
  };
  const fmt = (x: number) => x.toFixed(1);

  const rings = Array.from({ length: max }, (_, k) => {
    const pts = axes.map((_, i) => point(i, k + 1).map(fmt).join(",")).join(" ");
    return `<polygon class="radar-ring" points="${pts}"/>`;
  }).join("");

  const spokes = axes.map((_, i) => {
    const [x, y] = point(i, max);
    return `<line class="radar-spoke" x1="${cx}" y1="${cy}" x2="${fmt(x)}" y2="${fmt(y)}"/>`;
  }).join("");

  const labels = axes.map((label, i) => {
    const [x, y] = point(i, max + 0.55);
    const anchor = Math.abs(x - cx) < 4 ? "middle" : x > cx ? "start" : "end";
    return `<text class="radar-label" x="${fmt(x)}" y="${fmt(y)}" text-anchor="${anchor}" dominant-baseline="middle">${escapeXml(label)}</text>`;
  }).join("");

  const shapes = series.map((s) => {
    const pts = s.values.map((v, i) => point(i, v).map(fmt).join(",")).join(" ");
    return `<polygon class="radar-shape ${s.className}" points="${pts}"><title>${escapeXml(s.label)}</title></polygon>`;
  }).join("");

  const title = series.map((s) => s.label).join(" vs. ");
  return `<svg class="radar" viewBox="0 0 ${size} ${size}" role="img" aria-label="Radar chart: ${escapeXml(title)}">${rings}${spokes}${shapes}${labels}</svg>`;
}

function escapeXml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}
