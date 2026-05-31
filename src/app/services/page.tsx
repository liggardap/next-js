import type { Metadata } from "next";
import { ServiceCard } from "@/components/services/service-card";
import { services } from "@/data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Sanur Ride Co.'s full range of vehicle rental services — scooters, cars, airport transfers, driver hire, and long-term rentals in Bali.",
};

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-(--container-max) px-4">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand">
            What We Offer
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Rental Services for Every Journey
          </h1>
          <p className="mt-3 text-muted-foreground">
            From a quick scooter hire to a month-long car rental — we have you covered across
            all of Bali.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
