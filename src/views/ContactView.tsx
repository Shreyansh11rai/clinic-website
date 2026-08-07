import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { brandConfig, whatsappUrl } from "@/config/brand.config";

export function ContactView() {
  return (
    <Section eyebrow="Contact" title="Talk to the clinic team" intro="Direct call, WhatsApp, email, and form paths are ready for each tenant clinic.">
      <div className="contactGrid">
        <div className="contactPanel">
          <a href={`tel:${brandConfig.phone}`}>
            <Phone size={20} />
            {brandConfig.phoneDisplay}
          </a>
          <a href={whatsappUrl}>
            <MessageCircle size={20} />
            WhatsApp chat
          </a>
          <a href={`mailto:${brandConfig.email}`}>
            <Mail size={20} />
            {brandConfig.email}
          </a>
          <p>
            <MapPin size={20} />
            {brandConfig.address.street}, {brandConfig.address.city}, {brandConfig.address.region}
          </p>
        </div>
        <form className="contactForm">
          <Input label="Name" name="name" required />
          <Input label="Email" name="email" type="email" required />
          <Textarea label="How can we help?" name="message" rows={5} required />
          <Button type="submit">Send message</Button>
        </form>
      </div>
    </Section>
  );
}
