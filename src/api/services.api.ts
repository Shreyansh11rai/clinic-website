import { httpGet } from "@/api/http/httpClient";
import { localDatabase } from "@/database/localDatabase";
import type { Service } from "@/types/content";

export function getServices(): Promise<Service[]> {
  return httpGet("/services", () => localDatabase.services);
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const services = await getServices();
  return services.find((service) => service.slug === slug);
}
