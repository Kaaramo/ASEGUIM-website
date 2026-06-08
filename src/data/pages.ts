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

export const ABOUT_COUNTERS = [
  { value: 1800, suffix: "+", label: "Children enrolled in educational programs" },
  { value: 1200, suffix: "+", label: "Parents engaged in community workshops" },
  { value: 500, suffix: "+", label: "Volunteers supporting local initiatives" },
];

export const CORE_VALUES = [
  { icon: "HandHeart", color: "bg-orange", title: "Compassion First", text: "We lead with empathy in everything we do. Every person we serve is treated with dignity." },
  { icon: "ShieldCheck", color: "bg-green-700", title: "Integrity & Transparency", text: "We are committed to honesty, accountability and stewardship of every contribution." },
  { icon: "Users", color: "bg-olive", title: "Community-Led Action", text: "We believe the people closest to the challenges are closest to the solutions." },
  { icon: "Sprout", color: "bg-orange", title: "Sustainable Impact", text: "We focus on long-term change, not short-term fixes that fade away." },
];

export const TEAM = [
  { name: "Elias Thorne", role: "Volunteer Coordinator", image: "/images/team-1.png" },
  { name: "Fatima Hassan", role: "Partnerships Manager", image: "/images/team-2.png" },
  { name: "Kenji Tanaka", role: "Treasurer", image: "/images/team-3.png" },
];

export function getCauseBySlug(slug: string): Cause | undefined {
  return ALL_CAUSES.find((c) => c.slug === slug);
}
