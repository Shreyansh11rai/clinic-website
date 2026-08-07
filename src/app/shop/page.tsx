import { ShopView } from "@/views/ShopView";
import { buildMetadata } from "@/config/seo.config";
import { listProducts } from "@/services/shop.service";

export function generateMetadata() {
  return buildMetadata("/shop");
}

export default async function ShopPage() {
  const products = await listProducts();
  return <ShopView products={products} />;
}
