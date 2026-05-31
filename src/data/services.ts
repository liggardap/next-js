import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "scooter-rental",
    name: "Scooter & Motorcycle Rental",
    description:
      "Explore Bali at your own pace with our well-maintained scooter fleet. From the iconic Honda Scoopy to the powerful Yamaha NMAX, we have the right ride for every journey across the island.",
    icon: "bike",
    features: [
      "Daily, weekly, and monthly rates",
      "Helmets and rain gear included",
      "Mobile phone holder provided",
      "Roadside assistance coverage",
      "Free delivery to your accommodation",
    ],
  },
  {
    id: "car-rental",
    name: "Car Rental",
    description:
      "Comfortable and reliable cars for families, groups, and business travellers. Choose from economy hatchbacks to spacious MPVs, available with self-drive or a professional local driver.",
    icon: "car",
    features: [
      "Economy, SUV, and premium options",
      "Self-drive or driver service",
      "Airport pickup and drop-off",
      "Air-conditioned and well-maintained",
      "GPS navigation available",
    ],
  },
  {
    id: "airport-transfer",
    name: "Airport Transfer",
    description:
      "Start and end your Bali journey stress-free with our reliable airport transfer service. Our drivers monitor flight arrivals to ensure punctual pickups, day or night.",
    icon: "plane",
    features: [
      "Ngurah Rai Airport pickup and drop-off",
      "Flight tracking for on-time arrivals",
      "Meet and greet service",
      "Available 24 hours, 7 days a week",
      "Fixed pricing with no surge charges",
    ],
  },
  {
    id: "driver-service",
    name: "Driver Service",
    description:
      "Hire a knowledgeable local driver for a day or longer. Our drivers know Bali inside out — from hidden temples to the best local warungs — making your trip safer and more enriching.",
    icon: "user",
    features: [
      "English-speaking local drivers",
      "Full-day and half-day packages",
      "Custom itinerary planning",
      "Insider recommendations included",
      "Punctual and professional service",
    ],
  },
  {
    id: "long-term-rental",
    name: "Long-Term Rental",
    description:
      "Designed for digital nomads, remote workers, and expats staying in Bali for a month or more. Enjoy significant monthly discounts, regular maintenance, and dedicated account support.",
    icon: "calendar",
    features: [
      "Discounted monthly rates",
      "Scheduled maintenance included",
      "Vehicle replacement if needed",
      "Dedicated account manager",
      "Flexible extension options",
    ],
  },
];
