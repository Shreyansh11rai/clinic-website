import { MessageCircle, Phone } from "lucide-react";
import { brandConfig, whatsappUrl } from "@/config/brand.config";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-30 grid gap-2" aria-label="Quick contact actions">
      <a
        className="grid size-[50px] place-items-center rounded-full bg-[var(--color-primary)] text-white shadow-[var(--shadow-md)]"
        href={whatsappUrl}
        aria-label="Message clinic on WhatsApp"
      >
        <MessageCircle size={20} />
      </a>
      <a
        className="grid size-[50px] place-items-center rounded-full bg-[var(--color-primary)] text-white shadow-[var(--shadow-md)]"
        href={`tel:${brandConfig.phone}`}
        aria-label="Call clinic"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}
