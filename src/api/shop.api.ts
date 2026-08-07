import { httpGet } from "@/api/http/httpClient";
import { localDatabase } from "@/database/localDatabase";
import type { Product } from "@/types/content";

export function getProducts(): Promise<Product[]> {
  return httpGet("/shop", () => localDatabase.products);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
}
