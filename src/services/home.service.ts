import { getHomeStats, getTeamMembers, getTestimonials } from "@/api/home.api";

export async function getHomeContent() {
  const [stats, testimonials, team] = await Promise.all([
    getHomeStats(),
    getTestimonials(),
    getTeamMembers(),
  ]);

  return { stats, testimonials, team };
}
