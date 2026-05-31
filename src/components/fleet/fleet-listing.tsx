"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { VehicleCard } from "./vehicle-card";
import { FleetFilters, type FleetFilterState } from "./fleet-filters";
import { FilterChips } from "./filter-chips";
import { trackEvent } from "@/lib/analytics";
import type { Vehicle } from "@/lib/types";

const DEFAULT_FILTERS: FleetFilterState = {
  category: "all",
  transmission: "all",
  seats: "all",
};

export function FleetListing({ vehicles }: { vehicles: Vehicle[] }) {
  const [filters, setFilters] = useState<FleetFilterState>(DEFAULT_FILTERS);

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      if (filters.category !== "all" && v.category !== filters.category) return false;
      if (filters.transmission !== "all" && v.transmission !== filters.transmission) return false;
      if (filters.seats !== "all" && v.seats !== Number(filters.seats)) return false;
      return true;
    });
  }, [vehicles, filters]);

  const handleChange = (next: FleetFilterState) => {
    setFilters(next);
    trackEvent("fleet_filter", { category: next.category, transmission: next.transmission, seats: next.seats });
  };

  const hasActiveFilters = Object.values(filters).some((v) => v !== "all");

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <SlidersHorizontal className="h-4 w-4" />
          <span>{filtered.length} vehicle{filtered.length !== 1 ? "s" : ""} found</span>
        </div>
        <FleetFilters filters={filters} onChange={handleChange} />
      </div>

      <FilterChips filters={filters} onChange={handleChange} />

      {filtered.length === 0 ? (
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-muted-foreground">No vehicles match your filters.</p>
          <button
            onClick={() => handleChange(DEFAULT_FILTERS)}
            className="text-sm text-brand underline underline-offset-2 hover:text-brand/80"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <motion.div
          layout
          className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((vehicle, i) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
              >
                <VehicleCard vehicle={vehicle} priority={i < 3} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {hasActiveFilters && filtered.length > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => handleChange(DEFAULT_FILTERS)}
            className="text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground"
          >
            Show all vehicles
          </button>
        </div>
      )}
    </div>
  );
}
