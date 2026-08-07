import { httpGet } from "@/api/http/httpClient";
import { localDatabase } from "@/database/localDatabase";
import type { BookingPayload, TimeSlot } from "@/types/content";

export function getSlots(): Promise<TimeSlot[]> {
  return httpGet("/slots", () => localDatabase.slots);
}

export async function createBooking(payload: BookingPayload): Promise<{ ok: true; payload: BookingPayload }> {
  console.log("Booking payload", payload);
  return { ok: true, payload };
}
