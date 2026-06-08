"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up from 0 to `target` once the element scrolls into view.
 *  Robust: also triggers on a native scroll fallback so it never stays at 0. */
export function useCountUp(target: number, durationMs = 1800) {
  const ref = useRef<HTMLElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(eased * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const near = () => node.getBoundingClientRect().top < (window.innerHeight || 0) * 0.9;
    if (near()) run();

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          run();
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(node);

    const onScroll = () => {
      if (near()) {
        run();
        window.removeEventListener("scroll", onScroll);
        obs.disconnect();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [target, durationMs]);

  return { ref, value };
}
