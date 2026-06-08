"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  as?: ElementType;
};

/** Wraps content with a scroll-triggered fade/slide-up reveal (IntersectionObserver),
 *  with a robust fallback so content is never left permanently hidden. */
export function Reveal({ children, className, delay = 0, as }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reveal immediately if already within (or above) the viewport on mount.
    const rect = node.getBoundingClientRect();
    if (rect.top < (window.innerHeight || 0) * 0.92) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(node);

    // Safety net: if the observer never fires (e.g. odd scroll contexts),
    // reveal once the element has been scrolled near, via a passive listener.
    const onScroll = () => {
      const r = node.getBoundingClientRect();
      if (r.top < (window.innerHeight || 0) * 0.95) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
        obs.disconnect();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
