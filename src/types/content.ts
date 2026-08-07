export type ImageAsset = {
  src: string;
  alt: string;
};

export type SeoEntry = {
  title: string;
  description: string;
  canonical: string;
  keywords: string[];
  ogImage: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  priceFrom: number;
  duration: string;
  image: ImageAsset;
  benefits: string[];
  process: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  image: ImageAsset;
  body: string[];
};

export type Product = {
  slug: string;
  title: string;
  summary: string;
  price: number;
  image: ImageAsset;
  includes: string[];
};

export type Faq = {
  question: string;
  answer: string;
};

export type TimeSlot = {
  date: string;
  times: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: ImageAsset;
};

export type BookingPayload = {
  serviceSlug: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  notes?: string;
};
