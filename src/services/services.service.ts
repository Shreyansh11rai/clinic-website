import { getServiceBySlug, getServices } from "@/api/services.api";

export async function listServices() {
  return getServices();
}

export async function readService(slug: string) {
  return getServiceBySlug(slug);
}

export async function serviceSlugs() {
  const services = await getServices();
  return services.map((service) => service.slug);
}
