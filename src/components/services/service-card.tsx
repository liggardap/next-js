"use client";

import { motion } from "framer-motion";
import {
  IconMotorbike,
  IconCar,
  IconPlane,
  IconUser,
  IconCalendar,
  IconCheck,
  type TablerIcon,
} from "@tabler/icons-react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import type { Service } from "@/lib/types";

const iconMap: Record<string, TablerIcon> = {
  bike: IconMotorbike,
  car: IconCar,
  plane: IconPlane,
  user: IconUser,
  calendar: IconCalendar,
};

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = iconMap[service.icon] ?? IconCar;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="flex flex-col rounded-xl border border-border/40 bg-card p-6 transition-colors hover:border-brand/30"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
        <Icon className="h-6 w-6 text-brand" />
      </div>

      <h3 className="mb-3 text-lg font-semibold text-foreground">{service.name}</h3>
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

      <ul className="mb-6 flex-1 space-y-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
            <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            {f}
          </li>
        ))}
      </ul>

      <WhatsAppButton className="w-full justify-center" />
    </motion.div>
  );
}
