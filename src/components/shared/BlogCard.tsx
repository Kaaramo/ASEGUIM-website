import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/types";

/** Blog preview card with image, meta and title. */
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white p-3 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[390/293] overflow-hidden rounded-2xl">
        <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:1024px) 100vw, 400px" />
      </div>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-green-600">
          <span className="rounded-full bg-cream px-3 py-1 text-orange">{post.category}</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="mt-4 font-sans text-xl font-bold leading-snug text-ink">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-green-600">{post.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-1 font-semibold text-ink">
          Read more
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
