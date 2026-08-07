import type { Product } from "@/types/content";

export const shopData: Product[] = [
  {
    slug: "sonic-care-kit",
    title: "Sonic Care Kit",
    summary: "A rechargeable brush, travel case, and soft replacement heads for daily plaque control.",
    price: 89,
    image: { src: "/images/product-brush.svg", alt: "Sonic toothbrush kit" },
    includes: ["Rechargeable handle", "Two soft heads", "Travel case"],
  },
  {
    slug: "sensitivity-rinse",
    title: "Sensitivity Rinse",
    summary: "Alcohol-free rinse for patients managing cold sensitivity after whitening or recession.",
    price: 18,
    image: { src: "/images/product-rinse.svg", alt: "Sensitivity mouth rinse" },
    includes: ["Alcohol-free formula", "Mint finish", "Two-week support plan"],
  },
  {
    slug: "night-guard-case",
    title: "Night Guard Care Case",
    summary: "Ventilated case and cleaning tablets for keeping retainers and night guards fresh.",
    price: 24,
    image: { src: "/images/product-case.svg", alt: "Night guard care case" },
    includes: ["Ventilated case", "Cleaning tablets", "Care card"],
  },
];
