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
      <form
        className="grid gap-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)]"
        action={handleSubmit}
      >
        <Select label="Service" name="service" value={serviceSlug} onChange={(event) => setServiceSlug(event.target.value)} required>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </Select>
        <div className="flex flex-wrap gap-2" aria-label="Available dates">
          {slots.map((slot) => (
            <button
              className={`rounded-full border px-[0.95rem] py-[0.7rem] text-[var(--color-text)] ${
                slot.date === date
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                  : "border-[var(--color-border)] bg-[var(--color-surface)]"
              }`}
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
        <div className="flex flex-wrap gap-2" aria-label="Available times">
          {activeTimes.map((slotTime) => (
            <button
              className={`rounded-full border px-[0.95rem] py-[0.7rem] text-[var(--color-text)] ${
                slotTime === time
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                  : "border-[var(--color-border)] bg-[var(--color-surface)]"
              }`}
              key={slotTime}
              type="button"
              onClick={() => setTime(slotTime)}
            >
              {slotTime}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 max-[769px]:grid-cols-1">
          <Input label="Full name" name="name" autoComplete="name" required />
          <Input label="Phone" name="phone" type="tel" autoComplete="tel" required />
          <Input label="Email" name="email" type="email" autoComplete="email" required />
          <Textarea label="Notes" name="notes" rows={4} />
        </div>
        <Button type="submit">Request appointment</Button>
      </form>
      <Modal open={open} title="Appointment request received" onClose={() => setOpen(false)}>
        <p className="text-[var(--color-muted)]">
          The booking payload has been logged and this template is ready for a future API submission.
        </p>
      </Modal>
    </>
  );
}
