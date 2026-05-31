"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface FleetFilterState {
  category: string;
  transmission: string;
  seats: string;
}

interface FleetFiltersProps {
  filters: FleetFilterState;
  onChange: (filters: FleetFilterState) => void;
}

export function FleetFilters({ filters, onChange }: FleetFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Select
        value={filters.category}
        onValueChange={(val) => onChange({ ...filters, category: val as string })}
      >
        <SelectTrigger className="w-44">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="scooter">Scooter</SelectItem>
          <SelectItem value="premium-scooter">Premium Scooter</SelectItem>
          <SelectItem value="economy-car">Economy Car</SelectItem>
          <SelectItem value="suv-mpv">SUV / MPV</SelectItem>
          <SelectItem value="premium-car">Premium Car</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.transmission}
        onValueChange={(val) => onChange({ ...filters, transmission: val as string })}
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Transmission" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Transmissions</SelectItem>
          <SelectItem value="automatic">Automatic</SelectItem>
          <SelectItem value="manual">Manual</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.seats}
        onValueChange={(val) => onChange({ ...filters, seats: val as string })}
      >
        <SelectTrigger className="w-36">
          <SelectValue placeholder="Seats" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Seats</SelectItem>
          <SelectItem value="2">2 seats</SelectItem>
          <SelectItem value="4">4 seats</SelectItem>
          <SelectItem value="5">5 seats</SelectItem>
          <SelectItem value="7">7 seats</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
