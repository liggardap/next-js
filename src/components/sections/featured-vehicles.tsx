"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { vehicles } from "@/data";

function formatIDR(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

const categoryLabel: Record<string, string> = {
  scooter: "Scooter",
  "premium-scooter": "Premium Scooter",
  "economy-car": "Economy Car",
  "suv-mpv": "SUV / MPV",
};

export function FeaturedVehiclesSection() {
  const featured = vehicles.filter((v) => v.isFeatured);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-(--container-max) px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-brand">
            Popular Picks
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Featured Vehicles
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((vehicle, i) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-xl border border-border/40 bg-card overflow-hidden transition-colors hover:border-brand/30"
            >
              <div className="relative aspect-[4/3] bg-muted/20 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  priority={i === 0}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-5">
                <span className="mb-1 inline-block text-xs font-medium text-brand">
                  {categoryLabel[vehicle.category] ?? vehicle.category}
                </span>
                <h3 className="mb-3 font-semibold text-foreground">{vehicle.name}</h3>

                <div className="mb-4 flex gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {vehicle.seats} seats
                  </span>
                  <span className="flex items-center gap-1">
                    <Fuel className="h-3 w-3" />
                    {vehicle.transmission}
                  </span>
                </div>

                <p className="mb-4 text-sm font-semibold text-foreground">
                  {formatIDR(vehicle.dailyPrice)}
                  <span className="ml-1 text-xs font-normal text-muted-foreground">/ day</span>
                </p>

                <WhatsAppButton variant="default" vehicleName={vehicle.name} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button render={<Link href="/fleet" />} nativeButton={false} variant="outline">
            Browse Full Fleet
          </Button>
        </div>
      </div>
    </section>
  );
}
