"use client";

import { IconX } from "@tabler/icons-react";
import type { FleetFilterState } from "./fleet-filters";

const labels: Record<string, Record<string, string>> = {
  category: {
    scooter: "Scooter",
    "premium-scooter": "Premium Scooter",
    "economy-car": "Economy Car",
    "suv-mpv": "SUV / MPV",
    "premium-car": "Premium Car",
  },
  transmission: {
    automatic: "Automatic",
    manual: "Manual",
  },
  seats: {
    "2": "2 seats",
    "4": "4 seats",
    "5": "5 seats",
    "7": "7 seats",
  },
};

interface FilterChipsProps {
  filters: FleetFilterState;
  onChange: (filters: FleetFilterState) => void;
}

export function FilterChips({ filters, onChange }: FilterChipsProps) {
  const active = Object.entries(filters).filter(([, v]) => v !== "all" && v !== "");

  if (active.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {active.map(([key, value]) => (
        <span
          key={key}
          className="flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand"
        >
          {labels[key]?.[value] ?? value}
          <button
            onClick={() => onChange({ ...filters, [key]: "all" })}
            aria-label={`Remove ${key} filter`}
            className="rounded-full hover:text-foreground"
          >
            <IconX className="h-3 w-3" />
          </button>
        </span>
      ))}
      <button
        onClick={() => onChange({ category: "all", transmission: "all", seats: "all" })}
        className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
      >
        Clear all
      </button>
    </div>
  );
}
