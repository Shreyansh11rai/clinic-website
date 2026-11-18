export const brandConfig = {
  clinicName: " Dental Clinic",
  legalName: "Doomsphere Dental Clinic LLC",
  tagline: "Modern family dentistry built around calm, clear care.",
  themeKey: "clinicA",
  siteUrl: "https://Doomsphere-dental.example",
  logoText: "Doomsphere",
  phone: "+1-415-555-0138",
  phoneDisplay: "(415) 555-0138",
  email: "care@Doomsphere-dental.example",
  whatsappNumber: "14155550138",
  whatsappMessage:
    "Hi Doomsphere Dental Clinic, I would like to book an appointment.",
  address: {
    street: "218 Market Street",
    city: "San Francisco",
    region: "CA",
    postalCode: "94105",
    country: "US",
  },
  coordinates: {
    latitude: 37.7899,
    longitude: -122.4008,
  },
  hours: ["Monday-Friday 8:00 AM-6:00 PM", "Saturday 9:00 AM-2:00 PM"],
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
};

export const whatsappUrl = `https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
  brandConfig.whatsappMessage,
)}`;
