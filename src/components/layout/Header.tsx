"use client";

import { CalendarDays, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { brandConfig } from "@/config/brand.config";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/shop", label: "Shop" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_92%,transparent)] backdrop-blur-[18px]"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) {
          closeMenu();
          mobileMenuButtonRef.current?.focus();
        }
      }}
    >
      <div className="mx-auto flex min-h-[76px] w-[calc(100%_-_2rem)] max-w-[1180px] items-center justify-between gap-6">
        <Link
          className="flex items-center gap-2 font-extrabold"
          href="/"
          aria-label={`${brandConfig.clinicName} home`}
        >
          <span className="grid size-[34px] place-items-center rounded-[var(--radius-md)] bg-[var(--color-primary)] text-white">
            B
          </span>
          <span>{brandConfig.logoText}</span>
        </Link>
        <nav
          className="flex items-center gap-6 font-[650] text-[var(--color-muted)] max-[1025px]:hidden"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link className="hover:text-[var(--color-primary)]" key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            className="inline-grid size-11 min-h-11 place-items-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-strong)] transition-transform duration-150 hover:-translate-y-px"
            href={`tel:${brandConfig.phone}`}
            aria-label="Call clinic"
          >
            <Phone size={18} />
          </a>
          <Button href="/booking" className="max-[1025px]:hidden">
            <CalendarDays size={18} />
            Book
          </Button>
          <button
            ref={mobileMenuButtonRef}
            className="hidden size-11 min-h-11 place-items-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-strong)] transition-transform duration-150 hover:-translate-y-px max-[1025px]:inline-grid"
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <nav
        className={`mx-auto w-[calc(100%_-_2rem)] max-w-[1180px] ${
          isMenuOpen
            ? "hidden gap-1 border-t border-[var(--color-border)] py-3 pb-4 max-[1025px]:grid"
            : "hidden"
        }`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <Link
            className="min-h-11 px-1 py-[0.65rem] font-semibold text-[var(--color-muted)] hover:text-[var(--color-primary)]"
            key={item.href}
            href={item.href}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
        <Button href="/booking" className="mt-2 justify-self-start" onClick={closeMenu}>
          <CalendarDays size={18} />
          Book an appointment
        </Button>
      </nav>
    </header>
  );
}
