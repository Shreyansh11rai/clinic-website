import Link from "next/link";
import { brandConfig } from "@/config/brand.config";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary-strong)] py-16 pb-6 text-white">
      <div className="mx-auto grid w-[calc(100%_-_2rem)] max-w-[1180px] grid-cols-[1.4fr_1fr_1fr_1fr] items-start gap-[clamp(2rem,5vw,4.5rem)] max-[1025px]:grid-cols-2 max-[769px]:grid-cols-1">
        <div>
          <Link className="flex items-center gap-2 font-extrabold" href="/">
            <span className="grid size-[34px] place-items-center rounded-[var(--radius-md)] bg-[var(--color-primary)] text-white">
              B
            </span>
            <span>{brandConfig.logoText}</span>
          </Link>
          <p className="text-white/75">{brandConfig.tagline}</p>
        </div>
        <div>
          <h2 className="mb-3 text-base">Visit</h2>
          <p className="text-white/75">
            {brandConfig.address.street}
            <br />
            {brandConfig.address.city}, {brandConfig.address.region} {brandConfig.address.postalCode}
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-base">Hours</h2>
          {brandConfig.hours.map((line) => (
            <p className="text-white/75" key={line}>{line}</p>
          ))}
        </div>
        <div>
          <h2 className="mb-3 text-base">Contact</h2>
          <p className="text-white/75">
            <a href={`tel:${brandConfig.phone}`}>{brandConfig.phoneDisplay}</a>
            <br />
            <a href={`mailto:${brandConfig.email}`}>{brandConfig.email}</a>
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex w-[calc(100%_-_2rem)] max-w-[1180px] justify-between gap-4 border-t border-white/20 pt-5 text-white/75 max-[769px]:flex-col">
        <span>© 2026 {brandConfig.legalName}</span>
        <span>Static dental clinic website template</span>
      </div>
    </footer>
  );
}
