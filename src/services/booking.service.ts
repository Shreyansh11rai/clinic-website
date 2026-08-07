import { createBooking, getSlots } from "@/api/booking.api";
import type { BookingPayload } from "@/types/content";

export async function listSlots() {
  return getSlots();
}

export async function submitBooking(payload: BookingPayload) {
  return createBooking(payload);
}
