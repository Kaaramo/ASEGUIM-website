import type { Cause } from "@/types";

/** Full causes catalogue shown on /causes (uses the real cause imagery). */
export const ALL_CAUSES: Cause[] = [
  {
    slug: "strengthening-youth-development-through-fitness",
    title: "Strengthening youth development through fitness-focused programs",
    image: "/images/cause-1.png",
    raised: 10_000,
    goal: 50_000,
    excerpt: "Structured programs that build confidence, discipline and health in young people.",
  },
  {
    slug: "promoting-healthy-habits-in-youth-with-dynamic-fitness-programs",
    title: "Promoting healthy habits in youth with dynamic fitness programs",
    image: "/images/cause-2.png",
    raised: 12_000,
    goal: 50_000,
    excerpt: "Daily activity and nutrition guidance that helps youth thrive long term.",
  },
  {
    slug: "fostering-physical-health-in-young-people-through-organized-programs",
    title: "Fostering physical health in young people through organized programs",
    image: "/images/cause-3.png",
    raised: 10_000,
    goal: 50_000,
    excerpt: "Community-led sports and wellness sessions for under-served neighborhoods.",
  },
  {
    slug: "building-stronger-youth-communities-through-fitness",
    title: "Building stronger youth communities through fitness",
    image: "/images/cause-4.png",
    raised: 12_000,
    goal: 50_000,
    excerpt: "Several local fitness facilities bringing neighborhoods together around health.",
  },
  {
    slug: "inspiring-active-and-healthy-living-among-youth",
    title: "Inspiring active and healthy living among youth",
    image: "/images/cause-5.png",
    raised: 15_000,
    goal: 60_000,
    excerpt: "Youth fitness activities that build lasting, healthy routines from an early age.",
  },
  {
    slug: "empowering-young-individuals-through-fitness",
    title: "Empowering young individuals through fitness",
    image: "/images/cause-6.png",
    raised: 15_000,
    goal: 58_000,
    excerpt: "Community wellness spaces and coaching that put young people first.",
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

export const VOLUNTEER_STEPS = [
  { icon: "FileText", color: "bg-green-600", title: "Apply to volunteer", text: "Start by completing the volunteer application form with your basic information, interests and availability." },
  { icon: "Search", color: "bg-green-700", title: "Application review", text: "Our team carefully reviews each application to ensure a good fit for both you and the program." },
  { icon: "Compass", color: "bg-orange", title: "Orientation & onboarding", text: "Once selected, you'll receive an orientation that introduces our mission, values and guidelines." },
];

export const VOLUNTEER_TEAM = [
  { name: "Evelyn Hayes", role: "Meal Delivery Volunteer", image: "/images/vol-1.png" },
  { name: "Ricardo Silva", role: "Gardening Volunteer", image: "/images/vol-2.png" },
  { name: "Mei Chen", role: "Pet Therapy Volunteer", image: "/images/vol-3.png" },
];

export function getCauseBySlug(slug: string): Cause | undefined {
  return ALL_CAUSES.find((c) => c.slug === slug);
}
