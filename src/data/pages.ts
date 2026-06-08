import type { Cause } from "@/types";
import { FEATURED_CAUSES } from "@/data/site";

/** Full causes catalogue (featured causes + a few more), reused on /causes. */
export const ALL_CAUSES: Cause[] = [
  ...FEATURED_CAUSES,
  {
    slug: "clean-water-access-for-rural-villages",
    title: "Clean water access for rural villages",
    image: "/images/program-1.png",
    raised: 92_400,
    goal: 150_000,
    excerpt: "Wells and filtration that give whole villages a reliable, safe water supply.",
  },
  {
    slug: "school-meals-that-keep-children-learning",
    title: "School meals that keep children learning",
    image: "/images/program-3.png",
    raised: 71_800,
    goal: 120_000,
    excerpt: "Daily nutritious meals so students can focus on their education, not hunger.",
  },
  {
    slug: "rebuilding-homes-after-natural-disasters",
    title: "Rebuilding homes after natural disasters",
    image: "/images/program-4.png",
    raised: 138_500,
    goal: 220_000,
    excerpt: "Shelter, supplies and long-term support for families recovering from crisis.",
  },
];

export const DONATION_TIERS = [
  { amount: 20, label: "Feeds a family for a week" },
  { amount: 50, label: "School supplies for a child" },
  { amount: 100, label: "A month of clean water" },
  { amount: 250, label: "Emergency relief kit" },
];

export const VOLUNTEER_ROLES = [
  { title: "Field support", text: "Help distribute food, supplies and care directly within communities." },
  { title: "Fundraising", text: "Organize campaigns and events that power our programs all year." },
  { title: "Mentoring", text: "Guide young people through education and skill-development programs." },
  { title: "Remote & skills-based", text: "Lend your design, writing or tech skills from anywhere in the world." },
];

export const ABOUT_VALUES = [
  { title: "Consistency", text: "We show up again and again — impact comes from durability, not moments." },
  { title: "Transparency", text: "Every contribution is tracked, receipted and reported back to you." },
  { title: "Community-led", text: "Programs are shaped by the people who live the challenges firsthand." },
  { title: "Dignity", text: "We support people as partners, never as statistics." },
];

export const CONTACT_INFO = [
  { label: "Email", value: "hello@careloop.org" },
  { label: "Phone", value: "+1 (555) 014-2280" },
  { label: "Address", value: "120 Riverside Ave, Suite 400" },
];

export function getCauseBySlug(slug: string): Cause | undefined {
  return ALL_CAUSES.find((c) => c.slug === slug);
}
