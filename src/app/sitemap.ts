import type { MetadataRoute } from "next";
import { brandConfig } from "@/config/brand.config";
import { blogSlugs } from "@/services/blog.service";
import { serviceSlugs } from "@/services/services.service";
import { productSlugs } from "@/services/shop.service";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, posts, products] = await Promise.all([serviceSlugs(), blogSlugs(), productSlugs()]);
  const staticRoutes = ["", "/services", "/blog", "/shop", "/faqs", "/booking", "/contact"];
  const dynamicRoutes = [
    ...services.map((slug) => `/services/${slug}`),
    ...posts.map((slug) => `/blog/${slug}`),
    ...products.map((slug) => `/shop/${slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${brandConfig.siteUrl}${route}`,
    lastModified: new Date("2026-08-06"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
