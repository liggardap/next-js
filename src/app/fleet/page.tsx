import type { Metadata } from "next";
import { FleetListing } from "@/components/fleet/fleet-listing";
import { vehicles } from "@/data";

export const metadata: Metadata = {
  title: "Our Fleet",
  description: "Browse our full collection of scooters and cars for rent in Sanur, Bali. Transparent pricing, well-maintained vehicles delivered to your door.",
};

export default function FleetPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-(--container-max) px-4">
        <div className="mb-12">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand">
            Our Fleet
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Find Your Perfect Ride
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            From lightweight scooters to spacious family MPVs — all well-maintained, fully insured, and delivered free across Bali.
          </p>
        </div>

        <FleetListing vehicles={vehicles} />
      </div>
    </div>
  );
}
