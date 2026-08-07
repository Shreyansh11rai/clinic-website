import type { Metadata } from "next";
import { brandConfig } from "./brand.config";
import type { SeoEntry } from "@/types/content";

const defaultOgImage = "/images/clinic-hero.svg";

export const defaultSeo: SeoEntry = {
  title: `${brandConfig.clinicName} | Family Dentist in ${brandConfig.address.city}`,
  description:
    "Book gentle preventive, cosmetic, and emergency dental care with a clinic designed for clear answers and comfortable visits.",
  canonical: "/",
  keywords: ["dentist", "family dentistry", "cosmetic dentist", "dental clinic"],
  ogImage: defaultOgImage,
};

export const seoMap: Record<string, SeoEntry> = {
  "/": defaultSeo,
  "/services": {
    title: `Dental Services | ${brandConfig.clinicName}`,
    description:
      "Explore preventive, restorative, cosmetic, and urgent dental services with transparent treatment guidance.",
    canonical: "/services",
    keywords: ["dental services", "teeth cleaning", "invisalign", "dental implants"],
    ogImage: defaultOgImage,
  },
  "/blog": {
    title: `Dental Care Blog | ${brandConfig.clinicName}`,
    description: "Plain-language dental care articles from the Brightline clinical team.",
    canonical: "/blog",
    keywords: ["dental tips", "oral health", "teeth care"],
    ogImage: defaultOgImage,
  },
  "/shop": {
    title: `Oral Care Shop | ${brandConfig.clinicName}`,
    description: "Curated at-home oral care essentials recommended by the clinic team.",
    canonical: "/shop",
    keywords: ["oral care products", "dental shop", "toothbrush"],
    ogImage: defaultOgImage,
  },
  "/faqs": {
    title: `Dental FAQs | ${brandConfig.clinicName}`,
    description: "Answers to common appointment, insurance, treatment, and comfort questions.",
    canonical: "/faqs",
    keywords: ["dental faqs", "dentist questions", "clinic insurance"],
    ogImage: defaultOgImage,
  },
  "/booking": {
    title: `Book an Appointment | ${brandConfig.clinicName}`,
    description: "Choose a service, date, and time for your next dental appointment.",
    canonical: "/booking",
    keywords: ["book dentist", "dental appointment", "dentist near me"],
    ogImage: defaultOgImage,
  },
  "/contact": {
    title: `Contact | ${brandConfig.clinicName}`,
    description: "Call, message, or visit Brightline Dental Studio for dental care support.",
    canonical: "/contact",
    keywords: ["contact dentist", "dental clinic phone", "dentist location"],
    ogImage: defaultOgImage,
  },
};

export function buildMetadata(route: string, override?: Partial<SeoEntry>): Metadata {
  const seo = { ...(seoMap[route] ?? defaultSeo), ...override };
  const canonical = new URL(seo.canonical, brandConfig.siteUrl);
  const imageUrl = new URL(seo.ogImage, brandConfig.siteUrl);

  return {
    metadataBase: new URL(brandConfig.siteUrl),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: brandConfig.clinicName,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [imageUrl],
    },
  };
}
