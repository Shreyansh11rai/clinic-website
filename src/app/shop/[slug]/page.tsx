import { notFound } from "next/navigation";
import { ProductDetailView } from "@/views/ProductDetailView";
import { buildMetadata } from "@/config/seo.config";
import { productSlugs, readProduct } from "@/services/shop.service";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await productSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await readProduct(slug);

  if (!product) {
    return buildMetadata("/shop");
  }

  return buildMetadata(`/shop/${slug}`, {
    title: `${product.title} | Brightline Dental Studio`,
    description: product.summary,
    canonical: `/shop/${slug}`,
    keywords: ["oral care", "dental product", product.title],
    ogImage: product.image.src,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await readProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
