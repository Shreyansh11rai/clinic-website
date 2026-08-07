import { z } from "zod";

const imageAssetSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
});

export const serviceSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  description: z.string().min(1),
  priceFrom: z.number().nonnegative(),
  duration: z.string().min(1),
  image: imageAssetSchema,
  benefits: z.array(z.string().min(1)).min(1),
  process: z.array(z.string().min(1)).min(1),
});

export const blogPostSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  publishedAt: z.string().min(1),
  readTime: z.string().min(1),
  image: imageAssetSchema,
  body: z.array(z.string().min(1)).min(1),
});

export const productSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  price: z.number().nonnegative(),
  image: imageAssetSchema,
  includes: z.array(z.string().min(1)).min(1),
});

export const faqSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

export const slotSchema = z.object({
  date: z.string().min(1),
  times: z.array(z.string().min(1)).min(1),
});

export const testimonialSchema = z.object({
  quote: z.string().min(1),
  name: z.string().min(1),
  context: z.string().min(1),
});

export const teamMemberSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  image: imageAssetSchema,
});

export const statSchema = z.object({
  value: z.string().min(1),
  label: z.string().min(1),
});
