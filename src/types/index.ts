export type NavItem = { label: string; href: string };

export type Campaign = {
  title: string;
  image: string;
  raised: number;
  goal: number;
  href: string;
};

export type Program = {
  title: string;
  image: string;
  raised: number;
  goal: number;
};

export type Stat = {
  /** Numeric target the counter animates to. */
  value: number;
  /** Suffix shown after the number, e.g. "+". */
  suffix?: string;
  label: string;
};

export type ContributionCard = {
  icon: string;
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readingTime: string;
};

export type Cause = {
  slug: string;
  title: string;
  image: string;
  raised: number;
  goal: number;
  excerpt: string;
};

export type FaqItem = { question: string; answer: string };
