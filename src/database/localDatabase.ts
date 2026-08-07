import { blogData } from "@/data/blog";
import { faqsData } from "@/data/faqs";
import { homeStats, teamData, testimonialsData } from "@/data/home";
import { servicesData } from "@/data/services";
import { shopData } from "@/data/shop";
import { slotsData } from "@/data/slots";
import {
  blogPostSchema,
  faqSchema,
  productSchema,
  serviceSchema,
  slotSchema,
  statSchema,
  teamMemberSchema,
  testimonialSchema,
} from "@/lib/validation";

export const localDatabase = {
  services: serviceSchema.array().parse(servicesData),
  blogPosts: blogPostSchema.array().parse(blogData),
  faqs: faqSchema.array().parse(faqsData),
  products: productSchema.array().parse(shopData),
  slots: slotSchema.array().parse(slotsData),
  testimonials: testimonialSchema.array().parse(testimonialsData),
  stats: statSchema.array().parse(homeStats),
  team: teamMemberSchema.array().parse(teamData),
};
