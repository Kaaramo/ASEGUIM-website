import { SectionHeading } from "@/components/shared/SectionHeading";
import { BlogCard } from "@/components/shared/BlogCard";
import { Pill } from "@/components/Pill";
import { Reveal } from "@/components/Reveal";
import { BLOG_POSTS } from "@/data/site";

export function BlogSection() {
  return (
    <section className="section-y">
      <div className="container-careloop">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            tag="Our blog"
            title="Stories from the Careloop community"
            text="Real stories from the field — the people, projects and progress behind our work."
          />
          <Reveal>
            <Pill href="/blog" variant="outline" size="md">
              view all stories
            </Pill>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 90}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
