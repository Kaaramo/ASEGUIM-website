/**
 * Decorative org-chart connectors for the Bureau Exécutif page.
 * Uses a stretchable viewBox (0-300 x, 0-100 y) so the same three anchor
 * points — 1/6, 1/2, 5/6 of the width — always land on the center of a
 * 3-column grid, regardless of the container's actual pixel width.
 * `vector-effect="non-scaling-stroke"` keeps the stroke crisp even though
 * the viewBox itself is stretched non-uniformly (preserveAspectRatio="none").
 */

/** One point fanning out into three smooth branches (Secrétaire général → row of 3). */
export function OrgFanConnector({ height = 72 }: { height?: number }) {
  return (
    <div className="relative mx-auto hidden w-full lg:block" style={{ height }} aria-hidden>
      <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
        <path d="M150,0 C150,55 50,45 50,100" className="org-path" vectorEffect="non-scaling-stroke" fill="none" />
        <path d="M150,0 L150,100" className="org-path" vectorEffect="non-scaling-stroke" fill="none" />
        <path d="M150,0 C150,55 250,45 250,100" className="org-path" vectorEffect="non-scaling-stroke" fill="none" />
      </svg>
      <span className="org-node absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

/** Three parallel column connectors (row of 3 → row of 3 directly below). */
export function OrgColumnsConnector({ height = 56 }: { height?: number }) {
  return (
    <div className="relative mx-auto hidden w-full lg:block" style={{ height }} aria-hidden>
      <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
        <path d="M50,0 L50,100" className="org-path" vectorEffect="non-scaling-stroke" fill="none" />
        <path d="M150,0 L150,100" className="org-path" vectorEffect="non-scaling-stroke" fill="none" />
        <path d="M250,0 L250,100" className="org-path" vectorEffect="non-scaling-stroke" fill="none" />
      </svg>
    </div>
  );
}
