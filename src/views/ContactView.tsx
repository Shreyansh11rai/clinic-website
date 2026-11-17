import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { brandConfig, whatsappUrl } from "@/config/brand.config";

export function ContactView() {
  return (
    <Section eyebrow="Contact" title="Talk to the clinic team" intro="Direct call, WhatsApp, email, and form paths are ready for each tenant clinic.">
      <div className="grid grid-cols-2 items-center gap-[clamp(2rem,5vw,4.5rem)] max-[769px]:grid-cols-1">
        <div className="grid gap-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)]">
          <a className="flex items-center gap-3 text-[var(--color-text)]" href={`tel:${brandConfig.phone}`}>
            <Phone size={20} />
            {brandConfig.phoneDisplay}
          </a>
          <a className="flex items-center gap-3 text-[var(--color-text)]" href={whatsappUrl}>
            <MessageCircle size={20} />
            WhatsApp chat
          </a>
          <a className="flex items-center gap-3 text-[var(--color-text)]" href={`mailto:${brandConfig.email}`}>
            <Mail size={20} />
            {brandConfig.email}
          </a>
          <p className="flex items-center gap-3 text-[var(--color-text)]">
            <MapPin size={20} />
            {brandConfig.address.street}, {brandConfig.address.city}, {brandConfig.address.region}
          </p>
        </div>
        <form className="grid gap-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)]">
          <Input label="Name" name="name" required />
          <Input label="Email" name="email" type="email" required />
          <Textarea label="How can we help?" name="message" rows={5} required />
          <Button type="submit">Send message</Button>
        </form>
      </div>
    </Section>
  );
}
