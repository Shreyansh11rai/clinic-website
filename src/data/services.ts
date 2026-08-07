import type { Service } from "@/types/content";

export const servicesData: Service[] = [
  {
    slug: "preventive-care",
    title: "Preventive Care",
    summary: "Routine exams, cleanings, X-rays, and gum checks that catch small issues early.",
    description:
      "A structured prevention visit gives patients a clear picture of their oral health, practical next steps, and a realistic maintenance plan.",
    priceFrom: 140,
    duration: "45-60 min",
    image: { src: "/images/service-preventive.svg", alt: "Dental cleaning room" },
    benefits: ["Lower long-term treatment costs", "Early cavity and gum detection", "Personal home-care plan"],
    process: ["Health review", "Digital imaging as needed", "Cleaning and polish", "Dentist exam"],
  },
  {
    slug: "cosmetic-smile-design",
    title: "Cosmetic Smile Design",
    summary: "Whitening, bonding, veneers, and reshaping planned around natural-looking results.",
    description:
      "Cosmetic treatment starts with goals, photos, and shade planning so the outcome improves confidence without looking overdone.",
    priceFrom: 325,
    duration: "60-90 min",
    image: { src: "/images/service-cosmetic.svg", alt: "Smile design consultation" },
    benefits: ["Natural tooth proportions", "Clear phased options", "Preview-led decisions"],
    process: ["Smile assessment", "Treatment options", "Shade and shape plan", "Phased care"],
  },
  {
    slug: "restorative-dentistry",
    title: "Restorative Dentistry",
    summary: "Tooth-colored fillings, crowns, bridges, and implant restorations built to last.",
    description:
      "Restorative care focuses on function, durability, and preserving healthy tooth structure whenever possible.",
    priceFrom: 220,
    duration: "60-120 min",
    image: { src: "/images/service-restorative.svg", alt: "Restorative dental treatment" },
    benefits: ["Comfortable chewing", "Durable materials", "Conservative planning"],
    process: ["Diagnosis", "Material selection", "Treatment visit", "Bite refinement"],
  },
  {
    slug: "urgent-dental-care",
    title: "Urgent Dental Care",
    summary: "Same-day guidance for tooth pain, chipped teeth, swelling, and lost restorations.",
    description:
      "Urgent care visits are designed to stabilize pain quickly, identify the cause, and map the safest next treatment.",
    priceFrom: 95,
    duration: "30-60 min",
    image: { src: "/images/service-urgent.svg", alt: "Urgent dental care" },
    benefits: ["Fast triage", "Pain-focused visit", "Clear next steps"],
    process: ["Symptom review", "Focused exam", "Digital X-ray", "Stabilization plan"],
  },
];
