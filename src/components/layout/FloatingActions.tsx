import { MessageCircle, Phone } from "lucide-react";
import { brandConfig, whatsappUrl } from "@/config/brand.config";

export function FloatingActions() {
  return (
    <div className="floatingActions" aria-label="Quick contact actions">
      <a href={whatsappUrl} aria-label="Message clinic on WhatsApp">
        <MessageCircle size={20} />
      </a>
      <a href={`tel:${brandConfig.phone}`} aria-label="Call clinic">
        <Phone size={20} />
      </a>
    </div>
  );
}
