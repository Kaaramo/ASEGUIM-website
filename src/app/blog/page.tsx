import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { BlogCard } from "@/components/shared/BlogCard";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { BLOG_POSTS } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog — Careloop",
  description: "Stories from the field — the people, projects and progress behind our work.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        tag="Our blog"
        title="Stories from the Careloop community"
        subtitle="Real stories from the field — the people, projects and progress behind our work."
      />
      <section className="section-y">
        <div className="container-careloop grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 90}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
