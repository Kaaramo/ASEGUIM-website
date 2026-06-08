import type {
  BlogPost,
  Campaign,
  Cause,
  ContributionCard,
  FaqItem,
  NavItem,
  Program,
  Stat,
  Testimonial,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about-us" },
  { label: "Causes", href: "/causes" },
  { label: "Donations", href: "/donation" },
  { label: "Volunteers", href: "/become-a-volunteer" },
];

export const ANNOUNCEMENT = {
  text: "Careloop delivered 99+ donation packages to help communities in need",
  linkLabel: "See here",
  href: "/causes",
};

export const SPOTLIGHT: Campaign = {
  title: "Emergency Food Aid in South Africa",
  image: "/images/donate-spotlight.png",
  raised: 1_280_000,
  goal: 2_000_000,
  href: "/causes",
};

export const PROGRAMS: Program[] = [
  { title: "Food and nutrition support", image: "/images/program-1.png", raised: 3_500_000, goal: 5_600_000 },
  { title: "Health and medical access", image: "/images/program-2.png", raised: 1_750_000, goal: 2_400_000 },
  { title: "Education and skill development", image: "/images/program-3.png", raised: 2_950_000, goal: 1_800_000 },
  { title: "Disaster relief and recovery", image: "/images/program-4.png", raised: 4_100_000, goal: 3_750_000 },
];

export const IMPACT_STATS: Stat[] = [
  { value: 12, suffix: "K+", label: "Children participating in educational programs" },
  { value: 8, suffix: "K+", label: "Senior citizens supported with healthcare" },
  { value: 5, suffix: "K+", label: "People completing job-training programs" },
];

export const CONTRIBUTIONS: ContributionCard[] = [
  { icon: "HandHeart", title: "Make a donation", description: "Your gift directly funds the programs that keep communities fed, healthy and learning." },
  { icon: "Users", title: "Become a volunteer", description: "Give your time and skills on the ground or remotely to support people who need it most." },
  { icon: "Baby", title: "Sponsor a child", description: "Provide a child with consistent access to food, education and care throughout the year." },
  { icon: "PartyPopper", title: "Organize a fundraiser", description: "Rally your community around a cause and turn local energy into lasting impact." },
  { icon: "MessageCircle", title: "Share your story", description: "Amplify our mission by sharing how consistent care has changed lives you know." },
  { icon: "Calendar", title: "Attend an event", description: "Join our gatherings to connect with the people and projects you help support." },
];

export const FEATURED_CAUSES: Cause[] = [
  {
    slug: "strengthening-youth-development-through-fitness",
    title: "Strengthening youth development through fitness",
    image: "/images/work-1.png",
    raised: 48_000,
    goal: 80_000,
    excerpt: "Structured programs that build confidence, discipline and health in young people.",
  },
  {
    slug: "promoting-healthy-habits-in-youth-with-dynamic-fitness-programs",
    title: "Promoting healthy habits with dynamic fitness programs",
    image: "/images/work-2.png",
    raised: 62_500,
    goal: 90_000,
    excerpt: "Daily activity and nutrition guidance that helps youth thrive long term.",
  },
  {
    slug: "fostering-physical-health-in-young-people-through-organized-programs",
    title: "Fostering physical health through organized programs",
    image: "/images/work-3.png",
    raised: 35_900,
    goal: 75_000,
    excerpt: "Community-led sports and wellness sessions for under-served neighborhoods.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "Careloop supported our community during a crisis and kept helping long after the cameras left.", name: "Aaron Mitchell", role: "Community Leader", avatar: "/images/work-1.png" },
  { quote: "They didn't disappear after the first phase of aid. They stayed engaged and accountable.", name: "David Reynolds", role: "Volunteer Coordinator", avatar: "/images/work-2.png" },
  { quote: "Consistency is what sets them apart. The follow-through is real and measurable.", name: "Sofia Bennett", role: "Partner NGO Director", avatar: "/images/work-3.png" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-a-greener-planet-for-generations",
    title: "Building a greener planet for generations",
    excerpt: "How consistent, community-led action compounds into lasting environmental change.",
    image: "/images/blog-1.png",
    date: "Mar 18, 2026",
    category: "Environment",
    readingTime: "5 min read",
  },
  {
    slug: "protecting-our-planet-for-future-generations",
    title: "Protecting our planet for future generations",
    excerpt: "Small, repeated choices that protect ecosystems and the people who depend on them.",
    image: "/images/blog-2.png",
    date: "Apr 09, 2026",
    category: "Environment",
    readingTime: "4 min read",
  },
  {
    slug: "protecting-the-environment-generation",
    title: "Protecting the environment, generation by generation",
    excerpt: "Why durable impact comes from showing up again and again for a cause.",
    image: "/images/blog-3.png",
    date: "May 02, 2026",
    category: "Humanitarian",
    readingTime: "6 min read",
  },
  {
    slug: "how-consistent-care-rebuilds-trust",
    title: "How consistent care rebuilds trust in communities",
    excerpt: "Trust is earned by returning — long after the first delivery of aid.",
    image: "/images/blog-4.png",
    date: "May 16, 2026",
    category: "Community",
    readingTime: "5 min read",
  },
  {
    slug: "volunteer-stories-that-stayed-with-us",
    title: "Volunteer stories that stayed with us",
    excerpt: "The people who give their time are the reason our programs endure.",
    image: "/images/blog-5.png",
    date: "May 28, 2026",
    category: "Volunteers",
    readingTime: "4 min read",
  },
  {
    slug: "designing-programs-that-last",
    title: "Designing programs that last beyond the crisis",
    excerpt: "What it takes to build support that compounds instead of fading away.",
    image: "/images/blog-6.png",
    date: "Jun 04, 2026",
    category: "Programs",
    readingTime: "7 min read",
  },
];

export const FAQS: FaqItem[] = [
  { question: "What is Careloop and what does it do?", answer: "Careloop is a non-profit organization focused on food security, healthcare access, education and disaster relief — delivered with long-term consistency rather than one-off aid." },
  { question: "How are donations used?", answer: "Donations are directed to active programs and verified field partners, with the majority going straight to people in need and the rest to keeping programs running." },
  { question: "Is my donation secure?", answer: "Yes. Payments are processed through encrypted, industry-standard providers and every contribution is receipted." },
  { question: "How can I volunteer?", answer: "You can apply through the Volunteers page to support projects on the ground or remotely, based on your skills and availability." },
];

export const FOOTER = {
  getInvolved: [
    { label: "Donate", href: "/donation" },
    { label: "Volunteer", href: "/become-a-volunteer" },
    { label: "Causes", href: "/causes" },
  ],
  learnMore: [
    { label: "About", href: "/about-us" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact-us" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Service", href: "/legal/terms-and-conditions" },
    { label: "404", href: "/404" },
  ],
};
