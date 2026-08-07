import Link from "next/link";
import { brandConfig } from "@/config/brand.config";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div>
          <Link className="brandMark" href="/">
            <span className="brandIcon">B</span>
            <span>{brandConfig.logoText}</span>
          </Link>
          <p>{brandConfig.tagline}</p>
        </div>
        <div>
          <h2>Visit</h2>
          <p>
            {brandConfig.address.street}
            <br />
            {brandConfig.address.city}, {brandConfig.address.region} {brandConfig.address.postalCode}
          </p>
        </div>
        <div>
          <h2>Hours</h2>
          {brandConfig.hours.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div>
          <h2>Contact</h2>
          <p>
            <a href={`tel:${brandConfig.phone}`}>{brandConfig.phoneDisplay}</a>
            <br />
            <a href={`mailto:${brandConfig.email}`}>{brandConfig.email}</a>
          </p>
        </div>
      </div>
      <div className="container footerBottom">
        <span>© 2026 {brandConfig.legalName}</span>
        <span>Static dental clinic website template</span>
      </div>
    </footer>
  );
}
