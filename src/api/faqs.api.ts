import { httpGet } from "@/api/http/httpClient";
import { localDatabase } from "@/database/localDatabase";
import type { Faq } from "@/types/content";

export function getFaqs(): Promise<Faq[]> {
  return httpGet("/faqs", () => localDatabase.faqs);
}
