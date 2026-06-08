import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { BLOG_POSTS } from "@/data/site";

function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post ? `${post.title} — Careloop` : "Story — Careloop" };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="section-y">
        <div className="container-careloop max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-green-600">
            <span className="rounded-full bg-ink/5 px-3 py-1 text-orange">{post.category}</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-5 font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.98] text-ink">
            {post.title}
          </h1>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[2rem]">
            <Image src={post.image} alt={post.title} fill priority className="object-cover" sizes="(max-width:768px) 100vw, 768px" />
          </div>

          <div className="prose-careloop mt-10 space-y-6 text-lg leading-relaxed text-green-700">
            <p>{post.excerpt}</p>
            <p>
              Lasting change rarely comes from a single moment. It comes from showing up
              again and again — long after the first wave of attention has passed. That is
              the principle at the heart of everything Careloop does.
            </p>
            <p>
              In this story, we look at how consistent, community-led action compounds over
              time: the partnerships that make it possible, the people who carry it forward,
              and the measurable progress that follows when support is durable rather than
              temporary.
            </p>
            <p>
              If this resonates with you, the most powerful thing you can do is help us keep
              showing up. Consistency is only possible when our community sustains it together.
            </p>
          </div>
        </div>
      </article>
      <CtaBanner title="Inspired by this story?" ctaLabel="support our work" />
    </>
  );
}
