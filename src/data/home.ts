import type { TeamMember, Testimonial } from "@/types/content";

export const homeStats = [
  { value: "4.9/5", label: "average patient rating" },
  { value: "8k+", label: "completed visits" },
  { value: "24 hr", label: "urgent-care response window" },
];

export const testimonialsData: Testimonial[] = [
  {
    quote: "The visit felt organized from the first call. I knew the cost, timing, and what would happen next.",
    name: "Maya R.",
    context: "Preventive care patient",
  },
  {
    quote: "They handled a broken crown quickly and explained the options without pressure.",
    name: "Daniel P.",
    context: "Urgent care patient",
  },
  {
    quote: "My whitening plan looked natural and the sensitivity guidance made a real difference.",
    name: "Alicia W.",
    context: "Cosmetic patient",
  },
];

export const teamData: TeamMember[] = [
  {
    name: "Dr. Lena Shah",
    role: "General and cosmetic dentist",
    image: { src: "/images/team-dentist.svg", alt: "Dr. Lena Shah" },
  },
  {
    name: "Chris Morgan",
    role: "Lead hygienist",
    image: { src: "/images/team-hygienist.svg", alt: "Chris Morgan" },
  },
];
