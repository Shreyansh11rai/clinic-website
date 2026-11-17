"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import type { Faq } from "@/types/content";

export function FaqsView({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section eyebrow="FAQs" title="Clear answers before the visit">
      <div className="grid gap-4">
        {faqs.map((faq, index) => (
          <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]" key={faq.question}>
            <button
              className="flex min-h-11 w-full items-center justify-between border-0 bg-transparent p-5 text-left font-extrabold text-[var(--color-text)]"
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            <div className="px-5 pb-5 text-[var(--color-muted)]" hidden={openIndex !== index}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
