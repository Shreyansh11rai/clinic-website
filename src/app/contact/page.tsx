import { ContactView } from "@/views/ContactView";
import { buildMetadata } from "@/config/seo.config";

export function generateMetadata() {
  return buildMetadata("/contact");
}

export default function ContactPage() {
  return <ContactView />;
}
