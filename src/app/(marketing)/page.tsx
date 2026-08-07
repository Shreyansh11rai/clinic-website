import { HomeView } from "@/views/HomeView";
import { buildMetadata } from "@/config/seo.config";
import { getHomeContent } from "@/services/home.service";
import { listServices } from "@/services/services.service";

export function generateMetadata() {
  return buildMetadata("/");
}

export default async function HomePage() {
  const [services, home] = await Promise.all([listServices(), getHomeContent()]);
  return <HomeView services={services} stats={home.stats} testimonials={home.testimonials} team={home.team} />;
}
