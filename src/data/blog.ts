import type { BlogPost } from "@/types/content";

export const blogData: BlogPost[] = [
  {
    slug: "how-often-cleaning",
    title: "How often should you book a dental cleaning?",
    excerpt: "Most patients do well with six-month visits, but gum health, restorations, and risk level can change the timing.",
    publishedAt: "2026-07-12",
    readTime: "4 min read",
    image: { src: "/images/blog-cleaning.svg", alt: "Dental hygiene tools" },
    body: [
      "Six-month cleanings are a strong baseline for many patients, but they are not a universal rule.",
      "Patients with gum inflammation, frequent cavities, dry mouth, or complex dental work often benefit from shorter intervals.",
      "The best schedule is the one that keeps small issues from becoming expensive and uncomfortable.",
    ],
  },
  {
    slug: "whitening-sensitivity",
    title: "What to do if whitening makes teeth sensitive",
    excerpt: "Sensitivity is common, but the right product strength and timing can make whitening more comfortable.",
    publishedAt: "2026-06-24",
    readTime: "3 min read",
    image: { src: "/images/blog-whitening.svg", alt: "Tooth whitening tray" },
    body: [
      "Whitening sensitivity usually comes from temporary changes in how teeth respond to temperature and pressure.",
      "Spacing treatments apart, using sensitivity toothpaste, and avoiding overly strong products can help.",
      "A dental exam before whitening can also catch cracks, gum recession, or cavities that would make sensitivity worse.",
    ],
  },
  {
    slug: "first-implant-consult",
    title: "What happens at a first implant consultation?",
    excerpt: "A good implant plan starts with bone, bite, timeline, and maintenance expectations.",
    publishedAt: "2026-05-30",
    readTime: "5 min read",
    image: { src: "/images/blog-implant.svg", alt: "Dental implant planning" },
    body: [
      "The first visit is mostly information gathering: health history, imaging, bite assessment, and goals.",
      "Your dentist will explain whether an implant, bridge, or another option best fits the missing tooth.",
      "A clear plan should include timeline, healing stages, estimated fees, and long-term maintenance.",
    ],
  },
];
