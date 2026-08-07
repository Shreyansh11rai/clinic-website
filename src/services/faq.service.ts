import { getFaqs } from "@/api/faqs.api";

export async function listFaqs() {
  return getFaqs();
}
