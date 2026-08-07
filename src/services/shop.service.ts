import { getProductBySlug, getProducts } from "@/api/shop.api";

export async function listProducts() {
  return getProducts();
}

export async function readProduct(slug: string) {
  return getProductBySlug(slug);
}

export async function productSlugs() {
  const products = await getProducts();
  return products.map((product) => product.slug);
}
