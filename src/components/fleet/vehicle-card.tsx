"use client";

import Image from "next/image";
import { Users, Fuel, Check } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import type { Vehicle } from "@/lib/types";

const categoryLabel: Record<string, string> = {
  scooter: "Scooter",
  "premium-scooter": "Premium Scooter",
  "economy-car": "Economy Car",
  "suv-mpv": "SUV / MPV",
  "premium-car": "Premium Car",
};

function formatIDR(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function VehicleCard({ vehicle, priority = false }: { vehicle: Vehicle; priority?: boolean }) {
  return (
    <div className="group flex flex-col rounded-xl border border-border/40 bg-card overflow-hidden transition-colors hover:border-brand/30">
      <div className="relative aspect-[4/3] bg-white overflow-hidden">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          priority={priority}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-1 text-xs font-medium text-brand">
          {categoryLabel[vehicle.category] ?? vehicle.category}
        </span>
        <h3 className="mb-2 font-semibold text-foreground">{vehicle.name}</h3>
        <p className="mb-4 text-xs leading-relaxed text-muted-foreground line-clamp-2">
          {vehicle.description}
        </p>

        <div className="mb-4 flex gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {vehicle.seats} seats
          </span>
          <span className="flex items-center gap-1">
            <Fuel className="h-3 w-3" />
            {vehicle.transmission}
          </span>
        </div>

        <ul className="mb-4 space-y-1">
          {vehicle.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
              <Check className="h-3 w-3 shrink-0 text-brand" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-2 border-t border-border/30 pt-4">
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-muted-foreground">Daily</span>
            <span className="font-semibold text-foreground">{formatIDR(vehicle.dailyPrice)}</span>
          </div>
          {vehicle.weeklyPrice && (
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-muted-foreground">Weekly</span>
              <span className="text-sm text-foreground">{formatIDR(vehicle.weeklyPrice)}</span>
            </div>
          )}
          {vehicle.monthlyPrice && (
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-muted-foreground">Monthly</span>
              <span className="text-sm text-foreground">{formatIDR(vehicle.monthlyPrice)}</span>
            </div>
          )}
        </div>

        <div className="mt-4">
          <WhatsAppButton vehicleName={vehicle.name} className="w-full justify-center" />
        </div>
      </div>
    </div>
  );
}
