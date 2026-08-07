"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import type { Faq } from "@/types/content";

export function FaqsView({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section eyebrow="FAQs" title="Clear answers before the visit">
      <div className="faqList">
        {faqs.map((faq, index) => (
          <div className="faqItem" key={faq.question}>
            <button type="button" onClick={() => setOpenIndex(openIndex === index ? -1 : index)} aria-expanded={openIndex === index}>
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            <div className="faqAnswer" hidden={openIndex !== index}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
