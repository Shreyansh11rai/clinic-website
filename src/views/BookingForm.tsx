"use client";

import { useMemo, useState } from "react";
import { submitBooking } from "@/services/booking.service";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { formatDisplayDate } from "@/lib/format";
import type { Service, TimeSlot } from "@/types/content";

type BookingFormProps = {
  services: Service[];
  slots: TimeSlot[];
};

export function BookingForm({ services, slots }: BookingFormProps) {
  const [serviceSlug, setServiceSlug] = useState(services[0]?.slug ?? "");
  const [date, setDate] = useState(slots[0]?.date ?? "");
  const [time, setTime] = useState(slots[0]?.times[0] ?? "");
  const [open, setOpen] = useState(false);

  const activeTimes = useMemo(() => slots.find((slot) => slot.date === date)?.times ?? [], [date, slots]);

  async function handleSubmit(formData: FormData) {
    const payload = {
      serviceSlug,
      date,
      time,
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      notes: String(formData.get("notes") ?? ""),
    };
    await submitBooking(payload);
    setOpen(true);
  }

  return (
    <>
      <form className="bookingForm" action={handleSubmit}>
        <Select label="Service" name="service" value={serviceSlug} onChange={(event) => setServiceSlug(event.target.value)} required>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </Select>
        <div className="slotGrid" aria-label="Available dates">
          {slots.map((slot) => (
            <button
              className={slot.date === date ? "slotButton isActive" : "slotButton"}
              key={slot.date}
              type="button"
              onClick={() => {
                setDate(slot.date);
                setTime(slot.times[0] ?? "");
              }}
            >
              {formatDisplayDate(slot.date)}
            </button>
          ))}
        </div>
        <div className="slotGrid" aria-label="Available times">
          {activeTimes.map((slotTime) => (
            <button className={slotTime === time ? "slotButton isActive" : "slotButton"} key={slotTime} type="button" onClick={() => setTime(slotTime)}>
              {slotTime}
            </button>
          ))}
        </div>
        <div className="formGrid">
          <Input label="Full name" name="name" autoComplete="name" required />
          <Input label="Phone" name="phone" type="tel" autoComplete="tel" required />
          <Input label="Email" name="email" type="email" autoComplete="email" required />
          <Textarea label="Notes" name="notes" rows={4} />
        </div>
        <Button type="submit">Request appointment</Button>
      </form>
      <Modal open={open} title="Appointment request received" onClose={() => setOpen(false)}>
        <p>The booking payload has been logged and this template is ready for a future API submission.</p>
      </Modal>
    </>
  );
}
