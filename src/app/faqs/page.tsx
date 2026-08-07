import { FaqsView } from "@/views/FaqsView";
import { buildMetadata } from "@/config/seo.config";
import { listFaqs } from "@/services/faq.service";

export function generateMetadata() {
  return buildMetadata("/faqs");
}

export default async function FaqsPage() {
  const faqs = await listFaqs();
  return <FaqsView faqs={faqs} />;
}
