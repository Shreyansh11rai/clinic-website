import { httpGet } from "@/api/http/httpClient";
import { localDatabase } from "@/database/localDatabase";
import type { TeamMember, Testimonial } from "@/types/content";

export function getTestimonials(): Promise<Testimonial[]> {
  return httpGet("/testimonials", () => localDatabase.testimonials);
}

export function getHomeStats(): Promise<Array<{ value: string; label: string }>> {
  return httpGet("/stats", () => localDatabase.stats);
}

export function getTeamMembers(): Promise<TeamMember[]> {
  return httpGet("/team", () => localDatabase.team);
}
