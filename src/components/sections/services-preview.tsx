"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconMotorbike,
  IconCar,
  IconPlane,
  IconUser,
  IconCalendar,
  type TablerIcon,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data";

const iconMap: Record<string, TablerIcon> = {
  bike: IconMotorbike,
  car: IconCar,
  plane: IconPlane,
  user: IconUser,
  calendar: IconCalendar,
};

export function ServicePreviewSection() {
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
            What We Offer
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Rental Services for Every Journey
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? IconCar;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-xl border border-border/40 bg-card p-6 transition-colors hover:border-brand/30"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{service.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-brand" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button render={<Link href="/services" />} nativeButton={false} variant="outline">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
