import { ServicesView } from "@/views/ServicesView";
import { buildMetadata } from "@/config/seo.config";
import { listServices } from "@/services/services.service";

export function generateMetadata() {
  return buildMetadata("/services");
}

export default async function ServicesPage() {
  const services = await listServices();
  return <ServicesView services={services} />;
}
