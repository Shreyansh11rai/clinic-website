import { brandConfig } from "@/config/brand.config";

export function dentistJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: brandConfig.clinicName,
    legalName: brandConfig.legalName,
    url: brandConfig.siteUrl,
    telephone: brandConfig.phone,
    email: brandConfig.email,
    image: `${brandConfig.siteUrl}/images/clinic-hero.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: brandConfig.address.street,
      addressLocality: brandConfig.address.city,
      addressRegion: brandConfig.address.region,
      postalCode: brandConfig.address.postalCode,
      addressCountry: brandConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: brandConfig.coordinates.latitude,
      longitude: brandConfig.coordinates.longitude,
    },
    openingHours: brandConfig.hours,
    sameAs: Object.values(brandConfig.socials),
  };
}
