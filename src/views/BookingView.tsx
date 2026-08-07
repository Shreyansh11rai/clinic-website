import { Section } from "@/components/layout/Section";
import type { Service, TimeSlot } from "@/types/content";
import { BookingForm } from "./BookingForm";

export function BookingView({ services, slots }: { services: Service[]; slots: TimeSlot[] }) {
  return (
    <Section eyebrow="Booking" title="Choose a service, date, and time" intro="The form builds a typed booking payload today and can submit through the API layer later.">
      <BookingForm services={services} slots={slots} />
    </Section>
  );
}
