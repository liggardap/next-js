import { companyInfo } from "@/data";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyInfo.name,
    description:
      "Reliable scooter and car rentals in Sanur, Bali. Transparent pricing, well-maintained fleet, and friendly local support.",
    url: "https://www.liggar.site",
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Danau Tamblingan No. 88",
      addressLocality: "Sanur",
      addressRegion: "Bali",
      postalCode: "80228",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -8.7024,
      longitude: 115.2625,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    priceRange: "IDR",
    currenciesAccepted: "IDR",
    paymentAccepted: "Cash, Bank Transfer",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
