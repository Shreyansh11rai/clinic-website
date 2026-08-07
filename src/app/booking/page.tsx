import { BookingView } from "@/views/BookingView";
import { buildMetadata } from "@/config/seo.config";
import { listSlots } from "@/services/booking.service";
import { listServices } from "@/services/services.service";

export function generateMetadata() {
  return buildMetadata("/booking");
}

export default async function BookingPage() {
  const [services, slots] = await Promise.all([listServices(), listSlots()]);
  return <BookingView services={services} slots={slots} />;
}
