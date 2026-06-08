import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pill = cva(
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 whitespace-nowrap",
  {
    variants: {
      variant: {
        orange: "bg-orange text-white hover:bg-orange/90",
        dark: "bg-ink text-cream hover:bg-green-700",
        cream: "bg-cream text-ink hover:bg-white",
        outline: "border border-ink/20 text-ink hover:bg-ink hover:text-cream",
        white: "bg-white text-ink hover:bg-cream",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-6 text-[0.95rem]",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: { variant: "orange", size: "md" },
  },
);

type PillProps = VariantProps<typeof pill> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Show the circular arrow badge on the right. */
  arrow?: boolean;
  /** Open in a new tab (external link). */
  external?: boolean;
};

export function Pill({ href, children, variant, size, className, arrow, external }: PillProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(pill({ variant, size }), arrow && "pr-2", className)}
    >
      <span>{children}</span>
      {arrow && (
        <span className="grid size-8 place-items-center rounded-full bg-white/15 transition-transform duration-200 group-hover:rotate-45">
          <ArrowUpRight className="size-4" />
        </span>
      )}
    </Link>
  );
}
