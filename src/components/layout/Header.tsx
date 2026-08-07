import { CalendarDays, Menu, Phone } from "lucide-react";
import Link from "next/link";
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
  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link className="brandMark" href="/" aria-label={`${brandConfig.clinicName} home`}>
          <span className="brandIcon">B</span>
          <span>{brandConfig.logoText}</span>
        </Link>
        <nav className="desktopNav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="headerActions">
          <a className="iconButton" href={`tel:${brandConfig.phone}`} aria-label="Call clinic">
            <Phone size={18} />
          </a>
          <Button href="/booking" className="headerBooking">
            <CalendarDays size={18} />
            Book
          </Button>
          <button className="iconButton mobileMenuButton" type="button" aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
