import { notFound } from "next/navigation";
import { ServiceDetailView } from "@/views/ServiceDetailView";
import { buildMetadata } from "@/config/seo.config";
import { readService, serviceSlugs } from "@/services/services.service";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await serviceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await readService(slug);

  if (!service) {
    return buildMetadata("/services");
  }

  return buildMetadata(`/services/${slug}`, {
    title: `${service.title} | Brightline Dental Studio`,
    description: service.summary,
    canonical: `/services/${slug}`,
    keywords: [service.title, "dental service", "dentist"],
    ogImage: service.image.src,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await readService(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}
